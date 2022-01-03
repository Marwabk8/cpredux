import { ADD, DELETE,DONE } from "./types"

export const add=(payload)=>{
return{type:ADD,
 payload

}

}

export const Delete= (payload)=>{
    return {type:DELETE,
    payload
    }
}

//  export const done=()=>{

//     return{type:DONE,
//         payload
//  }
// }