import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <a
            href="https://task-management-app-kohl-xi.vercel.app/"
            ref={rydeRef}
            className="first-project-wrapper"
          >
            <div className="image-wrapper">
              <img
                src="/images/project1.png"
                alt="task-management-app interface"
              />
            </div>
            <div className="text-content">
              <h2>
                Kanban task management for planning, organising, ideating your
                tasks effectively
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React, TailwindCSS, Shadcn for a fast,
                user-friendly experience.
              </p>
            </div>
          </a>

          <div className="project-list-wrapper overflow-hidden">
            <a
              href="https://audiophile-ecommerce-app-ten.vercel.app/"
              className="project"
              ref={libraryRef}
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project2.png" alt="E-commerce platform" />
              </div>
              <h2>Audiophile E-Commerce App</h2>
              <p className="text-white-50 md:text-l">
                Built with Next.js, TailwindCSS & Shadcn
              </p>
            </a>

            <a
              href="https://invoice-app-liard-three.vercel.app/"
              className="project"
              ref={ycDirectoryRef}
            >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="invoice app" />
              </div>
              <h2>Invoice App</h2>
              <p className="text-white-50 md:text-l">
                Built with Next.js, TailwindCSS, Shadcn, clerk auth & mongoDB
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
