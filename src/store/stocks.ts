// store.ts
import create from "zustand";
interface StoreState {
  stocks: any;
  allStocks: any;
  DataUp: any;
  DataDown: any;
  data2: any;
  originData: any;
  setDataUp: (data: any) => void;
  setDataDown: (data: any) => void;
  setData: (data: string) => void;
  setOriginData: (data: any) => void;
  market: string;
  setMarket: (data: string) => void;
  setStocks: (data: any) => void;
  setAllStocks: (data: any) => void;
}

export const stocksStore = create<StoreState>((set) => ({
  stocks: null,
  DataUp: null,
  DataDown: null,
  allStocks: null,

  data2: null,
  originData: null,
  market: "SAU",
  setMarket: (data) => set((state) => ({ market: data })),
  setStocks: (data) => set((state) => ({ ...state, stocks: data })),
  setDataUp: (data) => set((state) => ({ ...state, DataUp: data })),
  setData: (data) => set((state) => ({ ...state, data2: data })),
  setOriginData: (data) => set((state) => ({ ...state, originData: data })),
  setDataDown: (data) => set((state) => ({ ...state, DataDown: data })),
  setAllStocks: (data) => set((state) => ({ ...state, allStocks: data })),
}));
