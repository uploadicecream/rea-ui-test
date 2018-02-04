import {IProperty} from '../interfaces/property.interface';

export function createProperty(id: number): IProperty {
  return {
    id,
    price: '$100,000',
    mainImage: 'not-an-image.png',
    agency: {
      logo: 'not-a-logo.png',
      brandingColors: {
        primary: '#000000'
      }
    }
  };
}
