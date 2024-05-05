import { RootState } from '@repo/ui/index';
import { useDispatch, useSelector } from 'react-redux';

const userUtil = () => {

    const dispatch = useDispatch();


    const ToggleCard = useSelector((state:RootState)=>state.AuthCard.isUser)


        



  return {ToggleCard};
}

export default userUtil;
