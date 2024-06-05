let api_key = '09b1f30d40429847c22d35deffa25f8f';

let urlBase = 'https://api.openweathermap.org/data/2.5/weather';

let difKelvin = 273.15;

//Agregamos el evento listener para que llame a la funcion cuan se hace click
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value

    if (ciudad) {
        fetchDatosClima(ciudad);
    }
 }
);

//Utilizamos la api para obtener los datos de la ciudad que le pasamos como parametros
function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`) //Despues del ? le pasamos los parametros
    .then(data => data.json())
    .then(data => mostrarDatosClima(data)) //Llamamos a la funcion que muestra los datos en la pagina
}

//Funcion para mostrar los datos de la ciudad en el div correspondiente
function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';   //Ponemos en vacio el div cada vez que se hace click

    //Obtenemos los datos que necesitamos
    const nombreCiudad = data.name;
    const nombrePais = data.sys.country;
    const temperaturaCiudad = data.main.temp;
    const humedadCiudad = data.main.humidity;
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;

    //Creamos los elementos HTML que necesitamos para mostrar los datos
    const ciudadTitulo = document.createElement('h2');  //creamos una etiqueta <h2>
    ciudadTitulo.textContent = `${nombreCiudad}, ${nombrePais}`;    //Asignamos el valor a la etiqueta

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperaturaCiudad - difKelvin)}°C`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es: ${humedadCiudad}%`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

    //Agregamos los elementos al div con el id datosClima
    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descripcionInfo);

}


