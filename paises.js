console.log("PATRIAMLOCUS");

function mostrar() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
function ocultar() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}
  
function traerpais(nombrepais) {
  fetch("https://restcountries.com/v3.1/name/" + nombrepais).then(pais => pais.json()).then(infopais => {
    console.log(infopais);
    document.getElementById("bandera").src = infopais[0].flags.png;
    document.getElementById("nombrePais").innerHTML = infopais[0].name.official;
    document.getElementById("capitalPais").innerHTML = infopais[0].capital;
    document.getElementById("poblacion").innerHTML = infopais[0].population;
    document.getElementById("subregion").innerHTML = infopais[0].subregion;
  })
}

function romania(romania) {
  fetch("https://restcountries.com/v3.1/name/" + romania).then(pais => pais.json()).then(infopais => {
    // document.getElementById("bandera").innerHTML = infopais[0].flags.png;
    document.getElementById("nombrePais").innerHTML = infopais[1].name.official;
    document.getElementById("capitalPais").innerHTML = infopais[1].capital;
    document.getElementById("poblacion").innerHTML = infopais[1].population;
    document.getElementById("subregion").innerHTML = infopais[1].subregion;
  })
}

function guibissa(guineabissau) {
  fetch("https://restcountries.com/v3.1/name/" + guineabissau).then(pais => pais.json()).then(infopais => {
    // document.getElementById("bandera").innerHTML = infopais[0].flags.png;
    document.getElementById("nombrePais").innerHTML = infopais[1].name.official;
    document.getElementById("capitalPais").innerHTML = infopais[1].capital;
    document.getElementById("poblacion").innerHTML = infopais[1].population;
    document.getElementById("subregion").innerHTML = infopais[1].subregion;
  })
}

function guinea(guinea) {
  fetch("https://restcountries.com/v3.1/name/" + guinea).then(pais => pais.json()).then(infopais => {
    // document.getElementById("bandera").innerHTML = infopais[0].flags.png;
    document.getElementById("nombrePais").innerHTML = infopais[2].name.official;
    document.getElementById("capitalPais").innerHTML = infopais[2].capital;
    document.getElementById("poblacion").innerHTML = infopais[2].population;
    document.getElementById("subregion").innerHTML = infopais[2].subregion;
  })
}

function guiecua(guiecuat) {
  fetch("https://restcountries.com/v3.1/name/" + guiecuat).then(pais => pais.json()).then(infopais => {
    // document.getElementById("bandera").innerHTML = infopais[0].flags.png;
    document.getElementById("nombrePais").innerHTML = infopais[3].name.official;
    document.getElementById("capitalPais").innerHTML = infopais[3].capital;
    document.getElementById("poblacion").innerHTML = infopais[3].population;
    document.getElementById("subregion").innerHTML = infopais[3].subregion;
  })
}

let datosModal = [
  {
    p1: "blablavla",
    p2: "blelbelble",
    p3: "effbwiofbowerb"
  },
  {
    p1: "erfferfegfe",
    p2: "effer",
    p3: "fewfwefwefwe"
  }
]

function random() {
  let numAleatorio = Math.floor(Math.random()*2)
  console.log(numAleatorio);
  document.getElementById("prueba1").innerHTML = datosModal[numAleatorio].p1;
  document.getElementById("prueba2").innerHTML = datosModal[1].p2;
  document.getElementById("prueba3").innerHTML = datosModal[1].p3;
}