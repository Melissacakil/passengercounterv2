import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"


function App(){
    const [sayac, setSayac] = useState(0);
    const [kayitlar, setKayitlar] = useState([]);
    useEffect(() => {
        const storedTotal = localStorage.getItem('totalYolcu');
        if (storedTotal) {
          setSayac(parseInt(storedTotal));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('totalYolcu', sayac.toString());
      }, [sayac]);
    

    const incrementButon = () => {
      setSayac(sayac + 1);
    };
    const saveButon = () => {
        setKayitlar([...kayitlar, sayac]);
        setSayac(0);
      };
      const toplam = kayitlar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

return(
<>
<h1>People Entired:{sayac} </h1>
<button  className='btn btn-outline-primary' id='buton1'onClick={incrementButon}>INCREMENT</button>
<button  className='btn btn-outline-dark' id='buton2' onClick={saveButon}>SAVE</button>
<div>
        <h2>Kayıtlar:</h2>
        <ul>
          {kayitlar.map((kayit, index) => (
            <li key={index}>{kayit}</li>
          ))}
        </ul>
        <p>Toplam: {toplam} Yolcu </p>
      </div>
      </>
)
          }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

