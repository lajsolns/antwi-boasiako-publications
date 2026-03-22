'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const BookLaunchManager = dynamic(
  () => import('./BookLaunchManager').then(mod => mod.default || mod).catch(err => {
    console.error('Failed to load BookLaunchManager:', err);
    return () => null; // Return empty component on error
  }),
  { 
    ssr: false,
    loading: () => <div className="h-16 bg-blue-600 text-white flex items-center justify-center">Loading...</div>
  }
);

export default function BookLaunchClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Don't render anything during SSR or initial hydration
  }

  return <BookLaunchManager />;
}
