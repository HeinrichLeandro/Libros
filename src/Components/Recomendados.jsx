import './Estilos.css';
import React from 'react'
import { useEffect } from 'react'

function Recomendados({onBookData}) {
    
function masVistos(){
    // var search = document.getElementById('searchInput').value;
    const apiUrl =
    'https://www.googleapis.com/books/v1/volumes?q=a&key=AIzaSyDfeBesAAxCA8CyF3ebH1-ea_wYUna70rQ&orderBy=relevance&maxResults=2' ;

    //  +
    // (publisher !== 'Editorial' ? `&inpublisher=${publisher}` : '') +
    // (year !== 'Año de publicación' ? `&publishedDate=${year}` : '') +
    // (isbn !== 'Codigo ISBN' ? `&isbn=${isbn}` : '') +
    // (author !== 'Autor' ? `&inauthor=${author}` : '') +
    // (language !== 'Idioma' ? `&language=${language}` : '') +
    // (edition !== 'Edición' ? `&edition=${edition}` : '');

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Respuesta de la API:', data);
        onBookData(data.items);
      })
      .catch(error => {
        console.error('Error:', error);
      });

      

    };
    window.afterAll = masVistos()



  return ( 
  <div className='recomendados'>

    <ul class="nav nav-underline justify-content-center">
        <li class="nav-item">
            <a class="nav-link link-dark" aria-current="page" href="#">Recomendados</a>
        </li>
        <li class="nav-item">
            <a class="nav-link link-dark" href="#">Mas Vendidos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link link-dark" href="#">Novedades</a>
        </li>
    </ul>

    </div>

    )
}

export default Recomendados