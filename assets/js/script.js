let listaNombresGastos = [];
let listaValoresGastos = [];

//Esta función se invoca al momento de que el usuario hace click en el boton

function clickBoton(){
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;

    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    //alert("click de usuario");
    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById ("totalGastos");
    let htlmLista = "";
    let totalGastos = 0;
    listaNombresGastos.forEach ((elemento,posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);

        htlmLista += `<li>${elemento} USD ${valorGasto.toFixed(2)}
                     <button onclick="eliminarGasto(${posicion});">EliminarGasto</button>
                     </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);
});


listaElementos.innerHTML = htlmLista;
totalElementos.innerHTML = totalGastos.toFixed(2);
limpiar();
}

function limpiar (){
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";
}   

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice (posicion, 1);
    actualizarListaGastos();
}