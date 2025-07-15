import {
  BrowserModule,
  DomRendererFactory2,
  EVENT_MANAGER_PLUGINS,
  EventManagerPlugin,
  init_browser,
  init_dom_renderer
} from "./chunk-EC7DTUDS.js";
import {
  ANIMATION_MODULE_TYPE,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Console,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  FactoryTarget,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  PendingTasks,
  Renderer2,
  RendererFactory2,
  ResourceImpl,
  RuntimeError,
  SecurityContext,
  Subject,
  TemplateRef,
  Version,
  ViewContainerRef,
  ViewEncapsulation,
  XSS_SECURITY_URL,
  XhrFactory,
  __async,
  __decorate,
  __esDecorate,
  __esm,
  __objRest,
  __publicField,
  __runInitializers,
  __spreadProps,
  __spreadValues,
  _sanitizeHtml,
  _sanitizeUrl,
  afterNextRender,
  allowSanitizationBypassAndThrow,
  animationFrameScheduler,
  asapScheduler,
  assertInInjectionContext,
  assertNotInReactiveContext,
  booleanAttribute,
  bypassSanitizationTrustHtml,
  bypassSanitizationTrustResourceUrl,
  bypassSanitizationTrustScript,
  bypassSanitizationTrustStyle,
  bypassSanitizationTrustUrl,
  catchError,
  computed,
  concatMap,
  core_exports,
  debounceTime,
  encapsulateResourceError,
  filter,
  finalize,
  formatRuntimeError,
  forwardRef,
  fromEvent,
  getDOM,
  init_common,
  init_core,
  init_esm,
  init_operators,
  init_resource,
  init_root_effect_scheduler,
  init_tslib_es6,
  init_xhr,
  inject,
  input,
  isDevMode,
  isObservable,
  isPlatformBrowser,
  linkedSignal,
  makeEnvironmentProviders,
  map,
  numberAttribute,
  of,
  parseCookieValue,
  runInInjectionContext,
  share,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  unwrapSafeValue,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-E4RZNJAH.js";

// node_modules/@angular/common/fesm2022/module.mjs
function assertValidHeaders(headers) {
  for (const [key, value] of Object.entries(headers)) {
    if (!(typeof value === "string" || typeof value === "number") && !Array.isArray(value)) {
      throw new Error(`Unexpected value of the \`${key}\` header provided. Expecting either a string, a number or an array, but got: \`${value}\`.`);
    }
  }
}
function paramParser(rawParams, codec) {
  const map2 = /* @__PURE__ */ new Map();
  if (rawParams.length > 0) {
    const params = rawParams.replace(/^\?/, "").split("&");
    params.forEach((param) => {
      const eqIdx = param.indexOf("=");
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ""] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map2.get(key) || [];
      list.push(val);
      map2.set(key, list);
    });
  }
  return map2;
}
function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => STANDARD_ENCODING_REPLACEMENTS[t] ?? s);
}
function valueToString(value) {
  return `${value}`;
}
function mightHaveBody(method) {
  switch (method) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return false;
    default:
      return true;
  }
}
function isArrayBuffer(value) {
  return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer;
}
function isBlob(value) {
  return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFormData(value) {
  return typeof FormData !== "undefined" && value instanceof FormData;
}
function isUrlSearchParams(value) {
  return typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams;
}
function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials,
    transferCache: options.transferCache,
    keepalive: options.keepalive,
    priority: options.priority,
    cache: options.cache,
    mode: options.mode,
    redirect: options.redirect
  };
}
function getResponseUrl$1(response) {
  if (response.url) {
    return response.url;
  }
  const xRequestUrl = X_REQUEST_URL_HEADER.toLocaleLowerCase();
  return response.headers.get(xRequestUrl);
}
function noop() {
}
function warningOptionsMessage(req) {
  if (req.credentials && req.withCredentials) {
    console.warn(formatRuntimeError(2819, `Angular detected that a \`HttpClient\` request has both \`withCredentials: true\` and \`credentials: '${req.credentials}'\` options. The \`withCredentials\` option is overriding the explicit \`credentials\` setting to 'include'. Consider removing \`withCredentials\` and using \`credentials: '${req.credentials}'\` directly for clarity.`));
  }
}
function silenceSuperfluousUnhandledPromiseRejection(promise) {
  promise.then(noop, noop);
}
function interceptorChainEndFn(req, finalHandlerFn) {
  return finalHandlerFn(req);
}
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
  return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, {
    handle: (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)
  });
}
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
  return (initialRequest, finalHandlerFn) => runInInjectionContext(injector, () => interceptorFn(initialRequest, (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)));
}
function legacyInterceptorFnFactory() {
  let chain = null;
  return (req, handler) => {
    if (chain === null) {
      const interceptors = inject(HTTP_INTERCEPTORS, { optional: true }) ?? [];
      chain = interceptors.reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
    }
    const pendingTasks = inject(PendingTasks);
    const contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
    if (contributeToStability) {
      const removeTask = pendingTasks.add();
      return chain(req, handler).pipe(finalize(removeTask));
    } else {
      return chain(req, handler);
    }
  };
}
function jsonpCallbackContext() {
  if (typeof window === "object") {
    return window;
  }
  return {};
}
function jsonpInterceptorFn(req, next) {
  if (req.method === "JSONP") {
    return inject(JsonpClientBackend).handle(req);
  }
  return next(req);
}
function getResponseUrl(xhr) {
  if ("responseURL" in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }
  if (X_REQUEST_URL_REGEXP.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader(X_REQUEST_URL_HEADER);
  }
  return null;
}
function validateXhrCompatibility(req) {
  const unsupportedOptions = [
    {
      property: "keepalive",
      errorCode: 2813
    },
    {
      property: "cache",
      errorCode: 2814
    },
    {
      property: "priority",
      errorCode: 2815
    },
    {
      property: "mode",
      errorCode: 2816
    },
    {
      property: "redirect",
      errorCode: 2817
    },
    {
      property: "credentials",
      errorCode: 2818
    }
  ];
  for (const { property, errorCode } of unsupportedOptions) {
    if (property in req) {
      console.warn(formatRuntimeError(errorCode, `Angular detected that a \`HttpClient\` request with the \`${property}\` option was sent using XHR, which does not support it. To use the \`${property}\` option, enable Fetch API support by passing \`withFetch()\` as an argument to \`provideHttpClient()\`.`));
    }
  }
}
function xsrfInterceptorFn(req, next) {
  const lcUrl = req.url.toLowerCase();
  if (!inject(XSRF_ENABLED) || req.method === "GET" || req.method === "HEAD" || lcUrl.startsWith("http://") || lcUrl.startsWith("https://")) {
    return next(req);
  }
  const token = inject(HttpXsrfTokenExtractor).getToken();
  const headerName = inject(XSRF_HEADER_NAME);
  if (token != null && !req.headers.has(headerName)) {
    req = req.clone({ headers: req.headers.set(headerName, token) });
  }
  return next(req);
}
function makeHttpFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
function provideHttpClient(...features) {
  if (ngDevMode) {
    const featureKinds = new Set(features.map((f) => f.\u0275kind));
    if (featureKinds.has(HttpFeatureKind.NoXsrfProtection) && featureKinds.has(HttpFeatureKind.CustomXsrfConfiguration)) {
      throw new Error(ngDevMode ? `Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.` : "");
    }
  }
  const providers = [
    HttpClient,
    HttpXhrBackend,
    HttpInterceptorHandler,
    { provide: HttpHandler, useExisting: HttpInterceptorHandler },
    {
      provide: HttpBackend,
      useFactory: () => {
        return inject(FETCH_BACKEND, { optional: true }) ?? inject(HttpXhrBackend);
      }
    },
    {
      provide: HTTP_INTERCEPTOR_FNS,
      useValue: xsrfInterceptorFn,
      multi: true
    },
    { provide: XSRF_ENABLED, useValue: true },
    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor }
  ];
  for (const feature of features) {
    providers.push(...feature.\u0275providers);
  }
  return makeEnvironmentProviders(providers);
}
function withInterceptorsFromDi() {
  return makeHttpFeature(HttpFeatureKind.LegacyInterceptors, [
    {
      provide: LEGACY_INTERCEPTOR_FN,
      useFactory: legacyInterceptorFnFactory
    },
    {
      provide: HTTP_INTERCEPTOR_FNS,
      useExisting: LEGACY_INTERCEPTOR_FN,
      multi: true
    }
  ]);
}
function withXsrfConfiguration({ cookieName, headerName }) {
  const providers = [];
  if (cookieName !== void 0) {
    providers.push({ provide: XSRF_COOKIE_NAME, useValue: cookieName });
  }
  if (headerName !== void 0) {
    providers.push({ provide: XSRF_HEADER_NAME, useValue: headerName });
  }
  return makeHttpFeature(HttpFeatureKind.CustomXsrfConfiguration, providers);
}
function withNoXsrfProtection() {
  return makeHttpFeature(HttpFeatureKind.NoXsrfProtection, [
    {
      provide: XSRF_ENABLED,
      useValue: false
    }
  ]);
}
function withJsonpSupport() {
  return makeHttpFeature(HttpFeatureKind.JsonpSupport, [
    JsonpClientBackend,
    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
    { provide: HTTP_INTERCEPTOR_FNS, useValue: jsonpInterceptorFn, multi: true }
  ]);
}
var HttpHandler, HttpBackend, HttpHeaders, HttpUrlEncodingCodec, STANDARD_ENCODING_REGEX, STANDARD_ENCODING_REPLACEMENTS, HttpParams, HttpContext, CONTENT_TYPE_HEADER, ACCEPT_HEADER, X_REQUEST_URL_HEADER, TEXT_CONTENT_TYPE, JSON_CONTENT_TYPE, ACCEPT_HEADER_VALUE, HttpRequest, HttpEventType, HttpResponseBase, HttpHeaderResponse, HttpResponse, HttpErrorResponse, HTTP_STATUS_CODE_OK, HTTP_STATUS_CODE_NO_CONTENT, HttpStatusCode, HttpClient, XSSI_PREFIX$1, FETCH_BACKEND, FetchBackend, FetchFactory, HTTP_INTERCEPTORS, HTTP_INTERCEPTOR_FNS, HTTP_ROOT_INTERCEPTOR_FNS, REQUESTS_CONTRIBUTE_TO_STABILITY, fetchBackendWarningDisplayed, HttpInterceptorHandler, nextRequestId, foreignDocument, JSONP_ERR_NO_CALLBACK, JSONP_ERR_WRONG_METHOD, JSONP_ERR_WRONG_RESPONSE_TYPE, JSONP_ERR_HEADERS_NOT_SUPPORTED, JsonpCallbackContext, JsonpClientBackend, JsonpInterceptor, XSSI_PREFIX, X_REQUEST_URL_REGEXP, HttpXhrBackend, XSRF_ENABLED, XSRF_DEFAULT_COOKIE_NAME, XSRF_COOKIE_NAME, XSRF_DEFAULT_HEADER_NAME, XSRF_HEADER_NAME, HttpXsrfTokenExtractor, HttpXsrfCookieExtractor, HttpXsrfInterceptor, HttpFeatureKind, LEGACY_INTERCEPTOR_FN, HttpClientXsrfModule, HttpClientModule, HttpClientJsonpModule;
var init_module = __esm({
  "node_modules/@angular/common/fesm2022/module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_operators();
    init_esm();
    init_xhr();
    HttpHandler = class {
    };
    HttpBackend = class {
    };
    HttpHeaders = class _HttpHeaders {
      /**
       * Internal map of lowercase header names to values.
       */
      headers;
      /**
       * Internal map of lowercased header names to the normalized
       * form of the name (the form seen first).
       */
      normalizedNames = /* @__PURE__ */ new Map();
      /**
       * Complete the lazy initialization of this object (needed before reading).
       */
      lazyInit;
      /**
       * Queued updates to be materialized the next initialization.
       */
      lazyUpdate = null;
      /**  Constructs a new HTTP header object with the given values.*/
      constructor(headers) {
        if (!headers) {
          this.headers = /* @__PURE__ */ new Map();
        } else if (typeof headers === "string") {
          this.lazyInit = () => {
            this.headers = /* @__PURE__ */ new Map();
            headers.split("\n").forEach((line) => {
              const index = line.indexOf(":");
              if (index > 0) {
                const name2 = line.slice(0, index);
                const value = line.slice(index + 1).trim();
                this.addHeaderEntry(name2, value);
              }
            });
          };
        } else if (typeof Headers !== "undefined" && headers instanceof Headers) {
          this.headers = /* @__PURE__ */ new Map();
          headers.forEach((value, name2) => {
            this.addHeaderEntry(name2, value);
          });
        } else {
          this.lazyInit = () => {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              assertValidHeaders(headers);
            }
            this.headers = /* @__PURE__ */ new Map();
            Object.entries(headers).forEach(([name2, values]) => {
              this.setHeaderEntries(name2, values);
            });
          };
        }
      }
      /**
       * Checks for existence of a given header.
       *
       * @param name The header name to check for existence.
       *
       * @returns True if the header exists, false otherwise.
       */
      has(name2) {
        this.init();
        return this.headers.has(name2.toLowerCase());
      }
      /**
       * Retrieves the first value of a given header.
       *
       * @param name The header name.
       *
       * @returns The value string if the header exists, null otherwise
       */
      get(name2) {
        this.init();
        const values = this.headers.get(name2.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
      }
      /**
       * Retrieves the names of the headers.
       *
       * @returns A list of header names.
       */
      keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
      }
      /**
       * Retrieves a list of values for a given header.
       *
       * @param name The header name from which to retrieve values.
       *
       * @returns A string of values if the header exists, null otherwise.
       */
      getAll(name2) {
        this.init();
        return this.headers.get(name2.toLowerCase()) || null;
      }
      /**
       * Appends a new value to the existing set of values for a header
       * and returns them in a clone of the original instance.
       *
       * @param name The header name for which to append the values.
       * @param value The value to append.
       *
       * @returns A clone of the HTTP headers object with the value appended to the given header.
       */
      append(name2, value) {
        return this.clone({ name: name2, value, op: "a" });
      }
      /**
       * Sets or modifies a value for a given header in a clone of the original instance.
       * If the header already exists, its value is replaced with the given value
       * in the returned object.
       *
       * @param name The header name.
       * @param value The value or values to set or override for the given header.
       *
       * @returns A clone of the HTTP headers object with the newly set header value.
       */
      set(name2, value) {
        return this.clone({ name: name2, value, op: "s" });
      }
      /**
       * Deletes values for a given header in a clone of the original instance.
       *
       * @param name The header name.
       * @param value The value or values to delete for the given header.
       *
       * @returns A clone of the HTTP headers object with the given value deleted.
       */
      delete(name2, value) {
        return this.clone({ name: name2, value, op: "d" });
      }
      maybeSetNormalizedName(name2, lcName) {
        if (!this.normalizedNames.has(lcName)) {
          this.normalizedNames.set(lcName, name2);
        }
      }
      init() {
        if (!!this.lazyInit) {
          if (this.lazyInit instanceof _HttpHeaders) {
            this.copyFrom(this.lazyInit);
          } else {
            this.lazyInit();
          }
          this.lazyInit = null;
          if (!!this.lazyUpdate) {
            this.lazyUpdate.forEach((update) => this.applyUpdate(update));
            this.lazyUpdate = null;
          }
        }
      }
      copyFrom(other) {
        other.init();
        Array.from(other.headers.keys()).forEach((key) => {
          this.headers.set(key, other.headers.get(key));
          this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
      }
      clone(update) {
        const clone = new _HttpHeaders();
        clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof _HttpHeaders ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
      }
      applyUpdate(update) {
        const key = update.name.toLowerCase();
        switch (update.op) {
          case "a":
          case "s":
            let value = update.value;
            if (typeof value === "string") {
              value = [value];
            }
            if (value.length === 0) {
              return;
            }
            this.maybeSetNormalizedName(update.name, key);
            const base = (update.op === "a" ? this.headers.get(key) : void 0) || [];
            base.push(...value);
            this.headers.set(key, base);
            break;
          case "d":
            const toDelete = update.value;
            if (!toDelete) {
              this.headers.delete(key);
              this.normalizedNames.delete(key);
            } else {
              let existing = this.headers.get(key);
              if (!existing) {
                return;
              }
              existing = existing.filter((value2) => toDelete.indexOf(value2) === -1);
              if (existing.length === 0) {
                this.headers.delete(key);
                this.normalizedNames.delete(key);
              } else {
                this.headers.set(key, existing);
              }
            }
            break;
        }
      }
      addHeaderEntry(name2, value) {
        const key = name2.toLowerCase();
        this.maybeSetNormalizedName(name2, key);
        if (this.headers.has(key)) {
          this.headers.get(key).push(value);
        } else {
          this.headers.set(key, [value]);
        }
      }
      setHeaderEntries(name2, values) {
        const headerValues = (Array.isArray(values) ? values : [values]).map((value) => value.toString());
        const key = name2.toLowerCase();
        this.headers.set(key, headerValues);
        this.maybeSetNormalizedName(name2, key);
      }
      /**
       * @internal
       */
      forEach(fn) {
        this.init();
        Array.from(this.normalizedNames.keys()).forEach((key) => fn(this.normalizedNames.get(key), this.headers.get(key)));
      }
    };
    HttpUrlEncodingCodec = class {
      /**
       * Encodes a key name for a URL parameter or query-string.
       * @param key The key name.
       * @returns The encoded key name.
       */
      encodeKey(key) {
        return standardEncoding(key);
      }
      /**
       * Encodes the value of a URL parameter or query-string.
       * @param value The value.
       * @returns The encoded value.
       */
      encodeValue(value) {
        return standardEncoding(value);
      }
      /**
       * Decodes an encoded URL parameter or query-string key.
       * @param key The encoded key name.
       * @returns The decoded key name.
       */
      decodeKey(key) {
        return decodeURIComponent(key);
      }
      /**
       * Decodes an encoded URL parameter or query-string value.
       * @param value The encoded value.
       * @returns The decoded value.
       */
      decodeValue(value) {
        return decodeURIComponent(value);
      }
    };
    STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
    STANDARD_ENCODING_REPLACEMENTS = {
      "40": "@",
      "3A": ":",
      "24": "$",
      "2C": ",",
      "3B": ";",
      "3D": "=",
      "3F": "?",
      "2F": "/"
    };
    HttpParams = class _HttpParams {
      map;
      encoder;
      updates = null;
      cloneFrom = null;
      constructor(options = {}) {
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (options.fromString) {
          if (options.fromObject) {
            throw new RuntimeError(2805, ngDevMode && "Cannot specify both fromString and fromObject.");
          }
          this.map = paramParser(options.fromString, this.encoder);
        } else if (!!options.fromObject) {
          this.map = /* @__PURE__ */ new Map();
          Object.keys(options.fromObject).forEach((key) => {
            const value = options.fromObject[key];
            const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
            this.map.set(key, values);
          });
        } else {
          this.map = null;
        }
      }
      /**
       * Reports whether the body includes one or more values for a given parameter.
       * @param param The parameter name.
       * @returns True if the parameter has one or more values,
       * false if it has no value or is not present.
       */
      has(param) {
        this.init();
        return this.map.has(param);
      }
      /**
       * Retrieves the first value for a parameter.
       * @param param The parameter name.
       * @returns The first value of the given parameter,
       * or `null` if the parameter is not present.
       */
      get(param) {
        this.init();
        const res = this.map.get(param);
        return !!res ? res[0] : null;
      }
      /**
       * Retrieves all values for a  parameter.
       * @param param The parameter name.
       * @returns All values in a string array,
       * or `null` if the parameter not present.
       */
      getAll(param) {
        this.init();
        return this.map.get(param) || null;
      }
      /**
       * Retrieves all the parameters for this body.
       * @returns The parameter names in a string array.
       */
      keys() {
        this.init();
        return Array.from(this.map.keys());
      }
      /**
       * Appends a new value to existing values for a parameter.
       * @param param The parameter name.
       * @param value The new value to add.
       * @return A new body with the appended value.
       */
      append(param, value) {
        return this.clone({ param, value, op: "a" });
      }
      /**
       * Constructs a new body with appended values for the given parameter name.
       * @param params parameters and values
       * @return A new body with the new value.
       */
      appendAll(params) {
        const updates = [];
        Object.keys(params).forEach((param) => {
          const value = params[param];
          if (Array.isArray(value)) {
            value.forEach((_value) => {
              updates.push({ param, value: _value, op: "a" });
            });
          } else {
            updates.push({ param, value, op: "a" });
          }
        });
        return this.clone(updates);
      }
      /**
       * Replaces the value for a parameter.
       * @param param The parameter name.
       * @param value The new value.
       * @return A new body with the new value.
       */
      set(param, value) {
        return this.clone({ param, value, op: "s" });
      }
      /**
       * Removes a given value or all values from a parameter.
       * @param param The parameter name.
       * @param value The value to remove, if provided.
       * @return A new body with the given value removed, or with all values
       * removed if no value is specified.
       */
      delete(param, value) {
        return this.clone({ param, value, op: "d" });
      }
      /**
       * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
       * separated by `&`s.
       */
      toString() {
        this.init();
        return this.keys().map((key) => {
          const eKey = this.encoder.encodeKey(key);
          return this.map.get(key).map((value) => eKey + "=" + this.encoder.encodeValue(value)).join("&");
        }).filter((param) => param !== "").join("&");
      }
      clone(update) {
        const clone = new _HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat(update);
        return clone;
      }
      init() {
        if (this.map === null) {
          this.map = /* @__PURE__ */ new Map();
        }
        if (this.cloneFrom !== null) {
          this.cloneFrom.init();
          this.cloneFrom.keys().forEach((key) => this.map.set(key, this.cloneFrom.map.get(key)));
          this.updates.forEach((update) => {
            switch (update.op) {
              case "a":
              case "s":
                const base = (update.op === "a" ? this.map.get(update.param) : void 0) || [];
                base.push(valueToString(update.value));
                this.map.set(update.param, base);
                break;
              case "d":
                if (update.value !== void 0) {
                  let base2 = this.map.get(update.param) || [];
                  const idx = base2.indexOf(valueToString(update.value));
                  if (idx !== -1) {
                    base2.splice(idx, 1);
                  }
                  if (base2.length > 0) {
                    this.map.set(update.param, base2);
                  } else {
                    this.map.delete(update.param);
                  }
                } else {
                  this.map.delete(update.param);
                  break;
                }
            }
          });
          this.cloneFrom = this.updates = null;
        }
      }
    };
    HttpContext = class {
      map = /* @__PURE__ */ new Map();
      /**
       * Store a value in the context. If a value is already present it will be overwritten.
       *
       * @param token The reference to an instance of `HttpContextToken`.
       * @param value The value to store.
       *
       * @returns A reference to itself for easy chaining.
       */
      set(token, value) {
        this.map.set(token, value);
        return this;
      }
      /**
       * Retrieve the value associated with the given token.
       *
       * @param token The reference to an instance of `HttpContextToken`.
       *
       * @returns The stored value or default if one is defined.
       */
      get(token) {
        if (!this.map.has(token)) {
          this.map.set(token, token.defaultValue());
        }
        return this.map.get(token);
      }
      /**
       * Delete the value associated with the given token.
       *
       * @param token The reference to an instance of `HttpContextToken`.
       *
       * @returns A reference to itself for easy chaining.
       */
      delete(token) {
        this.map.delete(token);
        return this;
      }
      /**
       * Checks for existence of a given token.
       *
       * @param token The reference to an instance of `HttpContextToken`.
       *
       * @returns True if the token exists, false otherwise.
       */
      has(token) {
        return this.map.has(token);
      }
      /**
       * @returns a list of tokens currently stored in the context.
       */
      keys() {
        return this.map.keys();
      }
    };
    CONTENT_TYPE_HEADER = "Content-Type";
    ACCEPT_HEADER = "Accept";
    X_REQUEST_URL_HEADER = "X-Request-URL";
    TEXT_CONTENT_TYPE = "text/plain";
    JSON_CONTENT_TYPE = "application/json";
    ACCEPT_HEADER_VALUE = `${JSON_CONTENT_TYPE}, ${TEXT_CONTENT_TYPE}, */*`;
    HttpRequest = class _HttpRequest {
      url;
      /**
       * The request body, or `null` if one isn't set.
       *
       * Bodies are not enforced to be immutable, as they can include a reference to any
       * user-defined data type. However, interceptors should take care to preserve
       * idempotence by treating them as such.
       */
      body = null;
      /**
       * Outgoing headers for this request.
       */
      headers;
      /**
       * Shared and mutable context that can be used by interceptors
       */
      context;
      /**
       * Whether this request should be made in a way that exposes progress events.
       *
       * Progress events are expensive (change detection runs on each event) and so
       * they should only be requested if the consumer intends to monitor them.
       *
       * Note: The `FetchBackend` doesn't support progress report on uploads.
       */
      reportProgress = false;
      /**
       * Whether this request should be sent with outgoing credentials (cookies).
       */
      withCredentials = false;
      /**
       *  The credentials mode of the request, which determines how cookies and HTTP authentication are handled.
       *  This can affect whether cookies are sent with the request, and how authentication is handled.
       */
      credentials;
      /**
       * When using the fetch implementation and set to `true`, the browser will not abort the associated request if the page that initiated it is unloaded before the request is complete.
       */
      keepalive = false;
      /**
       * Controls how the request will interact with the browser's HTTP cache.
       * This affects whether a response is retrieved from the cache, how it is stored, or if it bypasses the cache altogether.
       */
      cache;
      /**
       * Indicates the relative priority of the request. This may be used by the browser to decide the order in which requests are dispatched and resources fetched.
       */
      priority;
      /**
       * The mode of the request, which determines how the request will interact with the browser's security model.
       * This can affect things like CORS (Cross-Origin Resource Sharing) and same-origin policies.
       */
      mode;
      /**
       * The redirect mode of the request, which determines how redirects are handled.
       * This can affect whether the request follows redirects automatically, or if it fails when a redirect occurs.
       */
      redirect;
      /**
       * The expected response type of the server.
       *
       * This is used to parse the response appropriately before returning it to
       * the requestee.
       */
      responseType = "json";
      /**
       * The outgoing HTTP request method.
       */
      method;
      /**
       * Outgoing URL parameters.
       *
       * To pass a string representation of HTTP parameters in the URL-query-string format,
       * the `HttpParamsOptions`' `fromString` may be used. For example:
       *
       * ```ts
       * new HttpParams({fromString: 'angular=awesome'})
       * ```
       */
      params;
      /**
       * The outgoing URL with all URL parameters set.
       */
      urlWithParams;
      /**
       * The HttpTransferCache option for the request
       */
      transferCache;
      /**
       * The timeout for the backend HTTP request in ms.
       */
      timeout;
      constructor(method, url, third, fourth) {
        this.url = url;
        this.method = method.toUpperCase();
        let options;
        if (mightHaveBody(this.method) || !!fourth) {
          this.body = third !== void 0 ? third : null;
          options = fourth;
        } else {
          options = third;
        }
        if (options) {
          this.reportProgress = !!options.reportProgress;
          this.withCredentials = !!options.withCredentials;
          this.keepalive = !!options.keepalive;
          if (!!options.responseType) {
            this.responseType = options.responseType;
          }
          if (options.headers) {
            this.headers = options.headers;
          }
          if (options.context) {
            this.context = options.context;
          }
          if (options.params) {
            this.params = options.params;
          }
          if (options.priority) {
            this.priority = options.priority;
          }
          if (options.cache) {
            this.cache = options.cache;
          }
          if (options.credentials) {
            this.credentials = options.credentials;
          }
          if (typeof options.timeout === "number") {
            if (options.timeout < 1 || !Number.isInteger(options.timeout)) {
              throw new Error(ngDevMode ? "`timeout` must be a positive integer value" : "");
            }
            this.timeout = options.timeout;
          }
          if (options.mode) {
            this.mode = options.mode;
          }
          if (options.redirect) {
            this.redirect = options.redirect;
          }
          this.transferCache = options.transferCache;
        }
        this.headers ??= new HttpHeaders();
        this.context ??= new HttpContext();
        if (!this.params) {
          this.params = new HttpParams();
          this.urlWithParams = url;
        } else {
          const params = this.params.toString();
          if (params.length === 0) {
            this.urlWithParams = url;
          } else {
            const qIdx = url.indexOf("?");
            const sep = qIdx === -1 ? "?" : qIdx < url.length - 1 ? "&" : "";
            this.urlWithParams = url + sep + params;
          }
        }
      }
      /**
       * Transform the free-form body into a serialized format suitable for
       * transmission to the server.
       */
      serializeBody() {
        if (this.body === null) {
          return null;
        }
        if (typeof this.body === "string" || isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body)) {
          return this.body;
        }
        if (this.body instanceof HttpParams) {
          return this.body.toString();
        }
        if (typeof this.body === "object" || typeof this.body === "boolean" || Array.isArray(this.body)) {
          return JSON.stringify(this.body);
        }
        return this.body.toString();
      }
      /**
       * Examine the body and attempt to infer an appropriate MIME type
       * for it.
       *
       * If no such type can be inferred, this method will return `null`.
       */
      detectContentTypeHeader() {
        if (this.body === null) {
          return null;
        }
        if (isFormData(this.body)) {
          return null;
        }
        if (isBlob(this.body)) {
          return this.body.type || null;
        }
        if (isArrayBuffer(this.body)) {
          return null;
        }
        if (typeof this.body === "string") {
          return TEXT_CONTENT_TYPE;
        }
        if (this.body instanceof HttpParams) {
          return "application/x-www-form-urlencoded;charset=UTF-8";
        }
        if (typeof this.body === "object" || typeof this.body === "number" || typeof this.body === "boolean") {
          return JSON_CONTENT_TYPE;
        }
        return null;
      }
      clone(update = {}) {
        const method = update.method || this.method;
        const url = update.url || this.url;
        const responseType = update.responseType || this.responseType;
        const keepalive = update.keepalive ?? this.keepalive;
        const priority = update.priority || this.priority;
        const cache = update.cache || this.cache;
        const mode = update.mode || this.mode;
        const redirect = update.redirect || this.redirect;
        const credentials = update.credentials || this.credentials;
        const transferCache = update.transferCache ?? this.transferCache;
        const timeout = update.timeout ?? this.timeout;
        const body = update.body !== void 0 ? update.body : this.body;
        const withCredentials = update.withCredentials ?? this.withCredentials;
        const reportProgress = update.reportProgress ?? this.reportProgress;
        let headers = update.headers || this.headers;
        let params = update.params || this.params;
        const context = update.context ?? this.context;
        if (update.setHeaders !== void 0) {
          headers = Object.keys(update.setHeaders).reduce((headers2, name2) => headers2.set(name2, update.setHeaders[name2]), headers);
        }
        if (update.setParams) {
          params = Object.keys(update.setParams).reduce((params2, param) => params2.set(param, update.setParams[param]), params);
        }
        return new _HttpRequest(method, url, body, {
          params,
          headers,
          context,
          reportProgress,
          responseType,
          withCredentials,
          transferCache,
          keepalive,
          cache,
          priority,
          timeout,
          mode,
          redirect,
          credentials
        });
      }
    };
    (function(HttpEventType2) {
      HttpEventType2[HttpEventType2["Sent"] = 0] = "Sent";
      HttpEventType2[HttpEventType2["UploadProgress"] = 1] = "UploadProgress";
      HttpEventType2[HttpEventType2["ResponseHeader"] = 2] = "ResponseHeader";
      HttpEventType2[HttpEventType2["DownloadProgress"] = 3] = "DownloadProgress";
      HttpEventType2[HttpEventType2["Response"] = 4] = "Response";
      HttpEventType2[HttpEventType2["User"] = 5] = "User";
    })(HttpEventType || (HttpEventType = {}));
    HttpResponseBase = class {
      /**
       * All response headers.
       */
      headers;
      /**
       * Response status code.
       */
      status;
      /**
       * Textual description of response status code, defaults to OK.
       *
       * Do not depend on this.
       */
      statusText;
      /**
       * URL of the resource retrieved, or null if not available.
       */
      url;
      /**
       * Whether the status code falls in the 2xx range.
       */
      ok;
      /**
       * Type of the response, narrowed to either the full response or the header.
       */
      type;
      /**
       * Super-constructor for all responses.
       *
       * The single parameter accepted is an initialization hash. Any properties
       * of the response passed there will override the default values.
       */
      constructor(init, defaultStatus = 200, defaultStatusText = "OK") {
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== void 0 ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        this.ok = this.status >= 200 && this.status < 300;
      }
    };
    HttpHeaderResponse = class _HttpHeaderResponse extends HttpResponseBase {
      /**
       * Create a new `HttpHeaderResponse` with the given parameters.
       */
      constructor(init = {}) {
        super(init);
      }
      type = HttpEventType.ResponseHeader;
      /**
       * Copy this `HttpHeaderResponse`, overriding its contents with the
       * given parameter hash.
       */
      clone(update = {}) {
        return new _HttpHeaderResponse({
          headers: update.headers || this.headers,
          status: update.status !== void 0 ? update.status : this.status,
          statusText: update.statusText || this.statusText,
          url: update.url || this.url || void 0
        });
      }
    };
    HttpResponse = class _HttpResponse extends HttpResponseBase {
      /**
       * The response body, or `null` if one was not returned.
       */
      body;
      /**
       * Construct a new `HttpResponse`.
       */
      constructor(init = {}) {
        super(init);
        this.body = init.body !== void 0 ? init.body : null;
      }
      type = HttpEventType.Response;
      clone(update = {}) {
        return new _HttpResponse({
          body: update.body !== void 0 ? update.body : this.body,
          headers: update.headers || this.headers,
          status: update.status !== void 0 ? update.status : this.status,
          statusText: update.statusText || this.statusText,
          url: update.url || this.url || void 0
        });
      }
    };
    HttpErrorResponse = class extends HttpResponseBase {
      name = "HttpErrorResponse";
      message;
      error;
      /**
       * Errors are never okay, even when the status code is in the 2xx success range.
       */
      ok = false;
      constructor(init) {
        super(init, 0, "Unknown Error");
        if (this.status >= 200 && this.status < 300) {
          this.message = `Http failure during parsing for ${init.url || "(unknown url)"}`;
        } else {
          this.message = `Http failure response for ${init.url || "(unknown url)"}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
      }
    };
    HTTP_STATUS_CODE_OK = 200;
    HTTP_STATUS_CODE_NO_CONTENT = 204;
    (function(HttpStatusCode2) {
      HttpStatusCode2[HttpStatusCode2["Continue"] = 100] = "Continue";
      HttpStatusCode2[HttpStatusCode2["SwitchingProtocols"] = 101] = "SwitchingProtocols";
      HttpStatusCode2[HttpStatusCode2["Processing"] = 102] = "Processing";
      HttpStatusCode2[HttpStatusCode2["EarlyHints"] = 103] = "EarlyHints";
      HttpStatusCode2[HttpStatusCode2["Ok"] = 200] = "Ok";
      HttpStatusCode2[HttpStatusCode2["Created"] = 201] = "Created";
      HttpStatusCode2[HttpStatusCode2["Accepted"] = 202] = "Accepted";
      HttpStatusCode2[HttpStatusCode2["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
      HttpStatusCode2[HttpStatusCode2["NoContent"] = 204] = "NoContent";
      HttpStatusCode2[HttpStatusCode2["ResetContent"] = 205] = "ResetContent";
      HttpStatusCode2[HttpStatusCode2["PartialContent"] = 206] = "PartialContent";
      HttpStatusCode2[HttpStatusCode2["MultiStatus"] = 207] = "MultiStatus";
      HttpStatusCode2[HttpStatusCode2["AlreadyReported"] = 208] = "AlreadyReported";
      HttpStatusCode2[HttpStatusCode2["ImUsed"] = 226] = "ImUsed";
      HttpStatusCode2[HttpStatusCode2["MultipleChoices"] = 300] = "MultipleChoices";
      HttpStatusCode2[HttpStatusCode2["MovedPermanently"] = 301] = "MovedPermanently";
      HttpStatusCode2[HttpStatusCode2["Found"] = 302] = "Found";
      HttpStatusCode2[HttpStatusCode2["SeeOther"] = 303] = "SeeOther";
      HttpStatusCode2[HttpStatusCode2["NotModified"] = 304] = "NotModified";
      HttpStatusCode2[HttpStatusCode2["UseProxy"] = 305] = "UseProxy";
      HttpStatusCode2[HttpStatusCode2["Unused"] = 306] = "Unused";
      HttpStatusCode2[HttpStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
      HttpStatusCode2[HttpStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
      HttpStatusCode2[HttpStatusCode2["BadRequest"] = 400] = "BadRequest";
      HttpStatusCode2[HttpStatusCode2["Unauthorized"] = 401] = "Unauthorized";
      HttpStatusCode2[HttpStatusCode2["PaymentRequired"] = 402] = "PaymentRequired";
      HttpStatusCode2[HttpStatusCode2["Forbidden"] = 403] = "Forbidden";
      HttpStatusCode2[HttpStatusCode2["NotFound"] = 404] = "NotFound";
      HttpStatusCode2[HttpStatusCode2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
      HttpStatusCode2[HttpStatusCode2["NotAcceptable"] = 406] = "NotAcceptable";
      HttpStatusCode2[HttpStatusCode2["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
      HttpStatusCode2[HttpStatusCode2["RequestTimeout"] = 408] = "RequestTimeout";
      HttpStatusCode2[HttpStatusCode2["Conflict"] = 409] = "Conflict";
      HttpStatusCode2[HttpStatusCode2["Gone"] = 410] = "Gone";
      HttpStatusCode2[HttpStatusCode2["LengthRequired"] = 411] = "LengthRequired";
      HttpStatusCode2[HttpStatusCode2["PreconditionFailed"] = 412] = "PreconditionFailed";
      HttpStatusCode2[HttpStatusCode2["PayloadTooLarge"] = 413] = "PayloadTooLarge";
      HttpStatusCode2[HttpStatusCode2["UriTooLong"] = 414] = "UriTooLong";
      HttpStatusCode2[HttpStatusCode2["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
      HttpStatusCode2[HttpStatusCode2["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
      HttpStatusCode2[HttpStatusCode2["ExpectationFailed"] = 417] = "ExpectationFailed";
      HttpStatusCode2[HttpStatusCode2["ImATeapot"] = 418] = "ImATeapot";
      HttpStatusCode2[HttpStatusCode2["MisdirectedRequest"] = 421] = "MisdirectedRequest";
      HttpStatusCode2[HttpStatusCode2["UnprocessableEntity"] = 422] = "UnprocessableEntity";
      HttpStatusCode2[HttpStatusCode2["Locked"] = 423] = "Locked";
      HttpStatusCode2[HttpStatusCode2["FailedDependency"] = 424] = "FailedDependency";
      HttpStatusCode2[HttpStatusCode2["TooEarly"] = 425] = "TooEarly";
      HttpStatusCode2[HttpStatusCode2["UpgradeRequired"] = 426] = "UpgradeRequired";
      HttpStatusCode2[HttpStatusCode2["PreconditionRequired"] = 428] = "PreconditionRequired";
      HttpStatusCode2[HttpStatusCode2["TooManyRequests"] = 429] = "TooManyRequests";
      HttpStatusCode2[HttpStatusCode2["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
      HttpStatusCode2[HttpStatusCode2["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
      HttpStatusCode2[HttpStatusCode2["InternalServerError"] = 500] = "InternalServerError";
      HttpStatusCode2[HttpStatusCode2["NotImplemented"] = 501] = "NotImplemented";
      HttpStatusCode2[HttpStatusCode2["BadGateway"] = 502] = "BadGateway";
      HttpStatusCode2[HttpStatusCode2["ServiceUnavailable"] = 503] = "ServiceUnavailable";
      HttpStatusCode2[HttpStatusCode2["GatewayTimeout"] = 504] = "GatewayTimeout";
      HttpStatusCode2[HttpStatusCode2["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
      HttpStatusCode2[HttpStatusCode2["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
      HttpStatusCode2[HttpStatusCode2["InsufficientStorage"] = 507] = "InsufficientStorage";
      HttpStatusCode2[HttpStatusCode2["LoopDetected"] = 508] = "LoopDetected";
      HttpStatusCode2[HttpStatusCode2["NotExtended"] = 510] = "NotExtended";
      HttpStatusCode2[HttpStatusCode2["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
    })(HttpStatusCode || (HttpStatusCode = {}));
    HttpClient = class _HttpClient {
      handler;
      constructor(handler) {
        this.handler = handler;
      }
      /**
       * Constructs an observable for a generic HTTP request that, when subscribed,
       * fires the request through the chain of registered interceptors and on to the
       * server.
       *
       * You can pass an `HttpRequest` directly as the only parameter. In this case,
       * the call returns an observable of the raw `HttpEvent` stream.
       *
       * Alternatively you can pass an HTTP method as the first parameter,
       * a URL string as the second, and an options hash containing the request body as the third.
       * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
       * type of returned observable.
       *   * The `responseType` value determines how a successful response body is parsed.
       *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
       * object as a type parameter to the call.
       *
       * The `observe` value determines the return type, according to what you are interested in
       * observing.
       *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
       * progress events by default.
       *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
       * where the `T` parameter depends on the `responseType` and any optionally provided type
       * parameter.
       *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
       *
       */
      request(first, url, options = {}) {
        let req;
        if (first instanceof HttpRequest) {
          req = first;
        } else {
          let headers = void 0;
          if (options.headers instanceof HttpHeaders) {
            headers = options.headers;
          } else {
            headers = new HttpHeaders(options.headers);
          }
          let params = void 0;
          if (!!options.params) {
            if (options.params instanceof HttpParams) {
              params = options.params;
            } else {
              params = new HttpParams({ fromObject: options.params });
            }
          }
          req = new HttpRequest(first, url, options.body !== void 0 ? options.body : null, {
            headers,
            context: options.context,
            params,
            reportProgress: options.reportProgress,
            // By default, JSON is assumed to be returned for all calls.
            responseType: options.responseType || "json",
            withCredentials: options.withCredentials,
            transferCache: options.transferCache,
            keepalive: options.keepalive,
            priority: options.priority,
            cache: options.cache,
            mode: options.mode,
            redirect: options.redirect,
            credentials: options.credentials
          });
        }
        const events$ = of(req).pipe(concatMap((req2) => this.handler.handle(req2)));
        if (first instanceof HttpRequest || options.observe === "events") {
          return events$;
        }
        const res$ = events$.pipe(filter((event) => event instanceof HttpResponse));
        switch (options.observe || "body") {
          case "body":
            switch (req.responseType) {
              case "arraybuffer":
                return res$.pipe(map((res) => {
                  if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                    throw new RuntimeError(2806, ngDevMode && "Response is not an ArrayBuffer.");
                  }
                  return res.body;
                }));
              case "blob":
                return res$.pipe(map((res) => {
                  if (res.body !== null && !(res.body instanceof Blob)) {
                    throw new RuntimeError(2807, ngDevMode && "Response is not a Blob.");
                  }
                  return res.body;
                }));
              case "text":
                return res$.pipe(map((res) => {
                  if (res.body !== null && typeof res.body !== "string") {
                    throw new RuntimeError(2808, ngDevMode && "Response is not a string.");
                  }
                  return res.body;
                }));
              case "json":
              default:
                return res$.pipe(map((res) => res.body));
            }
          case "response":
            return res$;
          default:
            throw new RuntimeError(2809, ngDevMode && `Unreachable: unhandled observe type ${options.observe}}`);
        }
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `DELETE` request to execute on the server. See the individual overloads for
       * details on the return type.
       *
       * @param url     The endpoint URL.
       * @param options The HTTP options to send with the request.
       *
       */
      delete(url, options = {}) {
        return this.request("DELETE", url, options);
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `GET` request to execute on the server. See the individual overloads for
       * details on the return type.
       */
      get(url, options = {}) {
        return this.request("GET", url, options);
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `HEAD` request to execute on the server. The `HEAD` method returns
       * meta information about the resource without transferring the
       * resource itself. See the individual overloads for
       * details on the return type.
       */
      head(url, options = {}) {
        return this.request("HEAD", url, options);
      }
      /**
       * Constructs an `Observable` that, when subscribed, causes a request with the special method
       * `JSONP` to be dispatched via the interceptor pipeline.
       * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
       * API endpoints that don't support newer,
       * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
       * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
       * requests even if the API endpoint is not located on the same domain (origin) as the client-side
       * application making the request.
       * The endpoint API must support JSONP callback for JSONP requests to work.
       * The resource API returns the JSON response wrapped in a callback function.
       * You can pass the callback function name as one of the query parameters.
       * Note that JSONP requests can only be used with `GET` requests.
       *
       * @param url The resource URL.
       * @param callbackParam The callback function name.
       *
       */
      jsonp(url, callbackParam) {
        return this.request("JSONP", url, {
          params: new HttpParams().append(callbackParam, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json"
        });
      }
      /**
       * Constructs an `Observable` that, when subscribed, causes the configured
       * `OPTIONS` request to execute on the server. This method allows the client
       * to determine the supported HTTP methods and other capabilities of an endpoint,
       * without implying a resource action. See the individual overloads for
       * details on the return type.
       */
      options(url, options = {}) {
        return this.request("OPTIONS", url, options);
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `PATCH` request to execute on the server. See the individual overloads for
       * details on the return type.
       */
      patch(url, body, options = {}) {
        return this.request("PATCH", url, addBody(options, body));
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `POST` request to execute on the server. The server responds with the location of
       * the replaced resource. See the individual overloads for
       * details on the return type.
       */
      post(url, body, options = {}) {
        return this.request("POST", url, addBody(options, body));
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
       * with a new set of values.
       * See the individual overloads for details on the return type.
       */
      put(url, body, options = {}) {
        return this.request("PUT", url, addBody(options, body));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpClient, deps: [{ token: HttpHandler }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpClient });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: HttpClient, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: HttpHandler }] });
    XSSI_PREFIX$1 = /^\)\]\}',?\n/;
    FETCH_BACKEND = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "FETCH_BACKEND" : "");
    FetchBackend = class _FetchBackend {
      // We use an arrow function to always reference the current global implementation of `fetch`.
      // This is helpful for cases when the global `fetch` implementation is modified by external code,
      // see https://github.com/angular/angular/issues/57527.
      fetchImpl = inject(FetchFactory, { optional: true })?.fetch ?? ((...args) => globalThis.fetch(...args));
      ngZone = inject(NgZone);
      destroyRef = inject(DestroyRef);
      destroyed = false;
      constructor() {
        this.destroyRef.onDestroy(() => {
          this.destroyed = true;
        });
      }
      handle(request) {
        return new Observable((observer) => {
          const aborter = new AbortController();
          this.doRequest(request, aborter.signal, observer).then(noop, (error2) => observer.error(new HttpErrorResponse({ error: error2 })));
          let timeoutId;
          if (request.timeout) {
            timeoutId = this.ngZone.runOutsideAngular(() => setTimeout(() => {
              if (!aborter.signal.aborted) {
                aborter.abort(new DOMException("signal timed out", "TimeoutError"));
              }
            }, request.timeout));
          }
          return () => {
            if (timeoutId !== void 0) {
              clearTimeout(timeoutId);
            }
            aborter.abort();
          };
        });
      }
      doRequest(request, signal2, observer) {
        return __async(this, null, function* () {
          const init = this.createRequestInit(request);
          let response;
          try {
            const fetchPromise = this.ngZone.runOutsideAngular(() => this.fetchImpl(request.urlWithParams, __spreadValues({ signal: signal2 }, init)));
            silenceSuperfluousUnhandledPromiseRejection(fetchPromise);
            observer.next({ type: HttpEventType.Sent });
            response = yield fetchPromise;
          } catch (error2) {
            observer.error(new HttpErrorResponse({
              error: error2,
              status: error2.status ?? 0,
              statusText: error2.statusText,
              url: request.urlWithParams,
              headers: error2.headers
            }));
            return;
          }
          const headers = new HttpHeaders(response.headers);
          const statusText = response.statusText;
          const url = getResponseUrl$1(response) ?? request.urlWithParams;
          let status = response.status;
          let body = null;
          if (request.reportProgress) {
            observer.next(new HttpHeaderResponse({ headers, status, statusText, url }));
          }
          if (response.body) {
            const contentLength = response.headers.get("content-length");
            const chunks = [];
            const reader = response.body.getReader();
            let receivedLength = 0;
            let decoder;
            let partialText;
            const reqZone = typeof Zone !== "undefined" && Zone.current;
            let canceled = false;
            yield this.ngZone.runOutsideAngular(() => __async(this, null, function* () {
              while (true) {
                if (this.destroyed) {
                  yield reader.cancel();
                  canceled = true;
                  break;
                }
                const { done, value } = yield reader.read();
                if (done) {
                  break;
                }
                chunks.push(value);
                receivedLength += value.length;
                if (request.reportProgress) {
                  partialText = request.responseType === "text" ? (partialText ?? "") + (decoder ??= new TextDecoder()).decode(value, { stream: true }) : void 0;
                  const reportProgress = () => observer.next({
                    type: HttpEventType.DownloadProgress,
                    total: contentLength ? +contentLength : void 0,
                    loaded: receivedLength,
                    partialText
                  });
                  reqZone ? reqZone.run(reportProgress) : reportProgress();
                }
              }
            }));
            if (canceled) {
              observer.complete();
              return;
            }
            const chunksAll = this.concatChunks(chunks, receivedLength);
            try {
              const contentType = response.headers.get(CONTENT_TYPE_HEADER) ?? "";
              body = this.parseBody(request, chunksAll, contentType);
            } catch (error2) {
              observer.error(new HttpErrorResponse({
                error: error2,
                headers: new HttpHeaders(response.headers),
                status: response.status,
                statusText: response.statusText,
                url: getResponseUrl$1(response) ?? request.urlWithParams
              }));
              return;
            }
          }
          if (status === 0) {
            status = body ? HTTP_STATUS_CODE_OK : 0;
          }
          const ok = status >= 200 && status < 300;
          if (ok) {
            observer.next(new HttpResponse({
              body,
              headers,
              status,
              statusText,
              url
            }));
            observer.complete();
          } else {
            observer.error(new HttpErrorResponse({
              error: body,
              headers,
              status,
              statusText,
              url
            }));
          }
        });
      }
      parseBody(request, binContent, contentType) {
        switch (request.responseType) {
          case "json":
            const text = new TextDecoder().decode(binContent).replace(XSSI_PREFIX$1, "");
            return text === "" ? null : JSON.parse(text);
          case "text":
            return new TextDecoder().decode(binContent);
          case "blob":
            return new Blob([binContent], { type: contentType });
          case "arraybuffer":
            return binContent.buffer;
        }
      }
      createRequestInit(req) {
        const headers = {};
        let credentials;
        credentials = req.credentials;
        if (req.withCredentials) {
          (typeof ngDevMode === "undefined" || ngDevMode) && warningOptionsMessage(req);
          credentials = "include";
        }
        req.headers.forEach((name2, values) => headers[name2] = values.join(","));
        if (!req.headers.has(ACCEPT_HEADER)) {
          headers[ACCEPT_HEADER] = ACCEPT_HEADER_VALUE;
        }
        if (!req.headers.has(CONTENT_TYPE_HEADER)) {
          const detectedType = req.detectContentTypeHeader();
          if (detectedType !== null) {
            headers[CONTENT_TYPE_HEADER] = detectedType;
          }
        }
        return {
          body: req.serializeBody(),
          method: req.method,
          headers,
          credentials,
          keepalive: req.keepalive,
          cache: req.cache,
          priority: req.priority,
          mode: req.mode,
          redirect: req.redirect
        };
      }
      concatChunks(chunks, totalLength) {
        const chunksAll = new Uint8Array(totalLength);
        let position = 0;
        for (const chunk of chunks) {
          chunksAll.set(chunk, position);
          position += chunk.length;
        }
        return chunksAll;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _FetchBackend, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _FetchBackend });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: FetchBackend, decorators: [{
      type: Injectable
    }], ctorParameters: () => [] });
    FetchFactory = class {
    };
    HTTP_INTERCEPTORS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTORS" : "");
    HTTP_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTOR_FNS" : "");
    HTTP_ROOT_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_ROOT_INTERCEPTOR_FNS" : "");
    REQUESTS_CONTRIBUTE_TO_STABILITY = new InjectionToken(ngDevMode ? "REQUESTS_CONTRIBUTE_TO_STABILITY" : "", { providedIn: "root", factory: () => true });
    fetchBackendWarningDisplayed = false;
    HttpInterceptorHandler = class _HttpInterceptorHandler extends HttpHandler {
      backend;
      injector;
      chain = null;
      pendingTasks = inject(PendingTasks);
      contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
      constructor(backend, injector) {
        super();
        this.backend = backend;
        this.injector = injector;
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !fetchBackendWarningDisplayed) {
          const isTestingBackend = this.backend.isTestingBackend;
          if (false) {
            fetchBackendWarningDisplayed = true;
            injector.get(Console).warn(formatRuntimeError(2801, "Angular detected that `HttpClient` is not configured to use `fetch` APIs. It's strongly recommended to enable `fetch` for applications that use Server-Side Rendering for better performance and compatibility. To enable `fetch`, add the `withFetch()` to the `provideHttpClient()` call at the root of the application."));
          }
        }
      }
      handle(initialRequest) {
        if (this.chain === null) {
          const dedupedInterceptorFns = Array.from(/* @__PURE__ */ new Set([
            ...this.injector.get(HTTP_INTERCEPTOR_FNS),
            ...this.injector.get(HTTP_ROOT_INTERCEPTOR_FNS, [])
          ]));
          this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
        }
        if (this.contributeToStability) {
          const removeTask = this.pendingTasks.add();
          return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest)).pipe(finalize(removeTask));
        } else {
          return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest));
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpInterceptorHandler, deps: [{ token: HttpBackend }, { token: EnvironmentInjector }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpInterceptorHandler });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: HttpInterceptorHandler, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: HttpBackend }, { type: EnvironmentInjector }] });
    nextRequestId = 0;
    JSONP_ERR_NO_CALLBACK = "JSONP injected script did not invoke callback.";
    JSONP_ERR_WRONG_METHOD = "JSONP requests must use JSONP request method.";
    JSONP_ERR_WRONG_RESPONSE_TYPE = "JSONP requests must use Json response type.";
    JSONP_ERR_HEADERS_NOT_SUPPORTED = "JSONP requests do not support headers.";
    JsonpCallbackContext = class {
    };
    JsonpClientBackend = class _JsonpClientBackend {
      callbackMap;
      document;
      /**
       * A resolved promise that can be used to schedule microtasks in the event handlers.
       */
      resolvedPromise = Promise.resolve();
      constructor(callbackMap, document2) {
        this.callbackMap = callbackMap;
        this.document = document2;
      }
      /**
       * Get the name of the next callback method, by incrementing the global `nextRequestId`.
       */
      nextCallback() {
        return `ng_jsonp_callback_${nextRequestId++}`;
      }
      /**
       * Processes a JSONP request and returns an event stream of the results.
       * @param req The request object.
       * @returns An observable of the response events.
       *
       */
      handle(req) {
        if (req.method !== "JSONP") {
          throw new RuntimeError(2810, ngDevMode && JSONP_ERR_WRONG_METHOD);
        } else if (req.responseType !== "json") {
          throw new RuntimeError(2811, ngDevMode && JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        if (req.headers.keys().length > 0) {
          throw new RuntimeError(2812, ngDevMode && JSONP_ERR_HEADERS_NOT_SUPPORTED);
        }
        return new Observable((observer) => {
          const callback = this.nextCallback();
          const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
          const node = this.document.createElement("script");
          node.src = url;
          let body = null;
          let finished = false;
          this.callbackMap[callback] = (data) => {
            delete this.callbackMap[callback];
            body = data;
            finished = true;
          };
          const cleanup = () => {
            node.removeEventListener("load", onLoad);
            node.removeEventListener("error", onError);
            node.remove();
            delete this.callbackMap[callback];
          };
          const onLoad = () => {
            this.resolvedPromise.then(() => {
              cleanup();
              if (!finished) {
                observer.error(new HttpErrorResponse({
                  url,
                  status: 0,
                  statusText: "JSONP Error",
                  error: new Error(JSONP_ERR_NO_CALLBACK)
                }));
                return;
              }
              observer.next(new HttpResponse({
                body,
                status: HTTP_STATUS_CODE_OK,
                statusText: "OK",
                url
              }));
              observer.complete();
            });
          };
          const onError = (error2) => {
            cleanup();
            observer.error(new HttpErrorResponse({
              error: error2,
              status: 0,
              statusText: "JSONP Error",
              url
            }));
          };
          node.addEventListener("load", onLoad);
          node.addEventListener("error", onError);
          this.document.body.appendChild(node);
          observer.next({ type: HttpEventType.Sent });
          return () => {
            if (!finished) {
              this.removeListeners(node);
            }
            cleanup();
          };
        });
      }
      removeListeners(script) {
        foreignDocument ??= this.document.implementation.createHTMLDocument();
        foreignDocument.adoptNode(script);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _JsonpClientBackend, deps: [{ token: JsonpCallbackContext }, { token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _JsonpClientBackend });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: JsonpClientBackend, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: JsonpCallbackContext }, { type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    JsonpInterceptor = class _JsonpInterceptor {
      injector;
      constructor(injector) {
        this.injector = injector;
      }
      /**
       * Identifies and handles a given JSONP request.
       * @param initialRequest The outgoing request object to handle.
       * @param next The next interceptor in the chain, or the backend
       * if no interceptors remain in the chain.
       * @returns An observable of the event stream.
       */
      intercept(initialRequest, next) {
        return runInInjectionContext(this.injector, () => jsonpInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _JsonpInterceptor, deps: [{ token: EnvironmentInjector }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _JsonpInterceptor });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: JsonpInterceptor, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: EnvironmentInjector }] });
    XSSI_PREFIX = /^\)\]\}',?\n/;
    X_REQUEST_URL_REGEXP = RegExp(`^${X_REQUEST_URL_HEADER}:`, "m");
    HttpXhrBackend = class _HttpXhrBackend {
      xhrFactory;
      constructor(xhrFactory) {
        this.xhrFactory = xhrFactory;
      }
      /**
       * Processes a request and returns a stream of response events.
       * @param req The request object.
       * @returns An observable of the response events.
       */
      handle(req) {
        if (req.method === "JSONP") {
          throw new RuntimeError(-2800, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot make a JSONP request without JSONP support. To fix the problem, either add the \`withJsonpSupport()\` call (if \`provideHttpClient()\` is used) or import the \`HttpClientJsonpModule\` in the root NgModule.`);
        }
        ngDevMode && validateXhrCompatibility(req);
        const xhrFactory = this.xhrFactory;
        const source = (
          // Note that `ɵloadImpl` is never defined in client bundles and can be
          // safely dropped whenever we're running in the browser.
          // This branching is redundant.
          // The `ngServerMode` guard also enables tree-shaking of the `from()`
          // function from the common bundle, as it's only used in server code.
          false ? from(xhrFactory.\u0275loadImpl()) : of(null)
        );
        return source.pipe(switchMap(() => {
          return new Observable((observer) => {
            const xhr = xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (req.withCredentials) {
              xhr.withCredentials = true;
            }
            req.headers.forEach((name2, values) => xhr.setRequestHeader(name2, values.join(",")));
            if (!req.headers.has(ACCEPT_HEADER)) {
              xhr.setRequestHeader(ACCEPT_HEADER, ACCEPT_HEADER_VALUE);
            }
            if (!req.headers.has(CONTENT_TYPE_HEADER)) {
              const detectedType = req.detectContentTypeHeader();
              if (detectedType !== null) {
                xhr.setRequestHeader(CONTENT_TYPE_HEADER, detectedType);
              }
            }
            if (req.timeout) {
              xhr.timeout = req.timeout;
            }
            if (req.responseType) {
              const responseType = req.responseType.toLowerCase();
              xhr.responseType = responseType !== "json" ? responseType : "text";
            }
            const reqBody = req.serializeBody();
            let headerResponse = null;
            const partialFromXhr = () => {
              if (headerResponse !== null) {
                return headerResponse;
              }
              const statusText = xhr.statusText || "OK";
              const headers = new HttpHeaders(xhr.getAllResponseHeaders());
              const url = getResponseUrl(xhr) || req.url;
              headerResponse = new HttpHeaderResponse({ headers, status: xhr.status, statusText, url });
              return headerResponse;
            };
            const onLoad = () => {
              let { headers, status, statusText, url } = partialFromXhr();
              let body = null;
              if (status !== HTTP_STATUS_CODE_NO_CONTENT) {
                body = typeof xhr.response === "undefined" ? xhr.responseText : xhr.response;
              }
              if (status === 0) {
                status = !!body ? HTTP_STATUS_CODE_OK : 0;
              }
              let ok = status >= 200 && status < 300;
              if (req.responseType === "json" && typeof body === "string") {
                const originalBody = body;
                body = body.replace(XSSI_PREFIX, "");
                try {
                  body = body !== "" ? JSON.parse(body) : null;
                } catch (error2) {
                  body = originalBody;
                  if (ok) {
                    ok = false;
                    body = { error: error2, text: body };
                  }
                }
              }
              if (ok) {
                observer.next(new HttpResponse({
                  body,
                  headers,
                  status,
                  statusText,
                  url: url || void 0
                }));
                observer.complete();
              } else {
                observer.error(new HttpErrorResponse({
                  // The error in this case is the response body (error from the server).
                  error: body,
                  headers,
                  status,
                  statusText,
                  url: url || void 0
                }));
              }
            };
            const onError = (error2) => {
              const { url } = partialFromXhr();
              const res = new HttpErrorResponse({
                error: error2,
                status: xhr.status || 0,
                statusText: xhr.statusText || "Unknown Error",
                url: url || void 0
              });
              observer.error(res);
            };
            let onTimeout = onError;
            if (req.timeout) {
              onTimeout = (_) => {
                const { url } = partialFromXhr();
                const res = new HttpErrorResponse({
                  error: new DOMException("Request timed out", "TimeoutError"),
                  status: xhr.status || 0,
                  statusText: xhr.statusText || "Request timeout",
                  url: url || void 0
                });
                observer.error(res);
              };
            }
            let sentHeaders = false;
            const onDownProgress = (event) => {
              if (!sentHeaders) {
                observer.next(partialFromXhr());
                sentHeaders = true;
              }
              let progressEvent = {
                type: HttpEventType.DownloadProgress,
                loaded: event.loaded
              };
              if (event.lengthComputable) {
                progressEvent.total = event.total;
              }
              if (req.responseType === "text" && !!xhr.responseText) {
                progressEvent.partialText = xhr.responseText;
              }
              observer.next(progressEvent);
            };
            const onUpProgress = (event) => {
              let progress = {
                type: HttpEventType.UploadProgress,
                loaded: event.loaded
              };
              if (event.lengthComputable) {
                progress.total = event.total;
              }
              observer.next(progress);
            };
            xhr.addEventListener("load", onLoad);
            xhr.addEventListener("error", onError);
            xhr.addEventListener("timeout", onTimeout);
            xhr.addEventListener("abort", onError);
            if (req.reportProgress) {
              xhr.addEventListener("progress", onDownProgress);
              if (reqBody !== null && xhr.upload) {
                xhr.upload.addEventListener("progress", onUpProgress);
              }
            }
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            return () => {
              xhr.removeEventListener("error", onError);
              xhr.removeEventListener("abort", onError);
              xhr.removeEventListener("load", onLoad);
              xhr.removeEventListener("timeout", onTimeout);
              if (req.reportProgress) {
                xhr.removeEventListener("progress", onDownProgress);
                if (reqBody !== null && xhr.upload) {
                  xhr.upload.removeEventListener("progress", onUpProgress);
                }
              }
              if (xhr.readyState !== xhr.DONE) {
                xhr.abort();
              }
            };
          });
        }));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpXhrBackend, deps: [{ token: XhrFactory }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpXhrBackend });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: HttpXhrBackend, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: XhrFactory }] });
    XSRF_ENABLED = new InjectionToken(ngDevMode ? "XSRF_ENABLED" : "");
    XSRF_DEFAULT_COOKIE_NAME = "XSRF-TOKEN";
    XSRF_COOKIE_NAME = new InjectionToken(ngDevMode ? "XSRF_COOKIE_NAME" : "", {
      providedIn: "root",
      factory: () => XSRF_DEFAULT_COOKIE_NAME
    });
    XSRF_DEFAULT_HEADER_NAME = "X-XSRF-TOKEN";
    XSRF_HEADER_NAME = new InjectionToken(ngDevMode ? "XSRF_HEADER_NAME" : "", {
      providedIn: "root",
      factory: () => XSRF_DEFAULT_HEADER_NAME
    });
    HttpXsrfTokenExtractor = class {
    };
    HttpXsrfCookieExtractor = class _HttpXsrfCookieExtractor {
      doc;
      cookieName;
      lastCookieString = "";
      lastToken = null;
      /**
       * @internal for testing
       */
      parseCount = 0;
      constructor(doc, cookieName) {
        this.doc = doc;
        this.cookieName = cookieName;
      }
      getToken() {
        if (false) {
          return null;
        }
        const cookieString = this.doc.cookie || "";
        if (cookieString !== this.lastCookieString) {
          this.parseCount++;
          this.lastToken = parseCookieValue(cookieString, this.cookieName);
          this.lastCookieString = cookieString;
        }
        return this.lastToken;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpXsrfCookieExtractor, deps: [{ token: DOCUMENT }, { token: XSRF_COOKIE_NAME }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpXsrfCookieExtractor });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: HttpXsrfCookieExtractor, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: void 0, decorators: [{
      type: Inject,
      args: [XSRF_COOKIE_NAME]
    }] }] });
    HttpXsrfInterceptor = class _HttpXsrfInterceptor {
      injector;
      constructor(injector) {
        this.injector = injector;
      }
      intercept(initialRequest, next) {
        return runInInjectionContext(this.injector, () => xsrfInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpXsrfInterceptor, deps: [{ token: EnvironmentInjector }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpXsrfInterceptor });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: HttpXsrfInterceptor, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: EnvironmentInjector }] });
    (function(HttpFeatureKind2) {
      HttpFeatureKind2[HttpFeatureKind2["Interceptors"] = 0] = "Interceptors";
      HttpFeatureKind2[HttpFeatureKind2["LegacyInterceptors"] = 1] = "LegacyInterceptors";
      HttpFeatureKind2[HttpFeatureKind2["CustomXsrfConfiguration"] = 2] = "CustomXsrfConfiguration";
      HttpFeatureKind2[HttpFeatureKind2["NoXsrfProtection"] = 3] = "NoXsrfProtection";
      HttpFeatureKind2[HttpFeatureKind2["JsonpSupport"] = 4] = "JsonpSupport";
      HttpFeatureKind2[HttpFeatureKind2["RequestsMadeViaParent"] = 5] = "RequestsMadeViaParent";
      HttpFeatureKind2[HttpFeatureKind2["Fetch"] = 6] = "Fetch";
    })(HttpFeatureKind || (HttpFeatureKind = {}));
    LEGACY_INTERCEPTOR_FN = new InjectionToken(ngDevMode ? "LEGACY_INTERCEPTOR_FN" : "");
    HttpClientXsrfModule = class _HttpClientXsrfModule {
      /**
       * Disable the default XSRF protection.
       */
      static disable() {
        return {
          ngModule: _HttpClientXsrfModule,
          providers: [withNoXsrfProtection().\u0275providers]
        };
      }
      /**
       * Configure XSRF protection.
       * @param options An object that can specify either or both
       * cookie name or header name.
       * - Cookie name default is `XSRF-TOKEN`.
       * - Header name default is `X-XSRF-TOKEN`.
       *
       */
      static withOptions(options = {}) {
        return {
          ngModule: _HttpClientXsrfModule,
          providers: withXsrfConfiguration(options).\u0275providers
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpClientXsrfModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpClientXsrfModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpClientXsrfModule, providers: [
        HttpXsrfInterceptor,
        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
        withXsrfConfiguration({
          cookieName: XSRF_DEFAULT_COOKIE_NAME,
          headerName: XSRF_DEFAULT_HEADER_NAME
        }).\u0275providers,
        { provide: XSRF_ENABLED, useValue: true }
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: HttpClientXsrfModule, decorators: [{
      type: NgModule,
      args: [{
        providers: [
          HttpXsrfInterceptor,
          { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
          { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
          withXsrfConfiguration({
            cookieName: XSRF_DEFAULT_COOKIE_NAME,
            headerName: XSRF_DEFAULT_HEADER_NAME
          }).\u0275providers,
          { provide: XSRF_ENABLED, useValue: true }
        ]
      }]
    }] });
    HttpClientModule = class _HttpClientModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpClientModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpClientModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpClientModule, providers: [provideHttpClient(withInterceptorsFromDi())] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: HttpClientModule, decorators: [{
      type: NgModule,
      args: [{
        /**
         * Configures the dependency injector where it is imported
         * with supporting services for HTTP communications.
         */
        providers: [provideHttpClient(withInterceptorsFromDi())]
      }]
    }] });
    HttpClientJsonpModule = class _HttpClientJsonpModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpClientJsonpModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpClientJsonpModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HttpClientJsonpModule, providers: [withJsonpSupport().\u0275providers] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: HttpClientJsonpModule, decorators: [{
      type: NgModule,
      args: [{
        providers: [withJsonpSupport().\u0275providers]
      }]
    }] });
  }
});

