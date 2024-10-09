import { useTranslations } from 'next-intl';
import { Link } from 'i18n/routing';

export default function NotFoundPage() {
  const t = useTranslations('NotFound');

  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black">
      <h2 className="text-xl font-bold">{t('title')}</h2>
      <p className="mt-2 text-gray-600">{t('body')}</p>
      <Link
        href="/"
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
      >
        {t('returnHome')}
      </Link>
    </div>
  )
}
