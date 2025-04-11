
import BusinessGrow from "../Components/BusinessGrow";
import CarouselSection from "../Components/CarouselSection";
import CreativeSolution from "../Components/CreativeSolution";
import DIgitalService from "../Components/DIgitalService";
import ExpertsSection from "../Components/ExpertsSection";
import Footer from "../Components/FooterSection";
import Header from "../Components/Header";
import Partners from "../Components/Partners";
import StatsSection from "../Components/StatsSection";
import SubscribeSection from "../Components/SubscribeSection";
const HomePage = () => {
  return (
    <div className="min-w-full ">
      <Header />
      <main className=" max-w-full mx-auto py-28 bg-[#E3EDF8]  ">
        <BusinessGrow/>
        <StatsSection />
       <CreativeSolution/>
        <CarouselSection/>
        <SubscribeSection/>
        <ExpertsSection/>
        <DIgitalService/>
        <Partners/>
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;
