import ProductByCategory from "./ProductsByCategory";
import type { Metadata } from 'next'

async function fetchCategories() {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data = await response.json();
  return data;
}

// Function to create dynamic metadata based on params
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = decodeURIComponent(params.category || "all");
  return {
    title: `Shop - ${category.charAt(0).toUpperCase() + category.slice(1)}`,
    description: `Explore the ${category.charAt(0).toUpperCase() + category.slice(1)} category in our shop`,
  };
}

// Function to generate static params for dynamic route
async function generateStaticParams() {
  const categories = await fetchCategories();

  return categories.map((category: string) => ({
    category,
  }));
}

// Exporting the generateStaticParams function directly with the component
export default function ShopCategory({ params }: { params: { category: string } }) {
  return <ProductByCategory params={params} />;
}

export { generateStaticParams };
