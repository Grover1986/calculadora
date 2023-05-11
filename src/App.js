import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'

function App() {
    return (
        <div className='App'>
            <div className='freecodecamp-logo-contenedor'>
                <img 
                className='freecodecamp-logo' 
                src={freeCodeCampLogo} 
                alt='Logo de freecodecamp' />
            </div>
            <div className='contenedor-calculadora'>
                {/* 4 filas para los números y signos */}
                <div className='fila'></div>
                <div className='fila'></div>
                <div className='fila'></div>
                <div className='fila'></div>
                {/* fila para el botón Limpiar */}
                <div className='fila'></div>
            </div>
        </div>
    );
}

export default App;
