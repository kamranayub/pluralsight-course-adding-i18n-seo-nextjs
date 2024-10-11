import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations("AboutPage");

  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <h1 className="mb-4 text-2xl font-bold">{t('heading')}</h1>
      <p>{t('text')}</p>
    </div>
  );
}
