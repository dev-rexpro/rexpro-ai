const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MP_eVmKb.js","./BeGenu0j.js","./kJfXdUOR.js","./BiYTqyH_.js","./DQxPuqmE.js","./CQrtv1eE.js","./C5m5pE-D.js","./CnZe0eLb.js","./BKSIeq3V.js","./Xp5qcr6b.js","./fL6EIICl.js","./gBiMFpD9.js","./CTO7spbL.js","./olplAo2_.js","./DmFXC6sK.js","./Bs5oKbOs.js","./7WfxZx5Q.js","./CzSFdLC4.js","./DAbZ0KZY.js","./CQKzBGK9.js","./C7WVfQCl.js","./CTCIaRXY.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./CQrtv1eE.js";
import { a as getAugmentedNamespace, c as commonjsGlobal, g as getDefaultExportFromCjs, d as dayjs2, r as relativeTime } from "./BeGenu0j.js";
import purify from "./C5m5pE-D.js";
import { b as REXPRO_BASE_URL } from "./CGP7Xb4V.js";
import { l as localizedFormat } from "./Ce8_hHpJ.js";
import { m as marked } from "./zFu7_FHZ.js";
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
const byteToHex = [];
for (let i2 = 0; i2 < 256; ++i2) {
  byteToHex.push((i2 + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = {
  randomUUID
};
function v4(options, buf, offset) {
  if (native.randomUUID && true && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
var sha256 = { exports: {} };
const i = {};
const __viteBrowserExternal = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: i
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal);
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.10.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
(function(module) {
  (function() {
    var ERROR = "input is invalid type";
    var WINDOW = typeof window === "object";
    var root = WINDOW ? window : {};
    if (root.JS_SHA256_NO_WINDOW) {
      WINDOW = false;
    }
    var WEB_WORKER = !WINDOW && typeof self === "object";
    var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
    if (NODE_JS) {
      root = commonjsGlobal;
    } else if (WEB_WORKER) {
      root = self;
    }
    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && true && module.exports;
    var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
    var HEX_CHARS = "0123456789abcdef".split("");
    var EXTRA = [-2147483648, 8388608, 32768, 128];
    var SHIFT = [24, 16, 8, 0];
    var K = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ];
    var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
    var blocks = [];
    if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
      Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
      };
    }
    if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
      ArrayBuffer.isView = function(obj) {
        return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
      };
    }
    var createOutputMethod = function(outputType, is224) {
      return function(message) {
        return new Sha256(is224, true).update(message)[outputType]();
      };
    };
    var createMethod = function(is224) {
      var method = createOutputMethod("hex", is224);
      if (NODE_JS) {
        method = nodeWrap(method, is224);
      }
      method.create = function() {
        return new Sha256(is224);
      };
      method.update = function(message) {
        return method.create().update(message);
      };
      for (var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2) {
        var type = OUTPUT_TYPES[i2];
        method[type] = createOutputMethod(type, is224);
      }
      return method;
    };
    var nodeWrap = function(method, is224) {
      var crypto2 = require$$1;
      var Buffer = require$$1.Buffer;
      var algorithm = is224 ? "sha224" : "sha256";
      var bufferFrom;
      if (Buffer.from && !root.JS_SHA256_NO_BUFFER_FROM) {
        bufferFrom = Buffer.from;
      } else {
        bufferFrom = function(message) {
          return new Buffer(message);
        };
      }
      var nodeMethod = function(message) {
        if (typeof message === "string") {
          return crypto2.createHash(algorithm).update(message, "utf8").digest("hex");
        } else {
          if (message === null || message === void 0) {
            throw new Error(ERROR);
          } else if (message.constructor === ArrayBuffer) {
            message = new Uint8Array(message);
          }
        }
        if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
          return crypto2.createHash(algorithm).update(bufferFrom(message)).digest("hex");
        } else {
          return method(message);
        }
      };
      return nodeMethod;
    };
    var createHmacOutputMethod = function(outputType, is224) {
      return function(key, message) {
        return new HmacSha256(key, is224, true).update(message)[outputType]();
      };
    };
    var createHmacMethod = function(is224) {
      var method = createHmacOutputMethod("hex", is224);
      method.create = function(key) {
        return new HmacSha256(key, is224);
      };
      method.update = function(key, message) {
        return method.create(key).update(message);
      };
      for (var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2) {
        var type = OUTPUT_TYPES[i2];
        method[type] = createHmacOutputMethod(type, is224);
      }
      return method;
    };
    function Sha256(is224, sharedMemory) {
      if (sharedMemory) {
        blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
        this.blocks = blocks;
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
      if (is224) {
        this.h0 = 3238371032;
        this.h1 = 914150663;
        this.h2 = 812702999;
        this.h3 = 4144912697;
        this.h4 = 4290775857;
        this.h5 = 1750603025;
        this.h6 = 1694076839;
        this.h7 = 3204075428;
      } else {
        this.h0 = 1779033703;
        this.h1 = 3144134277;
        this.h2 = 1013904242;
        this.h3 = 2773480762;
        this.h4 = 1359893119;
        this.h5 = 2600822924;
        this.h6 = 528734635;
        this.h7 = 1541459225;
      }
      this.block = this.start = this.bytes = this.hBytes = 0;
      this.finalized = this.hashed = false;
      this.first = true;
      this.is224 = is224;
    }
    Sha256.prototype.update = function(message) {
      if (this.finalized) {
        return;
      }
      var notString, type = typeof message;
      if (type !== "string") {
        if (type === "object") {
          if (message === null) {
            throw new Error(ERROR);
          } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
            message = new Uint8Array(message);
          } else if (!Array.isArray(message)) {
            if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
              throw new Error(ERROR);
            }
          }
        } else {
          throw new Error(ERROR);
        }
        notString = true;
      }
      var code, index = 0, i2, length = message.length, blocks2 = this.blocks;
      while (index < length) {
        if (this.hashed) {
          this.hashed = false;
          blocks2[0] = this.block;
          blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        if (notString) {
          for (i2 = this.start; index < length && i2 < 64; ++index) {
            blocks2[i2 >> 2] |= message[index] << SHIFT[i2++ & 3];
          }
        } else {
          for (i2 = this.start; index < length && i2 < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 128) {
              blocks2[i2 >> 2] |= code << SHIFT[i2++ & 3];
            } else if (code < 2048) {
              blocks2[i2 >> 2] |= (192 | code >> 6) << SHIFT[i2++ & 3];
              blocks2[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
            } else if (code < 55296 || code >= 57344) {
              blocks2[i2 >> 2] |= (224 | code >> 12) << SHIFT[i2++ & 3];
              blocks2[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
              blocks2[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
            } else {
              code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
              blocks2[i2 >> 2] |= (240 | code >> 18) << SHIFT[i2++ & 3];
              blocks2[i2 >> 2] |= (128 | code >> 12 & 63) << SHIFT[i2++ & 3];
              blocks2[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
              blocks2[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
            }
          }
        }
        this.lastByteIndex = i2;
        this.bytes += i2 - this.start;
        if (i2 >= 64) {
          this.block = blocks2[16];
          this.start = i2 - 64;
          this.hash();
          this.hashed = true;
        } else {
          this.start = i2;
        }
      }
      if (this.bytes > 4294967295) {
        this.hBytes += this.bytes / 4294967296 << 0;
        this.bytes = this.bytes % 4294967296;
      }
      return this;
    };
    Sha256.prototype.finalize = function() {
      if (this.finalized) {
        return;
      }
      this.finalized = true;
      var blocks2 = this.blocks, i2 = this.lastByteIndex;
      blocks2[16] = this.block;
      blocks2[i2 >> 2] |= EXTRA[i2 & 3];
      this.block = blocks2[16];
      if (i2 >= 56) {
        if (!this.hashed) {
          this.hash();
        }
        blocks2[0] = this.block;
        blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
      }
      blocks2[14] = this.hBytes << 3 | this.bytes >>> 29;
      blocks2[15] = this.bytes << 3;
      this.hash();
    };
    Sha256.prototype.hash = function() {
      var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6, h = this.h7, blocks2 = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
      for (j = 16; j < 64; ++j) {
        t1 = blocks2[j - 15];
        s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
        t1 = blocks2[j - 2];
        s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
        blocks2[j] = blocks2[j - 16] + s0 + blocks2[j - 7] + s1 << 0;
      }
      bc = b & c;
      for (j = 0; j < 64; j += 4) {
        if (this.first) {
          if (this.is224) {
            ab = 300032;
            t1 = blocks2[0] - 1413257819;
            h = t1 - 150054599 << 0;
            d = t1 + 24177077 << 0;
          } else {
            ab = 704751109;
            t1 = blocks2[0] - 210244248;
            h = t1 - 1521486534 << 0;
            d = t1 + 143694565 << 0;
          }
          this.first = false;
        } else {
          s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
          s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
          ab = a & b;
          maj = ab ^ a & c ^ bc;
          ch = e & f ^ ~e & g;
          t1 = h + s1 + ch + K[j] + blocks2[j];
          t2 = s0 + maj;
          h = d + t1 << 0;
          d = t1 + t2 << 0;
        }
        s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
        s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
        da = d & a;
        maj = da ^ d & b ^ ab;
        ch = h & e ^ ~h & f;
        t1 = g + s1 + ch + K[j + 1] + blocks2[j + 1];
        t2 = s0 + maj;
        g = c + t1 << 0;
        c = t1 + t2 << 0;
        s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
        s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
        cd = c & d;
        maj = cd ^ c & a ^ da;
        ch = g & h ^ ~g & e;
        t1 = f + s1 + ch + K[j + 2] + blocks2[j + 2];
        t2 = s0 + maj;
        f = b + t1 << 0;
        b = t1 + t2 << 0;
        s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
        s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
        bc = b & c;
        maj = bc ^ b & d ^ cd;
        ch = f & g ^ ~f & h;
        t1 = e + s1 + ch + K[j + 3] + blocks2[j + 3];
        t2 = s0 + maj;
        e = a + t1 << 0;
        a = t1 + t2 << 0;
        this.chromeBugWorkAround = true;
      }
      this.h0 = this.h0 + a << 0;
      this.h1 = this.h1 + b << 0;
      this.h2 = this.h2 + c << 0;
      this.h3 = this.h3 + d << 0;
      this.h4 = this.h4 + e << 0;
      this.h5 = this.h5 + f << 0;
      this.h6 = this.h6 + g << 0;
      this.h7 = this.h7 + h << 0;
    };
    Sha256.prototype.hex = function() {
      this.finalize();
      var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
      var hex = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >> 28 & 15] + HEX_CHARS[h5 >> 24 & 15] + HEX_CHARS[h5 >> 20 & 15] + HEX_CHARS[h5 >> 16 & 15] + HEX_CHARS[h5 >> 12 & 15] + HEX_CHARS[h5 >> 8 & 15] + HEX_CHARS[h5 >> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >> 28 & 15] + HEX_CHARS[h6 >> 24 & 15] + HEX_CHARS[h6 >> 20 & 15] + HEX_CHARS[h6 >> 16 & 15] + HEX_CHARS[h6 >> 12 & 15] + HEX_CHARS[h6 >> 8 & 15] + HEX_CHARS[h6 >> 4 & 15] + HEX_CHARS[h6 & 15];
      if (!this.is224) {
        hex += HEX_CHARS[h7 >> 28 & 15] + HEX_CHARS[h7 >> 24 & 15] + HEX_CHARS[h7 >> 20 & 15] + HEX_CHARS[h7 >> 16 & 15] + HEX_CHARS[h7 >> 12 & 15] + HEX_CHARS[h7 >> 8 & 15] + HEX_CHARS[h7 >> 4 & 15] + HEX_CHARS[h7 & 15];
      }
      return hex;
    };
    Sha256.prototype.toString = Sha256.prototype.hex;
    Sha256.prototype.digest = function() {
      this.finalize();
      var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
      var arr = [
        h0 >> 24 & 255,
        h0 >> 16 & 255,
        h0 >> 8 & 255,
        h0 & 255,
        h1 >> 24 & 255,
        h1 >> 16 & 255,
        h1 >> 8 & 255,
        h1 & 255,
        h2 >> 24 & 255,
        h2 >> 16 & 255,
        h2 >> 8 & 255,
        h2 & 255,
        h3 >> 24 & 255,
        h3 >> 16 & 255,
        h3 >> 8 & 255,
        h3 & 255,
        h4 >> 24 & 255,
        h4 >> 16 & 255,
        h4 >> 8 & 255,
        h4 & 255,
        h5 >> 24 & 255,
        h5 >> 16 & 255,
        h5 >> 8 & 255,
        h5 & 255,
        h6 >> 24 & 255,
        h6 >> 16 & 255,
        h6 >> 8 & 255,
        h6 & 255
      ];
      if (!this.is224) {
        arr.push(h7 >> 24 & 255, h7 >> 16 & 255, h7 >> 8 & 255, h7 & 255);
      }
      return arr;
    };
    Sha256.prototype.array = Sha256.prototype.digest;
    Sha256.prototype.arrayBuffer = function() {
      this.finalize();
      var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
      var dataView = new DataView(buffer);
      dataView.setUint32(0, this.h0);
      dataView.setUint32(4, this.h1);
      dataView.setUint32(8, this.h2);
      dataView.setUint32(12, this.h3);
      dataView.setUint32(16, this.h4);
      dataView.setUint32(20, this.h5);
      dataView.setUint32(24, this.h6);
      if (!this.is224) {
        dataView.setUint32(28, this.h7);
      }
      return buffer;
    };
    function HmacSha256(key, is224, sharedMemory) {
      var i2, type = typeof key;
      if (type === "string") {
        var bytes = [], length = key.length, index = 0, code;
        for (i2 = 0; i2 < length; ++i2) {
          code = key.charCodeAt(i2);
          if (code < 128) {
            bytes[index++] = code;
          } else if (code < 2048) {
            bytes[index++] = 192 | code >> 6;
            bytes[index++] = 128 | code & 63;
          } else if (code < 55296 || code >= 57344) {
            bytes[index++] = 224 | code >> 12;
            bytes[index++] = 128 | code >> 6 & 63;
            bytes[index++] = 128 | code & 63;
          } else {
            code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i2) & 1023);
            bytes[index++] = 240 | code >> 18;
            bytes[index++] = 128 | code >> 12 & 63;
            bytes[index++] = 128 | code >> 6 & 63;
            bytes[index++] = 128 | code & 63;
          }
        }
        key = bytes;
      } else {
        if (type === "object") {
          if (key === null) {
            throw new Error(ERROR);
          } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
            key = new Uint8Array(key);
          } else if (!Array.isArray(key)) {
            if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
              throw new Error(ERROR);
            }
          }
        } else {
          throw new Error(ERROR);
        }
      }
      if (key.length > 64) {
        key = new Sha256(is224, true).update(key).array();
      }
      var oKeyPad = [], iKeyPad = [];
      for (i2 = 0; i2 < 64; ++i2) {
        var b = key[i2] || 0;
        oKeyPad[i2] = 92 ^ b;
        iKeyPad[i2] = 54 ^ b;
      }
      Sha256.call(this, is224, sharedMemory);
      this.update(iKeyPad);
      this.oKeyPad = oKeyPad;
      this.inner = true;
      this.sharedMemory = sharedMemory;
    }
    HmacSha256.prototype = new Sha256();
    HmacSha256.prototype.finalize = function() {
      Sha256.prototype.finalize.call(this);
      if (this.inner) {
        this.inner = false;
        var innerHash = this.array();
        Sha256.call(this, this.is224, this.sharedMemory);
        this.update(this.oKeyPad);
        this.update(innerHash);
        Sha256.prototype.finalize.call(this);
      }
    };
    var exports = createMethod();
    exports.sha256 = exports;
    exports.sha224 = createMethod(true);
    exports.sha256.hmac = createHmacMethod();
    exports.sha224.hmac = createHmacMethod(true);
    if (COMMON_JS) {
      module.exports = exports;
    } else {
      root.sha256 = exports.sha256;
      root.sha224 = exports.sha224;
    }
  })();
})(sha256);
var isToday$1 = { exports: {} };
(function(module, exports) {
  !function(e, o) {
    module.exports = o();
  }(commonjsGlobal, function() {
    return function(e, o, t) {
      o.prototype.isToday = function() {
        var e2 = "YYYY-MM-DD", o2 = t();
        return this.format(e2) === o2.format(e2);
      };
    };
  });
})(isToday$1);
var isTodayExports = isToday$1.exports;
const isToday = /* @__PURE__ */ getDefaultExportFromCjs(isTodayExports);
var isYesterday$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t, n) {
      t.prototype.isYesterday = function() {
        var e2 = "YYYY-MM-DD", t2 = n().subtract(1, "day");
        return this.format(e2) === t2.format(e2);
      };
    };
  });
})(isYesterday$1);
var isYesterdayExports = isYesterday$1.exports;
const isYesterday = /* @__PURE__ */ getDefaultExportFromCjs(isYesterdayExports);
var TTS_RESPONSE_SPLIT = /* @__PURE__ */ ((TTS_RESPONSE_SPLIT2) => {
  TTS_RESPONSE_SPLIT2["PUNCTUATION"] = "punctuation";
  TTS_RESPONSE_SPLIT2["PARAGRAPHS"] = "paragraphs";
  TTS_RESPONSE_SPLIT2["NONE"] = "none";
  return TTS_RESPONSE_SPLIT2;
})(TTS_RESPONSE_SPLIT || {});
const pdfWorkerUrl = "" + new URL("../assets/pdf.worker.B1D2UnXD.mjs", import.meta.url).href;
function findMatchingClosingTag(src, openTag, closeTag) {
  let depth = 1;
  let index = openTag.length;
  while (depth > 0 && index < src.length) {
    if (src.startsWith(openTag, index)) {
      depth++;
    } else if (src.startsWith(closeTag, index)) {
      depth--;
    }
    if (depth > 0) {
      index++;
    }
  }
  return depth === 0 ? index + closeTag.length : -1;
}
function parseAttributes(tag) {
  const attributes = {};
  const attrRegex = /(\w+)="(.*?)"/g;
  let match;
  while ((match = attrRegex.exec(tag)) !== null) {
    attributes[match[1]] = match[2];
  }
  return attributes;
}
function detailsTokenizer(src) {
  const detailsRegex = /^<details(\s+[^>]*)?>\n/;
  const summaryRegex = /^<summary>(.*?)<\/summary>\n/;
  const detailsMatch = detailsRegex.exec(src);
  if (detailsMatch) {
    const endIndex = findMatchingClosingTag(src, "<details", "</details>");
    if (endIndex === -1) return;
    const fullMatch = src.slice(0, endIndex);
    const detailsTag = detailsMatch[0];
    const attributes = parseAttributes(detailsTag);
    let content = fullMatch.slice(detailsTag.length, -10).trim();
    let summary = "";
    const summaryMatch = summaryRegex.exec(content);
    if (summaryMatch) {
      summary = summaryMatch[1].trim();
      content = content.slice(summaryMatch[0].length).trim();
    }
    return {
      type: "details",
      raw: fullMatch,
      summary,
      text: content,
      attributes
      // Include extracted attributes from <details>
    };
  }
}
function detailsStart(src) {
  return src.match(/^<details[\s>]/) ? 0 : -1;
}
function detailsRenderer(token) {
  const attributesString = token.attributes ? Object.entries(token.attributes).map(([key, value]) => `${key}="${value}"`).join(" ") : "";
  return `<details ${attributesString}>
  ${token.summary ? `<summary>${token.summary}</summary>` : ""}
  ${token.text}
  </details>`;
}
function detailsExtension() {
  return {
    name: "details",
    level: "block",
    start: detailsStart,
    tokenizer: detailsTokenizer,
    renderer: detailsRenderer
  };
}
function markedExtension(options = {}) {
  return {
    extensions: [detailsExtension()]
  };
}
const DELIMITER_LIST = [
  { left: "$$", right: "$$", display: true },
  { left: "$", right: "$", display: false },
  { left: "\\pu{", right: "}", display: false },
  { left: "\\ce{", right: "}", display: false },
  { left: "\\(", right: "\\)", display: false },
  { left: "\\[", right: "\\]", display: true },
  { left: "\\begin{equation}", right: "\\end{equation}", display: true }
];
const ALLOWED_SURROUNDING_CHARS = "\\s。，、､;；„“‘’“”（）「」『』［］《》【】‹›«»…⋯:：？！～⇒?!-\\/:-@\\[-`{-~\\p{Script=Han}\\p{Script=Hiragana}\\p{Script=Katakana}\\p{Script=Hangul}";
const ALLOWED_SURROUNDING_CHARS_REGEX = new RegExp(`[${ALLOWED_SURROUNDING_CHARS}]`, "u");
const inlinePatterns = [];
const blockPatterns = [];
function escapeRegex(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function generateRegexRules(delimiters) {
  delimiters.forEach((delimiter) => {
    const { left, right, display } = delimiter;
    const escapedLeft = escapeRegex(left);
    const escapedRight = escapeRegex(right);
    if (!display) {
      inlinePatterns.push(`${escapedLeft}((?:\\\\[^]|[^\\\\])+?)${escapedRight}`);
    } else {
      inlinePatterns.push(`${escapedLeft}(?!\\n)((?:\\\\[^]|[^\\\\])+?)(?!\\n)${escapedRight}`);
      blockPatterns.push(`${escapedLeft}\\n((?:\\\\[^]|[^\\\\])+?)\\n${escapedRight}`);
    }
  });
  const inlineRule2 = new RegExp(
    `^(${inlinePatterns.join("|")})(?=[${ALLOWED_SURROUNDING_CHARS}]|$)`,
    "u"
  );
  const blockRule2 = new RegExp(
    `^(${blockPatterns.join("|")})(?=[${ALLOWED_SURROUNDING_CHARS}]|$)`,
    "u"
  );
  return { inlineRule: inlineRule2, blockRule: blockRule2 };
}
const { inlineRule, blockRule } = generateRegexRules(DELIMITER_LIST);
const isAllowedTrailing = (src, i2) => i2 >= src.length || ALLOWED_SURROUNDING_CHARS_REGEX.test(src.charAt(i2));
const isBlockBoundary = (src, i2) => /^(?:[ \t]*\r?\n|$)/.test(src.slice(i2));
const findClosingDelimiter = (src, i2) => i2 >= src.length - 1 ? -1 : src[i2] === "\\" ? findClosingDelimiter(src, i2 + 2) : src[i2] === "$" && src[i2 + 1] === "$" ? i2 : findClosingDelimiter(src, i2 + 1);
const tokenizeDisplayMath = (src, type, requireBlockBoundary = false) => {
  if (!src.startsWith("$$")) return;
  const endIndex = findClosingDelimiter(src, 2);
  if (endIndex === -1) return;
  const raw = src.slice(0, endIndex + 2);
  const text = raw.slice(2, -2);
  const afterClose = endIndex + 2;
  const validators = [
    () => text.trim().length > 0,
    () => isAllowedTrailing(src, afterClose),
    () => !requireBlockBoundary || isBlockBoundary(src, afterClose)
  ];
  return validators.every((v) => v()) ? { type, raw, text, displayMode: true } : void 0;
};
function markedKatexExtension(options = {}) {
  return {
    extensions: [inlineKatex(), blockKatex()]
  };
}
function katexStart(src, displayMode) {
  for (let i2 = 0; i2 < src.length; i2++) {
    const ch = src.charCodeAt(i2);
    if (ch === 36) {
      if (displayMode && src.charAt(i2 + 1) !== "$") {
        continue;
      }
      if (i2 === 0 || ALLOWED_SURROUNDING_CHARS_REGEX.test(src.charAt(i2 - 1))) {
        return i2;
      }
    } else if (ch === 92) {
      const next = src.charAt(i2 + 1);
      if (displayMode) {
        if (next !== "[" && next !== "b") continue;
      } else {
        if (next !== "(" && next !== "c" && next !== "p") continue;
      }
      if (i2 === 0 || ALLOWED_SURROUNDING_CHARS_REGEX.test(src.charAt(i2 - 1))) {
        return i2;
      }
    }
  }
}
function katexTokenizer(src, tokens, displayMode) {
  if (src.startsWith("$$")) {
    const displayToken = tokenizeDisplayMath(
      src,
      displayMode ? "blockKatex" : "inlineKatex",
      displayMode
    );
    if (displayToken) {
      return displayToken;
    }
  }
  const ruleReg = displayMode ? blockRule : inlineRule;
  const type = displayMode ? "blockKatex" : "inlineKatex";
  const match = src.match(ruleReg);
  if (match) {
    const text = match.slice(2).filter((item) => item).find((item) => item.trim());
    return {
      type,
      raw: match[0],
      text,
      displayMode
    };
  }
}
function inlineKatex(options) {
  return {
    name: "inlineKatex",
    level: "inline",
    start(src) {
      return katexStart(src, false);
    },
    tokenizer(src, tokens) {
      return katexTokenizer(src, tokens, false);
    },
    renderer(token) {
      return `${(token == null ? void 0 : token.text) ?? ""}`;
    }
  };
}
function blockKatex(options) {
  return {
    name: "blockKatex",
    level: "block",
    start(src) {
      return katexStart(src, true);
    },
    tokenizer(src, tokens) {
      return katexTokenizer(src, tokens, true);
    },
    renderer(token) {
      return `${(token == null ? void 0 : token.text) ?? ""}`;
    }
  };
}
var __assign$1 = function() {
  __assign$1 = Object.assign || function(t) {
    for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
      s = arguments[i2];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var pairDivider = "~";
var blockDivider = "~~";
function generateNamedReferences(input, prev) {
  var entities = {};
  var characters = {};
  var blocks = input.split(blockDivider);
  var isOptionalBlock = false;
  for (var i2 = 0; blocks.length > i2; i2++) {
    var entries = blocks[i2].split(pairDivider);
    for (var j = 0; j < entries.length; j += 2) {
      var entity = entries[j];
      var character = entries[j + 1];
      var fullEntity = "&" + entity + ";";
      entities[fullEntity] = character;
      if (isOptionalBlock) {
        entities["&" + entity] = character;
      }
      characters[character] = fullEntity;
    }
    isOptionalBlock = true;
  }
  return prev ? { entities: __assign$1(__assign$1({}, entities), prev.entities), characters: __assign$1(__assign$1({}, characters), prev.characters) } : { entities, characters };
}
var bodyRegExps = {
  xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
};
var namedReferences = {};
namedReferences["xml"] = generateNamedReferences(`lt~<~gt~>~quot~"~apos~'~amp~&`);
namedReferences["html4"] = generateNamedReferences(`apos~'~OElig~Œ~oelig~œ~Scaron~Š~scaron~š~Yuml~Ÿ~circ~ˆ~tilde~˜~ensp~ ~emsp~ ~thinsp~ ~zwnj~‌~zwj~‍~lrm~‎~rlm~‏~ndash~–~mdash~—~lsquo~‘~rsquo~’~sbquo~‚~ldquo~“~rdquo~”~bdquo~„~dagger~†~Dagger~‡~permil~‰~lsaquo~‹~rsaquo~›~euro~€~fnof~ƒ~Alpha~Α~Beta~Β~Gamma~Γ~Delta~Δ~Epsilon~Ε~Zeta~Ζ~Eta~Η~Theta~Θ~Iota~Ι~Kappa~Κ~Lambda~Λ~Mu~Μ~Nu~Ν~Xi~Ξ~Omicron~Ο~Pi~Π~Rho~Ρ~Sigma~Σ~Tau~Τ~Upsilon~Υ~Phi~Φ~Chi~Χ~Psi~Ψ~Omega~Ω~alpha~α~beta~β~gamma~γ~delta~δ~epsilon~ε~zeta~ζ~eta~η~theta~θ~iota~ι~kappa~κ~lambda~λ~mu~μ~nu~ν~xi~ξ~omicron~ο~pi~π~rho~ρ~sigmaf~ς~sigma~σ~tau~τ~upsilon~υ~phi~φ~chi~χ~psi~ψ~omega~ω~thetasym~ϑ~upsih~ϒ~piv~ϖ~bull~•~hellip~…~prime~′~Prime~″~oline~‾~frasl~⁄~weierp~℘~image~ℑ~real~ℜ~trade~™~alefsym~ℵ~larr~←~uarr~↑~rarr~→~darr~↓~harr~↔~crarr~↵~lArr~⇐~uArr~⇑~rArr~⇒~dArr~⇓~hArr~⇔~forall~∀~part~∂~exist~∃~empty~∅~nabla~∇~isin~∈~notin~∉~ni~∋~prod~∏~sum~∑~minus~−~lowast~∗~radic~√~prop~∝~infin~∞~ang~∠~and~∧~or~∨~cap~∩~cup~∪~int~∫~there4~∴~sim~∼~cong~≅~asymp~≈~ne~≠~equiv~≡~le~≤~ge~≥~sub~⊂~sup~⊃~nsub~⊄~sube~⊆~supe~⊇~oplus~⊕~otimes~⊗~perp~⊥~sdot~⋅~lceil~⌈~rceil~⌉~lfloor~⌊~rfloor~⌋~lang~〈~rang~〉~loz~◊~spades~♠~clubs~♣~hearts~♥~diams~♦~~nbsp~ ~iexcl~¡~cent~¢~pound~£~curren~¤~yen~¥~brvbar~¦~sect~§~uml~¨~copy~©~ordf~ª~laquo~«~not~¬~shy~­~reg~®~macr~¯~deg~°~plusmn~±~sup2~²~sup3~³~acute~´~micro~µ~para~¶~middot~·~cedil~¸~sup1~¹~ordm~º~raquo~»~frac14~¼~frac12~½~frac34~¾~iquest~¿~Agrave~À~Aacute~Á~Acirc~Â~Atilde~Ã~Auml~Ä~Aring~Å~AElig~Æ~Ccedil~Ç~Egrave~È~Eacute~É~Ecirc~Ê~Euml~Ë~Igrave~Ì~Iacute~Í~Icirc~Î~Iuml~Ï~ETH~Ð~Ntilde~Ñ~Ograve~Ò~Oacute~Ó~Ocirc~Ô~Otilde~Õ~Ouml~Ö~times~×~Oslash~Ø~Ugrave~Ù~Uacute~Ú~Ucirc~Û~Uuml~Ü~Yacute~Ý~THORN~Þ~szlig~ß~agrave~à~aacute~á~acirc~â~atilde~ã~auml~ä~aring~å~aelig~æ~ccedil~ç~egrave~è~eacute~é~ecirc~ê~euml~ë~igrave~ì~iacute~í~icirc~î~iuml~ï~eth~ð~ntilde~ñ~ograve~ò~oacute~ó~ocirc~ô~otilde~õ~ouml~ö~divide~÷~oslash~ø~ugrave~ù~uacute~ú~ucirc~û~uuml~ü~yacute~ý~thorn~þ~yuml~ÿ~quot~"~amp~&~lt~<~gt~>`);
namedReferences["html5"] = generateNamedReferences('Abreve~Ă~Acy~А~Afr~𝔄~Amacr~Ā~And~⩓~Aogon~Ą~Aopf~𝔸~ApplyFunction~⁡~Ascr~𝒜~Assign~≔~Backslash~∖~Barv~⫧~Barwed~⌆~Bcy~Б~Because~∵~Bernoullis~ℬ~Bfr~𝔅~Bopf~𝔹~Breve~˘~Bscr~ℬ~Bumpeq~≎~CHcy~Ч~Cacute~Ć~Cap~⋒~CapitalDifferentialD~ⅅ~Cayleys~ℭ~Ccaron~Č~Ccirc~Ĉ~Cconint~∰~Cdot~Ċ~Cedilla~¸~CenterDot~·~Cfr~ℭ~CircleDot~⊙~CircleMinus~⊖~CirclePlus~⊕~CircleTimes~⊗~ClockwiseContourIntegral~∲~CloseCurlyDoubleQuote~”~CloseCurlyQuote~’~Colon~∷~Colone~⩴~Congruent~≡~Conint~∯~ContourIntegral~∮~Copf~ℂ~Coproduct~∐~CounterClockwiseContourIntegral~∳~Cross~⨯~Cscr~𝒞~Cup~⋓~CupCap~≍~DD~ⅅ~DDotrahd~⤑~DJcy~Ђ~DScy~Ѕ~DZcy~Џ~Darr~↡~Dashv~⫤~Dcaron~Ď~Dcy~Д~Del~∇~Dfr~𝔇~DiacriticalAcute~´~DiacriticalDot~˙~DiacriticalDoubleAcute~˝~DiacriticalGrave~`~DiacriticalTilde~˜~Diamond~⋄~DifferentialD~ⅆ~Dopf~𝔻~Dot~¨~DotDot~⃜~DotEqual~≐~DoubleContourIntegral~∯~DoubleDot~¨~DoubleDownArrow~⇓~DoubleLeftArrow~⇐~DoubleLeftRightArrow~⇔~DoubleLeftTee~⫤~DoubleLongLeftArrow~⟸~DoubleLongLeftRightArrow~⟺~DoubleLongRightArrow~⟹~DoubleRightArrow~⇒~DoubleRightTee~⊨~DoubleUpArrow~⇑~DoubleUpDownArrow~⇕~DoubleVerticalBar~∥~DownArrow~↓~DownArrowBar~⤓~DownArrowUpArrow~⇵~DownBreve~̑~DownLeftRightVector~⥐~DownLeftTeeVector~⥞~DownLeftVector~↽~DownLeftVectorBar~⥖~DownRightTeeVector~⥟~DownRightVector~⇁~DownRightVectorBar~⥗~DownTee~⊤~DownTeeArrow~↧~Downarrow~⇓~Dscr~𝒟~Dstrok~Đ~ENG~Ŋ~Ecaron~Ě~Ecy~Э~Edot~Ė~Efr~𝔈~Element~∈~Emacr~Ē~EmptySmallSquare~◻~EmptyVerySmallSquare~▫~Eogon~Ę~Eopf~𝔼~Equal~⩵~EqualTilde~≂~Equilibrium~⇌~Escr~ℰ~Esim~⩳~Exists~∃~ExponentialE~ⅇ~Fcy~Ф~Ffr~𝔉~FilledSmallSquare~◼~FilledVerySmallSquare~▪~Fopf~𝔽~ForAll~∀~Fouriertrf~ℱ~Fscr~ℱ~GJcy~Ѓ~Gammad~Ϝ~Gbreve~Ğ~Gcedil~Ģ~Gcirc~Ĝ~Gcy~Г~Gdot~Ġ~Gfr~𝔊~Gg~⋙~Gopf~𝔾~GreaterEqual~≥~GreaterEqualLess~⋛~GreaterFullEqual~≧~GreaterGreater~⪢~GreaterLess~≷~GreaterSlantEqual~⩾~GreaterTilde~≳~Gscr~𝒢~Gt~≫~HARDcy~Ъ~Hacek~ˇ~Hat~^~Hcirc~Ĥ~Hfr~ℌ~HilbertSpace~ℋ~Hopf~ℍ~HorizontalLine~─~Hscr~ℋ~Hstrok~Ħ~HumpDownHump~≎~HumpEqual~≏~IEcy~Е~IJlig~Ĳ~IOcy~Ё~Icy~И~Idot~İ~Ifr~ℑ~Im~ℑ~Imacr~Ī~ImaginaryI~ⅈ~Implies~⇒~Int~∬~Integral~∫~Intersection~⋂~InvisibleComma~⁣~InvisibleTimes~⁢~Iogon~Į~Iopf~𝕀~Iscr~ℐ~Itilde~Ĩ~Iukcy~І~Jcirc~Ĵ~Jcy~Й~Jfr~𝔍~Jopf~𝕁~Jscr~𝒥~Jsercy~Ј~Jukcy~Є~KHcy~Х~KJcy~Ќ~Kcedil~Ķ~Kcy~К~Kfr~𝔎~Kopf~𝕂~Kscr~𝒦~LJcy~Љ~Lacute~Ĺ~Lang~⟪~Laplacetrf~ℒ~Larr~↞~Lcaron~Ľ~Lcedil~Ļ~Lcy~Л~LeftAngleBracket~⟨~LeftArrow~←~LeftArrowBar~⇤~LeftArrowRightArrow~⇆~LeftCeiling~⌈~LeftDoubleBracket~⟦~LeftDownTeeVector~⥡~LeftDownVector~⇃~LeftDownVectorBar~⥙~LeftFloor~⌊~LeftRightArrow~↔~LeftRightVector~⥎~LeftTee~⊣~LeftTeeArrow~↤~LeftTeeVector~⥚~LeftTriangle~⊲~LeftTriangleBar~⧏~LeftTriangleEqual~⊴~LeftUpDownVector~⥑~LeftUpTeeVector~⥠~LeftUpVector~↿~LeftUpVectorBar~⥘~LeftVector~↼~LeftVectorBar~⥒~Leftarrow~⇐~Leftrightarrow~⇔~LessEqualGreater~⋚~LessFullEqual~≦~LessGreater~≶~LessLess~⪡~LessSlantEqual~⩽~LessTilde~≲~Lfr~𝔏~Ll~⋘~Lleftarrow~⇚~Lmidot~Ŀ~LongLeftArrow~⟵~LongLeftRightArrow~⟷~LongRightArrow~⟶~Longleftarrow~⟸~Longleftrightarrow~⟺~Longrightarrow~⟹~Lopf~𝕃~LowerLeftArrow~↙~LowerRightArrow~↘~Lscr~ℒ~Lsh~↰~Lstrok~Ł~Lt~≪~Map~⤅~Mcy~М~MediumSpace~ ~Mellintrf~ℳ~Mfr~𝔐~MinusPlus~∓~Mopf~𝕄~Mscr~ℳ~NJcy~Њ~Nacute~Ń~Ncaron~Ň~Ncedil~Ņ~Ncy~Н~NegativeMediumSpace~​~NegativeThickSpace~​~NegativeThinSpace~​~NegativeVeryThinSpace~​~NestedGreaterGreater~≫~NestedLessLess~≪~NewLine~\n~Nfr~𝔑~NoBreak~⁠~NonBreakingSpace~ ~Nopf~ℕ~Not~⫬~NotCongruent~≢~NotCupCap~≭~NotDoubleVerticalBar~∦~NotElement~∉~NotEqual~≠~NotEqualTilde~≂̸~NotExists~∄~NotGreater~≯~NotGreaterEqual~≱~NotGreaterFullEqual~≧̸~NotGreaterGreater~≫̸~NotGreaterLess~≹~NotGreaterSlantEqual~⩾̸~NotGreaterTilde~≵~NotHumpDownHump~≎̸~NotHumpEqual~≏̸~NotLeftTriangle~⋪~NotLeftTriangleBar~⧏̸~NotLeftTriangleEqual~⋬~NotLess~≮~NotLessEqual~≰~NotLessGreater~≸~NotLessLess~≪̸~NotLessSlantEqual~⩽̸~NotLessTilde~≴~NotNestedGreaterGreater~⪢̸~NotNestedLessLess~⪡̸~NotPrecedes~⊀~NotPrecedesEqual~⪯̸~NotPrecedesSlantEqual~⋠~NotReverseElement~∌~NotRightTriangle~⋫~NotRightTriangleBar~⧐̸~NotRightTriangleEqual~⋭~NotSquareSubset~⊏̸~NotSquareSubsetEqual~⋢~NotSquareSuperset~⊐̸~NotSquareSupersetEqual~⋣~NotSubset~⊂⃒~NotSubsetEqual~⊈~NotSucceeds~⊁~NotSucceedsEqual~⪰̸~NotSucceedsSlantEqual~⋡~NotSucceedsTilde~≿̸~NotSuperset~⊃⃒~NotSupersetEqual~⊉~NotTilde~≁~NotTildeEqual~≄~NotTildeFullEqual~≇~NotTildeTilde~≉~NotVerticalBar~∤~Nscr~𝒩~Ocy~О~Odblac~Ő~Ofr~𝔒~Omacr~Ō~Oopf~𝕆~OpenCurlyDoubleQuote~“~OpenCurlyQuote~‘~Or~⩔~Oscr~𝒪~Otimes~⨷~OverBar~‾~OverBrace~⏞~OverBracket~⎴~OverParenthesis~⏜~PartialD~∂~Pcy~П~Pfr~𝔓~PlusMinus~±~Poincareplane~ℌ~Popf~ℙ~Pr~⪻~Precedes~≺~PrecedesEqual~⪯~PrecedesSlantEqual~≼~PrecedesTilde~≾~Product~∏~Proportion~∷~Proportional~∝~Pscr~𝒫~Qfr~𝔔~Qopf~ℚ~Qscr~𝒬~RBarr~⤐~Racute~Ŕ~Rang~⟫~Rarr~↠~Rarrtl~⤖~Rcaron~Ř~Rcedil~Ŗ~Rcy~Р~Re~ℜ~ReverseElement~∋~ReverseEquilibrium~⇋~ReverseUpEquilibrium~⥯~Rfr~ℜ~RightAngleBracket~⟩~RightArrow~→~RightArrowBar~⇥~RightArrowLeftArrow~⇄~RightCeiling~⌉~RightDoubleBracket~⟧~RightDownTeeVector~⥝~RightDownVector~⇂~RightDownVectorBar~⥕~RightFloor~⌋~RightTee~⊢~RightTeeArrow~↦~RightTeeVector~⥛~RightTriangle~⊳~RightTriangleBar~⧐~RightTriangleEqual~⊵~RightUpDownVector~⥏~RightUpTeeVector~⥜~RightUpVector~↾~RightUpVectorBar~⥔~RightVector~⇀~RightVectorBar~⥓~Rightarrow~⇒~Ropf~ℝ~RoundImplies~⥰~Rrightarrow~⇛~Rscr~ℛ~Rsh~↱~RuleDelayed~⧴~SHCHcy~Щ~SHcy~Ш~SOFTcy~Ь~Sacute~Ś~Sc~⪼~Scedil~Ş~Scirc~Ŝ~Scy~С~Sfr~𝔖~ShortDownArrow~↓~ShortLeftArrow~←~ShortRightArrow~→~ShortUpArrow~↑~SmallCircle~∘~Sopf~𝕊~Sqrt~√~Square~□~SquareIntersection~⊓~SquareSubset~⊏~SquareSubsetEqual~⊑~SquareSuperset~⊐~SquareSupersetEqual~⊒~SquareUnion~⊔~Sscr~𝒮~Star~⋆~Sub~⋐~Subset~⋐~SubsetEqual~⊆~Succeeds~≻~SucceedsEqual~⪰~SucceedsSlantEqual~≽~SucceedsTilde~≿~SuchThat~∋~Sum~∑~Sup~⋑~Superset~⊃~SupersetEqual~⊇~Supset~⋑~TRADE~™~TSHcy~Ћ~TScy~Ц~Tab~	~Tcaron~Ť~Tcedil~Ţ~Tcy~Т~Tfr~𝔗~Therefore~∴~ThickSpace~  ~ThinSpace~ ~Tilde~∼~TildeEqual~≃~TildeFullEqual~≅~TildeTilde~≈~Topf~𝕋~TripleDot~⃛~Tscr~𝒯~Tstrok~Ŧ~Uarr~↟~Uarrocir~⥉~Ubrcy~Ў~Ubreve~Ŭ~Ucy~У~Udblac~Ű~Ufr~𝔘~Umacr~Ū~UnderBar~_~UnderBrace~⏟~UnderBracket~⎵~UnderParenthesis~⏝~Union~⋃~UnionPlus~⊎~Uogon~Ų~Uopf~𝕌~UpArrow~↑~UpArrowBar~⤒~UpArrowDownArrow~⇅~UpDownArrow~↕~UpEquilibrium~⥮~UpTee~⊥~UpTeeArrow~↥~Uparrow~⇑~Updownarrow~⇕~UpperLeftArrow~↖~UpperRightArrow~↗~Upsi~ϒ~Uring~Ů~Uscr~𝒰~Utilde~Ũ~VDash~⊫~Vbar~⫫~Vcy~В~Vdash~⊩~Vdashl~⫦~Vee~⋁~Verbar~‖~Vert~‖~VerticalBar~∣~VerticalLine~|~VerticalSeparator~❘~VerticalTilde~≀~VeryThinSpace~ ~Vfr~𝔙~Vopf~𝕍~Vscr~𝒱~Vvdash~⊪~Wcirc~Ŵ~Wedge~⋀~Wfr~𝔚~Wopf~𝕎~Wscr~𝒲~Xfr~𝔛~Xopf~𝕏~Xscr~𝒳~YAcy~Я~YIcy~Ї~YUcy~Ю~Ycirc~Ŷ~Ycy~Ы~Yfr~𝔜~Yopf~𝕐~Yscr~𝒴~ZHcy~Ж~Zacute~Ź~Zcaron~Ž~Zcy~З~Zdot~Ż~ZeroWidthSpace~​~Zfr~ℨ~Zopf~ℤ~Zscr~𝒵~abreve~ă~ac~∾~acE~∾̳~acd~∿~acy~а~af~⁡~afr~𝔞~aleph~ℵ~amacr~ā~amalg~⨿~andand~⩕~andd~⩜~andslope~⩘~andv~⩚~ange~⦤~angle~∠~angmsd~∡~angmsdaa~⦨~angmsdab~⦩~angmsdac~⦪~angmsdad~⦫~angmsdae~⦬~angmsdaf~⦭~angmsdag~⦮~angmsdah~⦯~angrt~∟~angrtvb~⊾~angrtvbd~⦝~angsph~∢~angst~Å~angzarr~⍼~aogon~ą~aopf~𝕒~ap~≈~apE~⩰~apacir~⩯~ape~≊~apid~≋~approx~≈~approxeq~≊~ascr~𝒶~ast~*~asympeq~≍~awconint~∳~awint~⨑~bNot~⫭~backcong~≌~backepsilon~϶~backprime~‵~backsim~∽~backsimeq~⋍~barvee~⊽~barwed~⌅~barwedge~⌅~bbrk~⎵~bbrktbrk~⎶~bcong~≌~bcy~б~becaus~∵~because~∵~bemptyv~⦰~bepsi~϶~bernou~ℬ~beth~ℶ~between~≬~bfr~𝔟~bigcap~⋂~bigcirc~◯~bigcup~⋃~bigodot~⨀~bigoplus~⨁~bigotimes~⨂~bigsqcup~⨆~bigstar~★~bigtriangledown~▽~bigtriangleup~△~biguplus~⨄~bigvee~⋁~bigwedge~⋀~bkarow~⤍~blacklozenge~⧫~blacksquare~▪~blacktriangle~▴~blacktriangledown~▾~blacktriangleleft~◂~blacktriangleright~▸~blank~␣~blk12~▒~blk14~░~blk34~▓~block~█~bne~=⃥~bnequiv~≡⃥~bnot~⌐~bopf~𝕓~bot~⊥~bottom~⊥~bowtie~⋈~boxDL~╗~boxDR~╔~boxDl~╖~boxDr~╓~boxH~═~boxHD~╦~boxHU~╩~boxHd~╤~boxHu~╧~boxUL~╝~boxUR~╚~boxUl~╜~boxUr~╙~boxV~║~boxVH~╬~boxVL~╣~boxVR~╠~boxVh~╫~boxVl~╢~boxVr~╟~boxbox~⧉~boxdL~╕~boxdR~╒~boxdl~┐~boxdr~┌~boxh~─~boxhD~╥~boxhU~╨~boxhd~┬~boxhu~┴~boxminus~⊟~boxplus~⊞~boxtimes~⊠~boxuL~╛~boxuR~╘~boxul~┘~boxur~└~boxv~│~boxvH~╪~boxvL~╡~boxvR~╞~boxvh~┼~boxvl~┤~boxvr~├~bprime~‵~breve~˘~bscr~𝒷~bsemi~⁏~bsim~∽~bsime~⋍~bsol~\\~bsolb~⧅~bsolhsub~⟈~bullet~•~bump~≎~bumpE~⪮~bumpe~≏~bumpeq~≏~cacute~ć~capand~⩄~capbrcup~⩉~capcap~⩋~capcup~⩇~capdot~⩀~caps~∩︀~caret~⁁~caron~ˇ~ccaps~⩍~ccaron~č~ccirc~ĉ~ccups~⩌~ccupssm~⩐~cdot~ċ~cemptyv~⦲~centerdot~·~cfr~𝔠~chcy~ч~check~✓~checkmark~✓~cir~○~cirE~⧃~circeq~≗~circlearrowleft~↺~circlearrowright~↻~circledR~®~circledS~Ⓢ~circledast~⊛~circledcirc~⊚~circleddash~⊝~cire~≗~cirfnint~⨐~cirmid~⫯~cirscir~⧂~clubsuit~♣~colon~:~colone~≔~coloneq~≔~comma~,~commat~@~comp~∁~compfn~∘~complement~∁~complexes~ℂ~congdot~⩭~conint~∮~copf~𝕔~coprod~∐~copysr~℗~cross~✗~cscr~𝒸~csub~⫏~csube~⫑~csup~⫐~csupe~⫒~ctdot~⋯~cudarrl~⤸~cudarrr~⤵~cuepr~⋞~cuesc~⋟~cularr~↶~cularrp~⤽~cupbrcap~⩈~cupcap~⩆~cupcup~⩊~cupdot~⊍~cupor~⩅~cups~∪︀~curarr~↷~curarrm~⤼~curlyeqprec~⋞~curlyeqsucc~⋟~curlyvee~⋎~curlywedge~⋏~curvearrowleft~↶~curvearrowright~↷~cuvee~⋎~cuwed~⋏~cwconint~∲~cwint~∱~cylcty~⌭~dHar~⥥~daleth~ℸ~dash~‐~dashv~⊣~dbkarow~⤏~dblac~˝~dcaron~ď~dcy~д~dd~ⅆ~ddagger~‡~ddarr~⇊~ddotseq~⩷~demptyv~⦱~dfisht~⥿~dfr~𝔡~dharl~⇃~dharr~⇂~diam~⋄~diamond~⋄~diamondsuit~♦~die~¨~digamma~ϝ~disin~⋲~div~÷~divideontimes~⋇~divonx~⋇~djcy~ђ~dlcorn~⌞~dlcrop~⌍~dollar~$~dopf~𝕕~dot~˙~doteq~≐~doteqdot~≑~dotminus~∸~dotplus~∔~dotsquare~⊡~doublebarwedge~⌆~downarrow~↓~downdownarrows~⇊~downharpoonleft~⇃~downharpoonright~⇂~drbkarow~⤐~drcorn~⌟~drcrop~⌌~dscr~𝒹~dscy~ѕ~dsol~⧶~dstrok~đ~dtdot~⋱~dtri~▿~dtrif~▾~duarr~⇵~duhar~⥯~dwangle~⦦~dzcy~џ~dzigrarr~⟿~eDDot~⩷~eDot~≑~easter~⩮~ecaron~ě~ecir~≖~ecolon~≕~ecy~э~edot~ė~ee~ⅇ~efDot~≒~efr~𝔢~eg~⪚~egs~⪖~egsdot~⪘~el~⪙~elinters~⏧~ell~ℓ~els~⪕~elsdot~⪗~emacr~ē~emptyset~∅~emptyv~∅~emsp13~ ~emsp14~ ~eng~ŋ~eogon~ę~eopf~𝕖~epar~⋕~eparsl~⧣~eplus~⩱~epsi~ε~epsiv~ϵ~eqcirc~≖~eqcolon~≕~eqsim~≂~eqslantgtr~⪖~eqslantless~⪕~equals~=~equest~≟~equivDD~⩸~eqvparsl~⧥~erDot~≓~erarr~⥱~escr~ℯ~esdot~≐~esim~≂~excl~!~expectation~ℰ~exponentiale~ⅇ~fallingdotseq~≒~fcy~ф~female~♀~ffilig~ﬃ~fflig~ﬀ~ffllig~ﬄ~ffr~𝔣~filig~ﬁ~fjlig~fj~flat~♭~fllig~ﬂ~fltns~▱~fopf~𝕗~fork~⋔~forkv~⫙~fpartint~⨍~frac13~⅓~frac15~⅕~frac16~⅙~frac18~⅛~frac23~⅔~frac25~⅖~frac35~⅗~frac38~⅜~frac45~⅘~frac56~⅚~frac58~⅝~frac78~⅞~frown~⌢~fscr~𝒻~gE~≧~gEl~⪌~gacute~ǵ~gammad~ϝ~gap~⪆~gbreve~ğ~gcirc~ĝ~gcy~г~gdot~ġ~gel~⋛~geq~≥~geqq~≧~geqslant~⩾~ges~⩾~gescc~⪩~gesdot~⪀~gesdoto~⪂~gesdotol~⪄~gesl~⋛︀~gesles~⪔~gfr~𝔤~gg~≫~ggg~⋙~gimel~ℷ~gjcy~ѓ~gl~≷~glE~⪒~gla~⪥~glj~⪤~gnE~≩~gnap~⪊~gnapprox~⪊~gne~⪈~gneq~⪈~gneqq~≩~gnsim~⋧~gopf~𝕘~grave~`~gscr~ℊ~gsim~≳~gsime~⪎~gsiml~⪐~gtcc~⪧~gtcir~⩺~gtdot~⋗~gtlPar~⦕~gtquest~⩼~gtrapprox~⪆~gtrarr~⥸~gtrdot~⋗~gtreqless~⋛~gtreqqless~⪌~gtrless~≷~gtrsim~≳~gvertneqq~≩︀~gvnE~≩︀~hairsp~ ~half~½~hamilt~ℋ~hardcy~ъ~harrcir~⥈~harrw~↭~hbar~ℏ~hcirc~ĥ~heartsuit~♥~hercon~⊹~hfr~𝔥~hksearow~⤥~hkswarow~⤦~hoarr~⇿~homtht~∻~hookleftarrow~↩~hookrightarrow~↪~hopf~𝕙~horbar~―~hscr~𝒽~hslash~ℏ~hstrok~ħ~hybull~⁃~hyphen~‐~ic~⁣~icy~и~iecy~е~iff~⇔~ifr~𝔦~ii~ⅈ~iiiint~⨌~iiint~∭~iinfin~⧜~iiota~℩~ijlig~ĳ~imacr~ī~imagline~ℐ~imagpart~ℑ~imath~ı~imof~⊷~imped~Ƶ~in~∈~incare~℅~infintie~⧝~inodot~ı~intcal~⊺~integers~ℤ~intercal~⊺~intlarhk~⨗~intprod~⨼~iocy~ё~iogon~į~iopf~𝕚~iprod~⨼~iscr~𝒾~isinE~⋹~isindot~⋵~isins~⋴~isinsv~⋳~isinv~∈~it~⁢~itilde~ĩ~iukcy~і~jcirc~ĵ~jcy~й~jfr~𝔧~jmath~ȷ~jopf~𝕛~jscr~𝒿~jsercy~ј~jukcy~є~kappav~ϰ~kcedil~ķ~kcy~к~kfr~𝔨~kgreen~ĸ~khcy~х~kjcy~ќ~kopf~𝕜~kscr~𝓀~lAarr~⇚~lAtail~⤛~lBarr~⤎~lE~≦~lEg~⪋~lHar~⥢~lacute~ĺ~laemptyv~⦴~lagran~ℒ~langd~⦑~langle~⟨~lap~⪅~larrb~⇤~larrbfs~⤟~larrfs~⤝~larrhk~↩~larrlp~↫~larrpl~⤹~larrsim~⥳~larrtl~↢~lat~⪫~latail~⤙~late~⪭~lates~⪭︀~lbarr~⤌~lbbrk~❲~lbrace~{~lbrack~[~lbrke~⦋~lbrksld~⦏~lbrkslu~⦍~lcaron~ľ~lcedil~ļ~lcub~{~lcy~л~ldca~⤶~ldquor~„~ldrdhar~⥧~ldrushar~⥋~ldsh~↲~leftarrow~←~leftarrowtail~↢~leftharpoondown~↽~leftharpoonup~↼~leftleftarrows~⇇~leftrightarrow~↔~leftrightarrows~⇆~leftrightharpoons~⇋~leftrightsquigarrow~↭~leftthreetimes~⋋~leg~⋚~leq~≤~leqq~≦~leqslant~⩽~les~⩽~lescc~⪨~lesdot~⩿~lesdoto~⪁~lesdotor~⪃~lesg~⋚︀~lesges~⪓~lessapprox~⪅~lessdot~⋖~lesseqgtr~⋚~lesseqqgtr~⪋~lessgtr~≶~lesssim~≲~lfisht~⥼~lfr~𝔩~lg~≶~lgE~⪑~lhard~↽~lharu~↼~lharul~⥪~lhblk~▄~ljcy~љ~ll~≪~llarr~⇇~llcorner~⌞~llhard~⥫~lltri~◺~lmidot~ŀ~lmoust~⎰~lmoustache~⎰~lnE~≨~lnap~⪉~lnapprox~⪉~lne~⪇~lneq~⪇~lneqq~≨~lnsim~⋦~loang~⟬~loarr~⇽~lobrk~⟦~longleftarrow~⟵~longleftrightarrow~⟷~longmapsto~⟼~longrightarrow~⟶~looparrowleft~↫~looparrowright~↬~lopar~⦅~lopf~𝕝~loplus~⨭~lotimes~⨴~lowbar~_~lozenge~◊~lozf~⧫~lpar~(~lparlt~⦓~lrarr~⇆~lrcorner~⌟~lrhar~⇋~lrhard~⥭~lrtri~⊿~lscr~𝓁~lsh~↰~lsim~≲~lsime~⪍~lsimg~⪏~lsqb~[~lsquor~‚~lstrok~ł~ltcc~⪦~ltcir~⩹~ltdot~⋖~lthree~⋋~ltimes~⋉~ltlarr~⥶~ltquest~⩻~ltrPar~⦖~ltri~◃~ltrie~⊴~ltrif~◂~lurdshar~⥊~luruhar~⥦~lvertneqq~≨︀~lvnE~≨︀~mDDot~∺~male~♂~malt~✠~maltese~✠~map~↦~mapsto~↦~mapstodown~↧~mapstoleft~↤~mapstoup~↥~marker~▮~mcomma~⨩~mcy~м~measuredangle~∡~mfr~𝔪~mho~℧~mid~∣~midast~*~midcir~⫰~minusb~⊟~minusd~∸~minusdu~⨪~mlcp~⫛~mldr~…~mnplus~∓~models~⊧~mopf~𝕞~mp~∓~mscr~𝓂~mstpos~∾~multimap~⊸~mumap~⊸~nGg~⋙̸~nGt~≫⃒~nGtv~≫̸~nLeftarrow~⇍~nLeftrightarrow~⇎~nLl~⋘̸~nLt~≪⃒~nLtv~≪̸~nRightarrow~⇏~nVDash~⊯~nVdash~⊮~nacute~ń~nang~∠⃒~nap~≉~napE~⩰̸~napid~≋̸~napos~ŉ~napprox~≉~natur~♮~natural~♮~naturals~ℕ~nbump~≎̸~nbumpe~≏̸~ncap~⩃~ncaron~ň~ncedil~ņ~ncong~≇~ncongdot~⩭̸~ncup~⩂~ncy~н~neArr~⇗~nearhk~⤤~nearr~↗~nearrow~↗~nedot~≐̸~nequiv~≢~nesear~⤨~nesim~≂̸~nexist~∄~nexists~∄~nfr~𝔫~ngE~≧̸~nge~≱~ngeq~≱~ngeqq~≧̸~ngeqslant~⩾̸~nges~⩾̸~ngsim~≵~ngt~≯~ngtr~≯~nhArr~⇎~nharr~↮~nhpar~⫲~nis~⋼~nisd~⋺~niv~∋~njcy~њ~nlArr~⇍~nlE~≦̸~nlarr~↚~nldr~‥~nle~≰~nleftarrow~↚~nleftrightarrow~↮~nleq~≰~nleqq~≦̸~nleqslant~⩽̸~nles~⩽̸~nless~≮~nlsim~≴~nlt~≮~nltri~⋪~nltrie~⋬~nmid~∤~nopf~𝕟~notinE~⋹̸~notindot~⋵̸~notinva~∉~notinvb~⋷~notinvc~⋶~notni~∌~notniva~∌~notnivb~⋾~notnivc~⋽~npar~∦~nparallel~∦~nparsl~⫽⃥~npart~∂̸~npolint~⨔~npr~⊀~nprcue~⋠~npre~⪯̸~nprec~⊀~npreceq~⪯̸~nrArr~⇏~nrarr~↛~nrarrc~⤳̸~nrarrw~↝̸~nrightarrow~↛~nrtri~⋫~nrtrie~⋭~nsc~⊁~nsccue~⋡~nsce~⪰̸~nscr~𝓃~nshortmid~∤~nshortparallel~∦~nsim~≁~nsime~≄~nsimeq~≄~nsmid~∤~nspar~∦~nsqsube~⋢~nsqsupe~⋣~nsubE~⫅̸~nsube~⊈~nsubset~⊂⃒~nsubseteq~⊈~nsubseteqq~⫅̸~nsucc~⊁~nsucceq~⪰̸~nsup~⊅~nsupE~⫆̸~nsupe~⊉~nsupset~⊃⃒~nsupseteq~⊉~nsupseteqq~⫆̸~ntgl~≹~ntlg~≸~ntriangleleft~⋪~ntrianglelefteq~⋬~ntriangleright~⋫~ntrianglerighteq~⋭~num~#~numero~№~numsp~ ~nvDash~⊭~nvHarr~⤄~nvap~≍⃒~nvdash~⊬~nvge~≥⃒~nvgt~>⃒~nvinfin~⧞~nvlArr~⤂~nvle~≤⃒~nvlt~<⃒~nvltrie~⊴⃒~nvrArr~⤃~nvrtrie~⊵⃒~nvsim~∼⃒~nwArr~⇖~nwarhk~⤣~nwarr~↖~nwarrow~↖~nwnear~⤧~oS~Ⓢ~oast~⊛~ocir~⊚~ocy~о~odash~⊝~odblac~ő~odiv~⨸~odot~⊙~odsold~⦼~ofcir~⦿~ofr~𝔬~ogon~˛~ogt~⧁~ohbar~⦵~ohm~Ω~oint~∮~olarr~↺~olcir~⦾~olcross~⦻~olt~⧀~omacr~ō~omid~⦶~ominus~⊖~oopf~𝕠~opar~⦷~operp~⦹~orarr~↻~ord~⩝~order~ℴ~orderof~ℴ~origof~⊶~oror~⩖~orslope~⩗~orv~⩛~oscr~ℴ~osol~⊘~otimesas~⨶~ovbar~⌽~par~∥~parallel~∥~parsim~⫳~parsl~⫽~pcy~п~percnt~%~period~.~pertenk~‱~pfr~𝔭~phiv~ϕ~phmmat~ℳ~phone~☎~pitchfork~⋔~planck~ℏ~planckh~ℎ~plankv~ℏ~plus~+~plusacir~⨣~plusb~⊞~pluscir~⨢~plusdo~∔~plusdu~⨥~pluse~⩲~plussim~⨦~plustwo~⨧~pm~±~pointint~⨕~popf~𝕡~pr~≺~prE~⪳~prap~⪷~prcue~≼~pre~⪯~prec~≺~precapprox~⪷~preccurlyeq~≼~preceq~⪯~precnapprox~⪹~precneqq~⪵~precnsim~⋨~precsim~≾~primes~ℙ~prnE~⪵~prnap~⪹~prnsim~⋨~profalar~⌮~profline~⌒~profsurf~⌓~propto~∝~prsim~≾~prurel~⊰~pscr~𝓅~puncsp~ ~qfr~𝔮~qint~⨌~qopf~𝕢~qprime~⁗~qscr~𝓆~quaternions~ℍ~quatint~⨖~quest~?~questeq~≟~rAarr~⇛~rAtail~⤜~rBarr~⤏~rHar~⥤~race~∽̱~racute~ŕ~raemptyv~⦳~rangd~⦒~range~⦥~rangle~⟩~rarrap~⥵~rarrb~⇥~rarrbfs~⤠~rarrc~⤳~rarrfs~⤞~rarrhk~↪~rarrlp~↬~rarrpl~⥅~rarrsim~⥴~rarrtl~↣~rarrw~↝~ratail~⤚~ratio~∶~rationals~ℚ~rbarr~⤍~rbbrk~❳~rbrace~}~rbrack~]~rbrke~⦌~rbrksld~⦎~rbrkslu~⦐~rcaron~ř~rcedil~ŗ~rcub~}~rcy~р~rdca~⤷~rdldhar~⥩~rdquor~”~rdsh~↳~realine~ℛ~realpart~ℜ~reals~ℝ~rect~▭~rfisht~⥽~rfr~𝔯~rhard~⇁~rharu~⇀~rharul~⥬~rhov~ϱ~rightarrow~→~rightarrowtail~↣~rightharpoondown~⇁~rightharpoonup~⇀~rightleftarrows~⇄~rightleftharpoons~⇌~rightrightarrows~⇉~rightsquigarrow~↝~rightthreetimes~⋌~ring~˚~risingdotseq~≓~rlarr~⇄~rlhar~⇌~rmoust~⎱~rmoustache~⎱~rnmid~⫮~roang~⟭~roarr~⇾~robrk~⟧~ropar~⦆~ropf~𝕣~roplus~⨮~rotimes~⨵~rpar~)~rpargt~⦔~rppolint~⨒~rrarr~⇉~rscr~𝓇~rsh~↱~rsqb~]~rsquor~’~rthree~⋌~rtimes~⋊~rtri~▹~rtrie~⊵~rtrif~▸~rtriltri~⧎~ruluhar~⥨~rx~℞~sacute~ś~sc~≻~scE~⪴~scap~⪸~sccue~≽~sce~⪰~scedil~ş~scirc~ŝ~scnE~⪶~scnap~⪺~scnsim~⋩~scpolint~⨓~scsim~≿~scy~с~sdotb~⊡~sdote~⩦~seArr~⇘~searhk~⤥~searr~↘~searrow~↘~semi~;~seswar~⤩~setminus~∖~setmn~∖~sext~✶~sfr~𝔰~sfrown~⌢~sharp~♯~shchcy~щ~shcy~ш~shortmid~∣~shortparallel~∥~sigmav~ς~simdot~⩪~sime~≃~simeq~≃~simg~⪞~simgE~⪠~siml~⪝~simlE~⪟~simne~≆~simplus~⨤~simrarr~⥲~slarr~←~smallsetminus~∖~smashp~⨳~smeparsl~⧤~smid~∣~smile~⌣~smt~⪪~smte~⪬~smtes~⪬︀~softcy~ь~sol~/~solb~⧄~solbar~⌿~sopf~𝕤~spadesuit~♠~spar~∥~sqcap~⊓~sqcaps~⊓︀~sqcup~⊔~sqcups~⊔︀~sqsub~⊏~sqsube~⊑~sqsubset~⊏~sqsubseteq~⊑~sqsup~⊐~sqsupe~⊒~sqsupset~⊐~sqsupseteq~⊒~squ~□~square~□~squarf~▪~squf~▪~srarr~→~sscr~𝓈~ssetmn~∖~ssmile~⌣~sstarf~⋆~star~☆~starf~★~straightepsilon~ϵ~straightphi~ϕ~strns~¯~subE~⫅~subdot~⪽~subedot~⫃~submult~⫁~subnE~⫋~subne~⊊~subplus~⪿~subrarr~⥹~subset~⊂~subseteq~⊆~subseteqq~⫅~subsetneq~⊊~subsetneqq~⫋~subsim~⫇~subsub~⫕~subsup~⫓~succ~≻~succapprox~⪸~succcurlyeq~≽~succeq~⪰~succnapprox~⪺~succneqq~⪶~succnsim~⋩~succsim~≿~sung~♪~supE~⫆~supdot~⪾~supdsub~⫘~supedot~⫄~suphsol~⟉~suphsub~⫗~suplarr~⥻~supmult~⫂~supnE~⫌~supne~⊋~supplus~⫀~supset~⊃~supseteq~⊇~supseteqq~⫆~supsetneq~⊋~supsetneqq~⫌~supsim~⫈~supsub~⫔~supsup~⫖~swArr~⇙~swarhk~⤦~swarr~↙~swarrow~↙~swnwar~⤪~target~⌖~tbrk~⎴~tcaron~ť~tcedil~ţ~tcy~т~tdot~⃛~telrec~⌕~tfr~𝔱~therefore~∴~thetav~ϑ~thickapprox~≈~thicksim~∼~thkap~≈~thksim~∼~timesb~⊠~timesbar~⨱~timesd~⨰~tint~∭~toea~⤨~top~⊤~topbot~⌶~topcir~⫱~topf~𝕥~topfork~⫚~tosa~⤩~tprime~‴~triangle~▵~triangledown~▿~triangleleft~◃~trianglelefteq~⊴~triangleq~≜~triangleright~▹~trianglerighteq~⊵~tridot~◬~trie~≜~triminus~⨺~triplus~⨹~trisb~⧍~tritime~⨻~trpezium~⏢~tscr~𝓉~tscy~ц~tshcy~ћ~tstrok~ŧ~twixt~≬~twoheadleftarrow~↞~twoheadrightarrow~↠~uHar~⥣~ubrcy~ў~ubreve~ŭ~ucy~у~udarr~⇅~udblac~ű~udhar~⥮~ufisht~⥾~ufr~𝔲~uharl~↿~uharr~↾~uhblk~▀~ulcorn~⌜~ulcorner~⌜~ulcrop~⌏~ultri~◸~umacr~ū~uogon~ų~uopf~𝕦~uparrow~↑~updownarrow~↕~upharpoonleft~↿~upharpoonright~↾~uplus~⊎~upsi~υ~upuparrows~⇈~urcorn~⌝~urcorner~⌝~urcrop~⌎~uring~ů~urtri~◹~uscr~𝓊~utdot~⋰~utilde~ũ~utri~▵~utrif~▴~uuarr~⇈~uwangle~⦧~vArr~⇕~vBar~⫨~vBarv~⫩~vDash~⊨~vangrt~⦜~varepsilon~ϵ~varkappa~ϰ~varnothing~∅~varphi~ϕ~varpi~ϖ~varpropto~∝~varr~↕~varrho~ϱ~varsigma~ς~varsubsetneq~⊊︀~varsubsetneqq~⫋︀~varsupsetneq~⊋︀~varsupsetneqq~⫌︀~vartheta~ϑ~vartriangleleft~⊲~vartriangleright~⊳~vcy~в~vdash~⊢~vee~∨~veebar~⊻~veeeq~≚~vellip~⋮~verbar~|~vert~|~vfr~𝔳~vltri~⊲~vnsub~⊂⃒~vnsup~⊃⃒~vopf~𝕧~vprop~∝~vrtri~⊳~vscr~𝓋~vsubnE~⫋︀~vsubne~⊊︀~vsupnE~⫌︀~vsupne~⊋︀~vzigzag~⦚~wcirc~ŵ~wedbar~⩟~wedge~∧~wedgeq~≙~wfr~𝔴~wopf~𝕨~wp~℘~wr~≀~wreath~≀~wscr~𝓌~xcap~⋂~xcirc~◯~xcup~⋃~xdtri~▽~xfr~𝔵~xhArr~⟺~xharr~⟷~xlArr~⟸~xlarr~⟵~xmap~⟼~xnis~⋻~xodot~⨀~xopf~𝕩~xoplus~⨁~xotime~⨂~xrArr~⟹~xrarr~⟶~xscr~𝓍~xsqcup~⨆~xuplus~⨄~xutri~△~xvee~⋁~xwedge~⋀~yacy~я~ycirc~ŷ~ycy~ы~yfr~𝔶~yicy~ї~yopf~𝕪~yscr~𝓎~yucy~ю~zacute~ź~zcaron~ž~zcy~з~zdot~ż~zeetrf~ℨ~zfr~𝔷~zhcy~ж~zigrarr~⇝~zopf~𝕫~zscr~𝓏~~AMP~&~COPY~©~GT~>~LT~<~QUOT~"~REG~®', namedReferences["html4"]);
var numericUnicodeMap = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};
var fromCodePoint = String.fromCodePoint || function(astralCodePoint) {
  return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
};
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
      s = arguments[i2];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var allNamedReferences = __assign(__assign({}, namedReferences), { all: namedReferences.html5 });
var defaultDecodeOptions = {
  scope: "body",
  level: "all"
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
  xml: {
    strict,
    attribute,
    body: bodyRegExps.xml
  },
  html4: {
    strict,
    attribute,
    body: bodyRegExps.html4
  },
  html5: {
    strict,
    attribute,
    body: bodyRegExps.html5
  }
};
var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
function getDecodedEntity(entity, references, isAttribute, isStrict) {
  var decodeResult = entity;
  var decodeEntityLastChar = entity[entity.length - 1];
  if (isAttribute && decodeEntityLastChar === "=") {
    decodeResult = entity;
  } else if (isStrict && decodeEntityLastChar !== ";") {
    decodeResult = entity;
  } else {
    var decodeResultByReference = references[entity];
    if (decodeResultByReference) {
      decodeResult = decodeResultByReference;
    } else if (entity[0] === "&" && entity[1] === "#") {
      var decodeSecondChar = entity[2];
      var decodeCode = decodeSecondChar == "x" || decodeSecondChar == "X" ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
      decodeResult = decodeCode >= 1114111 ? outOfBoundsChar : decodeCode > 65535 ? fromCodePoint(decodeCode) : fromCharCode(numericUnicodeMap[decodeCode] || decodeCode);
    }
  }
  return decodeResult;
}
function decode(text, _a) {
  var _b = _a === void 0 ? defaultDecodeOptions : _a, _c = _b.level, level = _c === void 0 ? "all" : _c, _d = _b.scope, scope = _d === void 0 ? level === "xml" ? "strict" : "body" : _d;
  if (!text) {
    return "";
  }
  var decodeRegExp = decodeRegExps[level][scope];
  var references = allNamedReferences[level].entities;
  var isAttribute = scope === "attribute";
  var isStrict = scope === "strict";
  return text.replace(decodeRegExp, function(entity) {
    return getDecodedEntity(entity, references, isAttribute, isStrict);
  });
}
dayjs2.extend(relativeTime);
dayjs2.extend(isToday);
dayjs2.extend(isYesterday);
dayjs2.extend(localizedFormat);
const formatNumber = (num) => {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(
    num
  );
};
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const replaceOutsideCode = (content, replacer) => {
  return content.split(/(```[\s\S]*?```|`[\s\S]*?`)/).map((segment) => {
    return segment.startsWith("```") || segment.startsWith("`") ? segment : replacer(segment);
  }).join("");
};
const replaceTokens = (content, char, user) => {
  if (!content.includes("{{")) return content;
  const tokens = [
    { regex: /{{char}}/gi, replacement: char },
    { regex: /{{user}}/gi, replacement: user },
    {
      regex: /{{VIDEO_FILE_ID_([a-f0-9-]+)}}/gi,
      replacement: (_, fileId) => `<video src="${REXPRO_BASE_URL}/api/v1/files/${fileId}/content" controls></video>`
    },
    {
      regex: /{{HTML_FILE_ID_([a-f0-9-]+)}}/gi,
      replacement: (_, fileId) => `<file type="html" id="${fileId}" />`
    }
  ];
  content = replaceOutsideCode(content, (segment) => {
    tokens.forEach(({ regex, replacement }) => {
      if (replacement !== void 0 && replacement !== null) {
        segment = segment.replace(regex, replacement);
      }
    });
    return segment;
  });
  return content;
};
const sanitizeResponseContent = (content) => {
  return content.replace(/<\|[a-z]*$/, "").replace(/<\|[a-z]+\|$/, "").replace(/<$/, "").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll(/<\|[a-z]+\|>/g, " ").trim();
};
const processResponseContent = (content) => {
  content = processChineseContent(content);
  return content.trim();
};
function isChineseChar(char) {
  return new RegExp("\\p{Script=Han}", "u").test(char);
}
function processChineseContent(content) {
  if (!/[\u4e00-\u9fa5]/.test(content)) return content;
  const lines = content.split("\n");
  const processedLines = lines.map((line) => {
    if (/[\u4e00-\u9fa5]/.test(line)) {
      if (line.includes("*")) {
        if (/（|）/.test(line)) {
          line = processChineseDelimiters(line, "**", "（", "）");
          line = processChineseDelimiters(line, "*", "（", "）");
        }
        if (/“|”/.test(line)) {
          line = processChineseDelimiters(line, "**", "“", "”");
          line = processChineseDelimiters(line, "*", "“", "”");
        }
      }
    }
    return line;
  });
  content = processedLines.join("\n");
  return content;
}
function processChineseDelimiters(line, symbol, leftSymbol, rightSymbol) {
  const escapedSymbol = escapeRegExp(symbol);
  const regex = new RegExp(
    `(.?)(?<!${escapedSymbol})(${escapedSymbol})([^${escapedSymbol}]+)(${escapedSymbol})(?!${escapedSymbol})(.)`,
    "g"
  );
  return line.replace(regex, (match, l, left, content, right, r) => {
    const result = content.startsWith(leftSymbol) && l && l.length > 0 && isChineseChar(l[l.length - 1]) || content.endsWith(rightSymbol) && r && r.length > 0 && isChineseChar(r[0]);
    if (result) {
      return `${l} ${left}${content}${right} ${r}`;
    } else {
      return match;
    }
  });
}
function unescapeHtml(html) {
  return decode(html);
}
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const splitStream = (splitOn) => {
  let buffer = "";
  return new TransformStream({
    transform(chunk, controller) {
      buffer += chunk;
      const parts = buffer.split(splitOn);
      parts.slice(0, -1).forEach((part) => controller.enqueue(part));
      buffer = parts[parts.length - 1];
    },
    flush(controller) {
      if (buffer) controller.enqueue(buffer);
    }
  });
};
const convertMessagesToHistory = (messages) => {
  const history = {
    messages: {},
    currentId: null
  };
  let parentMessageId = null;
  let messageId = null;
  for (const message of messages) {
    messageId = v4();
    if (parentMessageId !== null) {
      history.messages[parentMessageId].childrenIds = [
        ...history.messages[parentMessageId].childrenIds,
        messageId
      ];
    }
    history.messages[messageId] = {
      ...message,
      id: messageId,
      parentId: parentMessageId,
      childrenIds: []
    };
    parentMessageId = messageId;
  }
  history.currentId = messageId;
  return history;
};
const sanitizeHistory = (history) => {
  var _a;
  if (!(history == null ? void 0 : history.messages) || typeof history.messages !== "object") return;
  for (const [id, message] of Object.entries(history.messages)) {
    if (!message || typeof message !== "object") {
      delete history.messages[id];
    }
  }
  for (const [id, message] of Object.entries(history.messages)) {
    if (message.id !== id) message.id = id;
    if (!Array.isArray(message.childrenIds)) message.childrenIds = [];
  }
  const parentByChildId = {};
  for (const [id, message] of Object.entries(history.messages)) {
    for (const childId of message.childrenIds) {
      parentByChildId[childId] = id;
    }
  }
  for (const [id, message] of Object.entries(history.messages)) {
    if (message.role && message.parentId !== void 0) continue;
    if (message.parentId === void 0) {
      message.parentId = parentByChildId[id] ?? null;
    }
    if (!message.role) {
      const parent = message.parentId ? history.messages[message.parentId] : null;
      message.role = (parent == null ? void 0 : parent.role) === "user" ? "assistant" : (parent == null ? void 0 : parent.role) === "assistant" ? "user" : message.model || message.usage || message.done !== void 0 ? "assistant" : "user";
    }
  }
  for (const message of Object.values(history.messages)) {
    message.childrenIds = message.childrenIds.filter((childId) => history.messages[childId]);
  }
  const currentMessage = (_a = history.messages) == null ? void 0 : _a[history.currentId];
  if (!(currentMessage == null ? void 0 : currentMessage.id) || !(currentMessage == null ? void 0 : currentMessage.role)) {
    let latestLeafId = null;
    let latestTimestamp = -1;
    for (const [id, message] of Object.entries(history.messages)) {
      if (message.childrenIds.length === 0 && (message.timestamp ?? 0) > latestTimestamp) {
        latestLeafId = id;
        latestTimestamp = message.timestamp ?? 0;
      }
    }
    history.currentId = latestLeafId ?? Object.keys(history.messages)[0] ?? null;
  }
};
const canvasPixelTest = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.height = 1;
  canvas.width = 1;
  const imageData = new ImageData(canvas.width, canvas.height);
  const pixelValues = imageData.data;
  for (let i2 = 0; i2 < imageData.data.length; i2 += 1) {
    if (i2 % 4 !== 3) {
      pixelValues[i2] = Math.floor(256 * Math.random());
    } else {
      pixelValues[i2] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);
  const p = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  for (let i2 = 0; i2 < p.length; i2 += 1) {
    if (p[i2] !== pixelValues[i2]) {
      /* @__PURE__ */ console.log(
        "canvasPixelTest: Wrong canvas pixel RGB value detected:",
        p[i2],
        "at:",
        i2,
        "expected:",
        pixelValues[i2]
      );
      return false;
    }
  }
  return true;
};
let resizeImageWarmupDone = false;
async function resizeImageToDataURL(img, width, height, mimeType = "image/jpeg") {
  var _a;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  (_a = canvas.getContext("2d")) == null ? void 0 : _a.drawImage(img, 0, 0, width, height);
  const toDataURL = () => canvas.toDataURL(mimeType);
  if (!resizeImageWarmupDone && canvas.toBlob && /android|iphone|ipad|ipod/i.test(navigator == null ? void 0 : navigator.userAgent)) {
    resizeImageWarmupDone = true;
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          resolve(toDataURL());
          return;
        }
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => resolve(toDataURL());
        reader.readAsDataURL(blob);
      }, mimeType);
    });
  }
  return Promise.resolve(toDataURL());
}
const compressImage = async (imageUrl, maxWidth, maxHeight) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = async () => {
      var _a;
      let width = img.width;
      let height = img.height;
      if (maxWidth && maxHeight) {
        if (width <= maxWidth && height <= maxHeight) {
          resolve(imageUrl);
          return;
        }
        if (width / height > maxWidth / maxHeight) {
          height = Math.round(maxWidth * height / width);
          width = maxWidth;
        } else {
          width = Math.round(maxHeight * width / height);
          height = maxHeight;
        }
      } else if (maxWidth) {
        if (width <= maxWidth) {
          resolve(imageUrl);
          return;
        }
        height = Math.round(maxWidth * height / width);
        width = maxWidth;
      } else if (maxHeight) {
        if (height <= maxHeight) {
          resolve(imageUrl);
          return;
        }
        width = Math.round(maxHeight * width / height);
        height = maxHeight;
      }
      const mimeType = ((_a = imageUrl.match(/^data:([^;]+);/)) == null ? void 0 : _a[1]) ?? "image/jpeg";
      resolve(await resizeImageToDataURL(img, width, height, mimeType));
    };
    img.onerror = (error) => reject(error);
    img.src = imageUrl;
  });
};
const generateInitialsImage = (name) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 100;
  canvas.height = 100;
  if (!canvasPixelTest()) {
    return `${REXPRO_BASE_URL}/user.png`;
  }
  ctx.fillStyle = "#F39C12";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "40px Helvetica";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const sanitizedName = name.trim();
  const initials = sanitizedName.length > 0 ? sanitizedName[0] + (sanitizedName.split(" ").length > 1 ? sanitizedName[sanitizedName.lastIndexOf(" ") + 1] : "") : "";
  ctx.fillText(initials.toUpperCase(), canvas.width / 2, canvas.height / 2);
  return canvas.toDataURL();
};
const formatDate = (inputDate) => {
  const date = dayjs2(inputDate);
  if (date.isToday()) {
    return `Today at {{LOCALIZED_TIME}}`;
  } else if (date.isYesterday()) {
    return `Yesterday at {{LOCALIZED_TIME}}`;
  } else {
    return `{{LOCALIZED_DATE}} at {{LOCALIZED_TIME}}`;
  }
};
const copyToClipboard = async (text, html = null, formatted = false) => {
  if (formatted) {
    let styledHtml = "";
    if (!html) {
      const options = {};
      marked.use(markedKatexExtension(options));
      marked.use(markedExtension(options));
      const htmlContent = marked.parse(text);
      styledHtml = `
			<div>
				<style>
					pre {
						background-color: #f6f8fa;
						border-radius: 6px;
						padding: 16px;
						overflow: auto;
					}
					code {
						font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
						font-size: 14px;
					}
					.hljs-keyword { color: #d73a49; }
					.hljs-string { color: #032f62; }
					.hljs-comment { color: #6a737d; }
					.hljs-function { color: #6f42c1; }
					.hljs-number { color: #005cc5; }
					.hljs-operator { color: #d73a49; }
					.hljs-class { color: #6f42c1; }
					.hljs-title { color: #6f42c1; }
					.hljs-params { color: #24292e; }
					.hljs-built_in { color: #005cc5; }
					blockquote {
						border-left: 4px solid #dfe2e5;
						padding-left: 16px;
						color: #6a737d;
						margin-left: 0;
						margin-right: 0;
					}
					table {
						border-collapse: collapse;
						width: 100%;
						margin-bottom: 16px;
					}
					table, th, td {
						border: 1px solid #dfe2e5;
					}
					th, td {
						padding: 8px 12px;
					}
					th {
						background-color: #f6f8fa;
					}
				</style>
				${htmlContent}
			</div>
		`;
    } else {
      styledHtml = html;
    }
    const blob = new Blob([styledHtml], { type: "text/html" });
    try {
      const data = new ClipboardItem({
        "text/html": blob,
        "text/plain": new Blob([text], { type: "text/plain" })
      });
      await navigator.clipboard.write([data]);
      return true;
    } catch (err) {
      return await copyToClipboard(text);
    }
  } else {
    let result = false;
    if (!navigator.clipboard) {
      const span = document.createElement("span");
      span.textContent = text;
      span.style.whiteSpace = "pre";
      span.style.position = "fixed";
      span.style.top = "0";
      span.style.left = "0";
      span.style.opacity = "0";
      document.body.appendChild(span);
      const range = document.createRange();
      range.selectNodeContents(span);
      const selection = window.getSelection();
      selection == null ? void 0 : selection.removeAllRanges();
      selection == null ? void 0 : selection.addRange(range);
      try {
        const successful = document.execCommand("copy");
        const msg = successful ? "successful" : "unsuccessful";
        /* @__PURE__ */ console.log("Fallback: Copying text command was " + msg);
        result = successful;
      } catch (err) {
      }
      selection == null ? void 0 : selection.removeAllRanges();
      document.body.removeChild(span);
      return result;
    }
    result = await navigator.clipboard.writeText(text).then(() => {
      return true;
    }).catch((error) => {
      return false;
    });
    return result;
  }
};
const compareVersion = (latest, current) => {
  return current === "0.0.0" ? false : current.localeCompare(latest, void 0, {
    numeric: true,
    sensitivity: "case",
    caseFirst: "upper"
  }) < 0;
};
const extractCurlyBraceWords = (text) => {
  const regex = /\{\{([^}]+)\}\}/g;
  const matches = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.push({
      word: match[1].trim(),
      startIndex: match.index,
      endIndex: regex.lastIndex - 1
    });
  }
  return matches;
};
const getImportOrigin = (_chats) => {
  if (_chats.some((chat) => "mapping" in chat)) {
    return "openai";
  }
  return "rexpro";
};
const getUserPosition = async (raw = false) => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).catch((error) => {
    throw error;
  });
  if (!position) {
    return "Location not available";
  }
  const { latitude, longitude } = position.coords;
  if (raw) {
    return { latitude, longitude };
  } else {
    return `${latitude.toFixed(3)}, ${longitude.toFixed(3)} (lat, long)`;
  }
};
const extractOpenAIMessageContent = (message) => {
  var _a, _b;
  try {
    const parts = (_a = message == null ? void 0 : message["content"]) == null ? void 0 : _a["parts"];
    if (Array.isArray(parts)) {
      const textParts = parts.filter((p) => typeof p === "string");
      if (textParts.length > 0) return textParts.join("\n");
    }
    return ((_b = message == null ? void 0 : message["content"]) == null ? void 0 : _b["text"]) || "";
  } catch {
    return "";
  }
};
const convertOpenAIMessages = (convo) => {
  var _a, _b, _c, _d, _e, _f;
  const mapping = convo["mapping"];
  const messages = [];
  let currentId = "";
  let lastId = null;
  const uniqueModels = /* @__PURE__ */ new Set();
  for (const message_id in mapping) {
    const message = mapping[message_id];
    currentId = message_id;
    try {
      if (messages.length == 0 && (message["message"] == null || ((_a = message["message"]["content"]["parts"]) == null ? void 0 : _a[0]) == "" && message["message"]["content"]["text"] == null)) {
        continue;
      } else {
        const role = (_c = (_b = message["message"]) == null ? void 0 : _b["author"]) == null ? void 0 : _c["role"];
        if (role === "system" || role === "tool") {
          continue;
        }
        const model = ((_e = (_d = message["message"]) == null ? void 0 : _d["metadata"]) == null ? void 0 : _e["model_slug"]) || "gpt-3.5-turbo";
        const timestamp = ((_f = message["message"]) == null ? void 0 : _f["create_time"]) ? Math.floor(message["message"]["create_time"]) : void 0;
        const new_chat = {
          id: message_id,
          parentId: lastId,
          childrenIds: message["children"] || [],
          role: role !== "user" ? "assistant" : "user",
          content: extractOpenAIMessageContent(message["message"]),
          model,
          done: true,
          context: null,
          ...timestamp !== void 0 && { timestamp }
        };
        if (role !== "user") {
          uniqueModels.add(model);
        }
        messages.push(new_chat);
        lastId = currentId;
      }
    } catch (error) {
    }
  }
  if (messages.length > 0) {
    messages[messages.length - 1].childrenIds = [];
  }
  const history = {};
  messages.forEach((obj) => history[obj.id] = obj);
  const chat = {
    history: {
      currentId,
      messages: history
      // Need to convert this to not a list and instead a json object
    },
    models: uniqueModels.size > 0 ? [...uniqueModels] : ["gpt-3.5-turbo"],
    messages,
    options: {},
    timestamp: convo["create_time"],
    title: convo["title"] ?? "New Chat"
  };
  return chat;
};
const validateChat = (chat) => {
  const messages = chat.messages;
  if (messages.length === 0) {
    return false;
  }
  for (const message of messages) {
    if (typeof message.content !== "string") {
      return false;
    }
  }
  return true;
};
const convertOpenAIChats = (_chats) => {
  const chats = [];
  for (const convo of _chats) {
    if (!("mapping" in convo)) {
      /* @__PURE__ */ console.log(
        "Skipping non-conversation entry (folder/project):",
        convo["title"] ?? convo["id"]
      );
      continue;
    }
    const chat = convertOpenAIMessages(convo);
    if (validateChat(chat)) {
      const createdAt = convo["create_time"] ? Math.floor(convo["create_time"]) : null;
      const updatedAt = convo["update_time"] ? Math.floor(convo["update_time"]) : createdAt;
      chats.push({
        id: convo["id"],
        user_id: "",
        title: convo["title"],
        chat,
        created_at: createdAt,
        updated_at: updatedAt
      });
    }
  }
  return chats;
};
const isValidHttpUrl = (string) => {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};
const isYoutubeUrl = (url) => {
  return url.startsWith("https://www.youtube.com") || url.startsWith("https://youtu.be") || url.startsWith("https://youtube.com") || url.startsWith("https://m.youtube.com");
};
const removeEmojis = (str) => {
  const emojiRegex = new RegExp("\\p{RGI_Emoji}", "gv");
  return str.replace(emojiRegex, "");
};
const removeFormattings = (str) => {
  return str.replace(/(```[\s\S]*?```)/g, "").replace(/^\|.*\|$/gm, "").replace(/(?:\*\*|__)(.*?)(?:\*\*|__)/g, "$1").replace(/(?:[*_])(.*?)(?:[*_])/g, "$1").replace(/~~(.*?)~~/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/!?\[([^\]]*)\](?:\([^)]+\)|\[[^\]]*\])/g, "$1").replace(/^\[[^\]]+\]:\s*.*$/gm, "").replace(/^#{1,6}\s+/gm, "").replace(/^\s*[-*+]\s+/gm, "").replace(/^\s*(?:\d+\.)\s+/gm, "").replace(/^\s*>[> ]*/gm, "").replace(/^\s*:\s+/gm, "").replace(/\[\^[^\]]*\]/g, "").replace(/\n{2,}/g, "\n");
};
const cleanText = (content) => {
  return removeFormattings(removeEmojis(content.trim()));
};
const removeDetails = (content, types) => {
  return replaceOutsideCode(content, (segment) => {
    for (const type of types) {
      segment = segment.replace(
        new RegExp(`<details\\s+type="${type}"[^>]*>.*?<\\/details>`, "gis"),
        ""
      );
    }
    return segment;
  }).trim();
};
const removeAllDetails = (content) => {
  content = content.replace(/<details[^>]*>[\s\S]*?<\/details>/gi, "");
  return replaceOutsideCode(content, (segment) => {
    return segment.replace(/<details[^>]*>.*?<\/details>/gis, "");
  }).trim();
};
const processDetails = (content) => {
  content = removeDetails(content, ["reasoning", "code_interpreter"]);
  const detailsRegex = /<details\s+type="tool_calls"([^>]*)>([\s\S]*?)<\/details>/gis;
  const matches = content.match(detailsRegex);
  if (matches) {
    for (const match of matches) {
      const attributesRegex = /(\w+)="([^"]*)"/g;
      const attributes = {};
      let attributeMatch;
      while ((attributeMatch = attributesRegex.exec(match)) !== null) {
        attributes[attributeMatch[1]] = attributeMatch[2];
      }
      let resultText = "";
      if (attributes.result) {
        resultText = unescapeHtml(attributes.result);
      } else {
        const bodyMatch = match.match(/<summary>[\s\S]*?<\/summary>\s*([\s\S]*?)\s*<\/details>/i);
        if (bodyMatch && bodyMatch[1].trim()) {
          resultText = unescapeHtml(bodyMatch[1].trim());
        }
      }
      if (resultText) {
        content = content.replace(match, resultText);
      }
    }
  }
  return content;
};
const codeBlockRegex = /```[\s\S]*?```/g;
const extractSentences = (text) => {
  const codeBlocks = [];
  let index = 0;
  text = text.replace(codeBlockRegex, (match) => {
    const placeholder = `\0${index}\0`;
    codeBlocks[index++] = match;
    return placeholder;
  });
  let sentences = text.split(new RegExp("(?<=[.!?])\\s+|\\n+"));
  sentences = sentences.map((sentence) => {
    return sentence.replace(/\u0000(\d+)\u0000/g, (_, idx) => codeBlocks[idx]);
  });
  return sentences.map(cleanText).filter(Boolean);
};
const extractParagraphsForAudio = (text) => {
  const codeBlocks = [];
  let index = 0;
  text = text.replace(codeBlockRegex, (match) => {
    const placeholder = `\0${index}\0`;
    codeBlocks[index++] = match;
    return placeholder;
  });
  let paragraphs = text.split(/\n+/);
  paragraphs = paragraphs.map((paragraph) => {
    return paragraph.replace(/\u0000(\d+)\u0000/g, (_, idx) => codeBlocks[idx]);
  });
  return paragraphs.map(cleanText).filter(Boolean);
};
const extractSentencesForAudio = (text) => {
  return extractSentences(text).reduce((mergedTexts, currentText) => {
    const lastIndex = mergedTexts.length - 1;
    if (lastIndex >= 0) {
      const previousText = mergedTexts[lastIndex];
      const wordCount = previousText.split(/\s+/).length;
      const charCount = previousText.length;
      if (wordCount < 4 || charCount < 50) {
        mergedTexts[lastIndex] = previousText + " " + currentText;
      } else {
        mergedTexts.push(currentText);
      }
    } else {
      mergedTexts.push(currentText);
    }
    return mergedTexts;
  }, []);
};
const getMessageContentParts = (content, splitOn = "punctuation") => {
  content = content.replace(/<details[^>]*>[\s\S]*?<\/details>/gi, "");
  const messageContentParts = [];
  switch (splitOn) {
    default:
    case TTS_RESPONSE_SPLIT.PUNCTUATION:
      messageContentParts.push(...extractSentencesForAudio(content));
      break;
    case TTS_RESPONSE_SPLIT.PARAGRAPHS:
      messageContentParts.push(...extractParagraphsForAudio(content));
      break;
    case TTS_RESPONSE_SPLIT.NONE:
      messageContentParts.push(cleanText(content));
      break;
  }
  return messageContentParts;
};
const blobToFile = (blob, fileName) => {
  const file = new File([blob], fileName, { type: blob.type });
  return file;
};
const getPromptVariables = (user_name, user_location, user_email = "") => {
  return {
    "{{USER_NAME}}": user_name,
    "{{USER_EMAIL}}": user_email || "Unknown",
    "{{USER_LOCATION}}": user_location || "Unknown",
    "{{CURRENT_DATETIME}}": getCurrentDateTime(),
    "{{CURRENT_DATE}}": getFormattedDate(),
    "{{CURRENT_TIME}}": getFormattedTime(),
    "{{CURRENT_WEEKDAY}}": getWeekday(),
    "{{CURRENT_TIMEZONE}}": getUserTimezone(),
    "{{USER_LANGUAGE}}": localStorage.getItem("locale") || "en-US"
  };
};
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const getTimeRange = (timestamp) => {
  const now = /* @__PURE__ */ new Date();
  const date = new Date(timestamp * 1e3);
  const diffTime = now.getTime() - date.getTime();
  const diffDays = diffTime / (1e3 * 3600 * 24);
  const nowDate = now.getDate();
  const nowMonth = now.getMonth();
  const nowYear = now.getFullYear();
  const dateDate = date.getDate();
  const dateMonth = date.getMonth();
  const dateYear = date.getFullYear();
  if (nowYear === dateYear && nowMonth === dateMonth && nowDate === dateDate) {
    return "Today";
  } else if (nowYear === dateYear && nowMonth === dateMonth && nowDate - dateDate === 1) {
    return "Yesterday";
  } else if (diffDays <= 7) {
    return "Previous 7 days";
  } else if (diffDays <= 30) {
    return "Previous 30 days";
  } else if (nowYear === dateYear) {
    return MONTH_NAMES[dateMonth];
  } else {
    return date.getFullYear().toString();
  }
};
const extractFrontmatter = (content) => {
  const frontmatter = {};
  let frontmatterStarted = false;
  let frontmatterEnded = false;
  const frontmatterPattern = /^\s*([a-z_]+):\s*(.*)\s*$/i;
  const lines = content.split("\n");
  if (lines[0].trim() !== '"""') {
    return {};
  }
  frontmatterStarted = true;
  for (let i2 = 1; i2 < lines.length; i2++) {
    const line = lines[i2];
    if (line.includes('"""')) {
      if (frontmatterStarted) {
        frontmatterEnded = true;
        break;
      }
    }
    if (frontmatterStarted && !frontmatterEnded) {
      const match = frontmatterPattern.exec(line);
      if (match) {
        const [, key, value] = match;
        frontmatter[key.trim()] = value.trim();
      }
    }
  }
  return frontmatter;
};
const bestMatchingLanguage = (supportedLanguages, preferredLanguages, defaultLocale) => {
  const languages = supportedLanguages.map((lang) => lang.code);
  const match = preferredLanguages.map((prefLang) => languages.find((lang) => lang.startsWith(prefLang))).find(Boolean);
  return match || defaultLocale;
};
const getFormattedDate = () => {
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const getFormattedTime = () => {
  const date = /* @__PURE__ */ new Date();
  return date.toTimeString().split(" ")[0];
};
const getCurrentDateTime = () => {
  return `${getFormattedDate()} ${getFormattedTime()}`;
};
const getUserTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
const getWeekday = () => {
  const date = /* @__PURE__ */ new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekdays[date.getDay()];
};
const createMessagesList = (history, messageId) => {
  const list = [];
  let currentId = messageId;
  while (currentId !== null && currentId !== void 0) {
    const message = history.messages[currentId];
    if (message === void 0) {
      break;
    }
    list.push(message);
    currentId = message.parentId;
  }
  return list.reverse();
};
const formatFileSize = (size) => {
  if (size == null) return "Unknown size";
  if (typeof size !== "number" || size < 0) return "Invalid size";
  if (size === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(1)} ${units[unitIndex]}`;
};
const getLineCount = (text) => {
  return text ? text.split("\n").length : 0;
};
function resolveSchema(schemaRef, components, resolvedSchemas = /* @__PURE__ */ new Set()) {
  if (!schemaRef) return {};
  if (schemaRef["$ref"]) {
    const refPath = schemaRef["$ref"];
    const schemaName = refPath.split("/").pop();
    if (resolvedSchemas.has(schemaName)) {
      return {};
    }
    resolvedSchemas.add(schemaName);
    const referencedSchema = components.schemas[schemaName];
    return resolveSchema(referencedSchema, components, resolvedSchemas);
  }
  if (schemaRef.type) {
    const schemaObj = { type: schemaRef.type };
    if (schemaRef.description) {
      schemaObj.description = schemaRef.description;
    }
    switch (schemaRef.type) {
      case "object":
        schemaObj.properties = {};
        schemaObj.required = schemaRef.required || [];
        for (const [propName, propSchema] of Object.entries(schemaRef.properties || {})) {
          schemaObj.properties[propName] = resolveSchema(propSchema, components);
        }
        break;
      case "array":
        schemaObj.items = resolveSchema(schemaRef.items, components);
        break;
    }
    for (const keyword of ["oneOf", "anyOf", "allOf"]) {
      if (Array.isArray(schemaRef[keyword])) {
        schemaObj[keyword] = schemaRef[keyword].map(
          (inner) => resolveSchema(inner, components, resolvedSchemas)
        );
      }
    }
    return schemaObj;
  }
  const compositionObj = {};
  let hasComposition = false;
  for (const keyword of ["oneOf", "anyOf", "allOf"]) {
    if (Array.isArray(schemaRef[keyword])) {
      compositionObj[keyword] = schemaRef[keyword].map(
        (inner) => resolveSchema(inner, components, resolvedSchemas)
      );
      hasComposition = true;
    }
  }
  if (hasComposition) {
    if (schemaRef.description) compositionObj.description = schemaRef.description;
    return compositionObj;
  }
  return {};
}
const OPENAPI_HTTP_METHODS = /* @__PURE__ */ new Set([
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace"
]);
const convertOpenApiToToolPayload = (openApiSpec) => {
  const toolPayload = [];
  if (!openApiSpec || !openApiSpec.paths) {
    return toolPayload;
  }
  for (const [path, methods] of Object.entries(openApiSpec.paths)) {
    if (!methods || typeof methods !== "object") continue;
    const pathLevelParams = Array.isArray(methods.parameters) ? methods.parameters : [];
    for (const [method, operation] of Object.entries(methods)) {
      if (!OPENAPI_HTTP_METHODS.has(method)) continue;
      if (!operation || typeof operation !== "object") continue;
      if (operation == null ? void 0 : operation.operationId) {
        const tool = {
          name: operation.operationId,
          description: operation.description || operation.summary || "No description available.",
          parameters: {
            type: "object",
            properties: {},
            required: []
          }
        };
        const opParams = Array.isArray(operation.parameters) ? operation.parameters : [];
        const mergedParams = /* @__PURE__ */ new Map();
        for (const param of pathLevelParams) {
          if (param == null ? void 0 : param.name) mergedParams.set(`${param.name}:${param.in ?? ""}`, param);
        }
        for (const param of opParams) {
          if (param == null ? void 0 : param.name) mergedParams.set(`${param.name}:${param.in ?? ""}`, param);
        }
        for (const param of mergedParams.values()) {
          const paramName = param == null ? void 0 : param.name;
          if (!paramName) continue;
          const paramSchema = (param == null ? void 0 : param.schema) ?? {};
          let description = paramSchema.description || param.description || "";
          if (paramSchema.enum && Array.isArray(paramSchema.enum)) {
            description += `. Possible values: ${paramSchema.enum.join(", ")}`;
          }
          tool.parameters.properties[paramName] = {
            type: paramSchema.type,
            description
          };
          if (param.required) {
            tool.parameters.required.push(paramName);
          }
        }
        if (operation.requestBody) {
          const content = operation.requestBody.content;
          if (content && content["application/json"]) {
            const requestSchema = content["application/json"].schema;
            const resolvedRequestSchema = resolveSchema(requestSchema, openApiSpec.components);
            if (resolvedRequestSchema.properties) {
              tool.parameters.properties = {
                ...tool.parameters.properties,
                ...resolvedRequestSchema.properties
              };
              if (resolvedRequestSchema.required) {
                tool.parameters.required = [
                  .../* @__PURE__ */ new Set([...tool.parameters.required, ...resolvedRequestSchema.required])
                ];
              }
            } else if (resolvedRequestSchema.type === "array") {
              tool.parameters = resolvedRequestSchema;
            }
          }
        }
        toolPayload.push(tool);
      }
    }
  }
  return toolPayload;
};
const slugify = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-_]/g, "").toLowerCase();
};
const nameToId = (name) => {
  return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w]+/g, "_").replace(/^_+|_+$/g, "").toLowerCase();
};
const extractInputVariables = (text) => {
  const regex = /{{\s*([^|}\s]+)\s*\|\s*([^}]+)\s*}}/g;
  const regularRegex = /{{\s*([^|}\s]+)\s*}}/g;
  const variables = {};
  let match;
  while ((match = regex.exec(text)) !== null) {
    const varName = match[1].trim();
    const definition = match[2].trim();
    variables[varName] = parseVariableDefinition(definition);
  }
  while ((match = regularRegex.exec(text)) !== null) {
    const varName = match[1].trim();
    if (!variables.hasOwnProperty(varName)) {
      variables[varName] = { type: "text" };
    }
  }
  return variables;
};
const splitProperties = (str, delimiter) => {
  const result = [];
  let current = "";
  let depth = 0;
  let inString = false;
  let escapeNext = false;
  for (let i2 = 0; i2 < str.length; i2++) {
    const char = str[i2];
    if (escapeNext) {
      current += char;
      escapeNext = false;
      continue;
    }
    if (char === "\\") {
      current += char;
      escapeNext = true;
      continue;
    }
    if (char === '"' && !escapeNext) {
      inString = !inString;
      current += char;
      continue;
    }
    if (!inString) {
      if (char === "{" || char === "[") {
        depth++;
      } else if (char === "}" || char === "]") {
        depth--;
      }
      if (char === delimiter && depth === 0) {
        result.push(current.trim());
        current = "";
        continue;
      }
    }
    current += char;
  }
  if (current.trim()) {
    result.push(current.trim());
  }
  return result;
};
const parseVariableDefinition = (definition) => {
  const parts = splitProperties(definition, ":");
  const [firstPart, ...propertyParts] = parts;
  const type = firstPart.startsWith("type=") ? firstPart.slice(5) : firstPart;
  const properties = propertyParts.reduce(
    (props, part) => {
      const trimmed = part.trim();
      if (!trimmed) return props;
      const equalsParts = splitProperties(trimmed, "=");
      if (equalsParts.length === 1) {
        const flagName = equalsParts[0].trim();
        if (flagName.length > 0) {
          return { ...props, [flagName]: true };
        }
        return props;
      }
      const [propertyName, ...valueParts] = equalsParts;
      const propertyValueRaw = valueParts.join("=");
      if (!propertyName || propertyValueRaw == null) return props;
      return {
        ...props,
        [propertyName.trim()]: parseJsonValue(propertyValueRaw.trim())
      };
    },
    {}
  );
  return { type, ...properties };
};
const parseJsonValue = (value) => {
  if (value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1);
  }
  if (/^[\[{]/.test(value)) {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  return value;
};
function ensureReadableStreamAsyncIterator() {
  if (typeof ReadableStream === "undefined") {
    return;
  }
  const prototype = ReadableStream.prototype;
  if (prototype[Symbol.asyncIterator]) {
    return;
  }
  Object.defineProperty(prototype, Symbol.asyncIterator, {
    value: async function* () {
      const reader = this.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            return;
          }
          yield value;
        }
      } finally {
        reader.releaseLock();
      }
    },
    configurable: true,
    writable: true
  });
}
async function ensurePDFjsLoaded() {
  ensureReadableStreamAsyncIterator();
  if (!window.pdfjsLib) {
    const pdfjs = await __vitePreload(() => import("./CruFmpkt.js"), true ? [] : void 0, import.meta.url);
    pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;
    if (!window.pdfjsLib) {
      throw new Error("pdfjsLib is required for PDF extraction");
    }
  }
  return window.pdfjsLib;
}
const extractContentFromFile = async (file) => {
  const textExtensions = [
    ".txt",
    ".md",
    ".csv",
    ".json",
    ".js",
    ".ts",
    ".css",
    ".html",
    ".xml",
    ".yaml",
    ".yml",
    ".rtf"
  ];
  function getExtension(filename) {
    const dot = filename.lastIndexOf(".");
    return dot === -1 ? "" : filename.substr(dot).toLowerCase();
  }
  async function extractPdfText(file2) {
    const pdfjsLib = await ensurePDFjsLoaded();
    const arrayBuffer = await file2.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let allText = "";
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      const strings = content.items.map((item) => item.str);
      allText += strings.join(" ") + "\n";
    }
    return allText;
  }
  function readAsText(file2) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(file2);
    });
  }
  async function extractDocxText(file2) {
    const [arrayBuffer, { default: mammoth }] = await Promise.all([
      file2.arrayBuffer(),
      __vitePreload(() => import("./MP_eVmKb.js").then((n) => n.i), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url)
    ]);
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  }
  const type = file.type || "";
  const ext = getExtension(file.name);
  if (type === "application/pdf" || ext === ".pdf") {
    return await extractPdfText(file);
  }
  if (type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || ext === ".docx") {
    return await extractDocxText(file);
  }
  if (type.startsWith("text/") || textExtensions.includes(ext)) {
    return await readAsText(file);
  }
  try {
    return await readAsText(file);
  } catch (err) {
    throw new Error("Unsupported or non-text file type: " + (file.name || type));
  }
};
const getAge = (birthDate) => {
  const today = /* @__PURE__ */ new Date();
  const bDate = new Date(birthDate);
  let age = today.getFullYear() - bDate.getFullYear();
  const m = today.getMonth() - bDate.getMonth();
  if (m < 0 || m === 0 && today.getDate() < bDate.getDate()) {
    age--;
  }
  return age.toString();
};
const convertHeicToJpeg = async (file) => {
  var _a;
  const { default: heic2any } = await __vitePreload(async () => {
    const { default: heic2any2 } = await import("./BiYTqyH_.js").then((n) => n.h);
    return { default: heic2any2 };
  }, true ? __vite__mapDeps([3,1]) : void 0, import.meta.url);
  try {
    return await heic2any({ blob: file, toType: "image/jpeg" });
  } catch (err) {
    if ((_a = err == null ? void 0 : err.message) == null ? void 0 : _a.includes("already browser readable")) {
      return file;
    }
    throw err;
  }
};
const decodeString = (str) => {
  try {
    return decodeURIComponent(str);
  } catch (e) {
    return str;
  }
};
const initMermaid = async () => {
  const { default: mermaid } = await __vitePreload(async () => {
    const { default: mermaid2 } = await import("./DQxPuqmE.js").then((n) => n.aU);
    return { default: mermaid2 };
  }, true ? __vite__mapDeps([4,5,1,6,7,8,9]) : void 0, import.meta.url);
  mermaid.initialize({
    startOnLoad: false,
    // Should be false when using render API
    theme: document.documentElement.classList.contains("dark") ? "dark" : "default",
    securityLevel: "loose"
  });
  return mermaid;
};
const cleanupMermaidTempElements = (id) => {
  var _a, _b, _c;
  if (typeof document === "undefined") {
    return;
  }
  (_a = document.getElementById(id)) == null ? void 0 : _a.remove();
  (_b = document.getElementById(`d${id}`)) == null ? void 0 : _b.remove();
  (_c = document.getElementById(`i${id}`)) == null ? void 0 : _c.remove();
};
const sanitizeSvg = (svg) => purify.sanitize(svg, {
  USE_PROFILES: { svg: true, svgFilters: true },
  WHOLE_DOCUMENT: false,
  ADD_TAGS: ["style", "foreignObject"],
  ADD_ATTR: [
    "class",
    "style",
    "id",
    "data-*",
    "viewBox",
    "preserveAspectRatio",
    "markerWidth",
    "markerHeight",
    "markerUnits",
    "refX",
    "refY",
    "orient",
    "href",
    "xlink:href",
    "dominant-baseline",
    "text-anchor",
    "clipPathUnits",
    "filterUnits",
    "patternUnits",
    "patternContentUnits",
    "maskUnits",
    "role",
    "aria-label",
    "aria-labelledby",
    "aria-hidden",
    "tabindex"
  ],
  SANITIZE_DOM: true
});
const renderMermaidDiagram = async (mermaid, code, renderId) => {
  const id = `mermaid-${v4()}`;
  try {
    const parseResult = await mermaid.parse(code, { suppressErrors: false });
    if (parseResult) {
      const { svg } = await mermaid.render(id, code);
      return sanitizeSvg(svg);
    }
    return "";
  } finally {
    cleanupMermaidTempElements(id);
  }
};
const renderVegaVisualization = async (spec, i18n) => {
  const vega = await __vitePreload(() => import("./fL6EIICl.js"), true ? __vite__mapDeps([10,11,8,12,13,14,15,16,17,18,9,19,20]) : void 0, import.meta.url);
  const parsedSpec = JSON.parse(spec);
  let vegaSpec = parsedSpec;
  if (parsedSpec.$schema && parsedSpec.$schema.includes("vega-lite")) {
    const vegaLite = await __vitePreload(() => import("./CTCIaRXY.js"), true ? __vite__mapDeps([21,10,11,8,12,13,14,15,16,17,18,9,19,20]) : void 0, import.meta.url);
    vegaSpec = vegaLite.compile(parsedSpec).spec;
  }
  const view = new vega.View(vega.parse(vegaSpec), { renderer: "none" });
  const svg = await view.toSVG();
  return svg;
};
const getCodeBlockContents = (content) => {
  content = removeAllDetails(content);
  const codeBlockContents = content.match(/```[\s\S]*?```/g);
  let codeBlocks = [];
  let htmlGroups = [];
  const initDefaultGroup = () => {
    if (htmlGroups.length === 0) {
      htmlGroups.push({ html: "", css: "", js: "" });
    }
  };
  if (codeBlockContents) {
    codeBlockContents.forEach((block) => {
      const lang = block.split("\n")[0].replace("```", "").trim().toLowerCase();
      const code = block.replace(/```[\s\S]*?\n/, "").replace(/```$/, "");
      codeBlocks.push({ lang, code });
    });
    codeBlocks.forEach((block) => {
      const { lang, code } = block;
      if (lang === "html") {
        htmlGroups.push({ html: code + "\n", css: "", js: "" });
      } else if (lang === "css") {
        initDefaultGroup();
        htmlGroups[htmlGroups.length - 1].css += code + "\n";
      } else if (lang === "javascript" || lang === "js") {
        initDefaultGroup();
        htmlGroups[htmlGroups.length - 1].js += code + "\n";
      }
    });
  } else {
    content = removeAllDetails(content);
    const inlineHtml = content.match(/<html>[\s\S]*?<\/html>/gi);
    const inlineCss = content.match(/<style>[\s\S]*?<\/style>/gi);
    const inlineJs = content.match(/<script>[\s\S]*?<\/script>/gi);
    if (inlineHtml) {
      inlineHtml.forEach((block) => {
        const content2 = block.replace(/<\/?html>/gi, "");
        htmlGroups.push({ html: content2 + "\n", css: "", js: "" });
      });
    }
    if (inlineCss) {
      inlineCss.forEach((block) => {
        const content2 = block.replace(/<\/?style>/gi, "");
        initDefaultGroup();
        htmlGroups[htmlGroups.length - 1].css += content2 + "\n";
      });
    }
    if (inlineJs) {
      inlineJs.forEach((block) => {
        const content2 = block.replace(/<\/?script>/gi, "");
        initDefaultGroup();
        htmlGroups[htmlGroups.length - 1].js += content2 + "\n";
      });
    }
  }
  const htmlContent = htmlGroups.map((g) => g.html).join("");
  const cssContent = htmlGroups.map((g) => g.css).join("");
  const jsContent = htmlGroups.map((g) => g.js).join("");
  return {
    codeBlocks,
    html: htmlContent.trim(),
    css: cssContent.trim(),
    js: jsContent.trim(),
    htmlGroups: htmlGroups.filter((g) => g.html.trim() || g.css.trim() || g.js.trim()).map((g) => ({
      html: g.html.trim(),
      css: g.css.trim(),
      js: g.js.trim()
    }))
  };
};
const parseFrontmatter = (content) => {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (match) {
    const frontmatter = {};
    match[1].split("\n").forEach((line) => {
      const [key, ...value] = line.split(":");
      if (key && value) {
        frontmatter[key.trim()] = value.join(":").trim().replace(/^["']|["']$/g, "");
      }
    });
    return frontmatter;
  }
  return {};
};
const formatSkillName = (name) => {
  return name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};
const displayFileHandler = (path, stores) => {
  if (path) {
    stores.showControls.set(true);
    stores.showFileNavPath.set(path);
  }
};
export {
  sanitizeHistory as $,
  extractInputVariables as A,
  convertHeicToJpeg as B,
  compressImage as C,
  extractCurlyBraceWords as D,
  decodeString as E,
  formatNumber as F,
  pdfWorkerUrl as G,
  formatFileSize as H,
  getLineCount as I,
  isToday as J,
  isYesterday as K,
  bestMatchingLanguage as L,
  displayFileHandler as M,
  i as N,
  replaceOutsideCode as O,
  removeAllDetails as P,
  sanitizeResponseContent as Q,
  getMessageContentParts as R,
  getImportOrigin as S,
  TTS_RESPONSE_SPLIT as T,
  convertOpenAIChats as U,
  isYoutubeUrl as V,
  extractContentFromFile as W,
  initMermaid as X,
  renderMermaidDiagram as Y,
  processDetails as Z,
  getPromptVariables as _,
  convertOpenApiToToolPayload as a,
  getCodeBlockContents as a0,
  renderVegaVisualization as a1,
  unescapeHtml as a2,
  decode as a3,
  markedKatexExtension as a4,
  markedExtension as a5,
  replaceTokens as a6,
  processResponseContent as a7,
  getUserPosition as b,
  compareVersion as c,
  slugify as d,
  extractFrontmatter as e,
  formatSkillName as f,
  getTimeRange as g,
  createMessagesList as h,
  convertMessagesToHistory as i,
  generateInitialsImage as j,
  canvasPixelTest as k,
  capitalizeFirstLetter as l,
  copyToClipboard as m,
  nameToId as n,
  blobToFile as o,
  parseFrontmatter as p,
  isValidHttpUrl as q,
  formatDate as r,
  splitStream as s,
  getAge as t,
  getFormattedDate as u,
  v4 as v,
  getFormattedTime as w,
  getCurrentDateTime as x,
  getUserTimezone as y,
  getWeekday as z
};
