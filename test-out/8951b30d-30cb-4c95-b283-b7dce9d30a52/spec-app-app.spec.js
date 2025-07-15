import {
  BidiModule,
  Directionality,
  HttpClient,
  Keyboard,
  Letter,
  NzButtonComponent,
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  Platform,
  RtlScrollAxisType,
  State,
  _getEventTarget,
  _isTestEnvironment,
  animate,
  coerceArray,
  coerceCssPixelValue,
  coerceElement,
  coerceNumberProperty,
  environment,
  getEventPosition,
  getRtlScrollAxisType,
  init_array_I1yfCXUO,
  init_bidi,
  init_css_pixel_value_C_HEqLhI,
  init_directionality_CChdj3az,
  init_element_x4z00URv,
  init_http,
  init_keyboard,
  init_letter,
  init_ng_zorro_antd_button,
  init_ng_zorro_antd_core_config,
  init_ng_zorro_antd_core_environments,
  init_ng_zorro_antd_core_outlet,
  init_ng_zorro_antd_core_util,
  init_ng_zorro_antd_icon,
  init_platform,
  init_platform_DNDzkVcI,
  init_private_export,
  init_rxjs_interop,
  init_scrolling_BkvA05C8,
  init_shadow_dom_B0oHn41l,
  init_state,
  init_test_environment_CT0XxPyp,
  isTouchEvent,
  onConfigChangeEventForComponent,
  provideHttpClient,
  query,
  sequence,
  stagger,
  state,
  style,
  supportsScrollBehavior,
  takeUntilDestroyed,
  toCssPixel,
  transition,
  trigger
} from "./chunk-76AEAQYO.js";
import {
  Title,
  init_title
} from "./chunk-RVOQYCA3.js";
import "./chunk-EC7DTUDS.js";
import {
  ANIMATION_MODULE_TYPE,
  APP_ID,
  ApplicationRef,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ConnectableObservable,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  FactoryTarget,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  Location,
  NgClass,
  NgModule,
  NgModuleRef$1,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Subject,
  Subscription,
  TemplateRef,
  TestBed,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __async,
  __commonJS,
  __decorate,
  __esm,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  combineLatest,
  concat,
  core_exports,
  createComponent,
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  forwardRef,
  init_common,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  inject,
  isObservable,
  lastValueFrom,
  map,
  of,
  pairwise,
  provideZonelessChangeDetection,
  shareReplay,
  signal,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-E4RZNJAH.js";

// angular:jit:template:src/app/app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src/app/app.html"() {
    app_default = `<div class="container">
  <div class="content">
    <app-title [won]="won"></app-title>

    <div class="words-container">
      @for (word of words; track word) {
        <div class="grid-container">
          @for (letter of word; track letter) {
            <div
              class="letter"
              [ngClass]="{
                'correct': letter.state === state.Correct,
                'incorrect': letter.state === state.Incorrect,
                'hint': letter.state === state.Hint
              }">
              {{ letter.value }}
            </div>
          }
        </div>
      }
    </div>

    <div class="retry-button-container">
      @if (gameOver) {
        <button
          nz-button
          (click)="resetGame()"
          class="retry-button"
        >
          <i nz-icon nzType="reload" nzTheme="outline"></i>
          Opnieuw spelen
        </button>
      }
    </div>
  </div>

  <div class="keyboard-container">
    <app-keyboard
      #keyboard
      (keyPressed)="addLetterToCurrentGuess($event)"
      (backspacePressed)="removeLastLetter()"
      (enterPressed)="submitGuess()">
    </app-keyboard>
  </div>
</div>
`;
  }
});

// angular:jit:style:src/app/app.scss
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src/app/app.scss"() {
    app_default2 = "/* src/app/app.scss */\n.correct {\n  background-color: #52c41a;\n  border-color: #52c41a;\n  color: white;\n}\n.incorrect {\n  background-color: #ff4d4f;\n  border-color: #ff4d4f;\n  color: white;\n}\n.hint {\n  background-color: #faad14;\n  border-color: #faad14;\n  color: white;\n}\n.container {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  box-sizing: border-box;\n}\n.content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 0;\n}\n.words-container {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 4px;\n  justify-content: center;\n}\n.letter {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: clamp(12px, 5vw, 18px);\n  font-weight: bold;\n  width: 50px;\n  height: 50px;\n  border: 1px solid #434343;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transform: scale(1);\n}\n@media (max-width: 400px) {\n  .letter {\n    width: 35px;\n    height: 35px;\n  }\n}\n.retry-button-container {\n  height: 48px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 16px 0;\n}\n.retry-button {\n  margin: 10px;\n}\n.keyboard-container {\n  flex-shrink: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/word.service.ts
var WordService;
var init_word_service = __esm({
  "src/app/word.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_esm();
    WordService = class WordService2 {
      httpClient;
      loaded = false;
      data;
      constructor(httpClient) {
        this.httpClient = httpClient;
      }
      loadWords() {
        return __async(this, null, function* () {
          this.data = yield lastValueFrom(this.httpClient.get("all-words", { responseType: "text" }).pipe(map((data) => data.split("\n").map((line) => line.trim()))));
          this.loaded = true;
        });
      }
      getRandomWord() {
        return __async(this, null, function* () {
          if (!this.loaded) {
            yield this.loadWords();
          }
          if (!this.data) {
            throw new Error("Could not load word data.");
          }
          return this.data[Math.floor(Math.random() * this.data.length)];
        });
      }
      isRealWord(word) {
        return __async(this, null, function* () {
          if (!this.loaded) {
            yield this.loadWords();
          }
          if (!this.data) {
            return false;
          }
          return this.data.includes(word);
        });
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    WordService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], WordService);
  }
});

