import type { UserStoreType, UserType } from "@/types/user";
import { create } from "zustand";

export const useUserStore = create<UserStoreType>((set) => ({
    user: {
        id: "1",
        name: "Regivaldo Silva",
        email: "regivaldorfs@gmail.com",
        photoURL: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9tZfAFDSWsTBHBraVw-rr97TTIGOdIaNwNoXojAEbqC64bOr0OtNVLSOBrU4BvF1aaEW-xMk4bWDbezaaOfXktyFuC1xDHqLXkJj-_NKY1In4jSQFXlHgmuyAMTrFPuGIZu1vb6AfHMauCC6Lm80K8QDRL8tCVbxA80C_176weZhm92zIhdAHD1IO0nzkUJJDqpw0RJtr1ooTjJ97Sy0hDgn-IzJUu1VRGJbVqIKj9ZKyvffEkzlzujTacBLkCbwi7n-cAsCsVtaC",
        group: "Grupo Escoteiro Marechal Rondon 41-SP"
    },
    setUser: (user: UserType | null) => set({ user })
}));
