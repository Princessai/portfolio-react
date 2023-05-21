import React from 'react';
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from 'react-icons/fi';
import '../components/Footer.css'

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: 'https://github.com/Princessai',
  },
  {
    id: 2,
    icon: <FiInstagram />,
    url: 'https://www.instagram.com/',
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/oumou-a%C3%AFda-coulibaly-229679242/',
  },
];


function Footer() {
  return (
    <>
      <div className="container mt-5">
        <div className="">

          <div className="">
            <p className="mb-5 text-center">
              Suivez moi !
            </p>

            <ul className="flex mb-5" style={{
              justifyContent: 'space-between',
              textAlign: 'center',
              alignItems: 'center',
              fontSize: '30px'
            }}>
              {socialLinks.map((link) => (
                <a
                  href={link.url}
                  target="__blank"
                  key={link.id}
                  className="text-gray-400 cursor-pointer p-4"
                >
                  <i className='' style={{
                    color: 'black',
                  }}>
                    {link.icon}
                  </i>
                </a>
              ))}
            </ul>

          </div>

          <div className="text-center">
            <div className="text-lg text-ternary-dark dark:text-ternary-light">
              &copy; {new Date().getFullYear()} &nbsp;
              <a
                href="https://github.com/Princessai/react-portfolio"
                target="__blank"
                style={{
                  color: 'black'
                }}
              >
                React & Bootstrap Portfolio
              </a>
              .
            </div>
          </div>

        </div>
      </div>



    </>


  )
}

export default Footer
