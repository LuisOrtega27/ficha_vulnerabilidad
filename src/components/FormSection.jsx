export const FormSection = ({sectionName, children}) => {
  return (
    <section className={` ${sectionName} `}>
        {children}
    </section>
  )
}
