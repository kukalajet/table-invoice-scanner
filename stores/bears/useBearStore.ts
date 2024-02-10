import { create } from "zustand";

type Store = {
  bears: number;
  increaseBears: () => void;
};

const useBearStore = create<Store>((set) => ({
  bears: 0,
  increaseBears: () => {
    set((state) => ({ bears: state.bears + 1 }));
  },
}));

export { useBearStore };
