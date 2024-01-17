// store.ts
import create from "zustand";

interface StoreState {
  email: string;
  token: string;
  updateEmail: (text: string) => void;
  updateToken: (text: string) => void;
}

const signUpObj = create<StoreState>((set) => ({
  email: "",
  token: "",
  updateEmail: (text) => set((state) => ({ ...state, email: text })),
  updateToken: (text) => set((state) => ({ ...state, token: text })),
}));

export default signUpObj;
