import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProperty} from '../../interfaces/property.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  @Input() properties: IProperty[];
  @Input() allowSave = false;
  @Input() allowRemove = false;

  @Output() propertySaved: EventEmitter<IProperty> = new EventEmitter<IProperty>();
  @Output() propertyRemoved: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
