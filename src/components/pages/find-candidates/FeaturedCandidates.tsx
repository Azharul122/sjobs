import ProfileCardsWithImage from "@/components/shared/Cards/ProfileCardsWithImage";
import ProfileImages from "@/assets/images/image 84.png";
import ProfileImages2 from "@/assets/images/man-safety-equipment-work 1.png";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";

export default function FeaturedCandidates() {
  // Sample data for the cards with real images
  const profileData = [
    {
      id: 1,
      name: "Alex Mex",
      skill: "Negotiation & Closing Deals",
      description: "Lorem ipsum dolor sit amet, consec-tetur adipiscing elit.",
      imageSrc: ProfileImages, // Using the provided image for all cards
      socialLinks: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Jhon Doe",
      skill: "Civil Engineer",
      description: "Lorem ipsum dolor sit amet, consec-tetur adipiscing elit.",
      imageSrc: ProfileImages2, // Using the provided image for all cards
      socialLinks: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Alex Mex",
      skill: "Technical & IT Support",
      description: "Lorem ipsum dolor sit amet, consec-tetur adipiscing elit.",
      imageSrc: ProfileImages, // Using the provided image for all cards
      socialLinks: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="py-20 ">
      <div className="mb-16">
        <SectionHeader
          subtitle="Featured candidates"
          title="Top Professionals Ready to Join Your Team"
          description="Discover handpicked candidates with skills and experience in various fields"
        />
      </div>
      <ProfileCardsWithImage profiles={profileData} />
    </section>
  );
}
