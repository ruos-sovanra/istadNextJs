import Image from "next/image";
import CoursePage from "@/app/interface/CoursePage";
import CarouselComponent from "@/app/components/CarouselComponent";
import SliderComponent from "@/app/components/SliderComponent";


export default function Home() {
  return (
    <main>
        <CarouselComponent />
        <CoursePage />
        <SliderComponent />
    </main>
  );
}
