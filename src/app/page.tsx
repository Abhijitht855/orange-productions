import FullscreenVideo from "@/components/FullscreenVideo";
import Hero from "@/components/Hero";
import PosterCarousel from "@/components/PosterCarousel";
import ProductCategories from "@/components/ProductCategories";
import SubCat from "@/components/SubCat";
import SubcategorySection from "@/components/SubcategorySection";
import Poster from "@/components/Poster";
import Orders from "@/components/Orders";



export default function Home() {
  return (
    <div className="">
      <PosterCarousel/>
      <Hero/>
      <SubcategorySection/>
      <SubCat/>
      <ProductCategories/>
      <FullscreenVideo/>
      <Poster/>
      <Orders/>
    </div>
  );
}
