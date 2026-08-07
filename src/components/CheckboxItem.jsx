export const CheckboxItem = ({text, name}) => {
  return (
    <div className='
        flex
        items-center
        gap-2
        text-xs
        uppercase
        text-checkboxItem
    '>
        <input type="checkbox" name={name} id={name}/>
        <label htmlFor={name}>{text}</label>
    </div>
  )
}
