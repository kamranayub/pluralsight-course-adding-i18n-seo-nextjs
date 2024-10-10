'use client';

import Link from 'components/locale-link';
import { useParams } from 'next/navigation';

export default function LocalizedNotFound() {
  const { locale } = useParams();

  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black">
      <h2 className="text-xl font-bold">Not Found ({locale})</h2>
      <p className="mt-2 text-gray-600">Could not find requested resource ({locale})</p>
      <Link
        href="/"
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
      >
        Return Home ({locale})
      </Link>
    </div>
  );
}
