export const FormHeader = () => {
  return (
   <header className="flex border-b-3 border-b-vul-primary mb-5">

        <div className="text-center flex-1 pb-4 font-segoe">
            <h1 className="text-vul-primary text-2xl font-bold">Alcaldía de Caracas</h1>
            <h2 className="text-vul-secondary font-bold">Instituto Municipal de Gestión de Riesgos y Administración de Desastres</h2>
            <h3>REGISTRO DE VULNERABILIDAD FÍSICA (IMGRAD)</h3>
        </div>

        <div className="meta-info">
            <div><strong>Nº CONTROL:</strong> <span className="text-siroh-alert-red font-bold">90</span></div>
            <div><strong>Fecha:</strong> 16/4/2024</div>
            <div><strong>Fecha Levantamiento:</strong> 24/9/2023</div>
        </div>

    </header>
  )
}
