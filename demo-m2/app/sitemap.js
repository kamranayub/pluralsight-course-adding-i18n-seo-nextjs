import { getProducts } from 'lib/commerce';
import { routing } from 'i18n/routing';

export default async function sitemap() {
  const products = await getProducts();

  return [
    {
      url: 'https://pluralsight.demo',
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: getAlternateLanguageUrls(`/`)
      }
    },

    ...products.map((product) => ({
      url: `https://pluralsight.demo/products/${product.handle}`,
      lastModified: new Date(product.updatedAt),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: getAlternateLanguageUrls(`/products/${product.handle}`)
      }
    }))
  ];
}

function getAlternateLanguageUrls(pathname) {
  const normalizedPath = pathname[0] !== '/' ? `/${pathname}` : pathname;
  const trimmedPath = normalizedPath === '/' ? '' : normalizedPath;

  return routing.locales.reduce(
    (languages, locale) => ({
      ...languages,
      [locale]: `https://pluralsight.demo/${locale}${trimmedPath}`
    }),
    {}
  );
}
