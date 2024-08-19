import { CustomError } from "./CustomError";

export default class InternalServerError extends CustomError {
  private static readonly _statusCode = 500;
  private readonly _logging: boolean;
  private readonly _context: { [key: string]: any };

  constructor(params?: {
    message?: string;
    logging?: boolean;
    context?: { [key: string]: any };
  }) {
    const { message, logging } = params || {};

    super(message || "Internal Server Error");
    this._logging = logging || true; // Default to true for internal server errors
    this._context = params?.context || {};

    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  get errors() {
    return [{ message: this.message, context: this._context }];
  }

  get statusCode() {
    return InternalServerError._statusCode;
  }

  get logging() {
    return this._logging;
  }
}
