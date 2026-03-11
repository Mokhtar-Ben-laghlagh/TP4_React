import { useParams, Link, useNavigate } from 'react-router-dom';

function ArticleDetail({ articles, deleteArticle }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const article = articles.find((a) => a.id.toString() === id);

    if (!article) return <p className="text-danger">Article non trouvé.</p>;

    const handleDelete = () => {
        if (window.confirm(`Supprimer "${article.titre}" ?`)) {
            deleteArticle(article.id);
            navigate('/');
        }
    };

    return (
        <div className="card p-4 shadow-sm">
            <h1 className="card-title">{article.titre}</h1>
            <p className="card-text mt-3">{article.contenu}</p>
            <div className="d-flex gap-2 mt-4">
                <Link to="/" className="btn btn-secondary">← Retour</Link>
                <Link to={`/article/${article.id}/edit`} className="btn btn-warning">✏️ Éditer</Link>
                <button className="btn btn-danger" onClick={handleDelete}>🗑️ Supprimer</button>
            </div>
        </div>
    );
}

export default ArticleDetail;