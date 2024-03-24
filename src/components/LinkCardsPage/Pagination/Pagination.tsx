import classes from './Pagination.module.scss';
import clsx from 'clsx';
import PaginationButton from './PaginationButton/PaginationButton';

export default function Pagination(props: {
  current_page_number: number;
  total_page_number: number;
  pagination_len: number;
  pagination_controller: (new_page_number: number) => void;
}) {
  const setLeftBoundPage: () => void = () => {
    props.pagination_controller(1);
  };

  const setRightBoundPage: () => void = () => {
    props.pagination_controller(props.total_page_number);
  };

  const setLeftPage: () => void = () => {
    props.pagination_controller(Math.max(1, props.current_page_number - 1));
  };

  const setRightPage: () => void = () => {
    props.pagination_controller(
      Math.min(props.current_page_number + 1, props.total_page_number)
    );
  };

  const range = (from: number, to: number) =>
    [...Array(Math.floor(to - from) + 1)].map((_, i) => from + i);

  const delta = Math.floor(props.pagination_len / 2);

  let leftArrayBound: number = 0;
  let rightArrayBound: number = 0;

  if (props.current_page_number <= delta) {
    leftArrayBound = 1;
    rightArrayBound = Math.min(1 + 2 * delta, props.total_page_number);
  } else {
    if (props.total_page_number - delta <= props.current_page_number) {
      leftArrayBound = props.total_page_number - 2 * delta;
      rightArrayBound = props.total_page_number;
    } else {
      leftArrayBound = props.current_page_number - delta;
      rightArrayBound = props.current_page_number + delta;
    }
  }

  const pageArray = range(leftArrayBound, rightArrayBound);

  const getPaginationButton = (value: number) => {
    return (
      <PaginationButton
        value={value}
        isActive={value === props.current_page_number}
        pagination_controller={props.pagination_controller}
      />
    );
  };
  return (
    <section className={classes.pagination_container}>
      <div className={classes.buttons}>
        <button
          className={clsx(
            classes.arrow_button,
            1 === props.current_page_number
              ? classes.inactive_button
              : classes.arrow_button_active
          )}
          onClick={setLeftBoundPage}
        >
          {'<<'}
        </button>
        <button
          className={clsx(
            classes.arrow_button,
            1 === props.current_page_number
              ? classes.inactive_button
              : classes.arrow_button_active
          )}
          onClick={setLeftPage}
        >
          {'<'}
        </button>
      </div>
      <div className={classes.page_buttons}>
        {pageArray.map((value: number) => getPaginationButton(value))}
      </div>
      <div className={classes.buttons}>
        <button
          className={clsx(
            classes.arrow_button,
            props.total_page_number === props.current_page_number
              ? classes.inactive_button
              : classes.arrow_button_active
          )}
          onClick={setRightPage}
        >
          {'>'}
        </button>
        <button
          className={clsx(
            classes.arrow_button,
            props.total_page_number === props.current_page_number
              ? classes.inactive_button
              : classes.arrow_button_active
          )}
          onClick={setRightBoundPage}
        >
          {'>>'}
        </button>
      </div>
    </section>
  );
}
