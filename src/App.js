import './App.css';
import freeCodeCampLogo from './imagenes/logotipo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react'//hooks//


function App() {

    const[numClics, setNumClics] = useState(0);
    

    const manejarClic = () =>{
      setNumClics(numClics +1);
    };
    const reiniciarContador =( )=> {
      setNumClics(0);
    };


  return (
    <div className="App">
      <div className= "logo-contenedor">
        <img className= "logo"
        src={freeCodeCampLogo} 
        alt="logo de mi pagina"/>
      </div>
      <div className="contenedor-principal">
        <Contador
        numClics= {numClics} />
        <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
          <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
};

export default App;