// node_modules/@angular/common/fesm2022/http.mjs
function makeHttpResourceFn(responseType) {
  return function httpResource2(request, options) {
    if (ngDevMode && !options?.injector) {
      assertInInjectionContext(httpResource2);
    }
    const injector = options?.injector ?? inject(Injector);
    return new HttpResourceImpl(injector, () => normalizeRequest(request, responseType), options?.defaultValue, options?.parse, options?.equal);
  };
}
function normalizeRequest(request, responseType) {
  let unwrappedRequest = typeof request === "function" ? request() : request;
  if (unwrappedRequest === void 0) {
    return void 0;
  } else if (typeof unwrappedRequest === "string") {
    unwrappedRequest = { url: unwrappedRequest };
  }
  const headers = unwrappedRequest.headers instanceof HttpHeaders ? unwrappedRequest.headers : new HttpHeaders(unwrappedRequest.headers);
  const params = unwrappedRequest.params instanceof HttpParams ? unwrappedRequest.params : new HttpParams({ fromObject: unwrappedRequest.params });
  return new HttpRequest(unwrappedRequest.method ?? "GET", unwrappedRequest.url, unwrappedRequest.body ?? null, {
    headers,
    params,
    reportProgress: unwrappedRequest.reportProgress,
    withCredentials: unwrappedRequest.withCredentials,
    keepalive: unwrappedRequest.keepalive,
    cache: unwrappedRequest.cache,
    priority: unwrappedRequest.priority,
    mode: unwrappedRequest.mode,
    redirect: unwrappedRequest.redirect,
    responseType,
    context: unwrappedRequest.context,
    transferCache: unwrappedRequest.transferCache,
    credentials: unwrappedRequest.credentials,
    timeout: unwrappedRequest.timeout
  });
}
var httpResource, HttpResourceImpl, HTTP_TRANSFER_CACHE_ORIGIN_MAP, CACHE_OPTIONS;
var init_http = __esm({
  "node_modules/@angular/common/fesm2022/http.mjs"() {
    "use strict";
    init_module();
    init_module();
    init_core();
    httpResource = (() => {
      const jsonFn = makeHttpResourceFn("json");
      jsonFn.arrayBuffer = makeHttpResourceFn("arraybuffer");
      jsonFn.blob = makeHttpResourceFn("blob");
      jsonFn.text = makeHttpResourceFn("text");
      return jsonFn;
    })();
    HttpResourceImpl = class extends ResourceImpl {
      client;
      _headers = linkedSignal({
        source: this.extRequest,
        computation: () => void 0
      });
      _progress = linkedSignal({
        source: this.extRequest,
        computation: () => void 0
      });
      _statusCode = linkedSignal({
        source: this.extRequest,
        computation: () => void 0
      });
      headers = computed(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0, ...ngDevMode ? [{ debugName: "headers" }] : []);
      progress = this._progress.asReadonly();
      statusCode = this._statusCode.asReadonly();
      constructor(injector, request, defaultValue, parse, equal) {
        super(request, ({ params: request2, abortSignal }) => {
          let sub;
          const onAbort = () => sub.unsubscribe();
          abortSignal.addEventListener("abort", onAbort);
          const stream = signal({ value: void 0 }, ...ngDevMode ? [{ debugName: "stream" }] : []);
          let resolve;
          const promise = new Promise((r) => resolve = r);
          const send = (value) => {
            stream.set(value);
            resolve?.(stream);
            resolve = void 0;
          };
          sub = this.client.request(request2).subscribe({
            next: (event) => {
              switch (event.type) {
                case HttpEventType.Response:
                  this._headers.set(event.headers);
                  this._statusCode.set(event.status);
                  try {
                    send({ value: parse ? parse(event.body) : event.body });
                  } catch (error2) {
                    send({ error: encapsulateResourceError(error2) });
                  }
                  break;
                case HttpEventType.DownloadProgress:
                  this._progress.set(event);
                  break;
              }
            },
            error: (error2) => {
              if (error2 instanceof HttpErrorResponse) {
                this._headers.set(error2.headers);
                this._statusCode.set(error2.status);
              }
              send({ error: error2 });
              abortSignal.removeEventListener("abort", onAbort);
            },
            complete: () => {
              if (resolve) {
                send({
                  error: new RuntimeError(991, ngDevMode && "Resource completed before producing a value")
                });
              }
              abortSignal.removeEventListener("abort", onAbort);
            }
          });
          return promise;
        }, defaultValue, equal, injector);
        this.client = injector.get(HttpClient);
      }
    };
    HTTP_TRANSFER_CACHE_ORIGIN_MAP = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_CACHE_ORIGIN_MAP" : "");
    CACHE_OPTIONS = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_STATE_CACHE_OPTIONS" : "");
  }
});

// angular:jit:template:src/app/keyboard/keyboard.html
var keyboard_default;
var init_keyboard = __esm({
  "angular:jit:template:src/app/keyboard/keyboard.html"() {
    keyboard_default = `<div class="keyboard">
  @for (row of keyboard; track row) {
    <div class="keyboard-row">
      @for (key of row; track key) {
        <button
          nz-button
          (click)="onPress(key.value)"
          style="margin: 2px;"
          [ngClass]="{
            'correct': key.state === state.Correct,
            'incorrect': key.state === state.Incorrect,
            'hint': key.state === state.Hint
          }"
          (mousedown)="$event.preventDefault()"
        >
          {{ key.value }}
        </button>
      }
    </div>
  }
</div>
`;
  }
});

// angular:jit:style:src/app/keyboard/keyboard.scss
var keyboard_default2;
var init_keyboard2 = __esm({
  "angular:jit:style:src/app/keyboard/keyboard.scss"() {
    keyboard_default2 = "/* src/app/keyboard/keyboard.scss */\n.correct {\n  background-color: #52c41a;\n  border-color: #52c41a;\n  color: white;\n}\n.incorrect {\n  background-color: #ff4d4f;\n  border-color: #ff4d4f;\n  color: white;\n}\n.hint {\n  background-color: #faad14;\n  border-color: #faad14;\n  color: white;\n}\n.keyboard {\n  width: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.keyboard-row {\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n}\n@media (max-width: 400px) {\n  .keyboard-row {\n    gap: 2px;\n  }\n}\n.keyboard-row button {\n  height: 50px;\n  min-width: 20px;\n  flex: 1;\n  max-width: 45px;\n  font-size: clamp(10px, 4vw, 16px);\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n}\n@media (max-width: 767px) {\n  .keyboard-row button {\n    height: 55px;\n    font-size: clamp(12px, 5vw, 18px);\n  }\n}\n@media (max-width: 400px) {\n  .keyboard-row button {\n    height: 50px;\n    font-size: clamp(8px, 3.5vw, 14px);\n    min-width: 25px;\n    max-width: 35px;\n  }\n}\n@media (max-width: 320px) {\n  .keyboard-row button {\n    font-size: clamp(6px, 3vw, 12px);\n    min-width: 20px;\n    max-width: 30px;\n  }\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n  .keyboard-row button {\n    height: 52px;\n    font-size: clamp(14px, 4.5vw, 17px);\n  }\n}\n.keyboard-row:last-child button:first-child,\n.keyboard-row:last-child button:last-child {\n  flex: 2;\n  min-width: 45px;\n  max-width: 80px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=keyboard.css.map */\n";
  }
});

// src/app/state.ts
var State;
var init_state = __esm({
  "src/app/state.ts"() {
    "use strict";
    (function(State2) {
      State2[State2["None"] = 0] = "None";
      State2[State2["Incorrect"] = 1] = "Incorrect";
      State2[State2["Hint"] = 2] = "Hint";
      State2[State2["Correct"] = 3] = "Correct";
    })(State || (State = {}));
  }
});

