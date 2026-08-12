import { CheckboxItem } from "../components/CheckboxItem"
import { FormActions } from "../components/FormActions"
import { FormBody } from "../components/FormBody"
import { FormCheckboxGrid } from "../components/FormCheckboxGrid"
import { FormContainer } from "../components/FormContainer"
import { FormGroup } from "../components/FormGroup"
import { FormRow } from "../components/FormRow"
import { FormSection } from "../components/FormSection"
import { FormSectionMiniSubTitle } from "../components/FormSectionMiniSubTitle"
import { FormSectionSubTitle } from "../components/FormSectionSubTitle"
import { FormSectionTitle } from "../components/FormSectionTitle"
import { FormTabs } from "../components/FormTabs"

import { XIcon } from "lucide-react" 

const tabList = [
    { 
        name: "1. Ubicación y Empadronador", 
        path: "#DGUI"
    },
    { 
        name: "2. Ocupantes (Censo)", 
        path: "#DOI"
    },
    { 
        name: "3. Fuerza de Trabajo", 
        path: "#FTJH"
    },
    { 
        name: "4. Situación de Riesgo", 
        path: "#SDR"
    },
]

export const FormSocio = () => {
  return (
    <FormContainer>
        <form onSubmit={(e)=> e.preventDefault()}>

            <header className="flex border-b-3 border-b-vul-primary mb-5">

                <div className="text-center flex-1 pb-4 font-segoe">
                    <h1 className="text-vul-primary text-2xl font-bold">Alcaldía de Caracas</h1>
                    <h2 className="text-vul-secondary font-bold">Instituto Municipal de Gestión de Riesgos y Administración de Desastres</h2>
                    <h3>REGISTRO DE VULNERABILIDAD FÍSICA (IMGRAD)</h3>
                </div>

                <div className="meta-info">
                    <div>
                        <strong>Nº CONTROL:</strong> 
                        <input name={""} className="text-siroh-alert-red font-bold w-16 text-center" value={"94000"} />
                    </div>
                    <div className="flex gap-2">
                        <strong>Nº de Hogar:</strong>
                        <input className="w-16 text-center border-2" type="text" placeholder="---"/>
                        <span>de</span>
                        <input className="w-16 text-center border-2" type="text" placeholder="---"/>
                    </div>
                    
                </div>

            </header>

            <FormTabs tabList={tabList}/>

            <FormBody>

                {/* 1. */}
                <FormSection sectionName={"form-section-DGUI"} id={"DGUI"}>
                    <FormSectionTitle text={"I. Datos Generales y Ubicación del Inmueble"}/>

                    <FormSectionSubTitle text={"Datos de la persona"} />
                    <FormRow>
                        <FormGroup inputName={""} label={"Nombre y Apellido del Empadronador"}/>
                        <FormGroup inputName={""} label={"Cédula de Identidad (C.I.)"}/>
                    </FormRow>

                    <FormSectionSubTitle text={"Datos del inmueble"} />
                    <FormRow>
                        <FormGroup inputName={""} label={"Estado (Edo.)"}/>
                        <FormGroup inputName={""} label={"Municipio (Mun.)"}/>
                        <FormGroup inputName={""} label={"Parroquia (Prr.)"}/>
                        <FormGroup inputName={""} label={"Sector / Ámbitos (Amb. / Sect.)"}/>
                        <FormGroup inputName={""} label={"Manzana / Comunidad (Manz.)"}/>
                    </FormRow>

                    <FormSectionSubTitle text={"Codigo catastral"} />
                    <FormRow>
                        <FormGroup inputName={""} label={"Código Catastral"}/>
                    </FormRow>

                </FormSection>
                
                {/* 2. */}
                <FormSection sectionName={"form-section-DOI"} id={"DOI"} >

                    <FormSectionTitle text={"II. Datos de los Ocupantes del Inmueble"} />
                    
                    <table id="tablaOcupantes" className="table-fixed  w-full text-center text-xs">
                        
                        <thead className="divide-y-2 divide-white">
                            <tr className="bg-siroh-border-muted text-vul-primary font-bold" >
                                <td>Nº</td>
                                <td>Apellidos y Nombres</td>
                                <td>Nº C.I.</td>
                                <td>Parentesco</td>
                                <td>Sexo</td>
                                <td>Año Nac.</td>
                                <td>Nacionalidad</td>
                                <td>Estado Civil</td>
                                <td>Nivel Estudio</td>
                                <td>¿Trabaja?</td>
                                <td>Acción</td>
                            </tr>
                        </thead>

                        <tbody >
                            <tr className="bg-white divide-x divide-y divide-blue-400">
                                <td>1</td>
                                <td> <input type="text" name={""} placeholder="Jefe(a) de hogar"/> </td>
                                <td> <input type="number" name={""} placeholder="C.I."/> </td>
                                <td> 
                                    <select name={""}>
                                        <option>-- Seleccionar --</option>
                                        <option value={"Jefe(a) del hogar"}>Jefe(a) del hogar</option>
                                        <option value={"Cónyuge"}>Cónyuge</option>
                                        <option value={"Hijo(a)"}>Hijo(a)</option>
                                        <option value={"Nieto(a)"}>Nieto(a)</option>
                                        <option value={"Madre/Padre"}>Madre/Padre</option>
                                        <option value={"Suegro(a)"}>Suegro(a)</option>
                                        <option value={"Hermano(a)"}>Hermano(a)</option>
                                        <option value={"Sobrino(a)"}>Sobrino(a)</option>
                                        <option value={"Primo(a)"}>Primo(a)</option>
                                        <option value={"Yerno/Nuera"}>Yerno/Nuera</option>
                                        <option value={"Otro"}>Otro</option>
                                    </select> 
                                </td>
                                <td> 
                                    <select name={""}>
                                        <option value="M">M</option>
                                        <option value="F">F</option>
                                    </select> 
                                </td>
                                <td> <input type="date" name={""}/> </td>
                                <td> 
                                    <select name={""}>
                                        <option value="Venezolano">Venezolano</option>
                                        <option value="Extranjero">Extranjero</option>
                                    </select>
                                </td>
                                <td>
                                    <select name={""}>
                                        <option value="Soltero(a)">Soltero(a)</option>
                                        <option value="Casado(a)">Casado(a)</option>
                                        <option value="Concubino(a)">Concubino(a)</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </td>
                                <td>
                                    <select name={""}>
                                        <option value="Ninguno">Ninguno</option>
                                        <option value="Básico">Básico</option>
                                        <option value="Diversificado">Diversificado</option>
                                        <option value="Universitario">Universitario</option>
                                    </select>
                                </td>
                                <td>
                                    <select name={""}>
                                        <option value="si">si</option>
                                        <option value="no">no</option>
                                    </select>
                                </td>
                                <td>
                                    <button className="bg-siroh-alert-red cursor-pointer"> <XIcon className="mx-auto text-white font-bold"/> </button>
                                </td>
                            </tr>
                        </tbody>
        
                    </table>

                    <button className="bg-siroh-success-green mt-8 text-white font-bold p-2 rounded-md cursor-pointer">+ Agregar Integrante</button>

                </FormSection>

                {/* 3. */}
                <FormSection sectionName={"form-section-FTJH"} id={"FTJH"}>
                    <FormSectionTitle text={"III. Fuerza de Trabajo Jefe(a) del Hogar"} />

                    <FormSectionSubTitle text={"1. ¿En cuál de estas situaciones se encuentra actualmente?"} />
                    <FormRow>
                        <CheckboxItem inputType="radio" inputName={""} label={"a- Trabajando"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"b- Sin trabajar"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"c- Buscando trabajo por primera vez"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"d- En quehaceres del hogar"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"e- Estudiando"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"f- Como pensionado o jubilado"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"g- Otra situación (especifique):"}/>
                    </FormRow>

                    <FormSectionSubTitle text={"2. ¿Cuánto tiempo tiene sin trabajar?"} />
                    <FormRow>
                        <CheckboxItem inputType="radio" inputName={""} label={"a- Hasta 3 meses"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"b- De 4 a 6 meses"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"c- De 7 a 12 meses"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"d- Más de 1 año"}/>
                    </FormRow>

                    <FormSectionSubTitle text={"3. ¿Cuál es su ocupación en la empresa, organismo o negocio donde trabaja?"} />
                    <FormRow>
                        <FormGroup inputName={""} label={""} inputPlaceholder={"Ej: Chofer, aprendiz de tornero, oficinista, maestra, etc."}/>
                    </FormRow>

                    <FormSectionSubTitle text={"4. ¿A qué se dedica la empresa, organismo o negocio donde trabaja?"} />
                    <FormRow>
                        <FormGroup inputName={""} label={""} inputPlaceholder={"Ej: Transporte de pasajeros, fábrica, banco, educación, etc."}/>
                    </FormRow>

                    <FormSectionSubTitle text={"4. ¿A qué se dedica la empresa, organismo o negocio donde trabaja?"} />
                    <FormCheckboxGrid>
                        <CheckboxItem inputType="radio" inputName={""} label={"a- Ingreso en Bs:"}/>
                        <FormGroup inputName={""} inputPlaceholder={"Monto Bs."} />
                    </FormCheckboxGrid>
                    <FormCheckboxGrid>
                        <CheckboxItem inputType="radio" inputName={""} label={"b- No tuvo ingresos"}/>
                    </FormCheckboxGrid>

                    <FormSectionSubTitle text={"6. ¿Cuántas personas en su hogar tienen trabajo remunerado?"} />
                    <FormCheckboxGrid>
                        <CheckboxItem inputType="radio" inputName={""} label={"a- Una persona"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"b- Dos personas"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"c- Tres personas o más"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"d- Ninguno"}/>
                    </FormCheckboxGrid>

                    <FormSectionSubTitle text={"7. ¿Cuál fue el monto total del ingreso del hogar el mes pasado?"}/>
                    <FormCheckboxGrid>
                        <CheckboxItem inputType="radio" inputName={""} label={"a- Menos de un salario mínimo"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"b- Un salario mínimo"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"c- De uno a dos salarios mínimos"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"d- De dos a cuatro salarios mínimos"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"e- Más de cuatro salarios mínimos"}/>
                        <CheckboxItem inputType="radio" inputName={""} label={"f- Ninguno"}/>
                    </FormCheckboxGrid>

                    <FormSectionSubTitle text={"8. ¿En la vivienda se realiza alguna(s) actividad(es) económica(s)?"}/>
                    <FormCheckboxGrid>
                        <CheckboxItem inputType="radio" inputName={""} label={"a- Sí"} />
                        <CheckboxItem inputType="radio" inputName={""} label={"b- No"} />
                    </FormCheckboxGrid>
                </FormSection>

                {/* 4. */}

                <FormSection sectionName={"form-section-SDR"} id={"SDR"}>
                    <FormSectionTitle text={"IV. Situación de Riesgo"} />

                    <FormSectionSubTitle text={"Aspectos que pueden incidir en una situación de riesgo:"} />

                    <FormSectionMiniSubTitle text={"De la Vivienda"} />
                    <FormCheckboxGrid>
                        <CheckboxItem inputName={""} label={"¿Fisuras o grietas en las paredes?"} />
                        <CheckboxItem inputName={""} label={"¿Columnas fracturadas?"} />
                        <CheckboxItem inputName={""} label={"¿Vigas fracturadas?"} />
                        <CheckboxItem inputName={""} label={"Presencia en los alrededores de otras viviendas, calles, escaleras, muros, etc. en situación de riesgo que puedan afectarla"} />
                        <CheckboxItem inputName={""} label={"¿Hundimiento del piso?"} />
                        <FormGroup inputName={""} label={"Otros (especificar):"} />
                    </FormCheckboxGrid>

                    <FormSectionMiniSubTitle text={"Del Terreno"} />
                    <FormCheckboxGrid>
                        <CheckboxItem inputName={""} label={"¿Existen o han existido hundimientos del terreno?"} />
                        <CheckboxItem inputName={""} label={"¿Existen o han existido deslizamientos del terreno?"} />
                        <CheckboxItem inputName={""} label={"¿Está al borde, sobre o al pie de un talud?"} />
                        <CheckboxItem inputName={""} label={"¿Tiene botes de aguas en la cercanía (blancas y/o negras)?"} />
                        <CheckboxItem inputName={""} label={"¿Existen árboles o postes en la cercanía que estén inclinados?"} />

                        <FormCheckboxGrid>
                            <label>Drenajes o quebradas en la cercanía:</label>
                            <CheckboxItem inputName={""} label={"A menos de 10 m."} />
                            <CheckboxItem inputName={""} label={"de 10 a 20 m."} />
                            <CheckboxItem inputName={""} label={"de 20 a 40 m."} />
                        </FormCheckboxGrid>
                    </FormCheckboxGrid>

                    <FormSectionMiniSubTitle text={"Dictamen / Nivel de Riesgo Evaluado:"} />
                    <FormCheckboxGrid>
                        <CheckboxItem inputType="radio" inputName={""} label={"Alto"} />
                        <CheckboxItem inputType="radio" inputName={""} label={"Mediano"} />
                        <CheckboxItem inputType="radio" inputName={""} label={"Bajo"} />
                        <CheckboxItem inputName={""} label={"LA INSPECCIÓN VISUAL NO REFLEJA NINGÚN TIPO DE RIESGO"} />
                    </FormCheckboxGrid>

                    <FormSectionTitle text={"Firma del Empadronador"} />
                    <FormRow>
                        <FormGroup inputName={""} inputPlaceholder={"Firma o Nombre del Evaluador"} />
                    </FormRow>

                    <FormActions/> {/* Submit BTN */} 
                    
                </FormSection>

            </FormBody>


        </form>
        
    </FormContainer>
  )
}
