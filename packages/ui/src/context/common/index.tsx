import { ReactNode, createContext, useCallback, useContext, useState } from "react";


 type commonContextProps ={
    drawerHandler:()=>void
    cardDrawer:{width:number}
    navHandler:()=> void
    mobNav:{isNav:boolean,display:string}
    LiveDriver:number
    handleLiveDriver:()=>void
 }

const CommonContext = createContext<commonContextProps | undefined>(undefined);

export const CommonContextProvider = ({children}:{children:ReactNode})=>{
    const [cardDrawer,setCardDrawer] = useState({width:0});
    const [mobNav,setmobNav] = useState({isNav:false,display:'hidden'});
    const [LiveDriver,setLiveDriver] = useState<number>(280);

    const drawerHandler = ()=>{
        setCardDrawer((pre)=> pre.width === 0 ? {width:70} : {width:0});
    }
    const navHandler = ()=>{
        setmobNav((pre)=> pre.isNav === false ? {isNav:true,display:'flex'}: {isNav:false,display:'hidden'});
    }

    const handleLiveDriver = useCallback(()=>{
        if(LiveDriver === 280 || LiveDriver === 160){
            setLiveDriver(600);
      
          }
          else{
            setLiveDriver(280);
          }
    },[LiveDriver])


    return (
        <CommonContext.Provider value={{cardDrawer,drawerHandler,mobNav,navHandler,LiveDriver,handleLiveDriver}} >
            {children}
        </CommonContext.Provider>
    )
}

export const useCommonContext = ()=>{

    const commonCtx = useContext(CommonContext);

    if(!commonCtx) throw new Error("useCommonContext must be used within a CommonContextProvider")
    return commonCtx;
}

