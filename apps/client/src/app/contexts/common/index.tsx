import { ReactNode, createContext, useContext, useState } from "react";


 type commonContextProps ={
    drawerHandler:()=>void
    cardDrawer:{width:number}
    navHandler:()=> void
    mobNav:{isNav:boolean,display:string}
 }

const CommonContext = createContext<commonContextProps | undefined>(undefined);

export const CommonContextProvider = ({children}:{children:ReactNode})=>{
    const [cardDrawer,setCardDrawer] = useState({width:0});
    const [mobNav,setmobNav] = useState({isNav:false,display:'hidden'});

    const drawerHandler = ()=>{
        setCardDrawer((pre)=> pre.width === 0 ? {width:70} : {width:0});
    }
    const navHandler = ()=>{
        setmobNav((pre)=> pre.isNav === false ? {isNav:true,display:'flex'}: {isNav:false,display:'hidden'});
    }


    return (
        <CommonContext.Provider value={{cardDrawer,drawerHandler,mobNav,navHandler}} >
            {children}
        </CommonContext.Provider>
    )
}

export const useCommonContext = ()=>{

    const commonCtx = useContext(CommonContext);

    if(!commonCtx) throw new Error("useCommonContext must be used within a CommonContextProvider")
    return commonCtx;
}

