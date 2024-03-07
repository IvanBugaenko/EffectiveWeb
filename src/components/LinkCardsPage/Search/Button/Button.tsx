import classes from './Button.module.scss';

export default function Button(props: {
  button_text: string;
  onClick?: () => void;
}) {
  return (
    <button onClick={props.onClick} className={classes.button}>
      {props.button_text}
    </button>
  );
}