// node_modules/@angular/animations/fesm2022/animations.mjs
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}
var AnimationBuilder, AnimationFactory, BrowserAnimationBuilder, BrowserAnimationFactory, RendererAnimationPlayer;
var init_animations = __esm({
  "node_modules/@angular/animations/fesm2022/animations.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_private_export();
    init_private_export();
    AnimationBuilder = class _AnimationBuilder {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _AnimationBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _AnimationBuilder, providedIn: "root", useFactory: () => inject(BrowserAnimationBuilder) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: AnimationBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(BrowserAnimationBuilder) }]
    }] });
    AnimationFactory = class {
    };
    BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
      animationModuleType = inject(ANIMATION_MODULE_TYPE, { optional: true });
      _nextAnimationId = 0;
      _renderer;
      constructor(rootRenderer, doc) {
        super();
        const typeData = {
          id: "0",
          encapsulation: ViewEncapsulation.None,
          styles: [],
          data: { animation: [] }
        };
        this._renderer = rootRenderer.createRenderer(doc.body, typeData);
        if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
          throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
        }
      }
      build(animation2) {
        const id = this._nextAnimationId;
        this._nextAnimationId++;
        const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
        issueAnimationCommand(this._renderer, null, id, "register", [entry]);
        return new BrowserAnimationFactory(id, this._renderer);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _BrowserAnimationBuilder, deps: [{ token: RendererFactory2 }, { token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _BrowserAnimationBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: BrowserAnimationBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: RendererFactory2 }, { type: Document, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    BrowserAnimationFactory = class extends AnimationFactory {
      _id;
      _renderer;
      constructor(_id, _renderer) {
        super();
        this._id = _id;
        this._renderer = _renderer;
      }
      create(element, options) {
        return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
      }
    };
    RendererAnimationPlayer = class {
      id;
      element;
      _renderer;
      parentPlayer = null;
      _started = false;
      constructor(id, element, options, _renderer) {
        this.id = id;
        this.element = element;
        this._renderer = _renderer;
        this._command("create", options);
      }
      _listen(eventName, callback) {
        return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
      }
      _command(command, ...args) {
        issueAnimationCommand(this._renderer, this.element, this.id, command, args);
      }
      onDone(fn) {
        this._listen("done", fn);
      }
      onStart(fn) {
        this._listen("start", fn);
      }
      onDestroy(fn) {
        this._listen("destroy", fn);
      }
      init() {
        this._command("init");
      }
      hasStarted() {
        return this._started;
      }
      play() {
        this._command("play");
        this._started = true;
      }
      pause() {
        this._command("pause");
      }
      restart() {
        this._command("restart");
      }
      finish() {
        this._command("finish");
      }
      destroy() {
        this._command("destroy");
      }
      reset() {
        this._command("reset");
        this._started = false;
      }
      setPosition(p) {
        this._command("setPosition", p);
      }
      getPosition() {
        return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
      }
      totalTime = 0;
    };
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-animation.mjs
var AnimationDuration, AnimationCurves, collapseMotion, treeCollapseMotion, drawerMaskMotion, fadeMotion, helpMotion, moveUpMotion, notificationMotion, ANIMATION_TRANSITION_IN, ANIMATION_TRANSITION_OUT, slideMotion, slideAlertMotion, tabSwitchMotion, thumbMotion, zoomBigMotion, zoomBadgeMotion;
var init_ng_zorro_antd_core_animation = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-animation.mjs"() {
    "use strict";
    init_animations();
    AnimationDuration = class {
      static SLOW = "0.3s";
      // Modal
      static BASE = "0.2s";
      static FAST = "0.1s";
      // Tooltip
    };
    AnimationCurves = class {
      static EASE_BASE_OUT = "cubic-bezier(0.7, 0.3, 0.1, 1)";
      static EASE_BASE_IN = "cubic-bezier(0.9, 0, 0.3, 0.7)";
      static EASE_OUT = "cubic-bezier(0.215, 0.61, 0.355, 1)";
      static EASE_IN = "cubic-bezier(0.55, 0.055, 0.675, 0.19)";
      static EASE_IN_OUT = "cubic-bezier(0.645, 0.045, 0.355, 1)";
      static EASE_OUT_BACK = "cubic-bezier(0.12, 0.4, 0.29, 1.46)";
      static EASE_IN_BACK = "cubic-bezier(0.71, -0.46, 0.88, 0.6)";
      static EASE_IN_OUT_BACK = "cubic-bezier(0.71, -0.46, 0.29, 1.46)";
      static EASE_OUT_CIRC = "cubic-bezier(0.08, 0.82, 0.17, 1)";
      static EASE_IN_CIRC = "cubic-bezier(0.6, 0.04, 0.98, 0.34)";
      static EASE_IN_OUT_CIRC = "cubic-bezier(0.78, 0.14, 0.15, 0.86)";
      static EASE_OUT_QUINT = "cubic-bezier(0.23, 1, 0.32, 1)";
      static EASE_IN_QUINT = "cubic-bezier(0.755, 0.05, 0.855, 0.06)";
      static EASE_IN_OUT_QUINT = "cubic-bezier(0.86, 0, 0.07, 1)";
    };
    collapseMotion = trigger("collapseMotion", [
      state("expanded", style({ height: "*" })),
      state("collapsed", style({ height: 0, overflow: "hidden" })),
      state("hidden", style({ height: 0, overflow: "hidden", borderTopWidth: "0" })),
      transition("expanded => collapsed", animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
      transition("expanded => hidden", animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
      transition("collapsed => expanded", animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
      transition("hidden => expanded", animate(`150ms ${AnimationCurves.EASE_IN_OUT}`))
    ]);
    treeCollapseMotion = trigger("treeCollapseMotion", [
      transition("* => *", [
        query("nz-tree-node:leave,nz-tree-builtin-node:leave", [
          style({ overflow: "hidden" }),
          stagger(0, [
            animate(`150ms ${AnimationCurves.EASE_IN_OUT}`, style({ height: 0, opacity: 0, "padding-bottom": 0 }))
          ])
        ], {
          optional: true
        }),
        query("nz-tree-node:enter,nz-tree-builtin-node:enter", [
          style({ overflow: "hidden", height: 0, opacity: 0, "padding-bottom": 0 }),
          stagger(0, [
            animate(`150ms ${AnimationCurves.EASE_IN_OUT}`, style({ overflow: "hidden", height: "*", opacity: "*", "padding-bottom": "*" }))
          ])
        ], {
          optional: true
        })
      ])
    ]);
    drawerMaskMotion = trigger("drawerMaskMotion", [
      transition(":enter", [style({ opacity: 0 }), animate(`${AnimationDuration.SLOW}`, style({ opacity: 1 }))]),
      transition(":leave", [style({ opacity: 1 }), animate(`${AnimationDuration.SLOW}`, style({ opacity: 0 }))])
    ]);
    fadeMotion = trigger("fadeMotion", [
      transition("* => enter", [style({ opacity: 0 }), animate(`${AnimationDuration.BASE}`, style({ opacity: 1 }))]),
      transition("* => leave, :leave", [style({ opacity: 1 }), animate(`${AnimationDuration.BASE}`, style({ opacity: 0 }))])
    ]);
    helpMotion = trigger("helpMotion", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "translateY(-5px)"
        }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT}`, style({
          opacity: 1,
          transform: "translateY(0)"
        }))
      ]),
      transition(":leave", [
        style({
          opacity: 1,
          transform: "translateY(0)"
        }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT}`, style({
          opacity: 0,
          transform: "translateY(-5px)"
        }))
      ])
    ]);
    moveUpMotion = trigger("moveUpMotion", [
      transition("* => enter", [
        style({
          transformOrigin: "0 0",
          transform: "translateY(-100%)",
          opacity: 0
        }),
        animate(`${AnimationDuration.BASE}`, style({
          transformOrigin: "0 0",
          transform: "translateY(0%)",
          opacity: 1
        }))
      ]),
      transition("* => leave", [
        style({
          transformOrigin: "0 0",
          transform: "translateY(0%)",
          opacity: 1
        }),
        animate(`${AnimationDuration.BASE}`, style({
          transformOrigin: "0 0",
          transform: "translateY(-100%)",
          opacity: 0
        }))
      ])
    ]);
    notificationMotion = trigger("notificationMotion", [
      state("enterRight", style({ opacity: 1, transform: "translateX(0)" })),
      transition("* => enterRight", [style({ opacity: 0, transform: "translateX(5%)" }), animate("100ms linear")]),
      state("enterLeft", style({ opacity: 1, transform: "translateX(0)" })),
      transition("* => enterLeft", [style({ opacity: 0, transform: "translateX(-5%)" }), animate("100ms linear")]),
      state("enterTop", style({ opacity: 1, transform: "translateY(0)" })),
      transition("* => enterTop", [style({ opacity: 0, transform: "translateY(-5%)" }), animate("100ms linear")]),
      state("enterBottom", style({ opacity: 1, transform: "translateY(0)" })),
      transition("* => enterBottom", [style({ opacity: 0, transform: "translateY(5%)" }), animate("100ms linear")]),
      state("leave", style({
        opacity: 0,
        transform: "scaleY(0.8)",
        transformOrigin: "0% 0%"
      })),
      transition("* => leave", [
        style({
          opacity: 1,
          transform: "scaleY(1)",
          transformOrigin: "0% 0%"
        }),
        animate("100ms linear")
      ])
    ]);
    ANIMATION_TRANSITION_IN = `${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_QUINT}`;
    ANIMATION_TRANSITION_OUT = `${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_QUINT}`;
    slideMotion = trigger("slideMotion", [
      state("void", style({
        opacity: 0,
        transform: "scaleY(0.8)"
      })),
      state("enter", style({
        opacity: 1,
        transform: "scaleY(1)"
      })),
      transition("void => *", [animate(ANIMATION_TRANSITION_IN)]),
      transition("* => void", [animate(ANIMATION_TRANSITION_OUT)])
    ]);
    slideAlertMotion = trigger("slideAlertMotion", [
      transition(":leave", [
        style({ opacity: 1, transform: "scaleY(1)", transformOrigin: "0% 0%" }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT_CIRC}`, style({
          opacity: 0,
          transform: "scaleY(0)",
          transformOrigin: "0% 0%"
        }))
      ])
    ]);
    tabSwitchMotion = trigger("tabSwitchMotion", [
      state("leave", style({
        display: "none"
      })),
      transition("* => enter", [
        style({
          display: "block",
          opacity: 0
        }),
        animate(AnimationDuration.SLOW)
      ]),
      transition("* => leave, :leave", [
        style({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%"
        }),
        animate(AnimationDuration.SLOW, style({
          opacity: 0
        })),
        style({
          display: "none"
        })
      ])
    ]);
    thumbMotion = trigger("thumbMotion", [
      state("from", style({ transform: "translateX({{ transform }}px)", width: "{{ width }}px" }), {
        params: { transform: 0, width: 0 }
      }),
      state("to", style({ transform: "translateX({{ transform }}px)", width: "{{ width }}px" }), {
        params: { transform: 100, width: 0 }
      }),
      transition("from => to", animate(`300ms ${AnimationCurves.EASE_IN_OUT}`))
    ]);
    zoomBigMotion = trigger("zoomBigMotion", [
      transition("void => active", [
        style({ opacity: 0, transform: "scale(0.8)" }),
        animate(`${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_CIRC}`, style({
          opacity: 1,
          transform: "scale(1)"
        }))
      ]),
      transition("active => void", [
        style({ opacity: 1, transform: "scale(1)" }),
        animate(`${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_OUT_CIRC}`, style({
          opacity: 0,
          transform: "scale(0.8)"
        }))
      ])
    ]);
    zoomBadgeMotion = trigger("zoomBadgeMotion", [
      transition(":enter", [
        style({ opacity: 0, transform: "scale(0) translate(50%, -50%)" }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_OUT_BACK}`, style({
          opacity: 1,
          transform: "scale(1) translate(50%, -50%)"
        }))
      ]),
      transition(":leave", [
        style({ opacity: 1, transform: "scale(1) translate(50%, -50%)" }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_BACK}`, style({
          opacity: 0,
          transform: "scale(0) translate(50%, -50%)"
        }))
      ])
    ]);
  }
});

// node_modules/@angular/cdk/fesm2022/style-loader-B2sGQXxD.mjs
var appsWithLoaders, _CdkPrivateStyleLoader;
var init_style_loader_B2sGQXxD = __esm({
  "node_modules/@angular/cdk/fesm2022/style-loader-B2sGQXxD.mjs"() {
    "use strict";
    init_core();
    init_core();
    appsWithLoaders = /* @__PURE__ */ new WeakMap();
    _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
      _appRef;
      _injector = inject(Injector);
      _environmentInjector = inject(EnvironmentInjector);
      /**
       * Loads a set of styles.
       * @param loader Component which will be instantiated to load the styles.
       */
      load(loader) {
        const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
        let data = appsWithLoaders.get(appRef);
        if (!data) {
          data = { loaders: /* @__PURE__ */ new Set(), refs: [] };
          appsWithLoaders.set(appRef, data);
          appRef.onDestroy(() => {
            appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
            appsWithLoaders.delete(appRef);
          });
        }
        if (!data.loaders.has(loader)) {
          data.loaders.add(loader);
          data.refs.push(createComponent(loader, { environmentInjector: this._environmentInjector }));
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __CdkPrivateStyleLoader, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __CdkPrivateStyleLoader, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkPrivateStyleLoader, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/data-source-D34wiQZj.mjs
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
var DataSource;
var init_data_source_D34wiQZj = __esm({
  "node_modules/@angular/cdk/fesm2022/data-source-D34wiQZj.mjs"() {
    "use strict";
    init_esm();
    DataSource = class {
    };
  }
});

// node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy-SfuyU210.mjs
var ArrayDataSource, _ViewRepeaterOperation, _VIEW_REPEATER_STRATEGY, _RecycleViewRepeaterStrategy;
var init_recycle_view_repeater_strategy_SfuyU210 = __esm({
  "node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy-SfuyU210.mjs"() {
    "use strict";
    init_esm();
    init_data_source_D34wiQZj();
    init_core();
    ArrayDataSource = class extends DataSource {
      _data;
      constructor(_data) {
        super();
        this._data = _data;
      }
      connect() {
        return isObservable(this._data) ? this._data : of(this._data);
      }
      disconnect() {
      }
    };
    (function(_ViewRepeaterOperation2) {
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
    })(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
    _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
    _RecycleViewRepeaterStrategy = class {
      /**
       * The size of the cache used to store unused views.
       * Setting the cache size to `0` will disable caching. Defaults to 20 views.
       */
      viewCacheSize = 20;
      /**
       * View cache that stores embedded view instances that have been previously stamped out,
       * but don't are not currently rendered. The view repeater will reuse these views rather than
       * creating brand new ones.
       *
       * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
       */
      _viewCache = [];
      /** Apply changes to the DOM. */
      applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
        changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
          let view;
          let operation;
          if (record.previousIndex == null) {
            const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
            view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
            operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
          } else if (currentIndex == null) {
            this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
            operation = _ViewRepeaterOperation.REMOVED;
          } else {
            view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
            operation = _ViewRepeaterOperation.MOVED;
          }
          if (itemViewChanged) {
            itemViewChanged({
              context: view?.context,
              operation,
              record
            });
          }
        });
      }
      detach() {
        for (const view of this._viewCache) {
          view.destroy();
        }
        this._viewCache = [];
      }
      /**
       * Inserts a view for a new item, either from the cache or by creating a new
       * one. Returns `undefined` if the item was inserted into a cached view.
       */
      _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
        const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
        if (cachedView) {
          cachedView.context.$implicit = value;
          return void 0;
        }
        const viewArgs = viewArgsFactory();
        return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
      }
      /** Detaches the view at the given index and inserts into the view cache. */
      _detachAndCacheView(index, viewContainerRef) {
        const detachedView = viewContainerRef.detach(index);
        this._maybeCacheView(detachedView, viewContainerRef);
      }
      /** Moves view at the previous index to the current index. */
      _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
        const view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        view.context.$implicit = value;
        return view;
      }
      /**
       * Cache the given detached view. If the cache is full, the view will be
       * destroyed.
       */
      _maybeCacheView(view, viewContainerRef) {
        if (this._viewCache.length < this.viewCacheSize) {
          this._viewCache.push(view);
        } else {
          const index = viewContainerRef.indexOf(view);
          if (index === -1) {
            view.destroy();
          } else {
            viewContainerRef.remove(index);
          }
        }
      }
      /** Inserts a recycled view from the cache at the given index. */
      _insertViewFromCache(index, viewContainerRef) {
        const cachedView = this._viewCache.pop();
        if (cachedView) {
          viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var VIRTUAL_SCROLL_STRATEGY, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, DEFAULT_SCROLL_TIME, ScrollDispatcher, CdkScrollable, DEFAULT_RESIZE_TIME, ViewportRuler, VIRTUAL_SCROLLABLE, CdkVirtualScrollable, SCROLL_SCHEDULER, CdkVirtualScrollViewport, CdkVirtualForOf, CdkVirtualScrollableElement, CdkVirtualScrollableWindow, CdkScrollableModule, ScrollingModule;
var init_scrolling = __esm({
  "node_modules/@angular/cdk/fesm2022/scrolling.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_element_x4z00URv();
    init_platform_DNDzkVcI();
    init_directionality_CChdj3az();
    init_scrolling_BkvA05C8();
    init_bidi();
    init_recycle_view_repeater_strategy_SfuyU210();
    init_data_source_D34wiQZj();
    VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
    FixedSizeVirtualScrollStrategy = class {
      _scrolledIndexChange = new Subject();
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
      /** The attached viewport. */
      _viewport = null;
      /** The size of the items in the virtually scrolling list. */
      _itemSize;
      /** The minimum amount of buffer rendered beyond the viewport (in pixels). */
      _minBufferPx;
      /** The number of buffer items to render beyond the edge of the viewport (in pixels). */
      _maxBufferPx;
      /**
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      constructor(itemSize, minBufferPx, maxBufferPx) {
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param viewport The viewport to attach this strategy to.
       */
      attach(viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** Detaches this scroll strategy from the currently attached viewport. */
      detach() {
        this._scrolledIndexChange.complete();
        this._viewport = null;
      }
      /**
       * Update the item size and buffer size.
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onContentScrolled() {
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onDataLengthChanged() {
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onContentRendered() {
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onRenderedOffsetChanged() {
      }
      /**
       * Scroll to the offset for the given index.
       * @param index The index of the element to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling.
       */
      scrollToIndex(index, behavior) {
        if (this._viewport) {
          this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
      }
      /** Update the viewport's total content size. */
      _updateTotalContentSize() {
        if (!this._viewport) {
          return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
      }
      /** Update the viewport's rendered range. */
      _updateRenderedRange() {
        if (!this._viewport) {
          return;
        }
        const renderedRange = this._viewport.getRenderedRange();
        const newRange = { start: renderedRange.start, end: renderedRange.end };
        const viewportSize = this._viewport.getViewportSize();
        const dataLength = this._viewport.getDataLength();
        let scrollOffset = this._viewport.measureScrollOffset();
        let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
        if (newRange.end > dataLength) {
          const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
          const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
          if (firstVisibleIndex != newVisibleIndex) {
            firstVisibleIndex = newVisibleIndex;
            scrollOffset = newVisibleIndex * this._itemSize;
            newRange.start = Math.floor(firstVisibleIndex);
          }
          newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
        }
        const startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
          const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
          newRange.start = Math.max(0, newRange.start - expandStart);
          newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        } else {
          const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
          if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
            const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
            if (expandEnd > 0) {
              newRange.end = Math.min(dataLength, newRange.end + expandEnd);
              newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
            }
          }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
      }
    };
    CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
      /** The size of the items in the list (in pixels). */
      get itemSize() {
        return this._itemSize;
      }
      set itemSize(value) {
        this._itemSize = coerceNumberProperty(value);
      }
      _itemSize = 20;
      /**
       * The minimum amount of buffer rendered beyond the viewport (in pixels).
       * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
       */
      get minBufferPx() {
        return this._minBufferPx;
      }
      set minBufferPx(value) {
        this._minBufferPx = coerceNumberProperty(value);
      }
      _minBufferPx = 100;
      /**
       * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
       */
      get maxBufferPx() {
        return this._maxBufferPx;
      }
      set maxBufferPx(value) {
        this._maxBufferPx = coerceNumberProperty(value);
      }
      _maxBufferPx = 200;
      /** The scroll strategy used by this directive. */
      _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      ngOnChanges() {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkFixedSizeVirtualScroll, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkFixedSizeVirtualScroll, isStandalone: true, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, providers: [
        {
          provide: VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory,
          deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
        }
      ], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkFixedSizeVirtualScroll, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-virtual-scroll-viewport[itemSize]",
        providers: [
          {
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: _fixedSizeVirtualScrollStrategyFactory,
            deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
          }
        ]
      }]
    }], propDecorators: { itemSize: [{
      type: Input
    }], minBufferPx: [{
      type: Input
    }], maxBufferPx: [{
      type: Input
    }] } });
    DEFAULT_SCROLL_TIME = 20;
    ScrollDispatcher = class _ScrollDispatcher {
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _cleanupGlobalListener;
      constructor() {
      }
      /** Subject for notifying that a registered scrollable reference element has been scrolled. */
      _scrolled = new Subject();
      /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
      _scrolledCount = 0;
      /**
       * Map of all the scrollable references that are registered with the service and their
       * scroll event subscriptions.
       */
      scrollContainers = /* @__PURE__ */ new Map();
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param scrollable Scrollable instance to be registered.
       */
      register(scrollable) {
        if (!this.scrollContainers.has(scrollable)) {
          this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
        }
      }
      /**
       * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
       * @param scrollable Scrollable instance to be deregistered.
       */
      deregister(scrollable) {
        const scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
          scrollableReference.unsubscribe();
          this.scrollContainers.delete(scrollable);
        }
      }
      /**
       * Returns an observable that emits an event whenever any of the registered Scrollable
       * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
       * to override the default "throttle" time.
       *
       * **Note:** in order to avoid hitting change detection for every scroll event,
       * all of the events emitted from this stream will be run outside the Angular zone.
       * If you need to update any data bindings as a result of a scroll event, you have
       * to run the callback using `NgZone.run`.
       */
      scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
        if (!this._platform.isBrowser) {
          return of();
        }
        return new Observable((observer) => {
          if (!this._cleanupGlobalListener) {
            this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
          }
          const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
          this._scrolledCount++;
          return () => {
            subscription.unsubscribe();
            this._scrolledCount--;
            if (!this._scrolledCount) {
              this._cleanupGlobalListener?.();
              this._cleanupGlobalListener = void 0;
            }
          };
        });
      }
      ngOnDestroy() {
        this._cleanupGlobalListener?.();
        this._cleanupGlobalListener = void 0;
        this.scrollContainers.forEach((_, container) => this.deregister(container));
        this._scrolled.complete();
      }
      /**
       * Returns an observable that emits whenever any of the
       * scrollable ancestors of an element are scrolled.
       * @param elementOrElementRef Element whose ancestors to listen for.
       * @param auditTimeInMs Time to throttle the scroll events.
       */
      ancestorScrolled(elementOrElementRef, auditTimeInMs) {
        const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
        return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
      }
      /** Returns all registered Scrollables that contain the provided element. */
      getAncestorScrollContainers(elementOrElementRef) {
        const scrollingContainers = [];
        this.scrollContainers.forEach((_subscription, scrollable) => {
          if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
            scrollingContainers.push(scrollable);
          }
        });
        return scrollingContainers;
      }
      /** Returns true if the element is contained within the provided Scrollable. */
      _scrollableContainsElement(scrollable, elementOrElementRef) {
        let element = coerceElement(elementOrElementRef);
        let scrollableElement = scrollable.getElementRef().nativeElement;
        do {
          if (element == scrollableElement) {
            return true;
          }
        } while (element = element.parentElement);
        return false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ScrollDispatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ScrollDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ScrollDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkScrollable = class _CdkScrollable {
      elementRef = inject(ElementRef);
      scrollDispatcher = inject(ScrollDispatcher);
      ngZone = inject(NgZone);
      dir = inject(Directionality, { optional: true });
      _scrollElement = this.elementRef.nativeElement;
      _destroyed = new Subject();
      _renderer = inject(Renderer2);
      _cleanupScroll;
      _elementScrolled = new Subject();
      constructor() {
      }
      ngOnInit() {
        this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
        this.scrollDispatcher.register(this);
      }
      ngOnDestroy() {
        this._cleanupScroll?.();
        this._elementScrolled.complete();
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
      }
      /** Returns observable that emits when a scroll event is fired on the host element. */
      elementScrolled() {
        return this._elementScrolled;
      }
      /** Gets the ElementRef for the viewport. */
      getElementRef() {
        return this.elementRef;
      }
      /**
       * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
       * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param options specified the offsets to scroll to.
       */
      scrollTo(options) {
        const el = this.elementRef.nativeElement;
        const isRtl = this.dir && this.dir.value == "rtl";
        if (options.left == null) {
          options.left = isRtl ? options.end : options.start;
        }
        if (options.right == null) {
          options.right = isRtl ? options.start : options.end;
        }
        if (options.bottom != null) {
          options.top = el.scrollHeight - el.clientHeight - options.bottom;
        }
        if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
          if (options.left != null) {
            options.right = el.scrollWidth - el.clientWidth - options.left;
          }
          if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
            options.left = options.right;
          } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
            options.left = options.right ? -options.right : options.right;
          }
        } else {
          if (options.right != null) {
            options.left = el.scrollWidth - el.clientWidth - options.right;
          }
        }
        this._applyScrollToOptions(options);
      }
      _applyScrollToOptions(options) {
        const el = this.elementRef.nativeElement;
        if (supportsScrollBehavior()) {
          el.scrollTo(options);
        } else {
          if (options.top != null) {
            el.scrollTop = options.top;
          }
          if (options.left != null) {
            el.scrollLeft = options.left;
          }
        }
      }
      /**
       * Measures the scroll offset relative to the specified edge of the viewport. This method can be
       * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
       * about what scrollLeft means in RTL. The values returned by this method are normalized such that
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param from The edge to measure from.
       */
      measureScrollOffset(from) {
        const LEFT = "left";
        const RIGHT = "right";
        const el = this.elementRef.nativeElement;
        if (from == "top") {
          return el.scrollTop;
        }
        if (from == "bottom") {
          return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        const isRtl = this.dir && this.dir.value == "rtl";
        if (from == "start") {
          from = isRtl ? RIGHT : LEFT;
        } else if (from == "end") {
          from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
          if (from == LEFT) {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          } else {
            return el.scrollLeft;
          }
        } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
          if (from == LEFT) {
            return el.scrollLeft + el.scrollWidth - el.clientWidth;
          } else {
            return -el.scrollLeft;
          }
        } else {
          if (from == LEFT) {
            return el.scrollLeft;
          } else {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkScrollable, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkScrollable, isStandalone: true, selector: "[cdk-scrollable], [cdkScrollable]", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkScrollable, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-scrollable], [cdkScrollable]"
      }]
    }], ctorParameters: () => [] });
    DEFAULT_RESIZE_TIME = 20;
    ViewportRuler = class _ViewportRuler {
      _platform = inject(Platform);
      _listeners;
      /** Cached viewport dimensions. */
      _viewportSize;
      /** Stream of viewport change events. */
      _change = new Subject();
      /** Used to reference correct document/window */
      _document = inject(DOCUMENT);
      constructor() {
        const ngZone = inject(NgZone);
        const renderer = inject(RendererFactory2).createRenderer(null, null);
        ngZone.runOutsideAngular(() => {
          if (this._platform.isBrowser) {
            const changeListener = (event) => this._change.next(event);
            this._listeners = [
              renderer.listen("window", "resize", changeListener),
              renderer.listen("window", "orientationchange", changeListener)
            ];
          }
          this.change().subscribe(() => this._viewportSize = null);
        });
      }
      ngOnDestroy() {
        this._listeners?.forEach((cleanup) => cleanup());
        this._change.complete();
      }
      /** Returns the viewport's width and height. */
      getViewportSize() {
        if (!this._viewportSize) {
          this._updateViewportSize();
        }
        const output = { width: this._viewportSize.width, height: this._viewportSize.height };
        if (!this._platform.isBrowser) {
          this._viewportSize = null;
        }
        return output;
      }
      /** Gets a DOMRect for the viewport's bounds. */
      getViewportRect() {
        const scrollPosition = this.getViewportScrollPosition();
        const { width, height } = this.getViewportSize();
        return {
          top: scrollPosition.top,
          left: scrollPosition.left,
          bottom: scrollPosition.top + height,
          right: scrollPosition.left + width,
          height,
          width
        };
      }
      /** Gets the (top, left) scroll position of the viewport. */
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) {
          return { top: 0, left: 0 };
        }
        const document2 = this._document;
        const window2 = this._getWindow();
        const documentElement = document2.documentElement;
        const documentRect = documentElement.getBoundingClientRect();
        const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
        const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
        return { top, left };
      }
      /**
       * Returns a stream that emits whenever the size of the viewport changes.
       * This stream emits outside of the Angular zone.
       * @param throttleTime Time in milliseconds to throttle the stream.
       */
      change(throttleTime = DEFAULT_RESIZE_TIME) {
        return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
      }
      /** Use defaultView of injected document if available or fallback to global window reference */
      _getWindow() {
        return this._document.defaultView || window;
      }
      /** Updates the cached viewport size. */
      _updateViewportSize() {
        const window2 = this._getWindow();
        this._viewportSize = this._platform.isBrowser ? { width: window2.innerWidth, height: window2.innerHeight } : { width: 0, height: 0 };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ViewportRuler, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ViewportRuler, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ViewportRuler, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
    CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
      constructor() {
        super();
      }
      /**
       * Measure the viewport size for the provided orientation.
       *
       * @param orientation The orientation to measure the size from.
       */
      measureViewportSize(orientation) {
        const viewportEl = this.elementRef.nativeElement;
        return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkVirtualScrollable, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkVirtualScrollable, isStandalone: true, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkVirtualScrollable, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
    CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
      elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
        optional: true
      });
      scrollable = inject(VIRTUAL_SCROLLABLE, { optional: true });
      _platform = inject(Platform);
      /** Emits when the viewport is detached from a CdkVirtualForOf. */
      _detachedSubject = new Subject();
      /** Emits when the rendered range changes. */
      _renderedRangeSubject = new Subject();
      /** The direction the viewport scrolls. */
      get orientation() {
        return this._orientation;
      }
      set orientation(orientation) {
        if (this._orientation !== orientation) {
          this._orientation = orientation;
          this._calculateSpacerSize();
        }
      }
      _orientation = "vertical";
      /**
       * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
       * will be removed.
       */
      appendOnly = false;
      // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
      // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
      // depending on how the strategy calculates the scrolled index, it may come at a cost to
      // performance.
      /** Emits when the index of the first element visible in the viewport changes. */
      scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
      /** The element that wraps the rendered content. */
      _contentWrapper;
      /** A stream that emits whenever the rendered range changes. */
      renderedRangeStream = this._renderedRangeSubject;
      /**
       * The total size of all content (in pixels), including content that is not currently rendered.
       */
      _totalContentSize = 0;
      /** A string representing the `style.width` property value to be used for the spacer element. */
      _totalContentWidth = signal("");
      /** A string representing the `style.height` property value to be used for the spacer element. */
      _totalContentHeight = signal("");
      /**
       * The CSS transform applied to the rendered subset of items so that they appear within the bounds
       * of the visible viewport.
       */
      _renderedContentTransform;
      /** The currently rendered range of indices. */
      _renderedRange = { start: 0, end: 0 };
      /** The length of the data bound to this viewport (in number of items). */
      _dataLength = 0;
      /** The size of the viewport (in pixels). */
      _viewportSize = 0;
      /** the currently attached CdkVirtualScrollRepeater. */
      _forOf;
      /** The last rendered content offset that was set. */
      _renderedContentOffset = 0;
      /**
       * Whether the last rendered content offset was to the end of the content (and therefore needs to
       * be rewritten as an offset to the start of the content).
       */
      _renderedContentOffsetNeedsRewrite = false;
      /** Whether there is a pending change detection cycle. */
      _isChangeDetectionPending = false;
      /** A list of functions to run after the next change detection cycle. */
      _runAfterChangeDetection = [];
      /** Subscription to changes in the viewport size. */
      _viewportChanges = Subscription.EMPTY;
      _injector = inject(Injector);
      _isDestroyed = false;
      constructor() {
        super();
        const viewportRuler = inject(ViewportRuler);
        if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        this._viewportChanges = viewportRuler.change().subscribe(() => {
          this.checkViewportSize();
        });
        if (!this.scrollable) {
          this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
          this.scrollable = this;
        }
      }
      ngOnInit() {
        if (!this._platform.isBrowser) {
          return;
        }
        if (this.scrollable === this) {
          super.ngOnInit();
        }
        this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
          this._measureViewportSize();
          this._scrollStrategy.attach(this);
          this.scrollable.elementScrolled().pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            startWith(null),
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            auditTime(0, SCROLL_SCHEDULER),
            // Usually `elementScrolled` is completed when the scrollable is destroyed, but
            // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
            // to unsubscribe here just in case.
            takeUntil(this._destroyed)
          ).subscribe(() => this._scrollStrategy.onContentScrolled());
          this._markChangeDetectionNeeded();
        }));
      }
      ngOnDestroy() {
        this.detach();
        this._scrollStrategy.detach();
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        this._viewportChanges.unsubscribe();
        this._isDestroyed = true;
        super.ngOnDestroy();
      }
      /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
      attach(forOf) {
        if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("CdkVirtualScrollViewport is already attached.");
        }
        this.ngZone.runOutsideAngular(() => {
          this._forOf = forOf;
          this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
            const newLength = data.length;
            if (newLength !== this._dataLength) {
              this._dataLength = newLength;
              this._scrollStrategy.onDataLengthChanged();
            }
            this._doChangeDetection();
          });
        });
      }
      /** Detaches the current `CdkVirtualForOf`. */
      detach() {
        this._forOf = null;
        this._detachedSubject.next();
      }
      /** Gets the length of the data bound to this viewport (in number of items). */
      getDataLength() {
        return this._dataLength;
      }
      /** Gets the size of the viewport (in pixels). */
      getViewportSize() {
        return this._viewportSize;
      }
      // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
      // cycle happens. I'm being careful to only call it after the render cycle is complete and before
      // setting it to something else, but its error prone and should probably be split into
      // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
      /** Get the current rendered range of items. */
      getRenderedRange() {
        return this._renderedRange;
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from];
      }
      /**
       * Sets the total size of all content (in pixels), including content that is not currently
       * rendered.
       */
      setTotalContentSize(size) {
        if (this._totalContentSize !== size) {
          this._totalContentSize = size;
          this._calculateSpacerSize();
          this._markChangeDetectionNeeded();
        }
      }
      /** Sets the currently rendered range of indices. */
      setRenderedRange(range) {
        if (!rangesEqual(this._renderedRange, range)) {
          if (this.appendOnly) {
            range = { start: 0, end: Math.max(this._renderedRange.end, range.end) };
          }
          this._renderedRangeSubject.next(this._renderedRange = range);
          this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
        }
      }
      /**
       * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
       */
      getOffsetToRenderedContentStart() {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
      }
      /**
       * Sets the offset from the start of the viewport to either the start or end of the rendered data
       * (in pixels).
       */
      setRenderedContentOffset(offset, to = "to-start") {
        offset = this.appendOnly && to === "to-start" ? 0 : offset;
        const isRtl = this.dir && this.dir.value == "rtl";
        const isHorizontal = this.orientation == "horizontal";
        const axis = isHorizontal ? "X" : "Y";
        const axisDirection = isHorizontal && isRtl ? -1 : 1;
        let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
        this._renderedContentOffset = offset;
        if (to === "to-end") {
          transform += ` translate${axis}(-100%)`;
          this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
          this._renderedContentTransform = transform;
          this._markChangeDetectionNeeded(() => {
            if (this._renderedContentOffsetNeedsRewrite) {
              this._renderedContentOffset -= this.measureRenderedContentSize();
              this._renderedContentOffsetNeedsRewrite = false;
              this.setRenderedContentOffset(this._renderedContentOffset);
            } else {
              this._scrollStrategy.onRenderedOffsetChanged();
            }
          });
        }
      }
      /**
       * Scrolls to the given offset from the start of the viewport. Please note that this is not always
       * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
       * direction, this would be the equivalent of setting a fictional `scrollRight` property.
       * @param offset The offset to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
       */
      scrollToOffset(offset, behavior = "auto") {
        const options = { behavior };
        if (this.orientation === "horizontal") {
          options.start = offset;
        } else {
          options.top = offset;
        }
        this.scrollable.scrollTo(options);
      }
      /**
       * Scrolls to the offset for the given index.
       * @param index The index of the element to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
       */
      scrollToIndex(index, behavior = "auto") {
        this._scrollStrategy.scrollToIndex(index, behavior);
      }
      /**
       * Gets the current scroll offset from the start of the scrollable (in pixels).
       * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
       *     in horizontal mode.
       */
      measureScrollOffset(from) {
        let measureScrollOffset;
        if (this.scrollable == this) {
          measureScrollOffset = (_from) => super.measureScrollOffset(_from);
        } else {
          measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
        }
        return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
      }
      /**
       * Measures the offset of the viewport from the scrolling container
       * @param from The edge to measure from.
       */
      measureViewportOffset(from) {
        let fromRect;
        const LEFT = "left";
        const RIGHT = "right";
        const isRtl = this.dir?.value == "rtl";
        if (from == "start") {
          fromRect = isRtl ? RIGHT : LEFT;
        } else if (from == "end") {
          fromRect = isRtl ? LEFT : RIGHT;
        } else if (from) {
          fromRect = from;
        } else {
          fromRect = this.orientation === "horizontal" ? "left" : "top";
        }
        const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
        const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
        return viewportClientRect - scrollerClientRect;
      }
      /** Measure the combined size of all of the rendered items. */
      measureRenderedContentSize() {
        const contentEl = this._contentWrapper.nativeElement;
        return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
      }
      /**
       * Measure the total combined size of the given range. Throws if the range includes items that are
       * not rendered.
       */
      measureRangeSize(range) {
        if (!this._forOf) {
          return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
      }
      /** Update the viewport dimensions and re-render. */
      checkViewportSize() {
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
      }
      /** Measure the viewport size. */
      _measureViewportSize() {
        this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
      }
      /** Queue up change detection to run. */
      _markChangeDetectionNeeded(runAfter) {
        if (runAfter) {
          this._runAfterChangeDetection.push(runAfter);
        }
        if (!this._isChangeDetectionPending) {
          this._isChangeDetectionPending = true;
          this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
            this._doChangeDetection();
          }));
        }
      }
      /** Run change detection. */
      _doChangeDetection() {
        if (this._isDestroyed) {
          return;
        }
        this.ngZone.run(() => {
          this._changeDetectorRef.markForCheck();
          this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
          afterNextRender(() => {
            this._isChangeDetectionPending = false;
            const runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];
            for (const fn of runAfterChangeDetection) {
              fn();
            }
          }, { injector: this._injector });
        });
      }
      /** Calculates the `style.width` and `style.height` for the spacer element. */
      _calculateSpacerSize() {
        this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
        this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkVirtualScrollViewport, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _CdkVirtualScrollViewport, isStandalone: true, selector: "cdk-virtual-scroll-viewport", inputs: { orientation: "orientation", appendOnly: ["appendOnly", "appendOnly", booleanAttribute] }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, host: { properties: { "class.cdk-virtual-scroll-orientation-horizontal": 'orientation === "horizontal"', "class.cdk-virtual-scroll-orientation-vertical": 'orientation !== "horizontal"' }, classAttribute: "cdk-virtual-scroll-viewport" }, providers: [
        {
          provide: CdkScrollable,
          useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
          deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
        }
      ], viewQueries: [{ propertyName: "_contentWrapper", first: true, predicate: ["contentWrapper"], descendants: true, static: true }], usesInheritance: true, ngImport: core_exports, template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n', styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkVirtualScrollViewport, decorators: [{
      type: Component,
      args: [{ selector: "cdk-virtual-scroll-viewport", host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        {
          provide: CdkScrollable,
          useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
          deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
        }
      ], template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n', styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"] }]
    }], ctorParameters: () => [], propDecorators: { orientation: [{
      type: Input
    }], appendOnly: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], scrolledIndexChange: [{
      type: Output
    }], _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", { static: true }]
    }] } });
    CdkVirtualForOf = class _CdkVirtualForOf {
      _viewContainerRef = inject(ViewContainerRef);
      _template = inject(TemplateRef);
      _differs = inject(IterableDiffers);
      _viewRepeater = inject(_VIEW_REPEATER_STRATEGY);
      _viewport = inject(CdkVirtualScrollViewport, { skipSelf: true });
      /** Emits when the rendered view of the data changes. */
      viewChange = new Subject();
      /** Subject that emits when a new DataSource instance is given. */
      _dataSourceChanges = new Subject();
      /** The DataSource to display. */
      get cdkVirtualForOf() {
        return this._cdkVirtualForOf;
      }
      set cdkVirtualForOf(value) {
        this._cdkVirtualForOf = value;
        if (isDataSource(value)) {
          this._dataSourceChanges.next(value);
        } else {
          this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
        }
      }
      _cdkVirtualForOf;
      /**
       * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
       * the item and produces a value to be used as the item's identity when tracking changes.
       */
      get cdkVirtualForTrackBy() {
        return this._cdkVirtualForTrackBy;
      }
      set cdkVirtualForTrackBy(fn) {
        this._needsUpdate = true;
        this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
      }
      _cdkVirtualForTrackBy;
      /** The template used to stamp out new elements. */
      set cdkVirtualForTemplate(value) {
        if (value) {
          this._needsUpdate = true;
          this._template = value;
        }
      }
      /**
       * The size of the cache used to store templates that are not being used for re-use later.
       * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
       */
      get cdkVirtualForTemplateCacheSize() {
        return this._viewRepeater.viewCacheSize;
      }
      set cdkVirtualForTemplateCacheSize(size) {
        this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
      }
      /** Emits whenever the data in the current DataSource changes. */
      dataStream = this._dataSourceChanges.pipe(
        // Start off with null `DataSource`.
        startWith(null),
        // Bundle up the previous and current data sources so we can work with both.
        pairwise(),
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
        // Replay the last emitted data when someone subscribes.
        shareReplay(1)
      );
      /** The differ used to calculate changes to the data. */
      _differ = null;
      /** The most recent data emitted from the DataSource. */
      _data;
      /** The currently rendered items. */
      _renderedItems;
      /** The currently rendered range of indices. */
      _renderedRange;
      /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
      _needsUpdate = false;
      _destroyed = new Subject();
      constructor() {
        const ngZone = inject(NgZone);
        this.dataStream.subscribe((data) => {
          this._data = data;
          this._onRenderedDataChange();
        });
        this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
          this._renderedRange = range;
          if (this.viewChange.observers.length) {
            ngZone.run(() => this.viewChange.next(this._renderedRange));
          }
          this._onRenderedDataChange();
        });
        this._viewport.attach(this);
      }
      /**
       * Measures the combined size (width for horizontal orientation, height for vertical) of all items
       * in the specified range. Throws an error if the range includes items that are not currently
       * rendered.
       */
      measureRangeSize(range, orientation) {
        if (range.start >= range.end) {
          return 0;
        }
        if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`Error: attempted to measure an item that isn't rendered.`);
        }
        const renderedStartIndex = range.start - this._renderedRange.start;
        const rangeLen = range.end - range.start;
        let firstNode;
        let lastNode;
        for (let i = 0; i < rangeLen; i++) {
          const view = this._viewContainerRef.get(i + renderedStartIndex);
          if (view && view.rootNodes.length) {
            firstNode = lastNode = view.rootNodes[0];
            break;
          }
        }
        for (let i = rangeLen - 1; i > -1; i--) {
          const view = this._viewContainerRef.get(i + renderedStartIndex);
          if (view && view.rootNodes.length) {
            lastNode = view.rootNodes[view.rootNodes.length - 1];
            break;
          }
        }
        return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
      }
      ngDoCheck() {
        if (this._differ && this._needsUpdate) {
          const changes = this._differ.diff(this._renderedItems);
          if (!changes) {
            this._updateContext();
          } else {
            this._applyChanges(changes);
          }
          this._needsUpdate = false;
        }
      }
      ngOnDestroy() {
        this._viewport.detach();
        this._dataSourceChanges.next(void 0);
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        this._viewRepeater.detach();
      }
      /** React to scroll state changes in the viewport. */
      _onRenderedDataChange() {
        if (!this._renderedRange) {
          return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
          this._differ = this._differs.find(this._renderedItems).create((index, item) => {
            return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
          });
        }
        this._needsUpdate = true;
      }
      /** Swap out one `DataSource` for another. */
      _changeDataSource(oldDs, newDs) {
        if (oldDs) {
          oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs ? newDs.connect(this) : of();
      }
      /** Update the `CdkVirtualForOfContext` for all views. */
      _updateContext() {
        const count = this._data.length;
        let i = this._viewContainerRef.length;
        while (i--) {
          const view = this._viewContainerRef.get(i);
          view.context.index = this._renderedRange.start + i;
          view.context.count = count;
          this._updateComputedContextProperties(view.context);
          view.detectChanges();
        }
      }
      /** Apply changes to the DOM. */
      _applyChanges(changes) {
        this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
        changes.forEachIdentityChange((record) => {
          const view = this._viewContainerRef.get(record.currentIndex);
          view.context.$implicit = record.item;
        });
        const count = this._data.length;
        let i = this._viewContainerRef.length;
        while (i--) {
          const view = this._viewContainerRef.get(i);
          view.context.index = this._renderedRange.start + i;
          view.context.count = count;
          this._updateComputedContextProperties(view.context);
        }
      }
      /** Update the computed properties on the `CdkVirtualForOfContext`. */
      _updateComputedContextProperties(context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
      }
      _getEmbeddedViewArgs(record, index) {
        return {
          templateRef: this._template,
          context: {
            $implicit: record.item,
            // It's guaranteed that the iterable is not "undefined" or "null" because we only
            // generate views for elements if the "cdkVirtualForOf" iterable has elements.
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
          },
          index
        };
      }
      static ngTemplateContextGuard(directive, context) {
        return true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkVirtualForOf, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkVirtualForOf, isStandalone: true, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: { cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate", cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize" }, providers: [{ provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkVirtualForOf, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkVirtualFor][cdkVirtualForOf]",
        providers: [{ provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy }]
      }]
    }], ctorParameters: () => [], propDecorators: { cdkVirtualForOf: [{
      type: Input
    }], cdkVirtualForTrackBy: [{
      type: Input
    }], cdkVirtualForTemplate: [{
      type: Input
    }], cdkVirtualForTemplateCacheSize: [{
      type: Input
    }] } });
    CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
      constructor() {
        super();
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkVirtualScrollableElement, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkVirtualScrollableElement, isStandalone: true, selector: "[cdkVirtualScrollingElement]", host: { classAttribute: "cdk-virtual-scrollable" }, providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: _CdkVirtualScrollableElement }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkVirtualScrollableElement, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkVirtualScrollingElement]",
        providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: CdkVirtualScrollableElement }],
        host: {
          "class": "cdk-virtual-scrollable"
        }
      }]
    }], ctorParameters: () => [] });
    CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
      constructor() {
        super();
        const document2 = inject(DOCUMENT);
        this.elementRef = new ElementRef(document2.documentElement);
        this._scrollElement = document2;
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkVirtualScrollableWindow, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkVirtualScrollableWindow, isStandalone: true, selector: "cdk-virtual-scroll-viewport[scrollWindow]", providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: _CdkVirtualScrollableWindow }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkVirtualScrollableWindow, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-virtual-scroll-viewport[scrollWindow]",
        providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: CdkVirtualScrollableWindow }]
      }]
    }], ctorParameters: () => [] });
    CdkScrollableModule = class _CdkScrollableModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkScrollableModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkScrollableModule, imports: [CdkScrollable], exports: [CdkScrollable] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkScrollableModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkScrollableModule, decorators: [{
      type: NgModule,
      args: [{
        exports: [CdkScrollable],
        imports: [CdkScrollable]
      }]
    }] });
    ScrollingModule = class _ScrollingModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ScrollingModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _ScrollingModule, imports: [
        BidiModule,
        CdkScrollableModule,
        CdkVirtualScrollViewport,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollableWindow,
        CdkVirtualScrollableElement
      ], exports: [
        BidiModule,
        CdkScrollableModule,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        CdkVirtualScrollableWindow,
        CdkVirtualScrollableElement
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ScrollingModule, imports: [
        BidiModule,
        CdkScrollableModule,
        BidiModule,
        CdkScrollableModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ScrollingModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          BidiModule,
          CdkScrollableModule,
          CdkVirtualScrollViewport,
          CdkFixedSizeVirtualScroll,
          CdkVirtualForOf,
          CdkVirtualScrollableWindow,
          CdkVirtualScrollableElement
        ],
        exports: [
          BidiModule,
          CdkScrollableModule,
          CdkFixedSizeVirtualScroll,
          CdkVirtualForOf,
          CdkVirtualScrollViewport,
          CdkVirtualScrollableWindow,
          CdkVirtualScrollableElement
        ]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/portal.mjs
function throwNullPortalError() {
  throw Error("Must provide a portal to attach");
}
function throwPortalAlreadyAttachedError() {
  throw Error("Host already has a portal attached");
}
function throwPortalOutletAlreadyDisposedError() {
  throw Error("This PortalOutlet has already been disposed");
}
function throwUnknownPortalTypeError() {
  throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.");
}
function throwNullPortalOutletError() {
  throw Error("Attempting to attach a portal to a null PortalOutlet");
}
function throwNoPortalAttachedError() {
  throw Error("Attempting to detach a portal that is not attached to a host");
}
var Portal, ComponentPortal, TemplatePortal, DomPortal, BasePortalOutlet, DomPortalOutlet, CdkPortal, TemplatePortalDirective, CdkPortalOutlet, PortalHostDirective, PortalModule;
var init_portal = __esm({
  "node_modules/@angular/cdk/fesm2022/portal.mjs"() {
    "use strict";
    init_core();
    init_core();
    Portal = class {
      _attachedHost;
      /** Attach this portal to a host. */
      attach(host) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (host == null) {
            throwNullPortalOutletError();
          }
          if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }
        }
        this._attachedHost = host;
        return host.attach(this);
      }
      /** Detach this portal from its host */
      detach() {
        let host = this._attachedHost;
        if (host != null) {
          this._attachedHost = null;
          host.detach();
        } else if (typeof ngDevMode === "undefined" || ngDevMode) {
          throwNoPortalAttachedError();
        }
      }
      /** Whether this portal is attached to a host. */
      get isAttached() {
        return this._attachedHost != null;
      }
      /**
       * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
       * the PortalOutlet when it is performing an `attach()` or `detach()`.
       */
      setAttachedHost(host) {
        this._attachedHost = host;
      }
    };
    ComponentPortal = class extends Portal {
      /** The type of the component that will be instantiated for attachment. */
      component;
      /**
       * Where the attached component should live in Angular's *logical* component tree.
       * This is different from where the component *renders*, which is determined by the PortalOutlet.
       * The origin is necessary when the host is outside of the Angular application context.
       */
      viewContainerRef;
      /** Injector used for the instantiation of the component. */
      injector;
      /**
       * List of DOM nodes that should be projected through `<ng-content>` of the attached component.
       */
      projectableNodes;
      constructor(component, viewContainerRef, injector, projectableNodes) {
        super();
        this.component = component;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.projectableNodes = projectableNodes;
      }
    };
    TemplatePortal = class extends Portal {
      templateRef;
      viewContainerRef;
      context;
      injector;
      constructor(templateRef, viewContainerRef, context, injector) {
        super();
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.context = context;
        this.injector = injector;
      }
      get origin() {
        return this.templateRef.elementRef;
      }
      /**
       * Attach the portal to the provided `PortalOutlet`.
       * When a context is provided it will override the `context` property of the `TemplatePortal`
       * instance.
       */
      attach(host, context = this.context) {
        this.context = context;
        return super.attach(host);
      }
      detach() {
        this.context = void 0;
        return super.detach();
      }
    };
    DomPortal = class extends Portal {
      /** DOM node hosting the portal's content. */
      element;
      constructor(element) {
        super();
        this.element = element instanceof ElementRef ? element.nativeElement : element;
      }
    };
    BasePortalOutlet = class {
      /** The portal currently attached to the host. */
      _attachedPortal;
      /** A function that will permanently dispose this host. */
      _disposeFn;
      /** Whether this host has already been permanently disposed. */
      _isDisposed = false;
      /** Whether this host has an attached portal. */
      hasAttached() {
        return !!this._attachedPortal;
      }
      /** Attaches a portal. */
      attach(portal) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!portal) {
            throwNullPortalError();
          }
          if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }
          if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
          }
        }
        if (portal instanceof ComponentPortal) {
          this._attachedPortal = portal;
          return this.attachComponentPortal(portal);
        } else if (portal instanceof TemplatePortal) {
          this._attachedPortal = portal;
          return this.attachTemplatePortal(portal);
        } else if (this.attachDomPortal && portal instanceof DomPortal) {
          this._attachedPortal = portal;
          return this.attachDomPortal(portal);
        }
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          throwUnknownPortalTypeError();
        }
      }
      // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.
      attachDomPortal = null;
      /** Detaches a previously attached portal. */
      detach() {
        if (this._attachedPortal) {
          this._attachedPortal.setAttachedHost(null);
          this._attachedPortal = null;
        }
        this._invokeDisposeFn();
      }
      /** Permanently dispose of this portal host. */
      dispose() {
        if (this.hasAttached()) {
          this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
      }
      /** @docs-private */
      setDisposeFn(fn) {
        this._disposeFn = fn;
      }
      _invokeDisposeFn() {
        if (this._disposeFn) {
          this._disposeFn();
          this._disposeFn = null;
        }
      }
    };
    DomPortalOutlet = class extends BasePortalOutlet {
      outletElement;
      _appRef;
      _defaultInjector;
      /**
       * @param outletElement Element into which the content is projected.
       * @param _appRef Reference to the application. Only used in component portals when there
       *   is no `ViewContainerRef` available.
       * @param _defaultInjector Injector to use as a fallback when the portal being attached doesn't
       *   have one. Only used for component portals.
       */
      constructor(outletElement, _appRef, _defaultInjector) {
        super();
        this.outletElement = outletElement;
        this._appRef = _appRef;
        this._defaultInjector = _defaultInjector;
      }
      /**
       * Attach the given ComponentPortal to DOM element.
       * @param portal Portal to be attached
       * @returns Reference to the created component.
       */
      attachComponentPortal(portal) {
        let componentRef;
        if (portal.viewContainerRef) {
          const injector = portal.injector || portal.viewContainerRef.injector;
          const ngModuleRef = injector.get(NgModuleRef$1, null, { optional: true }) || void 0;
          componentRef = portal.viewContainerRef.createComponent(portal.component, {
            index: portal.viewContainerRef.length,
            injector,
            ngModuleRef,
            projectableNodes: portal.projectableNodes || void 0
          });
          this.setDisposeFn(() => componentRef.destroy());
        } else {
          if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._appRef) {
            throw Error("Cannot attach component portal to outlet without an ApplicationRef.");
          }
          const appRef = this._appRef;
          const elementInjector = portal.injector || this._defaultInjector || Injector.NULL;
          const environmentInjector = elementInjector.get(EnvironmentInjector, appRef.injector);
          componentRef = createComponent(portal.component, {
            elementInjector,
            environmentInjector,
            projectableNodes: portal.projectableNodes || void 0
          });
          appRef.attachView(componentRef.hostView);
          this.setDisposeFn(() => {
            if (appRef.viewCount > 0) {
              appRef.detachView(componentRef.hostView);
            }
            componentRef.destroy();
          });
        }
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        this._attachedPortal = portal;
        return componentRef;
      }
      /**
       * Attaches a template portal to the DOM as an embedded view.
       * @param portal Portal to be attached.
       * @returns Reference to the created embedded view.
       */
      attachTemplatePortal(portal) {
        let viewContainer = portal.viewContainerRef;
        let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, {
          injector: portal.injector
        });
        viewRef.rootNodes.forEach((rootNode) => this.outletElement.appendChild(rootNode));
        viewRef.detectChanges();
        this.setDisposeFn(() => {
          let index = viewContainer.indexOf(viewRef);
          if (index !== -1) {
            viewContainer.remove(index);
          }
        });
        this._attachedPortal = portal;
        return viewRef;
      }
      /**
       * Attaches a DOM portal by transferring its content into the outlet.
       * @param portal Portal to be attached.
       * @deprecated To be turned into a method.
       * @breaking-change 10.0.0
       */
      attachDomPortal = (portal) => {
        const element = portal.element;
        if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("DOM portal content must be attached to a parent node.");
        }
        const anchorNode = this.outletElement.ownerDocument.createComment("dom-portal");
        element.parentNode.insertBefore(anchorNode, element);
        this.outletElement.appendChild(element);
        this._attachedPortal = portal;
        super.setDisposeFn(() => {
          if (anchorNode.parentNode) {
            anchorNode.parentNode.replaceChild(element, anchorNode);
          }
        });
      };
      /**
       * Clears out a portal from the DOM.
       */
      dispose() {
        super.dispose();
        this.outletElement.remove();
      }
      /** Gets the root HTMLElement for an instantiated component. */
      _getComponentRootNode(componentRef) {
        return componentRef.hostView.rootNodes[0];
      }
    };
    CdkPortal = class _CdkPortal extends TemplatePortal {
      constructor() {
        const templateRef = inject(TemplateRef);
        const viewContainerRef = inject(ViewContainerRef);
        super(templateRef, viewContainerRef);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkPortal, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkPortal, isStandalone: true, selector: "[cdkPortal]", exportAs: ["cdkPortal"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkPortal, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkPortal]",
        exportAs: "cdkPortal"
      }]
    }], ctorParameters: () => [] });
    TemplatePortalDirective = class _TemplatePortalDirective extends CdkPortal {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _TemplatePortalDirective, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _TemplatePortalDirective, isStandalone: true, selector: "[cdk-portal], [portal]", providers: [
        {
          provide: CdkPortal,
          useExisting: _TemplatePortalDirective
        }
      ], exportAs: ["cdkPortal"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: TemplatePortalDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-portal], [portal]",
        exportAs: "cdkPortal",
        providers: [
          {
            provide: CdkPortal,
            useExisting: TemplatePortalDirective
          }
        ]
      }]
    }] });
    CdkPortalOutlet = class _CdkPortalOutlet extends BasePortalOutlet {
      _moduleRef = inject(NgModuleRef$1, { optional: true });
      _document = inject(DOCUMENT);
      _viewContainerRef = inject(ViewContainerRef);
      /** Whether the portal component is initialized. */
      _isInitialized = false;
      /** Reference to the currently-attached component/view ref. */
      _attachedRef;
      constructor() {
        super();
      }
      /** Portal associated with the Portal outlet. */
      get portal() {
        return this._attachedPortal;
      }
      set portal(portal) {
        if (this.hasAttached() && !portal && !this._isInitialized) {
          return;
        }
        if (this.hasAttached()) {
          super.detach();
        }
        if (portal) {
          super.attach(portal);
        }
        this._attachedPortal = portal || null;
      }
      /** Emits when a portal is attached to the outlet. */
      attached = new EventEmitter();
      /** Component or view reference that is attached to the portal. */
      get attachedRef() {
        return this._attachedRef;
      }
      ngOnInit() {
        this._isInitialized = true;
      }
      ngOnDestroy() {
        super.dispose();
        this._attachedRef = this._attachedPortal = null;
      }
      /**
       * Attach the given ComponentPortal to this PortalOutlet.
       *
       * @param portal Portal to be attached to the portal outlet.
       * @returns Reference to the created component.
       */
      attachComponentPortal(portal) {
        portal.setAttachedHost(this);
        const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
        const ref = viewContainerRef.createComponent(portal.component, {
          index: viewContainerRef.length,
          injector: portal.injector || viewContainerRef.injector,
          projectableNodes: portal.projectableNodes || void 0,
          ngModuleRef: this._moduleRef || void 0
        });
        if (viewContainerRef !== this._viewContainerRef) {
          this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
        }
        super.setDisposeFn(() => ref.destroy());
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
      }
      /**
       * Attach the given TemplatePortal to this PortalHost as an embedded View.
       * @param portal Portal to be attached.
       * @returns Reference to the created embedded view.
       */
      attachTemplatePortal(portal) {
        portal.setAttachedHost(this);
        const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, {
          injector: portal.injector
        });
        super.setDisposeFn(() => this._viewContainerRef.clear());
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
      }
      /**
       * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
       * @param portal Portal to be attached.
       * @deprecated To be turned into a method.
       * @breaking-change 10.0.0
       */
      attachDomPortal = (portal) => {
        const element = portal.element;
        if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("DOM portal content must be attached to a parent node.");
        }
        const anchorNode = this._document.createComment("dom-portal");
        portal.setAttachedHost(this);
        element.parentNode.insertBefore(anchorNode, element);
        this._getRootNode().appendChild(element);
        this._attachedPortal = portal;
        super.setDisposeFn(() => {
          if (anchorNode.parentNode) {
            anchorNode.parentNode.replaceChild(element, anchorNode);
          }
        });
      };
      /** Gets the root node of the portal outlet. */
      _getRootNode() {
        const nativeElement = this._viewContainerRef.element.nativeElement;
        return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkPortalOutlet, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkPortalOutlet, isStandalone: true, selector: "[cdkPortalOutlet]", inputs: { portal: ["cdkPortalOutlet", "portal"] }, outputs: { attached: "attached" }, exportAs: ["cdkPortalOutlet"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkPortalOutlet, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkPortalOutlet]",
        exportAs: "cdkPortalOutlet"
      }]
    }], ctorParameters: () => [], propDecorators: { portal: [{
      type: Input,
      args: ["cdkPortalOutlet"]
    }], attached: [{
      type: Output
    }] } });
    PortalHostDirective = class _PortalHostDirective extends CdkPortalOutlet {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _PortalHostDirective, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _PortalHostDirective, isStandalone: true, selector: "[cdkPortalHost], [portalHost]", inputs: { portal: ["cdkPortalHost", "portal"] }, providers: [
        {
          provide: CdkPortalOutlet,
          useExisting: _PortalHostDirective
        }
      ], exportAs: ["cdkPortalHost"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: PortalHostDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkPortalHost], [portalHost]",
        exportAs: "cdkPortalHost",
        inputs: [{ name: "portal", alias: "cdkPortalHost" }],
        providers: [
          {
            provide: CdkPortalOutlet,
            useExisting: PortalHostDirective
          }
        ]
      }]
    }] });
    PortalModule = class _PortalModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _PortalModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _PortalModule, imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective], exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _PortalModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: PortalModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
        exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/id-generator-LuoRZSid.mjs
