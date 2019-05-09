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
  },
  deleteCertificate (certificate) {
    // eslint-disable-next-line no-console
    console.log(certificate)
    return Api().delete('certificates?id=' + certificate.id + '&email=' + certificate.email)
  },
  editCertificate (editedItem) {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(editedItem))
    return Api().put('certificates', editedItem)
  }
}
