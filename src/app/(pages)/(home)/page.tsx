import AboutUs from "@/app/(mainsite)/components/homepage/AboutUs/AboutUs";
import GetItDone from "@/app/(mainsite)/components/homepage/GetItDone/GetItDone";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import InfiniteRibbon from "@/app/(mainsite)/components/homepage/InfiniteRibbon/InfiniteRibbon";
import PastWork from "@/app/(mainsite)/components/homepage/PastWork/PastWork";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import Services from "@/app/(mainsite)/components/homepage/Services/Services";
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon";
import serviceAreaData from "@/app/(mainsite)/data/serviceAreaData";


export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <StatsRibbon />
      <Services />
      <InfiniteRibbon />
      <ServiceArea areaData={serviceAreaData} mapURL="https://www.google.com/maps/d/embed?mid=1fIYuJKJ3c-xnaLI5_4T7Z0707FMb63w&ehbc=2E312F" />
      <PastWork />
      <GetItDone />
    </>
  )
}
