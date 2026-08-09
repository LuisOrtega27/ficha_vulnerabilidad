// import { NavLink } from "react-router"

const tabList = [
    { 
        name: "1. Ubicación y Ocupante", 
        path: "#DGSO"
    },
    { 
        name: "2. Vivienda y Censo", 
        path: "#CVDP"
    },
    { 
        name: "3. Terreno y Parcela", 
        path: "#SPAA"
    },
    { 
        name: "4. Elementos Estructurales", 
        path: "#TMSC"
    },
    { 
        name: "5. Patologías y Diagnóstico", 
        path: "#DEEE"
    }
]

export const FormTabs = () => {
    
  return (
    <nav className="w-full flex gap-2 border-b-2 border-b-tabs-border pb-1 mb-4">
        
        { tabList.map(item=> 
            <a
                className="bg-light-main text-sm text-tabs font-medium rounded-t-md py-2 px-4 " 
                key={item.name} 
                // to={item.path}
                href={item.path}
            > 
                
                {item.name} 

            </a>
        )}
        
    </nav>
  )
}
