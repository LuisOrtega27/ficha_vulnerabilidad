import { NavLink } from "react-router"

const tabList = [
    { 
        name: "1. Ubicación y Ocupante", 
        path: "/#1"
    },
    { 
        name: "2. Vivienda y Censo", 
        path: "/#2"
    },
    { 
        name: "3. Terreno y Parcela", 
        path: "/#3"
    },
    { 
        name: "4. Elementos Estructurales", 
        path: "/#4"
    },
    { 
        name: "5. Patologías y Diagnóstico", 
        path: "/#5"
    }
]

export const FormTabs = () => {
    
  return (
    <nav className="w-full flex gap-2 border-b-2 border-b-tabs-border pb-1 mb-4">
        
        { tabList.map(item=> 
            <NavLink 
                className="bg-light-main text-sm text-tabs font-medium rounded-t-md py-2 px-4 " 
                key={item.name} 
                to={item.path}
                end
            > 
                
                {item.name} 

            </NavLink>
        )}
        
    </nav>
  )
}
