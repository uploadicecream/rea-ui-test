import { Component, OnInit } from '@angular/core';
import {BusinessFacadeService} from '../../services/business-facade/business-facade.service';
import {Observable} from 'rxjs/Observable';
import {IProperty} from '../../interfaces/property.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  resultProperties: Observable<IProperty[]>;
  savedProperties: Observable<IProperty[]>;

  constructor(private _businessFacade: BusinessFacadeService) {
    this.resultProperties = _businessFacade.resultProperties;
    this.savedProperties = _businessFacade.savedProperties;
  }

  ngOnInit() {
    this._businessFacade.loadData();
  }

  saveProperty(property: IProperty): void {
    this._businessFacade.saveProperty(property);
  }

  removeProperty(propertyId: number): void {
    this._businessFacade.removeSavedProperty(propertyId);
  }

}
