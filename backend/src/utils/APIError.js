class APIError extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }
}

export default APIError;