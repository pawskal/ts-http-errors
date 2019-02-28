### Http Error Set

### Usage
```
npm install ts-http-errors --save
```

### Usage
import error from lib with postfix Error
```typescript
import { NotFoundError } from 'ts-http-errors';

throw new NotFoundError("Not Found Message");
```

expexted object
```json
{
  "status": 404,
  "message": "Not Found Message",
  "name": "NotFoundError"
}
```

Every objects inherited from `Error`
Inside code status becomes to statusCode for backward capabilities with `express`

#### Available errors 
```json
[
  { "400": "BadRequest" },
  { "401": "Unauthorized" },
  { "402": "PaymentRequired" },
  { "403": "Forbidden" },
  { "404": "NotFound" },
  { "405": "MethodNotAllowed" },
  { "406": "NotAcceptable" },
  { "407": "ProxyAuthenticationRequired" },
  { "408": "RequestTimeout" },
  { "409": "Conflict" },
  { "410": "Gone" },
  { "411": "LengthRequired" },
  { "412": "PreconditionFailed" },
  { "413": "PayloadTooLarge" },
  { "414": "URITooLong" },
  { "415": "UnsupportedMediaType" },
  { "416": "RangeNotSatisfiable" },
  { "417": "ExpectationFailed" },
  { "418": "IAmATeapot" },
  { "419": "AuthenticationTimeout" },
  { "421": "MisdirectedRequest" },
  { "422": "UnprocessableEntity" },
  { "423": "Locked" }, 
  { "424": "FailedDependency" },
  { "426": "UpgradeRequired" },
  { "428": "PreconditionRequired" },
  { "429": "TooManyRequests" },
  { "431": "RequestHeaderFieldsTooLarge" },
  { "449": "RetryWith" },
  { "451": "UnavailableForLegalReasons" },
  { "499": "ClientClosedRequest" },
  { "500": "InternalServer" },
  { "501": "NotImplemented" },
  { "502": "BadGateway" },
  { "503": "ServiceUnavailable" },
  { "504": "GatewayTimeout" },
  { "505": "HTTPVersionNotSupported" },
  { "506": "VariantAlsoNegotiates" },
  { "507": "InsufficientStorage" },
  { "508": "LoopDetected" },
  { "509": "BandwidthLimitExceeded" },
  { "510": "NotExtended" },
  { "511": "NetworkAuthenticationRequired" },
  { "520": "Unknown" },
  { "521": "WebServerIsDown" },
  { "522": "ConnectionTimedOut" },
  { "523": "OriginIsUnreachable" },
  { "524": "ATimeoutOccurred" },
  { "525": "SSLHandshakeFailed" },
  { "526": "InvalidSSLCertificate" }
]
```