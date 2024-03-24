import classes from './PaginationButton.module.scss';
import clsx from 'clsx';

export default function PaginationButton(props: {
  value: number;
  isActive: boolean;
  pagination_controller: (new_page_number: number) => void;
}) {
  const setValuePage: () => void = () => {
    props.pagination_controller(props.value);
  };
  return (
    <button
      className={clsx(classes.value, props.isActive && classes.active_value)}
      onClick={setValuePage}
    >
      {props.value}
    </button>
  );
}
