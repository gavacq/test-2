'use client'
import { testAction } from '@/app/actions/test-action'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Button = () => {
  const router = useRouter();
  const onClick = async () => {
    await testAction();
    // router.push('/test', { });
  };
  return (
    // <Link href="/test" className="bg-white text-black" onClick={onClick}>
    //   Click me
    // </Link>
    <button className="bg-white text-black" onClick={onClick}>
      Click me
    </button>
  );
};

export default Button
