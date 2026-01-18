import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ data }) {
  const { hero, intro, services, lgbtqia, logistics, closingCta } = data;

  return (
    <>
      <header className="soft">
        <section className="container hero">
          <div>
            <h1>{hero.heading}</h1>
            <p>{hero.subheading}</p>
            <a className="button" href="/contact">
              {hero.primaryCta}
            </a>
          </div>

          {hero.image && (
            <img
              src={hero.image}
              alt="Joanna Card, Registered Psychologist"
            />
          )}
        </section>
      </header>

      <main>
        <section className="container">
          <h2>Welcome</h2>
          <p>{intro}</p>
        </section>

        <section className="soft">
          <div className="container">
            <h2>Who I Work With</h2>
            <div className="cards">
              {services.map((s, i) => (
                <div className="card" key={i}>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container">
          <h2>A Safe & Affirming Space</h2>
          <p>{lgbtqia}</p>
        </section>

        <section className="soft">
          <div className="container">
            <h2>Practical Details</h2>
            <ul>
              <li>{logistics.format}</li>
              <li>{logistics.fees}</li>
              <li>{logistics.insurance}</li>
            </ul>
          </div>
        </section>

        <section className="container">
          <h2>{closingCta}</h2>
          <a className="button" href="/contact">
            Get in Touch
          </a>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "home.md");
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);

  return { props: { data } };
}
