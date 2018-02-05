import {IProperty} from '../interfaces/property.interface';

export function createProperty(id: number): IProperty {
  return {
    id,
    price: '$100,000',
    mainImage: '',
    agency: {
      logo: '',
      brandingColors: {
        primary: '#000000'
      }
    }
  };
}
