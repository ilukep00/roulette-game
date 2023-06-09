var ganador = "";
const root = document.documentElement;
var ruleta;
var sorteando = false;
var ganadorTexto;
var select;
var color = "blue";
var colorSeleccionado = "Azul";
function sortear(){
    if(sorteando){
        return
    }
    sorteando = true;
    ruleta.classList.toggle('girar',true);
    nSorteo = Math.random(); //devuelve numero entre 0 y 1
    const giroRuleta = 2*360 + (1-nSorteo)*360;
    root.style.setProperty("--giroRuleta",giroRuleta+"deg")
    if(nSorteo*100 <= 12.5){
       
        ganador = "Rojo"
    }
    else if(nSorteo*100 <= 25){
        
        ganador = "Verde"
    }
    else if(nSorteo*100 <= 37.5){
        
        ganador = "Azul"
    }
    else if(nSorteo*100 <= 50){
        
        ganador = "Morado"
    }
    else if(nSorteo*100 <= 62.5){
        
        ganador = "Gris"
    }
    else if(nSorteo*100 <= 75){
        
        ganador = "Amarillo"
    }
    else if(nSorteo*100 <= 87.5){
        
        ganador = "Rosa"
    }
    else if(nSorteo*100 <= 100){
       
        ganador = "Naranja"
    }
}
/** Devuelve la rotación en grados de un elemento */
function getCurrentRotation(el){
    var st = window.getComputedStyle(el, null);
    var tm = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform") ||
             "none";
    if (tm != "none") {
      var values = tm.split('(')[1].split(')')[0].split(',');
      var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
      return (angle < 0 ? angle + 360 : angle);
    }
    return 0;
}

function cargarRuleta(){
    ruleta = document.getElementById("roulette");
    ganadorTexto = document.getElementById("ganadorTexto");
    select = document.getElementById("color");
    select.value = "blue";
    ruleta.addEventListener("animationend", ()=>{
        ruleta.style.transform = "rotate("+getCurrentRotation(ruleta)+"deg)";
		ruleta.classList.toggle("girar",false);
        if(colorSeleccionado == ganador)
            ganadorTexto.textContent = "Has ganado!!!";
        else
            ganadorTexto.textContent = "Has fallado, pruebelo otra vez!";
        sorteando = false;
})
}

function colorElegido(){
	if(sorteando){
		select.value = color;
		ganadorTexto.textContent = colorSeleccionado+" seleccionado";
        return
    }
    color = select.value;
    select.setAttribute("class", color)
    if(color == "red"){
        colorSeleccionado = "Rojo"
    }
    else if(color == "green"){
        colorSeleccionado = "Verde"
    }
    else if(color == "blue"){
        colorSeleccionado = "Azul"
    }
    else if(color == "purple"){
        colorSeleccionado = "Morado"
    }
    else if(color == "grey"){
        colorSeleccionado = "Gris"
    }
    else if(color == "yellow"){  
        colorSeleccionado = "Amarillo"
    }
    else if(color == "pink"){  
        colorSeleccionado = "Rosa"
    }
    else if(color == "orange"){
        colorSeleccionado = "Naranja"
    }
    ganadorTexto.textContent = colorSeleccionado+" seleccionado";

}
window.onload = cargarRuleta;