// src/app/letter.ts
var Letter;
var init_letter = __esm({
  "src/app/letter.ts"() {
    "use strict";
    init_state();
    Letter = class {
      value;
      state = State.None;
      constructor(value = void 0) {
        this.value = value;
      }
      setLetterStateBasedOnWord(currentWord, letterIndex) {
        if (this.value === void 0) {
          return;
        }
        const lowerCaseValue = this.value.toLowerCase();
        if (currentWord[letterIndex] === lowerCaseValue) {
          this.state = State.Correct;
          return;
        }
        if (currentWord.includes(lowerCaseValue)) {
          this.state = State.Hint;
          return;
        }
        this.state = State.Incorrect;
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/directionality-CChdj3az.mjs
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var DIR_DOCUMENT, RTL_LOCALE_PATTERN, Directionality;
var init_directionality_CChdj3az = __esm({
  "node_modules/@angular/cdk/fesm2022/directionality-CChdj3az.mjs"() {
    "use strict";
    init_core();
    init_core();
    DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
      providedIn: "root",
      factory: DIR_DOCUMENT_FACTORY
    });
    RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    Directionality = class _Directionality {
      /** The current 'ltr' or 'rtl' value. */
      get value() {
        return this.valueSignal();
      }
      /**
       * The current 'ltr' or 'rtl' value.
       */
      valueSignal = signal("ltr");
      /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
      change = new EventEmitter();
      constructor() {
        const _document = inject(DIR_DOCUMENT, { optional: true });
        if (_document) {
          const bodyDir = _document.body ? _document.body.dir : null;
          const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
          this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
        }
      }
      ngOnDestroy() {
        this.change.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Directionality, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Directionality, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Directionality, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir, BidiModule;
var init_bidi = __esm({
  "node_modules/@angular/cdk/fesm2022/bidi.mjs"() {
    "use strict";
    init_directionality_CChdj3az();
    init_core();
    init_core();
    Dir = class _Dir {
      /** Whether the `value` has been set to its initial value. */
      _isInitialized = false;
      /** Direction as passed in by the consumer. */
      _rawDir;
      /** Event emitted when the direction changes. */
      change = new EventEmitter();
      /** @docs-private */
      get dir() {
        return this.valueSignal();
      }
      set dir(value) {
        const previousValue = this.valueSignal();
        this.valueSignal.set(_resolveDirectionality(value));
        this._rawDir = value;
        if (previousValue !== this.valueSignal() && this._isInitialized) {
          this.change.emit(this.valueSignal());
        }
      }
      /** Current layout direction of the element. */
      get value() {
        return this.dir;
      }
      valueSignal = signal("ltr");
      /** Initialize once default value has been set. */
      ngAfterContentInit() {
        this._isInitialized = true;
      }
      ngOnDestroy() {
        this.change.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Dir, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _Dir, isStandalone: true, selector: "[dir]", inputs: { dir: "dir" }, outputs: { change: "dirChange" }, host: { properties: { "attr.dir": "_rawDir" } }, providers: [{ provide: Directionality, useExisting: _Dir }], exportAs: ["dir"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Dir, decorators: [{
      type: Directive,
      args: [{
        selector: "[dir]",
        providers: [{ provide: Directionality, useExisting: Dir }],
        host: { "[attr.dir]": "_rawDir" },
        exportAs: "dir"
      }]
    }], propDecorators: { change: [{
      type: Output,
      args: ["dirChange"]
    }], dir: [{
      type: Input
    }] } });
    BidiModule = class _BidiModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BidiModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _BidiModule, imports: [Dir], exports: [Dir] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BidiModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: BidiModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Dir],
        exports: [Dir]
      }]
    }] });
  }
});

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state2;
  if (options?.requireSync) {
    state2 = signal({
      kind: 0
      /* StateKind.NoValue */
    }, { equal });
  } else {
    state2 = signal({ kind: 1, value: options?.initialValue }, { equal });
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state2.set({ kind: 1, value }),
    error: (error2) => {
      state2.set({ kind: 2, error: error2 });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state2().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state2();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, { equal: options?.equal });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
var init_rxjs_interop = __esm({
  "node_modules/@angular/core/fesm2022/rxjs-interop.mjs"() {
    "use strict";
    init_esm();
    init_operators();
    init_root_effect_scheduler();
    init_resource();
  }
});

// node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    n = n % max / parseFloat(String(max));
  }
  return n;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}
var init_util = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/util.js"() {
    "use strict";
  }
});

// node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var s = 0;
  var l = (max + min) / 2;
  if (max === min) {
    s = 0;
    h = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h, s, l };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h, s, v };
}
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16)),
    pad2(convertDecimalToHex(a))
  ];
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
var init_conversion = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/conversion.js"() {
    "use strict";
    init_util();
  }
});

// node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var names;
var init_css_color_names = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/css-color-names.js"() {
    "use strict";
    names = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      goldenrod: "#daa520",
      gold: "#ffd700",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavenderblush: "#fff0f5",
      lavender: "#e6e6fa",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    };
  }
});

// node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
var CSS_INTEGER, CSS_NUMBER, CSS_UNIT, PERMISSIVE_MATCH3, PERMISSIVE_MATCH4, matchers;
var init_format_input = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/format-input.js"() {
    "use strict";
    init_conversion();
    init_css_color_names();
    init_util();
    CSS_INTEGER = "[-\\+]?\\d+%?";
    CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
    CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
    PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
    PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
    matchers = {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
  }
});

// node_modules/@ctrl/tinycolor/dist/module/index.js
var TinyColor;
var init_module2 = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/index.js"() {
    "use strict";
    init_conversion();
    init_css_color_names();
    init_format_input();
    init_util();
    TinyColor = /** @class */
    function() {
      function TinyColor2(color, opts) {
        if (color === void 0) {
          color = "";
        }
        if (opts === void 0) {
          opts = {};
        }
        var _a;
        if (color instanceof TinyColor2) {
          return color;
        }
        if (typeof color === "number") {
          color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
          this.r = Math.round(this.r);
        }
        if (this.g < 1) {
          this.g = Math.round(this.g);
        }
        if (this.b < 1) {
          this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
      }
      TinyColor2.prototype.isDark = function() {
        return this.getBrightness() < 128;
      };
      TinyColor2.prototype.isLight = function() {
        return !this.isDark();
      };
      TinyColor2.prototype.getBrightness = function() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
      };
      TinyColor2.prototype.getLuminance = function() {
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
          R = RsRGB / 12.92;
        } else {
          R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
          G = GsRGB / 12.92;
        } else {
          G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
          B = BsRGB / 12.92;
        } else {
          B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
      };
      TinyColor2.prototype.getAlpha = function() {
        return this.a;
      };
      TinyColor2.prototype.setAlpha = function(alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
      };
      TinyColor2.prototype.isMonochrome = function() {
        var s = this.toHsl().s;
        return s === 0;
      };
      TinyColor2.prototype.toHsv = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
      };
      TinyColor2.prototype.toHsvString = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHsl = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
      };
      TinyColor2.prototype.toHslString = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHex = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
      };
      TinyColor2.prototype.toHexString = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return "#" + this.toHex(allow3Char);
      };
      TinyColor2.prototype.toHex8 = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
      };
      TinyColor2.prototype.toHex8String = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return "#" + this.toHex8(allow4Char);
      };
      TinyColor2.prototype.toHexShortString = function(allowShortChar) {
        if (allowShortChar === void 0) {
          allowShortChar = false;
        }
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
      };
      TinyColor2.prototype.toRgb = function() {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toRgbString = function() {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toPercentageRgb = function() {
        var fmt = function(x) {
          return "".concat(Math.round(bound01(x, 255) * 100), "%");
        };
        return {
          r: fmt(this.r),
          g: fmt(this.g),
          b: fmt(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toPercentageRgbString = function() {
        var rnd = function(x) {
          return Math.round(bound01(x, 255) * 100);
        };
        return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toName = function() {
        if (this.a === 0) {
          return "transparent";
        }
        if (this.a < 1) {
          return false;
        }
        var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
          var _b = _a[_i], key = _b[0], value = _b[1];
          if (hex === value) {
            return key;
          }
        }
        return false;
      };
      TinyColor2.prototype.toString = function(format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
        if (needsAlphaFormat) {
          if (format === "name" && this.a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
          formattedString = this.toHexString();
        }
        if (format === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format === "name") {
          formattedString = this.toName();
        }
        if (format === "hsl") {
          formattedString = this.toHslString();
        }
        if (format === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      };
      TinyColor2.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      };
      TinyColor2.prototype.clone = function() {
        return new TinyColor2(this.toString());
      };
      TinyColor2.prototype.lighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.brighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor2(rgb);
      };
      TinyColor2.prototype.darken = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.tint = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("white", amount);
      };
      TinyColor2.prototype.shade = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("black", amount);
      };
      TinyColor2.prototype.desaturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.saturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.greyscale = function() {
        return this.desaturate(100);
      };
      TinyColor2.prototype.spin = function(amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.mix = function(color, amount) {
        if (amount === void 0) {
          amount = 50;
        }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor2(color).toRgb();
        var p = amount / 100;
        var rgba = {
          r: (rgb2.r - rgb1.r) * p + rgb1.r,
          g: (rgb2.g - rgb1.g) * p + rgb1.g,
          b: (rgb2.b - rgb1.b) * p + rgb1.b,
          a: (rgb2.a - rgb1.a) * p + rgb1.a
        };
        return new TinyColor2(rgba);
      };
      TinyColor2.prototype.analogous = function(results, slices) {
        if (results === void 0) {
          results = 6;
        }
        if (slices === void 0) {
          slices = 30;
        }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(new TinyColor2(hsl));
        }
        return ret;
      };
      TinyColor2.prototype.complement = function() {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.monochromatic = function(results) {
        if (results === void 0) {
          results = 6;
        }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
          res.push(new TinyColor2({ h, s, v }));
          v = (v + modification) % 1;
        }
        return res;
      };
      TinyColor2.prototype.splitcomplement = function() {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
          this,
          new TinyColor2({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
          new TinyColor2({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })
        ];
      };
      TinyColor2.prototype.onBackground = function(background) {
        var fg = this.toRgb();
        var bg = new TinyColor2(background).toRgb();
        var alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor2({
          r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
          g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
          b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
          a: alpha
        });
      };
      TinyColor2.prototype.triad = function() {
        return this.polyad(3);
      };
      TinyColor2.prototype.tetrad = function() {
        return this.polyad(4);
      };
      TinyColor2.prototype.polyad = function(n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
          result.push(new TinyColor2({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
      };
      TinyColor2.prototype.equals = function(color) {
        return this.toRgbString() === new TinyColor2(color).toRgbString();
      };
      return TinyColor2;
    }();
  }
});

// node_modules/@ctrl/tinycolor/dist/module/readability.js
var init_readability = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/readability.js"() {
    "use strict";
  }
});

// node_modules/@ctrl/tinycolor/dist/module/to-ms-filter.js
var init_to_ms_filter = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/to-ms-filter.js"() {
    "use strict";
  }
});

// node_modules/@ctrl/tinycolor/dist/module/from-ratio.js
var init_from_ratio = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/from-ratio.js"() {
    "use strict";
  }
});

// node_modules/@ctrl/tinycolor/dist/module/random.js
var init_random = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/random.js"() {
    "use strict";
  }
});

// node_modules/@ctrl/tinycolor/dist/module/interfaces.js
var init_interfaces = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/interfaces.js"() {
    "use strict";
  }
});

