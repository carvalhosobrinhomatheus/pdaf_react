import React, { useState, useEffect } from 'react';
import { async } from 'q';

export default function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect( async () => {
    const response = await fetch('https://api.github.com/users/MatheusCarvalhoS/repos');
    const data = await response.json();
    localStorage.setItem("token", "teste");
    setRepositories(data);
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);


  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    })
    setRepositories(newRepositories);
  }

  return (
    <div>
      <ul>
        {repositories.map(repo =>
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>(Favorito)</span>}
            <button onClick={() => handleFavorite(repo.id)}>
              {repo.favorite === true ?
                <span>Desfavoritar</span> : <span>Favoritar</span>}
            </button>
          </li>)}
      </ul>
      <button onClick={() => localStorage.clear()}>
              <span>deletar localStorage</span>
      </button>
    </div>
  );
}