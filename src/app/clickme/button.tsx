'use client'
import { testAction } from '@/app/actions/test-action'
import { useRouter } from 'next/navigation'

const Button = () => {
  const router = useRouter()
  const onClick = async () => {
    await testAction()
    router.push('/test')
  }
  return <button className='bg-white text-black' onClick={onClick}>Click me</button>
}

export default Button
