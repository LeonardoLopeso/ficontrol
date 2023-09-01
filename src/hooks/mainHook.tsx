import React, { useState } from 'react';

// Hook personalizado para configurar um estado
export function useStateHook<T>(initialValue: T) {
  const [state, setState] = useState<T>(initialValue);

  const updateState = (newValue: T) => {
    setState(newValue);
  };

  return [state, updateState] as const;
}
