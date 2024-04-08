import { store } from "./lib/store";



import StoreProvider from "./lib/StoreProvider";

export {StoreProvider}

import GqlProvider from "./lib/GqlProvider";
import Dashboard from "./Components/Common/Dashboard";

export {GqlProvider} 

export * as commonUi from "./Components/Common";
export * as subdatahandler from './lib/features/Classroom/SubjectsHandler/SubDataHandler'


export { store, type RootState } from "./lib/store";


export {setCard} from './lib/features/Classroom/Auth/Slices/AuthCardSlice'

export {Dashboard}  