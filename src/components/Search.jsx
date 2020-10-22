import React from "react"
import '../assets/styles/components/Search.scss'

const main_title_text = '¿Qué quieres ver hoy?'
const main_input_placeholder_text = 'Buscar...'
const Search = () => (
  <section className="main">
    <h2 className="main__title">{main_title_text}</h2>
    <input className="main__input" type="text" placeholder={main_input_placeholder_text} />
  </section>
);

export default Search;
