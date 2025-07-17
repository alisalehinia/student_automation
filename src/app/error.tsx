
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">500 - خطای داخلی سرور</h1>
      <p className="mb-4">مشکلی رخ داده است. لطفاً مجدداً تلاش کنید.</p>
      <button
        onClick={reset}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        تلاش دوباره
      </button>
    </div>
  );
}
