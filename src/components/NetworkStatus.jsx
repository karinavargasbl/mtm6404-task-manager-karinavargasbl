import React, { useState, useEffect } from 'react';

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '0.18rem 0',
      fontSize: '0.75rem',
      textAlign: 'center',
      backgroundColor: isOnline ? '#4caf50' : '#f44336',
      color: 'white',
      fontWeight: 'bold',
      zIndex: 9999
    }}>
      {isOnline ? '🟢 You are online' : '🔴 You are offline — changes will sync when you reconnect'}
    </div>
  );
}

export default NetworkStatus;

