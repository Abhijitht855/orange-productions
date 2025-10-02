"use client";

const CompanyIconsMarquee = () => {
  const companyIcons = [
    "/images/ARG-Capital-logo.png",
    "/images/02-01-2025-15_54_02.png",
    "/images/FuturaX-Logo-03.png",
    "/images/website-WSDT-Dubai-comapny-logo-12.webp",
    "/images/ARG-Capital-logo.png",
    "/images/FuturaX-Logo-03.png",
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="overflow-hidden">
        {/* First Row */}
        <div className="flex animate-marquee">
          {[...companyIcons, ...companyIcons,...companyIcons,...companyIcons,].map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Company ${index + 1}`}
              className="h-16 w-auto object-contain mr-10"
            />
          ))}
        </div>

        {/* Gap between rows */}
        <div className="h-10"></div>

        {/* Second Row */}
        <div className="flex animate-marquee-reverse">
          {[...companyIcons, ...companyIcons,...companyIcons,...companyIcons,].map((icon, index) => (
            <img
              key={index + companyIcons.length}
              src={icon}
              alt={`Company ${index + 1}`}
              className="h-16 w-auto object-contain mr-10"
            />
          ))}
        </div>
      </div>

      {/* Inject CSS animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }

        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 20s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default CompanyIconsMarquee;
