  return str
}

const token = 'octo_internal_Ahk234asdfkj12asd9123czGHEas'

exports.isAuthorized = () => expressJwt({ secret: this.publicKey })
exports.denyAll = () => expressJwt({ secret: '' + Math.random() })
