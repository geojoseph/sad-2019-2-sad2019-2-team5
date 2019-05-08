import Api from '@/services/Api'

export default {
  index () {
    return Api().get('certificates')
  },
  post (certificate) {
    return Api().post('certificates', certificate)
  },
  getcertificates (userObject) {
    // eslint-disable-next-line no-console
    console.log(userObject.email)
    return Api().get('certificates?email=' + userObject.email)
  }
}
