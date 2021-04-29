export {Status} from 'google-gax/build/src/status';
export {GoogleError} from 'google-gax/build/src/googleError';

export {
  CallOptions,
  CallSettings,
  ClientConfig,
  constructSettings,
  RetryOptions,
  ServiceConfig,
  createRetryOptions,
  createBundleOptions,
  createBackoffSettings,
  createDefaultBackoffSettings,
  createMaxRetriesBackoffSettings,
} from 'google-gax/build/src/gax';

export interface BackoffSettings {
  maxRetries?: number;
  initialRetryDelayMillis: number;
  retryDelayMultiplier: number;
  maxRetryDelayMillis: number;
  initialRpcTimeoutMillis?: number | null;
  maxRpcTimeoutMillis?: number | null;
  totalTimeoutMillis?: number | null;
  rpcTimeoutMultiplier?: number | null;
}

export interface RetryRequestOptions {
  objectMode?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request?: any;
  retries?: number;
  noResponseRetries?: number;
  currentRetryAttempt?: number;
  shouldRetryFn?: () => boolean;
}

export interface BundleOptions {
  elementCountLimit?: number;
  requestByteLimit?: number;
  elementCountThreshold?: number;
  requestByteThreshold?: number;
  delayThreshold?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let grpc: any = {};

if (
  process.env.FIRESTORE_USE_REST_API === undefined ||
  process.env.FIRESTORE_USE_REST_API.toLowerCase() === 'false'
) {
  // eslint-disable-next-line node/no-extraneous-require
  grpc = require('@grpc/grpc-js');
}
