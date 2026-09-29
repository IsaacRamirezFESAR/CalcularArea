function mostrarFormulario(figura){
	// Ocultar formularios
    document.getElementById("form-cuadrado").style.display = "none";
    document.getElementById("form-rectangulo").style.display = "none";
    document.getElementById("form-triangulo").style.display = "none";
    document.getElementById("form-circulo").style.display = "none";
    document.getElementById("form-trapecio").style.display = "none";

    // Mostrar formulario seleccionado
    if (figura === "cuadrado") {
        document.getElementById("form-cuadrado").style.display = "block";
    } else if (figura === "rectangulo") {
        document.getElementById("form-rectangulo").style.display = "block";
    } else if (figura === "triangulo") {
        document.getElementById("form-triangulo").style.display = "block";
    } else if (figura === "circulo") {
        document.getElementById("form-circulo").style.display = "block";
    } else if (figura === "trapecio") {
        document.getElementById("form-trapecio").style.display = "block";
    }
    //Borra el resultado anterior
    document.getElementById("resultado").innerHTML = "";
}

function calcularArea(tipo, x, y) {

    let area;

    if (tipo === "cuadrado") {
        area = x * x;
    }
    else if (tipo === "rectangulo") {
        area = x * y;
    }
    else if (tipo === "triangulo") {
        area = (x * y) / 2;
    }    
    else if (tipo === "circulo") {
        area =  3.14159 * (x**2);
    }    
    return area;
}

function calcularAreaTrap(tipo, x, y, z) {

    let area;

    if (tipo === "trapecio") {
        area = ((x + y) * z) / 2;
    }
    return area;
}

function calcularAreaCuadrado() {
    const lado = Number(document.getElementById("lado").value);
    const area = calcularArea("cuadrado", lado, lado);
    document.getElementById("resultado").innerHTML = "El área del cuadrado es: " + area;
}

function calcularAreaRectangulo() {
    const base = Number(document.getElementById("baseRectangulo").value);
    const altura = Number(document.getElementById("alturaRectangulo").value);
    const area = calcularArea("rectangulo", base, altura);
    document.getElementById("resultado").innerHTML = "El área del rectángulo es: " + area;
}
function calcularAreaTriangulo() {
    const base = Number(document.getElementById("baseTriangulo").value);
    const altura = Number(document.getElementById("alturaTriangulo").value);
    const area = calcularArea("triangulo", base, altura);
    document.getElementById("resultado").innerHTML = "El área del triángulo es: " + area;
}
function calcularAreaCirculo() {
    const radio = Number(document.getElementById("radio").value);
    const area = calcularArea("circulo", radio);
    document.getElementById("resultado").innerHTML = "El área del triángulo es: " + area;
}
function calcularAreaTrapecio() {
    const baseMa = Number(document.getElementById("baseMayor").value);
    const baseMe = Number(document.getElementById("baseMenor").value);
    const altura = Number(document.getElementById("alturaTrapecio").value);
    const area = calcularAreaTrap("trapecio", baseMa, baseMe, altura);
    document.getElementById("resultado").innerHTML = "El área del trapecio es: " + area;
}