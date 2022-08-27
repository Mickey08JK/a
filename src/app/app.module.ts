import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { UserModule } from './user/user.module';


//Firebase imports
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { 
//   provideFirestore, 
//   getFirestore, 
//   connectFirestoreEmulator, 
//   enableIndexedDbPersistence
//   } from '@angular/fire/firestore';
// import { provideStorage, getStorage } from '@angular/fire/storage';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideDatabase,getDatabase } from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    UserModule,
    AngularFireModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => {
    //   const firestore = getFirestore();
    //   connectFirestoreEmulator(firestore, 'localhost', 8080);
    //   enableIndexedDbPersistence(firestore);
    //   return firestore;
    // }),
    // provideStorage(() => getStorage()),
    // provideDatabase(() => getDatabase()),
    // provideAuth(() => getAuth())
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  }
