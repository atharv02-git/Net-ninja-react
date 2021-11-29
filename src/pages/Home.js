import { useFetch } from "../hooks/useFetch";
// Styles
import "./Home.css";

export default function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");

  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles &&
        articles.map((article) => (
          <div className="card" key={article.id}>
            <div>{article.title}</div>
            <div>~{article.author}</div>
          </div>
        ))}
    </div>
  );
}
