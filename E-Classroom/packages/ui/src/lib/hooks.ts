import  {useDispatch,useSelector,useStore} from 'react-redux'
import type { RootState,DispatchState } from './store'

import type { TypedUseSelectorHook } from 'react-redux' 



export const useAppDispatch: ()=> DispatchState = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

