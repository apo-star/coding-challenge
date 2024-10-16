import { StoreApi, UseBoundStore } from "zustand";
import shallow from "zustand/shallow";
import create from "zustand";

type GenericState = Record<string, any>;

export const createStoreWithSelectors = <T extends GenericState>(
  store: UseBoundStore<StoreApi<T>>
): (<K extends keyof T>(keys: K[]) => Pick<T, K>) => {
  const useStore: <K extends keyof T>(keys: K[]) => Pick<T, K> = <
    K extends keyof T
  >(
    keys: K[]
  ) => {
    return store((state) => {
      const x = keys.reduce((acc, cur) => {
        acc[cur] = state[cur];
        return acc;
      }, {} as T);

      return x as Pick<T, K>;
    }, shallow);
  };

  return useStore;
};

interface IStoreSelectedItem {
  selectedItem: number;
  setSelectedItem: (value: number) => void;
}

const useSelectedItem = create<IStoreSelectedItem>((set) => ({
  selectedItem: 0,
  setSelectedItem: (value) =>
    set((state) => ({ ...state, selectedItem: value })),
}));

export const useAction = createStoreWithSelectors(useSelectedItem);
