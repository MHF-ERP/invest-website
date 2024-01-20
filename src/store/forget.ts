// store.ts
import create from "zustand";

interface StoreState {
  count: number;
  setCount: (now: number) => void;
  increment: () => void;
  decrement: () => void;
  email: string;
  updateEmail: (text: string) => void;
}

const forgetStore = create<StoreState>((set) => ({
  email: "",
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  setCount: (now) => set(() => ({ count: now })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  updateEmail: (text) => set((state) => ({ ...state, email: text })),
}));

export default forgetStore;
