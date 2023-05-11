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
            {/* Una alternativa para crear los componentes es crear un componente completo para la Calculadora y luego crear los componentes más pequeños, pero en este caso
            vamos a crear los componentes pequeños como botones y pantalla y los vamos a ubicar aqui en el componente principal de la Aplicación en lugar de crear otro 
            componente de la Calculadora */}
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
