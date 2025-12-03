export type UserType = {
    id: string;
    name: string;
    email: string;
    photoURL?: string;
    group: string;
}

export type UserStoreType = {
    user: UserType | null;
    setUser: (user: UserType | null) => void;
}