import fs from 'node:fs';
import { NextResponse } from 'next/server';

export const contentType = 'image/png';

export default function OpenGraphImage({ params: { locale } }) {
  const exists = fs.existsSync(`app/[locale]/opengraph-image.${locale}.png`);
  if (exists) {
    const buffer = fs.readFileSync(`app/[locale]/opengraph-image.${locale}.png`);
    return new NextResponse(buffer);
  } else {
    const buffer = fs.readFileSync(`app/opengraph-image.png`);
    return new NextResponse(buffer);
  }
}
