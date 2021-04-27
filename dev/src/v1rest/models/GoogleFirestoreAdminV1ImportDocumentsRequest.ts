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
 * The request for FirestoreAdmin.ImportDocuments.
 */
export class GoogleFirestoreAdminV1ImportDocumentsRequest {
  /**
   * Which collection ids to import. Unspecified means all collections included in the import.
   */
  collectionIds?: Array<string>;
  /**
   * Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1.ExportDocumentsResponse.output_uri_prefix.
   */
  inputUriPrefix?: string | null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(json: any) {
    if (json.collectionIds) {
      this.collectionIds = json.collectionIds;
    }
    if (json.inputUriPrefix) {
      this.inputUriPrefix = json.inputUriPrefix; //[Data format: ]
    }
  }
}
// eslint-disable-next-line @typescript-eslint/no-namespace
