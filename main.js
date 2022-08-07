let numero = 5;

let lanzamiento = setInterval(() => {
    console.log(`Lanzamiento en ${numero} segundos`);
    numero--;    
    if(numero === 0) {
        clearInterval(lanzamiento)
    }
}, 1000);

let timeout = 0;



let incrementoID = setTimeout(function incremento(){
    console.log(timeout);
    timeout++;
    incrementoID = setTimeout(incremento, 1000)
}, 1000);