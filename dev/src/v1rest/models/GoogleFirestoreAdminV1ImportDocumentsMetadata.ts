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
import { GoogleFirestoreAdminV1Progress } from './googleFirestoreAdminV1Progress';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * Metadata for google.longrunning.Operation results from FirestoreAdmin.ImportDocuments.
 */
export class GoogleFirestoreAdminV1ImportDocumentsMetadata {
    /**
     * Which collection ids are being imported.
     */
    collectionIds?: Array<string>;
    /**
     * The time this operation completed. Will be unset if operation still in progress.
     */
    endTime?: string;
    /**
     * The location of the documents being imported.
     */
    inputUriPrefix?: string;
    /**
     * The state of the import operation.
     */
    operationState?: GoogleFirestoreAdminV1ImportDocumentsMetadata.OperationStateEnum;
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


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.collectionIds) {
        this.collectionIds = json.collectionIds;
        }
        if (json.endTime) {
        this.endTime = helpers.stringFromTimestampJson(json.endTime); //[Data format: google-datetime
        }
        if (json.inputUriPrefix) {
        this.inputUriPrefix = json.inputUriPrefix; //[Data format: ]
        }
        if (json.operationState) {
        this.operationState = json.operationState; //[Data format: ]
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
  }
}
export namespace GoogleFirestoreAdminV1ImportDocumentsMetadata {
    export type OperationStateEnum = 'OPERATION_STATE_UNSPECIFIED' | 'INITIALIZING' | 'PROCESSING' | 'CANCELLING' | 'FINALIZING' | 'SUCCESSFUL' | 'FAILED' | 'CANCELLED';
    export const OperationStateEnum = {
        OPERATIONSTATEUNSPECIFIED: 'OPERATION_STATE_UNSPECIFIED' as OperationStateEnum,
        INITIALIZING: 'INITIALIZING' as OperationStateEnum,
        PROCESSING: 'PROCESSING' as OperationStateEnum,
        CANCELLING: 'CANCELLING' as OperationStateEnum,
        FINALIZING: 'FINALIZING' as OperationStateEnum,
        SUCCESSFUL: 'SUCCESSFUL' as OperationStateEnum,
        FAILED: 'FAILED' as OperationStateEnum,
        CANCELLED: 'CANCELLED' as OperationStateEnum
    }
}
