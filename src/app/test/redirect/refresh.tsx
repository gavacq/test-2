'use client'
import { useRouter } from 'next/navigation';

import { use, useEffect } from 'react';

const Refresh = () => {
  const router = useRouter();
  useEffect(() => {
    console.log('refresh');
    router.refresh();
  }, []);
  return <div>Refresh</div>
};

export default Refresh;
