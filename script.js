// Sección de práctica
function verificarPractica() {
    const respuesta = document.getElementById('angulo').value.trim();
    const resultado = document.getElementById('resultadoPractica');
    const respuestaCorrecta = '0.5'; // sin(30°) = 0.5

    if (respuesta === '') {
        resultado.textContent = 'Por favor, ingresa una respuesta.';
        resultado.style.color = '#e74c3c';
    } else if (respuesta === respuestaCorrecta) {
        resultado.textContent = '¡Correcto!';
        resultado.style.color = '#27ae60';
    } else {
        resultado.textContent = 'Respuesta incorrecta. Inténtalo de nuevo.';
        resultado.style.color = '#e74c3c';
    }
}

// Calificación de la evaluación
function calificar() {
    const respuestasCorrectas = {
        q1: 'B',
        // Rellena las respuestas correctas para q2 a q10
        q10: 'A'
    };

    let puntuacion = 0;
    const totalPreguntas = Object.keys(respuestasCorrectas).length;

    Object.keys(respuestasCorrectas).forEach((key) => {
        const radios = document.getElementsByName(key);
        for (const radio of radios) {
            if (radio.checked && radio.value === respuestasCorrectas[key]) {
                puntuacion += 1;
            }
        }
    });

    const resultado = document.getElementById('resultadoEvaluacion');
    resultado.textContent = `Tu puntuación es ${puntuacion} de ${totalPreguntas}.`;
}