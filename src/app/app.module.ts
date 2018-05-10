import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomheaderComponent } from './customheader/customheader.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // { path: 'chargen', component: CharacterGeneratorComponent },
  // { path: 'mapgen',      component: MapGeneratorComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  declarations: [
    AppComponent,
    CustomheaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
