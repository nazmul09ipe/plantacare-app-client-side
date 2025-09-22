export function BotanistPanel() {
  const botanists = [
    {
      name: "Dr. Emily Carter",
      role: "Succulent Specialist",
      bio: "With 10+ years of research in desert plants, she helps guide users on drought-tolerant plant care.",
      image: "https://i.ibb.co/t60mXgG/Capture6.png",
      email: "emily.carter@plantcare.com",
      phone: "+1 (555) 123-4567",
    },
    {
      name: "Prof. Liam Johnson",
      role: "Tropical Plant Expert",
      bio: "Liam has traveled across rainforests to study tropical species and advises on humidity & growth tracking.",
      image: "https://i.ibb.co/WpWcLXLv/Capture5.png",
      email: "liam.johnson@plantcare.com",
      phone: "+1 (555) 987-6543",
    },
    {
      name: "Sophia Martinez",
      role: "Indoor Gardening Coach",
      bio: "Specialized in ferns and bonsai, Sophia provides tips on keeping indoor plants healthy and artistic.",
      image: "https://i.ibb.co/Ps3Qsmny/Capture4.png",
      email: "sophia.martinez@plantcare.com",
      phone: "+1 (555) 555-7890",
    },
    {
      name: "Dr. Noah Patel",
      role: "Soil & Fertilizer Expert",
      bio: "Passionate about soil science, Noah guides on fertilizers and soil mixes for optimal plant growth.",
      image: "https://i.ibb.co/LdBSnd4r/Capture7.png",
      email: "noah.patel@plantcare.com",
      phone: "+1 (555) 222-3344",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black dark:text-white mb-10 sm:mb-12 secondary-font">
        Meet Our Botanist Panel
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {botanists.map((botanist, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#004953] to-[#05ce77] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center p-4 sm:p-6 md:p-6 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={botanist.image}
              alt={botanist.name}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover mb-4 border-4 border-green-200 dark:border-green-600"
            />
            <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-white mb-1">
              {botanist.name}
            </h3>
            <p className="text-sm sm:text-sm md:text-base font-medium text-white mb-3">
              {botanist.role}
            </p>
            <p className="text-white text-xs sm:text-sm md:text-sm leading-relaxed mb-4">
              {botanist.bio}
            </p>
            <div className="text-xs sm:text-sm md:text-sm text-white space-y-1">
              <p>📧 {botanist.email}</p>
              <p>📞 {botanist.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
