import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import { nl_NL, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import nl from '@angular/common/locales/nl';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { ReloadOutline } from '@ant-design/icons-angular/icons';

registerLocaleData(nl);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideNzI18n(nl_NL),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideNzIcons([ReloadOutline])
  ]
};
