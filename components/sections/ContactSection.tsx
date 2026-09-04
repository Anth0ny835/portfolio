import Icon from "@/components/ui/Icon";
import { profile } from "@/data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="antSection antContact">
      <div className="antContactIntro">
        <div>
          <p className="antKicker">06 / CONTACT</p>

          <h2>
            Let&apos;s build
            <span> something useful.</span>
          </h2>
        </div>

        <div className="antContactAvailability">
          <small>AVAILABLE NOW</small>
          <strong>{profile.availability}</strong>

          <p>{profile.contactMessage}</p>
        </div>
      </div>

      <div className="antContactPrimary">
        <div>
          <small>PRIMARY CHANNEL</small>

          <span>Email</span>

          <strong>{profile.email}</strong>
        </div>

        <a href={`mailto:${profile.email}`}>
          Start a conversation
          <Icon name="arrow" size={18} />
        </a>
      </div>

      <div className="antContactChannels">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="linkedin" size={20} />

          <div>
            <small>LINKEDIN</small>
            <strong>Connect professionally</strong>
          </div>

          <Icon name="arrow" size={16} />
        </a>

        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="mail" size={20} />

          <div>
            <small>WHATSAPP</small>
            <strong>Send a message</strong>
          </div>

          <Icon name="arrow" size={16} />
        </a>

        <a href={profile.phoneHref}>
          <Icon name="user" size={20} />

          <div>
            <small>PHONE</small>
            <strong>{profile.phone}</strong>
          </div>

          <Icon name="arrow" size={16} />
        </a>
      </div>

      <div className="antContactSecondary">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
          <strong>github.com/Anth0ny835</strong>
          <Icon name="arrow" size={16} />
        </a>

        <a href="#resume">
          <span>Resume</span>
          <strong>View role-based resumes</strong>
          <Icon name="file" size={16} />
        </a>
      </div>

      <footer className="antFooter">
        <span>Anthony · Portfolio 2026</span>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
