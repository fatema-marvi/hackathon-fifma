import {Hero} from "./components/hero/hero";
import { LogoSection } from "./components/logoSection/logosection";
import NewArrival from "./components/newArrival/newArrival";
import TopSeller from "./components/topsell/topsell";
import DressStyle from "./components/category/category";
import Customer from "./components/customer/customer";

export default function Home() {
  return (
  <div className="max-w-full h-full flex-grow justify-start items-center">
    <Hero/>
    <LogoSection/>
    <NewArrival/>
    <TopSeller/>
    <DressStyle/>
    <Customer/>
  </div>
  );
}