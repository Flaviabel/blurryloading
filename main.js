loading = document.querySelector('.loading-text');
bg = document.querySelector('.bg');
contador = 0;
intervalo = setInterval(porcentaje, 20);
// desvanecer= setInterval(desvaneciendo,30);

function porcentaje() {
    contador++;
    if (contador > 99) {
        clearInterval(intervalo);
    }
    loading.innerText = `${contador}%`;
    bg.style.opacity = scale(contador,0,100,0,1)
}

// function desvaneciendo() {
//     if(contador>99){
//     }
// }

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}