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
 * The response from Firestore.BatchWrite.
 */
export class BatchWriteResponse {
  /**
   * The status of applying the writes. This i-th write status corresponds to the i-th write in the request.
   */
  status?: Array<models.Status>;
  /**
   * The result of applying the writes. This i-th write result corresponds to the i-th write in the request.
   */
  writeResults?: Array<models.WriteResult>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(json: any) {
    if (json.status) {
      this.status = [];
      json.status.forEach((element: models.Status) => {
        this.status?.push(new models.Status(element));
      });
    }
    if (json.writeResults) {
      this.writeResults = [];
      json.writeResults.forEach((element: models.WriteResult) => {
        this.writeResults?.push(new models.WriteResult(element));
      });
    }
  }
}
// eslint-disable-next-line @typescript-eslint/no-namespace
