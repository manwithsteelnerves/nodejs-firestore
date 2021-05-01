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
import { GoogleFirestoreAdminV1IndexConfigDelta } from './googleFirestoreAdminV1IndexConfigDelta';
import { GoogleFirestoreAdminV1Progress } from './googleFirestoreAdminV1Progress';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * Metadata for google.longrunning.Operation results from FirestoreAdmin.UpdateField.
 */
export class GoogleFirestoreAdminV1FieldOperationMetadata {
    /**
     * The time this operation completed. Will be unset if operation still in progress.
     */
    endTime?: string;
    /**
     * The field resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`
     */
    field?: string;
    /**
     * A list of IndexConfigDelta, which describe the intent of this operation.
     */
    indexConfigDeltas?: Array<GoogleFirestoreAdminV1IndexConfigDelta>;
    /**
     * The progress, in bytes, of this operation.
     */
    progressBytes?: GoogleFirestoreAdminV1Progress;
    /**
     * The progress, in documents, of this operation.
     */
    progressDocuments?: GoogleFirestoreAdminV1Progress;
    /**
     * The time this operation started.
     */
    startTime?: string;
    /**
     * The state of the operation.
     */
    state?: GoogleFirestoreAdminV1FieldOperationMetadata.StateEnum;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.endTime) {
        this.endTime = helpers.stringFromTimestampJson(json.endTime); //[Data format: google-datetime
        }
        if (json.field) {
        this.field = json.field; //[Data format: ]
        }
        if (json.indexConfigDeltas) {
        this.indexConfigDeltas = [];
        json.indexConfigDeltas.forEach((element: GoogleFirestoreAdminV1IndexConfigDelta) => {
            this.indexConfigDeltas?.push(new GoogleFirestoreAdminV1IndexConfigDelta(element));
        });
        }
        if (json.progressBytes) {
        this.progressBytes = new GoogleFirestoreAdminV1Progress(json.progressBytes);
        }
        if (json.progressDocuments) {
        this.progressDocuments = new GoogleFirestoreAdminV1Progress(json.progressDocuments);
        }
        if (json.startTime) {
        this.startTime = helpers.stringFromTimestampJson(json.startTime); //[Data format: google-datetime
        }
        if (json.state) {
        this.state = json.state; //[Data format: ]
        }
  }
}
export namespace GoogleFirestoreAdminV1FieldOperationMetadata {
    export type StateEnum = 'OPERATION_STATE_UNSPECIFIED' | 'INITIALIZING' | 'PROCESSING' | 'CANCELLING' | 'FINALIZING' | 'SUCCESSFUL' | 'FAILED' | 'CANCELLED';
    export const StateEnum = {
        OPERATIONSTATEUNSPECIFIED: 'OPERATION_STATE_UNSPECIFIED' as StateEnum,
        INITIALIZING: 'INITIALIZING' as StateEnum,
        PROCESSING: 'PROCESSING' as StateEnum,
        CANCELLING: 'CANCELLING' as StateEnum,
        FINALIZING: 'FINALIZING' as StateEnum,
        SUCCESSFUL: 'SUCCESSFUL' as StateEnum,
        FAILED: 'FAILED' as StateEnum,
        CANCELLED: 'CANCELLED' as StateEnum
    }
}
