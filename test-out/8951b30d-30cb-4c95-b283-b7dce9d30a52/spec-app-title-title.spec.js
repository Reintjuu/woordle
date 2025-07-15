import {
  Title,
  init_title
} from "./chunk-RVOQYCA3.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_core,
  init_testing,
  provideZonelessChangeDetection
} from "./chunk-E4RZNJAH.js";

// src/app/title/title.spec.ts
var require_title_spec = __commonJS({
  "src/app/title/title.spec.ts"(exports) {
    init_testing();
    init_title();
    init_core();
    describe("Title", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Title],
          providers: [provideZonelessChangeDetection()]
        }).compileComponents();
        fixture = TestBed.createComponent(Title);
        component = fixture.componentInstance;
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it(`should have as title 'Woordle'`, () => {
        expect(component.title).toEqual("Woordle");
      });
    });
  }
});
export default require_title_spec();
//# sourceMappingURL=spec-app-title-title.spec.js.map
