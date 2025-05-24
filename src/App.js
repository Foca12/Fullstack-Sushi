
import './App.css';
import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import logo from './images/logo.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

import Navbar from './components/navbar.jsx';
import Card from './components/card.jsx';

const sushi = [
  {foto:  california, testo: "Un roll magico con tutto il potere dell'oriente e la forza di Goku, la perspicacia di Conan e l'agilità di Doraemon", titolo: "California Roll", id: 1},
  {foto:  dragon, testo: "Un roll magico con tutto il potere dell'oriente e la forza di Goku, la perspicacia di Conan e l'agilità di Doraemon", titolo: "Dragon Roll", id: 2},
  {foto:  dynamite, testo: "Un roll magico con tutto il potere dell'oriente e la forza di Goku, la perspicacia di Conan e l'agilità di Doraemon", titolo: "Dynamite Roll", id: 3},
  {foto:  philadelphia, testo: "Un roll magico con tutto il potere dell'oriente e la forza di Goku, la perspicacia di Conan e l'agilità di Doraemon", titolo: "Philadelphia Roll", id: 4},
  {foto:  rainbow, testo: "Un roll magico con tutto il potere dell'oriente e la forza di Goku, la perspicacia di Conan e l'agilità di Doraemon", titolo: "Rainbow Roll", id: 5},
  {foto:  shrimp, testo: "Un roll magico con tutto il potere dell'oriente e la forza di Goku, la perspicacia di Conan e l'agilità di Doraemon", titolo: "Shrimp Roll", id: 6}
];
function App() {
  
  return (
    <>
      {/* importo navbar */}
      <Navbar titolo="Homepage" immagine={logo} />
    
      <main>
        <div className="container">

          <div className="row d-flex justify-content-center">
            {sushi.map(elemento => {
              return (
                <div className="col-6 col-lg-4 mb-2 d-flex justify-content-center" key={elemento.id}>
                  <Card
                    foto={elemento.foto} 
                    titolo={elemento.titolo} 
                    testo={elemento.testo}
                  />
                </div>
              );
            })}
          </div>



        </div>
      </main> 
    </>
  );
}

export default App;
