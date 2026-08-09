export const FormGroup = ({inputType = "text", inputName, inputPlaceholder, label }) => {
  return (
    <div className="flex flex-col">

        <label className="
            text-xs 
            font-medium 
            mb-1 
            text-vul-label 
            uppercase
        " htmlFor={inputName}> {label} </label> 



        {   inputType === "textarea" ?

            <textarea className="
                py-2 px-3 
                border-2 rounded-xs border-siroh-border-muted 
                text-xs
                bg-white
            " name={inputName} id={inputName} placeholder={inputPlaceholder}/>

            :

            <input className="
                py-2 px-3 
                border-2 rounded-xs border-siroh-border-muted 
                text-xs
                bg-white
            " type={inputType} name={inputName} id={inputName} placeholder={inputPlaceholder}/>

        }

    </div>
  )
}
   