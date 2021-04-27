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
 * A specification of a set of documents to listen to.
 */
export class Target {
  /**
   * A target specified by a set of document names.
   */
  documents?: models.DocumentsTarget;
  /**
   * If the target should be removed once it is current and consistent.
   */
  once?: boolean;
  /**
   * A target specified by a query.
   */
  query?: models.QueryTarget;
  /**
   * Start listening after a specific `read_time`. The client must know the state of matching documents at this time.
   */
  readTime?: string | null;
  /**
   * A resume token from a prior TargetChange for an identical target. Using a resume token with a different target is unsupported and may fail.
   */
  resumeToken?: string | null;
  /**
   * The target ID that identifies the target on the stream. Must be a positive number and non-zero.
   */
  targetId?: number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(json: any) {
    if (json.documents) {
      this.documents = new models.DocumentsTarget(json.documents);
    }
    if (json.once) {
      this.once = json.once; 
    }
    if (json.query) {
      this.query = new models.QueryTarget(json.query);
    }
    if (json.readTime) {
      this.readTime = helpers.stringFromTimestampJson(json.readTime); //[Data format: google-datetime
    }
    if (json.resumeToken) {
      this.resumeToken = helpers.stringFromBufferJson(json.resumeToken); //[Data format: byte]
    }
    if (json.targetId) {
      this.targetId = json.targetId; 
    }
  }
}
// eslint-disable-next-line @typescript-eslint/no-namespace
