import Api from '@/services/Api'

export default {
  post (certificate) {
    return Api().post('shared-certificates', certificate)
  }
}
