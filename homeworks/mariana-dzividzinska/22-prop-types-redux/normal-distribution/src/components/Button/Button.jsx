import style from './Button.module.css';

const Button = ({ handleClick, children, ...props }) => {
  return (
    <button
      onClick={handleClick}
      className = {style.btn}
      {...props}>
      {children}
    </button>
  )
}

export default Button;