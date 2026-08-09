"use strict"

// INPUT Y DATALIST
const input_parroquia = document.getElementById("input_parroquia")
const list_parroquia = document.getElementById("list_parroquia")

const input_sector = document.getElementById("input_sector")
const list_sector = document.getElementById("list_sector")

const input_organizacion = document.getElementById("input_organizacion")
const list_organizacion = document.getElementById("list_organizacion")

const input_cod_catastral = document.getElementById("input_cod_catastral")
// VALUE DEL INPUT CATASTRAL
let cod_catastral = ["01", "001", "parroquia", "U01", "sector", "organizacion", "000", "000", "00", "00"]
input_cod_catastral.value = cod_catastral.join("-")

// BASE DE DATOS PROVICIONAL (LOCAL)
const array_parroquias = [
    {
        id: 1,
        cod: "001",
        nombre: "ALTAGRACIA"
    },
    {
        id: 2,
        cod: "002",
        nombre: "ANTIMANO"
    },
    {
        id: 3,
        cod: "003",
        nombre: "CANDELARIA"
    },
    {
        id: 4,
        cod: "004",
        nombre: "CARICUAO"
    },
    {
        id: 5,
        cod: "005",
        nombre: "CATEDRAL"
    },
    {
        id: 6,
        cod: "006",
        nombre: "COCHE"
    },
    {
        id: 7,
        cod: "007",
        nombre: "EL JUNQUITO"
    },
    {
        id: 8,
        cod: "008",
        nombre: "EL PARAISO"
    },
    {
        id: 9,
        cod: "009",
        nombre: "EL RECREO"
    },
    {
        id: 10,
        cod: "010",
        nombre: "EL VALLE"
    },
    {
        id: 11,
        cod: "011",
        nombre: "LA PASTORA"
    },
    {
        id: 12,
        cod: "012",
        nombre: "LA VEGA"
    },
    {
        id: 13,
        cod: "013",
        nombre: "MACARAO"
    },
    {
        id: 14,
        cod: "014",
        nombre: "SAN ANGUSTIN"
    },
    {
        id: 15,
        cod: "015",
        nombre: "SAN BERNARDINO"
    },
    {
        id: 16,
        cod: "016",
        nombre: "SAN JOSE"
    },
    {
        id: 17,
        cod: "017",
        nombre: "SAN JUAN"
    },
    {
        id: 18,
        cod: "018",
        nombre: "SAN PEDRO"
    },
    {
        id: 19,
        cod: "019",
        nombre: "SANTA ROSALIA"
    },
    {
        id: 20,
        cod: "020",
        nombre: "SANTA TEREZA"
    },
    {
        id: 21,
        cod: "021",
        nombre: "SUCRE"
    },
    {
        id: 22,
        cod: "022",
        nombre: "23 DE ENERO"
    },

]

const array_sectores = [
    {
        cod: "001",
        parroquia_id: 12,
        nombre: "CASCO CENTRAL"
    },
    {
        cod: "010",
        parroquia_id: 12,
        nombre: "LOS CANGILONES"
    },
    {
        cod: "011",
        parroquia_id: 12,
        nombre: "UNIDO-SAN RAFAEL"
    },
    {
        cod: "012",
        parroquia_id: 12,
        nombre: "LOS MANGOS I"
    },
    {
        cod: "013",
        parroquia_id: 12,
        nombre: "LOS MANGOS II"
    },
    {
        cod: "014",
        parroquia_id: 12,
        nombre: "LAS TORRES"
    },
    {
        cod: "015",
        parroquia_id: 12,
        nombre: "LAS CASITAS"
    },
    {
        cod: "002",
        parroquia_id: 12,
        nombre: "LA VEGUITA"
    },
    {
        cod: "003",
        parroquia_id: 12,
        nombre: "EL CARMEN"
    },
    {
        cod: "004",
        parroquia_id: 12,
        nombre: "VISTA HERMOZA"
    },
    {
        cod: "005",
        parroquia_id: 12,
        nombre: "SAN MIGUEL"
    },
    {
        cod: "006",
        parroquia_id: 12,
        nombre: "LAS TERRAZAS"
    },
    {
        cod: "007",
        parroquia_id: 12,
        nombre: "LOS PARAPAROS"
    },
    {
        cod: "008",
        parroquia_id: 12,
        nombre: "LOS NARANJOS"
    },
    {
        cod: "009",
        parroquia_id: 12,
        nombre: "VALLE ALEGRE"
    },
    {
        cod: "000",
        parroquia_id: 8,
        nombre: "lo que sea 1"
    },
    {
        cod: "000",
        parroquia_id: 9,
        nombre: "lo que sea 2"
    },
    {
        cod: "000",
        parroquia_id: 10,
        nombre: "lo que sea 3"
    },
    {
        cod: "000",
        parroquia_id: 10,
        nombre: "lo que sea 4"
    },
]

