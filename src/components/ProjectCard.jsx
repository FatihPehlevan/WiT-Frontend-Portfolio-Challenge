export default function ProjectCard({ project }) {
  const { img, title, summary, tags } = project;
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{summary}</p>
        <div className="card-actions justify-start">
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
