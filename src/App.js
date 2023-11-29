import logo from './logo.svg';
import './App.css';
import react, {useState, useEffect} from 'react'
import bambi from './images/ice-skating-bambi.gif'
import ohcanada from './images/ohcanada.gif'

function App() {

  const [image, setImage] = useState(null)

  function handleChangeBambi () {
    setImage(bambi)
  }

  function handleChangeCanada () {
    setImage(ohcanada)
  }

  return (
    <div className="App">
      <h1>Tia's Festive Itinerary</h1>

      <div>
        <img src={image}/>
      </div>

      <section className='list'>
        <section className='item' onClick={handleChangeBambi}>
          <section>
            <h3>Dec 09</h3>
          </section>
         <section>
            <h3>Nathan Philips Square Skate</h3>
            <h4> 6 PM - 9 PM | BYO SKATES OR RENT</h4>
          </section>
        </section>

        <section className='item' onClick={handleChangeCanada}>
          <section>
            <h3>Dec 16</h3>
          </section>
         <section>
            <h3>Winterfest at Wonderland</h3>
            <h4> 5 PM - 10 PM | 24.99 W/ 4 + PPL</h4>
          </section>
        </section>
        
      </section>
    </div>
  );
}

export default App;
