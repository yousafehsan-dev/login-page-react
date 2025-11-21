
import style from './Button.module.css'

const Button = (props) => {
  return (
    <button className={props.isOutline ? style.Outline_btn :style.pre_btn}>
      
      {props.icon}
      {props.text}
   
    </button>
  )
}


export default Button
