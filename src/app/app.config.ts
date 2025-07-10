import { registerLocaleData } from '@angular/common';
import nl from '@angular/common/locales/nl';
import { provideNzI18n, nl_NL } from 'ng-zorro-antd/i18n';
import { ApplicationConfig } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideNzIcons } from "ng-zorro-antd/icon";
import { ReloadOutline } from '@ant-design/icons-angular/icons';

registerLocaleData(nl);

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideNzI18n(nl_NL),
    provideNzIcons([ReloadOutline])
  ]
}
