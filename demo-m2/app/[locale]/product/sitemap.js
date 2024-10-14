import { getProducts, getProductCount } from 'lib/commerce';

const PAGE_SIZE = 50000;

export async function generateSitemaps() {
  const total = await getProductCount();
  const pages = Math.ceil(total / PAGE_SIZE);
  // => 1 - 0 to 50,000 products
  // => 2 - 50,001 to 100,000 products

  return new Array(pages).fill(null).map((_, index) => ({ id: index }));
}

export default async function sitemap({ id }) {
  const start = id * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const products = await getProducts(start, end);

  return products.map((product) => ({
    url: `https://pluralsight.demo/en/products/${product.handle}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: 'daily',
    priority: 0.9,
    alternates: {
      languages: {
        fr: `https://pluralsight.demo/fr/products/${product.handle}`
      }
    }
  }));
}
