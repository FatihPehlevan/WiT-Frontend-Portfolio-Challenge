export default function ProjectCard({ project }) {
  const { img, title, summary, tags } = project;
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body px-0">
        <h2 className="card-title text-dark-subheading font-inter font-normal text-xl">
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
        <div className="flex justify-between underline pt-1">
          <span>Github</span>
          <span>View Site</span>
        </div>
      </div>
    </div>
  );
}
