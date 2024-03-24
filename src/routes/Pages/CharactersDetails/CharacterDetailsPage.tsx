import { Comics } from 'api/baseTypes';
import DetailsPage from 'components/DetailsPage/DetailsPage';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { characterComicsStore, characterStore } from 'stores';
import { LinkCard } from 'types/linkCard';
import NavigationLink from 'types/navigationLink';

function CharactersDetailsPage() {
  const { id } = useParams() as { id: string };
  const { character } = characterStore;
  const { characterComics } = characterComicsStore;

  const categoryLink = 'Comics';

  useEffect(() => {
    characterStore.getCharacterById(Number(id));
    characterComicsStore.getCharacterComics(Number(id));
  }, [id]);

  const characterCard: LinkCard = {
    id: character.id,
    name: character.name,
    image_url: [character.thumbnail.path, character.thumbnail.extension].join(
      '.'
    ),
    description: character.description
  };

  const linkedComics: NavigationLink[] = characterComics.results.map(
    (comics: Comics) => ({
      link: `${categoryLink.toLowerCase()}/${comics.id}`,
      text: comics.title
    })
  );

  return (
    <DetailsPage
      card={characterCard}
      linkedCards={linkedComics}
      categoryLink={categoryLink}
    />
  );
}

export default observer(CharactersDetailsPage);
