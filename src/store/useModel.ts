import { create } from "zustand";

interface IModel {
  model: any;
  setModel: (value: any) => void;
}
export const useModel = create<IModel>((set) => ({
  model: null,
  setModel: (value) => set({ model: value }),
}));
