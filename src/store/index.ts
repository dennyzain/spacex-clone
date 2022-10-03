import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface GlobalStateTypes {
  isNav: boolean;
  setIsNav: (bool: boolean) => void;
}

const useGlobalStore = create<GlobalStateTypes>()(
  devtools(
    persist(
      (set) => ({
        isNav: false,
        setIsNav: (bool) => set(() => ({ isNav: bool })),
      }),
      {
        name: 'bear-storage',
      }
    )
  )
);

export default useGlobalStore;
