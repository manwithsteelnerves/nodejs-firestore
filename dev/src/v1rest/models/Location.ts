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
 * A resource that represents Google Cloud Platform location.
 */
export class Location {
  /**
   * The friendly name for this location, typically a nearby city name. For example, \"Tokyo\".
   */
  displayName?: string | null;
  /**
   * Cross-service attributes for the location. For example {\"cloud.googleapis.com/region\": \"us-east1\"}
   */
  labels?: { [key: string]: string; };
  /**
   * The canonical id for this location. For example: `\"us-east1\"`.
   */
  locationId?: string | null;
  /**
   * Service-specific metadata. For example the available capacity at the given location.
   */
  metadata?: { [key: string]: any; };
  /**
   * Resource name for the location, which may vary between implementations. For example: `\"projects/example-project/locations/us-east1\"`
   */
  name?: string | null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(json: any) {
    if (json.displayName) {
      this.displayName = json.displayName; //[Data format: ]
    }
    if (json.labels) {
      this.labels = json.labels;
    }
    if (json.locationId) {
      this.locationId = json.locationId; //[Data format: ]
    }
    if (json.metadata) {
      this.metadata = json.metadata;
    }
    if (json.name) {
      this.name = json.name; //[Data format: ]
    }
  }
}
// eslint-disable-next-line @typescript-eslint/no-namespace
