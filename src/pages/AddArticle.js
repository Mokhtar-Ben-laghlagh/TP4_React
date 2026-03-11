import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddArticle({ addArticle }) {
    const navigate = useNavigate();
    const [titre, setTitre] = useState('');
    const [contenu, setContenu] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!titre.trim()) newErrors.titre = 'Le titre est obligatoire.';
        if (!contenu.trim()) newErrors.contenu = 'Le contenu est obligatoire.';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        addArticle({ titre, contenu });
        navigate('/');
    };

    return (
        <div className="card p-4 shadow-sm">
            <h2 className="mb-4">➕ Nouvel article</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Titre</label>
                    <input
                        type="text"
                        className={`form-control ${errors.titre ? 'is-invalid' : ''}`}
                        value={titre}
                        onChange={(e) => setTitre(e.target.value)}
                    />
                    {errors.titre && <div className="invalid-feedback">{errors.titre}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Contenu</label>
                    <textarea
                        className={`form-control ${errors.contenu ? 'is-invalid' : ''}`}
                        rows={5}
                        value={contenu}
                        onChange={(e) => setContenu(e.target.value)}
                    />
                    {errors.contenu && <div className="invalid-feedback">{errors.contenu}</div>}
                </div>
                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-success">💾 Publier</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddArticle;