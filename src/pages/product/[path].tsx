import { ProductProps, products } from "@/app/const/product";
import { GetStaticPaths, GetStaticProps } from "next/types";

// This function generates the static paths for each product based on its path.
// It's used for static generation in Next.js.
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { path: product.path }, // Use product path as the dynamic part of the path
  }));

  return { paths, fallback: false }; // Disable fallback to show a 404 for missing paths
};

// This function fetches the product data based on the path.
// It's used for static generation of product pages in Next.js.
export const getStaticProps: GetStaticProps = async (context) => {
  const path = context.params?.path; // Extract the path from the context
  const product = products.find((product) => product.path === path); // Find the product by its path

  // If no product is found, return a 404 status
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      ...product,
    },
  };
};

// This component displays the product details.
const Product: React.FC<ProductProps> = ({ imageUrl, name, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-white">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
    </div>
  );
};

// This page component is a placeholder for a product page.
// It demonstrates how a product can be displayed using static generation in Next.js.
const ProductPage: React.FC<ProductProps> = (props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Product {...props} />
    </main>
  );
};

export default ProductPage;
