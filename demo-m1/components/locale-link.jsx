'use client';

import { useParams } from "next/navigation";
import Link from "next/link";

export default function LocaleLink({ href, children, ...props }) {
  const { locale = '' } = useParams();

  return (
    <Link href={`/${locale}${href}`} {...props}>
      {children}
    </Link>
  );
}