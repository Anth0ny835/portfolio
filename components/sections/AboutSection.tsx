import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { about } from "@/data/about";

const skillGroups = [
  {
    label: "CORE",
    items: about.technicalSkills.core,
  },
  {
    label: "DEVELOPMENT",
    items: about.technicalSkills.development,
  },
  {
    label: "DATA & INTEGRATION",
    items: about.technicalSkills.dataAndIntegration,
  },
  {
    label: "TOOLS",
    items: about.technicalSkills.tools,
  },
] as const;

const featuredAchievement = about.achievements[0];

const supportingAchievements =
  about.achievements.slice(1);

export default function AboutSection() {
  return (
    <section id="about" className="antSection antAbout">
      {/* HEADER */}
      <header className="antAboutHeader">
        <div>
          <p className="antKicker">04 / ABOUT</p>

          <h2>
            Built around curiosity,
            <span> structure and iteration.</span>
          </h2>
        </div>

        <p>
          A closer look at how I approach problems, what I enjoy working on,
          and the technical foundation I&apos;m continuing to build.
        </p>
      </header>

      {/* PROFILE */}
      <div className="antAboutHero">
        <figure className="antAboutPortrait">
          <div className="antAboutPortraitFrame">
            <Image
              src={about.profileImage}
              alt="Anthony Tan Jia Wei"
              width={680}
              height={820}
              priority
            />
          </div>

          <figcaption>
            <span>ANTHONY TAN JIA WEI</span>
            <small>Computer Science · Network Engineering</small>
          </figcaption>
        </figure>

        <div className="antAboutIdentity">
          <span className="antMiniTitle">PROFILE / DEVELOPER</span>

          <h3>
            I like knowing
            <span> why it works.</span>
          </h3>

          <p className="antAboutIntro">
            {about.intro}
          </p>

          <p className="antAboutSummary">
            {about.professionalSummary}
          </p>

          <div className="antAboutSignals">
            <article>
              <Icon name="graduation" size={19} />

              <div>
                <small>EDUCATION</small>
                <strong>{about.education.degree}</strong>
                <span>{about.education.university}</span>
                <span>{about.education.period}</span>
              </div>
            </article>

            <article>
              <Icon name="book" size={19} />

              <div>
                <small>CURRENT CGPA</small>
                <strong className="antAboutCgpa">
                  {about.education.cgpa.value}
                </strong>
              </div>
            </article>

            <article>
              <Icon name="user" size={19} />

              <div>
                <small>HOW I WORK</small>
                <strong>
                  {about.workingStyle.join(" · ")}
                </strong>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* DEVELOPER PROFILE */}
      <section className="antAboutBlock">
        <div className="antAboutBlockHead">
          <span>01</span>

          <div>
            <small>DEVELOPER PROFILE</small>
            <h3>What keeps me curious.</h3>
          </div>
        </div>

        <div className="antAboutProfileGrid">
          <article>
            <span className="antMiniTitle">I ENJOY</span>

            <div className="antAboutPills">
              {about.enjoys.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          <article>
            <span className="antMiniTitle">I LIKE TO BUILD</span>

            <div className="antAboutPills">
              {about.developmentInterests.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          <article>
            <span className="antMiniTitle">CURRENTLY DEVELOPING</span>

            <div className="antAboutPills antAboutPillsLearning">
              {about.currentlyDeveloping.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* TECHNICAL TOOLKIT */}
      <section className="antAboutBlock">
        <div className="antAboutBlockHead">
          <span>02</span>

          <div>
            <small>TECHNICAL TOOLKIT</small>
            <h3>Tools behind the work.</h3>
          </div>
        </div>

        <div className="antAboutToolkit">
          {skillGroups.map((group) => (
            <article key={group.label}>
              <span>{group.label}</span>

              <div>
                {group.items.map((skill) => (
                  <strong key={skill}>{skill}</strong>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REFLECTION */}
      <section className="antAboutBlock">
        <div className="antAboutBlockHead">
          <span>03</span>

          <div>
            <small>WHAT SHAPED HOW I WORK</small>
            <h3>Learning through building.</h3>
          </div>
        </div>

        <div className="antAboutReflections">
          <article>
            <div className="antAboutReflectionTop">
              <span>01</span>
              <small>INDUSTRIAL TRAINING</small>
            </div>

            <h4>Working beyond the first version.</h4>

            <p>{about.internshipReflection}</p>
          </article>

          <article>
            <div className="antAboutReflectionTop">
              <span>02</span>
              <small>FINAL YEAR PROJECT</small>
            </div>

            <h4>Connecting the pieces into one system.</h4>

            <p>{about.fypReflection}</p>
          </article>
        </div>
      </section>

      {/* RECOGNITION */}
      {/* <section className="antAboutBlock">
        <div className="antAboutBlockHead">
          <span>04</span>

          <div>
            <small>RECOGNITION & LEADERSHIP</small>
            <h3>Beyond project work.</h3>
          </div>
        </div>

        <div className="antAboutAchievements">
          {about.achievements.map((achievement, index) => (
            <article
              key={achievement.title}
              className={
                "image" in achievement
                  ? "antAboutAchievement antAboutAchievementFeatured"
                  : "antAboutAchievement"
              }
            >
              {"image" in achievement && (
                <div className="antAboutAchievementImage">
                  <Image
                    src={achievement.image}
                    alt={`${achievement.title} recognition`}
                    width={640}
                    height={360}
                  />
                </div>
              )}

              <div className="antAboutAchievementCopy">
                <div className="antAboutAchievementMeta">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <small>{achievement.type}</small>
                </div>

                <h4>{achievement.title}</h4>

                <p>{achievement.organisation}</p>

                <div className="antAboutAchievementBottom">
                  <span>{achievement.year}</span>
                  <p>{achievement.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      {/* RECOGNITION */}
      <section className="antAboutBlock">
        <div className="antAboutBlockHead">
          <span>04</span>

          <div>
            <small>RECOGNITION & LEADERSHIP</small>
            <h3>Beyond project work.</h3>
          </div>
        </div>

        <div className="antAboutAchievements">
          {/* FEATURED AWARD */}
          <article className="antAboutAchievementFeatured">
            {"image" in featuredAchievement && (
              <div className="antAboutAchievementImage">
                <Image
                  src={featuredAchievement.image}
                  alt={`${featuredAchievement.title} recognition`}
                  width={900}
                  height={520}
                />
              </div>
            )}

            <div className="antAboutAchievementFeaturedCopy">
              <div className="antAboutAchievementMeta">
                <span>01</span>
                <small>{featuredAchievement.type}</small>
              </div>

              <h4>{featuredAchievement.title}</h4>

              <p>{featuredAchievement.organisation}</p>

              <div className="antAboutAchievementBottom">
                <span>{featuredAchievement.year}</span>

                <p>{featuredAchievement.detail}</p>
              </div>
            </div>
          </article>

          {/* SUPPORTING RECOGNITION */}
          <div className="antAboutAchievementStack">
            {supportingAchievements.map(
              (achievement, index) => (
                <article
                  key={achievement.title}
                  className="antAboutAchievementCompact"
                >
                  <div className="antAboutAchievementMeta">
                    <span>
                      {String(index + 2).padStart(2, "0")}
                    </span>

                    <small>{achievement.type}</small>
                  </div>

                  <div className="antAboutAchievementCompactMain">
                    <div>
                      <h4>{achievement.title}</h4>

                      <p>{achievement.organisation}</p>
                    </div>

                    <strong>{achievement.year}</strong>
                  </div>

                  <p className="antAboutAchievementDetail">
                    {achievement.detail}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* LANGUAGES + CERTIFICATES */}
      <section className="antAboutBlock">
        <div className="antAboutBlockHead">
          <span>05</span>

          <div>
            <small>BACKGROUND</small>
            <h3>Languages & credentials.</h3>
          </div>
        </div>

        <div className="antAboutBackgroundGrid">
          <div className="antAboutLanguages">
            <span className="antMiniTitle">LANGUAGES</span>

            {about.languages.map((language) => (
              <article key={language.name}>
                <div>
                  <strong>{language.name}</strong>
                  <span>{language.level}</span>
                </div>

                <p>{language.detail}</p>
              </article>
            ))}

            <div className="antAboutInterests">
              <span className="antMiniTitle">OUTSIDE DEVELOPMENT</span>

              <div>
                {about.interests.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="antAboutCertificates">
            <span className="antMiniTitle">CERTIFICATIONS</span>

            <div className="antAboutCertificateList">
              {about.certifications.map((certificate, index) => (
                <a
                  key={certificate.title}
                  href={certificate.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="antAboutCertificateNo">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <small>
                      {certificate.issuer} · {certificate.year}
                    </small>

                    <strong>{certificate.title}</strong>

                    {"note" in certificate && (
                      <span>{certificate.note}</span>
                    )}
                  </div>

                  <Icon name="arrow" size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}