import {IProperty} from '../interfaces/property.interface';

export function createProperty(id: number): IProperty {
  return createPropertyWithOptions(id, '$100,000', '', '', '#000');
}

export function createPropertyWithOptions(id: number, price: string, mainImage: string, logo: string, primaryColor: string) {
  return {
    id,
    price,
    mainImage,
    agency: {
      logo,
      brandingColors: {
        primary: primaryColor
      }
    }
  }
}
