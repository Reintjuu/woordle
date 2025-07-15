import {
  Keyboard,
  init_keyboard
} from "./chunk-76AEAQYO.js";
import "./chunk-EC7DTUDS.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_core,
  init_testing,
  provideZonelessChangeDetection
} from "./chunk-E4RZNJAH.js";

// src/app/keyboard/keyboard.spec.ts
var require_keyboard_spec = __commonJS({
  "src/app/keyboard/keyboard.spec.ts"(exports) {
    init_testing();
    init_keyboard();
    init_core();
    describe("Keyboard", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Keyboard],
          providers: [provideZonelessChangeDetection()]
        }).compileComponents();
        fixture = TestBed.createComponent(Keyboard);
        component = fixture.componentInstance;
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_keyboard_spec();
//# sourceMappingURL=spec-app-keyboard-keyboard.spec.js.map
