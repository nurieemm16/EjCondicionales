//Autora: Núria Marzo
//PRIMER EJERCICIO CONDICIONALES

let edad = 20;

if (edad < 18) {
  console.log("Eres menor, lo sentimos, no puedes entrar.");
} else if (edad === 18) {
  console.log("Puedes entrar.");
} else {
  console.log("Puedes entrar y tienes una copa gratis.");
}

//SEGUNDO EJERCICIO CONDICIONALES

let color = "amarillo";

switch (color) {
  case "verde":
    console.log("Verde hoja Pokémon");
    break;
  case "azul":
    console.log("Azul Mar");
    break;
  case "rojo":
    console.log("Rojo pasión");
    break;
  case "amarillo":
    console.log("Aaaaaaamaaarilloooo el submarino esssss, ¡Amarillo es!");
    break;
  case "violeta":
    console.log("Violeta y lila no es lo mismo");
    break;
  default:
    console.log("No has elegido ningun color, prueba de nuevo");
}

//TERCER EJERCICIO CONDICIONALES:
let estaEnchufada = true;
let estaFocoQuemado = false;

if (estaEnchufada) {
  if (estaFocoQuemado) {
    console.log("Reemplazar el foco");
  } else {
    console.log("Comprar nueva lámpara");
  }
} else {
  console.log("Enchufa la lámpara");
}
