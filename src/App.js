import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla';

function App() {
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
                <Pantalla />
                {/* 4 filas para los números y signos */}
                <div className='fila'>
                    <Boton>1</Boton>
                    <Boton>2</Boton>
                    <Boton>3</Boton>
                    <Boton>+</Boton>
                </div>
                <div className='fila'>
                    <Boton>4</Boton>
                    <Boton>5</Boton>
                    <Boton>6</Boton>
                    <Boton>-</Boton>
                </div>
                <div className='fila'>
                    <Boton>7</Boton>
                    <Boton>8</Boton>
                    <Boton>9</Boton>
                    <Boton>*</Boton>
                </div>
                <div className='fila'>
                    <Boton>=</Boton>
                    <Boton>0</Boton>
                    <Boton>.</Boton>
                    <Boton>/</Boton>
                </div>
                {/* fila para el botón Limpiar */}
                <div className='fila'></div>
            </div>
        </div>
    );
}

export default App;
