import Icon from "@/components/ui/Icon";

const resumes = [
  {
    name: "Software Engineer",
    href: "/resumes/anthony-software-engineer-resume.pdf",
    description: "Software engineering and software development-focused applications.",
    enabled: true,
  },
  {
    name: "Front-End Developer",
    href: "/resumes/anthony-frontend-developer-resume.pdf",
    description: "Frontend and UI engineering-focused applications.",
    enabled: false,
  },
  {
    name: "Web Developer",
    href: "/resumes/anthony-web-developer-resume.pdf",
    description: "General web-development applications.",
    enabled: false,
  },
];

export default function ResumeSection() {
  const visibleResumes = resumes.filter((resume) => resume.enabled);
  return (
    <section id="resume" className="antSection antResumeCardsSection">
      <div className="antSectionHead">
        <div>
          <p className="antKicker">05 / RESUME</p>
          <h2>Role-focused resumes for different opportunities.</h2>
        </div>

        <p>
          Preview or download the resume tailored to the type of role
          you&apos;re hiring for.
        </p>
      </div>

      <div className="antResumeCards">
        {visibleResumes.map(({ name, href, description }, index) => (
          <article className="antResumeRoleCard" key={name}>
            <div className="antResumeRoleTop">
              <small>{String(index + 1).padStart(2, "0")}</small>

              <div className="antResumeFileIcon">
                <Icon name="file" size={23} />
              </div>
            </div>

            <div className="antResumeRoleCopy">
              <span>ROLE-FOCUSED RESUME</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>

            <div className="antResumeRoleActions">
              <a href={href} target="_blank" rel="noreferrer">
                View PDF <Icon name="arrow" size={15} />
              </a>

              <a href={href} download>
                Download <Icon name="download" size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
