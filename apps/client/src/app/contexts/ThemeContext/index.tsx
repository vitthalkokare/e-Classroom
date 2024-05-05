import { createContext, useContext, useEffect, useState } from "react";


type themeModeProps = {
    themeHandler: () => void
    themeMode:boolean
}

const ThemeContext = createContext<themeModeProps | undefined>(undefined);


export const ThemeProvider = ({children,thememode,Mode}:{children:React.ReactNode,thememode:any,Mode:boolean})=>{
const [themeMode,setThemeMode] = useState(false);
const [Classbtn,setClassbtn] = useState({width:0});


    useEffect(()=>{

        const isLocalStorage = localStorage.getItem('darkmode');
        if(isLocalStorage){
            setThemeMode(true);
            thememode(true);
        }

    },[themeMode])

    const themeHandler = ()=>{
        setThemeMode((pre)=>!pre);
        if(Mode === false){
            localStorage.setItem('darkmode','darkmode');
            thememode(true);

        }else{
            thememode(false);
            localStorage.removeItem('darkmode');
        }

    }

    

    return(
        <ThemeContext.Provider value={{themeMode,themeHandler}}>
            {children}

        </ThemeContext.Provider>
    )

}

export const useDarkMode = ()=>{

    const ThemeMode = useContext(ThemeContext); 

    if(!ThemeMode) throw new Error("Dark Mode must be use in ThemeContext Provider");
    return ThemeMode;

}

