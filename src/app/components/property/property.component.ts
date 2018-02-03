import {Component, Input, OnInit} from '@angular/core';
import {IProperty} from '../../interfaces/property.interface';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() property: IProperty;

  constructor() { }

  ngOnInit() {
  }

}
