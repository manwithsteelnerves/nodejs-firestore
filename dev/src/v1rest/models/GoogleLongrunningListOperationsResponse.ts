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
import { GoogleLongrunningOperation } from './googleLongrunningOperation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * The response message for Operations.ListOperations.
 */
export class GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Array<GoogleLongrunningOperation>;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.nextPageToken) {
        this.nextPageToken = json.nextPageToken; //[Data format: ]
        }
        if (json.operations) {
        this.operations = [];
        json.operations.forEach((element: GoogleLongrunningOperation) => {
            this.operations?.push(new GoogleLongrunningOperation(element));
        });
        }
  }
}
