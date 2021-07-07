import ChartItem from './../ChartItem/ChartItem';
import style from './Chart.module.css';

const Chart = ({ valueArr }) => {

  const lasgestNumbersIndexes = (() => {
    let arr = [...valueArr];
    let indexArr = [];
    const index = arr.indexOf(Math.max(...arr))
    indexArr.push(index);
    arr.splice(index, 1);
    indexArr.push(valueArr.indexOf(Math.max(...arr)));
    return indexArr;
  })();
 
  let items = valueArr.map((item, index) => {
      return (
        <div className={style.itemWrapper}>
          <ChartItem item={item} isHighest={lasgestNumbersIndexes.includes(index)}  />
        </div>
      )
    }
  );

  return (
    <div className={style.chart}>
      {items}
    </div>
  )
}

export default Chart;