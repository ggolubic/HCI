import React, { useReducer, createContext } from "react"

export const UserCtx = createContext({
  state: {},
  logIn: (user, pass) => [user, pass],
})

const userReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: action.user,
      }
    case "LOG_IN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case "LOG_OUT":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        loading: false,
        loggedIn: false,
        user: null,
      }
    case "LOG_OUT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return {
        ...state,
      }
  }
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: "",
    loading: false,
    loggedIn: false,
    error: null,
  })

  const logIn = async () => {
    dispatch({ type: "LOG_IN" })
    await setTimeout(() => {
      dispatch({ type: "LOG_IN_SUCCESS", user: "Admin" })
    }, [1000])
  }

  const logOut = async () => {
    dispatch({ type: "LOG_OUT" })
    await setTimeout(() => {
      dispatch({ type: "LOG_OUT_SUCCESS" })
    }, [1000])
  }
  const value = {
    state,
    logIn,
    logOut,
  }
  return <UserCtx.Provider value={value}>{children}</UserCtx.Provider>
}

export default UserProvider
