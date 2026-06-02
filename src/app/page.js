
import Aboutus from "@/component/Aboutus";
import Banner from "@/component/Banner";
import Feauterd from "@/component/Feauterd";
import Footer from "@/component/Footer";
import Services from "@/component/Services";
import Image from "next/image";
import { Suspense } from "react";

export const metadata={
  title: "Home | Doctor appoinmetnt system"
}

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<div className="flex justify-center items-center mt-20"><span className="loading loading-spinner loading-xl"></span></div>}>
        <Feauterd></Feauterd>
      </Suspense>
      <Aboutus></Aboutus>
      <Services></Services>
      
    </div>
  );
}
