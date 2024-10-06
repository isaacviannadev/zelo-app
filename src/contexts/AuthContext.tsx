import { useRouter } from 'next/navigation';
import {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { decodeJwt } from 'jose';
import { parseCookies, setCookie } from 'nookies';
import { toast } from 'sonner';

import { LOGIN } from '@/api/graphql/mutations/login';
import { UserType } from '@/types/user';
import { useMutation } from '@apollo/client';

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserType | null;
  signIn: (data: LoginData) => Promise<void>;
  signOut: () => void;
  isSubmitting: boolean;
};

type LoginData = {
  username: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactElement }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [Login] = useMutation(LOGIN);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'zelo.token': token } = parseCookies();

    if (token) {
      const decodedToken = decodeJwt(token);
      const user = decodedToken?.userContext as UserType;

      setUser({
        id: user.id,
        username: user.username,
        email: user.username,
        role: user.role,
        status: user.status,
      });
    }
  }, []);

  const signIn = useCallback(
    async ({ username, password }: LoginData) => {
      setIsSubmitting(true);
      const variables = {
        data: {
          username,
          password,
        },
      };
      try {
        const { data } = await Login({ variables });

        const { token, expiresIn } = data.Login;

        setCookie(undefined, 'zelo.token', token, {
          maxAge: expiresIn,
        });

        const decodedToken = decodeJwt(token);
        const user = decodedToken?.userContext as UserType;

        setUser({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.username,
          role: user.role,
          status: user.status,
        });
        toast.success('Bem-vindo ao ZeloClub!');

        router.push('/dashboard');
      } catch (error) {
        toast.error(
          'Não foi possível fazer login. Verifique suas credenciais.'
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Login]
  );

  const signOut = useCallback(() => {
    setUser(null);
    setCookie(undefined, 'zelo.token', '', {
      maxAge: -1,
    });
    router.push('/login');
  }, [router]);

  const authContextValues = useMemo(
    () => ({ isAuthenticated, user, signIn, isSubmitting, signOut }),
    [isAuthenticated, user, signIn, isSubmitting, signOut]
  );

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
}
