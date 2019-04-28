import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },

  login (credentials) {
    return Api().post('login', credentials)
  },

  dashboard (credentials) {
    return Api().post('dashboard', credentials)
  }
}
