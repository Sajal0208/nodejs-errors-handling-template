import { CustomError } from "./CustomError";

export default class ForbiddenError extends CustomError {
  private static readonly _statusCode = 403;
  private readonly _logging: boolean;
  private readonly _context: { [key: string]: any };

  constructor(params?: {
    message?: string;
    logging?: boolean;
    context?: { [key: string]: any };
  }) {
    const { message, logging } = params || {};

    super(message || "Forbidden");
    this._logging = logging || false;
    this._context = params?.context || {};

    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  get errors() {
    return [{ message: this.message, context: this._context }];
  }

  get statusCode() {
    return ForbiddenError._statusCode;
  }

  get logging() {
    return this._logging;
  }
}
