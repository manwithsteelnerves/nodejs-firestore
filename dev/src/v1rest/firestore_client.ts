import {GapicClient} from '../types';
import {
  AuthPlus,
  firestore,
  firestore_v1,
} from 'googleapis/build/src/apis/firestore';
// eslint-disable-next-line node/no-extraneous-import
import {
  GaxiosResponse,
  Compute,
  JWT,
  UserRefreshClient,
  BaseExternalAccountClient,
} from 'googleapis-common';
import {CallOptions, ClientOptions} from 'google-gax';

import * as protos from '../../protos/firestore_v1_proto_api';
import {Duplex, Transform} from 'stream';
import {BatchGetDocumentsRequest} from './models/BatchGetDocumentsRequest';
import {BeginTransactionRequest} from './models/BeginTransactionRequest';
import {CommitRequest} from './models/CommitRequest';
import {
  BatchWriteRequest,
  ListCollectionIdsRequest,
  PartitionQueryRequest,
  RollbackRequest,
  RunQueryRequest,
} from './models';
import {convertOptions} from './converter';
import {logger} from '../logger';

type Firestore = firestore_v1.Firestore;

export class FirestoreClient implements GapicClient {
  auth: AuthPlus;
  client: Firestore;
  settings: ClientOptions;
  authClient:
    | Compute
    | JWT
    | UserRefreshClient
    | BaseExternalAccountClient
    | undefined;

  constructor(settings: ClientOptions) {
    this.settings = settings;
    this.auth = new AuthPlus({
      scopes: [
        'https://www.googleapis.com/auth/cloud-platform',
        'https://www.googleapis.com/auth/datastore',
      ],
    });

    this.client = firestore({version: 'v1'});
  }

  getProjectId(): Promise<string> {
    if (!this.authClient) {
      return this.auth.getClient().then(client => {
        this.authClient = client;
        //google.options({auth: client});
        return this.auth.getProjectId();
      });
    } else {
      return this.auth.getProjectId();
    }
  }

  beginTransaction(
    request: protos.google.firestore.v1.IBeginTransactionRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.firestore.v1.IBeginTransactionResponse,
      protos.google.firestore.v1.IBeginTransactionRequest | undefined,
      {} | undefined
    ]
  > {
    const promise = this.client.projects.databases.documents.beginTransaction(
      {
        database: request!.database!,
        requestBody: new BeginTransactionRequest(request),
        auth: this.authClient,
      },
      convertOptions(options)
    );
    return promise.then(response => {
      return [
        response?.data as protos.google.firestore.v1.IBeginTransactionResponse,
        request,
        undefined,
      ]; //TODO cross check last undefined param once
    });
  }

  commit(
    request: protos.google.firestore.v1.ICommitRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.firestore.v1.ICommitResponse,
      protos.google.firestore.v1.ICommitRequest | undefined,
      {} | undefined
    ]
  > {
    const promise = this.client.projects.databases.documents.commit(
      {
        database: request!.database!,
        requestBody: new CommitRequest(request),
        auth: this.authClient,
      },
      convertOptions(options)
    );
    return promise.then(response => {
      return [
        response?.data as protos.google.firestore.v1.ICommitResponse,
        request,
        undefined,
      ];
    });
  }

  batchWrite(
    request: protos.google.firestore.v1.IBatchWriteRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.firestore.v1.IBatchWriteResponse,
      protos.google.firestore.v1.IBatchWriteRequest | undefined,
      {} | undefined
    ]
  > {
    const promise = this.client.projects.databases.documents.batchWrite(
      {
        database: request!.database!,
        requestBody: new BatchWriteRequest(request),
        auth: this.authClient,
      },
      convertOptions(options)
    );
    return promise.then(response => {
      return [
        response?.data as protos.google.firestore.v1.IBatchWriteResponse,
        request,
        undefined,
      ];
    });
  }

