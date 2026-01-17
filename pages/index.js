import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ frontmatter, content }) {
  return (
    <main style={{ maxWidth: 700, margin: "4rem auto", fontFamily: "sans-serif" }}>
      <h1>{frontmatter.title}</h1>
      <h2 style={{ color: "#666" }}>{frontmatter.subtitle}</h2>

      {frontmatter.heroImage && (
        <img
          src={frontmatter.heroImage}
          alt="Headshot"
          style={{ width: 200, borderRadius: "50%", margin: "2rem 0" }}
        />
      )}

      <p>{content}</p>
    </main>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "home.md");
  const file = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(file);

  return {
    props: {
      frontmatter: data,
      content,
    },
  };
}