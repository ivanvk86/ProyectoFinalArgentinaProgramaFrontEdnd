import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { LogrosComponent } from './components/logros/logros.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerSuperiorComponent } from './components/banner-superior/banner-superior.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { FooterComponent } from './components/footer/footer.component';
import { interceptorProvider } from './service/interceptor-service';
import { EducacionComponent } from './educacion/educacion.component';
import { NewEducacionComponent } from './components/new-educacion/new-educacion.component';
import { NeweducacionComponent } from './components/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './components/editeducacion/editeducacion.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/new-skill/new-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    LogrosComponent,
    BannerSuperiorComponent,
    LogoApComponent,
    SocialComponent,
    HysComponent,
    FooterComponent,
    EducacionComponent,
    NewEducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
