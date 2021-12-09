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
    document.getElementById("bandera").src = infopais[1].flags.png;
    document.getElementById("nombrePais").innerHTML = infopais[1].name.official;
    document.getElementById("capitalPais").innerHTML = infopais[1].capital;
    document.getElementById("poblacion").innerHTML = infopais[1].population;
    document.getElementById("subregion").innerHTML = infopais[1].subregion;
  })
}

function guibissa(guineabissau) {
  fetch("https://restcountries.com/v3.1/name/" + guineabissau).then(pais => pais.json()).then(infopais => {
    document.getElementById("bandera").src = infopais[1].flags.png;
    document.getElementById("nombrePais").innerHTML = infopais[1].name.official;
    document.getElementById("capitalPais").innerHTML = infopais[1].capital;
    document.getElementById("poblacion").innerHTML = infopais[1].population;
    document.getElementById("subregion").innerHTML = infopais[1].subregion;
  })
}

function guinea(guinea) {
  fetch("https://restcountries.com/v3.1/name/" + guinea).then(pais => pais.json()).then(infopais => {
    document.getElementById("bandera").src = infopais[2].flags.png;
    document.getElementById("nombrePais").innerHTML = infopais[2].name.official;
    document.getElementById("capitalPais").innerHTML = infopais[2].capital;
    document.getElementById("poblacion").innerHTML = infopais[2].population;
    document.getElementById("subregion").innerHTML = infopais[2].subregion;
  })
}

function guiecua(guiecuat) {
  fetch("https://restcountries.com/v3.1/name/" + guiecuat).then(pais => pais.json()).then(infopais => {
    document.getElementById("bandera").src = infopais[3].flags.png;
    document.getElementById("nombrePais").innerHTML = infopais[3].name.official;
    document.getElementById("capitalPais").innerHTML = infopais[3].capital;
    document.getElementById("poblacion").innerHTML = infopais[3].population;
    document.getElementById("subregion").innerHTML = infopais[3].subregion;
  })
}

let datosModal = [
  {
    p1: "El nombre al continente americano lo designó Martín Waldseemüller, al crear un mapa en 1507, y renombrar a las tierras que hasta entonces eran conocidas como 'Indias Occidentales'; el nombre lo recibe en honor a Florentino Américo Vespucio.",
    p2: "A pesar de que a Cristóbal Colón se le atribuye el descubrimiento de dicho continente, la asignación de su nombre fue de otra autoría. Florentino era cartógrafo y comerciante, y formó parte de los navegantes que descubrieron El Nuevo Mundo, siendo también uno de sus protagonistas.",
  },
  {
    p1: "El nombre del continente Asiático proviene de su posición en el planeta. La palabra 'Asia' se origina de la palabra 'Ἀσία' del griego, y lo cual significa 'al Este', y traducido al Asirio significa 'salida del Sol'.",
    p2: "Herodoto fue quien utilizó esta palabra para nombrar al continente que conocemos como 'Asia', esto porque el continente se ubica al Este, con respecto al Mar Egeo.",
  },
  {
    p1: "El origen del nombre del continente europeo tiene sus raíces en la mitología griega. Dentro de esta, Europa es una mujer fenicia que, según sus mitos, fue seducida por Zeus, el cual, convertido en un toro, de esa manera pudo llevarla a Creta.",
    p2: "Traducido de la lengua Asiria, el nombre 'Europa' proviene del 'ereb' y significa 'ocaso'; se cree que los griegos la nombraron así por estar ubicada al Oeste. En los mapas en los que no se cuenta a Oceanía, Europa es el único continente que no empieza con la letra 'A'."
  },
  {
    p1: "El nombre África proviene del latín 'aprica', que significa 'soleado'; y a su vez, su origen etimológico proviene del griego 'aphriké', que quiere decir 'sin frío'. Y hay otra versión que indica que su nombre proviene del nombre de la tribu 'Afri' que habitaba el continente.",
    p2: "Este continente recibió su nombre de los romanos, despues de que estos lo conquistaran."
  },
  {
    p1: "El nombre del continente Oceanía tiene que ver con el océano. Se llama así prácticamente porque está rodeado en su totalidad por mucha agua.",
    p2: "También tiene sus orígenes en la mitología griega. 'Oceanía' puede significar: 'las hijas del océano', refiriéndose a las ninfas protectoras de las fuentes de agua como mares, ríos y arroyos."
  },
  {
    p1: "El planeta es conocido por tener cinco continentes, ¿pero qué crees? Tiene seis.",
    p2: "La Antártida también es un continente. Es el sexto continente que se conoce, y su nombre proviene del vocablo 'antarktikos', del griego, y su significado es 'en oposición al oso', esto es porque La Osa Mayor se ubica en el Polo Norte, y todos sabemos que la Antártida está en el Polo Sur, y por eso se denomina a este nombre: opuesto al Norte."
  }
]

function random() {
  let numAleatorio = Math.floor(Math.random()*6)
  console.log(numAleatorio);
  document.getElementById("prueba1").innerHTML = datosModal[numAleatorio].p1;
  document.getElementById("prueba2").innerHTML = datosModal[numAleatorio].p2;
}