import { create } from "zustand";

interface ResponsiveStore {
  navbarCollapsed: boolean;
  togglenavbarCollapsed: () => void;
}

export const useResponsiveStore = create<ResponsiveStore>((set) => ({
  navbarCollapsed: false, 
  togglenavbarCollapsed: () => 
    set((state) => ({ 
      navbarCollapsed: !state.navbarCollapsed 
    })),
}));