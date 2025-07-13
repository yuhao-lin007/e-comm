import { cn } from "@/lib/utils";

const ProductPrice = ({value, className }:{value:number; className?:string;}) => {
    
    const stringVal = value.toFixed(2);
    const [dollar, cent] = stringVal.split('.');
    return (
      <p className={cn("text-2xl", className)}>
        <span className="text-xs align-super">$</span>
        {dollar}
        <span className="text-xs align-super">.{cent}</span>
      </p>
    );
}
 
export default ProductPrice;