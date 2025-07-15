import {
  Component,
  Input,
  NgClass,
  __decorate,
  __esm,
  init_common,
  init_core,
  init_tslib_es6
} from "./chunk-E4RZNJAH.js";

// angular:jit:template:src/app/title/title.html
var title_default;
var init_title = __esm({
  "angular:jit:template:src/app/title/title.html"() {
    title_default = `<h1 [ngClass]="{'rainbow' : won}">{{ title }}</h1>
`;
  }
});

// angular:jit:style:src/app/title/title.scss
var title_default2;
var init_title2 = __esm({
  "angular:jit:style:src/app/title/title.scss"() {
    title_default2 = "/* src/app/title/title.scss */\n.rainbow {\n  animation: colorRotate 0.5s linear 0s infinite;\n}\n@keyframes colorRotate {\n  from {\n    color: #6666ff;\n  }\n  10% {\n    color: #0099ff;\n  }\n  50% {\n    color: #00ff00;\n  }\n  75% {\n    color: #ff3399;\n  }\n  100% {\n    color: #6666ff;\n  }\n}\n/*# sourceMappingURL=title.css.map */\n";
  }
});

// src/app/title/title.ts
var Title;
var init_title3 = __esm({
  "src/app/title/title.ts"() {
    "use strict";
    init_tslib_es6();
    init_title();
    init_title2();
    init_core();
    init_common();
    Title = class Title2 {
      title = "Woordle";
      won = false;
      static propDecorators = {
        won: [{ type: Input }]
      };
    };
    Title = __decorate([
      Component({
        selector: "app-title",
        template: title_default,
        imports: [
          NgClass
        ],
        styles: [title_default2]
      })
    ], Title);
  }
});

export {
  Title,
  init_title3 as init_title
};
//# sourceMappingURL=chunk-RVOQYCA3.js.map
