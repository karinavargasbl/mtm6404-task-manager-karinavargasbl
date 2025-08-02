import React, { createContext, useState, useEffect, useRef } from 'react';
import {
  collection,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [lists, setLists] = useState([]);
  const [activeListId, setActiveListId] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);

  // Ref para controlar actualización y evitar loops
  const showCompletedFromFirestore = useRef(false);
  const updatingShowCompleted = useRef(false);

  // Listener general para listas (sin showCompleted)
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "lists"), (snapshot) => {
      const loadedLists = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          tasks: data.tasks || [],
        };
      });

      setLists(loadedLists);

      if (!activeListId && loadedLists.length > 0) {
        setActiveListId(loadedLists[0].id);
      }
    });

    return () => unsubscribe();
  }, [activeListId]);

  // Listener para showCompleted del documento activo
  useEffect(() => {
    if (!activeListId) return;

    const listDocRef = doc(db, "lists", activeListId);
    const unsubscribe = onSnapshot(listDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        if (typeof data.showCompleted === "boolean") {
          // Solo actualiza si el valor de Firestore difiere del local para evitar renderizado infinito
          if (data.showCompleted !== showCompletedFromFirestore.current) {
            showCompletedFromFirestore.current = data.showCompleted;
            // Solo actualiza el estado local si es diferente para evitar loops
            setShowCompleted(data.showCompleted);
          }
        } else {
          showCompletedFromFirestore.current = false;
          setShowCompleted(false);
        }
      }
    });

    return () => unsubscribe();
  }, [activeListId]);

  // Cuando showCompleted cambia localmente, actualiza Firestore (pero evita loops)
  useEffect(() => {
    // Si el cambio fue disparado desde Firestore, no actualizar (evita loops)
    if (showCompleted === showCompletedFromFirestore.current) {
      return;
    }

    const updateShowCompletedInFirestore = async () => {
      if (!activeListId) return;
      updatingShowCompleted.current = true;
      try {
        const listDocRef = doc(db, "lists", activeListId);
        await updateDoc(listDocRef, { showCompleted });
        showCompletedFromFirestore.current = showCompleted;
      } catch (error) {
        console.error("Error updating showCompleted:", error);
      } finally {
        updatingShowCompleted.current = false;
      }
    };

    updateShowCompletedInFirestore();
  }, [showCompleted, activeListId]);

  // Resto de funciones: addList, removeList, addTask, removeTask, toggleComplete
  // Igual que antes, excepto que addList ahora crea showCompleted: false

  const addList = async (name) => {
    try {
      const newListId = Date.now().toString();

      const newList = {
        name,
        tasks: [],
        showCompleted: false,
      };

      await setDoc(doc(db, "lists", newListId), newList);
      setActiveListId(newListId);
    } catch (error) {
      console.error("Error adding list:", error);
    }
  };

  const removeList = async (id) => {
    try {
      await deleteDoc(doc(db, "lists", id));
      if (id === activeListId) {
        if (lists.length > 1) {
          const otherList = lists.find(list => list.id !== id);
          if (otherList) setActiveListId(otherList.id);
        } else {
          setActiveListId(null);
        }
      }
    } catch (error) {
      console.error("Error removing list:", error);
    }
  };

  const addTask = async (text, priority) => {
    try {
      if (!activeListId) return;
      const listDocRef = doc(db, "lists", activeListId);
      const list = lists.find(l => l.id === activeListId);
      if (!list) return;

      const newTask = {
        id: Date.now().toString(),
        text,
        priority,
        completed: false,
      };
      const updatedTasks = [...(list.tasks || []), newTask];
      await updateDoc(listDocRef, { tasks: updatedTasks });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const removeTask = async (taskId) => {
    try {
      if (!activeListId) return;
      const listDocRef = doc(db, "lists", activeListId);
      const list = lists.find(l => l.id === activeListId);
      if (!list) return;

      const updatedTasks = list.tasks.filter(task => task.id !== taskId);
      await updateDoc(listDocRef, { tasks: updatedTasks });
    } catch (error) {
      console.error("Error removing task:", error);
    }
  };

  const toggleComplete = async (taskId) => {
    try {
      if (!activeListId) return;
      const listDocRef = doc(db, "lists", activeListId);
      const list = lists.find(l => l.id === activeListId);
      if (!list) return;

      const updatedTasks = list.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      await updateDoc(listDocRef, { tasks: updatedTasks });
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };

  const activeList = lists.find(list => list.id === activeListId);

  return (
    <TaskContext.Provider value={{
      lists,
      activeList,
      activeListId,
      setActiveListId,
      addList,
      removeList,
      addTask,
      removeTask,
      toggleComplete,
      showCompleted,
      setShowCompleted,
    }}>
      {children}
    </TaskContext.Provider>
  );
}
