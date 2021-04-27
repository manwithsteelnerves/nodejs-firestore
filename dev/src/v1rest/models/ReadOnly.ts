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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as models from './index';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';

/**
 * Options for a transaction that can only be used to read documents.
 */
export class ReadOnly {
  /**
   * Reads documents at the given time. This may not be older than 60 seconds.
   */
  readTime?: string | null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(json: any) {
    if (json.readTime) {
      this.readTime = helpers.stringFromTimestampJson(json.readTime); //[Data format: google-datetime
    }
  }
}
// eslint-disable-next-line @typescript-eslint/no-namespace