// node_modules/@ctrl/tinycolor/dist/module/public_api.js
var init_public_api = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/public_api.js"() {
    "use strict";
    init_module2();
    init_css_color_names();
    init_readability();
    init_to_ms_filter();
    init_from_ratio();
    init_format_input();
    init_random();
    init_interfaces();
    init_conversion();
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-color.mjs
function toHsv({ r, g, b }) {
  const hsv = rgbToHsv(r, g, b);
  return { h: hsv.h * 360, s: hsv.s, v: hsv.v };
}
function toHex({ r, g, b }) {
  return `#${rgbToHex(r, g, b, false)}`;
}
function mix(rgb1, rgb2, amount) {
  const p = amount / 100;
  const rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  let hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  let saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  let value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color, opts = {}) {
  const patterns = [];
  const pColor = inputToRGB(color);
  for (let i = lightColorCount; i > 0; i -= 1) {
    const hsv = toHsv(pColor);
    const colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (let i = 1; i <= darkColorCount; i += 1) {
    const hsv = toHsv(pColor);
    const colorString = toHex(inputToRGB({
      h: getHue(hsv, i),
      s: getSaturation(hsv, i),
      v: getValue(hsv, i)
    }));
    patterns.push(colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(({ index, opacity }) => {
      const darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}
var hueStep, saturationStep, saturationStep2, brightnessStep1, brightnessStep2, lightColorCount, darkColorCount, darkColorMap;
var init_ng_zorro_antd_core_color = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-color.mjs"() {
    "use strict";
    init_public_api();
    hueStep = 2;
    saturationStep = 0.16;
    saturationStep2 = 0.05;
    brightnessStep1 = 0.05;
    brightnessStep2 = 0.15;
    lightColorCount = 5;
    darkColorCount = 4;
    darkColorMap = [
      { index: 7, opacity: 0.15 },
      { index: 6, opacity: 0.25 },
      { index: 5, opacity: 0.3 },
      { index: 5, opacity: 0.45 },
      { index: 5, opacity: 0.65 },
      { index: 5, opacity: 0.85 },
      { index: 4, opacity: 0.9 },
      { index: 3, opacity: 0.95 },
      { index: 2, opacity: 0.97 },
      { index: 1, opacity: 0.98 }
    ];
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-environments.mjs
var environment;
var init_ng_zorro_antd_core_environments = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-environments.mjs"() {
    "use strict";
    environment = {
      isTestMode: false
    };
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-logger.mjs
function notRecorded(...args) {
  const asRecord = args.reduce((acc, c) => acc + c.toString(), "");
  if (record[asRecord]) {
    return false;
  } else {
    record[asRecord] = true;
    return true;
  }
}
function consoleCommonBehavior(consoleFunc, ...args) {
  if (environment.isTestMode || isDevMode() && notRecorded(...args)) {
    consoleFunc(...args);
  }
}
var record, PREFIX, warn;
var init_ng_zorro_antd_core_logger = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-logger.mjs"() {
    "use strict";
    init_core();
    init_ng_zorro_antd_core_environments();
    record = {};
    PREFIX = "[NG-ZORRO]:";
    warn = (...args) => consoleCommonBehavior((...arg) => console.warn(PREFIX, ...arg), ...args);
  }
});

// node_modules/@angular/cdk/fesm2022/element-x4z00URv.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}
var init_element_x4z00URv = __esm({
  "node_modules/@angular/cdk/fesm2022/element-x4z00URv.mjs"() {
    "use strict";
    init_core();
  }
});

// node_modules/@angular/cdk/fesm2022/array-I1yfCXUO.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
var init_array_I1yfCXUO = __esm({
  "node_modules/@angular/cdk/fesm2022/array-I1yfCXUO.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/css-pixel-value-C_HEqLhI.mjs
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}
var init_css_pixel_value_C_HEqLhI = __esm({
  "node_modules/@angular/cdk/fesm2022/css-pixel-value-C_HEqLhI.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/coercion.mjs
var init_coercion = __esm({
  "node_modules/@angular/cdk/fesm2022/coercion.mjs"() {
    "use strict";
    init_css_pixel_value_C_HEqLhI();
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-util.mjs
function isTemplateRef(value) {
  return value instanceof TemplateRef;
}
function toCssPixel(value) {
  return coerceCssPixelValue(value);
}
function isTouchEvent(event) {
  return event.type.startsWith("touch");
}
function getEventPosition(event) {
  return isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
}
function isPromise(obj) {
  return !!obj && typeof obj.then === "function" && typeof obj.catch === "function";
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return new Observable((subscriber) => {
      Promise.resolve(value).then((result) => {
        subscriber.next(result);
        subscriber.complete();
      }).catch((error2) => subscriber.error(error2));
    });
  }
  return of(value);
}
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function getMark({ mark } = {}) {
  if (mark) {
    return mark.startsWith("data-") ? mark : `data-${mark}`;
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = document.querySelector("head");
  return head || document.body;
}
function injectCSS(css, options = {}) {
  if (!canUseDom()) {
    return null;
  }
  const styleNode = document.createElement("style");
  if (options.cspNonce) {
    styleNode.nonce = options.cspNonce;
  }
  styleNode.innerHTML = css;
  const container = getContainer(options);
  const { firstChild } = container;
  if (options.prepend && container.prepend) {
    container.prepend(styleNode);
  } else if (options.prepend && firstChild) {
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key, option = {}) {
  const container = getContainer(option);
  return Array.from(containerCache.get(container)?.children || []).find((node) => node.tagName === "STYLE" && node.getAttribute(getMark(option)) === key);
}
function updateCSS(css, key, options = {}) {
  const container = getContainer(options);
  if (!containerCache.has(container)) {
    const placeholderStyle = injectCSS("", options);
    const { parentNode } = placeholderStyle;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }
  const existNode = findExistNode(key, options);
  if (existNode) {
    if (options.cspNonce && existNode.nonce !== options.cspNonce) {
      existNode.nonce = options.cspNonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  const newNode = injectCSS(css, options);
  newNode?.setAttribute(getMark(options), key);
  return newNode;
}
function runOutsideAngular(fn) {
  return typeof Zone !== "undefined" ? Zone.root.run(fn) : fn();
}
function fromEventOutsideAngular(target, name2, options) {
  if (!target) {
    return EMPTY;
  }
  return new Observable((subscriber) => {
    return runOutsideAngular(() => (
      // Casting because the inferred overload is incorrect :(
      fromEvent(target, name2, options).subscribe(subscriber)
    ));
  });
}
var isBrowser, isFirefox, MARK_KEY, containerCache;
var init_ng_zorro_antd_core_util = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-util.mjs"() {
    "use strict";
    init_core();
    init_coercion();
    init_esm();
    isBrowser = typeof window !== "undefined";
    isFirefox = isBrowser && window.mozInnerScreenX != null;
    MARK_KEY = `rc-util-key`;
    containerCache = /* @__PURE__ */ new Map();
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-config.mjs
function getStyle(globalPrefixCls, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = updater?.(clone) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new TinyColor(colorVal);
    const colorPalettes = generate(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[7];
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[1];
    variables[`${type}-color-deprecated-border`] = colorPalettes[3];
  };
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, "primary");
    const primaryColor = new TinyColor(theme.primaryColor);
    const primaryColors = generate(primaryColor.toRgbString());
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c) => c.lighten(35));
    variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c) => c.lighten(20));
    variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c) => c.tint(20));
    variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c) => c.tint(50));
    variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const primaryActiveColor = new TinyColor(primaryColors[0]);
    variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c) => c.setAlpha(c.getAlpha() * 0.3));
    variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c) => c.darken(2));
  }
  if (theme.successColor) {
    fillColor(theme.successColor, "success");
  }
  if (theme.warningColor) {
    fillColor(theme.warningColor, "warning");
  }
  if (theme.errorColor) {
    fillColor(theme.errorColor, "error");
  }
  if (theme.infoColor) {
    fillColor(theme.infoColor, "info");
  }
  const cssList = Object.keys(variables).map((key) => `--${globalPrefixCls}-${key}: ${variables[key]};`);
  return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme, cspNonce) {
  const style2 = getStyle(globalPrefixCls, theme);
  if (canUseDom()) {
    updateCSS(style2, `${dynamicStyleMark}-dynamic-theme`, { cspNonce });
  } else {
    warn(`NzConfigService: SSR do not support dynamic theme with css variables.`);
  }
}
function onConfigChangeEventForComponent(componentName, callback) {
  if (typeof ngDevMode !== "undefined" && ngDevMode) {
    assertInInjectionContext(onConfigChangeEventForComponent);
  }
  const destroyRef = inject(DestroyRef);
  const nzConfigService = inject(NzConfigService);
  let subscription = null;
  const ref = afterNextRender(() => {
    subscription = nzConfigService.getConfigChangeEventForComponent(componentName).pipe(takeUntilDestroyed(destroyRef)).subscribe(callback);
  });
  return () => {
    ref.destroy();
    subscription?.unsubscribe();
  };
}
function WithConfig() {
  return function(_value, context) {
    context.addInitializer(function() {
      const nzConfigService = inject(NzConfigService);
      const originalValue = this[context.name];
      let value;
      let assignedByUser = false;
      Object.defineProperty(this, context.name, {
        get: () => {
          const configValue = nzConfigService.getConfigForComponent(this["_nzModuleName"])?.[context.name];
          if (assignedByUser) {
            return value;
          }
          if (isDefined(configValue)) {
            return configValue;
          }
          return originalValue;
        },
        set: (newValue) => {
          assignedByUser = isDefined(newValue);
          value = newValue;
        },
        enumerable: true,
        configurable: true
      });
    });
  };
}
var NZ_CONFIG, dynamicStyleMark, isDefined, defaultPrefixCls, NzConfigService;
var init_ng_zorro_antd_core_config = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-config.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_rxjs_interop();
    init_esm();
    init_operators();
    init_public_api();
    init_ng_zorro_antd_core_color();
    init_ng_zorro_antd_core_logger();
    init_ng_zorro_antd_core_util();
    NZ_CONFIG = new InjectionToken("nz-config");
    dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
    isDefined = function(value) {
      return value !== void 0;
    };
    defaultPrefixCls = "ant";
    NzConfigService = class _NzConfigService {
      configUpdated$ = new Subject();
      /** Global config holding property. */
      config = inject(NZ_CONFIG, { optional: true }) || {};
      cspNonce = inject(CSP_NONCE, { optional: true });
      constructor() {
        if (this.config.theme) {
          registerTheme(this.getConfig().prefixCls?.prefixCls || defaultPrefixCls, this.config.theme, this.cspNonce);
        }
      }
      getConfig() {
        return this.config;
      }
      getConfigForComponent(componentName) {
        return this.config[componentName];
      }
      getConfigChangeEventForComponent(componentName) {
        return this.configUpdated$.pipe(filter((n) => n === componentName), map(() => void 0));
      }
      set(componentName, value) {
        this.config[componentName] = __spreadValues(__spreadValues({}, this.config[componentName]), value);
        if (componentName === "theme" && this.config.theme) {
          registerTheme(this.getConfig().prefixCls?.prefixCls || defaultPrefixCls, this.config.theme, this.cspNonce);
        }
        this.configUpdated$.next(componentName);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzConfigService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzConfigService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzConfigService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
var Meta, META_KEYS_MAP, Title, EVENT_NAMES, HAMMER_GESTURE_CONFIG, HAMMER_LOADER, HammerGestureConfig, HammerGesturesPlugin, HammerModule, DomSanitizer, DomSanitizerImpl, HydrationFeatureKind, VERSION;
var init_platform_browser = __esm({
  "node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dom_renderer();
    Meta = class _Meta {
      _doc;
      _dom;
      constructor(_doc) {
        this._doc = _doc;
        this._dom = getDOM();
      }
      /**
       * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
       * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
       * values in the provided tag definition, and verifies that all other attribute values are equal.
       * If an existing element is found, it is returned and is not modified in any way.
       * @param tag The definition of a `<meta>` element to match or create.
       * @param forceCreation True to create a new element without checking whether one already exists.
       * @returns The existing element with the same attributes and values if found,
       * the new element if no match is found, or `null` if the tag parameter is not defined.
       */
      addTag(tag, forceCreation = false) {
        if (!tag)
          return null;
        return this._getOrCreateElement(tag, forceCreation);
      }
      /**
       * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
       * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
       * values in the provided tag definition, and verifies that all other attribute values are equal.
       * @param tags An array of tag definitions to match or create.
       * @param forceCreation True to create new elements without checking whether they already exist.
       * @returns The matching elements if found, or the new elements.
       */
      addTags(tags, forceCreation = false) {
        if (!tags)
          return [];
        return tags.reduce((result, tag) => {
          if (tag) {
            result.push(this._getOrCreateElement(tag, forceCreation));
          }
          return result;
        }, []);
      }
      /**
       * Retrieves a `<meta>` tag element in the current HTML document.
       * @param attrSelector The tag attribute and value to match against, in the format
       * `"tag_attribute='value string'"`.
       * @returns The matching element, if any.
       */
      getTag(attrSelector) {
        if (!attrSelector)
          return null;
        return this._doc.querySelector(`meta[${attrSelector}]`) || null;
      }
      /**
       * Retrieves a set of `<meta>` tag elements in the current HTML document.
       * @param attrSelector The tag attribute and value to match against, in the format
       * `"tag_attribute='value string'"`.
       * @returns The matching elements, if any.
       */
      getTags(attrSelector) {
        if (!attrSelector)
          return [];
        const list = this._doc.querySelectorAll(`meta[${attrSelector}]`);
        return list ? [].slice.call(list) : [];
      }
      /**
       * Modifies an existing `<meta>` tag element in the current HTML document.
       * @param tag The tag description with which to replace the existing tag content.
       * @param selector A tag attribute and value to match against, to identify
       * an existing tag. A string in the format `"tag_attribute=`value string`"`.
       * If not supplied, matches a tag with the same `name` or `property` attribute value as the
       * replacement tag.
       * @return The modified element.
       */
      updateTag(tag, selector) {
        if (!tag)
          return null;
        selector = selector || this._parseSelector(tag);
        const meta = this.getTag(selector);
        if (meta) {
          return this._setMetaElementAttributes(tag, meta);
        }
        return this._getOrCreateElement(tag, true);
      }
      /**
       * Removes an existing `<meta>` tag element from the current HTML document.
       * @param attrSelector A tag attribute and value to match against, to identify
       * an existing tag. A string in the format `"tag_attribute=`value string`"`.
       */
      removeTag(attrSelector) {
        this.removeTagElement(this.getTag(attrSelector));
      }
      /**
       * Removes an existing `<meta>` tag element from the current HTML document.
       * @param meta The tag definition to match against to identify an existing tag.
       */
      removeTagElement(meta) {
        if (meta) {
          this._dom.remove(meta);
        }
      }
      _getOrCreateElement(meta, forceCreation = false) {
        if (!forceCreation) {
          const selector = this._parseSelector(meta);
          const elem = this.getTags(selector).filter((elem2) => this._containsAttributes(meta, elem2))[0];
          if (elem !== void 0)
            return elem;
        }
        const element = this._dom.createElement("meta");
        this._setMetaElementAttributes(meta, element);
        const head = this._doc.getElementsByTagName("head")[0];
        head.appendChild(element);
        return element;
      }
      _setMetaElementAttributes(tag, el) {
        Object.keys(tag).forEach((prop) => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
        return el;
      }
      _parseSelector(tag) {
        const attr = tag.name ? "name" : "property";
        return `${attr}="${tag[attr]}"`;
      }
      _containsAttributes(tag, elem) {
        return Object.keys(tag).every((key) => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
      }
      _getMetaKeyMap(prop) {
        return META_KEYS_MAP[prop] || prop;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _Meta, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _Meta, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: Meta, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    META_KEYS_MAP = {
      httpEquiv: "http-equiv"
    };
    Title = class _Title {
      _doc;
      constructor(_doc) {
        this._doc = _doc;
      }
      /**
       * Get the title of the current HTML document.
       */
      getTitle() {
        return this._doc.title;
      }
      /**
       * Set the title of the current HTML document.
       * @param newTitle
       */
      setTitle(newTitle) {
        this._doc.title = newTitle || "";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _Title, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _Title, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: Title, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    EVENT_NAMES = {
      // pan
      "pan": true,
      "panstart": true,
      "panmove": true,
      "panend": true,
      "pancancel": true,
      "panleft": true,
      "panright": true,
      "panup": true,
      "pandown": true,
      // pinch
      "pinch": true,
      "pinchstart": true,
      "pinchmove": true,
      "pinchend": true,
      "pinchcancel": true,
      "pinchin": true,
      "pinchout": true,
      // press
      "press": true,
      "pressup": true,
      // rotate
      "rotate": true,
      "rotatestart": true,
      "rotatemove": true,
      "rotateend": true,
      "rotatecancel": true,
      // swipe
      "swipe": true,
      "swipeleft": true,
      "swiperight": true,
      "swipeup": true,
      "swipedown": true,
      // tap
      "tap": true,
      "doubletap": true
    };
    HAMMER_GESTURE_CONFIG = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerGestureConfig" : "");
    HAMMER_LOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerLoader" : "");
    HammerGestureConfig = class _HammerGestureConfig {
      /**
       * A set of supported event names for gestures to be used in Angular.
       * Angular supports all built-in recognizers, as listed in
       * [HammerJS documentation](https://hammerjs.github.io/).
       */
      events = [];
      /**
       * Maps gesture event names to a set of configuration options
       * that specify overrides to the default values for specific properties.
       *
       * The key is a supported event name to be configured,
       * and the options object contains a set of properties, with override values
       * to be applied to the named recognizer event.
       * For example, to disable recognition of the rotate event, specify
       *  `{"rotate": {"enable": false}}`.
       *
       * Properties that are not present take the HammerJS default values.
       * For information about which properties are supported for which events,
       * and their allowed and default values, see
       * [HammerJS documentation](https://hammerjs.github.io/).
       *
       */
      overrides = {};
      /**
       * Properties whose default values can be overridden for a given event.
       * Different sets of properties apply to different events.
       * For information about which properties are supported for which events,
       * and their allowed and default values, see
       * [HammerJS documentation](https://hammerjs.github.io/).
       */
      options;
      /**
       * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
       * and attaches it to a given HTML element.
       * @param element The element that will recognize gestures.
       * @returns A HammerJS event-manager object.
       */
      buildHammer(element) {
        const mc = new Hammer(element, this.options);
        mc.get("pinch").set({ enable: true });
        mc.get("rotate").set({ enable: true });
        for (const eventName in this.overrides) {
          mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HammerGestureConfig, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HammerGestureConfig });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: HammerGestureConfig, decorators: [{
      type: Injectable
    }] });
    HammerGesturesPlugin = class _HammerGesturesPlugin extends EventManagerPlugin {
      _config;
      _injector;
      loader;
      _loaderPromise = null;
      constructor(doc, _config, _injector, loader) {
        super(doc);
        this._config = _config;
        this._injector = _injector;
        this.loader = loader;
      }
      supports(eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
          return false;
        }
        if (!window.Hammer && !this.loader) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            const _console = this._injector.get(Console);
            _console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`);
          }
          return false;
        }
        return true;
      }
      addEventListener(element, eventName, handler) {
        const zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        if (!window.Hammer && this.loader) {
          this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
          let cancelRegistration = false;
          let deregister = () => {
            cancelRegistration = true;
          };
          zone.runOutsideAngular(() => this._loaderPromise.then(() => {
            if (!window.Hammer) {
              if (typeof ngDevMode === "undefined" || ngDevMode) {
                const _console = this._injector.get(Console);
                _console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
              }
              deregister = () => {
              };
              return;
            }
            if (!cancelRegistration) {
              deregister = this.addEventListener(element, eventName, handler);
            }
          }).catch(() => {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              const _console = this._injector.get(Console);
              _console.warn(`The "${eventName}" event cannot be bound because the custom Hammer.JS loader failed.`);
            }
            deregister = () => {
            };
          }));
          return () => {
            deregister();
          };
        }
        return zone.runOutsideAngular(() => {
          const mc = this._config.buildHammer(element);
          const callback = function(eventObj) {
            zone.runGuarded(function() {
              handler(eventObj);
            });
          };
          mc.on(eventName, callback);
          return () => {
            mc.off(eventName, callback);
            if (typeof mc.destroy === "function") {
              mc.destroy();
            }
          };
        });
      }
      isCustomEvent(eventName) {
        return this._config.events.indexOf(eventName) > -1;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HammerGesturesPlugin, deps: [{ token: DOCUMENT }, { token: HAMMER_GESTURE_CONFIG }, { token: Injector }, { token: HAMMER_LOADER, optional: true }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HammerGesturesPlugin });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: HammerGesturesPlugin, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: HammerGestureConfig, decorators: [{
      type: Inject,
      args: [HAMMER_GESTURE_CONFIG]
    }] }, { type: Injector }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [HAMMER_LOADER]
    }] }] });
    HammerModule = class _HammerModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HammerModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.0", ngImport: core_exports, type: _HammerModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _HammerModule, providers: [
        {
          provide: EVENT_MANAGER_PLUGINS,
          useClass: HammerGesturesPlugin,
          multi: true,
          deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
        },
        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: HammerModule, decorators: [{
      type: NgModule,
      args: [{
        providers: [
          {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: HammerGesturesPlugin,
            multi: true,
            deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
          },
          { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
        ]
      }]
    }] });
    DomSanitizer = class _DomSanitizer {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _DomSanitizer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _DomSanitizer, providedIn: "root", useExisting: forwardRef(() => DomSanitizerImpl) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: DomSanitizer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useExisting: forwardRef(() => DomSanitizerImpl) }]
    }] });
    DomSanitizerImpl = class _DomSanitizerImpl extends DomSanitizer {
      _doc;
      constructor(_doc) {
        super();
        this._doc = _doc;
      }
      sanitize(ctx, value) {
        if (value == null)
          return null;
        switch (ctx) {
          case SecurityContext.NONE:
            return value;
          case SecurityContext.HTML:
            if (allowSanitizationBypassAndThrow(
              value,
              "HTML"
              /* BypassType.Html */
            )) {
              return unwrapSafeValue(value);
            }
            return _sanitizeHtml(this._doc, String(value)).toString();
          case SecurityContext.STYLE:
            if (allowSanitizationBypassAndThrow(
              value,
              "Style"
              /* BypassType.Style */
            )) {
              return unwrapSafeValue(value);
            }
            return value;
          case SecurityContext.SCRIPT:
            if (allowSanitizationBypassAndThrow(
              value,
              "Script"
              /* BypassType.Script */
            )) {
              return unwrapSafeValue(value);
            }
            throw new RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
          case SecurityContext.URL:
            if (allowSanitizationBypassAndThrow(
              value,
              "URL"
              /* BypassType.Url */
            )) {
              return unwrapSafeValue(value);
            }
            return _sanitizeUrl(String(value));
          case SecurityContext.RESOURCE_URL:
            if (allowSanitizationBypassAndThrow(
              value,
              "ResourceURL"
              /* BypassType.ResourceUrl */
            )) {
              return unwrapSafeValue(value);
            }
            throw new RuntimeError(5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see ${XSS_SECURITY_URL})`);
          default:
            throw new RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${XSS_SECURITY_URL})`);
        }
      }
      bypassSecurityTrustHtml(value) {
        return bypassSanitizationTrustHtml(value);
      }
      bypassSecurityTrustStyle(value) {
        return bypassSanitizationTrustStyle(value);
      }
      bypassSecurityTrustScript(value) {
        return bypassSanitizationTrustScript(value);
      }
      bypassSecurityTrustUrl(value) {
        return bypassSanitizationTrustUrl(value);
      }
      bypassSecurityTrustResourceUrl(value) {
        return bypassSanitizationTrustResourceUrl(value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _DomSanitizerImpl, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _DomSanitizerImpl, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: DomSanitizerImpl, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    (function(HydrationFeatureKind2) {
      HydrationFeatureKind2[HydrationFeatureKind2["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
      HydrationFeatureKind2[HydrationFeatureKind2["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
      HydrationFeatureKind2[HydrationFeatureKind2["I18nSupport"] = 2] = "I18nSupport";
      HydrationFeatureKind2[HydrationFeatureKind2["EventReplay"] = 3] = "EventReplay";
      HydrationFeatureKind2[HydrationFeatureKind2["IncrementalHydration"] = 4] = "IncrementalHydration";
    })(HydrationFeatureKind || (HydrationFeatureKind = {}));
    VERSION = new Version("20.1.0");
  }
});

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
var init_typeof = __esm({
  "node_modules/@babel/runtime/helpers/esm/typeof.js"() {
    "use strict";
  }
});

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var init_toPrimitive = __esm({
  "node_modules/@babel/runtime/helpers/esm/toPrimitive.js"() {
    "use strict";
    init_typeof();
  }
});

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
var init_toPropertyKey = __esm({
  "node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"() {
    "use strict";
    init_typeof();
    init_toPrimitive();
  }
});

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
var init_defineProperty = __esm({
  "node_modules/@babel/runtime/helpers/esm/defineProperty.js"() {
    "use strict";
    init_toPropertyKey();
  }
});

// node_modules/@ant-design/fast-color/es/FastColor.js
function splitColorStr(str, parseNum) {
  const match = str.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [];
  const numList = match.map((item) => parseFloat(item));
  for (let i = 0; i < 3; i += 1) {
    numList[i] = parseNum(numList[i] || 0, match[i] || "", i);
  }
  if (match[3]) {
    numList[3] = match[3].includes("%") ? numList[3] / 100 : numList[3];
  } else {
    numList[3] = 1;
  }
  return numList;
}
function limitRange(value, max) {
  const mergedMax = max || 255;
  if (value > mergedMax) {
    return mergedMax;
  }
  if (value < 0) {
    return 0;
  }
  return value;
}
var round, parseHSVorHSL, FastColor;
var init_FastColor = __esm({
  "node_modules/@ant-design/fast-color/es/FastColor.js"() {
    "use strict";
    init_defineProperty();
    round = Math.round;
    parseHSVorHSL = (num, _, index) => index === 0 ? num : num / 100;
    FastColor = class _FastColor {
      constructor(input2) {
        _defineProperty(this, "isValid", true);
        _defineProperty(this, "r", 0);
        _defineProperty(this, "g", 0);
        _defineProperty(this, "b", 0);
        _defineProperty(this, "a", 1);
        _defineProperty(this, "_h", void 0);
        _defineProperty(this, "_s", void 0);
        _defineProperty(this, "_l", void 0);
        _defineProperty(this, "_v", void 0);
        _defineProperty(this, "_max", void 0);
        _defineProperty(this, "_min", void 0);
        _defineProperty(this, "_brightness", void 0);
        function matchFormat(str) {
          return str[0] in input2 && str[1] in input2 && str[2] in input2;
        }
        if (!input2) {
        } else if (typeof input2 === "string") {
          let matchPrefix2 = function(prefix) {
            return trimStr.startsWith(prefix);
          };
          var matchPrefix = matchPrefix2;
          const trimStr = input2.trim();
          if (/^#?[A-F\d]{3,8}$/i.test(trimStr)) {
            this.fromHexString(trimStr);
          } else if (matchPrefix2("rgb")) {
            this.fromRgbString(trimStr);
          } else if (matchPrefix2("hsl")) {
            this.fromHslString(trimStr);
          } else if (matchPrefix2("hsv") || matchPrefix2("hsb")) {
            this.fromHsvString(trimStr);
          }
        } else if (input2 instanceof _FastColor) {
          this.r = input2.r;
          this.g = input2.g;
          this.b = input2.b;
          this.a = input2.a;
          this._h = input2._h;
          this._s = input2._s;
          this._l = input2._l;
          this._v = input2._v;
        } else if (matchFormat("rgb")) {
          this.r = limitRange(input2.r);
          this.g = limitRange(input2.g);
          this.b = limitRange(input2.b);
          this.a = typeof input2.a === "number" ? limitRange(input2.a, 1) : 1;
        } else if (matchFormat("hsl")) {
          this.fromHsl(input2);
        } else if (matchFormat("hsv")) {
          this.fromHsv(input2);
        } else {
          throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(input2));
        }
      }
      // ======================= Setter =======================
      setR(value) {
        return this._sc("r", value);
      }
      setG(value) {
        return this._sc("g", value);
      }
      setB(value) {
        return this._sc("b", value);
      }
      setA(value) {
        return this._sc("a", value, 1);
      }
      setHue(value) {
        const hsv = this.toHsv();
        hsv.h = value;
        return this._c(hsv);
      }
      // ======================= Getter =======================
      /**
       * Returns the perceived luminance of a color, from 0-1.
       * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
       */
      getLuminance() {
        function adjustGamma(raw) {
          const val = raw / 255;
          return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
        }
        const R = adjustGamma(this.r);
        const G = adjustGamma(this.g);
        const B = adjustGamma(this.b);
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
      }
      getHue() {
        if (typeof this._h === "undefined") {
          const delta = this.getMax() - this.getMin();
          if (delta === 0) {
            this._h = 0;
          } else {
            this._h = round(60 * (this.r === this.getMax() ? (this.g - this.b) / delta + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / delta + 2 : (this.r - this.g) / delta + 4));
          }
        }
        return this._h;
      }
      getSaturation() {
        if (typeof this._s === "undefined") {
          const delta = this.getMax() - this.getMin();
          if (delta === 0) {
            this._s = 0;
          } else {
            this._s = delta / this.getMax();
          }
        }
        return this._s;
      }
      getLightness() {
        if (typeof this._l === "undefined") {
          this._l = (this.getMax() + this.getMin()) / 510;
        }
        return this._l;
      }
      getValue() {
        if (typeof this._v === "undefined") {
          this._v = this.getMax() / 255;
        }
        return this._v;
      }
      /**
       * Returns the perceived brightness of the color, from 0-255.
       * Note: this is not the b of HSB
       * @see http://www.w3.org/TR/AERT#color-contrast
       */
      getBrightness() {
        if (typeof this._brightness === "undefined") {
          this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3;
        }
        return this._brightness;
      }
      // ======================== Func ========================
      darken(amount = 10) {
        const h = this.getHue();
        const s = this.getSaturation();
        let l = this.getLightness() - amount / 100;
        if (l < 0) {
          l = 0;
        }
        return this._c({
          h,
          s,
          l,
          a: this.a
        });
      }
      lighten(amount = 10) {
        const h = this.getHue();
        const s = this.getSaturation();
        let l = this.getLightness() + amount / 100;
        if (l > 1) {
          l = 1;
        }
        return this._c({
          h,
          s,
          l,
          a: this.a
        });
      }
      /**
       * Mix the current color a given amount with another color, from 0 to 100.
       * 0 means no mixing (return current color).
       */
      mix(input2, amount = 50) {
        const color = this._c(input2);
        const p = amount / 100;
        const calc = (key) => (color[key] - this[key]) * p + this[key];
        const rgba = {
          r: round(calc("r")),
          g: round(calc("g")),
          b: round(calc("b")),
          a: round(calc("a") * 100) / 100
        };
        return this._c(rgba);
      }
      /**
       * Mix the color with pure white, from 0 to 100.
       * Providing 0 will do nothing, providing 100 will always return white.
       */
      tint(amount = 10) {
        return this.mix({
          r: 255,
          g: 255,
          b: 255,
          a: 1
        }, amount);
      }
      /**
       * Mix the color with pure black, from 0 to 100.
       * Providing 0 will do nothing, providing 100 will always return black.
       */
      shade(amount = 10) {
        return this.mix({
          r: 0,
          g: 0,
          b: 0,
          a: 1
        }, amount);
      }
      onBackground(background) {
        const bg = this._c(background);
        const alpha = this.a + bg.a * (1 - this.a);
        const calc = (key) => {
          return round((this[key] * this.a + bg[key] * bg.a * (1 - this.a)) / alpha);
        };
        return this._c({
          r: calc("r"),
          g: calc("g"),
          b: calc("b"),
          a: alpha
        });
      }
      // ======================= Status =======================
      isDark() {
        return this.getBrightness() < 128;
      }
      isLight() {
        return this.getBrightness() >= 128;
      }
      // ======================== MISC ========================
      equals(other) {
        return this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
      }
      clone() {
        return this._c(this);
      }
      // ======================= Format =======================
      toHexString() {
        let hex = "#";
        const rHex = (this.r || 0).toString(16);
        hex += rHex.length === 2 ? rHex : "0" + rHex;
        const gHex = (this.g || 0).toString(16);
        hex += gHex.length === 2 ? gHex : "0" + gHex;
        const bHex = (this.b || 0).toString(16);
        hex += bHex.length === 2 ? bHex : "0" + bHex;
        if (typeof this.a === "number" && this.a >= 0 && this.a < 1) {
          const aHex = round(this.a * 255).toString(16);
          hex += aHex.length === 2 ? aHex : "0" + aHex;
        }
        return hex;
      }
      /** CSS support color pattern */
      toHsl() {
        return {
          h: this.getHue(),
          s: this.getSaturation(),
          l: this.getLightness(),
          a: this.a
        };
      }
      /** CSS support color pattern */
      toHslString() {
        const h = this.getHue();
        const s = round(this.getSaturation() * 100);
        const l = round(this.getLightness() * 100);
        return this.a !== 1 ? `hsla(${h},${s}%,${l}%,${this.a})` : `hsl(${h},${s}%,${l}%)`;
      }
      /** Same as toHsb */
      toHsv() {
        return {
          h: this.getHue(),
          s: this.getSaturation(),
          v: this.getValue(),
          a: this.a
        };
      }
      toRgb() {
        return {
          r: this.r,
          g: this.g,
          b: this.b,
          a: this.a
        };
      }
      toRgbString() {
        return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
      }
      toString() {
        return this.toRgbString();
      }
      // ====================== Privates ======================
      /** Return a new FastColor object with one channel changed */
      _sc(rgb, value, max) {
        const clone = this.clone();
        clone[rgb] = limitRange(value, max);
        return clone;
      }
      _c(input2) {
        return new this.constructor(input2);
      }
      getMax() {
        if (typeof this._max === "undefined") {
          this._max = Math.max(this.r, this.g, this.b);
        }
        return this._max;
      }
      getMin() {
        if (typeof this._min === "undefined") {
          this._min = Math.min(this.r, this.g, this.b);
        }
        return this._min;
      }
      fromHexString(trimStr) {
        const withoutPrefix = trimStr.replace("#", "");
        function connectNum(index1, index2) {
          return parseInt(withoutPrefix[index1] + withoutPrefix[index2 || index1], 16);
        }
        if (withoutPrefix.length < 6) {
          this.r = connectNum(0);
          this.g = connectNum(1);
          this.b = connectNum(2);
          this.a = withoutPrefix[3] ? connectNum(3) / 255 : 1;
        } else {
          this.r = connectNum(0, 1);
          this.g = connectNum(2, 3);
          this.b = connectNum(4, 5);
          this.a = withoutPrefix[6] ? connectNum(6, 7) / 255 : 1;
        }
      }
      fromHsl({
        h,
        s,
        l,
        a
      }) {
        this._h = h % 360;
        this._s = s;
        this._l = l;
        this.a = typeof a === "number" ? a : 1;
        if (s <= 0) {
          const rgb = round(l * 255);
          this.r = rgb;
          this.g = rgb;
          this.b = rgb;
        }
        let r = 0, g = 0, b = 0;
        const huePrime = h / 60;
        const chroma = (1 - Math.abs(2 * l - 1)) * s;
        const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
        if (huePrime >= 0 && huePrime < 1) {
          r = chroma;
          g = secondComponent;
        } else if (huePrime >= 1 && huePrime < 2) {
          r = secondComponent;
          g = chroma;
        } else if (huePrime >= 2 && huePrime < 3) {
          g = chroma;
          b = secondComponent;
        } else if (huePrime >= 3 && huePrime < 4) {
          g = secondComponent;
          b = chroma;
        } else if (huePrime >= 4 && huePrime < 5) {
          r = secondComponent;
          b = chroma;
        } else if (huePrime >= 5 && huePrime < 6) {
          r = chroma;
          b = secondComponent;
        }
        const lightnessModification = l - chroma / 2;
        this.r = round((r + lightnessModification) * 255);
        this.g = round((g + lightnessModification) * 255);
        this.b = round((b + lightnessModification) * 255);
      }
      fromHsv({
        h,
        s,
        v,
        a
      }) {
        this._h = h % 360;
        this._s = s;
        this._v = v;
        this.a = typeof a === "number" ? a : 1;
        const vv = round(v * 255);
        this.r = vv;
        this.g = vv;
        this.b = vv;
        if (s <= 0) {
          return;
        }
        const hh = h / 60;
        const i = Math.floor(hh);
        const ff = hh - i;
        const p = round(v * (1 - s) * 255);
        const q = round(v * (1 - s * ff) * 255);
        const t = round(v * (1 - s * (1 - ff)) * 255);
        switch (i) {
          case 0:
            this.g = t;
            this.b = p;
            break;
          case 1:
            this.r = q;
            this.b = p;
            break;
          case 2:
            this.r = p;
            this.b = t;
            break;
          case 3:
            this.r = p;
            this.g = q;
            break;
          case 4:
            this.r = t;
            this.g = p;
            break;
          case 5:
          default:
            this.g = p;
            this.b = q;
            break;
        }
      }
      fromHsvString(trimStr) {
        const cells = splitColorStr(trimStr, parseHSVorHSL);
        this.fromHsv({
          h: cells[0],
          s: cells[1],
          v: cells[2],
          a: cells[3]
        });
      }
      fromHslString(trimStr) {
        const cells = splitColorStr(trimStr, parseHSVorHSL);
        this.fromHsl({
          h: cells[0],
          s: cells[1],
          l: cells[2],
          a: cells[3]
        });
      }
      fromRgbString(trimStr) {
        const cells = splitColorStr(trimStr, (num, txt) => (
          // Convert percentage to number. e.g. 50% -> 128
          txt.includes("%") ? round(num / 100 * 255) : num
        ));
        this.r = cells[0];
        this.g = cells[1];
        this.b = cells[2];
        this.a = cells[3];
      }
    };
  }
});

// node_modules/@ant-design/fast-color/es/types.js
var init_types = __esm({
  "node_modules/@ant-design/fast-color/es/types.js"() {
    "use strict";
  }
});

// node_modules/@ant-design/fast-color/es/index.js
var init_es = __esm({
  "node_modules/@ant-design/fast-color/es/index.js"() {
    "use strict";
    init_FastColor();
    init_types();
  }
});

// node_modules/@ant-design/colors/es/generate.js
function getHue2(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep2 * i : Math.round(hsv.h) + hueStep2 * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep2 * i : Math.round(hsv.h) - hueStep2 * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation2(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep3 * i;
  } else if (i === darkColorCount2) {
    saturation = hsv.s + saturationStep3;
  } else {
    saturation = hsv.s + saturationStep22 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount2 && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Math.round(saturation * 100) / 100;
}
function getValue2(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep12 * i;
  } else {
    value = hsv.v - brightnessStep22 * i;
  }
  value = Math.max(0, Math.min(1, value));
  return Math.round(value * 100) / 100;
}
function generate2(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = new FastColor(color);
  var hsv = pColor.toHsv();
  for (var i = lightColorCount2; i > 0; i -= 1) {
    var c = new FastColor({
      h: getHue2(hsv, i, true),
      s: getSaturation2(hsv, i, true),
      v: getValue2(hsv, i, true)
    });
    patterns.push(c);
  }
  patterns.push(pColor);
  for (var _i = 1; _i <= darkColorCount2; _i += 1) {
    var _c = new FastColor({
      h: getHue2(hsv, _i),
      s: getSaturation2(hsv, _i),
      v: getValue2(hsv, _i)
    });
    patterns.push(_c);
  }
  if (opts.theme === "dark") {
    return darkColorMap2.map(function(_ref) {
      var index = _ref.index, amount = _ref.amount;
      return new FastColor(opts.backgroundColor || "#141414").mix(patterns[index], amount).toHexString();
    });
  }
  return patterns.map(function(c2) {
    return c2.toHexString();
  });
}
var hueStep2, saturationStep3, saturationStep22, brightnessStep12, brightnessStep22, lightColorCount2, darkColorCount2, darkColorMap2;
var init_generate = __esm({
  "node_modules/@ant-design/colors/es/generate.js"() {
    "use strict";
    init_es();
    hueStep2 = 2;
    saturationStep3 = 0.16;
    saturationStep22 = 0.05;
    brightnessStep12 = 0.05;
    brightnessStep22 = 0.15;
    lightColorCount2 = 5;
    darkColorCount2 = 4;
    darkColorMap2 = [{
      index: 7,
      amount: 15
    }, {
      index: 6,
      amount: 25
    }, {
      index: 5,
      amount: 30
    }, {
      index: 5,
      amount: 45
    }, {
      index: 5,
      amount: 65
    }, {
      index: 5,
      amount: 85
    }, {
      index: 4,
      amount: 90
    }, {
      index: 3,
      amount: 95
    }, {
      index: 2,
      amount: 97
    }, {
      index: 1,
      amount: 98
    }];
  }
});

// node_modules/@ant-design/colors/es/presets.js
var red, volcano, orange, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey, redDark, volcanoDark, orangeDark, goldDark, yellowDark, limeDark, greenDark, cyanDark, blueDark, geekblueDark, purpleDark, magentaDark, greyDark;
var init_presets = __esm({
  "node_modules/@ant-design/colors/es/presets.js"() {
    "use strict";
    red = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
    red.primary = red[5];
    volcano = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
    volcano.primary = volcano[5];
    orange = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
    orange.primary = orange[5];
    gold = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
    gold.primary = gold[5];
    yellow = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
    yellow.primary = yellow[5];
    lime = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
    lime.primary = lime[5];
    green = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
    green.primary = green[5];
    cyan = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
    cyan.primary = cyan[5];
    blue = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
    blue.primary = blue[5];
    geekblue = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
    geekblue.primary = geekblue[5];
    purple = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
    purple.primary = purple[5];
    magenta = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
    magenta.primary = magenta[5];
    grey = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
    grey.primary = grey[5];
    redDark = ["#2a1215", "#431418", "#58181c", "#791a1f", "#a61d24", "#d32029", "#e84749", "#f37370", "#f89f9a", "#fac8c3"];
    redDark.primary = redDark[5];
    volcanoDark = ["#2b1611", "#441d12", "#592716", "#7c3118", "#aa3e19", "#d84a1b", "#e87040", "#f3956a", "#f8b692", "#fad4bc"];
    volcanoDark.primary = volcanoDark[5];
    orangeDark = ["#2b1d11", "#442a11", "#593815", "#7c4a15", "#aa6215", "#d87a16", "#e89a3c", "#f3b765", "#f8cf8d", "#fae3b7"];
    orangeDark.primary = orangeDark[5];
    goldDark = ["#2b2111", "#443111", "#594214", "#7c5914", "#aa7714", "#d89614", "#e8b339", "#f3cc62", "#f8df8b", "#faedb5"];
    goldDark.primary = goldDark[5];
    yellowDark = ["#2b2611", "#443b11", "#595014", "#7c6e14", "#aa9514", "#d8bd14", "#e8d639", "#f3ea62", "#f8f48b", "#fafab5"];
    yellowDark.primary = yellowDark[5];
    limeDark = ["#1f2611", "#2e3c10", "#3e4f13", "#536d13", "#6f9412", "#8bbb11", "#a9d134", "#c9e75d", "#e4f88b", "#f0fab5"];
    limeDark.primary = limeDark[5];
    greenDark = ["#162312", "#1d3712", "#274916", "#306317", "#3c8618", "#49aa19", "#6abe39", "#8fd460", "#b2e58b", "#d5f2bb"];
    greenDark.primary = greenDark[5];
    cyanDark = ["#112123", "#113536", "#144848", "#146262", "#138585", "#13a8a8", "#33bcb7", "#58d1c9", "#84e2d8", "#b2f1e8"];
    cyanDark.primary = cyanDark[5];
    blueDark = ["#111a2c", "#112545", "#15325b", "#15417e", "#1554ad", "#1668dc", "#3c89e8", "#65a9f3", "#8dc5f8", "#b7dcfa"];
    blueDark.primary = blueDark[5];
    geekblueDark = ["#131629", "#161d40", "#1c2755", "#203175", "#263ea0", "#2b4acb", "#5273e0", "#7f9ef3", "#a8c1f8", "#d2e0fa"];
    geekblueDark.primary = geekblueDark[5];
    purpleDark = ["#1a1325", "#24163a", "#301c4d", "#3e2069", "#51258f", "#642ab5", "#854eca", "#ab7ae0", "#cda8f0", "#ebd7fa"];
    purpleDark.primary = purpleDark[5];
    magentaDark = ["#291321", "#40162f", "#551c3b", "#75204f", "#a02669", "#cb2b83", "#e0529c", "#f37fb7", "#f8a8cc", "#fad2e3"];
    magentaDark.primary = magentaDark[5];
    greyDark = ["#151515", "#1f1f1f", "#2d2d2d", "#393939", "#494949", "#5a5a5a", "#6a6a6a", "#7b7b7b", "#888888", "#969696"];
    greyDark.primary = greyDark[5];
  }
});

// node_modules/@ant-design/colors/es/index.js
var init_es2 = __esm({
  "node_modules/@ant-design/colors/es/index.js"() {
    "use strict";
    init_generate();
    init_presets();
  }
});

// node_modules/@ant-design/icons-angular/fesm2022/ant-design-icons-angular.mjs
function error(message) {
  console.error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX} ${message}.`);
}
function warn2(message) {
  if (isDevMode()) {
    console.warn(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX} ${message}.`);
  }
}
function getSecondaryColor(primaryColor) {
  return generate2(primaryColor)[0];
}
function withSuffix(name2, theme) {
  switch (theme) {
    case "fill":
      return `${name2}-fill`;
    case "outline":
      return `${name2}-o`;
    case "twotone":
      return `${name2}-twotone`;
    case void 0:
      return name2;
    default:
      throw new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Theme "${theme}" is not a recognized theme!`);
  }
}
function withSuffixAndColor(name2, theme, pri, sec) {
  return `${withSuffix(name2, theme)}-${pri}-${sec}`;
}
function mapAbbrToTheme(abbr) {
  return abbr === "o" ? "outline" : abbr;
}
function alreadyHasAThemeSuffix(name2) {
  return name2.endsWith("-fill") || name2.endsWith("-o") || name2.endsWith("-twotone");
}
function isIconDefinition(target) {
  return typeof target === "object" && typeof target.name === "string" && (typeof target.theme === "string" || target.theme === void 0) && typeof target.icon === "string";
}
function getIconDefinitionFromAbbr(str) {
  const arr = str.split("-");
  const theme = mapAbbrToTheme(arr.splice(arr.length - 1, 1)[0]);
  const name2 = arr.join("-");
  return {
    name: name2,
    theme,
    icon: ""
  };
}
function cloneSVG(svg) {
  return svg.cloneNode(true);
}
function replaceFillColor(raw) {
  return raw.replace(/['"]#333['"]/g, '"primaryColor"').replace(/['"]#E6E6E6['"]/g, '"secondaryColor"').replace(/['"]#D9D9D9['"]/g, '"secondaryColor"').replace(/['"]#D8D8D8['"]/g, '"secondaryColor"');
}
function getNameAndNamespace(type) {
  const split = type.split(":");
  switch (split.length) {
    case 1:
      return [type, ""];
    case 2:
      return [split[1], split[0]];
    default:
      throw new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}The icon type ${type} is not valid!`);
  }
}
function hasNamespace(type) {
  return getNameAndNamespace(type)[1] !== "";
}
function NameSpaceIsNotSpecifyError() {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Type should have a namespace. Try "namespace:${name}".`);
}
function IconNotFoundError(icon) {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}the icon ${icon} does not exist or is not registered.`);
}
function HttpModuleNotImport() {
  error(`you need to import "HttpClientModule" to use dynamic importing.`);
  return null;
}
function UrlNotSafeError(url) {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}The url "${url}" is unsafe.`);
}
function SVGTagNotFoundError() {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}<svg> tag not found.`);
}
function DynamicLoadingTimeoutError() {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Importing timeout error.`);
}
function checkMeta(prev, after) {
  return prev.type === after.type && prev.theme === after.theme && prev.twoToneColor === after.twoToneColor;
}
var ANT_ICON_ANGULAR_CONSOLE_PREFIX, JSONP_HANDLER_NAME, ANT_ICONS, _IconService, IconService, _IconDirective, IconDirective;
var init_ant_design_icons_angular = __esm({
  "node_modules/@ant-design/icons-angular/fesm2022/ant-design-icons-angular.mjs"() {
    "use strict";
    init_http();
    init_core();
    init_core();
    init_platform_browser();
    init_esm();
    init_operators();
    init_es2();
    ANT_ICON_ANGULAR_CONSOLE_PREFIX = "[@ant-design/icons-angular]:";
    JSONP_HANDLER_NAME = "__ant_icon_load";
    ANT_ICONS = new InjectionToken("ant_icons");
    _IconService = class _IconService {
      set twoToneColor({ primaryColor, secondaryColor }) {
        this._twoToneColorPalette.primaryColor = primaryColor;
        this._twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
      }
      get twoToneColor() {
        return __spreadValues({}, this._twoToneColorPalette);
      }
      /**
       * Disable dynamic loading (support static loading only).
       */
      get _disableDynamicLoading() {
        return false;
      }
      constructor(_antIcons) {
        this._antIcons = _antIcons;
        this.defaultTheme = "outline";
        this._svgDefinitions = /* @__PURE__ */ new Map();
        this._svgRenderedDefinitions = /* @__PURE__ */ new Map();
        this._inProgressFetches = /* @__PURE__ */ new Map();
        this._assetsUrlRoot = "";
        this._twoToneColorPalette = {
          primaryColor: "#333333",
          secondaryColor: "#E6E6E6"
        };
        this._enableJsonpLoading = false;
        this._jsonpIconLoad$ = new Subject();
        this._rendererFactory = inject(RendererFactory2);
        this._handler = inject(HttpBackend, { optional: true });
        this._document = inject(DOCUMENT);
        this.sanitizer = inject(DomSanitizer);
        this._renderer = this._rendererFactory.createRenderer(null, null);
        if (this._handler) {
          this._http = new HttpClient(this._handler);
        }
        if (this._antIcons) {
          this.addIcon(...this._antIcons);
        }
      }
      /**
       * Call this method to switch to jsonp like loading.
       */
      useJsonpLoading() {
        if (!this._enableJsonpLoading) {
          this._enableJsonpLoading = true;
          window[JSONP_HANDLER_NAME] = (icon) => {
            this._jsonpIconLoad$.next(icon);
          };
        } else {
          warn2("You are already using jsonp loading.");
        }
      }
      /**
       * Change the prefix of the inline svg resources, so they could be deployed elsewhere, like CDN.
       * @param prefix
       */
      changeAssetsSource(prefix) {
        this._assetsUrlRoot = prefix.endsWith("/") ? prefix : prefix + "/";
      }
      /**
       * Add icons provided by ant design.
       * @param icons
       */
      addIcon(...icons) {
        icons.forEach((icon) => {
          this._svgDefinitions.set(withSuffix(icon.name, icon.theme), icon);
        });
      }
      /**
       * Register an icon. Namespace is required.
       * @param type
       * @param literal
       */
      addIconLiteral(type, literal) {
        const [_, namespace] = getNameAndNamespace(type);
        if (!namespace) {
          throw NameSpaceIsNotSpecifyError();
        }
        this.addIcon({ name: type, icon: literal });
      }
      /**
       * Remove all cache.
       */
      clear() {
        this._svgDefinitions.clear();
        this._svgRenderedDefinitions.clear();
      }
      /**
       * Get a rendered `SVGElement`.
       * @param icon
       * @param twoToneColor
       */
      getRenderedContent(icon, twoToneColor) {
        const definition = isIconDefinition(icon) ? icon : this._svgDefinitions.get(icon) || null;
        if (!definition && this._disableDynamicLoading) {
          throw IconNotFoundError(icon);
        }
        const $iconDefinition = definition ? of(definition) : this._loadIconDynamically(icon);
        return $iconDefinition.pipe(map((i) => {
          if (!i) {
            throw IconNotFoundError(icon);
          }
          return this._loadSVGFromCacheOrCreateNew(i, twoToneColor);
        }));
      }
      getCachedIcons() {
        return this._svgDefinitions;
      }
      /**
       * Get raw svg and assemble a `IconDefinition` object.
       * @param type
       */
      _loadIconDynamically(type) {
        if (!this._http && !this._enableJsonpLoading) {
          return of(HttpModuleNotImport());
        }
        let inProgress = this._inProgressFetches.get(type);
        if (!inProgress) {
          const [name2, namespace] = getNameAndNamespace(type);
          const icon = namespace ? { name: type, icon: "" } : getIconDefinitionFromAbbr(name2);
          const suffix = this._enableJsonpLoading ? ".js" : ".svg";
          const url = (namespace ? `${this._assetsUrlRoot}assets/${namespace}/${name2}` : `${this._assetsUrlRoot}assets/${icon.theme}/${icon.name}`) + suffix;
          const safeUrl = this.sanitizer.sanitize(SecurityContext.URL, url);
          if (!safeUrl) {
            throw UrlNotSafeError(url);
          }
          const source = !this._enableJsonpLoading ? this._http.get(safeUrl, { responseType: "text" }).pipe(map((literal) => __spreadProps(__spreadValues({}, icon), { icon: literal }))) : this._loadIconDynamicallyWithJsonp(icon, safeUrl);
          inProgress = source.pipe(tap((definition) => this.addIcon(definition)), finalize(() => this._inProgressFetches.delete(type)), catchError(() => of(null)), share());
          this._inProgressFetches.set(type, inProgress);
        }
        return inProgress;
      }
      _loadIconDynamicallyWithJsonp(icon, url) {
        return new Observable((subscriber) => {
          const loader = this._document.createElement("script");
          const timer = setTimeout(() => {
            clean();
            subscriber.error(DynamicLoadingTimeoutError());
          }, 6e3);
          loader.src = url;
          function clean() {
            loader.parentNode.removeChild(loader);
            clearTimeout(timer);
          }
          this._document.body.appendChild(loader);
          this._jsonpIconLoad$.pipe(filter((i) => i.name === icon.name && i.theme === icon.theme), take(1)).subscribe((i) => {
            subscriber.next(i);
            clean();
          });
        });
      }
      /**
       * Render a new `SVGElement` for a given `IconDefinition`, or make a copy from cache.
       * @param icon
       * @param twoToneColor
       */
      _loadSVGFromCacheOrCreateNew(icon, twoToneColor) {
        let svg;
        const pri = twoToneColor || this._twoToneColorPalette.primaryColor;
        const sec = getSecondaryColor(pri) || this._twoToneColorPalette.secondaryColor;
        const key = icon.theme === "twotone" ? withSuffixAndColor(icon.name, icon.theme, pri, sec) : icon.theme === void 0 ? icon.name : withSuffix(icon.name, icon.theme);
        const cached = this._svgRenderedDefinitions.get(key);
        if (cached) {
          svg = cached.icon;
        } else {
          svg = this._setSVGAttribute(this._colorizeSVGIcon(
            // Icons provided by ant design should be refined to remove preset colors.
            this._createSVGElementFromString(hasNamespace(icon.name) ? icon.icon : replaceFillColor(icon.icon)),
            icon.theme === "twotone",
            pri,
            sec
          ));
          this._svgRenderedDefinitions.set(key, __spreadProps(__spreadValues({}, icon), {
            icon: svg
          }));
        }
        return cloneSVG(svg);
      }
      _createSVGElementFromString(str) {
        const div = this._document.createElement("div");
        div.innerHTML = str;
        const svg = div.querySelector("svg");
        if (!svg) {
          throw SVGTagNotFoundError;
        }
        return svg;
      }
      _setSVGAttribute(svg) {
        this._renderer.setAttribute(svg, "width", "1em");
        this._renderer.setAttribute(svg, "height", "1em");
        return svg;
      }
      _colorizeSVGIcon(svg, twotone, pri, sec) {
        if (twotone) {
          const children = svg.childNodes;
          const length = children.length;
          for (let i = 0; i < length; i++) {
            const child = children[i];
            if (child.getAttribute("fill") === "secondaryColor") {
              this._renderer.setAttribute(child, "fill", sec);
            } else {
              this._renderer.setAttribute(child, "fill", pri);
            }
          }
        }
        this._renderer.setAttribute(svg, "fill", "currentColor");
        return svg;
      }
    };
    _IconService.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _IconService, deps: [{ token: ANT_ICONS, optional: true }], target: FactoryTarget.Injectable });
    _IconService.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _IconService, providedIn: "root" });
    IconService = _IconService;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: IconService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANT_ICONS]
    }] }] });
    _IconDirective = class _IconDirective {
      constructor(_iconService) {
        this._iconService = _iconService;
        this._elementRef = inject(ElementRef);
        this._renderer = inject(Renderer2);
      }
      ngOnChanges(changes) {
        if (changes.type || changes.theme || changes.twoToneColor) {
          this._changeIcon();
        }
      }
      /**
       * Render a new icon in the current element. Remove the icon when `type` is falsy.
       */
      _changeIcon() {
        return new Promise((resolve) => {
          if (!this.type) {
            this._clearSVGElement();
            resolve(null);
            return;
          }
          const beforeMeta = this._getSelfRenderMeta();
          this._iconService.getRenderedContent(this._parseIconType(this.type, this.theme), this.twoToneColor).subscribe((svg) => {
            const afterMeta = this._getSelfRenderMeta();
            if (checkMeta(beforeMeta, afterMeta)) {
              this._setSVGElement(svg);
              resolve(svg);
            } else {
              resolve(null);
            }
          });
        });
      }
      _getSelfRenderMeta() {
        return {
          type: this.type,
          theme: this.theme,
          twoToneColor: this.twoToneColor
        };
      }
      /**
       * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
       * If namespace is specified, ignore theme because it meaningless for users' icons.
       *
       * @param type
       * @param theme
       */
      _parseIconType(type, theme) {
        if (isIconDefinition(type)) {
          return type;
        } else {
          const [name2, namespace] = getNameAndNamespace(type);
          if (namespace) {
            return type;
          }
          if (alreadyHasAThemeSuffix(name2)) {
            if (theme) {
              warn2(`'type' ${name2} already gets a theme inside so 'theme' ${theme} would be ignored`);
            }
            return name2;
          } else {
            return withSuffix(name2, theme || this._iconService.defaultTheme);
          }
        }
      }
      _setSVGElement(svg) {
        this._clearSVGElement();
        this._renderer.appendChild(this._elementRef.nativeElement, svg);
      }
      _clearSVGElement() {
        const el = this._elementRef.nativeElement;
        const children = el.childNodes;
        const length = children.length;
        for (let i = length - 1; i >= 0; i--) {
          const child = children[i];
          if (child.tagName?.toLowerCase() === "svg") {
            this._renderer.removeChild(el, child);
          }
        }
      }
    };
    _IconDirective.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _IconDirective, deps: [{ token: IconService }], target: FactoryTarget.Directive });
    _IconDirective.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _IconDirective, isStandalone: true, selector: "[antIcon]", inputs: { type: "type", theme: "theme", twoToneColor: "twoToneColor" }, usesOnChanges: true, ngImport: core_exports });
    IconDirective = _IconDirective;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: IconDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[antIcon]"
      }]
    }], ctorParameters: () => [{ type: IconService }], propDecorators: { type: [{
      type: Input
    }], theme: [{
      type: Input
    }], twoToneColor: [{
      type: Input
    }] } });
  }
});

