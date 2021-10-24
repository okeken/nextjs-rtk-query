export const extractNumber =(text)=>{    
    const j = [...text]
    const b =Number( j.splice(47,j.length).join(''))
    return b
}
