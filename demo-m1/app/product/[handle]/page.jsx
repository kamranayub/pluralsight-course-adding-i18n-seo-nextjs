import { default as ProductPage } from 'app/page';
export { generateMetadata } from 'app/page';

export default async function ProductSubPage(props) {
    
    // Artificial delay to simulate a slow server-side request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return <ProductPage {...props} />;
};