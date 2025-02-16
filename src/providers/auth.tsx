import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type User = null | { email: string; userId: string };
type IsAuthed = boolean;

interface Context {
  isAuthed: IsAuthed;
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  setIsAuthed: Dispatch<SetStateAction<IsAuthed>>;
}

const AuthContext = createContext<Context>({
  isAuthed: false,
  user: null,
  setUser: () => null,
  setIsAuthed: () => false,
});

function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthed, setIsAuthed] = useState<IsAuthed>(false);
  const [user, setUser] = useState<User>(null);
  return (
    <AuthContext.Provider value={{ isAuthed, user, setUser, setIsAuthed }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

export { AuthProvider };
