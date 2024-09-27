import { notFound } from 'next/navigation';

import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductProvider } from 'components/product/product-context';
import { ProductDescription } from 'components/product/product-description';
import { ProductReview } from 'components/product/product-review';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations, getProductReviews } from 'lib/commerce';
import { Suspense } from 'react';
import { getTranslations } from 'i18n/server';
import Link from 'components/locale-link';

export async function generateMetadata({
  params
}) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.handle, params.locale);

  if (!product) return notFound();

  return (
    <ProductProvider>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <Gallery
                images={product.images.slice(0, 5).map((image) => ({
                  src: image.url,
                  altText: image.altText
                }))}
              />
            </Suspense>
          </div>

          <div className="basis-full lg:basis-2/6">
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>
        <Suspense fallback={<p className="p-4">Loading reviews...</p>}>
          <ProductReviews id={product.id} locale={params.locale} />
        </Suspense>
        <RelatedProducts id={product.id} locale={params.locale} />
      </div>
      <Footer locale={params.locale} />
    </ProductProvider>
  );
}

async function RelatedProducts({ id, locale }) {
  const relatedProducts = await getProductRecommendations(id, locale);
  const t = await getTranslations(locale, 'RelatedProducts');

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">{t.heading}</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link
              className="relative h-full w-full"
              href={`/product/${product.handle}`}
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function ProductReviews({ id, locale }) {
  const productReviews = await getProductReviews(id, locale);
  const t = await getTranslations(locale, 'ProductReviews');

  if (!productReviews.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">{t.heading}</h2>
      <div className="w-full gap-4 pt-1">
        {productReviews.map((review) => (
          <ProductReview key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
