// store.ts
import create from "zustand";

interface StoreState {
  tap: number;
  shape: boolean;
  updateSahpe: () => void;
  setTap: (now: number) => void;
  increment: () => void;
  decrement: () => void;
}

const WatchStore = create<StoreState>((set) => ({
  tap: 0,
  shape: true,
  updateSahpe: () => set((state) => ({ shape: !state.shape })),
  increment: () => set((state) => ({ tap: state.tap + 1 })),
  setTap: (now) => set(() => ({ tap: now })),
  decrement: () => set((state) => ({ tap: state.tap - 1 })),
}));

export default WatchStore;
