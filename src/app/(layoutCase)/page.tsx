import Slider from "@/components/common/ui/gallery/Slider";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="pt-[100px] bg-gray-50">
      <Slider products={products} className="" />
    </div>
  );
}
