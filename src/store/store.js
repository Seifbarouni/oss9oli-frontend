import create from "zustand";

export const useOpen = create((set) => ({
  open: true,
  setOpen: () => set((state) => ({ open: !state.open })),
  close: () => set((state) => ({ open: false })),
}));
