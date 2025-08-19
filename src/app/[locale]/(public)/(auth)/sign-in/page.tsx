"use client"

import { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { setToken } from '@/store/authSlice';
import { useRouter } from '@/lib/i18n/navigation';

export default function LoginPage() {
  const router = useRouter()

  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<AppDispatch>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    dispatch(setToken());

    router.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      {token}
      <button type="submit">Login</button>
    </form>
  )
}