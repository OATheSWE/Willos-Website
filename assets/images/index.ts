// Exporting Images from images folder
import { Asset } from 'expo-asset';

// @ts-ignore
const logo = Asset.fromModule(require('./logo.png')).uri;
const hero = Asset.fromModule(require('./hero.png')).uri;

const ImageCollection = {
   logo,
   hero,
}

export { ImageCollection };
