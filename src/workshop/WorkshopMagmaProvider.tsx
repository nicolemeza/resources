import type { ReactNode } from 'react';
import { GlobalStyles, ThemeContext, magma } from 'react-magma-dom';

interface WorkshopMagmaProviderProps {
  children: ReactNode;
}

export function WorkshopMagmaProvider({ children }: WorkshopMagmaProviderProps) {
  return (
    <ThemeContext.Provider value={magma}>
      <GlobalStyles />
      {children}
    </ThemeContext.Provider>
  );
}
