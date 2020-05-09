import { Interceptor } from '@kronos-integration/interceptor';
import { createGunzip, createGzip } from 'zlib';

/**
 * Decompress requests with gunzip
 */
export class GunzipInterceptor extends Interceptor {
  /**
   * @return {string} 'gunzip'
   */
  static get name() {
    return 'gunzip';
  }

  receive(endpoint, next, request) {
    return next(request.pipe(createGunzip())); 
  }
}

/**
 * Compress requests with gzip
 */
export class GzipInterceptor extends Interceptor {
  /**
   * @return {string} 'gzip'
   */
  static get name() {
    return 'gzip';
  }

  receive(endpoint, next, request) {
    return next(request.pipe(createGzip())); 
  }
}
