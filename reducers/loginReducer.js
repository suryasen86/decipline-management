import { LOGIN_REQUEST} from "../type";

const initialState = {
    user: null,
    loading: false,
    isAuthenticated:false,
    errors:null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                
                loading: true,
            };

   
        default:
            return state;
    }
};

export default loginReducer;
