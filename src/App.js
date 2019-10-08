import React, { useState, useEffect } from 'react';
import { spreadElement } from '@babel/types';

export default function App(){

  const [repositories, setRepositories] = useState([]);

  function handleAddRepository(){
    setRepositories([...repositories, {id: Math.random(), name: 'Novo repo'}])
  }

  useEffect( async () => {
    const response = await fetch('https://api.github.com/users/MatheusCarvalhoS/repos');
    const data = await response.json();

    setRepositories(data);
  }, []);

  useEffect(() => {

  }, []);


  function handleFavorite(id){
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite} : repo;
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
            <button onClick={() => handleFavorite(repo.id)}>{repo.favorite === true ? <span>Desfavoritar</span> : <span>Favoritar</span>}</button>
          </li>)}
      </ul>
      
    </div>
  );
}