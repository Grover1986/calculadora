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

            </div>
        </div>
    );
}

export default App;
