import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MainComponent} from './components/main/main.component';
import {StoreModule} from '@ngrx/store';
import {savedPropertyReducer} from './store/reducers/saved-properties.reducer';
import {resultPropertyReducer} from './store/reducers/result-properties.reducer';
import {BusinessFacadeService} from './services/business-facade/business-facade.service';
import {DataService} from './services/data/data.service';
import { PropertyComponent } from './components/property/property.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    PropertyComponent,
    PropertyListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({resultProperties: resultPropertyReducer, savedProperties: savedPropertyReducer})
  ],
  providers: [
    BusinessFacadeService,
    DataService
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
