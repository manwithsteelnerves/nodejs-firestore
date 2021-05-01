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
import { Value } from './value';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * A Firestore document. Must not exceed 1 MiB - 4 bytes.
 */
export class Document {
    /**
     * Output only. The time at which the document was created. This value increases monotonically when a document is deleted then recreated. It can also be compared to values from other documents and the `read_time` of a query.
     */
    createTime?: string;
    /**
     * The document's fields. The map keys represent field names. A simple field name contains only characters `a` to `z`, `A` to `Z`, `0` to `9`, or `_`, and must not start with `0` to `9`. For example, `foo_bar_17`. Field names matching the regular expression `__.*__` are reserved. Reserved field names are forbidden except in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. Field paths may be used in other contexts to refer to structured fields defined here. For `map_value`, the field path is represented by the simple or quoted field names of the containing fields, delimited by `.`. For example, the structured field `\"foo\" : { map_value: { \"x&y\" : { string_value: \"hello\" }}}` would be represented by the field path `foo.x&y`. Within a field path, a quoted field name starts and ends with `` ` `` and may contain any character. Some characters, including `` ` ``, must be escaped using a `\\`. For example, `` `x&y` `` represents `x&y` and `` `bak\\`tik` `` represents `` bak`tik ``.
     */
    fields?: { [key: string]: Value; };
    /**
     * The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    name?: string;
    /**
     * Output only. The time at which the document was last changed. This value is initially set to the `create_time` then increases monotonically with each change to the document. It can also be compared to values from other documents and the `read_time` of a query.
     */
    updateTime?: string;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.createTime) {
        this.createTime = helpers.stringFromTimestampJson(json.createTime); //[Data format: google-datetime
        }
        if (json.fields) {
        this.fields = {};
        for (const key of json.fields) {
            const val = new Value(json.fields[key]);
            this.fields![key] = val;
        }
        }
        if (json.name) {
        this.name = json.name; //[Data format: ]
        }
        if (json.updateTime) {
        this.updateTime = helpers.stringFromTimestampJson(json.updateTime); //[Data format: google-datetime
        }
  }
}
