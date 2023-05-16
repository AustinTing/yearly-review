import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LoginRedirect = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      // User is logged in, redirect to the home page
      router.replace('/');
    }
    if (status === 'unauthenticated') {
      // User is logged in, redirect to the home page
      router.replace('/login');
    }
  }, [status]);

  if (status === 'loading') {
    // Optional: You can show a loading message while session is being fetched
    return <div>Loading...</div>;
  }

  return null;
};

export default LoginRedirect;
