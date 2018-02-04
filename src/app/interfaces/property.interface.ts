import {IPropertyAgency} from './property-agency.interface';

export interface IProperty {
  id: number;
  price: string;
  mainImage: string;
  agency: IPropertyAgency;
}
