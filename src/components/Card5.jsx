import htmlLogo from '../assets/logo/html.png';
import cssLogo from '../assets/logo/css.png';
import javaScriptLogo from '../assets/logo/javascript.png';
import reactLogo from '../assets/logo/react.png';
import nodejsLogo from '../assets/logo/nodejs.png';
import expressLogo from '../assets/logo/express.png';
import apiLogo from '../assets/logo/api.png';
import mongoDBLogo from '../assets/logo/mongodb.png';

function Card5() {
  return (
    <section>
      <h1>Mes compétences ?</h1>
      <div className="skillsPresentation">
        <div>
          <ul>
            <li>
              <img src={htmlLogo} alt="Logo HTML" />
              HTML
            </li>
            <p className="comments">(je fais des &lt;div&gt; comme un chef)</p>
            <li>
              <img src={cssLogo} alt="Logo CSS" />
              CSS
            </li>
            <p className="comments">
              (magicien des pixels et dompteur de margin)
            </p>
            <li>
              <img src={javaScriptLogo} alt="Logo JavaScript" />
              JavaScript
            </li>
            <p className="comments">(je fais des fonctions et tout)</p>
            <li>
              <img src={reactLogo} alt="Logo React" />
              React
            </li>
            <p className="comments">
              (je crée des composants comme si c’étaient des Pokémons)
            </p>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <img src={nodejsLogo} alt="Logo NodeJS" />
              Node.js
            </li>
            <p className="comments">
              (je fais tourner des serveurs plus vite que mon café le matin)
            </p>
            <li>
              <img src={expressLogo} alt="Logo Express" />
              Express
            </li>
            <p className="comments">
              (mes routes sont mieux organisées que le périphérique)
            </p>
            <li>
              <img src={apiLogo} alt="Logo API" />
              API REST
            </li>
            <p className="comments">
              (je livre des données fraîches, sans Uber Eats)
            </p>
            <li>
              <img src={mongoDBLogo} alt="Logo MongoDB" />
              MongoDB
            </li>
            <p className="comments">
              (je gère les bases de données comme un bibliothécaire)
            </p>
          </ul>
        </div>
      </div>
      <div className="skillsText">
        <p>
          Je me suis également formé en WordPress et PHP de façon autodidacte
        </p>
        <p>
          et j'ai une allergie sévère aux sites moches et aux bugs persistants.
        </p>
      </div>
    </section>
  );
}

export default Card5;
