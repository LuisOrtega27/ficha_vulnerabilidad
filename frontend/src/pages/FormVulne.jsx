import { FormTabs } from "../components/FormTabs"
import { FormContainer } from "../components/FormContainer"
import { FormSection } from "../components/FormSection"
import { FormSectionTitle } from "../components/FormSectionTitle"
import { FormSectionSubTitle } from "../components/FormSectionSubTitle"
import { FormCheckboxGrid } from "../components/FormCheckboxGrid"
import { CheckboxItem } from "../components/CheckboxItem"
import { FormRow } from "../components/FormRow"
import { FormGroup } from "../components/FormGroup"
import { FormBody } from "../components/FormBody"
import { FormActions } from "../components/FormActions"
import { FormSelect } from "../components/FormSelect"

import axios from "axios"
import { useEffect, useState } from "react"

const apiURL = import.meta.env.VITE_API_URL;

// links de navegacion para el formalario
const tabList = [
    { 
        name: "1. Ubicación y Ocupante", 
        path: "#DGSO"
    },
    { 
        name: "2. Vivienda y Censo", 
        path: "#CVDP"
    },
    { 
        name: "3. Terreno y Parcela", 
        path: "#SPAA"
    },
    { 
        name: "4. Elementos Estructurales", 
        path: "#TMSC"
    },
    { 
        name: "5. Patologías y Diagnóstico", 
        path: "#DEEE"
    }
]

