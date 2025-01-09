import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the gallery app
    router.push('/gallery');
  }, [router]);

  return null; // Return null as the component will redirect immediately
}
