import { useEffect, useState } from 'react';

import Button from '../components/Button/Button';
import RangeSlider from '../components/RangeSlider/RangeSlider';
import Chart from '../components/Chart/Chart';
import style from './NormalDistributionContainer.module.css';

const NormalDistributionContainer = () => {

  const [valueArr, setValueArr] = useState([]);
  const [interval, setInterval] = useState(100);
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => {
    if (isWorking) {
      setTimeout(() => {
        const copy = [...valueArr];
        copy.push(getValue());
        setValueArr([...copy.slice(-10)]);
      }, interval)
    }
  }, [isWorking, valueArr, interval])


  const getValue = () => {
    return Math.floor(Math.random() * 100);
  }

  return (
    <div className={style.container}>
      <div className={ style.chartWrapper}>
        <Chart valueArr={valueArr} />
      </div>
      <RangeSlider
        min='0.1'
        max='1'
        step='0.1'
        changeHandler={(value) => setInterval(value * 1000)}
        className={style.rangeWrapper}
        disabled={isWorking}
      />
      <div className={style.btns}>
        <div className={style.btn}>
          {isWorking
            ? <Button handleClick={() => setIsWorking(false)}>Stop</Button>
            : <Button handleClick={() => setIsWorking(true)}>Start</Button>
          }
        </div>
        <div className={style.btn}>
          <Button handleClick={() => setValueArr([])}>Reset</Button>
        </div>
      </div>
    </div>
  )
}

export default NormalDistributionContainer;