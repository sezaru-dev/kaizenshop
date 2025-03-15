import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface UserInterface {
  id:string,
  email: string,
  role:string
}

interface UserAuth {
  user: UserInterface | null
  setUser: (user:UserInterface|null) => void
  clearUser: () => void
}

export const useUserStore = create<UserAuth>()(
  devtools(
    persist(
      (set) => ({
        user: null, // Use optimistic initial state
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
      }),
      { name: "user-data-store" }
    )
  )
);
