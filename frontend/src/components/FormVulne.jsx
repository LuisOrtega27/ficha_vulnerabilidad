import { FormTabs } from "./FormTabs"
import { FormSection } from "./FormSection"
import { FormSectionTitle } from "./FormSectionTitle"
import { FormSectionSubTitle } from "./FormSectionSubTitle"
import { FormCheckboxGrid } from "./FormCheckboxGrid"
import { CheckboxItem } from "./CheckboxItem"
import { FormRow } from "./FormRow"
import { FormGroup } from "./FormGroup"

export const FormVulne = () => {
  return (
    <form onSubmit={(e)=>e.preventDefault()} className="h-full">

        <FormTabs />
        
        <div className="
            form-body 
            bg-light-main border 
            border-tabs-border 
            rounded-xl 
            h-full 
            p-6 
            flex gap-6 
            overflow-x-scroll
            scrollbar-none
            scroll-smooth
            snap-x
        ">
            {/* 1. */}
            <FormSection sectionName={"form-section-DGSO"} id={"DGSO"} >
                <FormSectionTitle text="1. Datos Geográficos, Sociales y del Ocupante"/>
                
                <FormSectionSubTitle text={"Informacion del catastro"}/>
                <FormRow>
                    <FormGroup inputName="" label="Nombre Organización Social"/>
                    <FormGroup inputName="" label="Código Catastral" inputPlaceholder={"000-000-000-U01-000-000-000-000-00-00"}/>
                </FormRow>
                <FormRow>
                    <FormGroup inputName="" label="Parroquia"/>
                    <FormGroup inputName="" label="Sector"/>
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

                <footer className="flex justify-between px-40 mt-20">
                    <input className="bg-siroh-border-muted py-2 px-20 font-bold rounded-md cursor-pointer" type="reset" />
                    <input className="bg-siroh-success-green py-2 px-20 text-white font-bold rounded-md cursor-pointer" type="submit" />
                </footer>
                
            </FormSection>

   
        </div>

        
    </form>
  )
}
