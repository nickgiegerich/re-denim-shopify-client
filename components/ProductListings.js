import ProductCard from "@/components/ProductCard";

function ProductListings({ products }) {
  return (
    <div className="mt-20 md:mt-10">
      <div className="text-center text-4xl font-primary font-semibold">
        Our Current Collection
      </div>
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListings;
