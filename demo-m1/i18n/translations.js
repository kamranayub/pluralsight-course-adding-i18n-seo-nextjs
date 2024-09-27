'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getTranslations } from './server';
import defaultMessages from '../messages/en.json';

export function useTranslations(namespace) {
  const { locale } = useParams();
  const [translations, setTranslations] = useState(defaultMessages[namespace]);

  useEffect(() => {
    getTranslations(locale, namespace).then((t) => {
      setTranslations(t);
    });
  }, [locale]);

  return translations;
}
