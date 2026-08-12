export const FormSelect = ({inputName, inputPlaceholder, label, optionList, actionHandler, parroquiaID=0 }) => {

    return (
    <div className="flex flex-col">
        
        <label className="
            text-xs 
            font-medium 
            mb-1 
            text-vul-label 
            uppercase            
            " htmlFor={inputName}> {label} </label> 
    
        <select className="
            py-2 px-3 
            border-2 rounded-xs border-siroh-border-muted 
            text-xs
            bg-white
        " name={inputName} id={inputName} placeholder={inputPlaceholder} onChange={actionHandler}>

            <option>--{label}--</option>

            { parroquiaID > 0 ?

                optionList
                .filter(item=>item.parroquia_id===parroquiaID)
                .map(item=> <option key={`${item.id}-${item.nom}`} value={`${item.id},${item.cod}`}>{item.nombre}</option>)
                
                : 

                optionList.map(item=> <option key={`${item.id}-${item.nom}`} value={`${item.id},${item.cod}`}>{item.nombre}</option>)
                
            }
            
        </select>

    </div>
  )
}
