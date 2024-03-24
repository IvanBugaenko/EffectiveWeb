import { Character } from 'api/baseTypes';
import DetailsPage from 'components/DetailsPage/DetailsPage';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { comicsCharactersStore, comicsStore } from 'stores';
import { LinkCard } from 'types/linkCard';
import NavigationLink from 'types/navigationLink';

function ComicsDetailsPage() {
  const { id } = useParams() as { id: string };
  const { comics } = comicsStore;
  const { comicsCharacters } = comicsCharactersStore;

  const categoryLink = 'Characters';

  useEffect(() => {
    comicsStore.getComicsById(Number(id));
    comicsCharactersStore.getComicsCharacters(Number(id));
  }, [id]);

  const comicsCard: LinkCard = {
    id: comics.id,
    name: comics.title,
    image_url: [comics.thumbnail.path, comics.thumbnail.extension].join('.'),
    description: comics.description
  };

  const linkedCharacters: NavigationLink[] = comicsCharacters.results.map(
    (character: Character) => ({
      link: `${categoryLink.toLowerCase()}/${character.id}`,
      text: character.name
    })
  );

  return (
    <DetailsPage
      card={comicsCard}
      linkedCards={linkedCharacters}
      categoryLink={categoryLink}
    />
  );
}

export default observer(ComicsDetailsPage);
