/* eslint-disable prettier/prettier */
/**
 * Cloud Firestore API
 * Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development. 
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { TransactionOptions } from './transactionOptions';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * The request for Firestore.BeginTransaction.
 */
export class BeginTransactionRequest {
    /**
     * The options for the transaction. Defaults to a read-write transaction.
     */
    options?: TransactionOptions;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.options) {
        this.options = new TransactionOptions(json.options);
        }
  }
}
