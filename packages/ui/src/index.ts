import { store } from "./lib/store";


import GqlProvider from "./lib/gqlProvider";
import StoreProvider from "./lib/StoreProvider";

export {GqlProvider}
export {StoreProvider}

export { store, type RootState } from "./lib/store";

export * as subData from './lib/features/Classroom/SubjectsHandler/SubStdSlice'

export {setCard} from './lib/features/Classroom/Auth/Slices/AuthCardSlice'

