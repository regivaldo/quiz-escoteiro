import type { UserType } from '@/types/user';
import { create } from 'zustand';

export type UserStoreType = {
  user: UserType | null;
  isLoading: boolean;
  setUser: (user: UserType | null) => void;
  setLoading: (isLoading: boolean) => void;
};

export const useUserStore = create<UserStoreType>((set) => ({
  user: null,
  isLoading: true, // Começa como true, pois estamos aguardando o onAuthStateChanged
  setUser: (user: UserType | null) => set({ user, isLoading: false }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
}));
