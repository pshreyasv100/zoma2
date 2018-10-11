import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from '../pages/register/register';
import { Auth } from '../providers/auth/auth';
import { IonicStorageModule } from '@ionic/storage'
import { ManagerHomePage } from '../pages/manager-home/manager-home';

import { MyApp } from './app.component';
 
@NgModule({
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Auth
  ],
  declarations: [
    MyApp,
    RegisterPage,
    ManagerHomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    ManagerHomePage
  ]
})
export class AppModule {}