const array_organizacion= [
    {
        cod: "001",
        parroquia_id: 10,
        nombre: "C.C. Oranizacion 00010"
    },
    {
        cod: "001",
        parroquia_id: 10,
        nombre: "C.C. Oranizacion 00011"
    },

    {
        cod: "002",
        parroquia_id: 11,
        nombre: "C.C. Oranizacion 00012"
    },
    {
        cod: "002",
        parroquia_id: 11,
        nombre: "C.C. Oranizacion 00013"
    },
    {
        cod: "003",
        parroquia_id: 12,
        nombre: "C.C. Oranizacion 00014"
    },
    {
        cod: "001",
        parroquia_id: 12,
        nombre: "C.C. Oranizacion 00015"
    },
    {
        cod: "001",
        parroquia_id: 12,
        nombre: "C.C. Oranizacion 00016"
    },
    {
        cod: "001",
        parroquia_id: 13,
        nombre: "C.C. Oranizacion 00017"
    }
]


// CARGAR EL DATALIST DE PARROQUIAS AL CARGAR LA PAGINA
window.addEventListener("DOMContentLoaded", ()=>{

    const frag = document.createDocumentFragment()

    array_parroquias.forEach(item=>{

        const option = document.createElement("OPTION")
        option.dataset.cod = item.cod;
        option.dataset.id = item.id;
        option.value = item.nombre;

        frag.appendChild(option)
    })

    list_parroquia.appendChild(frag)
})

// FILTRAR SECTORES Y OREGANIZACIONES POR PARROQUIA
const filterDataList = ({target, list, container}) => {


    container.innerHTML = null;

    const frag = document.createDocumentFragment()

    list.forEach(item=>{

        const option = document.createElement("OPTION")
        option.dataset.cod = item.cod;
        option.dataset.id = item.parroquia_id;
        option.value = item.nombre;

        // console.log(item)
        
        if(target == item.parroquia_id) {
            
            // console.log(target, item.parroquia_id)
            frag.appendChild(option)
        }
    })

    container.appendChild(frag)

}



// MANEJAR EL EVENTO INPUT
const handleChange = (event)=>{
    const value = event.target.value;
    const id = event.target.id;
    
    
    // filtrar por parroquia y añadir al codigo de catastro
    if(id === "input_parroquia") {
        const list_option_parroquia = document.querySelectorAll("#list_parroquia>option")

        let codigo = null;
        let target = null;
        
        list_option_parroquia.forEach(item=>{ 
            if(item.value == value) {
                target = item.dataset.id;
                codigo = item.dataset.cod;
            }
        })

        if(!codigo) return // mientras no haya codigo no hacer nada

        // ACTUALIZAR CODIGO CATASTRAL (PARROQUIA)
        cod_catastral[2] = codigo
        input_cod_catastral.value = cod_catastral.join("-")

        // ACTIVAR LOS INPUTS
        console.log("activando inputs")
        input_sector.disabled = false;
        input_organizacion.disabled = false;

        // FILTRAR LOS DATALIST (SECTOR/ORGANIZACION)
        filterDataList({target, list: array_sectores, container: list_sector })
        filterDataList({target, list: array_organizacion, container: list_organizacion })
        

        return console.log("Inputs Filtrados por Parroquia")
    }

    // agregar sector y organizacion al catastro
    if(id === "input_sector"){
        const list_option_sector = document.querySelectorAll("#list_sector>option")
        
        let codigo = null;
        list_option_sector.forEach(item =>{
            if(item.value == value) codigo = item.dataset.cod;
        })

        // ACTUALIZAR CODIGO CATASTRAL (SECTOR)
        cod_catastral[4] = codigo
        input_cod_catastral.value = cod_catastral.join("-")
        
        return console.log("actualizado el codigo catastral por sector")
    }

    if(id === "input_organizacion"){
        const list_option_organizacion = document.querySelectorAll("#list_organizacion>option")
        
        let codigo = null;
        list_option_organizacion.forEach(item =>{
            if(item.value == value) codigo = item.dataset.cod;
        })
        
        // ACTUALIZAR CODIGO CATASTRAL (ORGANIZACION)
        cod_catastral[5] = codigo
        input_cod_catastral.value = cod_catastral.join("-")

        return console.log("actualizado el codigo catastral por organizacion")
    }

    // FALTA ACTIVAR EL INPUT DE CODIGO CATASTRAL CUANDO LOS DEMAS INPUTS ESTAN LLENOS
}


input_parroquia.addEventListener("input", (event)=> handleChange(event))
input_sector.addEventListener("input", (event)=> handleChange(event))
input_organizacion.addEventListener("input", (event)=> handleChange(event))