// src/context/TaskContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  // Estado listas: array de { id, name, tasks: [...] }
  const [lists, setLists] = useState(() => {
    const stored = localStorage.getItem('lists');
    return stored ? JSON.parse(stored) : [
      {
        id: 1,
        name: 'Default List',
        tasks: [
          { id: 1, text: "Check necklaces inventory", priority: "High", completed: true },
          { id: 2, text: "Pack personalized orders", priority: "Medium", completed: false },
          { id: 3, text: "Program Instagram content", priority: "Low", completed: true },
        ]
      }
    ];
  });

  const [activeListId, setActiveListId] = useState(() => {
    const stored = localStorage.getItem('activeListId');
    return stored ? JSON.parse(stored) : lists[0].id;
  });

  const [showCompleted, setShowCompleted] = useState(() => {
    const stored = localStorage.getItem('showCompleted');
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  useEffect(() => {
    localStorage.setItem('activeListId', JSON.stringify(activeListId));
  }, [activeListId]);

  useEffect(() => {
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted));
  }, [showCompleted]);

  const addList = (name) => {
    const newList = {
      id: Date.now(),
      name,
      tasks: [],
    };
    setLists(prev => [...prev, newList]);
    setActiveListId(newList.id);
  };

  const removeList = (id) => {
    setLists(prev => prev.filter(list => list.id !== id));
    if (id === activeListId) {
      if (lists.length > 1) {
        const otherList = lists.find(list => list.id !== id);
        setActiveListId(otherList.id);
      } else {
        setActiveListId(null);
      }
    }
  };

  const addTask = (text, priority) => {
    setLists(prev =>
      prev.map(list => {
        if (list.id === activeListId) {
          const newTask = {
            id: Date.now(),
            text,
            priority,
            completed: false,
          };
          return { ...list, tasks: [...list.tasks, newTask] };
        }
        return list;
      })
    );
  };

  const removeTask = (taskId) => {
    setLists(prev =>
      prev.map(list => {
        if (list.id === activeListId) {
          return { ...list, tasks: list.tasks.filter(task => task.id !== taskId) };
        }
        return list;
      })
    );
  };

  const toggleComplete = (taskId) => {
    setLists(prev =>
      prev.map(list => {
        if (list.id === activeListId) {
          return {
            ...list,
            tasks: list.tasks.map(task =>
              task.id === taskId ? { ...task, completed: !task.completed } : task
            )
          };
        }
        return list;
      })
    );
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