// node_modules/@angular/cdk/fesm2022/platform-DNDzkVcI.mjs
var hasV8BreakIterator, Platform;
var init_platform_DNDzkVcI = __esm({
  "node_modules/@angular/cdk/fesm2022/platform-DNDzkVcI.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    try {
      hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
    } catch {
      hasV8BreakIterator = false;
    }
    Platform = class _Platform {
      _platformId = inject(PLATFORM_ID);
      // We want to use the Angular platform check because if the Document is shimmed
      // without the navigator, the following checks will fail. This is preferred because
      // sometimes the Document may be shimmed without the user's knowledge or intention
      /** Whether the Angular application is being rendered in the browser. */
      isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
      /** Whether the current browser is Microsoft Edge. */
      EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
      /** Whether the current rendering engine is Microsoft Trident. */
      TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
      // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
      /** Whether the current rendering engine is Blink. */
      BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
      // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
      // ensure that Webkit runs standalone and is not used as another engine's base.
      /** Whether the current rendering engine is WebKit. */
      WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
      /** Whether the current platform is Apple iOS. */
      IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
      // It's difficult to detect the plain Gecko engine, because most of the browsers identify
      // them self as Gecko-like browsers and modify the userAgent's according to that.
      // Since we only cover one explicit Firefox case, we can simply check for Firefox
      // instead of having an unstable check for Gecko.
      /** Whether the current browser is Firefox. */
      FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
      /** Whether the current platform is Android. */
      // Trident on mobile adds the android platform to the userAgent to trick detections.
      ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
      // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
      // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
      // Safari browser should also use Webkit as its layout engine.
      /** Whether the current browser is Safari. */
      SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Platform, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Platform, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Platform, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/scrolling-BkvA05C8.mjs
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}
var RtlScrollAxisType, rtlScrollAxisType, scrollBehaviorSupported;
var init_scrolling_BkvA05C8 = __esm({
  "node_modules/@angular/cdk/fesm2022/scrolling-BkvA05C8.mjs"() {
    "use strict";
    (function(RtlScrollAxisType2) {
      RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
      RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
      RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
    })(RtlScrollAxisType || (RtlScrollAxisType = {}));
  }
});

// node_modules/@angular/cdk/fesm2022/shadow-dom-B0oHn41l.mjs
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}
var init_shadow_dom_B0oHn41l = __esm({
  "node_modules/@angular/cdk/fesm2022/shadow-dom-B0oHn41l.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/test-environment-CT0XxPyp.mjs
function _isTestEnvironment() {
  return (
    // @ts-ignore
    typeof __karma__ !== "undefined" && !!__karma__ || // @ts-ignore
    typeof jasmine !== "undefined" && !!jasmine || // @ts-ignore
    typeof jest !== "undefined" && !!jest || // @ts-ignore
    typeof Mocha !== "undefined" && !!Mocha
  );
}
var init_test_environment_CT0XxPyp = __esm({
  "node_modules/@angular/cdk/fesm2022/test-environment-CT0XxPyp.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/platform.mjs
var PlatformModule;
var init_platform = __esm({
  "node_modules/@angular/cdk/fesm2022/platform.mjs"() {
    "use strict";
    init_platform_DNDzkVcI();
    init_core();
    init_core();
    PlatformModule = class _PlatformModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _PlatformModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _PlatformModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _PlatformModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: PlatformModule, decorators: [{
      type: NgModule,
      args: [{}]
    }] });
  }
});

// node_modules/@ant-design/icons-angular/fesm2022/ant-design-icons-angular-icons.mjs
var BarsOutline, CaretDownFill, CaretDownOutline, CaretUpFill, CaretUpOutline, CheckCircleFill, CheckCircleOutline, CheckOutline, CalendarOutline, CloseCircleFill, ClockCircleOutline, CloseOutline, CloseCircleOutline, CopyOutline, DeleteOutline, DoubleLeftOutline, DoubleRightOutline, DownOutline, EditOutline, EllipsisOutline, ExclamationCircleFill, ExclamationCircleOutline, EyeOutline, FileFill, FileOutline, FilterFill, LeftOutline, InfoCircleFill, InfoCircleOutline, LoadingOutline, PaperClipOutline, QuestionCircleOutline, RightOutline, RotateLeftOutline, RotateRightOutline, SearchOutline, StarFill, SwapOutline, SwapRightOutline, UpOutline, UploadOutline, VerticalAlignTopOutline, ZoomInOutline, ZoomOutOutline;
var init_ant_design_icons_angular_icons = __esm({
  "node_modules/@ant-design/icons-angular/fesm2022/ant-design-icons-angular-icons.mjs"() {
    "use strict";
    BarsOutline = {
      name: "bars",
      theme: "outline",
      icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" /></svg>'
    };
    CaretDownFill = {
      name: "caret-down",
      theme: "fill",
      icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" /></svg>'
    };
    CaretDownOutline = {
      name: "caret-down",
      theme: "outline",
      icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" /></svg>'
    };
    CaretUpFill = {
      name: "caret-up",
      theme: "fill",
      icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" /></svg>'
    };
    CaretUpOutline = {
      name: "caret-up",
      theme: "outline",
      icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" /></svg>'
    };
    CheckCircleFill = {
      name: "check-circle",
      theme: "fill",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" /></svg>'
    };
    CheckCircleOutline = {
      name: "check-circle",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" /><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /></svg>'
    };
    CheckOutline = {
      name: "check",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" /></svg>'
    };
    CalendarOutline = {
      name: "calendar",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" /></svg>'
    };
    CloseCircleFill = {
      name: "close-circle",
      theme: "fill",
      icon: '<svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" /></svg>'
    };
    ClockCircleOutline = {
      name: "clock-circle",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" /></svg>'
    };
    CloseOutline = {
      name: "close",
      theme: "outline",
      icon: '<svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" /></svg>'
    };
    CloseCircleOutline = {
      name: "close-circle",
      theme: "outline",
      icon: '<svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" /></svg>'
    };
    CopyOutline = {
      name: "copy",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" /></svg>'
    };
    DeleteOutline = {
      name: "delete",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" /></svg>'
    };
    DoubleLeftOutline = {
      name: "double-left",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" /></svg>'
    };
    DoubleRightOutline = {
      name: "double-right",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" /></svg>'
    };
    DownOutline = {
      name: "down",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg>'
    };
    EditOutline = {
      name: "edit",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" /></svg>'
    };
    EllipsisOutline = {
      name: "ellipsis",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" /></svg>'
    };
    ExclamationCircleFill = {
      name: "exclamation-circle",
      theme: "fill",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" /></svg>'
    };
    ExclamationCircleOutline = {
      name: "exclamation-circle",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" /></svg>'
    };
    EyeOutline = {
      name: "eye",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" /></svg>'
    };
    FileFill = {
      name: "file",
      theme: "fill",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z" /></svg>'
    };
    FileOutline = {
      name: "file",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" /></svg>'
    };
    FilterFill = {
      name: "filter",
      theme: "fill",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z" /></svg>'
    };
    LeftOutline = {
      name: "left",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" /></svg>'
    };
    InfoCircleFill = {
      name: "info-circle",
      theme: "fill",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" /></svg>'
    };
    InfoCircleOutline = {
      name: "info-circle",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" /></svg>'
    };
    LoadingOutline = {
      name: "loading",
      theme: "outline",
      icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" /></svg>'
    };
    PaperClipOutline = {
      name: "paper-clip",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" /></svg>'
    };
    QuestionCircleOutline = {
      name: "question-circle",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" /></svg>'
    };
    RightOutline = {
      name: "right",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" /></svg>'
    };
    RotateLeftOutline = {
      name: "rotate-left",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><defs><style /></defs><path d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z" /><path d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z" /></svg>'
    };
    RotateRightOutline = {
      name: "rotate-right",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><defs><style /></defs><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" /><path d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z" /></svg>'
    };
    SearchOutline = {
      name: "search",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" /></svg>'
    };
    StarFill = {
      name: "star",
      theme: "fill",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" /></svg>'
    };
    SwapOutline = {
      name: "swap",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" /></svg>'
    };
    SwapRightOutline = {
      name: "swap-right",
      theme: "outline",
      icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z" /></svg>'
    };
    UpOutline = {
      name: "up",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" /></svg>'
    };
    UploadOutline = {
      name: "upload",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" /></svg>'
    };
    VerticalAlignTopOutline = {
      name: "vertical-align-top",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z" /></svg>'
    };
    ZoomInOutline = {
      name: "zoom-in",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" /></svg>'
    };
    ZoomOutOutline = {
      name: "zoom-out",
      theme: "outline",
      icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" /></svg>'
    };
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-icon.mjs
var NZ_ICONS_USED_BY_ZORRO, NZ_ICONS, NZ_ICON_DEFAULT_TWOTONE_COLOR, DEFAULT_TWOTONE_COLOR, NzIconService, NZ_ICONS_PATCH, NzIconPatchService, NzIconDirective, provideNzIcons, provideNzIconsPatch, NzIconModule;
var init_ng_zorro_antd_icon = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-icon.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_rxjs_interop();
    init_esm();
    init_ant_design_icons_angular();
    init_ng_zorro_antd_core_logger();
    init_ng_zorro_antd_core_util();
    init_platform();
    init_ng_zorro_antd_core_config();
    init_ant_design_icons_angular_icons();
    NZ_ICONS_USED_BY_ZORRO = [
      BarsOutline,
      CalendarOutline,
      CaretUpFill,
      CaretUpOutline,
      CaretDownFill,
      CaretDownOutline,
      CheckCircleFill,
      CheckCircleOutline,
      CheckOutline,
      ClockCircleOutline,
      CloseCircleOutline,
      CloseCircleFill,
      CloseOutline,
      CopyOutline,
      DeleteOutline,
      DoubleLeftOutline,
      DoubleRightOutline,
      DownOutline,
      EditOutline,
      EllipsisOutline,
      ExclamationCircleFill,
      ExclamationCircleOutline,
      EyeOutline,
      FileFill,
      FileOutline,
      FilterFill,
      InfoCircleFill,
      InfoCircleOutline,
      LeftOutline,
      LoadingOutline,
      PaperClipOutline,
      QuestionCircleOutline,
      RightOutline,
      RotateRightOutline,
      RotateLeftOutline,
      StarFill,
      SearchOutline,
      StarFill,
      UploadOutline,
      VerticalAlignTopOutline,
      UpOutline,
      SwapOutline,
      SwapRightOutline,
      ZoomInOutline,
      ZoomOutOutline
    ];
    NZ_ICONS = new InjectionToken("nz_icons");
    NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken("nz_icon_default_twotone_color");
    DEFAULT_TWOTONE_COLOR = "#1890ff";
    NzIconService = class _NzIconService extends IconService {
      nzConfigService = inject(NzConfigService);
      platform = inject(Platform);
      configUpdated$ = new Subject();
      get _disableDynamicLoading() {
        return !this.platform.isBrowser;
      }
      iconfontCache = /* @__PURE__ */ new Set();
      normalizeSvgElement(svg) {
        if (!svg.getAttribute("viewBox")) {
          this._renderer.setAttribute(svg, "viewBox", "0 0 1024 1024");
        }
        if (!svg.getAttribute("width") || !svg.getAttribute("height")) {
          this._renderer.setAttribute(svg, "width", "1em");
          this._renderer.setAttribute(svg, "height", "1em");
        }
        if (!svg.getAttribute("fill")) {
          this._renderer.setAttribute(svg, "fill", "currentColor");
        }
      }
      fetchFromIconfont(opt) {
        const { scriptUrl } = opt;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
          const script = this._renderer.createElement("script");
          this._renderer.setAttribute(script, "src", scriptUrl);
          this._renderer.setAttribute(script, "data-namespace", scriptUrl.replace(/^(https?|http):/g, ""));
          this._renderer.appendChild(this._document.body, script);
          this.iconfontCache.add(scriptUrl);
        }
      }
      createIconfontIcon(type) {
        return this._createSVGElementFromString(`<svg><use xlink:href="${type}"></svg>`);
      }
      constructor() {
        super([...NZ_ICONS_USED_BY_ZORRO, ...inject(NZ_ICONS, { optional: true }) || []]);
        this.onConfigChange();
        this.configDefaultTwotoneColor();
        this.configDefaultTheme();
      }
      onConfigChange() {
        onConfigChangeEventForComponent("icon", () => {
          this.configDefaultTwotoneColor();
          this.configDefaultTheme();
          this.configUpdated$.next();
        });
      }
      configDefaultTheme() {
        const iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || "outline";
      }
      configDefaultTwotoneColor() {
        const iconConfig = this.getConfig();
        const defaultTwotoneColor = iconConfig.nzTwotoneColor || DEFAULT_TWOTONE_COLOR;
        let primaryColor = DEFAULT_TWOTONE_COLOR;
        if (defaultTwotoneColor) {
          if (defaultTwotoneColor.startsWith("#")) {
            primaryColor = defaultTwotoneColor;
          } else {
            warn("Twotone color must be a hex color!");
          }
        }
        this.twoToneColor = { primaryColor };
      }
      getConfig() {
        return this.nzConfigService.getConfigForComponent("icon") || {};
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzIconService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzIconService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzIconService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: () => [] });
    NZ_ICONS_PATCH = new InjectionToken("nz_icons_patch");
    NzIconPatchService = class _NzIconPatchService {
      rootIconService;
      patched = false;
      extraIcons = inject(NZ_ICONS_PATCH, { self: true });
      constructor(rootIconService) {
        this.rootIconService = rootIconService;
      }
      doPatch() {
        if (this.patched) {
          return;
        }
        this.extraIcons.forEach((iconDefinition) => this.rootIconService.addIcon(iconDefinition));
        this.patched = true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzIconPatchService, deps: [{ token: NzIconService }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzIconPatchService });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzIconPatchService, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: NzIconService }] });
    NzIconDirective = class _NzIconDirective extends IconDirective {
      iconService;
      ngZone = inject(NgZone);
      changeDetectorRef = inject(ChangeDetectorRef);
      renderer = inject(Renderer2);
      destroyRef = inject(DestroyRef);
      pendingTasks = inject(PendingTasks);
      isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
      cacheClassName = null;
      set nzSpin(value) {
        this.spin = value;
      }
      nzRotate = 0;
      set nzType(value) {
        this.type = value;
      }
      set nzTheme(value) {
        this.theme = value;
      }
      set nzTwotoneColor(value) {
        this.twoToneColor = value;
      }
      set nzIconfont(value) {
        this.iconfont = value;
      }
      hostClass;
      el;
      iconfont;
      spin = false;
      constructor(iconService) {
        super(iconService);
        this.iconService = iconService;
        inject(NzIconPatchService, { optional: true })?.doPatch();
        this.el = this._elementRef.nativeElement;
      }
      ngOnChanges(changes) {
        const { nzType, nzTwotoneColor, nzSpin, nzTheme, nzRotate } = changes;
        if (nzType || nzTwotoneColor || nzSpin || nzTheme) {
          this.ngZone.runOutsideAngular(() => this.changeIcon2());
        } else if (nzRotate) {
          this.handleRotate(this.el.firstChild);
        } else {
          this._setSVGElement(this.iconService.createIconfontIcon(`#${this.iconfont}`));
        }
      }
      /**
       * If custom content is provided, try to normalize SVG elements.
       */
      ngAfterContentChecked() {
        if (!this.type) {
          const children = this.el.children;
          let length = children.length;
          if (!this.type && children.length) {
            while (length--) {
              const child = children[length];
              if (child.tagName.toLowerCase() === "svg") {
                this.iconService.normalizeSvgElement(child);
              }
            }
          }
        }
      }
      /**
       * Replacement of `changeIcon` for more modifications.
       */
      changeIcon2() {
        this.setClassName();
        const removeTask = this.pendingTasks.add();
        const svgOrRemove$ = wrapIntoObservable(this._changeIcon()).pipe(
          // We need to individually debounce the icon rendering on each animation
          // frame to prevent frame drops when many icons are being rendered on the
          // page, such as in a `@for` loop.
          debounceTime(0, this.isBrowser ? animationFrameScheduler : asapScheduler),
          takeUntilDestroyed(this.destroyRef),
          finalize(removeTask)
        );
        svgOrRemove$.subscribe({
          next: (svgOrRemove) => {
            this.ngZone.run(() => {
              this.changeDetectorRef.detectChanges();
              if (svgOrRemove) {
                this.setSVGData(svgOrRemove);
                this.handleSpin(svgOrRemove);
                this.handleRotate(svgOrRemove);
              }
            });
          },
          error: warn
        });
      }
      handleSpin(svg) {
        if (this.spin || this.type === "loading") {
          this.renderer.addClass(svg, "anticon-spin");
        } else {
          this.renderer.removeClass(svg, "anticon-spin");
        }
      }
      handleRotate(svg) {
        if (this.nzRotate) {
          this.renderer.setAttribute(svg, "style", `transform: rotate(${this.nzRotate}deg)`);
        } else {
          this.renderer.removeAttribute(svg, "style");
        }
      }
      setClassName() {
        if (this.cacheClassName) {
          this.renderer.removeClass(this.el, this.cacheClassName);
        }
        this.cacheClassName = `anticon-${this.type}`;
        this.renderer.addClass(this.el, this.cacheClassName);
      }
      setSVGData(svg) {
        this.renderer.setAttribute(svg, "data-icon", this.type);
        this.renderer.setAttribute(svg, "aria-hidden", "true");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzIconDirective, deps: [{ token: NzIconService }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _NzIconDirective, isStandalone: true, selector: "nz-icon,[nz-icon]", inputs: { nzSpin: ["nzSpin", "nzSpin", booleanAttribute], nzRotate: ["nzRotate", "nzRotate", numberAttribute], nzType: "nzType", nzTheme: "nzTheme", nzTwotoneColor: "nzTwotoneColor", nzIconfont: "nzIconfont" }, host: { classAttribute: "anticon" }, exportAs: ["nzIcon"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzIconDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "nz-icon,[nz-icon]",
        exportAs: "nzIcon",
        host: {
          class: "anticon"
        }
      }]
    }], ctorParameters: () => [{ type: NzIconService }], propDecorators: { nzSpin: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], nzRotate: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], nzType: [{
      type: Input
    }], nzTheme: [{
      type: Input
    }], nzTwotoneColor: [{
      type: Input
    }], nzIconfont: [{
      type: Input
    }] } });
    provideNzIcons = (icons) => {
      return makeEnvironmentProviders([
        {
          provide: NZ_ICONS,
          useValue: icons
        }
      ]);
    };
    provideNzIconsPatch = (icons) => {
      return [
        NzIconPatchService,
        {
          provide: NZ_ICONS_PATCH,
          useValue: icons
        }
      ];
    };
    NzIconModule = class _NzIconModule {
      static forRoot(icons) {
        return {
          ngModule: _NzIconModule,
          providers: [provideNzIcons(icons)]
        };
      }
      static forChild(icons) {
        return {
          ngModule: _NzIconModule,
          providers: [provideNzIconsPatch(icons)]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzIconModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _NzIconModule, imports: [NzIconDirective], exports: [NzIconDirective] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzIconModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzIconModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [NzIconDirective],
        exports: [NzIconDirective]
      }]
    }] });
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-outlet.mjs
var NzStringTemplateOutletDirective, NzStringTemplateOutletContext, NzOutletModule;
var init_ng_zorro_antd_core_outlet = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-outlet.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_ng_zorro_antd_core_util();
    NzStringTemplateOutletDirective = class _NzStringTemplateOutletDirective {
      viewContainer = inject(ViewContainerRef);
      templateRef = inject(TemplateRef);
      embeddedViewRef = null;
      context = new NzStringTemplateOutletContext();
      nzStringTemplateOutletContext = null;
      nzStringTemplateOutlet = null;
      static ngTemplateContextGuard(_dir, _ctx) {
        return true;
      }
      recreateView() {
        this.viewContainer.clear();
        if (isTemplateRef(this.nzStringTemplateOutlet)) {
          this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.nzStringTemplateOutlet, this.nzStringTemplateOutletContext);
        } else {
          this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.context);
        }
      }
      updateContext() {
        const newCtx = isTemplateRef(this.nzStringTemplateOutlet) ? this.nzStringTemplateOutletContext : this.context;
        const oldCtx = this.embeddedViewRef.context;
        if (newCtx) {
          for (const propName of Object.keys(newCtx)) {
            oldCtx[propName] = newCtx[propName];
          }
        }
      }
      ngOnChanges(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        const shouldRecreateView = () => {
          let shouldOutletRecreate = false;
          if (nzStringTemplateOutlet) {
            shouldOutletRecreate = nzStringTemplateOutlet.firstChange || isTemplateRef(nzStringTemplateOutlet.previousValue) || isTemplateRef(nzStringTemplateOutlet.currentValue);
          }
          const hasContextShapeChanged = (ctxChange) => {
            const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
            const currCtxKeys = Object.keys(ctxChange.currentValue || {});
            if (prevCtxKeys.length === currCtxKeys.length) {
              for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                  return true;
                }
              }
              return false;
            } else {
              return true;
            }
          };
          const shouldContextRecreate = nzStringTemplateOutletContext && hasContextShapeChanged(nzStringTemplateOutletContext);
          return shouldContextRecreate || shouldOutletRecreate;
        };
        if (nzStringTemplateOutlet) {
          this.context.$implicit = nzStringTemplateOutlet.currentValue;
        }
        const recreateView = shouldRecreateView();
        if (recreateView) {
          this.recreateView();
        } else {
          this.updateContext();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzStringTemplateOutletDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _NzStringTemplateOutletDirective, isStandalone: true, selector: "[nzStringTemplateOutlet]", inputs: { nzStringTemplateOutletContext: "nzStringTemplateOutletContext", nzStringTemplateOutlet: "nzStringTemplateOutlet" }, exportAs: ["nzStringTemplateOutlet"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzStringTemplateOutletDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[nzStringTemplateOutlet]",
        exportAs: "nzStringTemplateOutlet"
      }]
    }], propDecorators: { nzStringTemplateOutletContext: [{
      type: Input
    }], nzStringTemplateOutlet: [{
      type: Input
    }] } });
    NzStringTemplateOutletContext = class {
      $implicit;
    };
    NzOutletModule = class _NzOutletModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzOutletModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _NzOutletModule, imports: [NzStringTemplateOutletDirective], exports: [NzStringTemplateOutletDirective] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzOutletModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzOutletModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [NzStringTemplateOutletDirective],
        exports: [NzStringTemplateOutletDirective]
      }]
    }] });
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-space.mjs
function generateCompactClass(type, direction, position) {
  const directionPrefix = direction === "vertical" ? "vertical-" : "";
  return `ant-${type}-compact-${directionPrefix}${position}`;
}
function compactItemClassOf(type, direction, rtl) {
  const rtlSuffix = rtl ? "-rtl" : "";
  return `${generateCompactClass(type, direction, "item")}${rtlSuffix}`;
}
function compactFirstItemClassOf(type, direction) {
  return generateCompactClass(type, direction, "first-item");
}
function compactLastItemClassOf(type, direction) {
  return generateCompactClass(type, direction, "last-item");
}
var NZ_SPACE_COMPACT_SIZE, NZ_SPACE_COMPACT_ITEMS, NZ_SPACE_COMPACT_ITEM_TYPE, NzSpaceCompactComponent, NzSpaceCompactItemDirective, NzSpaceItemDirective, NZ_CONFIG_MODULE_NAME, SPACE_SIZE, NzSpaceComponent, NzSpaceModule;
var init_ng_zorro_antd_space = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-space.mjs"() {
    "use strict";
    init_bidi();
    init_core();
    init_core();
    init_rxjs_interop();
    init_tslib_es6();
    init_common();
    init_ng_zorro_antd_core_config();
    init_ng_zorro_antd_core_outlet();
    NZ_SPACE_COMPACT_SIZE = new InjectionToken("NZ_SPACE_COMPACT_SIZE");
    NZ_SPACE_COMPACT_ITEMS = new InjectionToken("NZ_SPACE_COMPACT_ITEMS");
    NZ_SPACE_COMPACT_ITEM_TYPE = new InjectionToken("NZ_SPACE_COMPACT_ITEM_TYPE");
    NzSpaceCompactComponent = class _NzSpaceCompactComponent {
      nzBlock = input(false, { transform: booleanAttribute });
      nzDirection = input("horizontal");
      nzSize = input("default");
      elementRef = inject(ElementRef);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzSpaceCompactComponent, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "20.0.0", type: _NzSpaceCompactComponent, isStandalone: true, selector: "nz-space-compact", inputs: { nzBlock: { classPropertyName: "nzBlock", publicName: "nzBlock", isSignal: true, isRequired: false, transformFunction: null }, nzDirection: { classPropertyName: "nzDirection", publicName: "nzDirection", isSignal: true, isRequired: false, transformFunction: null }, nzSize: { classPropertyName: "nzSize", publicName: "nzSize", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.ant-space-compact-block": "nzBlock()", "class.ant-space-compact-vertical": "nzDirection() === 'vertical'" }, classAttribute: "ant-space-compact" }, providers: [
        { provide: NZ_SPACE_COMPACT_SIZE, useFactory: () => inject(_NzSpaceCompactComponent).nzSize },
        { provide: NZ_SPACE_COMPACT_ITEMS, useFactory: () => signal([]) }
      ], exportAs: ["nzSpaceCompact"], ngImport: core_exports, template: `<ng-content></ng-content>`, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzSpaceCompactComponent, decorators: [{
      type: Component,
      args: [{
        selector: "nz-space-compact",
        exportAs: "nzSpaceCompact",
        template: `<ng-content></ng-content>`,
        host: {
          class: "ant-space-compact",
          "[class.ant-space-compact-block]": `nzBlock()`,
          "[class.ant-space-compact-vertical]": `nzDirection() === 'vertical'`
        },
        providers: [
          { provide: NZ_SPACE_COMPACT_SIZE, useFactory: () => inject(NzSpaceCompactComponent).nzSize },
          { provide: NZ_SPACE_COMPACT_ITEMS, useFactory: () => signal([]) }
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
      }]
    }] });
    NzSpaceCompactItemDirective = class _NzSpaceCompactItemDirective {
      /**
       * Ancestor component injected from the parent.
       * Note that it is not necessarily the direct parent component.
       */
      spaceCompactCmp = inject(NzSpaceCompactComponent, { host: true, optional: true });
      items = inject(NZ_SPACE_COMPACT_ITEMS, { host: true, optional: true });
      type = inject(NZ_SPACE_COMPACT_ITEM_TYPE);
      elementRef = inject(ElementRef);
      directionality = inject(Directionality);
      dir = toSignal(this.directionality.change, { initialValue: this.directionality.value });
      get parentElement() {
        return this.elementRef.nativeElement?.parentElement;
      }
      class = computed(() => {
        if (!this.spaceCompactCmp || !this.items)
          return null;
        if (this.parentElement !== this.spaceCompactCmp.elementRef.nativeElement)
          return null;
        const items = this.items();
        const direction = this.spaceCompactCmp.nzDirection();
        const classes = [compactItemClassOf(this.type, direction, this.dir() === "rtl")];
        const index = items.indexOf(this);
        const firstIndex = items.findIndex((element) => element);
        if (index === firstIndex) {
          classes.push(compactFirstItemClassOf(this.type, direction));
        }
        if (index === items.length - 1) {
          classes.push(compactLastItemClassOf(this.type, direction));
        }
        return classes;
      });
      constructor() {
        if (!this.spaceCompactCmp || !this.items)
          return;
        afterNextRender(() => {
          if (this.parentElement === this.spaceCompactCmp.elementRef.nativeElement) {
            const index = Array.from(this.parentElement.children).indexOf(this.elementRef.nativeElement);
            this.items.update((value) => {
              const newValue = value.slice();
              newValue.splice(index, 0, this);
              return newValue;
            });
          }
        });
        inject(DestroyRef).onDestroy(() => {
          this.items?.update((value) => value.filter((o) => o !== this));
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzSpaceCompactItemDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _NzSpaceCompactItemDirective, isStandalone: true, host: { properties: { "class": "class()" } }, exportAs: ["nzSpaceCompactItem"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzSpaceCompactItemDirective, decorators: [{
      type: Directive,
      args: [{
        exportAs: "nzSpaceCompactItem",
        host: {
          "[class]": "class()"
        }
      }]
    }], ctorParameters: () => [] });
    NzSpaceItemDirective = class _NzSpaceItemDirective {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzSpaceItemDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _NzSpaceItemDirective, isStandalone: true, selector: "[nzSpaceItem]", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzSpaceItemDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[nzSpaceItem]"
      }]
    }] });
    NZ_CONFIG_MODULE_NAME = "space";
    SPACE_SIZE = {
      small: 8,
      middle: 16,
      large: 24
    };
    NzSpaceComponent = (() => {
      var _a;
      let _nzSize_decorators;
      let _nzSize_initializers = [];
      let _nzSize_extraInitializers = [];
      return _a = class {
        _nzModuleName = NZ_CONFIG_MODULE_NAME;
        nzConfigService = inject(NzConfigService);
        cdr = inject(ChangeDetectorRef);
        destroyRef = inject(DestroyRef);
        nzDirection = "horizontal";
        nzAlign;
        nzSplit = null;
        nzWrap = false;
        nzSize = __runInitializers(this, _nzSize_initializers, "small");
        items = __runInitializers(this, _nzSize_extraInitializers);
        mergedAlign;
        spaceSize = SPACE_SIZE.small;
        updateSpaceItems() {
          const numberSize = typeof this.nzSize === "string" ? SPACE_SIZE[this.nzSize] : this.nzSize;
          this.spaceSize = numberSize / (this.nzSplit ? 2 : 1);
          this.cdr.markForCheck();
        }
        ngOnChanges() {
          this.updateSpaceItems();
          this.mergedAlign = this.nzAlign === void 0 && this.nzDirection === "horizontal" ? "center" : this.nzAlign;
        }
        ngAfterContentInit() {
          this.updateSpaceItems();
          this.items.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
            this.cdr.markForCheck();
          });
        }
      }, (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
        _nzSize_decorators = [WithConfig()];
        __esDecorate(null, null, _nzSize_decorators, { kind: "field", name: "nzSize", static: false, private: false, access: { has: (obj) => "nzSize" in obj, get: (obj) => obj.nzSize, set: (obj, value) => {
          obj.nzSize = value;
        } }, metadata: _metadata }, _nzSize_initializers, _nzSize_extraInitializers);
        if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      })(), __publicField(_a, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _a, deps: [], target: FactoryTarget.Component })), __publicField(_a, "\u0275cmp", \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _a, isStandalone: true, selector: "nz-space, [nz-space]", inputs: { nzDirection: "nzDirection", nzAlign: "nzAlign", nzSplit: "nzSplit", nzWrap: ["nzWrap", "nzWrap", booleanAttribute], nzSize: "nzSize" }, host: { properties: { "class.ant-space-horizontal": 'nzDirection === "horizontal"', "class.ant-space-vertical": 'nzDirection === "vertical"', "class.ant-space-align-start": 'mergedAlign === "start"', "class.ant-space-align-end": 'mergedAlign === "end"', "class.ant-space-align-center": 'mergedAlign === "center"', "class.ant-space-align-baseline": 'mergedAlign === "baseline"', "style.flex-wrap": 'nzWrap ? "wrap" : null' }, classAttribute: "ant-space" }, queries: [{ propertyName: "items", predicate: NzSpaceItemDirective, read: TemplateRef }], exportAs: ["nzSpace"], usesOnChanges: true, ngImport: core_exports, template: `
    <ng-content></ng-content>
    @for (item of items; track item; let last = $last; let index = $index) {
      <div
        class="ant-space-item"
        [style.margin-block-end.px]="nzDirection === 'vertical' ? (last ? null : spaceSize) : null"
        [style.margin-inline-end.px]="nzDirection === 'horizontal' ? (last ? null : spaceSize) : null"
      >
        <ng-container [ngTemplateOutlet]="item"></ng-container>
      </div>
      @if (nzSplit && !last) {
        <span
          class="ant-space-split"
          [style.margin-block-end.px]="nzDirection === 'vertical' ? (last ? null : spaceSize) : null"
          [style.margin-inline-end.px]="nzDirection === 'horizontal' ? (last ? null : spaceSize) : null"
        >
          <ng-template [nzStringTemplateOutlet]="nzSplit" [nzStringTemplateOutletContext]="{ $implicit: index }">{{
            nzSplit
          }}</ng-template>
        </span>
      }
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: ChangeDetectionStrategy.OnPush })), _a;
    })();
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzSpaceComponent, decorators: [{
      type: Component,
      args: [{
        selector: "nz-space, [nz-space]",
        exportAs: "nzSpace",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <ng-content></ng-content>
    @for (item of items; track item; let last = $last; let index = $index) {
      <div
        class="ant-space-item"
        [style.margin-block-end.px]="nzDirection === 'vertical' ? (last ? null : spaceSize) : null"
        [style.margin-inline-end.px]="nzDirection === 'horizontal' ? (last ? null : spaceSize) : null"
      >
        <ng-container [ngTemplateOutlet]="item"></ng-container>
      </div>
      @if (nzSplit && !last) {
        <span
          class="ant-space-split"
          [style.margin-block-end.px]="nzDirection === 'vertical' ? (last ? null : spaceSize) : null"
          [style.margin-inline-end.px]="nzDirection === 'horizontal' ? (last ? null : spaceSize) : null"
        >
          <ng-template [nzStringTemplateOutlet]="nzSplit" [nzStringTemplateOutletContext]="{ $implicit: index }">{{
            nzSplit
          }}</ng-template>
        </span>
      }
    }
  `,
        host: {
          class: "ant-space",
          "[class.ant-space-horizontal]": 'nzDirection === "horizontal"',
          "[class.ant-space-vertical]": 'nzDirection === "vertical"',
          "[class.ant-space-align-start]": 'mergedAlign === "start"',
          "[class.ant-space-align-end]": 'mergedAlign === "end"',
          "[class.ant-space-align-center]": 'mergedAlign === "center"',
          "[class.ant-space-align-baseline]": 'mergedAlign === "baseline"',
          "[style.flex-wrap]": 'nzWrap ? "wrap" : null'
        },
        imports: [NgTemplateOutlet, NzStringTemplateOutletDirective]
      }]
    }], propDecorators: { nzDirection: [{
      type: Input
    }], nzAlign: [{
      type: Input
    }], nzSplit: [{
      type: Input
    }], nzWrap: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], nzSize: [{
      type: Input
    }], items: [{
      type: ContentChildren,
      args: [NzSpaceItemDirective, { read: TemplateRef }]
    }] } });
    NzSpaceModule = class _NzSpaceModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzSpaceModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _NzSpaceModule, imports: [NzSpaceComponent, NzSpaceItemDirective, NzSpaceCompactComponent], exports: [NzSpaceComponent, NzSpaceItemDirective, NzSpaceCompactComponent] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzSpaceModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzSpaceModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [NzSpaceComponent, NzSpaceItemDirective, NzSpaceCompactComponent],
        exports: [NzSpaceComponent, NzSpaceItemDirective, NzSpaceCompactComponent]
      }]
    }] });
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-transition-patch.mjs
var NzTransitionPatchDirective, NzTransitionPatchModule;
var init_ng_zorro_antd_core_transition_patch = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-transition-patch.mjs"() {
    "use strict";
    init_core();
    init_core();
    NzTransitionPatchDirective = class _NzTransitionPatchDirective {
      elementRef = inject(ElementRef);
      renderer = inject(Renderer2);
      hidden = null;
      setHiddenAttribute() {
        if (this.hidden) {
          if (typeof this.hidden === "string") {
            this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", this.hidden);
          } else {
            this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", "");
          }
        } else {
          this.renderer.removeAttribute(this.elementRef.nativeElement, "hidden");
        }
      }
      constructor() {
        this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", "");
      }
      ngOnChanges() {
        this.setHiddenAttribute();
      }
      ngAfterViewInit() {
        this.setHiddenAttribute();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzTransitionPatchDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _NzTransitionPatchDirective, isStandalone: true, selector: "[nz-button], [nz-icon], nz-icon, [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: { hidden: "hidden" }, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzTransitionPatchDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[nz-button], [nz-icon], nz-icon, [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group"
      }]
    }], ctorParameters: () => [], propDecorators: { hidden: [{
      type: Input
    }] } });
    NzTransitionPatchModule = class _NzTransitionPatchModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzTransitionPatchModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _NzTransitionPatchModule, imports: [NzTransitionPatchDirective], exports: [NzTransitionPatchDirective] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzTransitionPatchModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzTransitionPatchModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [NzTransitionPatchDirective],
        exports: [NzTransitionPatchDirective]
      }]
    }] });
  }
});

// node_modules/@angular/animations/fesm2022/private_export.mjs
function trigger(name2, definitions) {
  return { type: AnimationMetadataType.Trigger, name: name2, definitions, options: {} };
}
function animate(timings, styles = null) {
  return { type: AnimationMetadataType.Animate, styles, timings };
}
function sequence(steps, options = null) {
  return { type: AnimationMetadataType.Sequence, steps, options };
}
function style(tokens) {
  return { type: AnimationMetadataType.Style, styles: tokens, offset: null };
}
function state(name2, styles, options) {
  return { type: AnimationMetadataType.State, name: name2, styles, options };
}
function transition(stateChangeExpr, steps, options = null) {
  return { type: AnimationMetadataType.Transition, expr: stateChangeExpr, animation: steps, options };
}
function query(selector, animation, options = null) {
  return { type: AnimationMetadataType.Query, selector, animation, options };
}
function stagger(timings, animation) {
  return { type: AnimationMetadataType.Stagger, timings, animation };
}
var AnimationMetadataType, AUTO_STYLE, NoopAnimationPlayer, AnimationGroupPlayer, \u0275PRE_STYLE;
var init_private_export = __esm({
  "node_modules/@angular/animations/fesm2022/private_export.mjs"() {
    "use strict";
    (function(AnimationMetadataType2) {
      AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
      AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
      AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
      AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
      AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
      AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
      AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
      AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
      AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
      AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
      AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
      AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
      AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
    })(AnimationMetadataType || (AnimationMetadataType = {}));
    AUTO_STYLE = "*";
    NoopAnimationPlayer = class {
      _onDoneFns = [];
      _onStartFns = [];
      _onDestroyFns = [];
      _originalOnDoneFns = [];
      _originalOnStartFns = [];
      _started = false;
      _destroyed = false;
      _finished = false;
      _position = 0;
      parentPlayer = null;
      totalTime;
      constructor(duration = 0, delay = 0) {
        this.totalTime = duration + delay;
      }
      _onFinish() {
        if (!this._finished) {
          this._finished = true;
          this._onDoneFns.forEach((fn) => fn());
          this._onDoneFns = [];
        }
      }
      onStart(fn) {
        this._originalOnStartFns.push(fn);
        this._onStartFns.push(fn);
      }
      onDone(fn) {
        this._originalOnDoneFns.push(fn);
        this._onDoneFns.push(fn);
      }
      onDestroy(fn) {
        this._onDestroyFns.push(fn);
      }
      hasStarted() {
        return this._started;
      }
      init() {
      }
      play() {
        if (!this.hasStarted()) {
          this._onStart();
          this.triggerMicrotask();
        }
        this._started = true;
      }
      /** @internal */
      triggerMicrotask() {
        queueMicrotask(() => this._onFinish());
      }
      _onStart() {
        this._onStartFns.forEach((fn) => fn());
        this._onStartFns = [];
      }
      pause() {
      }
      restart() {
      }
      finish() {
        this._onFinish();
      }
      destroy() {
        if (!this._destroyed) {
          this._destroyed = true;
          if (!this.hasStarted()) {
            this._onStart();
          }
          this.finish();
          this._onDestroyFns.forEach((fn) => fn());
          this._onDestroyFns = [];
        }
      }
      reset() {
        this._started = false;
        this._finished = false;
        this._onStartFns = this._originalOnStartFns;
        this._onDoneFns = this._originalOnDoneFns;
      }
      setPosition(position) {
        this._position = this.totalTime ? position * this.totalTime : 1;
      }
      getPosition() {
        return this.totalTime ? this._position / this.totalTime : 1;
      }
      /** @internal */
      triggerCallback(phaseName) {
        const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
        methods.forEach((fn) => fn());
        methods.length = 0;
      }
    };
    AnimationGroupPlayer = class {
      _onDoneFns = [];
      _onStartFns = [];
      _finished = false;
      _started = false;
      _destroyed = false;
      _onDestroyFns = [];
      parentPlayer = null;
      totalTime = 0;
      players;
      constructor(_players) {
        this.players = _players;
        let doneCount = 0;
        let destroyCount = 0;
        let startCount = 0;
        const total = this.players.length;
        if (total == 0) {
          queueMicrotask(() => this._onFinish());
        } else {
          this.players.forEach((player) => {
            player.onDone(() => {
              if (++doneCount == total) {
                this._onFinish();
              }
            });
            player.onDestroy(() => {
              if (++destroyCount == total) {
                this._onDestroy();
              }
            });
            player.onStart(() => {
              if (++startCount == total) {
                this._onStart();
              }
            });
          });
        }
        this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
      }
      _onFinish() {
        if (!this._finished) {
          this._finished = true;
          this._onDoneFns.forEach((fn) => fn());
          this._onDoneFns = [];
        }
      }
      init() {
        this.players.forEach((player) => player.init());
      }
      onStart(fn) {
        this._onStartFns.push(fn);
      }
      _onStart() {
        if (!this.hasStarted()) {
          this._started = true;
          this._onStartFns.forEach((fn) => fn());
          this._onStartFns = [];
        }
      }
      onDone(fn) {
        this._onDoneFns.push(fn);
      }
      onDestroy(fn) {
        this._onDestroyFns.push(fn);
      }
      hasStarted() {
        return this._started;
      }
      play() {
        if (!this.parentPlayer) {
          this.init();
        }
        this._onStart();
        this.players.forEach((player) => player.play());
      }
      pause() {
        this.players.forEach((player) => player.pause());
      }
      restart() {
        this.players.forEach((player) => player.restart());
      }
      finish() {
        this._onFinish();
        this.players.forEach((player) => player.finish());
      }
      destroy() {
        this._onDestroy();
      }
      _onDestroy() {
        if (!this._destroyed) {
          this._destroyed = true;
          this._onFinish();
          this.players.forEach((player) => player.destroy());
          this._onDestroyFns.forEach((fn) => fn());
          this._onDestroyFns = [];
        }
      }
      reset() {
        this.players.forEach((player) => player.reset());
        this._destroyed = false;
        this._finished = false;
        this._started = false;
      }
      setPosition(p) {
        const timeAtPosition = p * this.totalTime;
        this.players.forEach((player) => {
          const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
          player.setPosition(position);
        });
      }
      getPosition() {
        const longestPlayer = this.players.reduce((longestSoFar, player) => {
          const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
          return newPlayerIsLongest ? player : longestSoFar;
        }, null);
        return longestPlayer != null ? longestPlayer.getPosition() : 0;
      }
      beforeDestroy() {
        this.players.forEach((player) => {
          if (player.beforeDestroy) {
            player.beforeDestroy();
          }
        });
      }
      /** @internal */
      triggerCallback(phaseName) {
        const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
        methods.forEach((fn) => fn());
        methods.length = 0;
      }
    };
    \u0275PRE_STYLE = "!";
  }
});

