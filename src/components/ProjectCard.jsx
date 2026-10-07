export default function ProjectCard({ project }) {
  const { img, title, summary, tags } = project;
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body px-0 pb-0">
        <h2 className="card-title text-dark-project-title font-inter font-normal text-xl lg:text-3xl lg:font-medium">
          {title}
        </h2>
        <p>{summary}</p>
        <div className="card-actions justify-start pt-1">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-outline font-inter, text-logo-text bg-dark-link-bg pb-0.5 leading-none"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex justify-between underline underline-offset-2 pt-1 font-inter lg:font-medium">
          <span className="text-dark-cta-button-bg">Github</span>
          <span className="text-dark-cta-button-bg">View Site</span>
        </div>
      </div>
    </div>
  );
}
