import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
export default function Hero() {
  return (
    <main className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-12 lg:gap-y-9 lg:pt-22">
      <div className="flex items-center gap-2 text-dark-subheading lg:col-start-1 lg:row-start-2">
        <span className="w-16 h-px bg-dark-tertiary lg:w-20"></span>
        <span className="font-inter text-lg lg:text-xl">Almila Su</span>
      </div>
      <h1 className="text-4xl text-dark-heading font-inter font-bold tracking-wide lg:col-start-1 lg:row-start-3 lg:text-7xl/18">
        Creative thinker <br /> Minimalism lover
      </h1>
      <img
        className="lg:col-start-2 lg:row-start-2 lg:row-span-4 lg:justify-self-end lg:w-140 lg:object-cover"
        src="../src/assets/hero_image.png"
        alt="hero_image"
      />
      <p className="font-inter lg:col-start-1 lg:row-start-4 lg:w-lg">
        Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
        Developer who to craft solid and frontend products with great user
        experiences. Let’s shake hands with me.
      </p>
      <div className="flex flex-col gap-1 lg:flex-row lg:gap-3 lg:col-start-1 lg:row-start-5">
        <button className="btn btn-soft font-inter bg-dark-cta-button-bg text-button-text lg:text-lg lg:px-8 lg:py-6">
          Hire Me
        </button>
        <div className="grid grid-cols-2 gap-1 lg:gap-3">
          <button className="btn btn-soft font-roboto ring-1 ring-inset ring-dark-cta-button-bg bg-dark-link-bg text-dark-cta-button-bg flex w-full items-center justify-center gap-2 lg:text-lg lg:px-6 lg:py-6 lg:w-32.5">
            <FontAwesomeIcon
              className="text-dark-tertiary"
              icon={faGithub}
              aria-hidden="true"
            />
            <span className="font-inter">Github</span>
          </button>
          <button className="btn btn-soft font-roboto ring-1 ring-inset ring-dark-cta-button-bg bg-dark-link-bg text-dark-cta-button-bg flex w-full items-center justify-center gap-2 lg:text-lg lg:px-8 lg:py-6 lg:w-32.5">
            <FontAwesomeIcon
              className="text-dark-tertiary"
              icon={faLinkedinIn}
              aria-hidden="true"
            />
            <span className="font-inter">LinkedIn</span>
          </button>
        </div>
      </div>
    </main>
  );
}
