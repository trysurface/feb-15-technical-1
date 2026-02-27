'use client';

import { useState, useCallback } from 'react';

export const useToast = () => {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  }, []);

  return { message, showToast };
};

interface ToastProps {
  message: string | null;
}

export const Toast = ({ message }: ToastProps) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg text-sm z-50">
      {message}
    </div>
  );
};
