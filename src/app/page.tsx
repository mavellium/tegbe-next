import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Funil from "@/components/Funil";
import Costumers from "@/components/Costumers"
import Section4 from "@/components/Section4"
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer/Index";
import Assessments from "@/components/Assessments";
import SectionStrategic from "@/components/SectionStrategic";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Funil></Funil>
        <SectionStrategic></SectionStrategic>
        <Assessments></Assessments>
        <Costumers></Costumers>
        <Section4></Section4>
        <Section5></Section5>
        <Section6></Section6>
        <Faq></Faq>
      </main>
      <Footer></Footer>
    </>
  );
}
