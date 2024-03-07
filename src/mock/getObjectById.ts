import { characters } from './characters';
import { comics } from './comics';

export default function getObjectById(id: number, category: string) {
  switch (category) {
    case 'characters':
      return characters[id - 1];
    case 'comics':
      return comics[id - 1];
  }
}
