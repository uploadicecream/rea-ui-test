import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProperty} from '../../interfaces/property.interface';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() property: IProperty;
  @Input() allowSave = false;
  @Input() allowRemove = false;

  @Output() propertySaved: EventEmitter<IProperty> = new EventEmitter<IProperty>();
  @Output() propertyRemoved: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onAddPropertyClick(): void {
    this.propertySaved.emit(this.property);
  }

  onRemovePropertyClick(): void {
    this.propertyRemoved.emit(this.property.id);
  }

}
