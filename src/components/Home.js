import React from 'react';
import './Home.css';


function Home() {

  const cards = [
    {
      id: 1,
      src: require("./img/lets-eat/accueil.png"),
      name: "Blog Let's eat",
      alt: "Image d'illustration",
      demo: 'https://princessai.github.io/lets-eat/',
      code: 'https://github.com/Princessai/lets-eat'
    },
    {
      id: 2,
      src: require("./img/interface-comeUp/home1.png"),
      name: 'Interface ComeUp',
      alt: "Image d'illustration",
      demo: 'https://princessai.github.io/projet-jQuery/',
      code: 'https://github.com/Princessai/projet-jQuery'
    },
    {
      id: 3,
      src: require("./img/galerie-JS/galerie-JS.png"),
      name: 'Galerie photo',
      alt: "Image d'illustration",
      demo: 'https://princessai.github.io/galerie-JS/',
      code: 'https://princessai.github.io/galerie-JS/'
    },
    {
      id: 4,
      src: require("./img/interface-glovo/homepage2.png"),
      name: "Interface Glovo",
      alt: "Image d'illustration",
      demo: 'https://princessai.github.io/glovo/',
      code: 'https://github.com/Princessai/glovo'
    },
    {
      id: 5,
      src: require("./img/interface-bootstrap/first-section.png"),
      name: 'Site Bootstrap',
      alt: "Image d'illustration",
      demo: '',
      code: ''
    },
    {
      id: 6,
      src: require("./img/interface-flexBox/homepage.png"),
      name: 'Site Flexbox',
      alt: "Image d'illustration",
      demo: 'https://princessai.github.io/projetFlexbox/',
      code: 'https://github.com/Princessai/projetFlexbox'
    },
    {
      id: 7,
      src: require("./img/pomodoro.png"),
      name: 'Pomodoro infinie',
      alt: "Image d'illustration",
      demo: 'https://princessai.github.io/pomodoro-react/',
      code: 'https://github.com/Princessai/pomodoro-react'
    },
    {
      id: 8,
      src: require("./img/calculatrice.png"),
      name: 'Calculatrice jQuery',
      alt: "Image d'illustration",
      demo: 'https://princessai.github.io/projet-calculatrice/',
      code: 'https://github.com/Princessai/projet-calculatrice'
    },

  ];

  return (
    <div>

      <section className='presentation mt-5 mb-5'>
        <div className='text'>
          <h1>Bonjour !</h1>
          <p>
            Je suis Oumou Coulibaly, <br />
            Développeuse Front-End.
          </p>
          <a href="./cv/CV.docx" download className='btn '>Télécharger mon CV</a>

        </div>

        <div className='illustration'></div>
      </section>

      <section className='some-projects mt-5' >
        <h2 className='mb-5 mt-5'>Quelques projets</h2>
        <div className='d-flex' style={{
          justifyContent: "space-around"
        }}>
          {cards.map(card => {
            return (
              <div className="card mb-5" style={{
                width: '25rem',
                height: '20rem',
                margin: '10px',
                borderRadius: '15px'
              }}>
                <img src={card.src} className="card-img-top" alt={card.alt} />
                <div className="card-body">
                  <h5 className="card-title" style={{
                    textAlign: 'center',
                    fontSize: '30px',
                  }}>{card.name} </h5>
                </div>

                <div className='boutons d-flex justify-content-around'>
                  <a href={card.demo} target='_blank'>Demo</a>
                  <a href={card.code} target='_blank'>Code Source</a>

                </div>
              </div>
            )
          })
          }
        </div>

      </section>

    </div>
  )
}

export default Home
