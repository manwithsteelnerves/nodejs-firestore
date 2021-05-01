import * as protos from '../../protos/firestore_v1_proto_api';
import {bufferFromString} from './helpers';
import {CallOptions} from 'google-gax';
import {MethodOptions} from 'googleapis/build/src/apis/firestore';
import {BeginTransactionResponse} from './models/beginTransactionResponse';

export function convertBeginTransactionResponse(
  response: BeginTransactionResponse
): protos.google.firestore.v1.IBeginTransactionResponse {
  const result: protos.google.firestore.v1.IBeginTransactionResponse = {
    transaction: bufferFromString(response.transaction),
  };
  return result;
}

export function convertOptions(options?: CallOptions): MethodOptions {
  const methodOptions = {
    timeout: options?.timeout,
  }; //TODO:  Only using timeout from options currnetly. Map retry options too.
  return methodOptions;
}
