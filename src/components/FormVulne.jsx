import { FormTabs } from "./FormTabs"
import { FormSection } from "./FormSection"
import { FormSectionTitle } from "./FormSectionTitle"
import { FormSectionSubTitle } from "./FormSectionSubTitle"
import { FormCheckboxGrid } from "./FormCheckboxGrid"
import { CheckboxItem } from "./CheckboxItem"

export const FormVulne = () => {
  return (
    <form onSubmit={(e)=>e.preventDefault()} className="h-full">

        <FormTabs />
        
        <div className="form-body bg-light-main border border-tabs-border rounded-xl h-full p-6 flex">
            
            <FormSection sectionName={"form-section-DGSO"}>
                <FormSectionTitle text="Daños Estructurales, Equipamiento y Evaluación Final"/>
                <FormSectionSubTitle text="Patologías y Daños Visibles en la Edificación"/>
                <FormCheckboxGrid>
                    <CheckboxItem text={"Grietas Diagonales en Paredes"} name={"provicional"}/>
                    <CheckboxItem text={"Grietas Horizontales en Paredes"} name={"provicional2"}/>
                    <CheckboxItem text={"Presencia de Humedad Activa"} name={"provicional3"}/>
                    <CheckboxItem text={"Filtraciones en Losas/Techos"} name={"provicional4"}/>
                    <CheckboxItem text={"Presenta Hundimientos en Pisos"} name={"provicional5"}/>
                    <CheckboxItem text={"Presenta Grietas en Pisos"} name={"provicional6"}/>
                    <CheckboxItem text={"Puertas/Ventanas Trabadas (Descuadre)"} name={"provicional7"}/>
                    <CheckboxItem text={"Desniveles Piso-Terreno / Columnas Expuestas"} name={"provicional8"}/>
                    <CheckboxItem text={"Fundaciones Visibles (Erosión)"} name={"provicional9"}/>
                    <CheckboxItem text={"Techo con Vigas en Ambos Sentidos"} name={"provicional10"}/>
                    <CheckboxItem text={"Vigas con Daño / Elementos Arqueados"} name={"provicional11"}/>
                    <CheckboxItem text={"Columnas con Espesor Adecuado (25x25cm)"} name={"provicional12"}/>
                    <CheckboxItem text={"Continuidad de Columnas en todos los Niveles"} name={"provicional13"}/>
                    <CheckboxItem text={"Columnas con Daños / Agrietamientos"} name={"provicional14"}/>
                    <CheckboxItem text={"Efecto de Columna Corta"} name={"provicional15"}/>
                </FormCheckboxGrid>
            </FormSection>

            <section className="form-section-">

                <FormSectionTitle text="Daños Estructurales, Equipamiento y Evaluación Final"/>

                <FormSectionSubTitle text="Patologías y Daños Visibles en la Edificación"/>

                <FormCheckboxGrid>
                    <CheckboxItem text={"Grietas Diagonales en Paredes"} name={"provicional"}/>
                    <CheckboxItem text={"Grietas Horizontales en Paredes"} name={"provicional2"}/>
                    <CheckboxItem text={"Presencia de Humedad Activa"} name={"provicional3"}/>
                    <CheckboxItem text={"Filtraciones en Losas/Techos"} name={"provicional4"}/>
                    <CheckboxItem text={"Presenta Hundimientos en Pisos"} name={"provicional5"}/>
                    <CheckboxItem text={"Presenta Grietas en Pisos"} name={"provicional6"}/>
                    <CheckboxItem text={"Puertas/Ventanas Trabadas (Descuadre)"} name={"provicional7"}/>
                    <CheckboxItem text={"Desniveles Piso-Terreno / Columnas Expuestas"} name={"provicional8"}/>
                    <CheckboxItem text={"Fundaciones Visibles (Erosión)"} name={"provicional9"}/>
                    <CheckboxItem text={"Techo con Vigas en Ambos Sentidos"} name={"provicional10"}/>
                    <CheckboxItem text={"Vigas con Daño / Elementos Arqueados"} name={"provicional11"}/>
                    <CheckboxItem text={"Columnas con Espesor Adecuado (25x25cm)"} name={"provicional12"}/>
                    <CheckboxItem text={"Continuidad de Columnas en todos los Niveles"} name={"provicional13"}/>
                    <CheckboxItem text={"Columnas con Daños / Agrietamientos"} name={"provicional14"}/>
                    <CheckboxItem text={"Efecto de Columna Corta"} name={"provicional15"}/>
                </FormCheckboxGrid>
            </section>

            <section className="form-section-">

                <FormSectionTitle text="Daños Estructurales, Equipamiento y Evaluación Final"/>

                <FormSectionSubTitle text="Patologías y Daños Visibles en la Edificación"/>

                <FormCheckboxGrid>
                    <CheckboxItem text={"Grietas Diagonales en Paredes"} name={"provicional"}/>
                    <CheckboxItem text={"Grietas Horizontales en Paredes"} name={"provicional2"}/>
                    <CheckboxItem text={"Presencia de Humedad Activa"} name={"provicional3"}/>
                    <CheckboxItem text={"Filtraciones en Losas/Techos"} name={"provicional4"}/>
                    <CheckboxItem text={"Presenta Hundimientos en Pisos"} name={"provicional5"}/>
                    <CheckboxItem text={"Presenta Grietas en Pisos"} name={"provicional6"}/>
                    <CheckboxItem text={"Puertas/Ventanas Trabadas (Descuadre)"} name={"provicional7"}/>
                    <CheckboxItem text={"Desniveles Piso-Terreno / Columnas Expuestas"} name={"provicional8"}/>
                    <CheckboxItem text={"Fundaciones Visibles (Erosión)"} name={"provicional9"}/>
                    <CheckboxItem text={"Techo con Vigas en Ambos Sentidos"} name={"provicional10"}/>
                    <CheckboxItem text={"Vigas con Daño / Elementos Arqueados"} name={"provicional11"}/>
                    <CheckboxItem text={"Columnas con Espesor Adecuado (25x25cm)"} name={"provicional12"}/>
                    <CheckboxItem text={"Continuidad de Columnas en todos los Niveles"} name={"provicional13"}/>
                    <CheckboxItem text={"Columnas con Daños / Agrietamientos"} name={"provicional14"}/>
                    <CheckboxItem text={"Efecto de Columna Corta"} name={"provicional15"}/>
                </FormCheckboxGrid>
            </section>

            <section className="form-section-">

                <FormSectionTitle text="Daños Estructurales, Equipamiento y Evaluación Final"/>

                <FormSectionSubTitle text="Patologías y Daños Visibles en la Edificación"/>

                <FormCheckboxGrid>
                    <CheckboxItem text={"Grietas Diagonales en Paredes"} name={"provicional"}/>
                    <CheckboxItem text={"Grietas Horizontales en Paredes"} name={"provicional2"}/>
                    <CheckboxItem text={"Presencia de Humedad Activa"} name={"provicional3"}/>
                    <CheckboxItem text={"Filtraciones en Losas/Techos"} name={"provicional4"}/>
                    <CheckboxItem text={"Presenta Hundimientos en Pisos"} name={"provicional5"}/>
                    <CheckboxItem text={"Presenta Grietas en Pisos"} name={"provicional6"}/>
                    <CheckboxItem text={"Puertas/Ventanas Trabadas (Descuadre)"} name={"provicional7"}/>
                    <CheckboxItem text={"Desniveles Piso-Terreno / Columnas Expuestas"} name={"provicional8"}/>
                    <CheckboxItem text={"Fundaciones Visibles (Erosión)"} name={"provicional9"}/>
                    <CheckboxItem text={"Techo con Vigas en Ambos Sentidos"} name={"provicional10"}/>
                    <CheckboxItem text={"Vigas con Daño / Elementos Arqueados"} name={"provicional11"}/>
                    <CheckboxItem text={"Columnas con Espesor Adecuado (25x25cm)"} name={"provicional12"}/>
                    <CheckboxItem text={"Continuidad de Columnas en todos los Niveles"} name={"provicional13"}/>
                    <CheckboxItem text={"Columnas con Daños / Agrietamientos"} name={"provicional14"}/>
                    <CheckboxItem text={"Efecto de Columna Corta"} name={"provicional15"}/>
                </FormCheckboxGrid>
            </section>

            {/* 
            <section className="form-section-CVDP"></section>
            <section className="form-section-SPAA"></section>
            <section className="form-section-TMSC"></section>
            <section className="form-section-DEEE"></section> 
            */}

        </div>

        
    </form>
  )
}