var counters, _IdGenerator;
var init_id_generator_LuoRZSid = __esm({
  "node_modules/@angular/cdk/fesm2022/id-generator-LuoRZSid.mjs"() {
    "use strict";
    init_core();
    init_core();
    counters = {};
    _IdGenerator = class __IdGenerator {
      _appId = inject(APP_ID);
      /**
       * Generates a unique ID with a specific prefix.
       * @param prefix Prefix to add to the ID.
       */
      getId(prefix) {
        if (this._appId !== "ng") {
          prefix += this._appId;
        }
        if (!counters.hasOwnProperty(prefix)) {
          counters[prefix] = 0;
        }
        return `${prefix}${counters[prefix]++}`;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __IdGenerator, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __IdGenerator, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _IdGenerator, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/keycodes-CpHkExLC.mjs
var ESCAPE;
var init_keycodes_CpHkExLC = __esm({
  "node_modules/@angular/cdk/fesm2022/keycodes-CpHkExLC.mjs"() {
    "use strict";
    ESCAPE = 27;
  }
});

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
var init_keycodes = __esm({
  "node_modules/@angular/cdk/fesm2022/keycodes.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/overlay-module-Bd2UplUU.mjs
function createBlockScrollStrategy(injector) {
  return new BlockScrollStrategy(injector.get(ViewportRuler), injector.get(DOCUMENT));
}
function getMatScrollStrategyAlreadyAttachedError() {
  return Error(`Scroll strategy has already been attached.`);
}
function createCloseScrollStrategy(injector, config) {
  return new CloseScrollStrategy(injector.get(ScrollDispatcher), injector.get(NgZone), injector.get(ViewportRuler), config);
}
function isElementScrolledOutsideView(element, scrollContainers) {
  return scrollContainers.some((containerBounds) => {
    const outsideAbove = element.bottom < containerBounds.top;
    const outsideBelow = element.top > containerBounds.bottom;
    const outsideLeft = element.right < containerBounds.left;
    const outsideRight = element.left > containerBounds.right;
    return outsideAbove || outsideBelow || outsideLeft || outsideRight;
  });
}
function isElementClippedByScrolling(element, scrollContainers) {
  return scrollContainers.some((scrollContainerRect) => {
    const clippedAbove = element.top < scrollContainerRect.top;
    const clippedBelow = element.bottom > scrollContainerRect.bottom;
    const clippedLeft = element.left < scrollContainerRect.left;
    const clippedRight = element.right > scrollContainerRect.right;
    return clippedAbove || clippedBelow || clippedLeft || clippedRight;
  });
}
function createRepositionScrollStrategy(injector, config) {
  return new RepositionScrollStrategy(injector.get(ScrollDispatcher), injector.get(ViewportRuler), injector.get(NgZone), config);
}
function validateVerticalPosition(property, value) {
  if (value !== "top" && value !== "bottom" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "top", "bottom" or "center".`);
  }
}
function validateHorizontalPosition(property, value) {
  if (value !== "start" && value !== "end" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "start", "end" or "center".`);
  }
}
function containsPierceShadowDom(parent, child) {
  const supportsShadowRoot = typeof ShadowRoot !== "undefined" && ShadowRoot;
  let current = child;
  while (current) {
    if (current === parent) {
      return true;
    }
    current = supportsShadowRoot && current instanceof ShadowRoot ? current.host : current.parentNode;
  }
  return false;
}
function createFlexibleConnectedPositionStrategy(injector, origin) {
  return new FlexibleConnectedPositionStrategy(origin, injector.get(ViewportRuler), injector.get(DOCUMENT), injector.get(Platform), injector.get(OverlayContainer));
}
function extendStyles(destination, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}
function getPixelValue(input) {
  if (typeof input !== "number" && input != null) {
    const [value, units] = input.split(cssUnitPattern);
    return !units || units === "px" ? parseFloat(value) : null;
  }
  return input || null;
}
function getRoundedBoundingClientRect(clientRect) {
  return {
    top: Math.floor(clientRect.top),
    right: Math.floor(clientRect.right),
    bottom: Math.floor(clientRect.bottom),
    left: Math.floor(clientRect.left),
    width: Math.floor(clientRect.width),
    height: Math.floor(clientRect.height)
  };
}
function compareScrollVisibility(a, b) {
  if (a === b) {
    return true;
  }
  return a.isOriginClipped === b.isOriginClipped && a.isOriginOutsideView === b.isOriginOutsideView && a.isOverlayClipped === b.isOverlayClipped && a.isOverlayOutsideView === b.isOverlayOutsideView;
}
function createGlobalPositionStrategy(_injector) {
  return new GlobalPositionStrategy();
}
function createOverlayRef(injector, config) {
  injector.get(_CdkPrivateStyleLoader).load(_CdkOverlayStyleLoader);
  const overlayContainer = injector.get(OverlayContainer);
  const doc = injector.get(DOCUMENT);
  const idGenerator = injector.get(_IdGenerator);
  const appRef = injector.get(ApplicationRef);
  const directionality = injector.get(Directionality);
  const host = doc.createElement("div");
  const pane = doc.createElement("div");
  pane.id = idGenerator.getId("cdk-overlay-");
  pane.classList.add("cdk-overlay-pane");
  host.appendChild(pane);
  overlayContainer.getContainerElement().appendChild(host);
  const portalOutlet = new DomPortalOutlet(pane, appRef, injector);
  const overlayConfig = new OverlayConfig(config);
  const renderer = injector.get(Renderer2, null, { optional: true }) || injector.get(RendererFactory2).createRenderer(null, null);
  overlayConfig.direction = overlayConfig.direction || directionality.value;
  return new OverlayRef(portalOutlet, host, pane, overlayConfig, injector.get(NgZone), injector.get(OverlayKeyboardDispatcher), doc, injector.get(Location), injector.get(OverlayOutsideClickDispatcher), config?.disableAnimations ?? injector.get(ANIMATION_MODULE_TYPE, null, { optional: true }) === "NoopAnimations", injector.get(EnvironmentInjector), renderer);
}
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var scrollBehaviorSupported, BlockScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, RepositionScrollStrategy, ScrollStrategyOptions, OverlayConfig, ConnectedOverlayPositionChange, BaseOverlayDispatcher, OverlayKeyboardDispatcher, OverlayOutsideClickDispatcher, _CdkOverlayStyleLoader, OverlayContainer, BackdropRef, OverlayRef, boundingBoxClass, cssUnitPattern, FlexibleConnectedPositionStrategy, wrapperClass, GlobalPositionStrategy, OverlayPositionBuilder, Overlay, defaultPositionList, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY, CdkOverlayOrigin, CdkConnectedOverlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER, OverlayModule;
var init_overlay_module_Bd2UplUU = __esm({
  "node_modules/@angular/cdk/fesm2022/overlay-module-Bd2UplUU.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_platform_DNDzkVcI();
    init_shadow_dom_B0oHn41l();
    init_test_environment_CT0XxPyp();
    init_style_loader_B2sGQXxD();
    init_esm();
    init_css_pixel_value_C_HEqLhI();
    init_array_I1yfCXUO();
    init_scrolling();
    init_portal();
    init_scrolling_BkvA05C8();
    init_operators();
    init_id_generator_LuoRZSid();
    init_directionality_CChdj3az();
    init_keycodes_CpHkExLC();
    init_keycodes();
    init_bidi();
    scrollBehaviorSupported = supportsScrollBehavior();
    BlockScrollStrategy = class {
      _viewportRuler;
      _previousHTMLStyles = { top: "", left: "" };
      _previousScrollPosition;
      _isEnabled = false;
      _document;
      constructor(_viewportRuler, document2) {
        this._viewportRuler = _viewportRuler;
        this._document = document2;
      }
      /** Attaches this scroll strategy to an overlay. */
      attach() {
      }
      /** Blocks page-level scroll while the attached overlay is open. */
      enable() {
        if (this._canBeEnabled()) {
          const root = this._document.documentElement;
          this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
          this._previousHTMLStyles.left = root.style.left || "";
          this._previousHTMLStyles.top = root.style.top || "";
          root.style.left = coerceCssPixelValue(-this._previousScrollPosition.left);
          root.style.top = coerceCssPixelValue(-this._previousScrollPosition.top);
          root.classList.add("cdk-global-scrollblock");
          this._isEnabled = true;
        }
      }
      /** Unblocks page-level scroll while the attached overlay is open. */
      disable() {
        if (this._isEnabled) {
          const html = this._document.documentElement;
          const body = this._document.body;
          const htmlStyle = html.style;
          const bodyStyle = body.style;
          const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || "";
          const previousBodyScrollBehavior = bodyStyle.scrollBehavior || "";
          this._isEnabled = false;
          htmlStyle.left = this._previousHTMLStyles.left;
          htmlStyle.top = this._previousHTMLStyles.top;
          html.classList.remove("cdk-global-scrollblock");
          if (scrollBehaviorSupported) {
            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = "auto";
          }
          window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
          if (scrollBehaviorSupported) {
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
          }
        }
      }
      _canBeEnabled() {
        const html = this._document.documentElement;
        if (html.classList.contains("cdk-global-scrollblock") || this._isEnabled) {
          return false;
        }
        const rootElement = this._document.documentElement;
        const viewport = this._viewportRuler.getViewportSize();
        return rootElement.scrollHeight > viewport.height || rootElement.scrollWidth > viewport.width;
      }
    };
    CloseScrollStrategy = class {
      _scrollDispatcher;
      _ngZone;
      _viewportRuler;
      _config;
      _scrollSubscription = null;
      _overlayRef;
      _initialScrollPosition;
      constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
      }
      /** Attaches this scroll strategy to an overlay. */
      attach(overlayRef) {
        if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
      }
      /** Enables the closing of the attached overlay on scroll. */
      enable() {
        if (this._scrollSubscription) {
          return;
        }
        const stream = this._scrollDispatcher.scrolled(0).pipe(filter((scrollable) => {
          return !scrollable || !this._overlayRef.overlayElement.contains(scrollable.getElementRef().nativeElement);
        }));
        if (this._config && this._config.threshold && this._config.threshold > 1) {
          this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
          this._scrollSubscription = stream.subscribe(() => {
            const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
              this._detach();
            } else {
              this._overlayRef.updatePosition();
            }
          });
        } else {
          this._scrollSubscription = stream.subscribe(this._detach);
        }
      }
      /** Disables the closing the attached overlay on scroll. */
      disable() {
        if (this._scrollSubscription) {
          this._scrollSubscription.unsubscribe();
          this._scrollSubscription = null;
        }
      }
      detach() {
        this.disable();
        this._overlayRef = null;
      }
      /** Detaches the overlay ref and disables the scroll strategy. */
      _detach = () => {
        this.disable();
        if (this._overlayRef.hasAttached()) {
          this._ngZone.run(() => this._overlayRef.detach());
        }
      };
    };
    NoopScrollStrategy = class {
      /** Does nothing, as this scroll strategy is a no-op. */
      enable() {
      }
      /** Does nothing, as this scroll strategy is a no-op. */
      disable() {
      }
      /** Does nothing, as this scroll strategy is a no-op. */
      attach() {
      }
    };
    RepositionScrollStrategy = class {
      _scrollDispatcher;
      _viewportRuler;
      _ngZone;
      _config;
      _scrollSubscription = null;
      _overlayRef;
      constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
      }
      /** Attaches this scroll strategy to an overlay. */
      attach(overlayRef) {
        if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
      }
      /** Enables repositioning of the attached overlay on scroll. */
      enable() {
        if (!this._scrollSubscription) {
          const throttle = this._config ? this._config.scrollThrottle : 0;
          this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
            this._overlayRef.updatePosition();
            if (this._config && this._config.autoClose) {
              const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
              const { width, height } = this._viewportRuler.getViewportSize();
              const parentRects = [{ width, height, bottom: height, right: width, top: 0, left: 0 }];
              if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                this.disable();
                this._ngZone.run(() => this._overlayRef.detach());
              }
            }
          });
        }
      }
      /** Disables repositioning of the attached overlay on scroll. */
      disable() {
        if (this._scrollSubscription) {
          this._scrollSubscription.unsubscribe();
          this._scrollSubscription = null;
        }
      }
      detach() {
        this.disable();
        this._overlayRef = null;
      }
    };
    ScrollStrategyOptions = class _ScrollStrategyOptions {
      _injector = inject(Injector);
      constructor() {
      }
      /** Do nothing on scroll. */
      noop = () => new NoopScrollStrategy();
      /**
       * Close the overlay as soon as the user scrolls.
       * @param config Configuration to be used inside the scroll strategy.
       */
      close = (config) => createCloseScrollStrategy(this._injector, config);
      /** Block scrolling. */
      block = () => createBlockScrollStrategy(this._injector);
      /**
       * Update the overlay's position on scroll.
       * @param config Configuration to be used inside the scroll strategy.
       * Allows debouncing the reposition calls.
       */
      reposition = (config) => createRepositionScrollStrategy(this._injector, config);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ScrollStrategyOptions, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ScrollStrategyOptions, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ScrollStrategyOptions, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    OverlayConfig = class {
      /** Strategy with which to position the overlay. */
      positionStrategy;
      /** Strategy to be used when handling scroll events while the overlay is open. */
      scrollStrategy = new NoopScrollStrategy();
      /** Custom class to add to the overlay pane. */
      panelClass = "";
      /** Whether the overlay has a backdrop. */
      hasBackdrop = false;
      /** Custom class to add to the backdrop */
      backdropClass = "cdk-overlay-dark-backdrop";
      /** Whether to disable any built-in animations. */
      disableAnimations;
      /** The width of the overlay panel. If a number is provided, pixel units are assumed. */
      width;
      /** The height of the overlay panel. If a number is provided, pixel units are assumed. */
      height;
      /** The min-width of the overlay panel. If a number is provided, pixel units are assumed. */
      minWidth;
      /** The min-height of the overlay panel. If a number is provided, pixel units are assumed. */
      minHeight;
      /** The max-width of the overlay panel. If a number is provided, pixel units are assumed. */
      maxWidth;
      /** The max-height of the overlay panel. If a number is provided, pixel units are assumed. */
      maxHeight;
      /**
       * Direction of the text in the overlay panel. If a `Directionality` instance
       * is passed in, the overlay will handle changes to its value automatically.
       */
      direction;
      /**
       * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */
      disposeOnNavigation = false;
      constructor(config) {
        if (config) {
          const configKeys = Object.keys(config);
          for (const key of configKeys) {
            if (config[key] !== void 0) {
              this[key] = config[key];
            }
          }
        }
      }
    };
    ConnectedOverlayPositionChange = class {
      connectionPair;
      scrollableViewProperties;
      constructor(connectionPair, scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
      }
    };
    BaseOverlayDispatcher = class _BaseOverlayDispatcher {
      /** Currently attached overlays in the order they were attached. */
      _attachedOverlays = [];
      _document = inject(DOCUMENT);
      _isAttached;
      constructor() {
      }
      ngOnDestroy() {
        this.detach();
      }
      /** Add a new overlay to the list of attached overlay refs. */
      add(overlayRef) {
        this.remove(overlayRef);
        this._attachedOverlays.push(overlayRef);
      }
      /** Remove an overlay from the list of attached overlay refs. */
      remove(overlayRef) {
        const index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
          this._attachedOverlays.splice(index, 1);
        }
        if (this._attachedOverlays.length === 0) {
          this.detach();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BaseOverlayDispatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BaseOverlayDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: BaseOverlayDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    OverlayKeyboardDispatcher = class _OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
      _ngZone = inject(NgZone);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _cleanupKeydown;
      /** Add a new overlay to the list of attached overlay refs. */
      add(overlayRef) {
        super.add(overlayRef);
        if (!this._isAttached) {
          this._ngZone.runOutsideAngular(() => {
            this._cleanupKeydown = this._renderer.listen("body", "keydown", this._keydownListener);
          });
          this._isAttached = true;
        }
      }
      /** Detaches the global keyboard event listener. */
      detach() {
        if (this._isAttached) {
          this._cleanupKeydown?.();
          this._isAttached = false;
        }
      }
      /** Keyboard event listener that will be attached to the body. */
      _keydownListener = (event) => {
        const overlays = this._attachedOverlays;
        for (let i = overlays.length - 1; i > -1; i--) {
          if (overlays[i]._keydownEvents.observers.length > 0) {
            this._ngZone.run(() => overlays[i]._keydownEvents.next(event));
            break;
          }
        }
      };
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _OverlayKeyboardDispatcher, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _OverlayKeyboardDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: OverlayKeyboardDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    OverlayOutsideClickDispatcher = class _OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
      _platform = inject(Platform);
      _ngZone = inject(NgZone);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _cursorOriginalValue;
      _cursorStyleIsSet = false;
      _pointerDownEventTarget;
      _cleanups;
      /** Add a new overlay to the list of attached overlay refs. */
      add(overlayRef) {
        super.add(overlayRef);
        if (!this._isAttached) {
          const body = this._document.body;
          const eventOptions = { capture: true };
          const renderer = this._renderer;
          this._cleanups = this._ngZone.runOutsideAngular(() => [
            renderer.listen(body, "pointerdown", this._pointerDownListener, eventOptions),
            renderer.listen(body, "click", this._clickListener, eventOptions),
            renderer.listen(body, "auxclick", this._clickListener, eventOptions),
            renderer.listen(body, "contextmenu", this._clickListener, eventOptions)
          ]);
          if (this._platform.IOS && !this._cursorStyleIsSet) {
            this._cursorOriginalValue = body.style.cursor;
            body.style.cursor = "pointer";
            this._cursorStyleIsSet = true;
          }
          this._isAttached = true;
        }
      }
      /** Detaches the global keyboard event listener. */
      detach() {
        if (this._isAttached) {
          this._cleanups?.forEach((cleanup) => cleanup());
          this._cleanups = void 0;
          if (this._platform.IOS && this._cursorStyleIsSet) {
            this._document.body.style.cursor = this._cursorOriginalValue;
            this._cursorStyleIsSet = false;
          }
          this._isAttached = false;
        }
      }
      /** Store pointerdown event target to track origin of click. */
      _pointerDownListener = (event) => {
        this._pointerDownEventTarget = _getEventTarget(event);
      };
      /** Click event listener that will be attached to the body propagate phase. */
      _clickListener = (event) => {
        const target = _getEventTarget(event);
        const origin = event.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : target;
        this._pointerDownEventTarget = null;
        const overlays = this._attachedOverlays.slice();
        for (let i = overlays.length - 1; i > -1; i--) {
          const overlayRef = overlays[i];
          if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
            continue;
          }
          if (containsPierceShadowDom(overlayRef.overlayElement, target) || containsPierceShadowDom(overlayRef.overlayElement, origin)) {
            break;
          }
          const outsidePointerEvents = overlayRef._outsidePointerEvents;
          if (this._ngZone) {
            this._ngZone.run(() => outsidePointerEvents.next(event));
          } else {
            outsidePointerEvents.next(event);
          }
        }
      };
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _OverlayOutsideClickDispatcher, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _OverlayOutsideClickDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: OverlayOutsideClickDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    _CdkOverlayStyleLoader = class __CdkOverlayStyleLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __CdkOverlayStyleLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: __CdkOverlayStyleLoader, isStandalone: true, selector: "ng-component", host: { attributes: { "cdk-overlay-style-loader": "" } }, ngImport: core_exports, template: "", isInline: true, styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkOverlayStyleLoader, decorators: [{
      type: Component,
      args: [{ template: "", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: { "cdk-overlay-style-loader": "" }, styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n"] }]
    }] });
    OverlayContainer = class _OverlayContainer {
      _platform = inject(Platform);
      _containerElement;
      _document = inject(DOCUMENT);
      _styleLoader = inject(_CdkPrivateStyleLoader);
      constructor() {
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      /**
       * This method returns the overlay container element. It will lazily
       * create the element the first time it is called to facilitate using
       * the container in non-browser environments.
       * @returns the container element
       */
      getContainerElement() {
        this._loadStyles();
        if (!this._containerElement) {
          this._createContainer();
        }
        return this._containerElement;
      }
      /**
       * Create the overlay container element, which is simply a div
       * with the 'cdk-overlay-container' class on the document body.
       */
      _createContainer() {
        const containerClass = "cdk-overlay-container";
        if (this._platform.isBrowser || _isTestEnvironment()) {
          const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], .${containerClass}[platform="test"]`);
          for (let i = 0; i < oppositePlatformContainers.length; i++) {
            oppositePlatformContainers[i].remove();
          }
        }
        const container = this._document.createElement("div");
        container.classList.add(containerClass);
        if (_isTestEnvironment()) {
          container.setAttribute("platform", "test");
        } else if (!this._platform.isBrowser) {
          container.setAttribute("platform", "server");
        }
        this._document.body.appendChild(container);
        this._containerElement = container;
      }
      /** Loads the structural styles necessary for the overlay to work. */
      _loadStyles() {
        this._styleLoader.load(_CdkOverlayStyleLoader);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _OverlayContainer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _OverlayContainer, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: OverlayContainer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    BackdropRef = class {
      _renderer;
      _ngZone;
      element;
      _cleanupClick;
      _cleanupTransitionEnd;
      _fallbackTimeout;
      constructor(document2, _renderer, _ngZone, onClick) {
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this.element = document2.createElement("div");
        this.element.classList.add("cdk-overlay-backdrop");
        this._cleanupClick = _renderer.listen(this.element, "click", onClick);
      }
      detach() {
        this._ngZone.runOutsideAngular(() => {
          const element = this.element;
          clearTimeout(this._fallbackTimeout);
          this._cleanupTransitionEnd?.();
          this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this.dispose);
          this._fallbackTimeout = setTimeout(this.dispose, 500);
          element.style.pointerEvents = "none";
          element.classList.remove("cdk-overlay-backdrop-showing");
        });
      }
      dispose = () => {
        clearTimeout(this._fallbackTimeout);
        this._cleanupClick?.();
        this._cleanupTransitionEnd?.();
        this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = void 0;
        this.element.remove();
      };
    };
    OverlayRef = class {
      _portalOutlet;
      _host;
      _pane;
      _config;
      _ngZone;
      _keyboardDispatcher;
      _document;
      _location;
      _outsideClickDispatcher;
      _animationsDisabled;
      _injector;
      _renderer;
      _backdropClick = new Subject();
      _attachments = new Subject();
      _detachments = new Subject();
      _positionStrategy;
      _scrollStrategy;
      _locationChanges = Subscription.EMPTY;
      _backdropRef = null;
      _detachContentMutationObserver;
      _detachContentAfterRenderRef;
      /**
       * Reference to the parent of the `_host` at the time it was detached. Used to restore
       * the `_host` to its original position in the DOM when it gets re-attached.
       */
      _previousHostParent;
      /** Stream of keydown events dispatched to this overlay. */
      _keydownEvents = new Subject();
      /** Stream of mouse outside events dispatched to this overlay. */
      _outsidePointerEvents = new Subject();
      /** Reference to the currently-running `afterNextRender` call. */
      _afterNextRenderRef;
      constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher, _animationsDisabled = false, _injector, _renderer) {
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._outsideClickDispatcher = _outsideClickDispatcher;
        this._animationsDisabled = _animationsDisabled;
        this._injector = _injector;
        this._renderer = _renderer;
        if (_config.scrollStrategy) {
          this._scrollStrategy = _config.scrollStrategy;
          this._scrollStrategy.attach(this);
        }
        this._positionStrategy = _config.positionStrategy;
      }
      /** The overlay's HTML element */
      get overlayElement() {
        return this._pane;
      }
      /** The overlay's backdrop HTML element. */
      get backdropElement() {
        return this._backdropRef?.element || null;
      }
      /**
       * Wrapper around the panel element. Can be used for advanced
       * positioning where a wrapper with specific styling is
       * required around the overlay pane.
       */
      get hostElement() {
        return this._host;
      }
      /**
       * Attaches content, given via a Portal, to the overlay.
       * If the overlay is configured to have a backdrop, it will be created.
       *
       * @param portal Portal instance to which to attach the overlay.
       * @returns The portal attachment result.
       */
      attach(portal) {
        if (!this._host.parentElement && this._previousHostParent) {
          this._previousHostParent.appendChild(this._host);
        }
        const attachResult = this._portalOutlet.attach(portal);
        if (this._positionStrategy) {
          this._positionStrategy.attach(this);
        }
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._scrollStrategy) {
          this._scrollStrategy.enable();
        }
        this._afterNextRenderRef?.destroy();
        this._afterNextRenderRef = afterNextRender(() => {
          if (this.hasAttached()) {
            this.updatePosition();
          }
        }, { injector: this._injector });
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
          this._attachBackdrop();
        }
        if (this._config.panelClass) {
          this._toggleClasses(this._pane, this._config.panelClass, true);
        }
        this._attachments.next();
        this._completeDetachContent();
        this._keyboardDispatcher.add(this);
        if (this._config.disposeOnNavigation) {
          this._locationChanges = this._location.subscribe(() => this.dispose());
        }
        this._outsideClickDispatcher.add(this);
        if (typeof attachResult?.onDestroy === "function") {
          attachResult.onDestroy(() => {
            if (this.hasAttached()) {
              this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
            }
          });
        }
        return attachResult;
      }
      /**
       * Detaches an overlay from a portal.
       * @returns The portal detachment result.
       */
      detach() {
        if (!this.hasAttached()) {
          return;
        }
        this.detachBackdrop();
        this._togglePointerEvents(false);
        if (this._positionStrategy && this._positionStrategy.detach) {
          this._positionStrategy.detach();
        }
        if (this._scrollStrategy) {
          this._scrollStrategy.disable();
        }
        const detachmentResult = this._portalOutlet.detach();
        this._detachments.next();
        this._completeDetachContent();
        this._keyboardDispatcher.remove(this);
        this._detachContentWhenEmpty();
        this._locationChanges.unsubscribe();
        this._outsideClickDispatcher.remove(this);
        return detachmentResult;
      }
      /** Cleans up the overlay from the DOM. */
      dispose() {
        const isAttached = this.hasAttached();
        if (this._positionStrategy) {
          this._positionStrategy.dispose();
        }
        this._disposeScrollStrategy();
        this._backdropRef?.dispose();
        this._locationChanges.unsubscribe();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        this._outsidePointerEvents.complete();
        this._outsideClickDispatcher.remove(this);
        this._host?.remove();
        this._afterNextRenderRef?.destroy();
        this._previousHostParent = this._pane = this._host = this._backdropRef = null;
        if (isAttached) {
          this._detachments.next();
        }
        this._detachments.complete();
        this._completeDetachContent();
      }
      /** Whether the overlay has attached content. */
      hasAttached() {
        return this._portalOutlet.hasAttached();
      }
      /** Gets an observable that emits when the backdrop has been clicked. */
      backdropClick() {
        return this._backdropClick;
      }
      /** Gets an observable that emits when the overlay has been attached. */
      attachments() {
        return this._attachments;
      }
      /** Gets an observable that emits when the overlay has been detached. */
      detachments() {
        return this._detachments;
      }
      /** Gets an observable of keydown events targeted to this overlay. */
      keydownEvents() {
        return this._keydownEvents;
      }
      /** Gets an observable of pointer events targeted outside this overlay. */
      outsidePointerEvents() {
        return this._outsidePointerEvents;
      }
      /** Gets the current overlay configuration, which is immutable. */
      getConfig() {
        return this._config;
      }
      /** Updates the position of the overlay based on the position strategy. */
      updatePosition() {
        if (this._positionStrategy) {
          this._positionStrategy.apply();
        }
      }
      /** Switches to a new position strategy and updates the overlay position. */
      updatePositionStrategy(strategy) {
        if (strategy === this._positionStrategy) {
          return;
        }
        if (this._positionStrategy) {
          this._positionStrategy.dispose();
        }
        this._positionStrategy = strategy;
        if (this.hasAttached()) {
          strategy.attach(this);
          this.updatePosition();
        }
      }
      /** Update the size properties of the overlay. */
      updateSize(sizeConfig) {
        this._config = __spreadValues(__spreadValues({}, this._config), sizeConfig);
        this._updateElementSize();
      }
      /** Sets the LTR/RTL direction for the overlay. */
      setDirection(dir) {
        this._config = __spreadProps(__spreadValues({}, this._config), { direction: dir });
        this._updateElementDirection();
      }
      /** Add a CSS class or an array of classes to the overlay pane. */
      addPanelClass(classes) {
        if (this._pane) {
          this._toggleClasses(this._pane, classes, true);
        }
      }
      /** Remove a CSS class or an array of classes from the overlay pane. */
      removePanelClass(classes) {
        if (this._pane) {
          this._toggleClasses(this._pane, classes, false);
        }
      }
      /**
       * Returns the layout direction of the overlay panel.
       */
      getDirection() {
        const direction = this._config.direction;
        if (!direction) {
          return "ltr";
        }
        return typeof direction === "string" ? direction : direction.value;
      }
      /** Switches to a new scroll strategy. */
      updateScrollStrategy(strategy) {
        if (strategy === this._scrollStrategy) {
          return;
        }
        this._disposeScrollStrategy();
        this._scrollStrategy = strategy;
        if (this.hasAttached()) {
          strategy.attach(this);
          strategy.enable();
        }
      }
      /** Updates the text direction of the overlay panel. */
      _updateElementDirection() {
        this._host.setAttribute("dir", this.getDirection());
      }
      /** Updates the size of the overlay element based on the overlay config. */
      _updateElementSize() {
        if (!this._pane) {
          return;
        }
        const style2 = this._pane.style;
        style2.width = coerceCssPixelValue(this._config.width);
        style2.height = coerceCssPixelValue(this._config.height);
        style2.minWidth = coerceCssPixelValue(this._config.minWidth);
        style2.minHeight = coerceCssPixelValue(this._config.minHeight);
        style2.maxWidth = coerceCssPixelValue(this._config.maxWidth);
        style2.maxHeight = coerceCssPixelValue(this._config.maxHeight);
      }
      /** Toggles the pointer events for the overlay pane element. */
      _togglePointerEvents(enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? "" : "none";
      }
      /** Attaches a backdrop for this overlay. */
      _attachBackdrop() {
        const showingClass = "cdk-overlay-backdrop-showing";
        this._backdropRef?.dispose();
        this._backdropRef = new BackdropRef(this._document, this._renderer, this._ngZone, (event) => {
          this._backdropClick.next(event);
        });
        if (this._animationsDisabled) {
          this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation");
        }
        if (this._config.backdropClass) {
          this._toggleClasses(this._backdropRef.element, this._config.backdropClass, true);
        }
        this._host.parentElement.insertBefore(this._backdropRef.element, this._host);
        if (!this._animationsDisabled && typeof requestAnimationFrame !== "undefined") {
          this._ngZone.runOutsideAngular(() => {
            requestAnimationFrame(() => this._backdropRef?.element.classList.add(showingClass));
          });
        } else {
          this._backdropRef.element.classList.add(showingClass);
        }
      }
      /**
       * Updates the stacking order of the element, moving it to the top if necessary.
       * This is required in cases where one overlay was detached, while another one,
       * that should be behind it, was destroyed. The next time both of them are opened,
       * the stacking will be wrong, because the detached element's pane will still be
       * in its original DOM position.
       */
      _updateStackingOrder() {
        if (this._host.nextSibling) {
          this._host.parentNode.appendChild(this._host);
        }
      }
      /** Detaches the backdrop (if any) associated with the overlay. */
      detachBackdrop() {
        if (this._animationsDisabled) {
          this._backdropRef?.dispose();
          this._backdropRef = null;
        } else {
          this._backdropRef?.detach();
        }
      }
      /** Toggles a single CSS class or an array of classes on an element. */
      _toggleClasses(element, cssClasses, isAdd) {
        const classes = coerceArray(cssClasses || []).filter((c) => !!c);
        if (classes.length) {
          isAdd ? element.classList.add(...classes) : element.classList.remove(...classes);
        }
      }
      /** Detaches the overlay once the content finishes animating and is removed from the DOM. */
      _detachContentWhenEmpty() {
        let rethrow = false;
        try {
          this._detachContentAfterRenderRef = afterNextRender(() => {
            rethrow = true;
            this._detachContent();
          }, {
            injector: this._injector
          });
        } catch (e) {
          if (rethrow) {
            throw e;
          }
          this._detachContent();
        }
        if (globalThis.MutationObserver && this._pane) {
          this._detachContentMutationObserver ||= new globalThis.MutationObserver(() => {
            this._detachContent();
          });
          this._detachContentMutationObserver.observe(this._pane, { childList: true });
        }
      }
      _detachContent() {
        if (!this._pane || !this._host || this._pane.children.length === 0) {
          if (this._pane && this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, false);
          }
          if (this._host && this._host.parentElement) {
            this._previousHostParent = this._host.parentElement;
            this._host.remove();
          }
          this._completeDetachContent();
        }
      }
      _completeDetachContent() {
        this._detachContentAfterRenderRef?.destroy();
        this._detachContentAfterRenderRef = void 0;
        this._detachContentMutationObserver?.disconnect();
      }
      /** Disposes of a scroll strategy. */
      _disposeScrollStrategy() {
        const scrollStrategy = this._scrollStrategy;
        scrollStrategy?.disable();
        scrollStrategy?.detach?.();
      }
    };
    boundingBoxClass = "cdk-overlay-connected-position-bounding-box";
    cssUnitPattern = /([A-Za-z%]+)$/;
    FlexibleConnectedPositionStrategy = class {
      _viewportRuler;
      _document;
      _platform;
      _overlayContainer;
      /** The overlay to which this strategy is attached. */
      _overlayRef;
      /** Whether we're performing the very first positioning of the overlay. */
      _isInitialRender;
      /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */
      _lastBoundingBoxSize = { width: 0, height: 0 };
      /** Whether the overlay was pushed in a previous positioning. */
      _isPushed = false;
      /** Whether the overlay can be pushed on-screen on the initial open. */
      _canPush = true;
      /** Whether the overlay can grow via flexible width/height after the initial open. */
      _growAfterOpen = false;
      /** Whether the overlay's width and height can be constrained to fit within the viewport. */
      _hasFlexibleDimensions = true;
      /** Whether the overlay position is locked. */
      _positionLocked = false;
      /** Cached origin dimensions */
      _originRect;
      /** Cached overlay dimensions */
      _overlayRect;
      /** Cached viewport dimensions */
      _viewportRect;
      /** Cached container dimensions */
      _containerRect;
      /** Amount of space that must be maintained between the overlay and the edge of the viewport. */
      _viewportMargin = 0;
      /** The Scrollable containers used to check scrollable view properties on position change. */
      _scrollables = [];
      /** Ordered list of preferred positions, from most to least desirable. */
      _preferredPositions = [];
      /** The origin element against which the overlay will be positioned. */
      _origin;
      /** The overlay pane element. */
      _pane;
      /** Whether the strategy has been disposed of already. */
      _isDisposed;
      /**
       * Parent element for the overlay panel used to constrain the overlay panel's size to fit
       * within the viewport.
       */
      _boundingBox;
      /** The last position to have been calculated as the best fit position. */
      _lastPosition;
      /** The last calculated scroll visibility. Only tracked  */
      _lastScrollVisibility;
      /** Subject that emits whenever the position changes. */
      _positionChanges = new Subject();
      /** Subscription to viewport size changes. */
      _resizeSubscription = Subscription.EMPTY;
      /** Default offset for the overlay along the x axis. */
      _offsetX = 0;
      /** Default offset for the overlay along the y axis. */
      _offsetY = 0;
      /** Selector to be used when finding the elements on which to set the transform origin. */
      _transformOriginSelector;
      /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */
      _appliedPanelClasses = [];
      /** Amount by which the overlay was pushed in each axis during the last time it was positioned. */
      _previousPushAmount;
      /** Observable sequence of position changes. */
      positionChanges = this._positionChanges;
      /** Ordered list of preferred positions, from most to least desirable. */
      get positions() {
        return this._preferredPositions;
      }
      constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        this.setOrigin(connectedTo);
      }
      /** Attaches this position strategy to an overlay. */
      attach(overlayRef) {
        if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("This position strategy is already attached to an overlay");
        }
        this._validatePositions();
        overlayRef.hostElement.classList.add(boundingBoxClass);
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._isDisposed = false;
        this._isInitialRender = true;
        this._lastPosition = null;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
          this._isInitialRender = true;
          this.apply();
        });
      }
      /**
       * Updates the position of the overlay element, using whichever preferred position relative
       * to the origin best fits on-screen.
       *
       * The selection of a position goes as follows:
       *  - If any positions fit completely within the viewport as-is,
       *      choose the first position that does so.
       *  - If flexible dimensions are enabled and at least one satisfies the given minimum width/height,
       *      choose the position with the greatest available size modified by the positions' weight.
       *  - If pushing is enabled, take the position that went off-screen the least and push it
       *      on-screen.
       *  - If none of the previous criteria were met, use the position that goes off-screen the least.
       * @docs-private
       */
      apply() {
        if (this._isDisposed || !this._platform.isBrowser) {
          return;
        }
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
          this.reapplyLastPosition();
          return;
        }
        this._clearPanelClasses();
        this._resetOverlayElementStyles();
        this._resetBoundingBoxStyles();
        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._getOriginRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
        const originRect = this._originRect;
        const overlayRect = this._overlayRect;
        const viewportRect = this._viewportRect;
        const containerRect = this._containerRect;
        const flexibleFits = [];
        let fallback;
        for (let pos of this._preferredPositions) {
          let originPoint = this._getOriginPoint(originRect, containerRect, pos);
          let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
          let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
          if (overlayFit.isCompletelyWithinViewport) {
            this._isPushed = false;
            this._applyPosition(pos, originPoint);
            return;
          }
          if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
            flexibleFits.push({
              position: pos,
              origin: originPoint,
              overlayRect,
              boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
            });
            continue;
          }
          if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
            fallback = { overlayFit, overlayPoint, originPoint, position: pos, overlayRect };
          }
        }
        if (flexibleFits.length) {
          let bestFit = null;
          let bestScore = -1;
          for (const fit of flexibleFits) {
            const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
            if (score > bestScore) {
              bestScore = score;
              bestFit = fit;
            }
          }
          this._isPushed = false;
          this._applyPosition(bestFit.position, bestFit.origin);
          return;
        }
        if (this._canPush) {
          this._isPushed = true;
          this._applyPosition(fallback.position, fallback.originPoint);
          return;
        }
        this._applyPosition(fallback.position, fallback.originPoint);
      }
      detach() {
        this._clearPanelClasses();
        this._lastPosition = null;
        this._previousPushAmount = null;
        this._resizeSubscription.unsubscribe();
      }
      /** Cleanup after the element gets destroyed. */
      dispose() {
        if (this._isDisposed) {
          return;
        }
        if (this._boundingBox) {
          extendStyles(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: ""
          });
        }
        if (this._pane) {
          this._resetOverlayElementStyles();
        }
        if (this._overlayRef) {
          this._overlayRef.hostElement.classList.remove(boundingBoxClass);
        }
        this.detach();
        this._positionChanges.complete();
        this._overlayRef = this._boundingBox = null;
        this._isDisposed = true;
      }
      /**
       * This re-aligns the overlay element with the trigger in its last calculated position,
       * even if a position higher in the "preferred positions" list would now fit. This
       * allows one to re-align the panel without changing the orientation of the panel.
       */
      reapplyLastPosition() {
        if (this._isDisposed || !this._platform.isBrowser) {
          return;
        }
        const lastPosition = this._lastPosition;
        if (lastPosition) {
          this._originRect = this._getOriginRect();
          this._overlayRect = this._pane.getBoundingClientRect();
          this._viewportRect = this._getNarrowedViewportRect();
          this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
          const originPoint = this._getOriginPoint(this._originRect, this._containerRect, lastPosition);
          this._applyPosition(lastPosition, originPoint);
        } else {
          this.apply();
        }
      }
      /**
       * Sets the list of Scrollable containers that host the origin element so that
       * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
       * Scrollable must be an ancestor element of the strategy's origin element.
       */
      withScrollableContainers(scrollables) {
        this._scrollables = scrollables;
        return this;
      }
      /**
       * Adds new preferred positions.
       * @param positions List of positions options for this overlay.
       */
      withPositions(positions) {
        this._preferredPositions = positions;
        if (positions.indexOf(this._lastPosition) === -1) {
          this._lastPosition = null;
        }
        this._validatePositions();
        return this;
      }
      /**
       * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
       * @param margin Required margin between the overlay and the viewport edge in pixels.
       */
      withViewportMargin(margin) {
        this._viewportMargin = margin;
        return this;
      }
      /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
      withFlexibleDimensions(flexibleDimensions = true) {
        this._hasFlexibleDimensions = flexibleDimensions;
        return this;
      }
      /** Sets whether the overlay can grow after the initial open via flexible width/height. */
      withGrowAfterOpen(growAfterOpen = true) {
        this._growAfterOpen = growAfterOpen;
        return this;
      }
      /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
      withPush(canPush = true) {
        this._canPush = canPush;
        return this;
      }
      /**
       * Sets whether the overlay's position should be locked in after it is positioned
       * initially. When an overlay is locked in, it won't attempt to reposition itself
       * when the position is re-applied (e.g. when the user scrolls away).
       * @param isLocked Whether the overlay should locked in.
       */
      withLockedPosition(isLocked = true) {
        this._positionLocked = isLocked;
        return this;
      }
      /**
       * Sets the origin, relative to which to position the overlay.
       * Using an element origin is useful for building components that need to be positioned
       * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
       * used for cases like contextual menus which open relative to the user's pointer.
       * @param origin Reference to the new origin.
       */
      setOrigin(origin) {
        this._origin = origin;
        return this;
      }
      /**
       * Sets the default offset for the overlay's connection point on the x-axis.
       * @param offset New offset in the X axis.
       */
      withDefaultOffsetX(offset) {
        this._offsetX = offset;
        return this;
      }
      /**
       * Sets the default offset for the overlay's connection point on the y-axis.
       * @param offset New offset in the Y axis.
       */
      withDefaultOffsetY(offset) {
        this._offsetY = offset;
        return this;
      }
      /**
       * Configures that the position strategy should set a `transform-origin` on some elements
       * inside the overlay, depending on the current position that is being applied. This is
       * useful for the cases where the origin of an animation can change depending on the
       * alignment of the overlay.
       * @param selector CSS selector that will be used to find the target
       *    elements onto which to set the transform origin.
       */
      withTransformOriginOn(selector) {
        this._transformOriginSelector = selector;
        return this;
      }
      /**
       * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
       */
      _getOriginPoint(originRect, containerRect, pos) {
        let x;
        if (pos.originX == "center") {
          x = originRect.left + originRect.width / 2;
        } else {
          const startX = this._isRtl() ? originRect.right : originRect.left;
          const endX = this._isRtl() ? originRect.left : originRect.right;
          x = pos.originX == "start" ? startX : endX;
        }
        if (containerRect.left < 0) {
          x -= containerRect.left;
        }
        let y;
        if (pos.originY == "center") {
          y = originRect.top + originRect.height / 2;
        } else {
          y = pos.originY == "top" ? originRect.top : originRect.bottom;
        }
        if (containerRect.top < 0) {
          y -= containerRect.top;
        }
        return { x, y };
      }
      /**
       * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
       * origin point to which the overlay should be connected.
       */
      _getOverlayPoint(originPoint, overlayRect, pos) {
        let overlayStartX;
        if (pos.overlayX == "center") {
          overlayStartX = -overlayRect.width / 2;
        } else if (pos.overlayX === "start") {
          overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        } else {
          overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        let overlayStartY;
        if (pos.overlayY == "center") {
          overlayStartY = -overlayRect.height / 2;
        } else {
          overlayStartY = pos.overlayY == "top" ? 0 : -overlayRect.height;
        }
        return {
          x: originPoint.x + overlayStartX,
          y: originPoint.y + overlayStartY
        };
      }
      /** Gets how well an overlay at the given point will fit within the viewport. */
      _getOverlayFit(point, rawOverlayRect, viewport, position) {
        const overlay = getRoundedBoundingClientRect(rawOverlayRect);
        let { x, y } = point;
        let offsetX = this._getOffset(position, "x");
        let offsetY = this._getOffset(position, "y");
        if (offsetX) {
          x += offsetX;
        }
        if (offsetY) {
          y += offsetY;
        }
        let leftOverflow = 0 - x;
        let rightOverflow = x + overlay.width - viewport.width;
        let topOverflow = 0 - y;
        let bottomOverflow = y + overlay.height - viewport.height;
        let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        let visibleArea = visibleWidth * visibleHeight;
        return {
          visibleArea,
          isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
          fitsInViewportVertically: visibleHeight === overlay.height,
          fitsInViewportHorizontally: visibleWidth == overlay.width
        };
      }
      /**
       * Whether the overlay can fit within the viewport when it may resize either its width or height.
       * @param fit How well the overlay fits in the viewport at some position.
       * @param point The (x, y) coordinates of the overlay at some position.
       * @param viewport The geometry of the viewport.
       */
      _canFitWithFlexibleDimensions(fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
          const availableHeight = viewport.bottom - point.y;
          const availableWidth = viewport.right - point.x;
          const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
          const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
          const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
          const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
          return verticalFit && horizontalFit;
        }
        return false;
      }
      /**
       * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
       * the viewport, the top-left corner will be pushed on-screen (with overflow occurring on the
       * right and bottom).
       *
       * @param start Starting point from which the overlay is pushed.
       * @param rawOverlayRect Dimensions of the overlay.
       * @param scrollPosition Current viewport scroll position.
       * @returns The point at which to position the overlay after pushing. This is effectively a new
       *     originPoint.
       */
      _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
        if (this._previousPushAmount && this._positionLocked) {
          return {
            x: start.x + this._previousPushAmount.x,
            y: start.y + this._previousPushAmount.y
          };
        }
        const overlay = getRoundedBoundingClientRect(rawOverlayRect);
        const viewport = this._viewportRect;
        const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
        const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
        const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
        const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
        let pushX = 0;
        let pushY = 0;
        if (overlay.width <= viewport.width) {
          pushX = overflowLeft || -overflowRight;
        } else {
          pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
        }
        if (overlay.height <= viewport.height) {
          pushY = overflowTop || -overflowBottom;
        } else {
          pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
        }
        this._previousPushAmount = { x: pushX, y: pushY };
        return {
          x: start.x + pushX,
          y: start.y + pushY
        };
      }
      /**
       * Applies a computed position to the overlay and emits a position change.
       * @param position The position preference
       * @param originPoint The point on the origin element where the overlay is connected.
       */
      _applyPosition(position, originPoint) {
        this._setTransformOrigin(position);
        this._setOverlayElementStyles(originPoint, position);
        this._setBoundingBoxStyles(originPoint, position);
        if (position.panelClass) {
          this._addPanelClasses(position.panelClass);
        }
        if (this._positionChanges.observers.length) {
          const scrollVisibility = this._getScrollVisibility();
          if (position !== this._lastPosition || !this._lastScrollVisibility || !compareScrollVisibility(this._lastScrollVisibility, scrollVisibility)) {
            const changeEvent = new ConnectedOverlayPositionChange(position, scrollVisibility);
            this._positionChanges.next(changeEvent);
          }
          this._lastScrollVisibility = scrollVisibility;
        }
        this._lastPosition = position;
        this._isInitialRender = false;
      }
      /** Sets the transform origin based on the configured selector and the passed-in position.  */
      _setTransformOrigin(position) {
        if (!this._transformOriginSelector) {
          return;
        }
        const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
        let xOrigin;
        let yOrigin = position.overlayY;
        if (position.overlayX === "center") {
          xOrigin = "center";
        } else if (this._isRtl()) {
          xOrigin = position.overlayX === "start" ? "right" : "left";
        } else {
          xOrigin = position.overlayX === "start" ? "left" : "right";
        }
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
        }
      }
      /**
       * Gets the position and size of the overlay's sizing container.
       *
       * This method does no measuring and applies no styles so that we can cheaply compute the
       * bounds for all positions and choose the best fit based on these results.
       */
      _calculateBoundingBoxRect(origin, position) {
        const viewport = this._viewportRect;
        const isRtl = this._isRtl();
        let height, top, bottom;
        if (position.overlayY === "top") {
          top = origin.y;
          height = viewport.height - top + this._viewportMargin;
        } else if (position.overlayY === "bottom") {
          bottom = viewport.height - origin.y + this._viewportMargin * 2;
          height = viewport.height - bottom + this._viewportMargin;
        } else {
          const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
          const previousHeight = this._lastBoundingBoxSize.height;
          height = smallestDistanceToViewportEdge * 2;
          top = origin.y - smallestDistanceToViewportEdge;
          if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
            top = origin.y - previousHeight / 2;
          }
        }
        const isBoundedByRightViewportEdge = position.overlayX === "start" && !isRtl || position.overlayX === "end" && isRtl;
        const isBoundedByLeftViewportEdge = position.overlayX === "end" && !isRtl || position.overlayX === "start" && isRtl;
        let width, left, right;
        if (isBoundedByLeftViewportEdge) {
          right = viewport.width - origin.x + this._viewportMargin * 2;
          width = origin.x - this._viewportMargin;
        } else if (isBoundedByRightViewportEdge) {
          left = origin.x;
          width = viewport.right - origin.x;
        } else {
          const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
          const previousWidth = this._lastBoundingBoxSize.width;
          width = smallestDistanceToViewportEdge * 2;
          left = origin.x - smallestDistanceToViewportEdge;
          if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
            left = origin.x - previousWidth / 2;
          }
        }
        return { top, left, bottom, right, width, height };
      }
      /**
       * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
       * origin's connection point and stretches to the bounds of the viewport.
       *
       * @param origin The point on the origin element where the overlay is connected.
       * @param position The position preference
       */
      _setBoundingBoxStyles(origin, position) {
        const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
        if (!this._isInitialRender && !this._growAfterOpen) {
          boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
          boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        const styles = {};
        if (this._hasExactPosition()) {
          styles.top = styles.left = "0";
          styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = "";
          styles.width = styles.height = "100%";
        } else {
          const maxHeight = this._overlayRef.getConfig().maxHeight;
          const maxWidth = this._overlayRef.getConfig().maxWidth;
          styles.height = coerceCssPixelValue(boundingBoxRect.height);
          styles.top = coerceCssPixelValue(boundingBoxRect.top);
          styles.bottom = coerceCssPixelValue(boundingBoxRect.bottom);
          styles.width = coerceCssPixelValue(boundingBoxRect.width);
          styles.left = coerceCssPixelValue(boundingBoxRect.left);
          styles.right = coerceCssPixelValue(boundingBoxRect.right);
          if (position.overlayX === "center") {
            styles.alignItems = "center";
          } else {
            styles.alignItems = position.overlayX === "end" ? "flex-end" : "flex-start";
          }
          if (position.overlayY === "center") {
            styles.justifyContent = "center";
          } else {
            styles.justifyContent = position.overlayY === "bottom" ? "flex-end" : "flex-start";
          }
          if (maxHeight) {
            styles.maxHeight = coerceCssPixelValue(maxHeight);
          }
          if (maxWidth) {
            styles.maxWidth = coerceCssPixelValue(maxWidth);
          }
        }
        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles(this._boundingBox.style, styles);
      }
      /** Resets the styles for the bounding box so that a new positioning can be computed. */
      _resetBoundingBoxStyles() {
        extendStyles(this._boundingBox.style, {
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          height: "",
          width: "",
          alignItems: "",
          justifyContent: ""
        });
      }
      /** Resets the styles for the overlay pane so that a new positioning can be computed. */
      _resetOverlayElementStyles() {
        extendStyles(this._pane.style, {
          top: "",
          left: "",
          bottom: "",
          right: "",
          position: "",
          transform: ""
        });
      }
      /** Sets positioning styles to the overlay element. */
      _setOverlayElementStyles(originPoint, position) {
        const styles = {};
        const hasExactPosition = this._hasExactPosition();
        const hasFlexibleDimensions = this._hasFlexibleDimensions;
        const config = this._overlayRef.getConfig();
        if (hasExactPosition) {
          const scrollPosition = this._viewportRuler.getViewportScrollPosition();
          extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
          extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
        } else {
          styles.position = "static";
        }
        let transformString = "";
        let offsetX = this._getOffset(position, "x");
        let offsetY = this._getOffset(position, "y");
        if (offsetX) {
          transformString += `translateX(${offsetX}px) `;
        }
        if (offsetY) {
          transformString += `translateY(${offsetY}px)`;
        }
        styles.transform = transformString.trim();
        if (config.maxHeight) {
          if (hasExactPosition) {
            styles.maxHeight = coerceCssPixelValue(config.maxHeight);
          } else if (hasFlexibleDimensions) {
            styles.maxHeight = "";
          }
        }
        if (config.maxWidth) {
          if (hasExactPosition) {
            styles.maxWidth = coerceCssPixelValue(config.maxWidth);
          } else if (hasFlexibleDimensions) {
            styles.maxWidth = "";
          }
        }
        extendStyles(this._pane.style, styles);
      }
      /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
      _getExactOverlayY(position, originPoint, scrollPosition) {
        let styles = { top: "", bottom: "" };
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
          overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        if (position.overlayY === "bottom") {
          const documentHeight = this._document.documentElement.clientHeight;
          styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
        } else {
          styles.top = coerceCssPixelValue(overlayPoint.y);
        }
        return styles;
      }
      /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
      _getExactOverlayX(position, originPoint, scrollPosition) {
        let styles = { left: "", right: "" };
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
          overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        let horizontalStyleProperty;
        if (this._isRtl()) {
          horizontalStyleProperty = position.overlayX === "end" ? "left" : "right";
        } else {
          horizontalStyleProperty = position.overlayX === "end" ? "right" : "left";
        }
        if (horizontalStyleProperty === "right") {
          const documentWidth = this._document.documentElement.clientWidth;
          styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
        } else {
          styles.left = coerceCssPixelValue(overlayPoint.x);
        }
        return styles;
      }
      /**
       * Gets the view properties of the trigger and overlay, including whether they are clipped
       * or completely outside the view of any of the strategy's scrollables.
       */
      _getScrollVisibility() {
        const originBounds = this._getOriginRect();
        const overlayBounds = this._pane.getBoundingClientRect();
        const scrollContainerBounds = this._scrollables.map((scrollable) => {
          return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        });
        return {
          isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
          isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
          isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
          isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
        };
      }
      /** Subtracts the amount that an element is overflowing on an axis from its length. */
      _subtractOverflows(length, ...overflows) {
        return overflows.reduce((currentValue, currentOverflow) => {
          return currentValue - Math.max(currentOverflow, 0);
        }, length);
      }
      /** Narrows the given viewport rect by the current _viewportMargin. */
      _getNarrowedViewportRect() {
        const width = this._document.documentElement.clientWidth;
        const height = this._document.documentElement.clientHeight;
        const scrollPosition = this._viewportRuler.getViewportScrollPosition();
        return {
          top: scrollPosition.top + this._viewportMargin,
          left: scrollPosition.left + this._viewportMargin,
          right: scrollPosition.left + width - this._viewportMargin,
          bottom: scrollPosition.top + height - this._viewportMargin,
          width: width - 2 * this._viewportMargin,
          height: height - 2 * this._viewportMargin
        };
      }
      /** Whether the we're dealing with an RTL context */
      _isRtl() {
        return this._overlayRef.getDirection() === "rtl";
      }
      /** Determines whether the overlay uses exact or flexible positioning. */
      _hasExactPosition() {
        return !this._hasFlexibleDimensions || this._isPushed;
      }
      /** Retrieves the offset of a position along the x or y axis. */
      _getOffset(position, axis) {
        if (axis === "x") {
          return position.offsetX == null ? this._offsetX : position.offsetX;
        }
        return position.offsetY == null ? this._offsetY : position.offsetY;
      }
      /** Validates that the current position match the expected values. */
      _validatePositions() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._preferredPositions.length) {
            throw Error("FlexibleConnectedPositionStrategy: At least one position is required.");
          }
          this._preferredPositions.forEach((pair) => {
            validateHorizontalPosition("originX", pair.originX);
            validateVerticalPosition("originY", pair.originY);
            validateHorizontalPosition("overlayX", pair.overlayX);
            validateVerticalPosition("overlayY", pair.overlayY);
          });
        }
      }
      /** Adds a single CSS class or an array of classes on the overlay panel. */
      _addPanelClasses(cssClasses) {
        if (this._pane) {
          coerceArray(cssClasses).forEach((cssClass) => {
            if (cssClass !== "" && this._appliedPanelClasses.indexOf(cssClass) === -1) {
              this._appliedPanelClasses.push(cssClass);
              this._pane.classList.add(cssClass);
            }
          });
        }
      }
      /** Clears the classes that the position strategy has applied from the overlay panel. */
      _clearPanelClasses() {
        if (this._pane) {
          this._appliedPanelClasses.forEach((cssClass) => {
            this._pane.classList.remove(cssClass);
          });
          this._appliedPanelClasses = [];
        }
      }
      /** Returns the DOMRect of the current origin. */
      _getOriginRect() {
        const origin = this._origin;
        if (origin instanceof ElementRef) {
          return origin.nativeElement.getBoundingClientRect();
        }
        if (origin instanceof Element) {
          return origin.getBoundingClientRect();
        }
        const width = origin.width || 0;
        const height = origin.height || 0;
        return {
          top: origin.y,
          bottom: origin.y + height,
          left: origin.x,
          right: origin.x + width,
          height,
          width
        };
      }
    };
    wrapperClass = "cdk-global-overlay-wrapper";
    GlobalPositionStrategy = class {
      /** The overlay to which this strategy is attached. */
      _overlayRef;
      _cssPosition = "static";
      _topOffset = "";
      _bottomOffset = "";
      _alignItems = "";
      _xPosition = "";
      _xOffset = "";
      _width = "";
      _height = "";
      _isDisposed = false;
      attach(overlayRef) {
        const config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
          overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
          overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
      }
      /**
       * Sets the top position of the overlay. Clears any previously set vertical position.
       * @param value New top offset.
       */
      top(value = "") {
        this._bottomOffset = "";
        this._topOffset = value;
        this._alignItems = "flex-start";
        return this;
      }
      /**
       * Sets the left position of the overlay. Clears any previously set horizontal position.
       * @param value New left offset.
       */
      left(value = "") {
        this._xOffset = value;
        this._xPosition = "left";
        return this;
      }
      /**
       * Sets the bottom position of the overlay. Clears any previously set vertical position.
       * @param value New bottom offset.
       */
      bottom(value = "") {
        this._topOffset = "";
        this._bottomOffset = value;
        this._alignItems = "flex-end";
        return this;
      }
      /**
       * Sets the right position of the overlay. Clears any previously set horizontal position.
       * @param value New right offset.
       */
      right(value = "") {
        this._xOffset = value;
        this._xPosition = "right";
        return this;
      }
      /**
       * Sets the overlay to the start of the viewport, depending on the overlay direction.
       * This will be to the left in LTR layouts and to the right in RTL.
       * @param offset Offset from the edge of the screen.
       */
      start(value = "") {
        this._xOffset = value;
        this._xPosition = "start";
        return this;
      }
      /**
       * Sets the overlay to the end of the viewport, depending on the overlay direction.
       * This will be to the right in LTR layouts and to the left in RTL.
       * @param offset Offset from the edge of the screen.
       */
      end(value = "") {
        this._xOffset = value;
        this._xPosition = "end";
        return this;
      }
      /**
       * Sets the overlay width and clears any previously set width.
       * @param value New width for the overlay
       * @deprecated Pass the `width` through the `OverlayConfig`.
       * @breaking-change 8.0.0
       */
      width(value = "") {
        if (this._overlayRef) {
          this._overlayRef.updateSize({ width: value });
        } else {
          this._width = value;
        }
        return this;
      }
      /**
       * Sets the overlay height and clears any previously set height.
       * @param value New height for the overlay
       * @deprecated Pass the `height` through the `OverlayConfig`.
       * @breaking-change 8.0.0
       */
      height(value = "") {
        if (this._overlayRef) {
          this._overlayRef.updateSize({ height: value });
        } else {
          this._height = value;
        }
        return this;
      }
      /**
       * Centers the overlay horizontally with an optional offset.
       * Clears any previously set horizontal position.
       *
       * @param offset Overlay offset from the horizontal center.
       */
      centerHorizontally(offset = "") {
        this.left(offset);
        this._xPosition = "center";
        return this;
      }
      /**
       * Centers the overlay vertically with an optional offset.
       * Clears any previously set vertical position.
       *
       * @param offset Overlay offset from the vertical center.
       */
      centerVertically(offset = "") {
        this.top(offset);
        this._alignItems = "center";
        return this;
      }
      /**
       * Apply the position to the element.
       * @docs-private
       */
      apply() {
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
          return;
        }
        const styles = this._overlayRef.overlayElement.style;
        const parentStyles = this._overlayRef.hostElement.style;
        const config = this._overlayRef.getConfig();
        const { width, height, maxWidth, maxHeight } = config;
        const shouldBeFlushHorizontally = (width === "100%" || width === "100vw") && (!maxWidth || maxWidth === "100%" || maxWidth === "100vw");
        const shouldBeFlushVertically = (height === "100%" || height === "100vh") && (!maxHeight || maxHeight === "100%" || maxHeight === "100vh");
        const xPosition = this._xPosition;
        const xOffset = this._xOffset;
        const isRtl = this._overlayRef.getConfig().direction === "rtl";
        let marginLeft = "";
        let marginRight = "";
        let justifyContent = "";
        if (shouldBeFlushHorizontally) {
          justifyContent = "flex-start";
        } else if (xPosition === "center") {
          justifyContent = "center";
          if (isRtl) {
            marginRight = xOffset;
          } else {
            marginLeft = xOffset;
          }
        } else if (isRtl) {
          if (xPosition === "left" || xPosition === "end") {
            justifyContent = "flex-end";
            marginLeft = xOffset;
          } else if (xPosition === "right" || xPosition === "start") {
            justifyContent = "flex-start";
            marginRight = xOffset;
          }
        } else if (xPosition === "left" || xPosition === "start") {
          justifyContent = "flex-start";
          marginLeft = xOffset;
        } else if (xPosition === "right" || xPosition === "end") {
          justifyContent = "flex-end";
          marginRight = xOffset;
        }
        styles.position = this._cssPosition;
        styles.marginLeft = shouldBeFlushHorizontally ? "0" : marginLeft;
        styles.marginTop = shouldBeFlushVertically ? "0" : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = shouldBeFlushHorizontally ? "0" : marginRight;
        parentStyles.justifyContent = justifyContent;
        parentStyles.alignItems = shouldBeFlushVertically ? "flex-start" : this._alignItems;
      }
      /**
       * Cleans up the DOM changes from the position strategy.
       * @docs-private
       */
      dispose() {
        if (this._isDisposed || !this._overlayRef) {
          return;
        }
        const styles = this._overlayRef.overlayElement.style;
        const parent = this._overlayRef.hostElement;
        const parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = "";
        this._overlayRef = null;
        this._isDisposed = true;
      }
    };
    OverlayPositionBuilder = class _OverlayPositionBuilder {
      _injector = inject(Injector);
      constructor() {
      }
      /**
       * Creates a global position strategy.
       */
      global() {
        return createGlobalPositionStrategy();
      }
      /**
       * Creates a flexible position strategy.
       * @param origin Origin relative to which to position the overlay.
       */
      flexibleConnectedTo(origin) {
        return createFlexibleConnectedPositionStrategy(this._injector, origin);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _OverlayPositionBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _OverlayPositionBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: OverlayPositionBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    Overlay = class _Overlay {
      scrollStrategies = inject(ScrollStrategyOptions);
      _positionBuilder = inject(OverlayPositionBuilder);
      _injector = inject(Injector);
      constructor() {
      }
      /**
       * Creates an overlay.
       * @param config Configuration applied to the overlay.
       * @returns Reference to the created overlay.
       */
      create(config) {
        return createOverlayRef(this._injector, config);
      }
      /**
       * Gets a position builder that can be used, via fluent API,
       * to construct and configure a position strategy.
       * @returns An overlay position builder.
       */
      position() {
        return this._positionBuilder;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Overlay, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Overlay, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Overlay, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    defaultPositionList = [
      {
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
      },
      {
        originX: "start",
        originY: "top",
        overlayX: "start",
        overlayY: "bottom"
      },
      {
        originX: "end",
        originY: "top",
        overlayX: "end",
        overlayY: "bottom"
      },
      {
        originX: "end",
        originY: "bottom",
        overlayX: "end",
        overlayY: "top"
      }
    ];
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new InjectionToken("cdk-connected-overlay-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector);
      }
    });
    CdkOverlayOrigin = class _CdkOverlayOrigin {
      elementRef = inject(ElementRef);
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkOverlayOrigin, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkOverlayOrigin, isStandalone: true, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkOverlayOrigin, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]",
        exportAs: "cdkOverlayOrigin"
      }]
    }], ctorParameters: () => [] });
    CdkConnectedOverlay = class _CdkConnectedOverlay {
      _dir = inject(Directionality, { optional: true });
      _injector = inject(Injector);
      _overlayRef;
      _templatePortal;
      _backdropSubscription = Subscription.EMPTY;
      _attachSubscription = Subscription.EMPTY;
      _detachSubscription = Subscription.EMPTY;
      _positionSubscription = Subscription.EMPTY;
      _offsetX;
      _offsetY;
      _position;
      _scrollStrategyFactory = inject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY);
      _disposeOnNavigation = false;
      _ngZone = inject(NgZone);
      /** Origin for the connected overlay. */
      origin;
      /** Registered connected position pairs. */
      positions;
      /**
       * This input overrides the positions input if specified. It lets users pass
       * in arbitrary positioning strategies.
       */
      positionStrategy;
      /** The offset in pixels for the overlay connection point on the x-axis */
      get offsetX() {
        return this._offsetX;
      }
      set offsetX(offsetX) {
        this._offsetX = offsetX;
        if (this._position) {
          this._updatePositionStrategy(this._position);
        }
      }
      /** The offset in pixels for the overlay connection point on the y-axis */
      get offsetY() {
        return this._offsetY;
      }
      set offsetY(offsetY) {
        this._offsetY = offsetY;
        if (this._position) {
          this._updatePositionStrategy(this._position);
        }
      }
      /** The width of the overlay panel. */
      width;
      /** The height of the overlay panel. */
      height;
      /** The min width of the overlay panel. */
      minWidth;
      /** The min height of the overlay panel. */
      minHeight;
      /** The custom class to be set on the backdrop element. */
      backdropClass;
      /** The custom class to add to the overlay pane element. */
      panelClass;
      /** Margin between the overlay and the viewport edges. */
      viewportMargin = 0;
      /** Strategy to be used when handling scroll events while the overlay is open. */
      scrollStrategy;
      /** Whether the overlay is open. */
      open = false;
      /** Whether the overlay can be closed by user interaction. */
      disableClose = false;
      /** CSS selector which to set the transform origin. */
      transformOriginSelector;
      /** Whether or not the overlay should attach a backdrop. */
      hasBackdrop = false;
      /** Whether or not the overlay should be locked when scrolling. */
      lockPosition = false;
      /** Whether the overlay's width and height can be constrained to fit within the viewport. */
      flexibleDimensions = false;
      /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
      growAfterOpen = false;
      /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
      push = false;
      /** Whether the overlay should be disposed of when the user goes backwards/forwards in history. */
      get disposeOnNavigation() {
        return this._disposeOnNavigation;
      }
      set disposeOnNavigation(value) {
        this._disposeOnNavigation = value;
      }
      /** Event emitted when the backdrop is clicked. */
      backdropClick = new EventEmitter();
      /** Event emitted when the position has changed. */
      positionChange = new EventEmitter();
      /** Event emitted when the overlay has been attached. */
      attach = new EventEmitter();
      /** Event emitted when the overlay has been detached. */
      detach = new EventEmitter();
      /** Emits when there are keyboard events that are targeted at the overlay. */
      overlayKeydown = new EventEmitter();
      /** Emits when there are mouse outside click events that are targeted at the overlay. */
      overlayOutsideClick = new EventEmitter();
      // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
      constructor() {
        const templateRef = inject(TemplateRef);
        const viewContainerRef = inject(ViewContainerRef);
        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
        this.scrollStrategy = this._scrollStrategyFactory();
      }
      /** The associated overlay reference. */
      get overlayRef() {
        return this._overlayRef;
      }
      /** The element's layout direction. */
      get dir() {
        return this._dir ? this._dir.value : "ltr";
      }
      ngOnDestroy() {
        this._attachSubscription.unsubscribe();
        this._detachSubscription.unsubscribe();
        this._backdropSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
        this._overlayRef?.dispose();
      }
      ngOnChanges(changes) {
        if (this._position) {
          this._updatePositionStrategy(this._position);
          this._overlayRef?.updateSize({
            width: this.width,
            minWidth: this.minWidth,
            height: this.height,
            minHeight: this.minHeight
          });
          if (changes["origin"] && this.open) {
            this._position.apply();
          }
        }
        if (changes["open"]) {
          this.open ? this.attachOverlay() : this.detachOverlay();
        }
      }
      /** Creates an overlay */
      _createOverlay() {
        if (!this.positions || !this.positions.length) {
          this.positions = defaultPositionList;
        }
        const overlayRef = this._overlayRef = createOverlayRef(this._injector, this._buildConfig());
        this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
        this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
        overlayRef.keydownEvents().subscribe((event) => {
          this.overlayKeydown.next(event);
          if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
            event.preventDefault();
            this.detachOverlay();
          }
        });
        this._overlayRef.outsidePointerEvents().subscribe((event) => {
          const origin = this._getOriginElement();
          const target = _getEventTarget(event);
          if (!origin || origin !== target && !origin.contains(target)) {
            this.overlayOutsideClick.next(event);
          }
        });
      }
      /** Builds the overlay config based on the directive's inputs */
      _buildConfig() {
        const positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
        const overlayConfig = new OverlayConfig({
          direction: this._dir || "ltr",
          positionStrategy,
          scrollStrategy: this.scrollStrategy,
          hasBackdrop: this.hasBackdrop,
          disposeOnNavigation: this.disposeOnNavigation
        });
        if (this.width || this.width === 0) {
          overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
          overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
          overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
          overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
          overlayConfig.backdropClass = this.backdropClass;
        }
        if (this.panelClass) {
          overlayConfig.panelClass = this.panelClass;
        }
        return overlayConfig;
      }
      /** Updates the state of a position strategy, based on the values of the directive inputs. */
      _updatePositionStrategy(positionStrategy) {
        const positions = this.positions.map((currentPosition) => ({
          originX: currentPosition.originX,
          originY: currentPosition.originY,
          overlayX: currentPosition.overlayX,
          overlayY: currentPosition.overlayY,
          offsetX: currentPosition.offsetX || this.offsetX,
          offsetY: currentPosition.offsetY || this.offsetY,
          panelClass: currentPosition.panelClass || void 0
        }));
        return positionStrategy.setOrigin(this._getOrigin()).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
      }
      /** Returns the position strategy of the overlay to be set on the overlay config */
      _createPositionStrategy() {
        const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getOrigin());
        this._updatePositionStrategy(strategy);
        return strategy;
      }
      _getOrigin() {
        if (this.origin instanceof CdkOverlayOrigin) {
          return this.origin.elementRef;
        } else {
          return this.origin;
        }
      }
      _getOriginElement() {
        if (this.origin instanceof CdkOverlayOrigin) {
          return this.origin.elementRef.nativeElement;
        }
        if (this.origin instanceof ElementRef) {
          return this.origin.nativeElement;
        }
        if (typeof Element !== "undefined" && this.origin instanceof Element) {
          return this.origin;
        }
        return null;
      }
      /** Attaches the overlay. */
      attachOverlay() {
        if (!this._overlayRef) {
          this._createOverlay();
        } else {
          this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
        }
        if (!this._overlayRef.hasAttached()) {
          this._overlayRef.attach(this._templatePortal);
        }
        if (this.hasBackdrop) {
          this._backdropSubscription = this._overlayRef.backdropClick().subscribe((event) => {
            this.backdropClick.emit(event);
          });
        } else {
          this._backdropSubscription.unsubscribe();
        }
        this._positionSubscription.unsubscribe();
        if (this.positionChange.observers.length > 0) {
          this._positionSubscription = this._position.positionChanges.pipe(takeWhile(() => this.positionChange.observers.length > 0)).subscribe((position) => {
            this._ngZone.run(() => this.positionChange.emit(position));
            if (this.positionChange.observers.length === 0) {
              this._positionSubscription.unsubscribe();
            }
          });
        }
        this.open = true;
      }
      /** Detaches the overlay. */
      detachOverlay() {
        this._overlayRef?.detach();
        this._backdropSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
        this.open = false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkConnectedOverlay, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkConnectedOverlay, isStandalone: true, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: { origin: ["cdkConnectedOverlayOrigin", "origin"], positions: ["cdkConnectedOverlayPositions", "positions"], positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"], offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"], offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"], width: ["cdkConnectedOverlayWidth", "width"], height: ["cdkConnectedOverlayHeight", "height"], minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"], minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"], backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"], panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"], viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"], scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"], open: ["cdkConnectedOverlayOpen", "open"], disableClose: ["cdkConnectedOverlayDisableClose", "disableClose"], transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"], hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop", booleanAttribute], lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition", booleanAttribute], flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", booleanAttribute], growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", booleanAttribute], push: ["cdkConnectedOverlayPush", "push", booleanAttribute], disposeOnNavigation: ["cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", booleanAttribute] }, outputs: { backdropClick: "backdropClick", positionChange: "positionChange", attach: "attach", detach: "detach", overlayKeydown: "overlayKeydown", overlayOutsideClick: "overlayOutsideClick" }, exportAs: ["cdkConnectedOverlay"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkConnectedOverlay, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
        exportAs: "cdkConnectedOverlay"
      }]
    }], ctorParameters: () => [], propDecorators: { origin: [{
      type: Input,
      args: ["cdkConnectedOverlayOrigin"]
    }], positions: [{
      type: Input,
      args: ["cdkConnectedOverlayPositions"]
    }], positionStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayPositionStrategy"]
    }], offsetX: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetX"]
    }], offsetY: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetY"]
    }], width: [{
      type: Input,
      args: ["cdkConnectedOverlayWidth"]
    }], height: [{
      type: Input,
      args: ["cdkConnectedOverlayHeight"]
    }], minWidth: [{
      type: Input,
      args: ["cdkConnectedOverlayMinWidth"]
    }], minHeight: [{
      type: Input,
      args: ["cdkConnectedOverlayMinHeight"]
    }], backdropClass: [{
      type: Input,
      args: ["cdkConnectedOverlayBackdropClass"]
    }], panelClass: [{
      type: Input,
      args: ["cdkConnectedOverlayPanelClass"]
    }], viewportMargin: [{
      type: Input,
      args: ["cdkConnectedOverlayViewportMargin"]
    }], scrollStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayScrollStrategy"]
    }], open: [{
      type: Input,
      args: ["cdkConnectedOverlayOpen"]
    }], disableClose: [{
      type: Input,
      args: ["cdkConnectedOverlayDisableClose"]
    }], transformOriginSelector: [{
      type: Input,
      args: ["cdkConnectedOverlayTransformOriginOn"]
    }], hasBackdrop: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayHasBackdrop", transform: booleanAttribute }]
    }], lockPosition: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayLockPosition", transform: booleanAttribute }]
    }], flexibleDimensions: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayFlexibleDimensions", transform: booleanAttribute }]
    }], growAfterOpen: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayGrowAfterOpen", transform: booleanAttribute }]
    }], push: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayPush", transform: booleanAttribute }]
    }], disposeOnNavigation: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayDisposeOnNavigation", transform: booleanAttribute }]
    }], backdropClick: [{
      type: Output
    }], positionChange: [{
      type: Output
    }], attach: [{
      type: Output
    }], detach: [{
      type: Output
    }], overlayKeydown: [{
      type: Output
    }], overlayOutsideClick: [{
      type: Output
    }] } });
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
      provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
      useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    OverlayModule = class _OverlayModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _OverlayModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _OverlayModule, imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin], exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _OverlayModule, providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER], imports: [BidiModule, PortalModule, ScrollingModule, ScrollingModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: OverlayModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin],
        exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule],
        providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/overlay.mjs
var FullscreenOverlayContainer;
var init_overlay = __esm({
  "node_modules/@angular/cdk/fesm2022/overlay.mjs"() {
    "use strict";
    init_overlay_module_Bd2UplUU();
    init_overlay_module_Bd2UplUU();
    init_core();
    init_core();
    FullscreenOverlayContainer = class _FullscreenOverlayContainer extends OverlayContainer {
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _fullScreenEventName;
      _cleanupFullScreenListener;
      constructor() {
        super();
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        this._cleanupFullScreenListener?.();
      }
      _createContainer() {
        const eventName = this._getEventName();
        super._createContainer();
        this._adjustParentForFullscreenChange();
        if (eventName) {
          this._cleanupFullScreenListener?.();
          this._cleanupFullScreenListener = this._renderer.listen("document", eventName, () => {
            this._adjustParentForFullscreenChange();
          });
        }
      }
      _adjustParentForFullscreenChange() {
        if (this._containerElement) {
          const fullscreenElement = this.getFullscreenElement();
          const parent = fullscreenElement || this._document.body;
          parent.appendChild(this._containerElement);
        }
      }
      _getEventName() {
        if (!this._fullScreenEventName) {
          const _document = this._document;
          if (_document.fullscreenEnabled) {
            this._fullScreenEventName = "fullscreenchange";
          } else if (_document.webkitFullscreenEnabled) {
            this._fullScreenEventName = "webkitfullscreenchange";
          } else if (_document.mozFullScreenEnabled) {
            this._fullScreenEventName = "mozfullscreenchange";
          } else if (_document.msFullscreenEnabled) {
            this._fullScreenEventName = "MSFullscreenChange";
          }
        }
        return this._fullScreenEventName;
      }
      /**
       * When the page is put into fullscreen mode, a specific element is specified.
       * Only that element and its children are visible when in fullscreen mode.
       */
      getFullscreenElement() {
        const _document = this._document;
        return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FullscreenOverlayContainer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FullscreenOverlayContainer, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: FullscreenOverlayContainer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-polyfill.mjs
var requestAnimationFrame2, cancelAnimationFrame;
var init_ng_zorro_antd_core_polyfill = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-polyfill.mjs"() {
    "use strict";
    requestAnimationFrame2 = typeof globalThis.requestAnimationFrame === "function" ? globalThis.requestAnimationFrame : globalThis.setTimeout;
    cancelAnimationFrame = typeof globalThis.requestAnimationFrame === "function" ? globalThis.cancelAnimationFrame : globalThis.clearTimeout;
  }
});

// node_modules/@angular/cdk/fesm2022/breakpoints-observer-QutrMj4x.mjs
function createEmptyStyleRule(query2, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query2)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query2} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query2);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query2) {
  return {
    matches: query2 === "all" || query2 === "",
    media: query2,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
function splitQueries(queries) {
  return queries.map((query2) => query2.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query2) => query2.trim());
}
var mediaQueriesForWebkitCompatibility, mediaQueryStyleNode, MediaMatcher, BreakpointObserver;
var init_breakpoints_observer_QutrMj4x = __esm({
  "node_modules/@angular/cdk/fesm2022/breakpoints-observer-QutrMj4x.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_platform_DNDzkVcI();
    init_array_I1yfCXUO();
    mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
    MediaMatcher = class _MediaMatcher {
      _platform = inject(Platform);
      _nonce = inject(CSP_NONCE, { optional: true });
      /** The internal matchMedia method to return back a MediaQueryList like object. */
      _matchMedia;
      constructor() {
        this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
          // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
          // call it from a different scope.
          window.matchMedia.bind(window)
        ) : noopMatchMedia;
      }
      /**
       * Evaluates the given media query and returns the native MediaQueryList from which results
       * can be retrieved.
       * Confirms the layout engine will trigger for the selector query provided and returns the
       * MediaQueryList for the query provided.
       */
      matchMedia(query2) {
        if (this._platform.WEBKIT || this._platform.BLINK) {
          createEmptyStyleRule(query2, this._nonce);
        }
        return this._matchMedia(query2);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MediaMatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MediaMatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MediaMatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    BreakpointObserver = class _BreakpointObserver {
      _mediaMatcher = inject(MediaMatcher);
      _zone = inject(NgZone);
      /**  A map of all media queries currently being listened for. */
      _queries = /* @__PURE__ */ new Map();
      /** A subject for all other observables to takeUntil based on. */
      _destroySubject = new Subject();
      constructor() {
      }
      /** Completes the active subject, signalling to all other observables to complete. */
      ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
      }
      /**
       * Whether one or more media queries match the current viewport size.
       * @param value One or more media queries to check.
       * @returns Whether any of the media queries match.
       */
      isMatched(value) {
        const queries = splitQueries(coerceArray(value));
        return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
      }
      /**
       * Gets an observable of results for the given queries that will emit new results for any changes
       * in matching of the given queries.
       * @param value One or more media queries to check.
       * @returns A stream of matches for the given queries.
       */
      observe(value) {
        const queries = splitQueries(coerceArray(value));
        const observables = queries.map((query2) => this._registerQuery(query2).observable);
        let stateObservable = combineLatest(observables);
        stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
        return stateObservable.pipe(map((breakpointStates) => {
          const response = {
            matches: false,
            breakpoints: {}
          };
          breakpointStates.forEach(({ matches, query: query2 }) => {
            response.matches = response.matches || matches;
            response.breakpoints[query2] = matches;
          });
          return response;
        }));
      }
      /** Registers a specific query to be listened for. */
      _registerQuery(query2) {
        if (this._queries.has(query2)) {
          return this._queries.get(query2);
        }
        const mql = this._mediaMatcher.matchMedia(query2);
        const queryObservable = new Observable((observer) => {
          const handler = (e) => this._zone.run(() => observer.next(e));
          mql.addListener(handler);
          return () => {
            mql.removeListener(handler);
          };
        }).pipe(startWith(mql), map(({ matches }) => ({ query: query2, matches })), takeUntil(this._destroySubject));
        const output = { observable: queryObservable, mql };
        this._queries.set(query2, output);
        return output;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BreakpointObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BreakpointObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: BreakpointObserver, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/layout.mjs
var LayoutModule;
var init_layout = __esm({
  "node_modules/@angular/cdk/fesm2022/layout.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_breakpoints_observer_QutrMj4x();
    LayoutModule = class _LayoutModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _LayoutModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _LayoutModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _LayoutModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: LayoutModule, decorators: [{
      type: NgModule,
      args: [{}]
    }] });
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-services.mjs
function getPagePosition(event) {
  const e = getEventPosition(event);
  return {
    x: e.pageX,
    y: e.pageY
  };
}
function easeInOutCubic(t, b, c, d) {
  const cc = c - b;
  let tt = t / (d / 2);
  if (tt < 1) {
    return cc / 2 * tt * tt * tt + b;
  } else {
    return cc / 2 * ((tt -= 2) * tt * tt + 2) + b;
  }
}
var NOOP, NzResizeService, testSingleRegistry, NzSingletonService, NzDragService, NzScrollService, NzBreakpointEnum, gridResponsiveMap, NzBreakpointService, NzDestroyService, ImagePreloadService;
var init_ng_zorro_antd_core_services = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-services.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_ng_zorro_antd_core_environments();
    init_ng_zorro_antd_core_util();
    init_ng_zorro_antd_core_polyfill();
    init_layout();
    init_rxjs_interop();
    init_platform();
    NOOP = () => {
    };
    NzResizeService = class _NzResizeService {
      ngZone = inject(NgZone);
      destroyRef = inject(DestroyRef);
      resizeSource$ = new Subject();
      listeners = 0;
      renderer = inject(RendererFactory2).createRenderer(null, null);
      disposeHandle = NOOP;
      handler = () => {
        this.ngZone.run(() => {
          this.resizeSource$.next();
        });
      };
      constructor() {
        this.destroyRef.onDestroy(() => {
          this.handler = NOOP;
        });
      }
      connect() {
        this.registerListener();
        return this.resizeSource$.pipe(auditTime(16), finalize(() => this.unregisterListener()));
      }
      disconnet() {
        this.unregisterListener();
      }
      registerListener() {
        if (this.listeners === 0) {
          this.ngZone.runOutsideAngular(() => {
            this.disposeHandle = this.renderer.listen("window", "resize", this.handler);
          });
        }
        this.listeners += 1;
      }
      unregisterListener() {
        this.listeners -= 1;
        if (this.listeners === 0) {
          this.disposeHandle();
          this.disposeHandle = NOOP;
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzResizeService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzResizeService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzResizeService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: () => [] });
    testSingleRegistry = /* @__PURE__ */ new Map();
    NzSingletonService = class _NzSingletonService {
      get singletonRegistry() {
        return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
      }
      /**
       * This registry is used to register singleton in dev mode.
       * So that singletons get destroyed when hot module reload happens.
       *
       * This works in prod mode too but with no specific effect.
       */
      _singletonRegistry = /* @__PURE__ */ new Map();
      registerSingletonWithKey(key, target) {
        const alreadyHave = this.singletonRegistry.has(key);
        const item = alreadyHave ? this.singletonRegistry.get(key) : this.withNewTarget(target);
        if (!alreadyHave) {
          this.singletonRegistry.set(key, item);
        }
      }
      unregisterSingletonWithKey(key) {
        if (this.singletonRegistry.has(key)) {
          this.singletonRegistry.delete(key);
        }
      }
      getSingletonWithKey(key) {
        return this.singletonRegistry.has(key) ? this.singletonRegistry.get(key).target : null;
      }
      withNewTarget(target) {
        return {
          target
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzSingletonService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzSingletonService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzSingletonService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }] });
    NzDragService = class _NzDragService {
      draggingThreshold = 5;
      currentDraggingSequence = null;
      currentStartingPoint = null;
      handleRegistry = /* @__PURE__ */ new Set();
      renderer = inject(RendererFactory2).createRenderer(null, null);
      requestDraggingSequence(event) {
        if (!this.handleRegistry.size) {
          this.registerDraggingHandler(isTouchEvent(event));
        }
        if (this.currentDraggingSequence) {
          this.currentDraggingSequence.complete();
        }
        this.currentStartingPoint = getPagePosition(event);
        this.currentDraggingSequence = new Subject();
        return this.currentDraggingSequence.pipe(map((e) => ({
          x: e.pageX - this.currentStartingPoint.x,
          y: e.pageY - this.currentStartingPoint.y
        })), filter((e) => Math.abs(e.x) > this.draggingThreshold || Math.abs(e.y) > this.draggingThreshold), finalize(() => this.teardownDraggingSequence()));
      }
      registerDraggingHandler(isTouch) {
        if (isTouch) {
          this.handleRegistry.add({
            teardown: this.renderer.listen("document", "touchmove", (e) => {
              if (this.currentDraggingSequence) {
                this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
              }
            })
          });
          this.handleRegistry.add({
            teardown: this.renderer.listen("document", "touchend", () => {
              if (this.currentDraggingSequence) {
                this.currentDraggingSequence.complete();
              }
            })
          });
        } else {
          this.handleRegistry.add({
            teardown: this.renderer.listen("document", "mousemove", (e) => {
              if (this.currentDraggingSequence) {
                this.currentDraggingSequence.next(e);
              }
            })
          });
          this.handleRegistry.add({
            teardown: this.renderer.listen("document", "mouseup", () => {
              if (this.currentDraggingSequence) {
                this.currentDraggingSequence.complete();
              }
            })
          });
        }
      }
      teardownDraggingSequence() {
        this.currentDraggingSequence = null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzDragService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzDragService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzDragService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }] });
    NzScrollService = class _NzScrollService {
      doc = inject(DOCUMENT);
      ngZone = inject(NgZone);
      /** Set the position of the scroll bar of `el`. */
      setScrollTop(el, topValue = 0) {
        if (el === window) {
          this.doc.body.scrollTop = topValue;
          this.doc.documentElement.scrollTop = topValue;
        } else {
          el.scrollTop = topValue;
        }
      }
      /** Get position of `el` against window. */
      getOffset(el) {
        const ret = {
          top: 0,
          left: 0
        };
        if (!el || !el.getClientRects().length) {
          return ret;
        }
        const rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
          const doc = el.ownerDocument.documentElement;
          ret.top = rect.top - doc.clientTop;
          ret.left = rect.left - doc.clientLeft;
        } else {
          ret.top = rect.top;
          ret.left = rect.left;
        }
        return ret;
      }
      /** Get the position of the scoll bar of `el`. */
      // TODO: remove '| Window' as the fallback already happens here
      getScroll(target, top = true) {
        if (typeof window === "undefined") {
          return 0;
        }
        const method = top ? "scrollTop" : "scrollLeft";
        let result = 0;
        if (this.isWindow(target)) {
          result = target[top ? "pageYOffset" : "pageXOffset"];
        } else if (target instanceof Document) {
          result = target.documentElement[method];
        } else if (target) {
          result = target[method];
        }
        if (target && !this.isWindow(target) && typeof result !== "number") {
          result = (target.ownerDocument || target).documentElement[method];
        }
        return result;
      }
      isWindow(obj) {
        return obj !== null && obj !== void 0 && obj === obj.window;
      }
      /**
       * Scroll `el` to some position with animation.
       *
       * @param containerEl container, `window` by default
       * @param y Scroll to `top`, 0 by default
       * @param options Scroll animation options
       */
      scrollTo(containerEl, y = 0, options = {}) {
        const target = containerEl ? containerEl : window;
        const scrollTop = this.getScroll(target);
        const startTime = Date.now();
        const { easing, callback, duration = 450 } = options;
        const frameFunc = () => {
          const timestamp = Date.now();
          const time = timestamp - startTime;
          const nextScrollTop = (easing || easeInOutCubic)(time > duration ? duration : time, scrollTop, y, duration);
          if (this.isWindow(target)) {
            target.scrollTo(window.pageXOffset, nextScrollTop);
          } else if (target instanceof HTMLDocument || target.constructor.name === "HTMLDocument") {
            target.documentElement.scrollTop = nextScrollTop;
          } else {
            target.scrollTop = nextScrollTop;
          }
          if (time < duration) {
            requestAnimationFrame2(frameFunc);
          } else if (typeof callback === "function") {
            this.ngZone.run(callback);
          }
        };
        this.ngZone.runOutsideAngular(() => requestAnimationFrame2(frameFunc));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzScrollService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzScrollService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzScrollService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }] });
    (function(NzBreakpointEnum2) {
      NzBreakpointEnum2["xxl"] = "xxl";
      NzBreakpointEnum2["xl"] = "xl";
      NzBreakpointEnum2["lg"] = "lg";
      NzBreakpointEnum2["md"] = "md";
      NzBreakpointEnum2["sm"] = "sm";
      NzBreakpointEnum2["xs"] = "xs";
    })(NzBreakpointEnum || (NzBreakpointEnum = {}));
    gridResponsiveMap = {
      xs: "(max-width: 575px)",
      sm: "(min-width: 576px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 992px)",
      xl: "(min-width: 1200px)",
      xxl: "(min-width: 1600px)"
    };
    NzBreakpointService = class _NzBreakpointService {
      resizeService = inject(NzResizeService);
      mediaMatcher = inject(MediaMatcher);
      constructor() {
        this.resizeService.connect().pipe(takeUntilDestroyed()).subscribe(() => {
        });
      }
      subscribe(breakpointMap, fullMap) {
        if (fullMap) {
          const get = () => this.matchMedia(breakpointMap, true);
          return this.resizeService.connect().pipe(map(get), startWith(get()), distinctUntilChanged((x, y) => x[0] === y[0]), map((x) => x[1]));
        } else {
          const get = () => this.matchMedia(breakpointMap);
          return this.resizeService.connect().pipe(map(get), startWith(get()), distinctUntilChanged());
        }
      }
      matchMedia(breakpointMap, fullMap) {
        let bp = NzBreakpointEnum.md;
        const breakpointBooleanMap = {};
        Object.keys(breakpointMap).map((breakpoint) => {
          const castBP = breakpoint;
          const matched = this.mediaMatcher.matchMedia(gridResponsiveMap[castBP]).matches;
          breakpointBooleanMap[breakpoint] = matched;
          if (matched) {
            bp = castBP;
          }
        });
        if (fullMap) {
          return [bp, breakpointBooleanMap];
        } else {
          return bp;
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzBreakpointService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzBreakpointService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzBreakpointService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: () => [] });
    NzDestroyService = class _NzDestroyService extends Subject {
      ngOnDestroy() {
        this.next();
        this.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzDestroyService, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzDestroyService });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzDestroyService, decorators: [{
      type: Injectable
    }] });
    ImagePreloadService = class _ImagePreloadService {
      counter = /* @__PURE__ */ new Map();
      linkRefs = /* @__PURE__ */ new Map();
      document = inject(DOCUMENT);
      platform = inject(Platform);
      addPreload(option) {
        if (this.platform.isBrowser) {
          return () => void 0;
        }
        const uniqueKey = `${option.src}${option.srcset}`;
        let currentCount = this.counter.get(uniqueKey) || 0;
        currentCount++;
        this.counter.set(uniqueKey, currentCount);
        if (!this.linkRefs.has(uniqueKey)) {
          const linkNode = this.appendPreloadLink(option);
          this.linkRefs.set(uniqueKey, linkNode);
        }
        return () => {
          if (this.counter.has(uniqueKey)) {
            let count = this.counter.get(uniqueKey);
            count--;
            if (count === 0) {
              const linkNode = this.linkRefs.get(uniqueKey);
              this.removePreloadLink(linkNode);
              this.counter.delete(uniqueKey);
              this.linkRefs.delete(uniqueKey);
            } else {
              this.counter.set(uniqueKey, count);
            }
          }
        };
      }
      appendPreloadLink(option) {
        const linkNode = this.document.createElement("link");
        linkNode.setAttribute("rel", "preload");
        linkNode.setAttribute("as", "image");
        linkNode.setAttribute("href", option.src);
        if (option.srcset) {
          linkNode.setAttribute("imagesrcset", option.srcset);
        }
        this.document.head.appendChild(linkNode);
        return linkNode;
      }
      removePreloadLink(linkNode) {
        if (this.document.head.contains(linkNode)) {
          this.document.head.removeChild(linkNode);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ImagePreloadService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ImagePreloadService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ImagePreloadService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }] });
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-message.mjs
var globalCounter, NzMNService, NzMNContainerComponent, NzMNComponent, NzMessageComponent, NZ_CONFIG_COMPONENT_NAME, NZ_MESSAGE_DEFAULT_CONFIG, NzMessageContainerComponent, NzMessageService;
var init_ng_zorro_antd_message = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-message.mjs"() {
    "use strict";
    init_overlay();
    init_portal();
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_ng_zorro_antd_core_config();
    init_ng_zorro_antd_core_services();
    init_ng_zorro_antd_core_util();
    init_ng_zorro_antd_core_animation();
    init_ng_zorro_antd_core_outlet();
    init_ng_zorro_antd_core_outlet();
    init_ng_zorro_antd_icon();
    init_ng_zorro_antd_icon();
    globalCounter = 0;
    NzMNService = class {
      container;
      nzSingletonService = inject(NzSingletonService);
      overlay = inject(Overlay);
      injector = inject(Injector);
      remove(id) {
        if (this.container) {
          if (id) {
            this.container.remove(id);
          } else {
            this.container.removeAll();
          }
        }
      }
      getInstanceId() {
        return `${this.componentPrefix}-${globalCounter++}`;
      }
      withContainer(ctor) {
        let containerInstance = this.nzSingletonService.getSingletonWithKey(this.componentPrefix);
        if (containerInstance) {
          return containerInstance;
        }
        const overlayRef = this.overlay.create({
          hasBackdrop: false,
          scrollStrategy: this.overlay.scrollStrategies.noop(),
          positionStrategy: this.overlay.position().global()
        });
        const componentPortal = new ComponentPortal(ctor, null, this.injector);
        const componentRef = overlayRef.attach(componentPortal);
        const overlayWrapper = overlayRef.hostElement;
        overlayWrapper.style.zIndex = "1010";
        if (!containerInstance) {
          this.container = containerInstance = componentRef.instance;
          this.nzSingletonService.registerSingletonWithKey(this.componentPrefix, containerInstance);
          this.container.afterAllInstancesRemoved.subscribe(() => {
            this.container = void 0;
            this.nzSingletonService.unregisterSingletonWithKey(this.componentPrefix);
            overlayRef.dispose();
          });
        }
        return containerInstance;
      }
    };
    NzMNContainerComponent = class _NzMNContainerComponent {
      config;
      instances = [];
      _afterAllInstancesRemoved = new Subject();
      afterAllInstancesRemoved = this._afterAllInstancesRemoved.asObservable();
      cdr = inject(ChangeDetectorRef);
      nzConfigService = inject(NzConfigService);
      constructor() {
        this.subscribeConfigChange();
      }
      create(data) {
        const instance = this.onCreate(data);
        if (this.instances.length >= this.config.nzMaxStack) {
          this.instances = this.instances.slice(1);
        }
        this.instances = [...this.instances, instance];
        this.readyInstances();
        return instance;
      }
      remove(id, userAction = false) {
        this.instances.map((instance, index) => ({ index, instance })).filter(({ instance }) => instance.messageId === id).forEach(({ index, instance }) => {
          this.instances.splice(index, 1);
          this.instances = [...this.instances];
          this.onRemove(instance, userAction);
          this.readyInstances();
        });
        if (!this.instances.length) {
          this.onAllInstancesRemoved();
        }
      }
      removeAll() {
        this.instances.forEach((i) => this.onRemove(i, false));
        this.instances = [];
        this.readyInstances();
        this.onAllInstancesRemoved();
      }
      onCreate(instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new Subject();
        return instance;
      }
      onRemove(instance, userAction) {
        instance.onClose.next(userAction);
        instance.onClose.complete();
      }
      onAllInstancesRemoved() {
        this._afterAllInstancesRemoved.next();
        this._afterAllInstancesRemoved.complete();
      }
      readyInstances() {
        this.cdr.detectChanges();
      }
      mergeOptions(options) {
        const { nzDuration, nzAnimate, nzPauseOnHover } = this.config;
        return __spreadValues({ nzDuration, nzAnimate, nzPauseOnHover }, options);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzMNContainerComponent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _NzMNContainerComponent, isStandalone: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzMNContainerComponent, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    NzMNComponent = class _NzMNComponent {
      cdr = inject(ChangeDetectorRef);
      destroyRef = inject(DestroyRef);
      animationStateChanged = new Subject();
      options;
      autoClose;
      closeTimer;
      userAction = false;
      eraseTimer;
      eraseTimingStart;
      eraseTTL;
      constructor() {
        this.destroyRef.onDestroy(() => {
          if (this.autoClose) {
            this.clearEraseTimeout();
          }
          this.animationStateChanged.complete();
        });
      }
      ngOnInit() {
        this.options = this.instance.options;
        if (this.options.nzAnimate) {
          this.instance.state = "enter";
          this.animationStateChanged.pipe(filter((event) => event.phaseName === "done" && event.toState === "leave"), take(1)).subscribe(() => {
            clearTimeout(this.closeTimer);
            this.destroyed.next({ id: this.instance.messageId, userAction: this.userAction });
          });
        }
        this.autoClose = this.options.nzDuration > 0;
        if (this.autoClose) {
          this.initErase();
          this.startEraseTimeout();
        }
      }
      onEnter() {
        if (this.autoClose && this.options.nzPauseOnHover) {
          this.clearEraseTimeout();
          this.updateTTL();
        }
      }
      onLeave() {
        if (this.autoClose && this.options.nzPauseOnHover) {
          this.startEraseTimeout();
        }
      }
      destroy(userAction = false) {
        this.userAction = userAction;
        if (this.options.nzAnimate) {
          this.instance.state = "leave";
          this.cdr.detectChanges();
          this.closeTimer = setTimeout(() => {
            this.closeTimer = void 0;
            this.destroyed.next({ id: this.instance.messageId, userAction });
          }, 200);
        } else {
          this.destroyed.next({ id: this.instance.messageId, userAction });
        }
      }
      initErase() {
        this.eraseTTL = this.options.nzDuration;
        this.eraseTimingStart = Date.now();
      }
      updateTTL() {
        if (this.autoClose) {
          this.eraseTTL -= Date.now() - this.eraseTimingStart;
        }
      }
      startEraseTimeout() {
        if (this.eraseTTL > 0) {
          this.clearEraseTimeout();
          this.eraseTimer = setTimeout(() => this.destroy(), this.eraseTTL);
          this.eraseTimingStart = Date.now();
        } else {
          this.destroy();
        }
      }
      clearEraseTimeout() {
        if (this.eraseTimer !== null) {
          clearTimeout(this.eraseTimer);
          this.eraseTimer = void 0;
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzMNComponent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _NzMNComponent, isStandalone: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzMNComponent, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    NzMessageComponent = class _NzMessageComponent extends NzMNComponent {
      instance;
      destroyed = new EventEmitter();
      index;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzMessageComponent, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _NzMessageComponent, isStandalone: true, selector: "nz-message", inputs: { instance: "instance" }, outputs: { destroyed: "destroyed" }, exportAs: ["nzMessage"], usesInheritance: true, ngImport: core_exports, template: `
    <div
      class="ant-message-notice"
      [@moveUpMotion]="instance.state"
      (@moveUpMotion.done)="animationStateChanged.next($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div class="ant-message-notice-content">
        <div class="ant-message-custom-content" [class]="'ant-message-' + instance.type">
          @switch (instance.type) {
            @case ('success') {
              <nz-icon nzType="check-circle" />
            }
            @case ('info') {
              <nz-icon nzType="info-circle" />
            }
            @case ('warning') {
              <nz-icon nzType="exclamation-circle" />
            }
            @case ('error') {
              <nz-icon nzType="close-circle" />
            }
            @case ('loading') {
              <nz-icon nzType="loading" />
            }
          }
          <ng-container
            *nzStringTemplateOutlet="instance.content; context: { $implicit: this, data: instance.options?.nzData }"
          >
            <span [innerHTML]="instance.content"></span>
          </ng-container>
        </div>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: NzIconModule }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "ngmodule", type: NzOutletModule }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], animations: [moveUpMotion], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzMessageComponent, decorators: [{
      type: Component,
      args: [{
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        selector: "nz-message",
        exportAs: "nzMessage",
        animations: [moveUpMotion],
        template: `
    <div
      class="ant-message-notice"
      [@moveUpMotion]="instance.state"
      (@moveUpMotion.done)="animationStateChanged.next($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div class="ant-message-notice-content">
        <div class="ant-message-custom-content" [class]="'ant-message-' + instance.type">
          @switch (instance.type) {
            @case ('success') {
              <nz-icon nzType="check-circle" />
            }
            @case ('info') {
              <nz-icon nzType="info-circle" />
            }
            @case ('warning') {
              <nz-icon nzType="exclamation-circle" />
            }
            @case ('error') {
              <nz-icon nzType="close-circle" />
            }
            @case ('loading') {
              <nz-icon nzType="loading" />
            }
          }
          <ng-container
            *nzStringTemplateOutlet="instance.content; context: { $implicit: this, data: instance.options?.nzData }"
          >
            <span [innerHTML]="instance.content"></span>
          </ng-container>
        </div>
      </div>
    </div>
  `,
        imports: [NzIconModule, NzOutletModule]
      }]
    }], propDecorators: { instance: [{
      type: Input
    }], destroyed: [{
      type: Output
    }] } });
    NZ_CONFIG_COMPONENT_NAME = "message";
    NZ_MESSAGE_DEFAULT_CONFIG = {
      nzAnimate: true,
      nzDuration: 3e3,
      nzMaxStack: 7,
      nzPauseOnHover: true,
      nzTop: 24,
      nzDirection: "ltr"
    };
    NzMessageContainerComponent = class _NzMessageContainerComponent extends NzMNContainerComponent {
      dir = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)?.nzDirection || "ltr";
      top;
      constructor() {
        super();
        this.updateConfig();
      }
      subscribeConfigChange() {
        onConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME, () => {
          this.updateConfig();
          this.dir = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)?.nzDirection || this.dir;
        });
      }
      updateConfig() {
        this.config = __spreadValues(__spreadValues(__spreadValues({}, NZ_MESSAGE_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzMessageContainerComponent, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _NzMessageContainerComponent, isStandalone: true, selector: "nz-message-container", exportAs: ["nzMessageContainer"], usesInheritance: true, ngImport: core_exports, template: `
    <div class="ant-message" [class.ant-message-rtl]="dir === 'rtl'" [style.top]="top">
      @for (instance of instances; track instance) {
        <nz-message [instance]="instance" (destroyed)="remove($event.id, $event.userAction)"></nz-message>
      }
    </div>
  `, isInline: true, dependencies: [{ kind: "component", type: NzMessageComponent, selector: "nz-message", inputs: ["instance"], outputs: ["destroyed"], exportAs: ["nzMessage"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzMessageContainerComponent, decorators: [{
      type: Component,
      args: [{
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        selector: "nz-message-container",
        exportAs: "nzMessageContainer",
        template: `
    <div class="ant-message" [class.ant-message-rtl]="dir === 'rtl'" [style.top]="top">
      @for (instance of instances; track instance) {
        <nz-message [instance]="instance" (destroyed)="remove($event.id, $event.userAction)"></nz-message>
      }
    </div>
  `,
        imports: [NzMessageComponent]
      }]
    }], ctorParameters: () => [] });
    NzMessageService = class _NzMessageService extends NzMNService {
      componentPrefix = "message-";
      success(content, options) {
        return this.createInstance({ type: "success", content }, options);
      }
      error(content, options) {
        return this.createInstance({ type: "error", content }, options);
      }
      info(content, options) {
        return this.createInstance({ type: "info", content }, options);
      }
      warning(content, options) {
        return this.createInstance({ type: "warning", content }, options);
      }
      loading(content, options) {
        return this.createInstance({ type: "loading", content }, options);
      }
      create(type, content, options) {
        return this.createInstance({ type, content }, options);
      }
      createInstance(message, options) {
        this.container = this.withContainer(NzMessageContainerComponent);
        return this.container.create(__spreadValues(__spreadValues({}, message), {
          createdAt: /* @__PURE__ */ new Date(),
          messageId: this.getInstanceId(),
          options
        }));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzMessageService, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzMessageService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzMessageService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }] });
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-notification.mjs
var NzNotificationComponent, NZ_CONFIG_MODULE_NAME, NZ_NOTIFICATION_DEFAULT_CONFIG, NzNotificationContainerComponent, notificationId, NzNotificationService;
var init_ng_zorro_antd_notification = __esm({
  "node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-notification.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_ng_zorro_antd_core_animation();
    init_ng_zorro_antd_core_outlet();
    init_ng_zorro_antd_core_outlet();
    init_ng_zorro_antd_icon();
    init_ng_zorro_antd_icon();
    init_ng_zorro_antd_message();
    init_esm();
    init_ng_zorro_antd_core_config();
    init_ng_zorro_antd_core_util();
    NzNotificationComponent = class _NzNotificationComponent extends NzMNComponent {
      instance;
      index;
      placement;
      destroyed = new EventEmitter();
      constructor() {
        super();
        this.destroyRef.onDestroy(() => {
          this.instance.onClick.complete();
        });
      }
      onClick(event) {
        this.instance.onClick.next(event);
      }
      close() {
        this.destroy(true);
      }
      get state() {
        if (this.instance.state === "enter") {
          switch (this.placement) {
            case "topLeft":
            case "bottomLeft":
              return "enterLeft";
            case "topRight":
            case "bottomRight":
              return "enterRight";
            case "top":
              return "enterTop";
            case "bottom":
              return "enterBottom";
            default:
              return "enterRight";
          }
        } else {
          return this.instance.state;
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzNotificationComponent, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _NzNotificationComponent, isStandalone: true, selector: "nz-notification", inputs: { instance: "instance", index: "index", placement: "placement" }, outputs: { destroyed: "destroyed" }, exportAs: ["nzNotification"], usesInheritance: true, ngImport: core_exports, template: `
    <div
      class="ant-notification-notice ant-notification-notice-closable"
      [style]="instance.options?.nzStyle || null"
      [class]="instance.options?.nzClass || ''"
      [@notificationMotion]="state"
      (@notificationMotion.done)="animationStateChanged.next($event)"
      (click)="onClick($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      @if (instance.template) {
        <ng-template
          [ngTemplateOutlet]="instance.template!"
          [ngTemplateOutletContext]="{ $implicit: this, data: instance.options?.nzData }"
        />
      } @else {
        <div class="ant-notification-notice-content">
          <div class="ant-notification-notice-content">
            <div [class.ant-notification-notice-with-icon]="instance.type !== 'blank'">
              @switch (instance.type) {
                @case ('success') {
                  <nz-icon
                    nzType="check-circle"
                    class="ant-notification-notice-icon ant-notification-notice-icon-success"
                  />
                }
                @case ('info') {
                  <nz-icon
                    nzType="info-circle"
                    class="ant-notification-notice-icon ant-notification-notice-icon-info"
                  />
                }
                @case ('warning') {
                  <nz-icon
                    nzType="exclamation-circle"
                    class="ant-notification-notice-icon ant-notification-notice-icon-warning"
                  />
                }
                @case ('error') {
                  <nz-icon
                    nzType="close-circle"
                    class="ant-notification-notice-icon ant-notification-notice-icon-error"
                  />
                }
              }
              <div class="ant-notification-notice-message">
                <ng-container *nzStringTemplateOutlet="instance.title">
                  <div [innerHTML]="instance.title"></div>
                </ng-container>
              </div>
              <div class="ant-notification-notice-description">
                <ng-container
                  *nzStringTemplateOutlet="
                    instance.content;
                    context: { $implicit: this, data: instance.options?.nzData }
                  "
                >
                  <div [innerHTML]="instance.content"></div>
                </ng-container>
              </div>
              @if (instance.options?.nzButton; as btn) {
                <span class="ant-notification-notice-btn">
                  <ng-template [ngTemplateOutlet]="btn" [ngTemplateOutletContext]="{ $implicit: this }" />
                </span>
              }
            </div>
          </div>
        </div>
      }
      <a tabindex="0" class="ant-notification-notice-close" (click)="close()">
        <span class="ant-notification-notice-close-x">
          @if (instance.options?.nzCloseIcon) {
            <ng-container *nzStringTemplateOutlet="instance.options?.nzCloseIcon; let closeIcon">
              <nz-icon [nzType]="closeIcon" />
            </ng-container>
          } @else {
            <nz-icon nzType="close" class="ant-notification-close-icon" />
          }
        </span>
      </a>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: NzIconModule }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "ngmodule", type: NzOutletModule }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], animations: [notificationMotion], encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzNotificationComponent, decorators: [{
      type: Component,
      args: [{
        encapsulation: ViewEncapsulation.None,
        selector: "nz-notification",
        exportAs: "nzNotification",
        animations: [notificationMotion],
        template: `
    <div
      class="ant-notification-notice ant-notification-notice-closable"
      [style]="instance.options?.nzStyle || null"
      [class]="instance.options?.nzClass || ''"
      [@notificationMotion]="state"
      (@notificationMotion.done)="animationStateChanged.next($event)"
      (click)="onClick($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      @if (instance.template) {
        <ng-template
          [ngTemplateOutlet]="instance.template!"
          [ngTemplateOutletContext]="{ $implicit: this, data: instance.options?.nzData }"
        />
      } @else {
        <div class="ant-notification-notice-content">
          <div class="ant-notification-notice-content">
            <div [class.ant-notification-notice-with-icon]="instance.type !== 'blank'">
              @switch (instance.type) {
                @case ('success') {
                  <nz-icon
                    nzType="check-circle"
                    class="ant-notification-notice-icon ant-notification-notice-icon-success"
                  />
                }
                @case ('info') {
                  <nz-icon
                    nzType="info-circle"
                    class="ant-notification-notice-icon ant-notification-notice-icon-info"
                  />
                }
                @case ('warning') {
                  <nz-icon
                    nzType="exclamation-circle"
                    class="ant-notification-notice-icon ant-notification-notice-icon-warning"
                  />
                }
                @case ('error') {
                  <nz-icon
                    nzType="close-circle"
                    class="ant-notification-notice-icon ant-notification-notice-icon-error"
                  />
                }
              }
              <div class="ant-notification-notice-message">
                <ng-container *nzStringTemplateOutlet="instance.title">
                  <div [innerHTML]="instance.title"></div>
                </ng-container>
              </div>
              <div class="ant-notification-notice-description">
                <ng-container
                  *nzStringTemplateOutlet="
                    instance.content;
                    context: { $implicit: this, data: instance.options?.nzData }
                  "
                >
                  <div [innerHTML]="instance.content"></div>
                </ng-container>
              </div>
              @if (instance.options?.nzButton; as btn) {
                <span class="ant-notification-notice-btn">
                  <ng-template [ngTemplateOutlet]="btn" [ngTemplateOutletContext]="{ $implicit: this }" />
                </span>
              }
            </div>
          </div>
        </div>
      }
      <a tabindex="0" class="ant-notification-notice-close" (click)="close()">
        <span class="ant-notification-notice-close-x">
          @if (instance.options?.nzCloseIcon) {
            <ng-container *nzStringTemplateOutlet="instance.options?.nzCloseIcon; let closeIcon">
              <nz-icon [nzType]="closeIcon" />
            </ng-container>
          } @else {
            <nz-icon nzType="close" class="ant-notification-close-icon" />
          }
        </span>
      </a>
    </div>
  `,
        imports: [NzIconModule, NzOutletModule, NgTemplateOutlet]
      }]
    }], ctorParameters: () => [], propDecorators: { instance: [{
      type: Input
    }], index: [{
      type: Input
    }], placement: [{
      type: Input
    }], destroyed: [{
      type: Output
    }] } });
    NZ_CONFIG_MODULE_NAME = "notification";
    NZ_NOTIFICATION_DEFAULT_CONFIG = {
      nzTop: "24px",
      nzBottom: "24px",
      nzPlacement: "topRight",
      nzDuration: 4500,
      nzMaxStack: 8,
      nzPauseOnHover: true,
      nzAnimate: true,
      nzDirection: "ltr"
    };
    NzNotificationContainerComponent = class _NzNotificationContainerComponent extends NzMNContainerComponent {
      dir = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME)?.nzDirection || "ltr";
      bottom;
      top;
      topLeftInstances = [];
      topRightInstances = [];
      bottomLeftInstances = [];
      bottomRightInstances = [];
      topInstances = [];
      bottomInstances = [];
      constructor() {
        super();
        this.updateConfig();
      }
      create(notification) {
        const instance = this.onCreate(notification);
        const key = instance.options.nzKey;
        const notificationWithSameKey = this.instances.find((msg) => msg.options.nzKey === notification.options.nzKey);
        if (key && notificationWithSameKey) {
          this.replaceNotification(notificationWithSameKey, instance);
        } else {
          if (this.instances.length >= this.config.nzMaxStack) {
            this.instances = this.instances.slice(1);
          }
          this.instances = [...this.instances, instance];
        }
        this.readyInstances();
        return instance;
      }
      onCreate(instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new Subject();
        instance.onClick = new Subject();
        return instance;
      }
      subscribeConfigChange() {
        onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME, () => {
          this.updateConfig();
          this.dir = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME)?.nzDirection || this.dir;
        });
      }
      updateConfig() {
        this.config = __spreadValues(__spreadValues(__spreadValues({}, NZ_NOTIFICATION_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME));
        this.top = toCssPixel(this.config.nzTop);
        this.bottom = toCssPixel(this.config.nzBottom);
        this.cdr.markForCheck();
      }
      replaceNotification(old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
        old.options = _new.options;
      }
      readyInstances() {
        const instancesMap = {
          topLeft: [],
          topRight: [],
          bottomLeft: [],
          bottomRight: [],
          top: [],
          bottom: []
        };
        this.instances.forEach((m) => {
          const placement = m.options.nzPlacement;
          switch (placement) {
            case "topLeft":
              instancesMap.topLeft.unshift(m);
              break;
            case "topRight":
              instancesMap.topRight.unshift(m);
              break;
            case "bottomLeft":
              instancesMap.bottomLeft.unshift(m);
              break;
            case "bottomRight":
              instancesMap.bottomRight.unshift(m);
              break;
            case "top":
              instancesMap.top.unshift(m);
              break;
            case "bottom":
              instancesMap.bottom.unshift(m);
              break;
            default:
              instancesMap.topRight.unshift(m);
          }
        });
        this.topLeftInstances = instancesMap.topLeft;
        this.topRightInstances = instancesMap.topRight;
        this.bottomLeftInstances = instancesMap.bottomLeft;
        this.bottomRightInstances = instancesMap.bottomRight;
        this.topInstances = instancesMap.top;
        this.bottomInstances = instancesMap.bottom;
        this.cdr.detectChanges();
      }
      mergeOptions(options) {
        const { nzDuration, nzAnimate, nzPauseOnHover, nzPlacement } = this.config;
        return __spreadValues({ nzDuration, nzAnimate, nzPauseOnHover, nzPlacement }, options);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzNotificationContainerComponent, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _NzNotificationContainerComponent, isStandalone: true, selector: "nz-notification-container", exportAs: ["nzNotificationContainer"], usesInheritance: true, ngImport: core_exports, template: `
    <div
      class="ant-notification ant-notification-topLeft"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.left]="'0px'"
    >
      @for (instance of topLeftInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'topLeft'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
    <div
      class="ant-notification ant-notification-topRight"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.right]="'0px'"
    >
      @for (instance of topRightInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'topRight'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
    <div
      class="ant-notification ant-notification-bottomLeft"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.left]="'0px'"
    >
      @for (instance of bottomLeftInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'bottomLeft'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
    <div
      class="ant-notification ant-notification-bottomRight"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.right]="'0px'"
    >
      @for (instance of bottomRightInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'bottomRight'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
    <div
      class="ant-notification ant-notification-top"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.left]="'50%'"
      [style.transform]="'translateX(-50%)'"
    >
      @for (instance of topInstances; track instance) {
        <nz-notification [instance]="instance" [placement]="'top'" (destroyed)="remove($event.id, $event.userAction)" />
      }
    </div>
    <div
      class="ant-notification ant-notification-bottom"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.left]="'50%'"
      [style.transform]="'translateX(-50%)'"
    >
      @for (instance of bottomInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'bottom'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
  `, isInline: true, dependencies: [{ kind: "component", type: NzNotificationComponent, selector: "nz-notification", inputs: ["instance", "index", "placement"], outputs: ["destroyed"], exportAs: ["nzNotification"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzNotificationContainerComponent, decorators: [{
      type: Component,
      args: [{
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        selector: "nz-notification-container",
        exportAs: "nzNotificationContainer",
        template: `
    <div
      class="ant-notification ant-notification-topLeft"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.left]="'0px'"
    >
      @for (instance of topLeftInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'topLeft'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
    <div
      class="ant-notification ant-notification-topRight"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.right]="'0px'"
    >
      @for (instance of topRightInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'topRight'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
    <div
      class="ant-notification ant-notification-bottomLeft"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.left]="'0px'"
    >
      @for (instance of bottomLeftInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'bottomLeft'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
    <div
      class="ant-notification ant-notification-bottomRight"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.right]="'0px'"
    >
      @for (instance of bottomRightInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'bottomRight'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
    <div
      class="ant-notification ant-notification-top"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.left]="'50%'"
      [style.transform]="'translateX(-50%)'"
    >
      @for (instance of topInstances; track instance) {
        <nz-notification [instance]="instance" [placement]="'top'" (destroyed)="remove($event.id, $event.userAction)" />
      }
    </div>
    <div
      class="ant-notification ant-notification-bottom"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.left]="'50%'"
      [style.transform]="'translateX(-50%)'"
    >
      @for (instance of bottomInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'bottom'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
  `,
        imports: [NzNotificationComponent]
      }]
    }], ctorParameters: () => [] });
    notificationId = 0;
    NzNotificationService = class _NzNotificationService extends NzMNService {
      componentPrefix = "notification-";
      success(title, content, options) {
        return this.create("success", title, content, options);
      }
      error(title, content, options) {
        return this.create("error", title, content, options);
      }
      info(title, content, options) {
        return this.create("info", title, content, options);
      }
      warning(title, content, options) {
        return this.create("warning", title, content, options);
      }
      blank(title, content, options) {
        return this.create("blank", title, content, options);
      }
      create(type, title, content, options) {
        return this.createInstance({ type, title, content }, options);
      }
      template(template, options) {
        return this.createInstance({ template }, options);
      }
      generateMessageId() {
        return `${this.componentPrefix}-${notificationId++}`;
      }
      createInstance(message, options) {
        this.container = this.withContainer(NzNotificationContainerComponent);
        return this.container.create(__spreadValues(__spreadValues({}, message), {
          createdAt: /* @__PURE__ */ new Date(),
          messageId: options?.nzKey || this.generateMessageId(),
          options
        }));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzNotificationService, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NzNotificationService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NzNotificationService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }] });
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_word_service();
    init_letter();
    init_state();
    init_ng_zorro_antd_notification();
    init_keyboard();
    init_title();
    init_common();
    init_ng_zorro_antd_button();
    init_ng_zorro_antd_icon();
    App = class App2 {
      wordService;
      notification;
      changeDetectorRef;
      keyboard;
      state = State;
      allowedGuesses = 6;
      wordLength = 5;
      words = new Array();
      won = false;
      gameOver = false;
      wordToGuess;
      currentWordIndex = 0;
      currentLetterIndex = 0;
      constructor(wordService, notification, changeDetectorRef) {
        this.wordService = wordService;
        this.notification = notification;
        this.changeDetectorRef = changeDetectorRef;
      }
      ngOnInit() {
        return __async(this, null, function* () {
          yield this.resetGame();
        });
      }
      resetGame() {
        return __async(this, null, function* () {
          this.won = false;
          this.gameOver = false;
          this.wordToGuess = void 0;
          this.currentWordIndex = 0;
          this.currentLetterIndex = 0;
          this.keyboard?.resetKeyboardLetterState();
          this.words = new Array();
          this.wordToGuess = yield this.wordService.getRandomWord();
          this.wordLength = this.wordToGuess.length;
          for (let wordIndex = 0; wordIndex < this.allowedGuesses; wordIndex++) {
            const word = new Array();
            for (let letterIndex = 0; letterIndex < this.wordLength; letterIndex++) {
              word.push(new Letter());
            }
            this.words.push(word);
          }
          console.log(this.wordToGuess);
          this.notification.remove();
          this.changeDetectorRef.markForCheck();
        });
      }
      onKeyDown($event) {
        return __async(this, null, function* () {
          $event.preventDefault();
          switch ($event.key) {
            case "Enter":
              yield this.submitGuess();
              break;
            case "Backspace":
              this.removeLastLetter();
              break;
            default:
              this.addLetterToCurrentGuess($event.key);
              break;
          }
        });
      }
      addLetterToCurrentGuess(letter) {
        if (this.currentLetterIndex === this.wordLength || !this.isOneLetter(letter)) {
          return;
        }
        this.words[this.currentWordIndex][this.currentLetterIndex].value = letter;
        this.currentLetterIndex++;
      }
      submitGuess() {
        return __async(this, null, function* () {
          if (this.currentLetterIndex !== this.wordLength) {
            this.notification.create("warning", "Onvolledig woord", "Niet genoeg letters ingevuld!");
            return;
          }
          yield this.checkFullWordGuess(this.currentWordIndex);
        });
      }
      removeLastLetter() {
        if (this.currentLetterIndex === 0) {
          return;
        }
        this.currentLetterIndex--;
        this.words[this.currentWordIndex][this.currentLetterIndex].value = void 0;
      }
      checkFullWordGuess(wordIndex) {
        return __async(this, null, function* () {
          if (!this.wordToGuess) {
            return;
          }
          const wordToCheck = this.words[wordIndex];
          const assembledWordGuess = wordToCheck.map((letter) => letter.value).join("").toLowerCase();
          if (!(yield this.wordService.isRealWord(assembledWordGuess))) {
            this.resetGuess(wordToCheck);
            this.notification.create("warning", "Onbekend woord", `Het woord "${assembledWordGuess}" staat niet in de woordenlijst.`);
            return;
          }
          for (let i = 0; i < wordToCheck.length; i++) {
            const letter = wordToCheck[i];
            letter.setLetterStateBasedOnWord(this.wordToGuess, i);
            this.keyboard?.setLettersStateBasedOnInputLetter(letter);
          }
          if (assembledWordGuess === this.wordToGuess) {
            this.won = true;
            this.gameOver = true;
            this.notification.create("success", "Gefeliciteerd", `Je hebt het juiste woord (${this.wordToGuess}) geraden!`);
            return;
          }
          if (wordIndex + 1 === this.allowedGuesses) {
            this.gameOver = true;
            this.notification.create("error", "Helaas", `Het woord was "${this.wordToGuess}".`, { nzDuration: void 0 });
            return;
          }
          this.currentWordIndex++;
          this.currentLetterIndex = 0;
        });
      }
      resetGuess(guess) {
        for (let i = 0; i < guess.length; i++) {
          const letter = guess[i];
          letter.value = void 0;
          letter.state = State.None;
        }
        this.currentLetterIndex = 0;
      }
      isOneLetter(char) {
        return new RegExp("^\\p{L}$", "u").test(char);
      }
      static ctorParameters = () => [
        { type: WordService },
        { type: NzNotificationService },
        { type: ChangeDetectorRef }
      ];
      static propDecorators = {
        keyboard: [{ type: ViewChild, args: ["keyboard"] }],
        onKeyDown: [{ type: HostListener, args: ["window:keydown", ["$event"]] }]
      };
    };
    App = __decorate([
      Component({
        selector: "app-root",
        template: app_default,
        imports: [
          Title,
          NgClass,
          NzButtonComponent,
          NzIconDirective,
          Keyboard
        ],
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_core();
    init_testing();
    init_app3();
    init_http();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App],
          providers: [provideZonelessChangeDetection(), provideHttpClient()]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
    });
  }
});
export default require_app_spec();
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.1.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=spec-app-app.spec.js.map
