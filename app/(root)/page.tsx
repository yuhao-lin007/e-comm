import ProductList from "@/components/share/product/product_list";
export const metadata = {
  title: "Home",
};
import { getLatestProduct } from "@/lib/actions/product.actions";

//const delay =(ms) => new Promise((resolve)=> setTimeout(resolve, ms));
const homep = async() => {
  //await delay(2000)
  const lastestProducts = await getLatestProduct();
  return (
    <ProductList data={lastestProducts} title="Newest Arrivals" />
  );
};

export default homep;
