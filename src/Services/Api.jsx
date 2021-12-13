import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

import './Api.css';

const api = 'https://kitsu.io/api/edge/';

const LIMIT = 12;

function API(){
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');


  useEffect(() => {
    setInfo({});
   if (text){
     fetch(`${api}anime?filter[text]=${text}&page[limit]=${LIMIT}`)
     .then((response) => response.json())
     .then((response) => {
       setInfo(response);
     });
   }
  }, [text]);
  
  return (  
    <div className="">
    < SearchInput
    value={text}
    onChange={(search) => setText(search)}
    />
    {text && !info.data &&(
      <span>Carregando...</span>
    )}
    {info.data && (
      <ul className='animes-list'>
        {info.data.map((anime) => (
          <li className='info-api' key={anime.id}>
            <img
            src={anime.attributes.posterImage.small}
            alt={anime.attributes.canonicalTitle}
            />
              {anime.attributes.canonicalTitle}
              <p>Total de Episódios:</p>
              {anime.attributes.episodeCount}
            </li>
        ))}
      </ul>
    )} 
    </div>
  );
}



export default API;

