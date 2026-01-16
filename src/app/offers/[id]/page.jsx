import { singleData } from "@/actions/server/getData";
import OfferDetailsClient from "@/componets/offer/OfferDetailsClient";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const item = await singleData(id);

  if (!item) {
    return {
      title: "Offer not found",
      description: "The offer you are looking for could not be found.",
    };
  }

  const title = `${item.title} – ${item.location || "Hotel stay"}`;
  const description =
    item.description &&
    item.description.length > 150
      ? `${item.description.slice(0, 147)}...`
      : item.description ||
        "View details, amenities, and availability for this hotel stay.";

  const imageUrl =
    item.image ||
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/offers/${id}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
};

const OfferDetailsPage = async ({ params }) => {
  const { id } = await params;
  const item = await singleData(id);

  if (!item) {
    return notFound();
  }

  return <OfferDetailsClient item={item} />;
};

export default OfferDetailsPage;
