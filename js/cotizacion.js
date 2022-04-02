/* DOLAR */



const urlof = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolaroficial'

fetch(urlof)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarof')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlbl = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarblue '
fetch(urlbl)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarbl')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlliqui = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/contadoliqui '
fetch(urlliqui)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarliqui')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlpromedio = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarpromedio '
fetch(urlpromedio)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarpromedio')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlturista = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarturista '
fetch(urlturista)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarturista')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlbolsa = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarbolsa '
fetch(urlbolsa)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarbolsa')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlbbva = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/bbva '
fetch(urlbbva)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarbbva')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlpiano = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/piano '
fetch(urlpiano)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarpiano')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlhipotecario = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/hipotecario '
fetch(urlhipotecario)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarhipotecario')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlgalicia = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/galicia '
fetch(urlgalicia)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolargalicia')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlsantander = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/santander '
fetch(urlsantander)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarsantander')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlciudad = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/ciudad '
fetch(urlciudad)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarciudad')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlsupervielle = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/supervielle '
fetch(urlsupervielle)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarsupervielle')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlpatagonia = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/patagonia '
fetch(urlpatagonia)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarpatagonia')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlcomafi = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/comafi '
fetch(urlcomafi)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarcomafi')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlnacion = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/nacion '
fetch(urlnacion)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarnacion')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlcordoba = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/bancor '
fetch(urlcordoba)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarcordoba')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlchaco = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/chaco '
fetch(urlchaco)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarchaco')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlpampa = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/pampa '
fetch(urlpampa)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarpampa')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlmayorista = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/mayorista '
fetch(urlmayorista)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarmayorista')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urltransatlantica = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/casas/caba/transatlantica '
fetch(urltransatlantica)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolartransatlantica')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlexchange = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/casas/mdp/exchange '
fetch(urlexchange)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarexchange')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urldaminato = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/casas/rosario/daminato '
fetch(urldaminato)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolardaminato')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlmontemar = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/casas/mendoza/montemar '
fetch(urlmontemar)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarmontemar')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlprovincia = 'https://www.bancoprovincia.com.ar/Principal/Dolar '
fetch(urlprovincia)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-dolarprovincia')
        element.innerHTML = `Compra: ${data[0]} <br> Venta: ${data[1]}`
    })




/* EURO */


const urleuronacion = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/euro/nacion '
fetch(urleuronacion)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-euronacion')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urleurogalicia = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/euro/galicia '
fetch(urleurogalicia)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-eurogalicia')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urleurobbva = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/euro/bbva '
fetch(urleurobbva)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-eurobbva')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urleuropampa = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/euro/pampa '
fetch(urleuropampa)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-europampa')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urleurochaco = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/euro/chaco '
fetch(urleurochaco)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-eurochaco')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urleurohipotecario = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/euro/hipotecario '
fetch(urleurohipotecario)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-eurohipotecario')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })


/* REAL */


const urlrealnacion = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/real/nacion '
fetch(urlrealnacion)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-realnacion')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlrealbbva = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/real/bbva '
fetch(urlrealbbva)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-realbbva')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

const urlrealchaco = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/real/chaco '
fetch(urlrealchaco)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('coti-realchaco')
        element.innerHTML = `Compra: ${data.compra} <br> Venta: ${data.venta}`
    })

/* ESTADISTICAS */

const urlriesgopais = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/riesgopais '
fetch(urlriesgopais)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('riesgopais')
        element.innerHTML = `Valor: ${data.valor}`
    })

const urlreservasdolares = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/bcra/reservas '
fetch(urlreservasdolares)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('reservasdolares')
        element.innerHTML = `Valor: ${data.valor}`
    })

const urlpesoscirculacion = 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/bcra/circulante '
fetch(urlpesoscirculacion)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('pesoscirculacion')
        element.innerHTML = `Valor: ${data.valor}`
    })