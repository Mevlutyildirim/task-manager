import React, {useRef} from 'react';
import {isEqual} from 'lodash';

const memoization = (value:any)=>{
   const refValue = useRef();
   if(!isEqual(refValue.current, value)){
     refValue.current = value;
   }
   return refValue.current;
}

export default memoization;