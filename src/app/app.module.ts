import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogoComponent } from './logo/logo.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    HeaderComponent,
    FooterComponent,
    LoginpageComponent,
    HomePageComponent,
    LogoComponent,
    ButtonGroupComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
