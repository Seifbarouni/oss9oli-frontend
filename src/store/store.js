import create from "zustand";

export const useOpen = create((set) => ({
  open: true,
  setOpen: () => set((state) => ({ open: !state.open })),
  close: () => set(() => ({ open: false })),
}));

export const useAudio = create((set) => ({
  isOpen: false,
  audioData: {},
  toggleAudio: () => set((state) => ({ isOpen: !state.isOpen })),
  openAudio: () => set(() => ({ isOpen: true })),
  closeAudio: () => set(() => ({ isOpen: false })),
  setAudioData: (data) =>
    set(() => ({
      audioData: {
        ...data,
      },
    })),
}));
