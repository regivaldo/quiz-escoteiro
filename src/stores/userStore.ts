import type { UserStoreType, UserType } from '@/types/user';
import { create } from 'zustand';

export const useUserStore = create<UserStoreType>((set) => ({
  user: null,
  setUser: (user: UserType | null) => set({ user }),
}));
