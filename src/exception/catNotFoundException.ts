import { HttpException, HttpExceptionOptions } from "@nestjs/common";
import { ExceptionDetail } from "src/type/exceptionDetails";


export class CatNotFoundException extends HttpException {
  private _exceptionDetails: ExceptionDetail;

  constructor(
    exceptionDetails: ExceptionDetail,
    status: number,
    options?: HttpExceptionOptions,
  ) {
    super(exceptionDetails, status, options);
    this._exceptionDetails = exceptionDetails;
  }

  public get exceptionDetails(): ExceptionDetail {
    return this._exceptionDetails;
  }
  public set exceptionDetails(value: ExceptionDetail) {
    this._exceptionDetails = value;
  }
}
