import NavigationLink from './navigationLink';

export interface LinkCard {
  id: number;
  name: string;
  image_url: string;
  description: string;
  linked_cards: NavigationLink[];
}
