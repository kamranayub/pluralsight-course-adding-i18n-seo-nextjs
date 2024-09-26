import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { CartProvider } from 'components/cart/cart-context';
import { Navbar } from 'components/layout/navbar';
import { GeistSans } from 'geist/font/sans';
import { getCart } from 'lib/commerce';
import { cookies } from 'next/headers';
import { Toaster } from 'sonner';
import './globals.css';

export default async function RootLayout({ children, params: { locale } }) {
  const cartId = cookies().get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart(cartId);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <NextIntlClientProvider messages={messages}>
          <CartProvider cartPromise={cart}>
            <Navbar />
            <main>
              {children}
              <Toaster closeButton />
            </main>
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
