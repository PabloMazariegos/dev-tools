import { Buffer } from "buffer";

export function encodeBase64(value: string): string {
  if (!value) {
    return '';
  }

  const bufferText = Buffer.from(value, 'utf-8');
  return bufferText.toString('base64');
}


export function decodeBase64(base64:string): string {
    if(!base64){
        return ''
    }

    const bufferBase64 = Buffer.from(base64, 'base64')
    return bufferBase64.toString()
}
