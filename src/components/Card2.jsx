import photoProfil from '../assets/profil.jpg';

function Card2() {
  return (
    <section>
      <h1>Moi c'est Baptiste Courtadon</h1>
      <div className="presentation">
        <div className="bubble">
          <img src={photoProfil} alt="Photo de profil d'un beau gosse" />
        </div>
        <div className="presentationText">
          <p>J'ai 25 ans et je vis à Clermont-Ferrand</p>
          <p>Je sais à première vue on se dit "Waouh" en me voyant</p>
          <p>Mais je ne suis pas qu'un physique ! Je vous jure !</p>
        </div>
      </div>
    </section>
  );
}

export default Card2;
