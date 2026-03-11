import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Accueil from './pages/Accueil';
import Article from './pages/Article';
import EditArticle from './pages/EditArticle';
import AddArticle from './pages/AddArticle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [articles, setArticles] = useState([
        { id: 1, titre: 'Premier article', contenu: 'Contenu du premier article.' },
        { id: 2, titre: 'Deuxième article', contenu: 'Contenu du deuxième article.' }
    ]);

    const updateArticle = (id, updatedArticle) => {
        setArticles(articles.map((a) => (a.id === id ? { ...a, ...updatedArticle } : a)));
    };

    const addArticle = (newArticle) => {
        const id = articles.length > 0 ? Math.max(...articles.map((a) => a.id)) + 1 : 1;
        setArticles([...articles, { id, ...newArticle }]);
    };

    const deleteArticle = (id) => {
        setArticles(articles.filter((a) => a.id !== id));
    };

    return (
        <BrowserRouter>
            <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">
                <Link className="navbar-brand" to="/">📰 Mon Blog</Link>
                <Link className="btn btn-success btn-sm" to="/ajouter">+ Nouvel article</Link>
            </nav>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Accueil articles={articles} deleteArticle={deleteArticle} />} />
                    <Route path="/article/:id" element={<Article articles={articles} deleteArticle={deleteArticle} />} />
                    <Route
                        path="/article/:id/edit"
                        element={<EditArticle articles={articles} updateArticle={updateArticle} />}
                    />
                    <Route path="/ajouter" element={<AddArticle addArticle={addArticle} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;