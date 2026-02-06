import Link from "next/link";
import styles from "./page.module.css";
import {
  experience,
  profile,
  projects,
  skills,
  socials,
  testimonials,
} from "@/data/profile";

export default function Home() {
  return (
    <div className={styles.shell}>
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.role}>{profile.role}</span>
          <h1>{profile.name}</h1>
          <p className={styles.tagline}>{profile.tagline}</p>
          <div className={styles.availability}>
            <span>{profile.location}</span>
            <span className={styles.separator}>•</span>
            <span>{profile.availability}</span>
          </div>
        </div>
        <div className={styles.heroActions}>
          <Link
            className={`${styles.actionButton} ${styles.primary}`}
            href={`mailto:${profile.email}`}
          >
            Start a project
          </Link>
          <nav className={styles.socials}>
            {socials.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>About</h2>
          <div className={styles.columns}>
            {profile.about.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Featured Work</h2>
            <span>Selected projects and initiatives</span>
          </div>
          <div className={styles.grid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>{project.title}</h3>
                  <span>{project.stack.join(" • ")}</span>
                </div>
                <p>{project.description}</p>
                <Link
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkLabel} {"->"}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Experience</h2>
            <span>Meaningful roles & responsibilities</span>
          </div>
          <div className={styles.timeline}>
            {experience.map((item) => (
              <article key={item.company} className={styles.timelineItem}>
                <div className={styles.timelineMarker} />
                <div className={styles.timelineBody}>
                  <div className={styles.timelineHeader}>
                    <h3>{item.company}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className={styles.role}>{item.role}</p>
                  <ul>
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Capabilities</h2>
            <span>Tools and practices I rely on</span>
          </div>
          <div className={styles.skills}>
            {skills.map((group) => (
              <div key={group.category} className={styles.skillGroup}>
                <span>{group.category}</span>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Testimonials</h2>
            <span>Feedback from collaborators</span>
          </div>
          <div className={styles.testimonials}>
            {testimonials.map((quote) => (
              <figure key={quote.name} className={styles.testimonial}>
                <blockquote>{quote.quote}</blockquote>
                <figcaption>
                  {quote.name} - {quote.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Let&apos;s build something resilient together.</h2>
          <p>
            Share a challenge that excites you, and I&apos;ll outline a path to get it
            shipped.
          </p>
        </div>
        <Link
          className={`${styles.actionButton} ${styles.secondary}`}
          href={`mailto:${profile.email}`}
        >
          Email {profile.email}
        </Link>
      </footer>
    </div>
  );
}
