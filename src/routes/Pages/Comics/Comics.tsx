import { Comics } from 'api/baseTypes';
import LinkCardsPage from 'components/LinkCardsPage/LinkCardsPage';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import AppStrings from 'res/strings';
import { comicsDataContainerStore } from 'stores';
import { LinkCard } from 'types/linkCard';

function ComicsPage(props: { limit: number; pagination_len: number }) {
  const { comicsDataContainer, loading } = comicsDataContainerStore;
  const [currentPage, setCurrentPage] = useState(1);

  const [nameStartsWith, setNameStartsWith] = useState('');

  useEffect(() => {
    comicsDataContainerStore.getComicsList(
      props.limit,
      props.limit * (currentPage - 1),
      nameStartsWith === '' ? null : nameStartsWith
    );
  }, [currentPage, nameStartsWith]);

  const comicsList: LinkCard[] = comicsDataContainer.results.map(
    (comics: Comics) => ({
      id: comics.id,
      name: comics.title,
      image_url: [comics.thumbnail.path, comics.thumbnail.extension].join('.'),
      description: comics.description
    })
  );

  return (
    <LinkCardsPage
      header={AppStrings.comics_link}
      total_cards={comicsDataContainer.total}
      placeholder={AppStrings.characters_search_placeholder}
      link_cards={comicsList}
      loading={loading}
      current_page_number={currentPage}
      total_page_number={
        Math.floor(comicsDataContainer.total / props.limit) + 1
      }
      pagination_len={props.pagination_len}
      pagination_controller={setCurrentPage}
      search_controller={setNameStartsWith}
    />
  );
}

export default observer(ComicsPage);
