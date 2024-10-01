const { SITE_NAME } = process.env;

export const metadata = { 
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME
  }, 
  description: 'A demo app for the i18n and SEO in Next.js course',
};

export default function RootLayout({ children }) {
    return children;
}