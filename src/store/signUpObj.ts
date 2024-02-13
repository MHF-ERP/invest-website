// store.ts
import create from "zustand";

interface StoreState {
  email: string;
  token: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  city: string;
  img: string;
  nationalId: string;
  updateEmail: (text: string) => void;
  updateToken: (text: string) => void;
  updateFirstName: (text: string) => void;
  updateLastName: (text: string) => void;
  updatePhone: (text: string) => void;
  updateCountry: (text: string) => void;
  updateCity: (text: string) => void;
  updateImg: (text: string) => void;
  updateNationalId: (text: string) => void;
}

export const signUpObj = create<StoreState>((set) => ({
  email: "",
  token: "",
  firstName: "",
  lastName: "",
  phone: "",
  country: "Select a Country",
  city: "Select a City",
  img: "",
  nationalId: "",
  updateEmail: (text) => set((state) => ({ ...state, email: text })),
  updateToken: (text) => set((state) => ({ ...state, token: text })),
  updateFirstName: (text) => set((state) => ({ ...state, firstName: text })),
  updateLastName: (text) => set((state) => ({ ...state, lastName: text })),
  updatePhone: (text) => set((state) => ({ ...state, phone: text })),
  updateCountry: (text) => set((state) => ({ ...state, country: text })),
  updateCity: (text) => set((state) => ({ ...state, city: text })),
  updateImg: (text) => set((state) => ({ ...state, img: text })),
  updateNationalId: (text) => set((state) => ({ ...state, nationalId: text })),
}));
