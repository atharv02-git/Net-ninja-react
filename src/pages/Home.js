import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
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
            <Link to={`articles/${article.id}`}>Read more...</Link>
          </div>
        ))}
    </div>
  );
}
