import { CustomError } from "./CustomError";

export default class UnauthorizedError extends CustomError {
  private static readonly _statusCode = 401;
  private readonly _logging: boolean;
  private readonly _context: { [key: string]: any };

  constructor(params?: {
    message?: string;
    logging?: boolean;
    context?: { [key: string]: any };
  }) {
    const { message, logging } = params || {};

    super(message || "Unauthorized");
    this._logging = logging || false;
    this._context = params?.context || {};

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  get errors() {
    return [{ message: this.message, context: this._context }];
  }

  get statusCode() {
    return UnauthorizedError._statusCode;
  }

  get logging() {
    return this._logging;
  }
}
