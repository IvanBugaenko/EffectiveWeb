import { Character } from 'api/baseTypes';
import LinkCardsPage from 'components/LinkCardsPage/LinkCardsPage';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import AppStrings from 'res/strings';
import { characterDataContainerStore } from 'stores';
import { LinkCard } from 'types/linkCard';

function CharactersPage(props: { limit: number; pagination_len: number }) {
  const { characterDataContainer } = characterDataContainerStore;
  const [currentPage, setCurrentPage] = useState(1);

  const [nameStartsWith, setNameStartsWith] = useState('');

  useEffect(() => {
    characterDataContainerStore.getCharactersList(
      props.limit,
      props.limit * (currentPage - 1),
      nameStartsWith === '' ? null : nameStartsWith
    );
  }, [currentPage, nameStartsWith]);

  const characterList: LinkCard[] = characterDataContainer.results.map(
    (character: Character) => ({
      id: character.id,
      name: character.name,
      image_url: [character.thumbnail.path, character.thumbnail.extension].join(
        '.'
      ),
      description: character.description
    })
  );

  return (
    <LinkCardsPage
      header={AppStrings.characters_link}
      total_cards={characterDataContainer.total}
      placeholder={AppStrings.characters_search_placeholder}
      link_cards={characterList}
      loading={characterDataContainerStore.loading}
      current_page_number={currentPage}
      total_page_number={
        Math.floor(characterDataContainer.total / props.limit) + 1
      }
      pagination_len={props.pagination_len}
      pagination_controller={setCurrentPage}
      search_controller={setNameStartsWith}
    />
  );
}

export default observer(CharactersPage);
