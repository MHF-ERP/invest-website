// store.ts
import create from "zustand";

interface StoreState {
  tap: number;
  shape: boolean;
  data: Array<{ id: string; name: string; userId: string; Stocks: any[] }>;
  updateData: (
    e: Array<{ id: string; name: string; userId: string; Stocks: any[] }> | []
  ) => void;
  overlay: number;
  updateSahpe: () => void;
  updateOverlay: (now: number) => void;

  setTap: (now: number) => void;
  increment: () => void;
  decrement: () => void;
}

const WatchStore = create<StoreState>((set) => ({
  tap: 0,
  shape: true,
  data: [],
  overlay: 0,
  updateData: (e) => set(() => ({ data: e })),
  updateOverlay: (now: number) => set(() => ({ overlay: now })),
  updateSahpe: () => set((state) => ({ shape: !state.shape })),
  increment: () => set((state) => ({ tap: state.tap + 1 })),
  setTap: (now) => set(() => ({ tap: now })),
  decrement: () => set((state) => ({ tap: state.tap - 1 })),
}));

export default WatchStore;
