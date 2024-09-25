import { default as ProductPage } from 'app/[locale]/page';
export { generateMetadata } from 'app/[locale]/page';

export default async function ProductSubPage(props) {
    return <ProductPage {...props} />;
};