// node_modules/@angular/animations/fesm2022/util.mjs
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name2, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name2}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name2) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name2}" doesn't exist!`);
}
function missingEvent(name2) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name2}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name2) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name2}" is not supported!`);
}
function unregisteredTrigger(name2) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name2}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name2, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name2} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return { element, triggerName, fromState, toState, phaseName, totalTime, disabled: !!disabled };
}
function getOrSetDefaultValue(map2, key, defaultValue) {
  let value = map2.get(key);
  if (!value) {
    map2.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
function resolveTimingValue(value) {
  if (typeof value == "number")
    return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2)
    return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return { duration: 0, delay: 0, easing: "" };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return { duration, delay, easing };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1)
      return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
function dashCaseToCamelCase(input2) {
  return input2.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input2) {
  return input2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}
var LINE_START, ANIMATABLE_PROP_SET, documentElement, _CACHED_BODY, _IS_WEBKIT, ONE_SECOND, SUBSTITUTION_EXPR_START, SUBSTITUTION_EXPR_END, ENTER_CLASSNAME, LEAVE_CLASSNAME, NG_TRIGGER_CLASSNAME, NG_TRIGGER_SELECTOR, NG_ANIMATING_CLASSNAME, NG_ANIMATING_SELECTOR, PARAM_REGEX, DASH_CASE_REGEXP;
var init_util2 = __esm({
  "node_modules/@angular/animations/fesm2022/util.mjs"() {
    "use strict";
    init_private_export();
    init_core();
    LINE_START = "\n - ";
    ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set([
      "-moz-outline-radius",
      "-moz-outline-radius-bottomleft",
      "-moz-outline-radius-bottomright",
      "-moz-outline-radius-topleft",
      "-moz-outline-radius-topright",
      "-ms-grid-columns",
      "-ms-grid-rows",
      "-webkit-line-clamp",
      "-webkit-text-fill-color",
      "-webkit-text-stroke",
      "-webkit-text-stroke-color",
      "accent-color",
      "all",
      "backdrop-filter",
      "background",
      "background-color",
      "background-position",
      "background-size",
      "block-size",
      "border",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-width",
      "border-color",
      "border-end-end-radius",
      "border-end-start-radius",
      "border-image-outset",
      "border-image-slice",
      "border-image-width",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-width",
      "border-left",
      "border-left-color",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-width",
      "border-start-end-radius",
      "border-start-start-radius",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-width",
      "border-width",
      "bottom",
      "box-shadow",
      "caret-color",
      "clip",
      "clip-path",
      "color",
      "column-count",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-width",
      "column-width",
      "columns",
      "filter",
      "flex",
      "flex-basis",
      "flex-grow",
      "flex-shrink",
      "font",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-variation-settings",
      "font-weight",
      "gap",
      "grid-column-gap",
      "grid-gap",
      "grid-row-gap",
      "grid-template-columns",
      "grid-template-rows",
      "height",
      "inline-size",
      "input-security",
      "inset",
      "inset-block",
      "inset-block-end",
      "inset-block-start",
      "inset-inline",
      "inset-inline-end",
      "inset-inline-start",
      "left",
      "letter-spacing",
      "line-clamp",
      "line-height",
      "margin",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "mask",
      "mask-border",
      "mask-position",
      "mask-size",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-lines",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "object-position",
      "offset",
      "offset-anchor",
      "offset-distance",
      "offset-path",
      "offset-position",
      "offset-rotate",
      "opacity",
      "order",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-width",
      "padding",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "perspective",
      "perspective-origin",
      "right",
      "rotate",
      "row-gap",
      "scale",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-coordinate",
      "scroll-snap-destination",
      "scrollbar-color",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "tab-size",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-thickness",
      "text-emphasis",
      "text-emphasis-color",
      "text-indent",
      "text-shadow",
      "text-underline-offset",
      "top",
      "transform",
      "transform-origin",
      "translate",
      "vertical-align",
      "visibility",
      "width",
      "word-spacing",
      "z-index",
      "zoom"
    ]);
    documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
    _CACHED_BODY = null;
    _IS_WEBKIT = false;
    ONE_SECOND = 1e3;
    SUBSTITUTION_EXPR_START = "{{";
    SUBSTITUTION_EXPR_END = "}}";
    ENTER_CLASSNAME = "ng-enter";
    LEAVE_CLASSNAME = "ng-leave";
    NG_TRIGGER_CLASSNAME = "ng-trigger";
    NG_TRIGGER_SELECTOR = ".ng-trigger";
    NG_ANIMATING_CLASSNAME = "ng-animating";
    NG_ANIMATING_SELECTOR = ".ng-animating";
    PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
    DASH_CASE_REGEXP = /-+([a-z0-9])/g;
  }
});

// node_modules/@angular/animations/fesm2022/browser.mjs
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name2, warnings) {
  console.warn(`The animation trigger "${name2}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
function consumeOffset(styles) {
  if (typeof styles == "string")
    return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return { duration, delay, easing };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input2, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input2.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({ keyframes }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
function buildTrigger(name2, ast, normalizer) {
  return new AnimationTrigger(name2, ast, normalizer);
}
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers2 = [(fromState, toState) => true];
  const animation = { type: AnimationMetadataType.Sequence, steps: [], options: null };
  const transition2 = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers: matchers2,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition2, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
function deleteOrUnsetInMap(map2, key, value) {
  let currentValues = map2.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map2.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0)
    return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node)
      return NULL_NODE;
    let root = localRootMap.get(node);
    if (root)
      return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length)
    return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop])
      return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry)
    return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger2 = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger2, phase];
}
var NoopAnimationDriver, AnimationDriver, AnimationStyleNormalizer, DIMENSIONAL_PROP_SET, WebAnimationsStyleNormalizer, ANY_STATE, TRUE_BOOLEAN_VALUES, FALSE_BOOLEAN_VALUES, SELF_TOKEN, SELF_TOKEN_REGEX, ROOT_SELECTOR, AnimationAstBuilderVisitor, AnimationAstBuilderContext, ElementInstructionMap, ONE_FRAME_IN_MILLISECONDS, ENTER_TOKEN, ENTER_TOKEN_REGEX, LEAVE_TOKEN, LEAVE_TOKEN_REGEX, AnimationTimelineBuilderVisitor, DEFAULT_NOOP_PREVIOUS_NODE, AnimationTimelineContext, TimelineBuilder, SubTimelineBuilder, EMPTY_OBJECT, AnimationTransitionFactory, AnimationStateStyles, AnimationTrigger, EMPTY_INSTRUCTION_MAP, TimelineAnimationEngine, QUEUED_CLASSNAME, QUEUED_SELECTOR, DISABLED_CLASSNAME, DISABLED_SELECTOR, STAR_CLASSNAME, STAR_SELECTOR, EMPTY_PLAYER_ARRAY, NULL_REMOVAL_STATE, NULL_REMOVED_QUERIED_STATE, REMOVAL_FLAG, StateValue, VOID_VALUE, DEFAULT_STATE_VALUE, AnimationTransitionNamespace, TransitionAnimationEngine, TransitionAnimationPlayer, AnimationEngine, SpecialCasedStyles, WebAnimationsPlayer, WebAnimationsDriver, ANIMATION_PREFIX, DISABLE_ANIMATIONS_FLAG, BaseAnimationRenderer, AnimationRenderer, AnimationRendererFactory;
var init_browser2 = __esm({
  "node_modules/@angular/animations/fesm2022/browser.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_util2();
    init_private_export();
    NoopAnimationDriver = class _NoopAnimationDriver {
      /**
       * @returns Whether `prop` is a valid CSS property
       */
      validateStyleProperty(prop) {
        return validateStyleProperty(prop);
      }
      /**
       *
       * @returns Whether elm1 contains elm2.
       */
      containsElement(elm1, elm2) {
        return containsElement(elm1, elm2);
      }
      /**
       * @returns Rhe parent of the given element or `null` if the element is the `document`
       */
      getParentElement(element) {
        return getParentElement(element);
      }
      /**
       * @returns The result of the query selector on the element. The array will contain up to 1 item
       *     if `multi` is  `false`.
       */
      query(element, selector, multi) {
        return invokeQuery(element, selector, multi);
      }
      /**
       * @returns The `defaultValue` or empty string
       */
      computeStyle(element, prop, defaultValue) {
        return defaultValue || "";
      }
      /**
       * @returns An `NoopAnimationPlayer`
       */
      animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
        return new NoopAnimationPlayer(duration, delay);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _NoopAnimationDriver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _NoopAnimationDriver });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: NoopAnimationDriver, decorators: [{
      type: Injectable
    }] });
    AnimationDriver = class {
      /**
       * @deprecated Use the NoopAnimationDriver class.
       */
      static NOOP = new NoopAnimationDriver();
    };
    AnimationStyleNormalizer = class {
    };
    DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set([
      "width",
      "height",
      "minWidth",
      "minHeight",
      "maxWidth",
      "maxHeight",
      "left",
      "top",
      "bottom",
      "right",
      "fontSize",
      "outlineWidth",
      "outlineOffset",
      "paddingTop",
      "paddingLeft",
      "paddingBottom",
      "paddingRight",
      "marginTop",
      "marginLeft",
      "marginBottom",
      "marginRight",
      "borderRadius",
      "borderWidth",
      "borderTopWidth",
      "borderLeftWidth",
      "borderRightWidth",
      "borderBottomWidth",
      "textIndent",
      "perspective"
    ]);
    WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
      normalizePropertyName(propertyName, errors) {
        return dashCaseToCamelCase(propertyName);
      }
      normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
        let unit = "";
        const strVal = value.toString().trim();
        if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
          if (typeof value === "number") {
            unit = "px";
          } else {
            const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
            if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
              errors.push(invalidCssUnitValue(userProvidedProperty, value));
            }
          }
        }
        return strVal + unit;
      }
    };
    ANY_STATE = "*";
    TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
    FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
    SELF_TOKEN = ":self";
    SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
    ROOT_SELECTOR = "";
    AnimationAstBuilderVisitor = class {
      _driver;
      constructor(_driver) {
        this._driver = _driver;
      }
      build(metadata, errors, warnings) {
        const context = new AnimationAstBuilderContext(errors);
        this._resetContextStyleTimingState(context);
        const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (context.unsupportedCSSPropertiesFound.size) {
            pushUnrecognizedPropertiesWarning(warnings, [
              ...context.unsupportedCSSPropertiesFound.keys()
            ]);
          }
        }
        return ast;
      }
      _resetContextStyleTimingState(context) {
        context.currentQuerySelector = ROOT_SELECTOR;
        context.collectedStyles = /* @__PURE__ */ new Map();
        context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
        context.currentTime = 0;
      }
      visitTrigger(metadata, context) {
        let queryCount = context.queryCount = 0;
        let depCount = context.depCount = 0;
        const states = [];
        const transitions = [];
        if (metadata.name.charAt(0) == "@") {
          context.errors.push(invalidTrigger());
        }
        metadata.definitions.forEach((def) => {
          this._resetContextStyleTimingState(context);
          if (def.type == AnimationMetadataType.State) {
            const stateDef = def;
            const name2 = stateDef.name;
            name2.toString().split(/\s*,\s*/).forEach((n) => {
              stateDef.name = n;
              states.push(this.visitState(stateDef, context));
            });
            stateDef.name = name2;
          } else if (def.type == AnimationMetadataType.Transition) {
            const transition2 = this.visitTransition(def, context);
            queryCount += transition2.queryCount;
            depCount += transition2.depCount;
            transitions.push(transition2);
          } else {
            context.errors.push(invalidDefinition());
          }
        });
        return {
          type: AnimationMetadataType.Trigger,
          name: metadata.name,
          states,
          transitions,
          queryCount,
          depCount,
          options: null
        };
      }
      visitState(metadata, context) {
        const styleAst = this.visitStyle(metadata.styles, context);
        const astParams = metadata.options && metadata.options.params || null;
        if (styleAst.containsDynamicStyles) {
          const missingSubs = /* @__PURE__ */ new Set();
          const params = astParams || {};
          styleAst.styles.forEach((style2) => {
            if (style2 instanceof Map) {
              style2.forEach((value) => {
                extractStyleParams(value).forEach((sub) => {
                  if (!params.hasOwnProperty(sub)) {
                    missingSubs.add(sub);
                  }
                });
              });
            }
          });
          if (missingSubs.size) {
            context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
          }
        }
        return {
          type: AnimationMetadataType.State,
          name: metadata.name,
          style: styleAst,
          options: astParams ? { params: astParams } : null
        };
      }
      visitTransition(metadata, context) {
        context.queryCount = 0;
        context.depCount = 0;
        const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
        const matchers2 = parseTransitionExpr(metadata.expr, context.errors);
        return {
          type: AnimationMetadataType.Transition,
          matchers: matchers2,
          animation,
          queryCount: context.queryCount,
          depCount: context.depCount,
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitSequence(metadata, context) {
        return {
          type: AnimationMetadataType.Sequence,
          steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitGroup(metadata, context) {
        const currentTime = context.currentTime;
        let furthestTime = 0;
        const steps = metadata.steps.map((step) => {
          context.currentTime = currentTime;
          const innerAst = visitDslNode(this, step, context);
          furthestTime = Math.max(furthestTime, context.currentTime);
          return innerAst;
        });
        context.currentTime = furthestTime;
        return {
          type: AnimationMetadataType.Group,
          steps,
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitAnimate(metadata, context) {
        const timingAst = constructTimingAst(metadata.timings, context.errors);
        context.currentAnimateTimings = timingAst;
        let styleAst;
        let styleMetadata = metadata.styles ? metadata.styles : style({});
        if (styleMetadata.type == AnimationMetadataType.Keyframes) {
          styleAst = this.visitKeyframes(styleMetadata, context);
        } else {
          let styleMetadata2 = metadata.styles;
          let isEmpty = false;
          if (!styleMetadata2) {
            isEmpty = true;
            const newStyleData = {};
            if (timingAst.easing) {
              newStyleData["easing"] = timingAst.easing;
            }
            styleMetadata2 = style(newStyleData);
          }
          context.currentTime += timingAst.duration + timingAst.delay;
          const _styleAst = this.visitStyle(styleMetadata2, context);
          _styleAst.isEmptyStep = isEmpty;
          styleAst = _styleAst;
        }
        context.currentAnimateTimings = null;
        return {
          type: AnimationMetadataType.Animate,
          timings: timingAst,
          style: styleAst,
          options: null
        };
      }
      visitStyle(metadata, context) {
        const ast = this._makeStyleAst(metadata, context);
        this._validateStyleAst(ast, context);
        return ast;
      }
      _makeStyleAst(metadata, context) {
        const styles = [];
        const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
        for (let styleTuple of metadataStyles) {
          if (typeof styleTuple === "string") {
            if (styleTuple === AUTO_STYLE) {
              styles.push(styleTuple);
            } else {
              context.errors.push(invalidStyleValue(styleTuple));
            }
          } else {
            styles.push(new Map(Object.entries(styleTuple)));
          }
        }
        let containsDynamicStyles = false;
        let collectedEasing = null;
        styles.forEach((styleData) => {
          if (styleData instanceof Map) {
            if (styleData.has("easing")) {
              collectedEasing = styleData.get("easing");
              styleData.delete("easing");
            }
            if (!containsDynamicStyles) {
              for (let value of styleData.values()) {
                if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
                  containsDynamicStyles = true;
                  break;
                }
              }
            }
          }
        });
        return {
          type: AnimationMetadataType.Style,
          styles,
          easing: collectedEasing,
          offset: metadata.offset,
          containsDynamicStyles,
          options: null
        };
      }
      _validateStyleAst(ast, context) {
        const timings = context.currentAnimateTimings;
        let endTime = context.currentTime;
        let startTime = context.currentTime;
        if (timings && startTime > 0) {
          startTime -= timings.duration + timings.delay;
        }
        ast.styles.forEach((tuple) => {
          if (typeof tuple === "string")
            return;
          tuple.forEach((value, prop) => {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              if (!this._driver.validateStyleProperty(prop)) {
                tuple.delete(prop);
                context.unsupportedCSSPropertiesFound.add(prop);
                return;
              }
            }
            const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
            const collectedEntry = collectedStyles.get(prop);
            let updateCollectedStyle = true;
            if (collectedEntry) {
              if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
                context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
                updateCollectedStyle = false;
              }
              startTime = collectedEntry.startTime;
            }
            if (updateCollectedStyle) {
              collectedStyles.set(prop, { startTime, endTime });
            }
            if (context.options) {
              validateStyleParams(value, context.options, context.errors);
            }
          });
        });
      }
      visitKeyframes(metadata, context) {
        const ast = { type: AnimationMetadataType.Keyframes, styles: [], options: null };
        if (!context.currentAnimateTimings) {
          context.errors.push(invalidKeyframes());
          return ast;
        }
        const MAX_KEYFRAME_OFFSET = 1;
        let totalKeyframesWithOffsets = 0;
        const offsets = [];
        let offsetsOutOfOrder = false;
        let keyframesOutOfRange = false;
        let previousOffset = 0;
        const keyframes = metadata.steps.map((styles) => {
          const style2 = this._makeStyleAst(styles, context);
          let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
          let offset = 0;
          if (offsetVal != null) {
            totalKeyframesWithOffsets++;
            offset = style2.offset = offsetVal;
          }
          keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
          offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
          previousOffset = offset;
          offsets.push(offset);
          return style2;
        });
        if (keyframesOutOfRange) {
          context.errors.push(invalidOffset());
        }
        if (offsetsOutOfOrder) {
          context.errors.push(keyframeOffsetsOutOfOrder());
        }
        const length = metadata.steps.length;
        let generatedOffset = 0;
        if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
          context.errors.push(keyframesMissingOffsets());
        } else if (totalKeyframesWithOffsets == 0) {
          generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
        }
        const limit = length - 1;
        const currentTime = context.currentTime;
        const currentAnimateTimings = context.currentAnimateTimings;
        const animateDuration = currentAnimateTimings.duration;
        keyframes.forEach((kf, i) => {
          const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
          const durationUpToThisFrame = offset * animateDuration;
          context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
          currentAnimateTimings.duration = durationUpToThisFrame;
          this._validateStyleAst(kf, context);
          kf.offset = offset;
          ast.styles.push(kf);
        });
        return ast;
      }
      visitReference(metadata, context) {
        return {
          type: AnimationMetadataType.Reference,
          animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitAnimateChild(metadata, context) {
        context.depCount++;
        return {
          type: AnimationMetadataType.AnimateChild,
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitAnimateRef(metadata, context) {
        return {
          type: AnimationMetadataType.AnimateRef,
          animation: this.visitReference(metadata.animation, context),
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitQuery(metadata, context) {
        const parentSelector = context.currentQuerySelector;
        const options = metadata.options || {};
        context.queryCount++;
        context.currentQuery = metadata;
        const [selector, includeSelf] = normalizeSelector(metadata.selector);
        context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
        getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
        const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
        context.currentQuery = null;
        context.currentQuerySelector = parentSelector;
        return {
          type: AnimationMetadataType.Query,
          selector,
          limit: options.limit || 0,
          optional: !!options.optional,
          includeSelf,
          animation,
          originalSelector: metadata.selector,
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitStagger(metadata, context) {
        if (!context.currentQuery) {
          context.errors.push(invalidStagger());
        }
        const timings = metadata.timings === "full" ? { duration: 0, delay: 0, easing: "full" } : resolveTiming(metadata.timings, context.errors, true);
        return {
          type: AnimationMetadataType.Stagger,
          animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
          timings,
          options: null
        };
      }
    };
    AnimationAstBuilderContext = class {
      errors;
      queryCount = 0;
      depCount = 0;
      currentTransition = null;
      currentQuery = null;
      currentQuerySelector = null;
      currentAnimateTimings = null;
      currentTime = 0;
      collectedStyles = /* @__PURE__ */ new Map();
      options = null;
      unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
      constructor(errors) {
        this.errors = errors;
      }
    };
    ElementInstructionMap = class {
      _map = /* @__PURE__ */ new Map();
      get(element) {
        return this._map.get(element) || [];
      }
      append(element, instructions) {
        let existingInstructions = this._map.get(element);
        if (!existingInstructions) {
          this._map.set(element, existingInstructions = []);
        }
        existingInstructions.push(...instructions);
      }
      has(element) {
        return this._map.has(element);
      }
      clear() {
        this._map.clear();
      }
    };
    ONE_FRAME_IN_MILLISECONDS = 1;
    ENTER_TOKEN = ":enter";
    ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
    LEAVE_TOKEN = ":leave";
    LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
    AnimationTimelineBuilderVisitor = class {
      buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
        subInstructions = subInstructions || new ElementInstructionMap();
        const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
        context.options = options;
        const delay = options.delay ? resolveTimingValue(options.delay) : 0;
        context.currentTimeline.delayNextStep(delay);
        context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
        visitDslNode(this, ast, context);
        const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
        if (timelines.length && finalStyles.size) {
          let lastRootTimeline;
          for (let i = timelines.length - 1; i >= 0; i--) {
            const timeline = timelines[i];
            if (timeline.element === rootElement) {
              lastRootTimeline = timeline;
              break;
            }
          }
          if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
            lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
          }
        }
        return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
      }
      visitTrigger(ast, context) {
      }
      visitState(ast, context) {
      }
      visitTransition(ast, context) {
      }
      visitAnimateChild(ast, context) {
        const elementInstructions = context.subInstructions.get(context.element);
        if (elementInstructions) {
          const innerContext = context.createSubContext(ast.options);
          const startTime = context.currentTimeline.currentTime;
          const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
          if (startTime != endTime) {
            context.transformIntoNewTimeline(endTime);
          }
        }
        context.previousNode = ast;
      }
      visitAnimateRef(ast, context) {
        const innerContext = context.createSubContext(ast.options);
        innerContext.transformIntoNewTimeline();
        this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
        this.visitReference(ast.animation, innerContext);
        context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
        context.previousNode = ast;
      }
      _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
        for (const animationRefOptions of animationsRefsOptions) {
          const animationDelay = animationRefOptions?.delay;
          if (animationDelay) {
            const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
            innerContext.delayNextStep(animationDelayValue);
          }
        }
      }
      _visitSubInstructions(instructions, context, options) {
        const startTime = context.currentTimeline.currentTime;
        let furthestTime = startTime;
        const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
        const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
        if (duration !== 0) {
          instructions.forEach((instruction) => {
            const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
            furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
          });
        }
        return furthestTime;
      }
      visitReference(ast, context) {
        context.updateOptions(ast.options, true);
        visitDslNode(this, ast.animation, context);
        context.previousNode = ast;
      }
      visitSequence(ast, context) {
        const subContextCount = context.subContextCount;
        let ctx = context;
        const options = ast.options;
        if (options && (options.params || options.delay)) {
          ctx = context.createSubContext(options);
          ctx.transformIntoNewTimeline();
          if (options.delay != null) {
            if (ctx.previousNode.type == AnimationMetadataType.Style) {
              ctx.currentTimeline.snapshotCurrentStyles();
              ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
            }
            const delay = resolveTimingValue(options.delay);
            ctx.delayNextStep(delay);
          }
        }
        if (ast.steps.length) {
          ast.steps.forEach((s) => visitDslNode(this, s, ctx));
          ctx.currentTimeline.applyStylesToKeyframe();
          if (ctx.subContextCount > subContextCount) {
            ctx.transformIntoNewTimeline();
          }
        }
        context.previousNode = ast;
      }
      visitGroup(ast, context) {
        const innerTimelines = [];
        let furthestTime = context.currentTimeline.currentTime;
        const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
        ast.steps.forEach((s) => {
          const innerContext = context.createSubContext(ast.options);
          if (delay) {
            innerContext.delayNextStep(delay);
          }
          visitDslNode(this, s, innerContext);
          furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
          innerTimelines.push(innerContext.currentTimeline);
        });
        innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
        context.transformIntoNewTimeline(furthestTime);
        context.previousNode = ast;
      }
      _visitTiming(ast, context) {
        if (ast.dynamic) {
          const strValue = ast.strValue;
          const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
          return resolveTiming(timingValue, context.errors);
        } else {
          return { duration: ast.duration, delay: ast.delay, easing: ast.easing };
        }
      }
      visitAnimate(ast, context) {
        const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
        const timeline = context.currentTimeline;
        if (timings.delay) {
          context.incrementTime(timings.delay);
          timeline.snapshotCurrentStyles();
        }
        const style2 = ast.style;
        if (style2.type == AnimationMetadataType.Keyframes) {
          this.visitKeyframes(style2, context);
        } else {
          context.incrementTime(timings.duration);
          this.visitStyle(style2, context);
          timeline.applyStylesToKeyframe();
        }
        context.currentAnimateTimings = null;
        context.previousNode = ast;
      }
      visitStyle(ast, context) {
        const timeline = context.currentTimeline;
        const timings = context.currentAnimateTimings;
        if (!timings && timeline.hasCurrentStyleProperties()) {
          timeline.forwardFrame();
        }
        const easing = timings && timings.easing || ast.easing;
        if (ast.isEmptyStep) {
          timeline.applyEmptyStep(easing);
        } else {
          timeline.setStyles(ast.styles, easing, context.errors, context.options);
        }
        context.previousNode = ast;
      }
      visitKeyframes(ast, context) {
        const currentAnimateTimings = context.currentAnimateTimings;
        const startTime = context.currentTimeline.duration;
        const duration = currentAnimateTimings.duration;
        const innerContext = context.createSubContext();
        const innerTimeline = innerContext.currentTimeline;
        innerTimeline.easing = currentAnimateTimings.easing;
        ast.styles.forEach((step) => {
          const offset = step.offset || 0;
          innerTimeline.forwardTime(offset * duration);
          innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
          innerTimeline.applyStylesToKeyframe();
        });
        context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
        context.transformIntoNewTimeline(startTime + duration);
        context.previousNode = ast;
      }
      visitQuery(ast, context) {
        const startTime = context.currentTimeline.currentTime;
        const options = ast.options || {};
        const delay = options.delay ? resolveTimingValue(options.delay) : 0;
        if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
          context.currentTimeline.snapshotCurrentStyles();
          context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        let furthestTime = startTime;
        const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
        context.currentQueryTotal = elms.length;
        let sameElementTimeline = null;
        elms.forEach((element, i) => {
          context.currentQueryIndex = i;
          const innerContext = context.createSubContext(ast.options, element);
          if (delay) {
            innerContext.delayNextStep(delay);
          }
          if (element === context.element) {
            sameElementTimeline = innerContext.currentTimeline;
          }
          visitDslNode(this, ast.animation, innerContext);
          innerContext.currentTimeline.applyStylesToKeyframe();
          const endTime = innerContext.currentTimeline.currentTime;
          furthestTime = Math.max(furthestTime, endTime);
        });
        context.currentQueryIndex = 0;
        context.currentQueryTotal = 0;
        context.transformIntoNewTimeline(furthestTime);
        if (sameElementTimeline) {
          context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
          context.currentTimeline.snapshotCurrentStyles();
        }
        context.previousNode = ast;
      }
      visitStagger(ast, context) {
        const parentContext = context.parentContext;
        const tl = context.currentTimeline;
        const timings = ast.timings;
        const duration = Math.abs(timings.duration);
        const maxTime = duration * (context.currentQueryTotal - 1);
        let delay = duration * context.currentQueryIndex;
        let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
        switch (staggerTransformer) {
          case "reverse":
            delay = maxTime - delay;
            break;
          case "full":
            delay = parentContext.currentStaggerTime;
            break;
        }
        const timeline = context.currentTimeline;
        if (delay) {
          timeline.delayNextStep(delay);
        }
        const startingTime = timeline.currentTime;
        visitDslNode(this, ast.animation, context);
        context.previousNode = ast;
        parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
      }
    };
    DEFAULT_NOOP_PREVIOUS_NODE = {};
    AnimationTimelineContext = class _AnimationTimelineContext {
      _driver;
      element;
      subInstructions;
      _enterClassName;
      _leaveClassName;
      errors;
      timelines;
      parentContext = null;
      currentTimeline;
      currentAnimateTimings = null;
      previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
      subContextCount = 0;
      options = {};
      currentQueryIndex = 0;
      currentQueryTotal = 0;
      currentStaggerTime = 0;
      constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
        this._driver = _driver;
        this.element = element;
        this.subInstructions = subInstructions;
        this._enterClassName = _enterClassName;
        this._leaveClassName = _leaveClassName;
        this.errors = errors;
        this.timelines = timelines;
        this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
        timelines.push(this.currentTimeline);
      }
      get params() {
        return this.options.params;
      }
      updateOptions(options, skipIfExists) {
        if (!options)
          return;
        const newOptions = options;
        let optionsToUpdate = this.options;
        if (newOptions.duration != null) {
          optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
        }
        if (newOptions.delay != null) {
          optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
        }
        const newParams = newOptions.params;
        if (newParams) {
          let paramsToUpdate = optionsToUpdate.params;
          if (!paramsToUpdate) {
            paramsToUpdate = this.options.params = {};
          }
          Object.keys(newParams).forEach((name2) => {
            if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name2)) {
              paramsToUpdate[name2] = interpolateParams(newParams[name2], paramsToUpdate, this.errors);
            }
          });
        }
      }
      _copyOptions() {
        const options = {};
        if (this.options) {
          const oldParams = this.options.params;
          if (oldParams) {
            const params = options["params"] = {};
            Object.keys(oldParams).forEach((name2) => {
              params[name2] = oldParams[name2];
            });
          }
        }
        return options;
      }
      createSubContext(options = null, element, newTime) {
        const target = element || this.element;
        const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
        context.previousNode = this.previousNode;
        context.currentAnimateTimings = this.currentAnimateTimings;
        context.options = this._copyOptions();
        context.updateOptions(options);
        context.currentQueryIndex = this.currentQueryIndex;
        context.currentQueryTotal = this.currentQueryTotal;
        context.parentContext = this;
        this.subContextCount++;
        return context;
      }
      transformIntoNewTimeline(newTime) {
        this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
        this.timelines.push(this.currentTimeline);
        return this.currentTimeline;
      }
      appendInstructionToTimeline(instruction, duration, delay) {
        const updatedTimings = {
          duration: duration != null ? duration : instruction.duration,
          delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
          easing: ""
        };
        const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
        this.timelines.push(builder);
        return updatedTimings;
      }
      incrementTime(time) {
        this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
      }
      delayNextStep(delay) {
        if (delay > 0) {
          this.currentTimeline.delayNextStep(delay);
        }
      }
      invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
        let results = [];
        if (includeSelf) {
          results.push(this.element);
        }
        if (selector.length > 0) {
          selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
          selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
          const multi = limit != 1;
          let elements = this._driver.query(this.element, selector, multi);
          if (limit !== 0) {
            elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
          }
          results.push(...elements);
        }
        if (!optional && results.length == 0) {
          errors.push(invalidQuery(originalSelector));
        }
        return results;
      }
    };
    TimelineBuilder = class _TimelineBuilder {
      _driver;
      element;
      startTime;
      _elementTimelineStylesLookup;
      duration = 0;
      easing = null;
      _previousKeyframe = /* @__PURE__ */ new Map();
      _currentKeyframe = /* @__PURE__ */ new Map();
      _keyframes = /* @__PURE__ */ new Map();
      _styleSummary = /* @__PURE__ */ new Map();
      _localTimelineStyles = /* @__PURE__ */ new Map();
      _globalTimelineStyles;
      _pendingStyles = /* @__PURE__ */ new Map();
      _backFill = /* @__PURE__ */ new Map();
      _currentEmptyStepKeyframe = null;
      constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
        this._driver = _driver;
        this.element = element;
        this.startTime = startTime;
        this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
        if (!this._elementTimelineStylesLookup) {
          this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
        }
        this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
        if (!this._globalTimelineStyles) {
          this._globalTimelineStyles = this._localTimelineStyles;
          this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
        }
        this._loadKeyframe();
      }
      containsAnimation() {
        switch (this._keyframes.size) {
          case 0:
            return false;
          case 1:
            return this.hasCurrentStyleProperties();
          default:
            return true;
        }
      }
      hasCurrentStyleProperties() {
        return this._currentKeyframe.size > 0;
      }
      get currentTime() {
        return this.startTime + this.duration;
      }
      delayNextStep(delay) {
        const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
        if (this.duration || hasPreStyleStep) {
          this.forwardTime(this.currentTime + delay);
          if (hasPreStyleStep) {
            this.snapshotCurrentStyles();
          }
        } else {
          this.startTime += delay;
        }
      }
      fork(element, currentTime) {
        this.applyStylesToKeyframe();
        return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
      }
      _loadKeyframe() {
        if (this._currentKeyframe) {
          this._previousKeyframe = this._currentKeyframe;
        }
        this._currentKeyframe = this._keyframes.get(this.duration);
        if (!this._currentKeyframe) {
          this._currentKeyframe = /* @__PURE__ */ new Map();
          this._keyframes.set(this.duration, this._currentKeyframe);
        }
      }
      forwardFrame() {
        this.duration += ONE_FRAME_IN_MILLISECONDS;
        this._loadKeyframe();
      }
      forwardTime(time) {
        this.applyStylesToKeyframe();
        this.duration = time;
        this._loadKeyframe();
      }
      _updateStyle(prop, value) {
        this._localTimelineStyles.set(prop, value);
        this._globalTimelineStyles.set(prop, value);
        this._styleSummary.set(prop, { time: this.currentTime, value });
      }
      allowOnlyTimelineStyles() {
        return this._currentEmptyStepKeyframe !== this._currentKeyframe;
      }
      applyEmptyStep(easing) {
        if (easing) {
          this._previousKeyframe.set("easing", easing);
        }
        for (let [prop, value] of this._globalTimelineStyles) {
          this._backFill.set(prop, value || AUTO_STYLE);
          this._currentKeyframe.set(prop, AUTO_STYLE);
        }
        this._currentEmptyStepKeyframe = this._currentKeyframe;
      }
      setStyles(input2, easing, errors, options) {
        if (easing) {
          this._previousKeyframe.set("easing", easing);
        }
        const params = options && options.params || {};
        const styles = flattenStyles(input2, this._globalTimelineStyles);
        for (let [prop, value] of styles) {
          const val = interpolateParams(value, params, errors);
          this._pendingStyles.set(prop, val);
          if (!this._localTimelineStyles.has(prop)) {
            this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
          }
          this._updateStyle(prop, val);
        }
      }
      applyStylesToKeyframe() {
        if (this._pendingStyles.size == 0)
          return;
        this._pendingStyles.forEach((val, prop) => {
          this._currentKeyframe.set(prop, val);
        });
        this._pendingStyles.clear();
        this._localTimelineStyles.forEach((val, prop) => {
          if (!this._currentKeyframe.has(prop)) {
            this._currentKeyframe.set(prop, val);
          }
        });
      }
      snapshotCurrentStyles() {
        for (let [prop, val] of this._localTimelineStyles) {
          this._pendingStyles.set(prop, val);
          this._updateStyle(prop, val);
        }
      }
      getFinalKeyframe() {
        return this._keyframes.get(this.duration);
      }
      get properties() {
        const properties = [];
        for (let prop in this._currentKeyframe) {
          properties.push(prop);
        }
        return properties;
      }
      mergeTimelineCollectedStyles(timeline) {
        timeline._styleSummary.forEach((details1, prop) => {
          const details0 = this._styleSummary.get(prop);
          if (!details0 || details1.time > details0.time) {
            this._updateStyle(prop, details1.value);
          }
        });
      }
      buildKeyframes() {
        this.applyStylesToKeyframe();
        const preStyleProps = /* @__PURE__ */ new Set();
        const postStyleProps = /* @__PURE__ */ new Set();
        const isEmpty = this._keyframes.size === 1 && this.duration === 0;
        let finalKeyframes = [];
        this._keyframes.forEach((keyframe, time) => {
          const finalKeyframe = new Map([...this._backFill, ...keyframe]);
          finalKeyframe.forEach((value, prop) => {
            if (value === \u0275PRE_STYLE) {
              preStyleProps.add(prop);
            } else if (value === AUTO_STYLE) {
              postStyleProps.add(prop);
            }
          });
          if (!isEmpty) {
            finalKeyframe.set("offset", time / this.duration);
          }
          finalKeyframes.push(finalKeyframe);
        });
        const preProps = [...preStyleProps.values()];
        const postProps = [...postStyleProps.values()];
        if (isEmpty) {
          const kf0 = finalKeyframes[0];
          const kf1 = new Map(kf0);
          kf0.set("offset", 0);
          kf1.set("offset", 1);
          finalKeyframes = [kf0, kf1];
        }
        return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
      }
    };
    SubTimelineBuilder = class extends TimelineBuilder {
      keyframes;
      preStyleProps;
      postStyleProps;
      _stretchStartingKeyframe;
      timings;
      constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
        super(driver, element, timings.delay);
        this.keyframes = keyframes;
        this.preStyleProps = preStyleProps;
        this.postStyleProps = postStyleProps;
        this._stretchStartingKeyframe = _stretchStartingKeyframe;
        this.timings = { duration: timings.duration, delay: timings.delay, easing: timings.easing };
      }
      containsAnimation() {
        return this.keyframes.length > 1;
      }
      buildKeyframes() {
        let keyframes = this.keyframes;
        let { delay, duration, easing } = this.timings;
        if (this._stretchStartingKeyframe && delay) {
          const newKeyframes = [];
          const totalTime = duration + delay;
          const startingGap = delay / totalTime;
          const newFirstKeyframe = new Map(keyframes[0]);
          newFirstKeyframe.set("offset", 0);
          newKeyframes.push(newFirstKeyframe);
          const oldFirstKeyframe = new Map(keyframes[0]);
          oldFirstKeyframe.set("offset", roundOffset(startingGap));
          newKeyframes.push(oldFirstKeyframe);
          const limit = keyframes.length - 1;
          for (let i = 1; i <= limit; i++) {
            let kf = new Map(keyframes[i]);
            const oldOffset = kf.get("offset");
            const timeAtKeyframe = delay + oldOffset * duration;
            kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
            newKeyframes.push(kf);
          }
          duration = totalTime;
          delay = 0;
          easing = "";
          keyframes = newKeyframes;
        }
        return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
      }
    };
    EMPTY_OBJECT = {};
    AnimationTransitionFactory = class {
      _triggerName;
      ast;
      _stateStyles;
      constructor(_triggerName, ast, _stateStyles) {
        this._triggerName = _triggerName;
        this.ast = ast;
        this._stateStyles = _stateStyles;
      }
      match(currentState, nextState, element, params) {
        return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
      }
      buildStyles(stateName, params, errors) {
        let styler = this._stateStyles.get("*");
        if (stateName !== void 0) {
          styler = this._stateStyles.get(stateName?.toString()) || styler;
        }
        return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
      }
      build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
        const errors = [];
        const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
        const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
        const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
        const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
        const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
        const queriedElements = /* @__PURE__ */ new Set();
        const preStyleMap = /* @__PURE__ */ new Map();
        const postStyleMap = /* @__PURE__ */ new Map();
        const isRemoval = nextState === "void";
        const animationOptions = {
          params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
          delay: this.ast.options?.delay
        };
        const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
        let totalTime = 0;
        timelines.forEach((tl) => {
          totalTime = Math.max(tl.duration + tl.delay, totalTime);
        });
        if (errors.length) {
          return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
        }
        timelines.forEach((tl) => {
          const elm = tl.element;
          const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
          tl.preStyleProps.forEach((prop) => preProps.add(prop));
          const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
          tl.postStyleProps.forEach((prop) => postProps.add(prop));
          if (elm !== element) {
            queriedElements.add(elm);
          }
        });
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
        }
        return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
      }
    };
    AnimationStateStyles = class {
      styles;
      defaultParams;
      normalizer;
      constructor(styles, defaultParams, normalizer) {
        this.styles = styles;
        this.defaultParams = defaultParams;
        this.normalizer = normalizer;
      }
      buildStyles(params, errors) {
        const finalStyles = /* @__PURE__ */ new Map();
        const combinedParams = applyParamDefaults(params, this.defaultParams);
        this.styles.styles.forEach((value) => {
          if (typeof value !== "string") {
            value.forEach((val, prop) => {
              if (val) {
                val = interpolateParams(val, combinedParams, errors);
              }
              const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
              val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
              finalStyles.set(prop, val);
            });
          }
        });
        return finalStyles;
      }
    };
    AnimationTrigger = class {
      name;
      ast;
      _normalizer;
      transitionFactories = [];
      fallbackTransition;
      states = /* @__PURE__ */ new Map();
      constructor(name2, ast, _normalizer) {
        this.name = name2;
        this.ast = ast;
        this._normalizer = _normalizer;
        ast.states.forEach((ast2) => {
          const defaultParams = ast2.options && ast2.options.params || {};
          this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
        });
        balanceProperties(this.states, "true", "1");
        balanceProperties(this.states, "false", "0");
        ast.transitions.forEach((ast2) => {
          this.transitionFactories.push(new AnimationTransitionFactory(name2, ast2, this.states));
        });
        this.fallbackTransition = createFallbackTransition(name2, this.states);
      }
      get containsQueries() {
        return this.ast.queryCount > 0;
      }
      matchTransition(currentState, nextState, element, params) {
        const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
        return entry || null;
      }
      matchStyles(currentState, params, errors) {
        return this.fallbackTransition.buildStyles(currentState, params, errors);
      }
    };
    EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
    TimelineAnimationEngine = class {
      bodyNode;
      _driver;
      _normalizer;
      _animations = /* @__PURE__ */ new Map();
      _playersById = /* @__PURE__ */ new Map();
      players = [];
      constructor(bodyNode, _driver, _normalizer) {
        this.bodyNode = bodyNode;
        this._driver = _driver;
        this._normalizer = _normalizer;
      }
      register(id, metadata) {
        const errors = [];
        const warnings = [];
        const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
        if (errors.length) {
          throw registerFailed(errors);
        } else {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            if (warnings.length) {
              warnRegister(warnings);
            }
          }
          this._animations.set(id, ast);
        }
      }
      _buildPlayer(i, preStyles, postStyles) {
        const element = i.element;
        const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
        return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
      }
      create(id, element, options = {}) {
        const errors = [];
        const ast = this._animations.get(id);
        let instructions;
        const autoStylesMap = /* @__PURE__ */ new Map();
        if (ast) {
          instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
          instructions.forEach((inst) => {
            const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
            inst.postStyleProps.forEach((prop) => styles.set(prop, null));
          });
        } else {
          errors.push(missingOrDestroyedAnimation());
          instructions = [];
        }
        if (errors.length) {
          throw createAnimationFailed(errors);
        }
        autoStylesMap.forEach((styles, element2) => {
          styles.forEach((_, prop) => {
            styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
          });
        });
        const players = instructions.map((i) => {
          const styles = autoStylesMap.get(i.element);
          return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
        });
        const player = optimizeGroupPlayer(players);
        this._playersById.set(id, player);
        player.onDestroy(() => this.destroy(id));
        this.players.push(player);
        return player;
      }
      destroy(id) {
        const player = this._getPlayer(id);
        player.destroy();
        this._playersById.delete(id);
        const index = this.players.indexOf(player);
        if (index >= 0) {
          this.players.splice(index, 1);
        }
      }
      _getPlayer(id) {
        const player = this._playersById.get(id);
        if (!player) {
          throw missingPlayer(id);
        }
        return player;
      }
      listen(id, element, eventName, callback) {
        const baseEvent = makeAnimationEvent(element, "", "", "");
        listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
        return () => {
        };
      }
      command(id, element, command, args) {
        if (command == "register") {
          this.register(id, args[0]);
          return;
        }
        if (command == "create") {
          const options = args[0] || {};
          this.create(id, element, options);
          return;
        }
        const player = this._getPlayer(id);
        switch (command) {
          case "play":
            player.play();
            break;
          case "pause":
            player.pause();
            break;
          case "reset":
            player.reset();
            break;
          case "restart":
            player.restart();
            break;
          case "finish":
            player.finish();
            break;
          case "init":
            player.init();
            break;
          case "setPosition":
            player.setPosition(parseFloat(args[0]));
            break;
          case "destroy":
            this.destroy(id);
            break;
        }
      }
    };
    QUEUED_CLASSNAME = "ng-animate-queued";
    QUEUED_SELECTOR = ".ng-animate-queued";
    DISABLED_CLASSNAME = "ng-animate-disabled";
    DISABLED_SELECTOR = ".ng-animate-disabled";
    STAR_CLASSNAME = "ng-star-inserted";
    STAR_SELECTOR = ".ng-star-inserted";
    EMPTY_PLAYER_ARRAY = [];
    NULL_REMOVAL_STATE = {
      namespaceId: "",
      setForRemoval: false,
      setForMove: false,
      hasAnimation: false,
      removedBeforeQueried: false
    };
    NULL_REMOVED_QUERIED_STATE = {
      namespaceId: "",
      setForMove: false,
      setForRemoval: false,
      hasAnimation: false,
      removedBeforeQueried: true
    };
    REMOVAL_FLAG = "__ng_removed";
    StateValue = class {
      namespaceId;
      value;
      options;
      get params() {
        return this.options.params;
      }
      constructor(input2, namespaceId = "") {
        this.namespaceId = namespaceId;
        const isObj = input2 && input2.hasOwnProperty("value");
        const value = isObj ? input2["value"] : input2;
        this.value = normalizeTriggerValue(value);
        if (isObj) {
          const _a = input2, { value: value2 } = _a, options = __objRest(_a, ["value"]);
          this.options = options;
        } else {
          this.options = {};
        }
        if (!this.options.params) {
          this.options.params = {};
        }
      }
      absorbOptions(options) {
        const newParams = options.params;
        if (newParams) {
          const oldParams = this.options.params;
          Object.keys(newParams).forEach((prop) => {
            if (oldParams[prop] == null) {
              oldParams[prop] = newParams[prop];
            }
          });
        }
      }
    };
    VOID_VALUE = "void";
    DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
    AnimationTransitionNamespace = class {
      id;
      hostElement;
      _engine;
      players = [];
      _triggers = /* @__PURE__ */ new Map();
      _queue = [];
      _elementListeners = /* @__PURE__ */ new Map();
      _hostClassName;
      constructor(id, hostElement, _engine) {
        this.id = id;
        this.hostElement = hostElement;
        this._engine = _engine;
        this._hostClassName = "ng-tns-" + id;
        addClass(hostElement, this._hostClassName);
      }
      listen(element, name2, phase, callback) {
        if (!this._triggers.has(name2)) {
          throw missingTrigger(phase, name2);
        }
        if (phase == null || phase.length == 0) {
          throw missingEvent(name2);
        }
        if (!isTriggerEventValid(phase)) {
          throw unsupportedTriggerEvent(phase, name2);
        }
        const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
        const data = { name: name2, phase, callback };
        listeners.push(data);
        const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
        if (!triggersWithStates.has(name2)) {
          addClass(element, NG_TRIGGER_CLASSNAME);
          addClass(element, NG_TRIGGER_CLASSNAME + "-" + name2);
          triggersWithStates.set(name2, DEFAULT_STATE_VALUE);
        }
        return () => {
          this._engine.afterFlush(() => {
            const index = listeners.indexOf(data);
            if (index >= 0) {
              listeners.splice(index, 1);
            }
            if (!this._triggers.has(name2)) {
              triggersWithStates.delete(name2);
            }
          });
        };
      }
      register(name2, ast) {
        if (this._triggers.has(name2)) {
          return false;
        } else {
          this._triggers.set(name2, ast);
          return true;
        }
      }
      _getTrigger(name2) {
        const trigger2 = this._triggers.get(name2);
        if (!trigger2) {
          throw unregisteredTrigger(name2);
        }
        return trigger2;
      }
      trigger(element, triggerName, value, defaultToFallback = true) {
        const trigger2 = this._getTrigger(triggerName);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        let triggersWithStates = this._engine.statesByElement.get(element);
        if (!triggersWithStates) {
          addClass(element, NG_TRIGGER_CLASSNAME);
          addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
          this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
        }
        let fromState = triggersWithStates.get(triggerName);
        const toState = new StateValue(value, this.id);
        const isObj = value && value.hasOwnProperty("value");
        if (!isObj && fromState) {
          toState.absorbOptions(fromState.options);
        }
        triggersWithStates.set(triggerName, toState);
        if (!fromState) {
          fromState = DEFAULT_STATE_VALUE;
        }
        const isRemoval = toState.value === VOID_VALUE;
        if (!isRemoval && fromState.value === toState.value) {
          if (!objEquals(fromState.params, toState.params)) {
            const errors = [];
            const fromStyles = trigger2.matchStyles(fromState.value, fromState.params, errors);
            const toStyles = trigger2.matchStyles(toState.value, toState.params, errors);
            if (errors.length) {
              this._engine.reportError(errors);
            } else {
              this._engine.afterFlush(() => {
                eraseStyles(element, fromStyles);
                setStyles(element, toStyles);
              });
            }
          }
          return;
        }
        const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
        playersOnElement.forEach((player2) => {
          if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
            player2.destroy();
          }
        });
        let transition2 = trigger2.matchTransition(fromState.value, toState.value, element, toState.params);
        let isFallbackTransition = false;
        if (!transition2) {
          if (!defaultToFallback)
            return;
          transition2 = trigger2.fallbackTransition;
          isFallbackTransition = true;
        }
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition: transition2,
          fromState,
          toState,
          player,
          isFallbackTransition
        });
        if (!isFallbackTransition) {
          addClass(element, QUEUED_CLASSNAME);
          player.onStart(() => {
            removeClass(element, QUEUED_CLASSNAME);
          });
        }
        player.onDone(() => {
          let index = this.players.indexOf(player);
          if (index >= 0) {
            this.players.splice(index, 1);
          }
          const players = this._engine.playersByElement.get(element);
          if (players) {
            let index2 = players.indexOf(player);
            if (index2 >= 0) {
              players.splice(index2, 1);
            }
          }
        });
        this.players.push(player);
        playersOnElement.push(player);
        return player;
      }
      deregister(name2) {
        this._triggers.delete(name2);
        this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name2));
        this._elementListeners.forEach((listeners, element) => {
          this._elementListeners.set(element, listeners.filter((entry) => {
            return entry.name != name2;
          }));
        });
      }
      clearElementCache(element) {
        this._engine.statesByElement.delete(element);
        this._elementListeners.delete(element);
        const elementPlayers = this._engine.playersByElement.get(element);
        if (elementPlayers) {
          elementPlayers.forEach((player) => player.destroy());
          this._engine.playersByElement.delete(element);
        }
      }
      _signalRemovalForInnerTriggers(rootElement, context) {
        const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
        elements.forEach((elm) => {
          if (elm[REMOVAL_FLAG])
            return;
          const namespaces = this._engine.fetchNamespacesByElement(elm);
          if (namespaces.size) {
            namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
          } else {
            this.clearElementCache(elm);
          }
        });
        this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
      }
      triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
        const triggerStates = this._engine.statesByElement.get(element);
        const previousTriggersValues = /* @__PURE__ */ new Map();
        if (triggerStates) {
          const players = [];
          triggerStates.forEach((state2, triggerName) => {
            previousTriggersValues.set(triggerName, state2.value);
            if (this._triggers.has(triggerName)) {
              const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
              if (player) {
                players.push(player);
              }
            }
          });
          if (players.length) {
            this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
            if (destroyAfterComplete) {
              optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
            }
            return true;
          }
        }
        return false;
      }
      prepareLeaveAnimationListeners(element) {
        const listeners = this._elementListeners.get(element);
        const elementStates = this._engine.statesByElement.get(element);
        if (listeners && elementStates) {
          const visitedTriggers = /* @__PURE__ */ new Set();
          listeners.forEach((listener) => {
            const triggerName = listener.name;
            if (visitedTriggers.has(triggerName))
              return;
            visitedTriggers.add(triggerName);
            const trigger2 = this._triggers.get(triggerName);
            const transition2 = trigger2.fallbackTransition;
            const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
            const toState = new StateValue(VOID_VALUE);
            const player = new TransitionAnimationPlayer(this.id, triggerName, element);
            this._engine.totalQueuedPlayers++;
            this._queue.push({
              element,
              triggerName,
              transition: transition2,
              fromState,
              toState,
              player,
              isFallbackTransition: true
            });
          });
        }
      }
      removeNode(element, context) {
        const engine = this._engine;
        if (element.childElementCount) {
          this._signalRemovalForInnerTriggers(element, context);
        }
        if (this.triggerLeaveAnimation(element, context, true))
          return;
        let containsPotentialParentTransition = false;
        if (engine.totalAnimations) {
          const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
          if (currentPlayers && currentPlayers.length) {
            containsPotentialParentTransition = true;
          } else {
            let parent = element;
            while (parent = parent.parentNode) {
              const triggers = engine.statesByElement.get(parent);
              if (triggers) {
                containsPotentialParentTransition = true;
                break;
              }
            }
          }
        }
        this.prepareLeaveAnimationListeners(element);
        if (containsPotentialParentTransition) {
          engine.markElementAsRemoved(this.id, element, false, context);
        } else {
          const removalFlag = element[REMOVAL_FLAG];
          if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
            engine.afterFlush(() => this.clearElementCache(element));
            engine.destroyInnerAnimations(element);
            engine._onRemovalComplete(element, context);
          }
        }
      }
      insertNode(element, parent) {
        addClass(element, this._hostClassName);
      }
      drainQueuedTransitions(microtaskId) {
        const instructions = [];
        this._queue.forEach((entry) => {
          const player = entry.player;
          if (player.destroyed)
            return;
          const element = entry.element;
          const listeners = this._elementListeners.get(element);
          if (listeners) {
            listeners.forEach((listener) => {
              if (listener.name == entry.triggerName) {
                const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
                baseEvent["_data"] = microtaskId;
                listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
              }
            });
          }
          if (player.markedForDestroy) {
            this._engine.afterFlush(() => {
              player.destroy();
            });
          } else {
            instructions.push(entry);
          }
        });
        this._queue = [];
        return instructions.sort((a, b) => {
          const d0 = a.transition.ast.depCount;
          const d1 = b.transition.ast.depCount;
          if (d0 == 0 || d1 == 0) {
            return d0 - d1;
          }
          return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
        });
      }
      destroy(context) {
        this.players.forEach((p) => p.destroy());
        this._signalRemovalForInnerTriggers(this.hostElement, context);
      }
    };
    TransitionAnimationEngine = class {
      bodyNode;
      driver;
      _normalizer;
      players = [];
      newHostElements = /* @__PURE__ */ new Map();
      playersByElement = /* @__PURE__ */ new Map();
      playersByQueriedElement = /* @__PURE__ */ new Map();
      statesByElement = /* @__PURE__ */ new Map();
      disabledNodes = /* @__PURE__ */ new Set();
      totalAnimations = 0;
      totalQueuedPlayers = 0;
      _namespaceLookup = {};
      _namespaceList = [];
      _flushFns = [];
      _whenQuietFns = [];
      namespacesByHostElement = /* @__PURE__ */ new Map();
      collectedEnterElements = [];
      collectedLeaveElements = [];
      // this method is designed to be overridden by the code that uses this engine
      onRemovalComplete = (element, context) => {
      };
      /** @internal */
      _onRemovalComplete(element, context) {
        this.onRemovalComplete(element, context);
      }
      constructor(bodyNode, driver, _normalizer) {
        this.bodyNode = bodyNode;
        this.driver = driver;
        this._normalizer = _normalizer;
      }
      get queuedPlayers() {
        const players = [];
        this._namespaceList.forEach((ns) => {
          ns.players.forEach((player) => {
            if (player.queued) {
              players.push(player);
            }
          });
        });
        return players;
      }
      createNamespace(namespaceId, hostElement) {
        const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
        if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
          this._balanceNamespaceList(ns, hostElement);
        } else {
          this.newHostElements.set(hostElement, ns);
          this.collectEnterElement(hostElement);
        }
        return this._namespaceLookup[namespaceId] = ns;
      }
      _balanceNamespaceList(ns, hostElement) {
        const namespaceList = this._namespaceList;
        const namespacesByHostElement = this.namespacesByHostElement;
        const limit = namespaceList.length - 1;
        if (limit >= 0) {
          let found = false;
          let ancestor = this.driver.getParentElement(hostElement);
          while (ancestor) {
            const ancestorNs = namespacesByHostElement.get(ancestor);
            if (ancestorNs) {
              const index = namespaceList.indexOf(ancestorNs);
              namespaceList.splice(index + 1, 0, ns);
              found = true;
              break;
            }
            ancestor = this.driver.getParentElement(ancestor);
          }
          if (!found) {
            namespaceList.unshift(ns);
          }
        } else {
          namespaceList.push(ns);
        }
        namespacesByHostElement.set(hostElement, ns);
        return ns;
      }
      register(namespaceId, hostElement) {
        let ns = this._namespaceLookup[namespaceId];
        if (!ns) {
          ns = this.createNamespace(namespaceId, hostElement);
        }
        return ns;
      }
      registerTrigger(namespaceId, name2, trigger2) {
        let ns = this._namespaceLookup[namespaceId];
        if (ns && ns.register(name2, trigger2)) {
          this.totalAnimations++;
        }
      }
      destroy(namespaceId, context) {
        if (!namespaceId)
          return;
        this.afterFlush(() => {
        });
        this.afterFlushAnimationsDone(() => {
          const ns = this._fetchNamespace(namespaceId);
          this.namespacesByHostElement.delete(ns.hostElement);
          const index = this._namespaceList.indexOf(ns);
          if (index >= 0) {
            this._namespaceList.splice(index, 1);
          }
          ns.destroy(context);
          delete this._namespaceLookup[namespaceId];
        });
      }
      _fetchNamespace(id) {
        return this._namespaceLookup[id];
      }
      fetchNamespacesByElement(element) {
        const namespaces = /* @__PURE__ */ new Set();
        const elementStates = this.statesByElement.get(element);
        if (elementStates) {
          for (let stateValue of elementStates.values()) {
            if (stateValue.namespaceId) {
              const ns = this._fetchNamespace(stateValue.namespaceId);
              if (ns) {
                namespaces.add(ns);
              }
            }
          }
        }
        return namespaces;
      }
      trigger(namespaceId, element, name2, value) {
        if (isElementNode(element)) {
          const ns = this._fetchNamespace(namespaceId);
          if (ns) {
            ns.trigger(element, name2, value);
            return true;
          }
        }
        return false;
      }
      insertNode(namespaceId, element, parent, insertBefore) {
        if (!isElementNode(element))
          return;
        const details = element[REMOVAL_FLAG];
        if (details && details.setForRemoval) {
          details.setForRemoval = false;
          details.setForMove = true;
          const index = this.collectedLeaveElements.indexOf(element);
          if (index >= 0) {
            this.collectedLeaveElements.splice(index, 1);
          }
        }
        if (namespaceId) {
          const ns = this._fetchNamespace(namespaceId);
          if (ns) {
            ns.insertNode(element, parent);
          }
        }
        if (insertBefore) {
          this.collectEnterElement(element);
        }
      }
      collectEnterElement(element) {
        this.collectedEnterElements.push(element);
      }
      markElementAsDisabled(element, value) {
        if (value) {
          if (!this.disabledNodes.has(element)) {
            this.disabledNodes.add(element);
            addClass(element, DISABLED_CLASSNAME);
          }
        } else if (this.disabledNodes.has(element)) {
          this.disabledNodes.delete(element);
          removeClass(element, DISABLED_CLASSNAME);
        }
      }
      removeNode(namespaceId, element, context) {
        if (isElementNode(element)) {
          const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
          if (ns) {
            ns.removeNode(element, context);
          } else {
            this.markElementAsRemoved(namespaceId, element, false, context);
          }
          const hostNS = this.namespacesByHostElement.get(element);
          if (hostNS && hostNS.id !== namespaceId) {
            hostNS.removeNode(element, context);
          }
        } else {
          this._onRemovalComplete(element, context);
        }
      }
      markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
        this.collectedLeaveElements.push(element);
        element[REMOVAL_FLAG] = {
          namespaceId,
          setForRemoval: context,
          hasAnimation,
          removedBeforeQueried: false,
          previousTriggersValues
        };
      }
      listen(namespaceId, element, name2, phase, callback) {
        if (isElementNode(element)) {
          return this._fetchNamespace(namespaceId).listen(element, name2, phase, callback);
        }
        return () => {
        };
      }
      _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
        return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
      }
      destroyInnerAnimations(containerElement) {
        let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
        elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
        if (this.playersByQueriedElement.size == 0)
          return;
        elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
        elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
      }
      destroyActiveAnimationsForElement(element) {
        const players = this.playersByElement.get(element);
        if (players) {
          players.forEach((player) => {
            if (player.queued) {
              player.markedForDestroy = true;
            } else {
              player.destroy();
            }
          });
        }
      }
      finishActiveQueriedAnimationOnElement(element) {
        const players = this.playersByQueriedElement.get(element);
        if (players) {
          players.forEach((player) => player.finish());
        }
      }
      whenRenderingDone() {
        return new Promise((resolve) => {
          if (this.players.length) {
            return optimizeGroupPlayer(this.players).onDone(() => resolve());
          } else {
            resolve();
          }
        });
      }
      processLeaveNode(element) {
        const details = element[REMOVAL_FLAG];
        if (details && details.setForRemoval) {
          element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
          if (details.namespaceId) {
            this.destroyInnerAnimations(element);
            const ns = this._fetchNamespace(details.namespaceId);
            if (ns) {
              ns.clearElementCache(element);
            }
          }
          this._onRemovalComplete(element, details.setForRemoval);
        }
        if (element.classList?.contains(DISABLED_CLASSNAME)) {
          this.markElementAsDisabled(element, false);
        }
        this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
          this.markElementAsDisabled(node, false);
        });
      }
      flush(microtaskId = -1) {
        let players = [];
        if (this.newHostElements.size) {
          this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
          this.newHostElements.clear();
        }
        if (this.totalAnimations && this.collectedEnterElements.length) {
          for (let i = 0; i < this.collectedEnterElements.length; i++) {
            const elm = this.collectedEnterElements[i];
            addClass(elm, STAR_CLASSNAME);
          }
        }
        if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
          const cleanupFns = [];
          try {
            players = this._flushAnimations(cleanupFns, microtaskId);
          } finally {
            for (let i = 0; i < cleanupFns.length; i++) {
              cleanupFns[i]();
            }
          }
        } else {
          for (let i = 0; i < this.collectedLeaveElements.length; i++) {
            const element = this.collectedLeaveElements[i];
            this.processLeaveNode(element);
          }
        }
        this.totalQueuedPlayers = 0;
        this.collectedEnterElements.length = 0;
        this.collectedLeaveElements.length = 0;
        this._flushFns.forEach((fn) => fn());
        this._flushFns = [];
        if (this._whenQuietFns.length) {
          const quietFns = this._whenQuietFns;
          this._whenQuietFns = [];
          if (players.length) {
            optimizeGroupPlayer(players).onDone(() => {
              quietFns.forEach((fn) => fn());
            });
          } else {
            quietFns.forEach((fn) => fn());
          }
        }
      }
      reportError(errors) {
        throw triggerTransitionsFailed(errors);
      }
      _flushAnimations(cleanupFns, microtaskId) {
        const subTimelines = new ElementInstructionMap();
        const skippedPlayers = [];
        const skippedPlayersMap = /* @__PURE__ */ new Map();
        const queuedInstructions = [];
        const queriedElements = /* @__PURE__ */ new Map();
        const allPreStyleElements = /* @__PURE__ */ new Map();
        const allPostStyleElements = /* @__PURE__ */ new Map();
        const disabledElementsSet = /* @__PURE__ */ new Set();
        this.disabledNodes.forEach((node) => {
          disabledElementsSet.add(node);
          const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
          for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
            disabledElementsSet.add(nodesThatAreDisabled[i2]);
          }
        });
        const bodyNode = this.bodyNode;
        const allTriggerElements = Array.from(this.statesByElement.keys());
        const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
        const enterNodeMapIds = /* @__PURE__ */ new Map();
        let i = 0;
        enterNodeMap.forEach((nodes, root) => {
          const className = ENTER_CLASSNAME + i++;
          enterNodeMapIds.set(root, className);
          nodes.forEach((node) => addClass(node, className));
        });
        const allLeaveNodes = [];
        const mergedLeaveNodes = /* @__PURE__ */ new Set();
        const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
        for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
          const element = this.collectedLeaveElements[i2];
          const details = element[REMOVAL_FLAG];
          if (details && details.setForRemoval) {
            allLeaveNodes.push(element);
            mergedLeaveNodes.add(element);
            if (details.hasAnimation) {
              this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
            } else {
              leaveNodesWithoutAnimations.add(element);
            }
          }
        }
        const leaveNodeMapIds = /* @__PURE__ */ new Map();
        const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
        leaveNodeMap.forEach((nodes, root) => {
          const className = LEAVE_CLASSNAME + i++;
          leaveNodeMapIds.set(root, className);
          nodes.forEach((node) => addClass(node, className));
        });
        cleanupFns.push(() => {
          enterNodeMap.forEach((nodes, root) => {
            const className = enterNodeMapIds.get(root);
            nodes.forEach((node) => removeClass(node, className));
          });
          leaveNodeMap.forEach((nodes, root) => {
            const className = leaveNodeMapIds.get(root);
            nodes.forEach((node) => removeClass(node, className));
          });
          allLeaveNodes.forEach((element) => {
            this.processLeaveNode(element);
          });
        });
        const allPlayers = [];
        const erroneousTransitions = [];
        for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
          const ns = this._namespaceList[i2];
          ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
            const player = entry.player;
            const element = entry.element;
            allPlayers.push(player);
            if (this.collectedEnterElements.length) {
              const details = element[REMOVAL_FLAG];
              if (details && details.setForMove) {
                if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
                  const previousValue = details.previousTriggersValues.get(entry.triggerName);
                  const triggersWithStates = this.statesByElement.get(entry.element);
                  if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                    const state2 = triggersWithStates.get(entry.triggerName);
                    state2.value = previousValue;
                    triggersWithStates.set(entry.triggerName, state2);
                  }
                }
                player.destroy();
                return;
              }
            }
            const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
            const leaveClassName = leaveNodeMapIds.get(element);
            const enterClassName = enterNodeMapIds.get(element);
            const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
            if (instruction.errors && instruction.errors.length) {
              erroneousTransitions.push(instruction);
              return;
            }
            if (nodeIsOrphaned) {
              player.onStart(() => eraseStyles(element, instruction.fromStyles));
              player.onDestroy(() => setStyles(element, instruction.toStyles));
              skippedPlayers.push(player);
              return;
            }
            if (entry.isFallbackTransition) {
              player.onStart(() => eraseStyles(element, instruction.fromStyles));
              player.onDestroy(() => setStyles(element, instruction.toStyles));
              skippedPlayers.push(player);
              return;
            }
            const timelines = [];
            instruction.timelines.forEach((tl) => {
              tl.stretchStartingKeyframe = true;
              if (!this.disabledNodes.has(tl.element)) {
                timelines.push(tl);
              }
            });
            instruction.timelines = timelines;
            subTimelines.append(element, instruction.timelines);
            const tuple = { instruction, player, element };
            queuedInstructions.push(tuple);
            instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
            instruction.preStyleProps.forEach((stringMap, element2) => {
              if (stringMap.size) {
                let setVal = allPreStyleElements.get(element2);
                if (!setVal) {
                  allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
                }
                stringMap.forEach((_, prop) => setVal.add(prop));
              }
            });
            instruction.postStyleProps.forEach((stringMap, element2) => {
              let setVal = allPostStyleElements.get(element2);
              if (!setVal) {
                allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
              }
              stringMap.forEach((_, prop) => setVal.add(prop));
            });
          });
        }
        if (erroneousTransitions.length) {
          const errors = [];
          erroneousTransitions.forEach((instruction) => {
            errors.push(transitionFailed(instruction.triggerName, instruction.errors));
          });
          allPlayers.forEach((player) => player.destroy());
          this.reportError(errors);
        }
        const allPreviousPlayersMap = /* @__PURE__ */ new Map();
        const animationElementMap = /* @__PURE__ */ new Map();
        queuedInstructions.forEach((entry) => {
          const element = entry.element;
          if (subTimelines.has(element)) {
            animationElementMap.set(element, element);
            this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
          }
        });
        skippedPlayers.forEach((player) => {
          const element = player.element;
          const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
          previousPlayers.forEach((prevPlayer) => {
            getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
            prevPlayer.destroy();
          });
        });
        const replaceNodes = allLeaveNodes.filter((node) => {
          return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
        });
        const postStylesMap = /* @__PURE__ */ new Map();
        const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
        allLeaveQueriedNodes.forEach((node) => {
          if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
            replaceNodes.push(node);
          }
        });
        const preStylesMap = /* @__PURE__ */ new Map();
        enterNodeMap.forEach((nodes, root) => {
          cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
        });
        replaceNodes.forEach((node) => {
          const post = postStylesMap.get(node);
          const pre = preStylesMap.get(node);
          postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
        });
        const rootPlayers = [];
        const subPlayers = [];
        const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
        queuedInstructions.forEach((entry) => {
          const { element, player, instruction } = entry;
          if (subTimelines.has(element)) {
            if (disabledElementsSet.has(element)) {
              player.onDestroy(() => setStyles(element, instruction.toStyles));
              player.disabled = true;
              player.overrideTotalTime(instruction.totalTime);
              skippedPlayers.push(player);
              return;
            }
            let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
            if (animationElementMap.size > 1) {
              let elm = element;
              const parentsToAdd = [];
              while (elm = elm.parentNode) {
                const detectedParent = animationElementMap.get(elm);
                if (detectedParent) {
                  parentWithAnimation = detectedParent;
                  break;
                }
                parentsToAdd.push(elm);
              }
              parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
            }
            const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
            player.setRealPlayer(innerPlayer);
            if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
              rootPlayers.push(player);
            } else {
              const parentPlayers = this.playersByElement.get(parentWithAnimation);
              if (parentPlayers && parentPlayers.length) {
                player.parentPlayer = optimizeGroupPlayer(parentPlayers);
              }
              skippedPlayers.push(player);
            }
          } else {
            eraseStyles(element, instruction.fromStyles);
            player.onDestroy(() => setStyles(element, instruction.toStyles));
            subPlayers.push(player);
            if (disabledElementsSet.has(element)) {
              skippedPlayers.push(player);
            }
          }
        });
        subPlayers.forEach((player) => {
          const playersForElement = skippedPlayersMap.get(player.element);
          if (playersForElement && playersForElement.length) {
            const innerPlayer = optimizeGroupPlayer(playersForElement);
            player.setRealPlayer(innerPlayer);
          }
        });
        skippedPlayers.forEach((player) => {
          if (player.parentPlayer) {
            player.syncPlayerEvents(player.parentPlayer);
          } else {
            player.destroy();
          }
        });
        for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
          const element = allLeaveNodes[i2];
          const details = element[REMOVAL_FLAG];
          removeClass(element, LEAVE_CLASSNAME);
          if (details && details.hasAnimation)
            continue;
          let players = [];
          if (queriedElements.size) {
            let queriedPlayerResults = queriedElements.get(element);
            if (queriedPlayerResults && queriedPlayerResults.length) {
              players.push(...queriedPlayerResults);
            }
            let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
            for (let j = 0; j < queriedInnerElements.length; j++) {
              let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
              if (queriedPlayers && queriedPlayers.length) {
                players.push(...queriedPlayers);
              }
            }
          }
          const activePlayers = players.filter((p) => !p.destroyed);
          if (activePlayers.length) {
            removeNodesAfterAnimationDone(this, element, activePlayers);
          } else {
            this.processLeaveNode(element);
          }
        }
        allLeaveNodes.length = 0;
        rootPlayers.forEach((player) => {
          this.players.push(player);
          player.onDone(() => {
            player.destroy();
            const index = this.players.indexOf(player);
            this.players.splice(index, 1);
          });
          player.play();
        });
        return rootPlayers;
      }
      afterFlush(callback) {
        this._flushFns.push(callback);
      }
      afterFlushAnimationsDone(callback) {
        this._whenQuietFns.push(callback);
      }
      _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
        let players = [];
        if (isQueriedElement) {
          const queriedElementPlayers = this.playersByQueriedElement.get(element);
          if (queriedElementPlayers) {
            players = queriedElementPlayers;
          }
        } else {
          const elementPlayers = this.playersByElement.get(element);
          if (elementPlayers) {
            const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
            elementPlayers.forEach((player) => {
              if (player.queued)
                return;
              if (!isRemovalAnimation && player.triggerName != triggerName)
                return;
              players.push(player);
            });
          }
        }
        if (namespaceId || triggerName) {
          players = players.filter((player) => {
            if (namespaceId && namespaceId != player.namespaceId)
              return false;
            if (triggerName && triggerName != player.triggerName)
              return false;
            return true;
          });
        }
        return players;
      }
      _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
        const triggerName = instruction.triggerName;
        const rootElement = instruction.element;
        const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
        const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
        for (const timelineInstruction of instruction.timelines) {
          const element = timelineInstruction.element;
          const isQueriedElement = element !== rootElement;
          const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
          const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
          previousPlayers.forEach((player) => {
            const realPlayer = player.getRealPlayer();
            if (realPlayer.beforeDestroy) {
              realPlayer.beforeDestroy();
            }
            player.destroy();
            players.push(player);
          });
        }
        eraseStyles(rootElement, instruction.fromStyles);
      }
      _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
        const triggerName = instruction.triggerName;
        const rootElement = instruction.element;
        const allQueriedPlayers = [];
        const allConsumedElements = /* @__PURE__ */ new Set();
        const allSubElements = /* @__PURE__ */ new Set();
        const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
          const element = timelineInstruction.element;
          allConsumedElements.add(element);
          const details = element[REMOVAL_FLAG];
          if (details && details.removedBeforeQueried)
            return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
          const isQueriedElement = element !== rootElement;
          const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
            const pp = p;
            return pp.element ? pp.element === element : false;
          });
          const preStyles = preStylesMap.get(element);
          const postStyles = postStylesMap.get(element);
          const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
          const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
          if (timelineInstruction.subTimeline && skippedPlayersMap) {
            allSubElements.add(element);
          }
          if (isQueriedElement) {
            const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
            wrappedPlayer.setRealPlayer(player2);
            allQueriedPlayers.push(wrappedPlayer);
          }
          return player2;
        });
        allQueriedPlayers.forEach((player2) => {
          getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
          player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
        });
        allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
        const player = optimizeGroupPlayer(allNewPlayers);
        player.onDestroy(() => {
          allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
          setStyles(rootElement, instruction.toStyles);
        });
        allSubElements.forEach((element) => {
          getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
        });
        return player;
      }
      _buildPlayer(instruction, keyframes, previousPlayers) {
        if (keyframes.length > 0) {
          return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
        }
        return new NoopAnimationPlayer(instruction.duration, instruction.delay);
      }
    };
    TransitionAnimationPlayer = class {
      namespaceId;
      triggerName;
      element;
      _player = new NoopAnimationPlayer();
      _containsRealPlayer = false;
      _queuedCallbacks = /* @__PURE__ */ new Map();
      destroyed = false;
      parentPlayer = null;
      markedForDestroy = false;
      disabled = false;
      queued = true;
      totalTime = 0;
      constructor(namespaceId, triggerName, element) {
        this.namespaceId = namespaceId;
        this.triggerName = triggerName;
        this.element = element;
      }
      setRealPlayer(player) {
        if (this._containsRealPlayer)
          return;
        this._player = player;
        this._queuedCallbacks.forEach((callbacks, phase) => {
          callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
        });
        this._queuedCallbacks.clear();
        this._containsRealPlayer = true;
        this.overrideTotalTime(player.totalTime);
        this.queued = false;
      }
      getRealPlayer() {
        return this._player;
      }
      overrideTotalTime(totalTime) {
        this.totalTime = totalTime;
      }
      syncPlayerEvents(player) {
        const p = this._player;
        if (p.triggerCallback) {
          player.onStart(() => p.triggerCallback("start"));
        }
        player.onDone(() => this.finish());
        player.onDestroy(() => this.destroy());
      }
      _queueEvent(name2, callback) {
        getOrSetDefaultValue(this._queuedCallbacks, name2, []).push(callback);
      }
      onDone(fn) {
        if (this.queued) {
          this._queueEvent("done", fn);
        }
        this._player.onDone(fn);
      }
      onStart(fn) {
        if (this.queued) {
          this._queueEvent("start", fn);
        }
        this._player.onStart(fn);
      }
      onDestroy(fn) {
        if (this.queued) {
          this._queueEvent("destroy", fn);
        }
        this._player.onDestroy(fn);
      }
      init() {
        this._player.init();
      }
      hasStarted() {
        return this.queued ? false : this._player.hasStarted();
      }
      play() {
        !this.queued && this._player.play();
      }
      pause() {
        !this.queued && this._player.pause();
      }
      restart() {
        !this.queued && this._player.restart();
      }
      finish() {
        this._player.finish();
      }
      destroy() {
        this.destroyed = true;
        this._player.destroy();
      }
      reset() {
        !this.queued && this._player.reset();
      }
      setPosition(p) {
        if (!this.queued) {
          this._player.setPosition(p);
        }
      }
      getPosition() {
        return this.queued ? 0 : this._player.getPosition();
      }
      /** @internal */
      triggerCallback(phaseName) {
        const p = this._player;
        if (p.triggerCallback) {
          p.triggerCallback(phaseName);
        }
      }
    };
    AnimationEngine = class {
      _driver;
      _normalizer;
      _transitionEngine;
      _timelineEngine;
      _triggerCache = {};
      // this method is designed to be overridden by the code that uses this engine
      onRemovalComplete = (element, context) => {
      };
      constructor(doc, _driver, _normalizer) {
        this._driver = _driver;
        this._normalizer = _normalizer;
        this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
        this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
        this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
      }
      registerTrigger(componentId, namespaceId, hostElement, name2, metadata) {
        const cacheKey = componentId + "-" + name2;
        let trigger2 = this._triggerCache[cacheKey];
        if (!trigger2) {
          const errors = [];
          const warnings = [];
          const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
          if (errors.length) {
            throw triggerBuildFailed(name2, errors);
          }
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            if (warnings.length) {
              warnTriggerBuild(name2, warnings);
            }
          }
          trigger2 = buildTrigger(name2, ast, this._normalizer);
          this._triggerCache[cacheKey] = trigger2;
        }
        this._transitionEngine.registerTrigger(namespaceId, name2, trigger2);
      }
      register(namespaceId, hostElement) {
        this._transitionEngine.register(namespaceId, hostElement);
      }
      destroy(namespaceId, context) {
        this._transitionEngine.destroy(namespaceId, context);
      }
      onInsert(namespaceId, element, parent, insertBefore) {
        this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
      }
      onRemove(namespaceId, element, context) {
        this._transitionEngine.removeNode(namespaceId, element, context);
      }
      disableAnimations(element, disable) {
        this._transitionEngine.markElementAsDisabled(element, disable);
      }
      process(namespaceId, element, property, value) {
        if (property.charAt(0) == "@") {
          const [id, action] = parseTimelineCommand(property);
          const args = value;
          this._timelineEngine.command(id, element, action, args);
        } else {
          this._transitionEngine.trigger(namespaceId, element, property, value);
        }
      }
      listen(namespaceId, element, eventName, eventPhase, callback) {
        if (eventName.charAt(0) == "@") {
          const [id, action] = parseTimelineCommand(eventName);
          return this._timelineEngine.listen(id, element, action, callback);
        }
        return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
      }
      flush(microtaskId = -1) {
        this._transitionEngine.flush(microtaskId);
      }
      get players() {
        return [...this._transitionEngine.players, ...this._timelineEngine.players];
      }
      whenRenderingDone() {
        return this._transitionEngine.whenRenderingDone();
      }
      afterFlushAnimationsDone(cb) {
        this._transitionEngine.afterFlushAnimationsDone(cb);
      }
    };
    SpecialCasedStyles = class _SpecialCasedStyles {
      _element;
      _startStyles;
      _endStyles;
      static initialStylesByElement = /* @__PURE__ */ new WeakMap();
      _state = 0;
      _initialStyles;
      constructor(_element, _startStyles, _endStyles) {
        this._element = _element;
        this._startStyles = _startStyles;
        this._endStyles = _endStyles;
        let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
        if (!initialStyles) {
          _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
        }
        this._initialStyles = initialStyles;
      }
      start() {
        if (this._state < 1) {
          if (this._startStyles) {
            setStyles(this._element, this._startStyles, this._initialStyles);
          }
          this._state = 1;
        }
      }
      finish() {
        this.start();
        if (this._state < 2) {
          setStyles(this._element, this._initialStyles);
          if (this._endStyles) {
            setStyles(this._element, this._endStyles);
            this._endStyles = null;
          }
          this._state = 1;
        }
      }
      destroy() {
        this.finish();
        if (this._state < 3) {
          _SpecialCasedStyles.initialStylesByElement.delete(this._element);
          if (this._startStyles) {
            eraseStyles(this._element, this._startStyles);
            this._endStyles = null;
          }
          if (this._endStyles) {
            eraseStyles(this._element, this._endStyles);
            this._endStyles = null;
          }
          setStyles(this._element, this._initialStyles);
          this._state = 3;
        }
      }
    };
    WebAnimationsPlayer = class {
      element;
      keyframes;
      options;
      _specialStyles;
      _onDoneFns = [];
      _onStartFns = [];
      _onDestroyFns = [];
      _duration;
      _delay;
      _initialized = false;
      _finished = false;
      _started = false;
      _destroyed = false;
      _finalKeyframe;
      // the following original fns are persistent copies of the _onStartFns and _onDoneFns
      // and are used to reset the fns to their original values upon reset()
      // (since the _onStartFns and _onDoneFns get deleted after they are called)
      _originalOnDoneFns = [];
      _originalOnStartFns = [];
      // using non-null assertion because it's re(set) by init();
      domPlayer;
      time = 0;
      parentPlayer = null;
      currentSnapshot = /* @__PURE__ */ new Map();
      constructor(element, keyframes, options, _specialStyles) {
        this.element = element;
        this.keyframes = keyframes;
        this.options = options;
        this._specialStyles = _specialStyles;
        this._duration = options["duration"];
        this._delay = options["delay"] || 0;
        this.time = this._duration + this._delay;
      }
      _onFinish() {
        if (!this._finished) {
          this._finished = true;
          this._onDoneFns.forEach((fn) => fn());
          this._onDoneFns = [];
        }
      }
      init() {
        this._buildPlayer();
        this._preparePlayerBeforeStart();
      }
      _buildPlayer() {
        if (this._initialized)
          return;
        this._initialized = true;
        const keyframes = this.keyframes;
        this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
        this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
        const onFinish = () => this._onFinish();
        this.domPlayer.addEventListener("finish", onFinish);
        this.onDestroy(() => {
          this.domPlayer.removeEventListener("finish", onFinish);
        });
      }
      _preparePlayerBeforeStart() {
        if (this._delay) {
          this._resetDomPlayerState();
        } else {
          this.domPlayer.pause();
        }
      }
      _convertKeyframesToObject(keyframes) {
        const kfs = [];
        keyframes.forEach((frame) => {
          kfs.push(Object.fromEntries(frame));
        });
        return kfs;
      }
      /** @internal */
      _triggerWebAnimation(element, keyframes, options) {
        return element.animate(this._convertKeyframesToObject(keyframes), options);
      }
      onStart(fn) {
        this._originalOnStartFns.push(fn);
        this._onStartFns.push(fn);
      }
      onDone(fn) {
        this._originalOnDoneFns.push(fn);
        this._onDoneFns.push(fn);
      }
      onDestroy(fn) {
        this._onDestroyFns.push(fn);
      }
      play() {
        this._buildPlayer();
        if (!this.hasStarted()) {
          this._onStartFns.forEach((fn) => fn());
          this._onStartFns = [];
          this._started = true;
          if (this._specialStyles) {
            this._specialStyles.start();
          }
        }
        this.domPlayer.play();
      }
      pause() {
        this.init();
        this.domPlayer.pause();
      }
      finish() {
        this.init();
        if (this._specialStyles) {
          this._specialStyles.finish();
        }
        this._onFinish();
        this.domPlayer.finish();
      }
      reset() {
        this._resetDomPlayerState();
        this._destroyed = false;
        this._finished = false;
        this._started = false;
        this._onStartFns = this._originalOnStartFns;
        this._onDoneFns = this._originalOnDoneFns;
      }
      _resetDomPlayerState() {
        if (this.domPlayer) {
          this.domPlayer.cancel();
        }
      }
      restart() {
        this.reset();
        this.play();
      }
      hasStarted() {
        return this._started;
      }
      destroy() {
        if (!this._destroyed) {
          this._destroyed = true;
          this._resetDomPlayerState();
          this._onFinish();
          if (this._specialStyles) {
            this._specialStyles.destroy();
          }
          this._onDestroyFns.forEach((fn) => fn());
          this._onDestroyFns = [];
        }
      }
      setPosition(p) {
        if (this.domPlayer === void 0) {
          this.init();
        }
        this.domPlayer.currentTime = p * this.time;
      }
      getPosition() {
        return +(this.domPlayer.currentTime ?? 0) / this.time;
      }
      get totalTime() {
        return this._delay + this._duration;
      }
      beforeDestroy() {
        const styles = /* @__PURE__ */ new Map();
        if (this.hasStarted()) {
          const finalKeyframe = this._finalKeyframe;
          finalKeyframe.forEach((val, prop) => {
            if (prop !== "offset") {
              styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
            }
          });
        }
        this.currentSnapshot = styles;
      }
      /** @internal */
      triggerCallback(phaseName) {
        const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
        methods.forEach((fn) => fn());
        methods.length = 0;
      }
    };
    WebAnimationsDriver = class {
      validateStyleProperty(prop) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          return validateStyleProperty(prop);
        }
        return true;
      }
      validateAnimatableStyleProperty(prop) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          const cssProp = camelCaseToDashCase(prop);
          return validateWebAnimatableStyleProperty(cssProp);
        }
        return true;
      }
      containsElement(elm1, elm2) {
        return containsElement(elm1, elm2);
      }
      getParentElement(element) {
        return getParentElement(element);
      }
      query(element, selector, multi) {
        return invokeQuery(element, selector, multi);
      }
      computeStyle(element, prop, defaultValue) {
        return computeStyle(element, prop);
      }
      animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
        const fill = delay == 0 ? "both" : "forwards";
        const playerOptions = { duration, delay, fill };
        if (easing) {
          playerOptions["easing"] = easing;
        }
        const previousStyles = /* @__PURE__ */ new Map();
        const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
        if (allowPreviousPlayerStylesMerge(duration, delay)) {
          previousWebAnimationPlayers.forEach((player) => {
            player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
          });
        }
        let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
        _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
        const specialStyles = packageNonAnimatableStyles(element, _keyframes);
        return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
      }
    };
    ANIMATION_PREFIX = "@";
    DISABLE_ANIMATIONS_FLAG = "@.disabled";
    BaseAnimationRenderer = class {
      namespaceId;
      delegate;
      engine;
      _onDestroy;
      // We need to explicitly type this property because of an api-extractor bug
      // See https://github.com/microsoft/rushstack/issues/4390
      \u0275type = 0;
      constructor(namespaceId, delegate, engine, _onDestroy) {
        this.namespaceId = namespaceId;
        this.delegate = delegate;
        this.engine = engine;
        this._onDestroy = _onDestroy;
      }
      get data() {
        return this.delegate.data;
      }
      destroyNode(node) {
        this.delegate.destroyNode?.(node);
      }
      destroy() {
        this.engine.destroy(this.namespaceId, this.delegate);
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        });
        this._onDestroy?.();
      }
      createElement(name2, namespace) {
        return this.delegate.createElement(name2, namespace);
      }
      createComment(value) {
        return this.delegate.createComment(value);
      }
      createText(value) {
        return this.delegate.createText(value);
      }
      appendChild(parent, newChild) {
        this.delegate.appendChild(parent, newChild);
        this.engine.onInsert(this.namespaceId, newChild, parent, false);
      }
      insertBefore(parent, newChild, refChild, isMove = true) {
        this.delegate.insertBefore(parent, newChild, refChild);
        this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
      }
      removeChild(parent, oldChild, isHostElement) {
        if (this.parentNode(oldChild)) {
          this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
        }
      }
      selectRootElement(selectorOrNode, preserveContent) {
        return this.delegate.selectRootElement(selectorOrNode, preserveContent);
      }
      parentNode(node) {
        return this.delegate.parentNode(node);
      }
      nextSibling(node) {
        return this.delegate.nextSibling(node);
      }
      setAttribute(el, name2, value, namespace) {
        this.delegate.setAttribute(el, name2, value, namespace);
      }
      removeAttribute(el, name2, namespace) {
        this.delegate.removeAttribute(el, name2, namespace);
      }
      addClass(el, name2) {
        this.delegate.addClass(el, name2);
      }
      removeClass(el, name2) {
        this.delegate.removeClass(el, name2);
      }
      setStyle(el, style2, value, flags) {
        this.delegate.setStyle(el, style2, value, flags);
      }
      removeStyle(el, style2, flags) {
        this.delegate.removeStyle(el, style2, flags);
      }
      setProperty(el, name2, value) {
        if (name2.charAt(0) == ANIMATION_PREFIX && name2 == DISABLE_ANIMATIONS_FLAG) {
          this.disableAnimations(el, !!value);
        } else {
          this.delegate.setProperty(el, name2, value);
        }
      }
      setValue(node, value) {
        this.delegate.setValue(node, value);
      }
      listen(target, eventName, callback, options) {
        return this.delegate.listen(target, eventName, callback, options);
      }
      disableAnimations(element, value) {
        this.engine.disableAnimations(element, value);
      }
    };
    AnimationRenderer = class extends BaseAnimationRenderer {
      factory;
      constructor(factory, namespaceId, delegate, engine, onDestroy) {
        super(namespaceId, delegate, engine, onDestroy);
        this.factory = factory;
        this.namespaceId = namespaceId;
      }
      setProperty(el, name2, value) {
        if (name2.charAt(0) == ANIMATION_PREFIX) {
          if (name2.charAt(1) == "." && name2 == DISABLE_ANIMATIONS_FLAG) {
            value = value === void 0 ? true : !!value;
            this.disableAnimations(el, value);
          } else {
            this.engine.process(this.namespaceId, el, name2.slice(1), value);
          }
        } else {
          this.delegate.setProperty(el, name2, value);
        }
      }
      listen(target, eventName, callback, options) {
        if (eventName.charAt(0) == ANIMATION_PREFIX) {
          const element = resolveElementFromTarget(target);
          let name2 = eventName.slice(1);
          let phase = "";
          if (name2.charAt(0) != ANIMATION_PREFIX) {
            [name2, phase] = parseTriggerCallbackName(name2);
          }
          return this.engine.listen(this.namespaceId, element, name2, phase, (event) => {
            const countId = event["_data"] || -1;
            this.factory.scheduleListenerCallback(countId, callback, event);
          });
        }
        return this.delegate.listen(target, eventName, callback, options);
      }
    };
    AnimationRendererFactory = class {
      delegate;
      engine;
      _zone;
      _currentId = 0;
      _microtaskId = 1;
      _animationCallbacksBuffer = [];
      _rendererCache = /* @__PURE__ */ new Map();
      _cdRecurDepth = 0;
      constructor(delegate, engine, _zone) {
        this.delegate = delegate;
        this.engine = engine;
        this._zone = _zone;
        engine.onRemovalComplete = (element, delegate2) => {
          delegate2?.removeChild(null, element);
        };
      }
      createRenderer(hostElement, type) {
        const EMPTY_NAMESPACE_ID = "";
        const delegate = this.delegate.createRenderer(hostElement, type);
        if (!hostElement || !type?.data?.["animation"]) {
          const cache = this._rendererCache;
          let renderer = cache.get(delegate);
          if (!renderer) {
            const onRendererDestroy = () => cache.delete(delegate);
            renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
            cache.set(delegate, renderer);
          }
          return renderer;
        }
        const componentId = type.id;
        const namespaceId = type.id + "-" + this._currentId;
        this._currentId++;
        this.engine.register(namespaceId, hostElement);
        const registerTrigger = (trigger2) => {
          if (Array.isArray(trigger2)) {
            trigger2.forEach(registerTrigger);
          } else {
            this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger2.name, trigger2);
          }
        };
        const animationTriggers = type.data["animation"];
        animationTriggers.forEach(registerTrigger);
        return new AnimationRenderer(this, namespaceId, delegate, this.engine);
      }
      begin() {
        this._cdRecurDepth++;
        if (this.delegate.begin) {
          this.delegate.begin();
        }
      }
      _scheduleCountTask() {
        queueMicrotask(() => {
          this._microtaskId++;
        });
      }
      /** @internal */
      scheduleListenerCallback(count, fn, data) {
        if (count >= 0 && count < this._microtaskId) {
          this._zone.run(() => fn(data));
          return;
        }
        const animationCallbacksBuffer = this._animationCallbacksBuffer;
        if (animationCallbacksBuffer.length == 0) {
          queueMicrotask(() => {
            this._zone.run(() => {
              animationCallbacksBuffer.forEach((tuple) => {
                const [fn2, data2] = tuple;
                fn2(data2);
              });
              this._animationCallbacksBuffer = [];
            });
          });
        }
        animationCallbacksBuffer.push([fn, data]);
      }
      end() {
        this._cdRecurDepth--;
        if (this._cdRecurDepth == 0) {
          this._zone.runOutsideAngular(() => {
            this._scheduleCountTask();
            this.engine.flush(this._microtaskId);
          });
        }
        if (this.delegate.end) {
          this.delegate.end();
        }
      }
      whenRenderingDone() {
        return this.engine.whenRenderingDone();
      }
      /**
       * Used during HMR to clear any cached data about a component.
       * @param componentId ID of the component that is being replaced.
       */
      componentReplaced(componentId) {
        this.engine.flush();
        this.delegate.componentReplaced?.(componentId);
      }
    };
  }
});

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var InjectableAnimationEngine, SHARED_ANIMATION_PROVIDERS, BROWSER_NOOP_ANIMATIONS_PROVIDERS, BROWSER_ANIMATIONS_PROVIDERS, BrowserAnimationsModule, NoopAnimationsModule;
var init_animations = __esm({
  "node_modules/@angular/platform-browser/fesm2022/animations.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_core();
    init_browser2();
    init_browser2();
    init_common();
    init_dom_renderer();
    init_browser();
    InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
      // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
      // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
      // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
      constructor(doc, driver, normalizer) {
        super(doc, driver, normalizer);
      }
      ngOnDestroy() {
        this.flush();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _InjectableAnimationEngine, deps: [{ token: DOCUMENT }, { token: AnimationDriver }, { token: AnimationStyleNormalizer }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _InjectableAnimationEngine });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: InjectableAnimationEngine, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: Document, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: AnimationDriver }, { type: AnimationStyleNormalizer }] });
    SHARED_ANIMATION_PROVIDERS = [
      { provide: AnimationStyleNormalizer, useFactory: instantiateDefaultStyleNormalizer },
      { provide: AnimationEngine, useClass: InjectableAnimationEngine },
      {
        provide: RendererFactory2,
        useFactory: instantiateRendererFactory,
        deps: [DomRendererFactory2, AnimationEngine, NgZone]
      }
    ];
    BROWSER_NOOP_ANIMATIONS_PROVIDERS = [
      { provide: AnimationDriver, useClass: NoopAnimationDriver },
      { provide: ANIMATION_MODULE_TYPE, useValue: "NoopAnimations" },
      ...SHARED_ANIMATION_PROVIDERS
    ];
    BROWSER_ANIMATIONS_PROVIDERS = [
      // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
      {
        provide: AnimationDriver,
        useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
      },
      {
        provide: ANIMATION_MODULE_TYPE,
        useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
      },
      ...SHARED_ANIMATION_PROVIDERS
    ];
    BrowserAnimationsModule = class _BrowserAnimationsModule {
      /**
       * Configures the module based on the specified object.
       *
       * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
       * @see {@link BrowserAnimationsModuleConfig}
       *
       * @usageNotes
       * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
       * function as follows:
       * ```ts
       * @NgModule({
       *   imports: [BrowserAnimationsModule.withConfig(config)]
       * })
       * class MyNgModule {}
       * ```
       */
      static withConfig(config) {
        return {
          ngModule: _BrowserAnimationsModule,
          providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _BrowserAnimationsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.0", ngImport: core_exports, type: _BrowserAnimationsModule, exports: [BrowserModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _BrowserAnimationsModule, providers: BROWSER_ANIMATIONS_PROVIDERS, imports: [BrowserModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: BrowserAnimationsModule, decorators: [{
      type: NgModule,
      args: [{
        exports: [BrowserModule],
        providers: BROWSER_ANIMATIONS_PROVIDERS
      }]
    }] });
    NoopAnimationsModule = class _NoopAnimationsModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _NoopAnimationsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.0", ngImport: core_exports, type: _NoopAnimationsModule, exports: [BrowserModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _NoopAnimationsModule, providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS, imports: [BrowserModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: NoopAnimationsModule, decorators: [{
      type: NgModule,
      args: [{
        exports: [BrowserModule],
        providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
      }]
    }] });
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-wave.mjs
function provideNzWave(config) {
  return makeEnvironmentProviders([{ provide: NZ_WAVE_GLOBAL_CONFIG, useValue: config }]);
}
var NzWaveRenderer, NZ_WAVE_GLOBAL_DEFAULT_CONFIG, NZ_WAVE_GLOBAL_CONFIG, NzWaveDirective, NzWaveModule;
var init_ng_zorro_antd_core_wave = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-wave.mjs"() {
    "use strict";
    init_platform();
    init_core();
    init_core();
    init_animations();
    NzWaveRenderer = class {
      triggerElement;
      ngZone;
      insertExtraNode;
      platform;
      cspNonce;
      waveTransitionDuration = 400;
      styleForPseudo = null;
      extraNode = null;
      lastTime = 0;
      clickHandler;
      get waveAttributeName() {
        return this.insertExtraNode ? "ant-click-animating" : "ant-click-animating-without-extra-node";
      }
      constructor(triggerElement, ngZone, insertExtraNode, platform, cspNonce) {
        this.triggerElement = triggerElement;
        this.ngZone = ngZone;
        this.insertExtraNode = insertExtraNode;
        this.platform = platform;
        this.cspNonce = cspNonce;
        this.clickHandler = this.onClick.bind(this);
        this.bindTriggerEvent();
      }
      onClick = (event) => {
        if (!this.triggerElement || !this.triggerElement.getAttribute || this.triggerElement.getAttribute("disabled") || event.target.tagName === "INPUT" || this.triggerElement.className.indexOf("disabled") >= 0) {
          return;
        }
        this.fadeOutWave();
      };
      bindTriggerEvent() {
        if (this.platform.isBrowser) {
          this.ngZone.runOutsideAngular(() => {
            this.removeTriggerEvent();
            if (this.triggerElement) {
              this.triggerElement.addEventListener("click", this.clickHandler, true);
            }
          });
        }
      }
      removeTriggerEvent() {
        if (this.triggerElement) {
          this.triggerElement.removeEventListener("click", this.clickHandler, true);
        }
      }
      removeStyleAndExtraNode() {
        if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
          document.body.removeChild(this.styleForPseudo);
          this.styleForPseudo = null;
        }
        if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
          this.triggerElement.removeChild(this.extraNode);
        }
      }
      destroy() {
        this.removeTriggerEvent();
        this.removeStyleAndExtraNode();
      }
      fadeOutWave() {
        const node = this.triggerElement;
        const waveColor = this.getWaveColor(node);
        node.setAttribute(this.waveAttributeName, "true");
        if (Date.now() < this.lastTime + this.waveTransitionDuration) {
          return;
        }
        if (this.isValidColor(waveColor)) {
          if (!this.styleForPseudo) {
            this.styleForPseudo = document.createElement("style");
            if (this.cspNonce) {
              this.styleForPseudo.nonce = this.cspNonce;
            }
          }
          this.styleForPseudo.innerHTML = `
      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {
        --antd-wave-shadow-color: ${waveColor};
      }`;
          document.body.appendChild(this.styleForPseudo);
        }
        if (this.insertExtraNode) {
          if (!this.extraNode) {
            this.extraNode = document.createElement("div");
          }
          this.extraNode.className = "ant-click-animating-node";
          node.appendChild(this.extraNode);
        }
        this.lastTime = Date.now();
        this.runTimeoutOutsideZone(() => {
          node.removeAttribute(this.waveAttributeName);
          this.removeStyleAndExtraNode();
        }, this.waveTransitionDuration);
      }
      isValidColor(color) {
        return !!color && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && this.isNotGrey(color) && !/rgba\(\d*, \d*, \d*, 0\)/.test(color) && color !== "transparent";
      }
      isNotGrey(color) {
        const match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [.\d]*)?\)/);
        if (match && match[1] && match[2] && match[3]) {
          return !(match[1] === match[2] && match[2] === match[3]);
        }
        return true;
      }
      getWaveColor(node) {
        const nodeStyle = getComputedStyle(node);
        return nodeStyle.getPropertyValue("border-top-color") || // Firefox Compatible
        nodeStyle.getPropertyValue("border-color") || nodeStyle.getPropertyValue("background-color");
      }
      runTimeoutOutsideZone(fn, delay) {
        this.ngZone.runOutsideAngular(() => setTimeout(fn, delay));
      }
    };
    NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
      disabled: false
    };
    NZ_WAVE_GLOBAL_CONFIG = new InjectionToken("nz-wave-global-options");
    NzWaveDirective = class _NzWaveDirective {
      nzWaveExtraNode = false;
      waveRenderer;
      waveDisabled = false;
      get disabled() {
        return this.waveDisabled;
      }
      get rendererRef() {
        return this.waveRenderer;
      }
      cspNonce = inject(CSP_NONCE, { optional: true });
      platform = inject(Platform);
      config = inject(NZ_WAVE_GLOBAL_CONFIG, { optional: true });
      animationType = inject(ANIMATION_MODULE_TYPE, { optional: true });
      ngZone = inject(NgZone);
      elementRef = inject(ElementRef);
      constructor() {
        this.waveDisabled = this.isConfigDisabled();
      }
      isConfigDisabled() {
        let disabled = false;
        if (this.config && typeof this.config.disabled === "boolean") {
          disabled = this.config.disabled;
        }
        if (this.animationType === "NoopAnimations") {
          disabled = true;
        }
        return disabled;
      }
      ngOnDestroy() {
        if (this.waveRenderer) {
          this.waveRenderer.destroy();
        }
      }
      ngOnInit() {
        this.renderWaveIfEnabled();
      }
      renderWaveIfEnabled() {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
          this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode, this.platform, this.cspNonce);
        }
      }
      disable() {
        this.waveDisabled = true;
        if (this.waveRenderer) {
          this.waveRenderer.removeTriggerEvent();
          this.waveRenderer.removeStyleAndExtraNode();
        }
      }
      enable() {
        this.waveDisabled = this.isConfigDisabled() || false;
        if (this.waveRenderer) {
          this.waveRenderer.bindTriggerEvent();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzWaveDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _NzWaveDirective, isStandalone: true, selector: '[nz-wave],button[nz-button]:not([nzType="link"]):not([nzType="text"])', inputs: { nzWaveExtraNode: "nzWaveExtraNode" }, exportAs: ["nzWave"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzWaveDirective, decorators: [{
      type: Directive,
      args: [{
        selector: '[nz-wave],button[nz-button]:not([nzType="link"]):not([nzType="text"])',
        exportAs: "nzWave"
      }]
    }], ctorParameters: () => [], propDecorators: { nzWaveExtraNode: [{
      type: Input
    }] } });
    NzWaveModule = class _NzWaveModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzWaveModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _NzWaveModule, imports: [NzWaveDirective], exports: [NzWaveDirective] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzWaveModule, providers: [provideNzWave(NZ_WAVE_GLOBAL_DEFAULT_CONFIG)] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzWaveModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [NzWaveDirective],
        exports: [NzWaveDirective],
        providers: [provideNzWave(NZ_WAVE_GLOBAL_DEFAULT_CONFIG)]
      }]
    }] });
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-button.mjs
var NZ_CONFIG_MODULE_NAME2, NzButtonComponent, NzButtonModule;
var init_ng_zorro_antd_button = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-button.mjs"() {
    "use strict";
    init_tslib_es6();
    init_bidi();
    init_core();
    init_core();
    init_rxjs_interop();
    init_esm();
    init_operators();
    init_ng_zorro_antd_core_config();
    init_ng_zorro_antd_core_util();
    init_ng_zorro_antd_icon();
    init_ng_zorro_antd_icon();
    init_ng_zorro_antd_space();
    init_ng_zorro_antd_space();
    init_ng_zorro_antd_core_transition_patch();
    init_ng_zorro_antd_core_wave();
    NZ_CONFIG_MODULE_NAME2 = "button";
    NzButtonComponent = (() => {
      var _a;
      let _nzSize_decorators;
      let _nzSize_initializers = [];
      let _nzSize_extraInitializers = [];
      return _a = class {
        elementRef = inject(ElementRef);
        cdr = inject(ChangeDetectorRef);
        renderer = inject(Renderer2);
        directionality = inject(Directionality);
        destroyRef = inject(DestroyRef);
        _nzModuleName = NZ_CONFIG_MODULE_NAME2;
        nzIconDirectiveElement;
        nzBlock = false;
        nzGhost = false;
        nzSearch = false;
        nzLoading = false;
        nzDanger = false;
        disabled = false;
        tabIndex = null;
        nzType = null;
        nzShape = null;
        nzSize = __runInitializers(this, _nzSize_initializers, "default");
        dir = (__runInitializers(this, _nzSize_extraInitializers), "ltr");
        finalSize = computed(() => {
          if (this.compactSize) {
            return this.compactSize();
          }
          return this.size();
        });
        size = signal(this.nzSize);
        compactSize = inject(NZ_SPACE_COMPACT_SIZE, { optional: true });
        loading$ = new Subject();
        insertSpan(nodes, renderer) {
          nodes.forEach((node) => {
            if (node.nodeName === "#text") {
              const span = renderer.createElement("span");
              const parent = renderer.parentNode(node);
              renderer.insertBefore(parent, span, node);
              renderer.appendChild(span, node);
            }
          });
        }
        get iconOnly() {
          const listOfNode = Array.from(this.elementRef?.nativeElement?.childNodes || []);
          const noText = listOfNode.every((node) => node.nodeName !== "#text");
          const noSpan = listOfNode.filter((node) => {
            return !(node.nodeName === "#comment" || !!node?.classList?.contains("anticon"));
          }).length == 0;
          return !!this.nzIconDirectiveElement && noSpan && noText;
        }
        constructor() {
          onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME2, () => {
            this.size.set(this.nzSize);
            this.cdr.markForCheck();
          });
        }
        ngOnInit() {
          this.size.set(this.nzSize);
          this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
          });
          this.dir = this.directionality.value;
          fromEventOutsideAngular(this.elementRef.nativeElement, "click", { capture: true }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
            if (this.disabled && event.target?.tagName === "A" || this.nzLoading) {
              event.preventDefault();
              event.stopImmediatePropagation();
            }
          });
        }
        ngOnChanges({ nzLoading, nzSize }) {
          if (nzLoading) {
            this.loading$.next(this.nzLoading);
          }
          if (nzSize) {
            this.size.set(nzSize.currentValue);
          }
        }
        ngAfterViewInit() {
          this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
        }
        ngAfterContentInit() {
          this.loading$.pipe(startWith(this.nzLoading), filter(() => !!this.nzIconDirectiveElement), takeUntilDestroyed(this.destroyRef)).subscribe((loading) => {
            const nativeElement = this.nzIconDirectiveElement.nativeElement;
            if (loading) {
              this.renderer.setStyle(nativeElement, "display", "none");
            } else {
              this.renderer.removeStyle(nativeElement, "display");
            }
          });
        }
      }, (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
        _nzSize_decorators = [WithConfig()];
        __esDecorate(null, null, _nzSize_decorators, { kind: "field", name: "nzSize", static: false, private: false, access: { has: (obj) => "nzSize" in obj, get: (obj) => obj.nzSize, set: (obj, value) => {
          obj.nzSize = value;
        } }, metadata: _metadata }, _nzSize_initializers, _nzSize_extraInitializers);
        if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      })(), __publicField(_a, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _a, deps: [], target: FactoryTarget.Component })), __publicField(_a, "\u0275cmp", \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _a, isStandalone: true, selector: "button[nz-button], a[nz-button]", inputs: { nzBlock: ["nzBlock", "nzBlock", booleanAttribute], nzGhost: ["nzGhost", "nzGhost", booleanAttribute], nzSearch: ["nzSearch", "nzSearch", booleanAttribute], nzLoading: ["nzLoading", "nzLoading", booleanAttribute], nzDanger: ["nzDanger", "nzDanger", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], tabIndex: "tabIndex", nzType: "nzType", nzShape: "nzShape", nzSize: "nzSize" }, host: { properties: { "class.ant-btn-default": "nzType === 'default'", "class.ant-btn-primary": "nzType === 'primary'", "class.ant-btn-dashed": "nzType === 'dashed'", "class.ant-btn-link": "nzType === 'link'", "class.ant-btn-text": "nzType === 'text'", "class.ant-btn-circle": "nzShape === 'circle'", "class.ant-btn-round": "nzShape === 'round'", "class.ant-btn-lg": "finalSize() === 'large'", "class.ant-btn-sm": "finalSize() === 'small'", "class.ant-btn-dangerous": "nzDanger", "class.ant-btn-loading": "nzLoading", "class.ant-btn-background-ghost": "nzGhost", "class.ant-btn-block": "nzBlock", "class.ant-input-search-button": "nzSearch", "class.ant-btn-rtl": "dir === 'rtl'", "class.ant-btn-icon-only": "iconOnly", "attr.tabindex": "disabled ? -1 : (tabIndex === null ? null : tabIndex)", "attr.disabled": "disabled || null" }, classAttribute: "ant-btn" }, providers: [{ provide: NZ_SPACE_COMPACT_ITEM_TYPE, useValue: "btn" }], queries: [{ propertyName: "nzIconDirectiveElement", first: true, predicate: NzIconDirective, descendants: true, read: ElementRef }], exportAs: ["nzButton"], usesOnChanges: true, hostDirectives: [{ directive: NzSpaceCompactItemDirective }], ngImport: core_exports, template: `
    @if (nzLoading) {
      <nz-icon nzType="loading" />
    }
    <ng-content></ng-content>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: NzIconModule }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None })), _a;
    })();
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzButtonComponent, decorators: [{
      type: Component,
      args: [{
        selector: "button[nz-button], a[nz-button]",
        exportAs: "nzButton",
        imports: [NzIconModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        template: `
    @if (nzLoading) {
      <nz-icon nzType="loading" />
    }
    <ng-content></ng-content>
  `,
        host: {
          class: "ant-btn",
          "[class.ant-btn-default]": `nzType === 'default'`,
          "[class.ant-btn-primary]": `nzType === 'primary'`,
          "[class.ant-btn-dashed]": `nzType === 'dashed'`,
          "[class.ant-btn-link]": `nzType === 'link'`,
          "[class.ant-btn-text]": `nzType === 'text'`,
          "[class.ant-btn-circle]": `nzShape === 'circle'`,
          "[class.ant-btn-round]": `nzShape === 'round'`,
          "[class.ant-btn-lg]": `finalSize() === 'large'`,
          "[class.ant-btn-sm]": `finalSize() === 'small'`,
          "[class.ant-btn-dangerous]": `nzDanger`,
          "[class.ant-btn-loading]": `nzLoading`,
          "[class.ant-btn-background-ghost]": `nzGhost`,
          "[class.ant-btn-block]": `nzBlock`,
          "[class.ant-input-search-button]": `nzSearch`,
          "[class.ant-btn-rtl]": `dir === 'rtl'`,
          "[class.ant-btn-icon-only]": `iconOnly`,
          "[attr.tabindex]": "disabled ? -1 : (tabIndex === null ? null : tabIndex)",
          "[attr.disabled]": "disabled || null"
        },
        hostDirectives: [NzSpaceCompactItemDirective],
        providers: [{ provide: NZ_SPACE_COMPACT_ITEM_TYPE, useValue: "btn" }]
      }]
    }], ctorParameters: () => [], propDecorators: { nzIconDirectiveElement: [{
      type: ContentChild,
      args: [NzIconDirective, { read: ElementRef }]
    }], nzBlock: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], nzGhost: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], nzSearch: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], nzLoading: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], nzDanger: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabIndex: [{
      type: Input
    }], nzType: [{
      type: Input
    }], nzShape: [{
      type: Input
    }], nzSize: [{
      type: Input
    }] } });
    NzButtonModule = class _NzButtonModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzButtonModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _NzButtonModule, imports: [NzButtonComponent], exports: [NzButtonComponent, NzTransitionPatchModule, NzWaveModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzButtonModule, imports: [NzButtonComponent, NzTransitionPatchModule, NzWaveModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzButtonModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [NzButtonComponent],
        exports: [NzButtonComponent, NzTransitionPatchModule, NzWaveModule]
      }]
    }] });
  }
});

