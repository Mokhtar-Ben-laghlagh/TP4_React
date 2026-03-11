import ArticleDetail from '../components/ArticleDetail';

function Article({ articles, deleteArticle }) {
    return <ArticleDetail articles={articles} deleteArticle={deleteArticle} />;
}

export default Article;