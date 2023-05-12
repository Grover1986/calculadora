import React from 'react';
import '../css/Boton.css'

function Boton(props) {

    const esOperador = valor => {
        // si estos tres valores son verdaderos será true y quiere decir q contiene un Operador
        // si uno de estos es falso entonces será false ya q no contiene un Operador
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    }

    return (
        // le agregamos dos atributos importantes, la clase y q es lo q hará el botón cuando se haga clic
        // creamos una clase más elaborada para decidir cual será la clase del Boton ya q en la calculadora necesitaremos disintos estilos para los distintos valores del Botón
        // si el Botón tendrá un Operador el fondo será verde y si es un número el color será distinto
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>  {/* en vez de null le ponemos '' y quitamos el espacio final */}
            {/* hasta el momento todos los componentes q hemos creado han tenido una sola etiqueta la de apertura, pero tmb un componente q definamos puede tener etiqueta de apertura
            y de cierre */}
            {/* y todo lo q incluyamos dentro de las etiquetas de apertura y de cierre podemos usarlo con props.children q quiere decir descendientes o hijos */}
            {/* veamos un ejemplo ya q este componente ya puede renderizarse en App.js */}
            {props.children}
        </div>
    )
}

export default Boton;