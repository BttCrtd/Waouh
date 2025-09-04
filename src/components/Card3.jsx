import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalculator,
  faChalkboardUser,
} from '@fortawesome/free-solid-svg-icons';

function Card3() {
  return (
    <section>
      <div className="logoAndText">
        <div className="logo">
          <FontAwesomeIcon icon={faCalculator} className="myIcon" />
        </div>
        <div className="text">
          <h2>J'ai une licence en mathématiques</h2>
          <p className="rightComments">(pas dégueu ma foi)</p>
        </div>
      </div>
      <div className="logoAndText">
        <div className="text">
          <h2>Un master 1 MEEF second degré</h2>
          <p className="rightComments">
            (Mais les gosses, c'est vraiment pas pour moi...)
          </p>
        </div>
        <div className="logo">
          <FontAwesomeIcon icon={faChalkboardUser} className="myIcon" />
        </div>
      </div>
      <p>Du coup...</p>
    </section>
  );
}

export default Card3;
