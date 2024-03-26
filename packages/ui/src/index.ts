import { store } from "./lib/store";



import StoreProvider from "./lib/StoreProvider";

export {StoreProvider}

import GqlProvider from "./lib/GqlProvider";
import Dashboard from "./Components/Common/Dashboard";


export { validateSchemas } from "./api/Schemas";
export { gqlclient } from "./api/graphql";



export {GqlProvider} 

export * as commonUi from "./Components/Common";


export { store, type RootState } from "./lib/store";

export * as subData from './lib/features/Classroom/SubjectsHandler/SubStdSlice'

export {setCard} from './lib/features/Classroom/Auth/Slices/AuthCardSlice'

export {Dashboard}  