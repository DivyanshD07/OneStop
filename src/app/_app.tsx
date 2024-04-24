// _app.tsx or _app.js

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
// import { useSession } from 'next-auth/react';
import LoginPage from './login/page'; // Import your login page component
import RootLayout from './layout';

function MyApp({ Component, pageProps }: AppProps) {
//   const { data: session, status } = useSession();
  const router = useRouter();

  // If session is loading, show a loading indicator
//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

  // If user is not authenticated and is not on the login page, redirect to login
  if (router.pathname !== '/login') {
    router.push('/login');
    return <LoginPage />;
  }

  // If user is not authenticated and is on the login page, render the login page
  if (router.pathname === '/login') {
    return <LoginPage />;
  }

  // Render the layout with the page component inside
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
