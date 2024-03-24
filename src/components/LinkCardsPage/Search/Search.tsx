import AppStrings from 'res/strings';
import Button from './Button/Button';
import classes from './Search.module.scss';
import useDebounce from 'hooks/useDebounce';
import { useEffect, useState } from 'react';

export default function Search(props: {
  placeholder: string;
  search_controller: (search_params: string) => void;
}) {
  const [searchValue, setSearchValue] = useState('');
  const debounce = useDebounce(searchValue, 3000);

  const search = () => {
    props.search_controller(searchValue);
  };

  useEffect(() => {
    if (searchValue !== '') search();
  }, [debounce]);

  return (
    <section className={classes.search_row}>
      <input
        className={classes.search}
        name="search"
        type="text"
        placeholder={props.placeholder}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Button button_text={AppStrings.search_button_text} onClick={search} />
    </section>
  );
}
