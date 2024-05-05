import { store } from "./lib/store";



import StoreProvider from "./lib/StoreProvider";

export {StoreProvider}

import GqlProvider from "./lib/GqlProvider";
import Dashboard from "./Components/Common/Dashboard";
import Navigate from "./Components/Dashboard/Navigate";

export {GqlProvider} 

export {Navigate}
export * as commonUi from "./Components/Common";
export * as subdatahandler from './lib/features/Classroom/SubjectsHandler/SubDataHandler'
export * as commonSlice from "./lib/features/common/commonSlice"
export * as fcaultySlice from './lib/features/Faculty/facultyDataHandler'
export * as studentSlice from './lib/features/Classroom/Student/StudentSlice'
export { store, type RootState } from "./lib/store";


export {setCard} from './lib/features/Classroom/Auth/Slices/AuthCardSlice'

export {Dashboard}  