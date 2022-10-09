import React, {createContext, useReducer} from "react";
import AppReducer from "../components/AppReducer";

const initalUser = {
    user: [{}]
}

export  const GobalContext =  createContext(initalUser);

export const GobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initalUser);
    function initalEmployee(employee) {
                dispatch({
                    type: "init_state",
                    payload: employee
                });
            }
    function editCurrentEmp(editEmployee) {
        dispatch({
            type: "edit_state",
            payload: editEmployee
        })
    }        

    return (
        <GobalContext.Provider value={{
            user: state.user,
            initalEmployee,
            editCurrentEmp
        }}>
            {children}
        </GobalContext.Provider>
    );
};