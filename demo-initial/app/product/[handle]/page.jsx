import { default as ProductPage } from 'app/page';
export { generateMetadata } from 'app/page';

export default async function ProductSubPage(props) {
    return <ProductPage {...props} />;
};