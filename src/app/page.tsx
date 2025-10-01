import Hero from "@/components/Hero";
import PosterCarousel from "@/components/PosterCarousel";
import ProductCategories from "@/components/ProductCategories";
import SubCat from "@/components/SubCat";
import SubcategorySection from "@/components/SubcategorySection";

export default function Home() {
  return (
    <div className="">
      <PosterCarousel/>
      <Hero/>
      <SubcategorySection/>
      <SubCat/>
      <ProductCategories/>
    </div>
  );
}
