import ProductByCategory from "./ProductsByCategory";
import type { Metadata, ResolvingMetadata } from 'next'

// Function to create dynamic metadata based on params
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = decodeURIComponent(params.category || "all");
  return {
    title: `Shop - ${category.charAt(0).toUpperCase() + category.slice(1)}`,
    description: `Explore the ${category.charAt(0).toUpperCase() + category.slice(1)} category in our shop`,
  };
}

const ShopCategory = ({ params }: { params: { category: string } }) => {
  return <ProductByCategory params={params} />;
};

export default ShopCategory;