// src/app/keyboard/keyboard.ts
var Keyboard;
var init_keyboard3 = __esm({
  "src/app/keyboard/keyboard.ts"() {
    "use strict";
    init_tslib_es6();
    init_keyboard();
    init_keyboard2();
    init_core();
    init_letter();
    init_state();
    init_common();
    init_ng_zorro_antd_button();
    Keyboard = class Keyboard2 {
      keyPressed = new EventEmitter();
      backspacePressed = new EventEmitter();
      enterPressed = new EventEmitter();
      state = State;
      enterKey = "\u2936";
      backspaceKey = "\u140A";
      keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        [this.enterKey, "Z", "X", "C", "V", "B", "N", "M", this.backspaceKey]
      ].map((row) => row.map((key) => new Letter(key)));
      setLettersStateBasedOnInputLetter(input2) {
        for (const row of this.keyboard) {
          for (const key of row) {
            if (key.value?.toLowerCase() !== input2.value?.toLowerCase() || key.state >= input2.state) {
              continue;
            }
            key.state = input2.state;
          }
        }
      }
      resetKeyboardLetterState() {
        for (const row of this.keyboard) {
          for (const key of row) {
            key.state = State.None;
          }
        }
      }
      onPress(key) {
        if (key === void 0) {
          return;
        }
        switch (key) {
          case this.enterKey:
            this.enterPressed.emit();
            break;
          case this.backspaceKey:
            this.backspacePressed.emit();
            break;
          default:
            this.keyPressed.emit(key);
            break;
        }
      }
      static propDecorators = {
        keyPressed: [{ type: Output }],
        backspacePressed: [{ type: Output }],
        enterPressed: [{ type: Output }]
      };
    };
    Keyboard = __decorate([
      Component({
        selector: "app-keyboard",
        template: keyboard_default,
        imports: [
          NgClass,
          NzButtonComponent
        ],
        styles: [keyboard_default2]
      })
    ], Keyboard);
  }
});

