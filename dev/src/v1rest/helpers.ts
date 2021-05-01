import {google} from '../../protos/firestore_v1_proto_api';

export function stringFromBufferJson(
  buffer: Uint8Array | string | null | undefined
): string | undefined {
  if (!buffer) return undefined;

  if (typeof buffer === 'string')
    //Falback case for response conversion if returned type is string
    return buffer;

  const array = Array.from(buffer);
  return JSON.stringify(array);
}

export function stringFromTimestampJson(
  timestamp: google.protobuf.ITimestamp | string
) {
  if (timestamp) {
    if (typeof timestamp === 'string') {
      return timestamp;
    } else if (timestamp.seconds) {
      const date = new Date(Date.UTC(1970, 0, 1));
      date.setUTCSeconds(Number(timestamp.seconds));
      date.setUTCMilliseconds(Number(timestamp.nanos) / 1000);
      return date.toISOString();
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

export function bufferFromString(
  str: string | undefined | null
): Uint8Array | null | undefined {
  if (!str) {
    return undefined;
  }

  return Buffer.from(str);
}
