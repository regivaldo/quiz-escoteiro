export type UserType = {
  id: string;
  name: string;
  email: string;
  photoURL?: string;
  group: string;
  numeral?: string;
  city?: string;
  state?: string;
  isAdmin?: boolean;
};

export type UserStoreType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};
