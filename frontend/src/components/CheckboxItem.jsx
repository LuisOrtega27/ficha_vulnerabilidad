export const CheckboxItem = ({ inputType="checkbox", inputName, label}) => {
  return (
    <div className='
        flex
        items-center
        gap-2
        text-xs
        uppercase
        text-checkboxItem
    '>
        <input type={inputType} name={inputName} id={inputName}/>
        <label htmlFor={inputName}>{label}</label>
    </div>
  )
}
