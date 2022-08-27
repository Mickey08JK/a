import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';

import { environment } from 'src/environments/environment';

//Firebase imports
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { 
//   provideFirestore, 
//   getFirestore, 
//   connectFirestoreEmulator, 
//   enableIndexedDbPersistence
//   } from '@angular/fire/firestore';
// import { provideStorage, getStorage } from '@angular/fire/storage';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
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
    AngularFireModule,
    AngularFireAuthModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
