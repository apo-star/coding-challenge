import { StoreApi, UseBoundStore } from "zustand";
import { shallow } from "zustand/shallow";
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

interface IModelStatus {
  modelName: string;
  modelMeshs: Array<any>;
  modelPosition: [number, number, number];
  modelRotation: [number, number, number];
  setModelName: (value: string) => void;
  setModelMeshs: (value: Array<any>) => void;
  setModelPosition: (value: [number, number, number]) => void;
  setModelRotation: (value: [number, number, number]) => void;
}
const useModelStatus = create<IModelStatus>((set) => ({
  modelName: "",
  modelMeshs: [],
  modelPosition: [0, 0, 0],
  modelRotation: [0, 0, 0],
  setModelName: (value) => set({ modelName: value }),
  setModelMeshs: (value) => set({ modelMeshs: value }),
  setModelPosition: (value) => set({ modelPosition: value }),
  setModelRotation: (value) => set({ modelRotation: value }),
}));

interface IOverlay {
  viewTransform: boolean;
  setViewTransform: (value: boolean) => void;
}
const useOverlay = create<IOverlay>((set) => ({
  viewTransform: false,
  setViewTransform: (value) => set({ viewTransform: value }),
}));

export const useModelProperty = createStoreWithSelectors(useModelStatus);
export const useOverlayStatus = createStoreWithSelectors(useOverlay);
