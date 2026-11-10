import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  period: string;
  description: string;
  icon: string;
  href?: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Juspay - Product Consultant",
    period: "July 2025 - Present · Greater Bengaluru Area",
    description: "Working as a Product Consultant at Juspay, bringing together product thinking and technical depth to build reliable digital products.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "eShipz - Integration Engineer",
    period: "March 2024 - July 2025 · Bengaluru, Karnataka",
    description: "Worked as an Integration Engineer at eShipz, connecting systems and keeping data flowing reliably between them.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Object Detection using Deep Learning",
    period: "MCA Project",
    description: "Applied deep learning algorithms to detect objects on a Raspberry Pi 4, building practical skills in Python programming and image processing.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "MCA - Computer Science",
    period: "Madanapalle Institute of Technology & Science · 2022 - 2023",
    description: "Master of Computer Applications, with hands-on work in data analysis, machine learning algorithms and statistical modeling.",
    icon: "/cards/card-4.png",
    href: "https://www.linkedin.com/in/b-reddi-srilakshmi-narasimha-440075241/",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {card.title}
                </h3>
                <p className="text-purple-300 text-xs mb-3">{card.period}</p>
                <p className="text-white/70 text-sm mb-4">
                  {card.description}
                </p>
                {card.href && (
                  <Link
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
                  >
                    LEARN MORE →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}