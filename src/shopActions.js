 const addCart = (id) =>{
    return {
        type: "ADD_TO_CART",
        payload: id,
    }
}

const removeCart = (ID) =>{
    return {
        type: "REMOVE_ITEM",
        payload: ID,
    }
}

const increase = (id) =>{
    return {
        type: "INCREASE",
        payload: id,
    }
}

const decrease = (id) =>{
    return {
        type: "DECREASE",
        payload: id,
    }
}

const view = (ID) =>{
    return {
        type: "VIEW",
        payload: ID,
    }
}

const login = (user) =>{
    return {
        type: "LOGIN",
        payload: user
    }
}

const logout = () =>{
    return {
        type:"LOGOUT"
    }
}

export default {
    addCart,
    removeCart,
    increase,
    decrease,
    view,
    logout,
    login,
}