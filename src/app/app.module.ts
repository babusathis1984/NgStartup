import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ServerComponent} from './Server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './Warning-alert-comp/warning-alert-comp.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
