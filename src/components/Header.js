import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='navBar'>

      <nav className="navbar justify-content-between navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <a className="navbar-brand" href="#">Oumou Web Developper</a>
          <div className="navbar-nav">
            <a className="nav-link" href="#">Mes réalisations</a>
            <a className="nav-link" href="#">A propos</a>
            <a className="nav-link" href="#">Contact</a>
          </div>
          <a href='/CV.docx' download className='btn '>Télécharger mon CV</a>
        </div>
      </nav>

    </div>
  )
}

export default Header
