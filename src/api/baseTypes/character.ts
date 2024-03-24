import { Image } from './image';

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
}