export const FormVulne = () => {
    
    /*  como funciona el codigo catastral?
        
        1. El codigo catastral debe ser de 36 caracteres en total (contando los guiones)
            01-001-012-U01-001-003-000-000-00-00
            
        2. El usuario puede escribir en el input del codigo catastral a partir del caracter 23 (despues del guion de la manzana)
        
        3. Se debe respetar el formato del codigo catastral. (maximo de caracterees y guiones)

    */ 
    const [codCatastro, setCodCatastro] = useState(["01","001","000","U01","000","000"]) 

    // las listas se actualizan conectando con la base de datos
    const [listParroquias, setListParroquias] = useState([])
    const [listSectores, setListSectores] = useState([])
    const [listManzanas, setListManzanas] = useState([])
    const [listOrganizaciones, setListOrganizaciones] = useState([])

    // los filtros usan el id para filtrar usando la llave foranea
    const [parroquiaFilter, setParroquiaFilter] = useState(0)
    const [sectorFilter, setSectorFilter] = useState(0)

    // se controla el valor de los campos para activar el input de codigo catastral
    const [parroquia, setParroquia] = useState(null)
    const [sector, setSector] = useState(null)
    const [manzana, setManzana] = useState(null)
     
    // CONECCION CON LA BASE DE DATOS

    // buscar parroquias
    useEffect(()=>{
        
        const fetchParroquias = async ()=>{

            let result = await axios.get(`${apiURL}/api/vulnerabilidad/parroquias`)
            console.log("Parroquias:")
            console.log(result.data)
            setListParroquias(result.data)

        }
        fetchParroquias()

    }, [])

    // Buscar sectores y organizaciones
    useEffect(()=>{
        
        if(parroquiaFilter === 0) return
        
        const fetchSectores = async ()=>{
            let result = await axios.get(`${apiURL}/api/vulnerabilidad/sectores`)
            console.log("Sectores:")
            console.log(result.data)
            setListSectores(result.data)
        }
        fetchSectores()

        const fetchOrganizaciones = async ()=>{
            let result = await axios.get(`${apiURL}/api/vulnerabilidad/organizaciones`)
            console.log("Organizaciones:")
            console.log(result.data)
            setListOrganizaciones(result.data)
        }
        fetchOrganizaciones()

    }, [parroquiaFilter])

    // Buscar Manzanas
    useEffect(()=>{
        if(sectorFilter === 0) return

        const fetchManzanas = async ()=>{
            let result = await axios.get(`${apiURL}/api/vulnerabilidad/manzanas`)
            console.log("Manzanas:")
            console.log(result.data)
            setListManzanas(result.data)
        }
        fetchManzanas()
        
    },[sectorFilter])

    const handleParroquia = (e)=>{
        let [id, cod] = e.target.value.split(",")

        let arr = [ ...codCatastro]
        arr[2] = cod

        setParroquia(e.target.value)
        setCodCatastro(arr)
        setParroquiaFilter(parseInt(id))
    }

    const handleSector = (e)=>{

        console.log(e.target.value)
        
        let [id, cod] = e.target.value.split(",")

        let arr = [ ...codCatastro]
        arr[4] = cod
        
        setSector(e.target.value)
        setCodCatastro(arr)
        setSectorFilter(parseInt(id))
    }

    const handleManzana = (e)=>{
        console.log(e.target.value)
        
        let cod = e.target.value.split(",")[1]

        let arr = [ ...codCatastro]
        arr[5] = cod
        
        setManzana(e.target.value)
        setCodCatastro(arr)
    }

    const handleCodCatastral = (e)=>{

        let inputValue = e.target.value
        let lastChar =  inputValue.at(-1)

        // no borrar el formato previo
        if(codCatastro.length === 6 && e.nativeEvent.data === null) return 
        
        // eliminar todo exepto el codigo anterior
        if(codCatastro.length > 6 && e.nativeEvent.data === null)
            setCodCatastro(inputValue.split("-"))

        // Solo permitir numeros
        if( isNaN( lastChar ) || lastChar == " " ) return 
        
        // Añadir "-" n cantidad de elementos
        if(inputValue.length === 23 || inputValue.length === 27 || inputValue.length === 30)
            inputValue = inputValue.substring( inputValue.length-1, -1) + "-" + lastChar

        // no pasar de 32 caracteres
        if(inputValue.length===33) return
        
        setCodCatastro(inputValue.split("-"))
        
    }

    const handleChange = ()=>{}
    
  return (
    <FormContainer>
        
        <form onSubmit={(e)=>e.preventDefault()} onChange={handleChange}>

            <header className="flex border-b-3 border-b-vul-primary mb-5">

                <div className="text-center flex-1 pb-4 font-segoe">
                    <h1 className="text-vul-primary text-2xl font-bold">Alcaldía de Caracas</h1>
                    <h2 className="text-vul-secondary font-bold">Instituto Municipal de Gestión de Riesgos y Administración de Desastres</h2>
                    <h3>REGISTRO DE VULNERABILIDAD FÍSICA (IMGRAD)</h3>
                </div>

                <div className="meta-info">
                    <div>
                        <strong>Nº CONTROL:</strong> 
                        <input name={""} className="text-siroh-alert-red font-bold w-16 text-center" value="90" readOnly/>
                    </div>
                    <div><strong>Fecha:</strong> 16/4/2024</div>
                    <div><strong>Fecha Levantamiento:</strong> 24/9/2023</div>
                </div>

            </header>

            <FormTabs tabList={tabList}/> {/* Navegacion del formulario */}
            
            <FormBody>

                {/* 1. */}
                <FormSection sectionName={"form-section-DGSO"} id={"DGSO"} >
                    <FormSectionTitle text="1. Datos Geográficos, Sociales y del Ocupante"/>
                    
                    <FormSectionSubTitle text={"Informacion del catastro"}/>
                    <FormRow>
                        <FormSelect inputName="" label="Parroquia" optionList={listParroquias} actionHandler={handleParroquia}/>
                        <FormSelect inputName="" label="Sector" optionList={listSectores} filter={parroquiaFilter} actionHandler={handleSector}/>
                        <FormSelect inputName="" label="Manzana" optionList={listManzanas} filter={parroquiaFilter} actionHandler={handleManzana}/>
                    </FormRow>
                    <FormRow>
                        <FormSelect inputName="" label="Organizacion" optionList={listOrganizaciones} filter={parroquiaFilter}/>
                        {/* CODIGO CATASTRAL Debo ver si pongo esto en un componente */}
                        <div className="flex flex-col">
                            <label className="
                                text-xs 
                                font-medium 
                                mb-1 
                                text-vul-label 
                                uppercase
                            " htmlFor={"cod_catastro"}> Codigo Catastral </label> 
                            <input className="
                                    py-2 px-3 
                                    border-2 rounded-xs border-siroh-border-muted 
                                    text-xs
                                    bg-white
                                " 
                                type="text" 
                                name=""
                                id="cod_catastro"
                                readOnly={ !(parroquia && sector && manzana) } // activar el input cuando se hayan seleccionando parroquia, sector y manzana
                                required
                                value={codCatastro.join("-")}
                                onChange={handleCodCatastral}
                            />
                        </div>
                        {/* <FormGroup inputName="" label="Código Catastral" value={codCatastro.join("-")} isReadOnly={true} isRequired={true}/> */}
                    </FormRow>

                    <FormSectionSubTitle text={"Informacion de la persona"}/>
                    <FormRow>
                        <FormGroup inputName="" label={"Apellidos y Nombres del Ocupante"}/>
                        <FormGroup inputName="" label={"Cédula de Identidad"}/>
                    </FormRow>
                    <FormRow>
                        <FormGroup inputName="" label={"Teléfono Celular"}/>
                        <FormGroup inputName="" label={"Teléfono Local"}/>
                    </FormRow>

                    <FormSectionSubTitle text={"Condicion"}/>

                    <FormCheckboxGrid>
                        <CheckboxItem inputType="radio" inputName="" label={"Propietario"}/>
                        <CheckboxItem inputType="radio" inputName="" label={"Inquilino / Ausente"}/>
                    </FormCheckboxGrid>
                    
                </FormSection>

                {/* 2 */}
                <FormSection sectionName={"form-section-CVDP"} id={"CVDP"}>

                    <FormSectionTitle text={"2. Características de la Vivienda y Datos Poblacionales"}/>

                    <FormSectionSubTitle text={"Tipo de vivienda"}/>

                    <FormRow>
                        <FormRow>
                            <CheckboxItem inputType="radio" inputName={""} label={"Unifamiliar"}/>
                            <CheckboxItem inputType="radio" inputName={""} label={"Multifamiliar"}/>
                        </FormRow>
                        <FormGroup inputType="number" inputName={""} label={"N° de Pisos"}/>
                        <FormGroup inputType="number" inputName={""} label={"N° de Entradas Indep."}/>
                        <FormGroup inputType="number" inputName={""} label={"N° de Familias"}/>
                    </FormRow>

                    <FormSectionSubTitle text={"Desglose Demográfico (N° Personas en la Vivienda: 3)"}/>
                    <FormRow>
                            <FormGroup inputType="number" inputName={""} label={"Lactantes"}/>
                            <FormGroup inputType="number" inputName={""} label={"Niños"}/>
                            <FormGroup inputType="number" inputName={""} label={"Adultos"}/>
                            <FormGroup inputType="number" inputName={""} label={"Adultos Mayores"}/>
                            <FormGroup inputType="number" inputName={""} label={"Discapacitados"}/>
                    </FormRow>
                </FormSection>

                {/* 3. */}
                <FormSection sectionName={"form-section-SPAA"} id={"SPAA"}>
                    <FormSectionTitle text={"3. Situación de la Parcela y Amenazas Ambientales"}/>

                    <FormSectionSubTitle text={"Emplazamiento de la Parcela en el Terreno:"}/>
                    <FormCheckboxGrid>
                        <CheckboxItem inputName={""} label={"Al Borde del Talud"}/>
                        <CheckboxItem inputName={""} label={"Sobre el Talud"}/>
                        <CheckboxItem inputName={""} label={"Al Pie del Talud"}/>
                    </FormCheckboxGrid>

                    <FormSectionSubTitle text={"Factores de Riesgo e Inestabilidad del Entorno:"}/>
                    <FormCheckboxGrid>
                        <CheckboxItem inputName={""} label={"Deslizamientos o Derrumbes Recientes"}/>
                        <CheckboxItem inputName={""} label={"Árboles y/o Postes Inclinados"}/>
                        <CheckboxItem inputName={""} label={"Grietas y Hundimientos en Calles/Escaleras"}/>
                        <CheckboxItem inputName={""} label={"Grietas y Hundimientos en el Terreno"}/>
                        <CheckboxItem inputName={""} label={"Botes de Agua (Blanca y/o Servida)"}/>
                        <CheckboxItem inputName={""} label={"Terreno Húmedo (Sobresaturado)"}/>
                        <CheckboxItem inputName={""} label={"Socavación (Por Acción Humana)"}/>
                        <CheckboxItem inputName={""} label={"Procesos Erosivos Activos"}/>
                        <CheckboxItem inputName={""} label={"Cauces o Quebradas Adyacentes"}/>
                        <CheckboxItem inputName={""} label={"Botaderos de Basura en las Cercanías"}/>
                    </FormCheckboxGrid>
                </FormSection>

                {/* 4. */}
                <FormSection sectionName={"form-section-TMSC"} id={"TMSC"}>
                    <FormSectionTitle text={"4. Tipología de Materiales y Sistema Constructivo"}/>

                    <FormSectionSubTitle text={"Paredes"}/>
                    <FormCheckboxGrid>
                        <CheckboxItem inputName={""} label={"Bloques Cemento / Arcilla"}/>
                        <CheckboxItem inputName={""} label={"Bahareque / Adobe"}/>
                        <CheckboxItem inputName={""} label={"Madera"}/>
                        <CheckboxItem inputName={""} label={" Cartón / Otros"}/>
                    </FormCheckboxGrid>
                    
                    <FormSectionSubTitle text={"Techo / Entre Piso"}/>
                    <FormCheckboxGrid>
                        <CheckboxItem inputName={""} label={"Zinc y/o Acerolit"}/>
                        <CheckboxItem inputName={""} label={"Tabelones"}/>
                        <CheckboxItem inputName={""} label={"Losa Acero"}/>
                        <CheckboxItem inputName={""} label={"Madera"}/>
                        <CheckboxItem inputName={""} label={"Paja / Bambú"}/>
                    </FormCheckboxGrid>
                    
                    <FormSectionSubTitle text={'">Columnas'}/>
                    <FormCheckboxGrid>
                        <CheckboxItem inputName={""} label={"Concreto Armado"}/>
                        <CheckboxItem inputName={""} label={"Acero"}/>
                        <CheckboxItem inputName={""} label={"Madera"}/>
                        <CheckboxItem inputName={""} label={"Prefabricado"}/>
                        <CheckboxItem inputName={""} label={"Ninguno"}/>
                    </FormCheckboxGrid>
                    
                    <FormSectionSubTitle text={"Vigas"}/>
                    <FormCheckboxGrid>
                        <CheckboxItem inputName={""} label={"Concreto Armado"}/>
                        <CheckboxItem inputName={""} label={"Acero"}/>
                        <CheckboxItem inputName={""} label={"Madera"}/>
                        <CheckboxItem inputName={""} label={"Prefabricado"}/>
                        <CheckboxItem inputName={""} label={"Ninguno"}/>
                    </FormCheckboxGrid>
                    
                    <FormSectionSubTitle text={"Pisos / Acabados"}/>
                    <FormRow>
                        <FormGroup inputName={""} label={"Especificar tipología o estado físico de los pisos..."} />
                    </FormRow>
                    
                </FormSection>

                {/* 5. */}
                <FormSection sectionName={"form-section-DEEE"} id={"DEEE"}>
                    <FormSectionTitle text="5. Daños Estructurales, Equipamiento y Evaluación Final"/>

                    <FormSectionSubTitle text="Patologías y Daños Visibles en la Edificación"/>
                    <FormCheckboxGrid>
                        <CheckboxItem inputName={"provicional"} label={"Grietas Diagonales en Paredes"}/>
                        <CheckboxItem inputName={"provicional2"} label={"Grietas Horizontales en Paredes"}/>
                        <CheckboxItem inputName={"provicional3"} label={"Presencia de Humedad Activa"}/>
                        <CheckboxItem inputName={"provicional4"} label={"Filtraciones en Losas/Techos"}/>
                        <CheckboxItem inputName={"provicional5"} label={"Presenta Hundimientos en Pisos"}/>
                        <CheckboxItem inputName={"provicional6"} label={"Presenta Grietas en Pisos"}/>
                        <CheckboxItem inputName={"provicional7"} label={"Puertas/Ventanas Trabadas (Descuadre)"}/>
                        <CheckboxItem inputName={"provicional8"} label={"Desniveles Piso-Terreno / Columnas Expuestas"}/>
                        <CheckboxItem inputName={"provicional9"} label={"Fundaciones Visibles (Erosión)"}/>
                        <CheckboxItem inputName={"provicional10"} label={"Techo con Vigas en Ambos Sentidos"}/>
                        <CheckboxItem inputName={"provicional11"} label={"Vigas con Daño / Elementos Arqueados"}/>
                        <CheckboxItem inputName={"provicional12"} label={"Columnas con Espesor Adecuado (25x25cm)"}/>
                        <CheckboxItem inputName={"provicional13"} label={"Continuidad de Columnas en todos los Niveles"}/>
                        <CheckboxItem inputName={"provicional14"} label={"Columnas con Daños / Agrietamientos"}/>
                        <CheckboxItem inputName={"provicional15"} label={"Efecto de Columna Corta"}/>
                    </FormCheckboxGrid>

                    <FormActions/> {/* Submit BTN */} 
                    
                </FormSection>

            </FormBody>

            
        </form>
    </FormContainer>

  )
}
