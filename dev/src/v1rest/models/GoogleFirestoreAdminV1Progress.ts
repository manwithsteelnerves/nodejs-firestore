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
import * as helpers from '../helpers';


/**
 * Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used.
 */
export class GoogleFirestoreAdminV1Progress {
    /**
     * The amount of work completed.
     */
    completedWork?: string;
    /**
     * The amount of work estimated.
     */
    estimatedWork?: string;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.completedWork) {
        this.completedWork = json.completedWork; //[Data format: int64]
        }
        if (json.estimatedWork) {
        this.estimatedWork = json.estimatedWork; //[Data format: int64]
        }
  }
}
