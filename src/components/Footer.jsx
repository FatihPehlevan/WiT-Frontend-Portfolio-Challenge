export default function Footer() {
  return (
    <footer className=" bg-dark-footer-bg py-6 lg:py-16">
      <div className="flex flex-col w-4/5 mx-auto gap-3 lg:max-w-7xl lg:gap-10">
        <h3 className="text-2xl font-inter font-semibold text-dark-heading">
          Let's work together on your next product.
        </h3>
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
          <span className="flex gap-1">
            <span className="pt-1">👉</span>
            <span className="text-xl underline underline-offset-3 font-inter font-medium text-dark-tertiary">
              almilasucode@gmail.com
            </span>
          </span>
          <div className="flex gap-8">
            <span className="text-dark-cta-button-bg">Personal Blog</span>
            <span className="text-dark-footer-github">Github</span>
            <span className="text-dark-footer-linkedIn">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
