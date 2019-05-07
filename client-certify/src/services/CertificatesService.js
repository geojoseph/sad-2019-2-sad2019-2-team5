import Api from '@/services/Api'

export default {
  index (email) {
    return Api().get('certificates', email)
  },
  post (certificate) {
    return Api().post('certificates', certificate)
  }
}
