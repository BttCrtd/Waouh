import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

function Card11() {
  return (
    <section className="bye">
      <h1>Allez ! À très vite ! </h1>
      <h2>Baptiste Courtadon</h2>
      <div className="coordonnees">
        <p>
          <FontAwesomeIcon icon={faPhone} />{' '}
          <a href="tel:+33000000000">+33 6 47 76 00 63</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />{' '}
          <a href="mailto:courtadon.baptiste@gmail.com">
            courtadon.baptiste@gmail.com
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faGlobe} />{' '}
          <a
            href="https://bttcrtd.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </p>
      </div>
    </section>
  );
}

export default Card11;
