class DomainError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

class NotFoundError extends DomainError {
  constructor({ resourceName, resourceId }) {
    super(`Resource '${resourceName}' with identifier '${resourceId}' not found`)
    this.resourceName = resourceName
    this.resourceId = resourceId
  }
}


class AuthenticationError extends DomainError {

  constructor (username : any, cause : string = 'not specified')
  super(message: 'The user could not be authenticated')
  }
  
this.name = this.constructor.name
this.username = username
this.cause = cause

class ValidationError extends DomainError {
  constructor({ message = 'Invalid parameters', validations }) {
    super(message)
    this.validations = validations
  }
}

class ConflictError extends DomainError {
}

module.exports = {
  NotFoundError,
  ValidationError,
  ConflictError,
  AuthenticationError
}
