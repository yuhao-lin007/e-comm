import { ProductCarousel } from "@/components/share/product/product-carousel";
import ProductList from "@/components/share/product/product_list";
export const metadata = {
  title: "Home",
};
import { getLatestProduct, getFeaturedProducts } from "@/lib/actions/product.actions";
import ViewAllProductsButton from "@/components/view-all-products";

const homep = async() => {

  const lastestProducts = await getLatestProduct();
  const FeaturedProducts = await getFeaturedProducts();
  return (
    <>
      {FeaturedProducts.length > 0 && (
        <ProductCarousel data={FeaturedProducts} />
      )}
      <ProductList data={lastestProducts} title="Newest Arrivals" />
    <ViewAllProductsButton/>
    </>
  );
  
};

export default homep;
