import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react'
import LoginRedirect from '../components/LoginRedirect';

const login = () => {
  const router = useRouter();
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (session) {
    console.log(session)
    // <div>
    //     Signed in as {session.user.email} <br/>
    //     <button onClick={() => signOut()}>Sign out</button>
    // </div>
    router.replace('/'); // Replace current URL with the login page URL
    return null
  } else {
    return (
      <>
        <LoginRedirect />
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }

}

export default login