import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';

function App() {

    // vamos a trabajar con el estado aquí directamente, otro enfoque sería haber creado otro componente llamado Calculadora y q ese componente tuviera ese estado.
    // En cualquiera de los dos casos es válido.
    const [input, setInput] = useState('')

    // ahora creamos una función q va actualizar el input
    const addInput = value => {
        setInput(input + value)  // aquí concatenamos nuestro valor inicial con el nuevo valor q recibirá la función, y luego veremos como lo vamos a interpretar
        // como una operación matematica.
    }

    return (
        <div className='App'>
            <div className='freecodecamp-logo-contenedor'>
                <img 
                className='freecodecamp-logo' 
                src={freeCodeCampLogo} 
                alt='Logo de freecodecamp' />
            </div>
            {/* Una alternativa para crear los componentes es crear un componente completo para la Calculadora y luego crear los componentes más pequeños, pero en este caso
            vamos a crear los componentes pequeños como botones y pantalla y los vamos a ubicar aqui en el componente principal de la Aplicación en lugar de crear otro 
            componente de la Calculadora */}
            <div className='contenedor-calculadora'>
                <Pantalla input={input} /> {/* le pasamos el prop input y el valor del estado */}
                {/* 4 filas para los números y signos */}
                <div className='fila'>
                    {/* Ya tenemos nuestra función addInput(), ahora tenemos q hacer q cada vez q se haga clic en un botón se llame a esta función para agregar ese valor */}
                    {/* Para poder hacerlo tenemos q pasarle un prop llamado manejarClic a cada boton, y antes verificamos si nuestro componente Boton esta listo para recibir esa prop, 
                    y vemos q si xq tiene props como parámetro */}
                    <Boton manejarClic={addInput}>1</Boton>
                    <Boton manejarClic={addInput}>2</Boton> {/* listo todos nuestros botones tienen la función addInput, pero notamos q no tienen argumento, ps eso ira en componente Boton */}
                    <Boton manejarClic={addInput}>3</Boton>
                    <Boton manejarClic={addInput}>+</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={addInput}>4</Boton>
                    <Boton manejarClic={addInput}>5</Boton>
                    <Boton manejarClic={addInput}>6</Boton>
                    <Boton manejarClic={addInput}>-</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={addInput}>7</Boton>
                    <Boton manejarClic={addInput}>8</Boton>
                    <Boton manejarClic={addInput}>9</Boton>
                    <Boton manejarClic={addInput}>*</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={addInput}>=</Boton>
                    <Boton manejarClic={addInput}>0</Boton>
                    <Boton manejarClic={addInput}>.</Boton>
                    <Boton manejarClic={addInput}>/</Boton>
                </div>
                {/* fila para el botón Limpiar */}
                <div className='fila'>
                    <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
                </div>
            </div>
        </div>
    );
}

export default App;
