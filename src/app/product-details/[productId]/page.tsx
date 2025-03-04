import type { Metadata } from 'next';
import ProductDetails from './ProductDetails';
import { ProductType } from '@/store/fetch-products-store';

async function fetchProductDetails(productId: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const data = await response.json();
  return data;
}

// Function to create dynamic metadata based on product title
export async function generateMetadata({ params }: { params: { productId: string } }): Promise<Metadata> {
  const productId = params.productId;
  const product = await fetchProductDetails(productId);

  return {
    title: `${product.title}`,
    description: `Explore the details of ${product.title} in our shop`,
  };
}

// Function to generate static params for dynamic route
export async function generateStaticParams() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products: ProductType[] = await response.json();

  return products.map((product: ProductType) => ({
    productId: product.id.toString(),
  }));
}

const ProductDetailsPage = ({ params }: { params: { productId: string } }) => {
  return <ProductDetails params={params} />;
};

export default ProductDetailsPage;
