export const Update = () => {
    return {
        type : 'Update'
    }
}
export const complete = () => {
    return {
        type : 'Complete'
    }
}
export  const All = () => {
    return {
        type : 'All'
    }
}
export const Add = (eitem) => {
    // console.log(eitem)
    return {
        type : 'Add',
        work :  eitem
    }
}
export const Del = () => {
    return {
        type : 'Del'
    }
}
