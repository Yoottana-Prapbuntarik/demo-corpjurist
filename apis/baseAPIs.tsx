import axios from 'axios'
import join from 'url-join'

 // const productionAPIManagerUser = 'https://corpjurist-backend-production.herokuapp.com/api/'
 // const productionAPI = 'https://corpjurist-backend-production.herokuapp.com/api/v1/'

const devAPIManagerUser = 'https://apidocsbackend.herokuapp.com/api/'
const devAPI = 'https://apidocsbackend.herokuapp.com/api/v1/'

const contentTypeJson = { 'content-type': 'application/json' }

const service = axios.create({
  baseURL: devAPI,
  headers: contentTypeJson
})

axios.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('access-token')
  const isHasToken = token !== null

  if (isHasToken) {
    config.headers = {
      'Content-Type': 'application/json',
      Authorization: 'Token ' + token,
    }
  }

  config.url = join(devAPI, config.url)

  return config
})

export default service

export const serviceToken = axios
export const serviceManageUser = axios.create({
  baseURL: devAPIManagerUser,
  headers: contentTypeJson
})

export const serviceUpload = axios.create({
  baseURL: devAPIManagerUser,
  headers: {
    'Content-Type': 'multipart/form-data',
  }
})