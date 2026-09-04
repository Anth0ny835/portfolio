import Icon from "@/components/ui/Icon";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="antSection antExperience"
    >
      <div className="antSectionHead">
        <div>
          <p className="antKicker">
            03 / EXPERIENCE
          </p>

          <h2>
            From research
            <br />
            to implementation.
          </h2>
        </div>

        <p>
          Practical experience across Digital Twin systems,
          dashboard development, APIs, UI/UX and web
          development.
        </p>
      </div>

      <article className="antExperienceRow">
        <div className="antExperienceYear">
          {experience.year}
        </div>

        <div className="antExperienceBody">
          <div className="antExperienceRole">
            <div className="antIconBox">
              <Icon
                name="briefcase"
                size={20}
              />
            </div>

            <div>
              <span>
                {experience.period}
              </span>

              <h3>
                {experience.role}
              </h3>

              <p className="antExperienceCompany">
                {experience.company}
                <br />
                {experience.team}
              </p>
            </div>
          </div>

          <p className="antExperienceSummary">
            {experience.summary}
          </p>

          <div className="antContributionList">
            {experience.contributions.map(
              (item) => (
                <span key={item.number}>
                  {item.number}

                  <b>
                    {item.title}

                    <small>
                      {item.description}
                    </small>
                  </b>
                </span>
              )
            )}
          </div>

          <div className="antAdditionalExperience">
            <small>
              ADDITIONAL CONTRIBUTIONS
            </small>

            <p>
              {experience.additional}
            </p>
          </div>

          <div className="antExperienceTools">
            <small>
              TOOLS & TECHNOLOGIES
            </small>

            <div className="antTags">
              {experience.tools.map(
                (tool) => (
                  <span key={tool}>
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}