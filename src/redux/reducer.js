const initialState = {
    Items : [],
    Todos : [],
}

const Reducer = (state=initialState,action) => {
    switch(action.type){
        case 'Add' :
            // console.log(action.work)
            return {
                Items :[...state.Items,{work : action.work, completed : false}],
                Todos : [...state.Todos,{work : action.work, completed : false}]
            }
        default : return state;
    }

}


export default Reducer 