export {
  HttpClient,
  provideHttpClient,
  init_http,
  State,
  init_state,
  Letter,
  init_letter,
  trigger,
  animate,
  sequence,
  style,
  state,
  transition,
  query,
  stagger,
  init_private_export,
  coerceNumberProperty,
  coerceElement,
  init_element_x4z00URv,
  coerceArray,
  init_array_I1yfCXUO,
  coerceCssPixelValue,
  init_css_pixel_value_C_HEqLhI,
  environment,
  init_ng_zorro_antd_core_environments,
  toCssPixel,
  isTouchEvent,
  getEventPosition,
  init_ng_zorro_antd_core_util,
  NzStringTemplateOutletDirective,
  NzOutletModule,
  init_ng_zorro_antd_core_outlet,
  takeUntilDestroyed,
  init_rxjs_interop,
  Platform,
  init_platform_DNDzkVcI,
  RtlScrollAxisType,
  supportsScrollBehavior,
  getRtlScrollAxisType,
  init_scrolling_BkvA05C8,
  _getEventTarget,
  init_shadow_dom_B0oHn41l,
  _isTestEnvironment,
  init_test_environment_CT0XxPyp,
  init_platform,
  NzConfigService,
  onConfigChangeEventForComponent,
  init_ng_zorro_antd_core_config,
  NzIconDirective,
  NzIconModule,
  init_ng_zorro_antd_icon,
  Directionality,
  init_directionality_CChdj3az,
  BidiModule,
  init_bidi,
  NzButtonComponent,
  init_ng_zorro_antd_button,
  Keyboard,
  init_keyboard3 as init_keyboard
};
/*! Bundled license information:

@angular/common/fesm2022/module.mjs:
@angular/common/fesm2022/http.mjs:
@angular/core/fesm2022/rxjs-interop.mjs:
@angular/platform-browser/fesm2022/platform-browser.mjs:
@angular/animations/fesm2022/private_export.mjs:
@angular/animations/fesm2022/util.mjs:
@angular/animations/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v20.1.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-76AEAQYO.js.map
