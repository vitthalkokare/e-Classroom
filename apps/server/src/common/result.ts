


 type Ok<T> = Readonly<{type:'ok',value:T}>

 type Err<E> = Readonly<{type:'error',value:E}>

export type Result<T,E  > = Ok<T> | Err<E>

export const ok = <T>(value:T):Ok<T>=>({
    type: 'ok',
    value: value,
})


export const err = <E>(error:E):Err<E> =>({
    type:'error',
    value: error,
    

})