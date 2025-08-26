import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";

import { techSkills } from "../constants";
// import { techStackImgs } from "../constants";

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  return (
    <section
      id="skills"
      className="flex-center section-padding bg-black min-h-screen"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div>
          <ul className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center gap-y-8 gap-x-4 sm:gap-y-16 sm:gap-x-12">
            {techSkills.map((skill, index) => (
              <li
                key={skill.label}
                className="skill-item flex flex-col px-2 sm:px-6 lg:px-12 items-center gap-2 sm:gap-4 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-icon-wrapper">
                  <img
                    src={skill.image}
                    alt={skill.label}
                    className="skill-icon w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                  />
                </div>
                <p className="skill-label text-white text-xs sm:text-sm lg:text-base font-medium text-center">
                  {skill.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
