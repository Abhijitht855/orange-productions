import FullscreenVideo from "@/components/FullscreenVideo";
import Hero from "@/components/Hero";
import PosterCarousel from "@/components/PosterCarousel";
import ProductCategories from "@/components/ProductCategories";
import SubCat from "@/components/SubCat";
import SubcategoryCard from "@/components/SubcategoryCard";
import Poster from "@/components/Poster";
import Testimonials from "@/components/Testimonials";
import BuyOptions from "@/components/BuyOptions";
import CompanyIconsMarquee from "@/components/CompanyIconsMarquee";
import FAQPage from "@/components/FAQPage";




export default function Home() {
  return (
    <div className="">
      <PosterCarousel/>
      <Hero/>
      <SubcategoryCard/>
      <SubCat/>
      <ProductCategories/>
      <FullscreenVideo/>
      <Poster/>
      <Testimonials/>
      <BuyOptions/>
      <CompanyIconsMarquee/>
      <FAQPage/>
    </div>
  );
}
