export default function Footer() {
  return (
    <footer className=" bg-dark-footer-bg py-6">
      <div className="flex flex-col w-4/5 mx-auto gap-3">
        <h3 className="text-2xl font-inter font-semibold">
          Let's work together on your next product.
        </h3>
        <div className="flex flex-col gap-3">
          <span className="flex gap-1">
            <span>👉</span>
            <span className="text-xl underline">almilasucode@gmail.com</span>
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
