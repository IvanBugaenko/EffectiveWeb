import AppStrings from 'res/strings';
import Button from './Button/Button';
import classes from './Search.module.scss';

export default function Search(props: {
  placeholder: string;
  onClick: () => void;
}) {
  return (
    <section className={classes.search_row}>
      <input
        className={classes.search}
        name="search"
        type="text"
        placeholder={props.placeholder}
      />
      <Button
        button_text={AppStrings.search_button_text}
        onClick={props.onClick}
      />
    </section>
  );
}
