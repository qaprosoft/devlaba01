import style from './RangeSlider.module.css';

const RangeSlider = ({min, max, step, changeHandler, ...props}) => {
  return (
    <div className="">
      <input
        id='slider'
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={(e) => {
        changeHandler(e.target.value);
        }} {...props} />
      <label className={style.label} for='slider'>
        <span>{min}s</span>
        <span>{max}s</span>
      </label>
    </div>
  )
}

export default RangeSlider;