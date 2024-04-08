import { useQuery } from "@apollo/client";
import { SUBJECT_DATA } from "../graphql/common/queries";


export const dd = async ()=>{

    const {data,error,loading} = useQuery(SUBJECT_DATA);

    const subd = await data
    if(subd){
        return subd
    }

}