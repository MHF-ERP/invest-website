// store.ts
import create from "zustand";

interface StoreState {
  stocks: any;
  market: string;
  setMarket: (data: string) => void;
  setStocks: (data: any) => void;
}

export const stocksStore = create<StoreState>((set) => ({
  stocks: null,
  market: "SAU",
  setMarket: (data) => set((state) => ({ market: data })),
  setStocks: (data) => set((state) => ({ ...state, stocks: data })),
}));
