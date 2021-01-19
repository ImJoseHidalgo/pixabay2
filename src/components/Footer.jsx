import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="description">
        <h2>Imágenes gratuitas que puedes usar desde cualquier lugar</h2>
        <h2>Este sitio muestra imágenes sin derechos de autor proporcionadas por la API de Pixabay. Todos los contenidos se publican bajo la Licencia Pixabay, que los hace seguros para usar sin pedir permiso o dar crédito al artista, incluso con fines comerciales.</h2>
        <a href='https://pixabay.com/es/service/faq/' target='_blank' >Saber Más</a>
      </div>
      <div className="author">
        <div className="left">
          <h2>Desarrollado por: <a target='_blank' href='https://github.com/imjosehidalgo'>Jose Hidalgo</a></h2>
        </div>
        <div className="right">
          <h2>Diseño inspirado en: <a target='_blank' href='https://www.behance.net/gallery/98193191/Pixabay-redesign?tracking_source=search_projects_recommended%7Cpixabay'>Pixabay Redesign</a></h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
