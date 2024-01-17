import create from "zustand";

interface StoreState {
  name: string;
  setName: (e: string) => void;
}

const userStore = create<StoreState>((set) => ({
  name: "",
  setName: (text: string) => set(() => ({ name: text })),
}));

export default userStore;
