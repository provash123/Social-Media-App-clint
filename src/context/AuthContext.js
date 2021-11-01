import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
  user: {
    _id: "60dde6b63db1840d9c9a2ed9",
    profilePicture:"person/2.jpeg",
    coverPicture:"",
    followers:[],
    followings:[],
    isAdmin:false,
    username:"provash1",
    email:"provash@gmail.com",
    password:"$2b$10$/z/ZYYRWMS/HQxyx7P4DaeNiqfIlGkcJCaQxPC2czYf/lXpyFCgQa",
    desc:"my name is provash..who are you",
    createdAt:"2021-07-01T16:00:41.377+00:00",
    updatedAt:"2021-08-28T13:10:43.389+00:00",
    __v:0,
    city:"Dhaka",
    from:"comilla",
    relationShip:"1"
  },
  //  user:null,
  
 
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >{children}</AuthContext.Provider>
  );
};
