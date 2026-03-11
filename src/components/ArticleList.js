import { Link } from 'react-router-dom';

function ArticleList({ articles, deleteArticle }) {
    const handleDelete = (id, titre) => {
        if (window.confirm(`Supprimer "${titre}" ?`)) {
            deleteArticle(id);
        }
    };

    return (
        <div className="list-group">
            {articles.length === 0 && (
                <p className="text-muted">Aucun article. Cliquez sur "+ Nouvel article" pour commencer.</p>
            )}
            {articles.map((article) => (
                <div key={article.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <Link to={`/article/${article.id}`} className="text-decoration-none fw-bold">
                        {article.titre}
                    </Link>
                    <div className="d-flex gap-2">
                        <Link to={`/article/${article.id}/edit`} className="btn btn-sm btn-outline-secondary">
                            ✏️ Éditer
                        </Link>
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete(article.id, article.titre)}
                        >
                            🗑️ Supprimer
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ArticleList;