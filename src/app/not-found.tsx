'use client';

import Link from 'next/link';
import notFound from '../../public/assets/404/404.png'
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
        <Image src={notFound} alt="notFound" width={120} height={120} />
      <h1 className="text-4xl font-bold mb-4">صفحه پیدا نشد</h1>
      <p className="mb-4">متاسفانه صفحه‌ای که دنبال آن هستید وجود ندارد.</p>
      <Link href="/" className="text-blue-500 underline">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
