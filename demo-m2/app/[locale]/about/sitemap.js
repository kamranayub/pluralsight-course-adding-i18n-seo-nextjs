export default function sitemap() {
  return [
    {
      url: 'https://pluralsight.demo/en/about',
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
            fr: `https://pluralsight.demo/fr/about`
        }
      }
    }
  ];
}
