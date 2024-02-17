// store.ts
import create from "zustand";

interface StoreState {
  stocks: any;
  setStocks: (data: any) => void;
}

export const stocksStore = create<StoreState>((set) => ({
  stocks: null,
  setStocks: (data) => set((state) => ({ ...state, stocks: data })),
}));
