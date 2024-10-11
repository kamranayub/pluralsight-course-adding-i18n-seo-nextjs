import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';

const size = { width: 1200, height: 630 };
const interSemiBold = fs.readFile(resolve('./assets/Inter-SemiBold.ttf'));
const interLight = fs.readFile(resolve('./assets/Inter-Light.ttf'));

export async function generateImageMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'OpenGraph' });

  return [
    {
      id: 0,
      alt: t('heading') + ' - ' + t('subheading'),
      contentType: 'image/png',
      size
    }
  ];
}

export default async function GET({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'OpenGraph' });

  const H1 = ({ children }) => (
    <h1
      style={{
        fontFamily: 'Inter SemiBold',
        fontSize: 128,
        color: 'white'
      }}
    >
      {children}
    </h1>
  );

  const H2 = ({ children }) => (
    <h2
      style={{
        fontFamily: 'Inter Light',
        fontSize: 64,
        color: 'white'
      }}
    >
      {children}
    </h2>
  );

  return new ImageResponse(
    (
      <div
        lang={locale}
        style={{
          background: '#FF1675',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '50px'
        }}
      >
        <H1>{t('heading')}</H1>
        <H2>{t('subheading')}</H2>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter SemiBold',
          data: await interSemiBold,
          style: 'normal',
          weight: 400
        },
        {
          name: 'Inter Light',
          data: await interLight,
          style: 'normal'
        }
      ]
    }
  );
}
