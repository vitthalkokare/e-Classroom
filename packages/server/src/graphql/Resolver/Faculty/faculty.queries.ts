

export const facultyQueryResolver = {
    Query:{
        authFaculty:async(_:any,args:any,ctx:any)=>{

            const faculty = await ctx.auth;
            if(faculty.role !== 'FACULTY') throw new Error("not authrized");

            try{
                
                return await faculty;

            }catch(err){
                return err;

            }

        }
    }
}