import { CustomError } from "./CustomError";

export default class NotFoundError extends CustomError {
  private static readonly _statusCode = 404;
  private readonly _logging: boolean;
  private readonly _context: { [key: string]: any };

  constructor(params?: {
    message?: string;
    logging?: boolean;
    context?: { [key: string]: any };
  }) {
    const { message, logging } = params || {};

    super(message || "Resource not found");
    this._logging = logging || false;
    this._context = params?.context || {};

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  get errors() {
    return [{ message: this.message, context: this._context }];
  }

  get statusCode() {
    return NotFoundError._statusCode;
  }

  get logging() {
    return this._logging;
  }
}
