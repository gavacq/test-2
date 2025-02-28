'use server'

import { cookies } from 'next/headers'

export async function testAction() {
  const cookieStore = await cookies()
  cookieStore.set('test', 'true')
}


