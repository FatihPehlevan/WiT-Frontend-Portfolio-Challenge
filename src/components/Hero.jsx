import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
export default function Hero() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-dark-subheading">
        <span className="w-16 h-px bg-dark-tertiary"></span>
        <span className="text-lg">Almila Su</span>
      </div>
      <h1 className="text-4xl text-dark-heading font-inter font-bold tracking-wide">
        Creative Thinker <br /> Minimalism Lover
      </h1>
      <img src="../src/assets/hero_image.png" alt="hero_image" />
      <p>
        Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
        Developer who to craft solid and frontend products with great user
        experiences. Let’s shake hands with me.
      </p>
      <div className="flex flex-col gap-1">
        <button className="btn btn-soft font-roboto bg-dark-cta-button-bg text-button-text w-full">
          Hire Me
        </button>
        <div className="grid grid-cols-2 gap-1">
          <button className="btn btn-soft font-roboto border border-dark-cta-button-bg bg-dark-link-bg text-dark-cta-button-bg flex w-full items-center justify-center gap-2">
            <FontAwesomeIcon
              className="text-dark-tertiary"
              icon={faGithub}
              aria-hidden="true"
            />
            <span>Github</span>
          </button>
          <button className="btn btn-soft font-roboto border border-dark-cta-button-bg bg-dark-link-bg text-dark-cta-button-bg flex w-full items-center justify-center gap-2">
            <FontAwesomeIcon
              className="text-dark-tertiary"
              icon={faLinkedinIn}
              aria-hidden="true"
            />
            <span>LinkedIn</span>
          </button>
        </div>
      </div>
    </main>
  );
}
