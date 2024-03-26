import React from 'react'
import ItemSelector from './ItemSelector';
import SubjectHandler from './SubjectHandler';
import SubjectData from './SubjectData';

const EnrollHandler = () => {
    return (
        <div className="flex sm:flex-col w-[100%]  box-border border-1 rounded-2xl">
          <div className="w-[40%] sm:w-full  box-border p-2">
            
            <ItemSelector/>
    
          </div>
          <div className="w-[60%] sm:w-full  box-border p-2">
            
                <SubjectData/>
          </div>
    
          
        </div>
      );
}

export default EnrollHandler
