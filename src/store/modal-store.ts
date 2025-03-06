import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ModalState {
  isLoginModalOpen: boolean,
  isSignupModalOpen: boolean,
  openLoginModal: () => void
  closeLoginModal: () => void
  openSignupModal: () => void
  closeSignupModal: () => void
}

export const useModalStore = create<ModalState>()(
  devtools(
    persist(
      (set => ({
        isLoginModalOpen: false,
        isSignupModalOpen: false,
        openLoginModal: () => set({ isLoginModalOpen: true, isSignupModalOpen: false }),
        closeLoginModal: () => set({ isLoginModalOpen: false }),
        openSignupModal: () => set({ isSignupModalOpen: true, isLoginModalOpen: false }),
        closeSignupModal: () => set({ isSignupModalOpen: false }),
      })),
      {name: 'modal-store'}
    )
  )
);

