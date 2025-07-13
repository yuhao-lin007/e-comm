import ProductList from "@/components/share/product/product_list";
import sampleData from "@/db/sample-data";
export const metadata={
  title: 'Home',
};

//const delay =(ms) => new Promise((resolve)=> setTimeout(resolve, ms));
const homep = () => {
  //await delay(2000)
  return <ProductList data={sampleData.products} title="Newest Arrivals" limit={4}/>;
}
 
export default homep;