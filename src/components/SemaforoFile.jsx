import { useEffect, useState } from 'react';
import '../components/SemaforoFile.css';

export function SemaforoComponent() {
  
  // Con el useState Controlamos el Estado de la variable.

  const [prende, setPrende] = useState(0);


  // useEffect controla , montaje, actualizacacion y desmontaje. 

  useEffect(() => {
    const timer = setTimeout(() => {

      // Logica y manipulacion del indice

      // cuando se ejecuta el montaje el indice es 0

      // ........... = 0 (en el montaje indice 0)
      // (0 + 1) % 3 = 1
      // (1 + 1) % 3 = 2
      // (2 + 1) % 3 = 0
      // (3 + 1) % 3 = 1
      // (3 + 2) % 3 = 2
      // (3 + 3) % 3 = 0
      // .
      // .
      // .
      // ((n) + 1) % 3 =
      // ((n + 1) + 1) % 3 =

      setPrende((prende + 1) % 3);
    }, 2000);

    // Aqui para efectos de rendimiento consideramos una funcion cleanUp

    return () => {
      clearTimeout(timer);
    };
  }, [prende]);


  // useEffect se ejecuta cada que a dependecia 'prende' cambia, es buena practica
  // colocar un arreglo vacio, o indicar alguna o varias dependecias. 

  return(
    <>
      <h1>Semáforo</h1>
      <div className="div-semaforo">
        <div className={`circulo ${prende === 0 ? 'activado' : null}`}></div>
        <div className={`circulo ${prende === 1 ? 'activado' : null}`}></div>
        <div className={`circulo ${prende === 2 ? 'activado' : null}`}></div>
      </div>
    </>
  );
};