  rollback(
    request: protos.google.firestore.v1.IRollbackRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.firestore.v1.IRollbackRequest | undefined,
      {} | undefined
    ]
  > {
    const promise = this.client.projects.databases.documents.rollback(
      {
        database: request!.database!,
        requestBody: new RollbackRequest(request),
        auth: this.authClient,
      },
      convertOptions(options)
    );
    return promise.then(response => {
      return [
        response?.data as protos.google.protobuf.IEmpty,
        request,
        undefined,
      ];
    });
  }

  batchGetDocuments(
    request?: protos.google.firestore.v1.IBatchGetDocumentsRequest,
    options?: CallOptions
  ): Duplex {
    const duplex = new Transform();

    this.client.projects.databases.documents.batchGet(
      {
        database: request!.database!,
        requestBody: new BatchGetDocumentsRequest(request),
        auth: this.authClient,
      },
      convertOptions(options),
      (err: Error | null, res?: GaxiosResponse | null) => {
        logger(
          'Firestore(REST).batchGetDocuments',
          null,
          'Received response [Error: ',
          err,
          ' ' + 'Res: ',
          require('util').inspect(res?.data) + ']'
        );

        if (!err) {
          res?.data.forEach((element: unknown) => {
            duplex.emit('data', element);
          });

          duplex.emit('end');
        } else {
          duplex.emit('error', err);
        }
      }
    );

    return duplex;
  }

  runQuery(
    request?: protos.google.firestore.v1.IRunQueryRequest,
    options?: CallOptions
  ): Duplex {
    const duplex = new Transform();

    this.client.projects.databases.documents.runQuery(
      {
        parent: request!.parent!,
        requestBody: new RunQueryRequest(request),
        auth: this.authClient,
      },
      convertOptions(options),
      (err: Error | null, res?: GaxiosResponse | null) => {
        logger(
          'Firestore(REST).runQuery',
          null,
          'Received response [Error: ',
          err,
          ' ' + 'Res: ',
          require('util').inspect(res?.data) + ']'
        );
        if (!err) {
          res?.data.forEach((element: unknown) => {
            duplex.emit('data', element);
          });

          duplex.emit('end');
        } else {
          duplex.emit('error', err);
        }
      }
    );

    return duplex;
  }
  listDocuments(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    request: protos.google.firestore.v1.IListDocumentsRequest,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    options?: CallOptions
  ): Promise<[protos.google.firestore.v1.IDocument[], unknown, unknown]> {
    throw new Error('Not implemented');
  }
  listCollectionIds(
    request: protos.google.firestore.v1.IListCollectionIdsRequest,
    options?: CallOptions
  ): Promise<[string[], unknown, unknown]> {
    const promise = this.client.projects.databases.documents.listCollectionIds(
      {
        parent: request!.parent!,
        requestBody: new ListCollectionIdsRequest(request),
        auth: this.authClient,
      },
      convertOptions(options)
    );
    return promise.then(response => {
      return [response?.data as string[], undefined, undefined];
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  listen(options?: CallOptions): Duplex {
    throw new Error('Not implemented');
  }
  partitionQueryStream(
    request?: protos.google.firestore.v1.IPartitionQueryRequest,
    options?: CallOptions
  ): Duplex {
    const duplex = new Transform();

    this.client.projects.databases.documents.partitionQuery(
      {
        parent: request!.parent!,
        requestBody: new PartitionQueryRequest(request),
        auth: this.authClient,
      },
      convertOptions(options),
      (err: Error | null, res?: GaxiosResponse | null) => {
        logger(
          'Firestore(REST).partitionQueryStream',
          null,
          'Received response [Error: ',
          err,
          ' ' + 'Res: ',
          require('util').inspect(res?.data) + ']'
        );
        if (!err) {
          res?.data?.partitions.forEach((element: unknown) => {
            duplex.emit('data', element);
          });

          duplex.emit('end');
        } else {
          duplex.emit('error', err);
        }
      }
    );

    return duplex;
  }

  close(): Promise<void> {
    //Cleanup here
    return Promise.resolve();
  }
}
