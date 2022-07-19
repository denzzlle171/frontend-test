import   {ADD_USER} from './users.actions'

const initialState = {
    userList: [],

}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                userList: state.userList.concat(action.payload.userData)
            }
        }
        default:
            return state;
  
    }
}

export default userReduser;