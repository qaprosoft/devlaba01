import style from './ChartItem.module.css';

const ChartItem = ({ item, isHighest }) => {
  return (
    <div style={{
      height: item,
      background: isHighest && 'rgba(186, 0, 0, 0.6)',
    }}
      className={style.item}>
    </div>
  )
}

export default ChartItem;