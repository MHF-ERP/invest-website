// store.ts
import create from "zustand";

interface StoreState {
  count: number;
  setCount: (now: number) => void;
  increment: () => void;
  decrement: () => void;
}

export const process = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  setCount: (now) => set(() => ({ count: now })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
