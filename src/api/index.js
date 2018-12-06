import Cookies from 'js-cookie'
import axios from 'axios'
import ElementUI from 'element-ui'

const api = axios.create({
  baseURL: 'http://acgproduct-001-site1.gtempurl.com/api',
  timeout: 5000,
})

api.interceptors.request.use(config => {
  const token = Cookies.get('token')
  if (token) config.headers.Authorization = token
  return config
}, err => Promise.reject(err))


api.interceptors.response.use(response => response, err => {
  ElementUI.Notification.error({
    title: 'Помилка :(',
    message: err.message,
    duration: 3000
  })
  return Promise.reject(err)
})

export default api
