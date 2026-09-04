import Icon, { type IconName } from "@/components/ui/Icon";
import type { Project } from "@/data/projects";

const icons: Record<Project["category"], IconName> = {
  "personal-portfolio": "code",
  internship: "briefcase",
  fyp: "graduation",
  university: "book",
};

export default function AnthonyProjectCard({ project }: { project: Project }) {
  return (
    <article className="antProjectCard antProjectCardEnhanced">
      <div className="antProjectAccentLine"/>
      <div className="antProjectTop">
        <div className="antProjectTitleMeta">
          <div className="antIconBox"><Icon name={icons[project.category]} size={20}/></div>
          <span>{project.status === "placeholder" ? "PLACEHOLDER" : "LIVE"}</span>
        </div>
        <small>CASE STUDY</small>
      </div>

      <div className="antProjectVisual antProjectVisualEnhanced" aria-hidden="true">
        <div className="antVisualNoise"/>
        <div className="antVisualWindow">
          <div className="antWindowHead"><i/><i/><i/></div>
          <div className="antWindowBody">
            <b/><b/>
            <div><span/><span/><span/></div>
          </div>
        </div>
        <div className="antVisualPanel">
          <span>HERO SHOT</span>
          <strong>Real screenshot or UI preview will be placed here later.</strong>
        </div>
      </div>

      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="antTags">{project.stack.map((x)=><span key={x}>{x}</span>)}</div>
      <div className="antProjectBottom"><span>Case study later</span><Icon name="arrow" size={16}/></div>
    </article>
  );
}
