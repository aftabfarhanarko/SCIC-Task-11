import Banner from "@/componets/home/Banner";
import Content from "@/componets/home/Content";
import NewRoom from "@/componets/home/NewRoom";
import NewSectionns from "@/componets/home/NewSectionns";

export const metadata = {
  title: "Modern hotel stays and curated experiences",
  description:
    "Explore curated rooms, seasonal hotel offers, and experiences designed for modern city stays.",
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900 pt-32 pb-16">
      <Banner />

      <Content />

      <NewRoom />

      <NewSectionns />
    </div>
  );
}
