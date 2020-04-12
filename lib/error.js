export class ConnectionError extends Error {
  constructor(params) {
    super(params)
    this.name = 'ConnectionError'
    this.status = 400
  }
}
export class ValidationError extends Error {
  constructor(params) {
    super(params)
    this.name = 'ValidationError'
    this.status = 422
  }
}
