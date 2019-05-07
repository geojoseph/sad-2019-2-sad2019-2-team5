import Api from '@/services/Api'

export default {
  index () {
    return Api().get('certificates')
  },
  post (certificate) {
    return Api().post('certificates', certificate)
  }
}
