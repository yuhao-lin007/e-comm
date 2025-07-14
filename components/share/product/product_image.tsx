"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImage = ({ images }: { images: string[] }) => {
  const [curImage, setCurrent] = useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[curImage]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300] object-cover object-center"
      ></Image>
      <div className="flex">
        {images.map((image, index)=>(
            <div key={image} onClick={()=> setCurrent(index)} className={cn("border mr-2 cursor-pointer hover:border-orange-500", curImage===index &&'border-orange-300')}>
                <Image src={image} alt='image' width={100} height={100}/>

            </div>

        ))}
      </div>
    </div>
  );
};

export default ProductImage;
