// store.ts
import create from "zustand";

interface StoreState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  city: string;
  notionl: boolean;
  passport: boolean;
  img: string;
  nationalId: string;
  pin: string;
  updateEmail: (text: string) => void;
  updatePassword: (text: string) => void;
  updateFirstName: (text: string) => void;
  updateLastName: (text: string) => void;
  updatePhone: (text: string) => void;
  updateCountry: (text: string) => void;
  updateCity: (text: string) => void;
  updateNotional: (value: boolean) => void;
  updatePassport: (value: boolean) => void;
  updateImg: (text: string) => void;
  updateNationalId: (text: string) => void;
  updatePin: (text: string) => void;
}

const signUpObj = create<StoreState>((set) => ({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phone: "",
  country: "",
  city: "",
  notionl: false,
  passport: false,
  img: "",
  nationalId: "",
  pin: "",
  updateEmail: (text) => set((state) => ({ ...state, email: text })),
  updatePassword: (text) => set((state) => ({ ...state, password: text })),
  updateFirstName: (text) => set((state) => ({ ...state, firstName: text })),
  updateLastName: (text) => set((state) => ({ ...state, lastName: text })),
  updatePhone: (text) => set((state) => ({ ...state, phone: text })),
  updateCountry: (text) => set((state) => ({ ...state, country: text })),
  updateCity: (text) => set((state) => ({ ...state, city: text })),
  updateNotional: (value) => set((state) => ({ ...state, notionl: value })),
  updatePassport: (value) => set((state) => ({ ...state, passport: value })),
  updateImg: (text) => set((state) => ({ ...state, img: text })),
  updateNationalId: (text) => set((state) => ({ ...state, nationalId: text })),
  updatePin: (text) => set((state) => ({ ...state, pin: text })),
}));

export default signUpObj;
