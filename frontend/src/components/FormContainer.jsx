export const FormContainer = ({children}) => {
  return (
    <div className="form-background bg-light-main min-h-lvh w-vw pt-5 flex justify-center items-start">
        <div className="form-wrapper bg-white w-8/12 p-4 rounded-2xl shadow-md ">
            {children}
        </div>
    </div>
  )
}
