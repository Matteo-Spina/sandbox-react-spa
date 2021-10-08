import "./Article.css";

function ArticleBlock() {
  return (
    <article className="article-block">
      <header className="article-header">
        <h3 className="article-title">title</h3>
        <p className="article-subtitle">subtitle</p>
      </header>
      <p className="article-content">content</p>
      <footer className="article-footer">
        <p>footer</p>
      </footer>
    </article>
  );
}
export default ArticleBlock;
