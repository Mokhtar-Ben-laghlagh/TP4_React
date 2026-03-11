import ArticleList from '../components/ArticleList';

function Accueil({ articles, deleteArticle }) {
    return (
        <div>
            <h2 className="mb-4">📋 Articles récents</h2>
            <ArticleList articles={articles} deleteArticle={deleteArticle} />
        </div>
    );
}

export default Accueil;