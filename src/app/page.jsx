import Banner from "@/componets/home/Banner";
import Content from "@/componets/home/Content";
import NewRoom from "@/componets/home/NewRoom";

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Banner />

      <Content />

      <NewRoom />
      
    </div>
  );
}
