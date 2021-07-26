import axios from 'axios'
import { stringify } from 'qs'
import api from './api'

const Apis = api.API
const requests = {}
axios.defaults.withCredentials = true

function generateRequests (obj, parentKey) {
  for (const key in obj) {
    if (typeof (obj[key]) === 'object' && !obj[key].url) {
      generateRequests(obj[key], key)
    } else {
      const newkey = parentKey ? key[0].toUpperCase() + key.slice(1) : key
      requests[parentKey ? `${parentKey}${newkey}` : key] = (data) => {
        const url = obj[key].url
        const method = obj[key].method || 'get'
        let dataTransfer = {}
        const options = {}
        if (method === 'get') {
          dataTransfer = {
            params: data
          }
        } else {
          dataTransfer = obj[key].headers ? stringify(data) : data
        }
        if (obj[key].headers) {
          options.headers = obj[key].headers
          // dataTransfer = dataTransfer ? stringify(dataTransfer) : ''
        }
        if (obj[key].responseType) {
          options.responseType = obj[key].responseType
        }
        return new Promise((resolve, reject) => {
          axios[method](url, dataTransfer, options)
            .then((res) => {
              resolve(res)
            })
            .catch((err) => {
              reject(err)
            })
        })
      }
    }
  }
}
generateRequests(Apis)

export default ({ app }, inject) => {
  inject('requests', requests)
}
