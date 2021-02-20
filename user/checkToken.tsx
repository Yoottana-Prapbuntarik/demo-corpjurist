import { useEffect, useState } from 'react'

import {
  getAccountUser
} from "../apis/manageAccountUserAPIClient";
const useAuthentication = (defaultValue): any => {
const [isAuthenticated, setAuthenticated] = useState(defaultValue)

useEffect(() => {
  if (isAuthenticated === true) {
    getAccountUser()
  }
}, [isAuthenticated])

useEffect(() => {
    if (localStorage.getItem('access-token') && localStorage.getItem('access-token') !== undefined) {
      setAuthenticated(true)
    }
  }, [])
  return [isAuthenticated, setAuthenticated]
}

export default useAuthentication
