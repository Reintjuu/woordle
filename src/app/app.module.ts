import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { nl_NL, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import nl from '@angular/common/locales/nl';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TitleComponent } from './title/title.component';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { ReloadOutline } from '@ant-design/icons-angular/icons';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { KeyboardComponent } from './keyboard/keyboard.component';

registerLocaleData(nl);

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule.forRoot([ReloadOutline]),
    NzNotificationModule
  ],
  providers: [{ provide: NZ_I18N, useValue: nl_NL }],
  bootstrap: [AppComponent]
})
export class AppModule {}
