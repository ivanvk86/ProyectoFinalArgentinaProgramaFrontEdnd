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
import { EducacionComponent } from '../app/components/educacion/educacion.component';
import { NeweducacionComponent } from '../app/components/educacion/neweducacion.component'
import { EditeducacionComponent } from '../app/components/educacion/editeducacion.component';
import { EditSkillComponent } from '../app/components/hys/edit-skill.component';
import { NewSkillComponent } from '../app/components/hys/new-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

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
    NeweducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
