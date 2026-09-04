import Icon from "@/components/ui/Icon";
import { site } from "@/data/site";
import { profile } from "@/data/site";

export default function HomeSection() {
  return (
    <section id="home" className="antSection antLanding">

      <div className="antHomeHero">
        <div className="antHomeIntro">
          <span className="antKicker">01 / HOME</span>

          <p className="antLandingRole">
            {profile.roles.join(" · ")}
          </p>

          <h1>{profile.professionalName}</h1>

          <p className="antLegalName">
            {profile.legalName}
          </p>

          <h2>{profile.positioning}</h2>

          <p className="antLead antLandingLead">
            {profile.statusLine}
          </p>

          <div className="antActions antLandingActions">
            <a className="antPrimary" href="#projects">
              {profile.primaryCta}
              <Icon name="arrow" size={17} />
            </a>

            <a className="antSecondary" href="#resume">
              {profile.secondaryCta}
              <Icon name="file" size={17} />
            </a>
          </div>
        </div>

        <aside className="antHomeSnapshot">
          <span className="antHomeSnapshotTitle">
            PROFILE
          </span>

          <div className="antHomeSnapshotRow">
            <small>STATUS</small>
            <strong>{profile.currentStatus}</strong>
          </div>

          <div className="antHomeSnapshotRow">
            <small>LOCATION</small>
            <strong>Selangor / Kuala Lumpur</strong>
            <p>Prefer Kajang MRT Line / Petaling Jaya</p>
          </div>

          <div className="antHomeSnapshotRow">
            <small>FOCUS</small>
            <strong>
              Software · Frontend · Web
            </strong>
          </div>

          <div className="antHomeLinks">
            <a href={`mailto:${profile.email}`}>
              Email
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </aside>
      </div>

      <div className="antHomeProof">
        <article>
          <span>01</span>

          <div>
            <small>INTERNSHIP</small>
            <strong>Digital Twin Dashboard Work</strong>
            <p>
              Dashboard implementation, API integration,
              testing and interface development.
            </p>
          </div>
        </article>

        <article>
          <span>02</span>

          <div>
            <small>PROJECT</small>
            <strong>World Monitor Dashboard</strong>
            <p>
              Svelte monitoring experience structured into
              Overview, Weather and Intel views.
            </p>
          </div>
        </article>

        <article>
          <span>03</span>

          <div>
            <small>FINAL YEAR PROJECT</small>
            <strong>MYAgriTopia</strong>
            <p>
              Smart agriculture, decision support and
              post-quantum security.
            </p>
          </div>
        </article>
      </div>

    </section>
  );
}
