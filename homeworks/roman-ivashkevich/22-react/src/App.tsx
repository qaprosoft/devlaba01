import React, { useEffect, useState } from 'react';
import './App.css';
import Chart from './components/Chart/Chart';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

interface IConfig {
  id: number;
  height: number;
}

function App() {
  const NUMBER_OF_BARS: number = 10;
  const [inputRange, setInputRange] = useState<number>(0.1);
  const [barsConfig, setBarsConfig] = useState<IConfig[]>([]);
  const [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    createInitialBars();
  }, []);

  const createInitialBars = () => {
    const config: { id: number; height: number }[] = [];
    for (let i = 0; i < NUMBER_OF_BARS; i += 1) {
      config[i] = { id: i, height: 0 };
    }

    setBarsConfig(config);
  };

  const toggleInputRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputRange(+e.target.value);
  };

  const getRandomNumber = () => {
    const max: number = NUMBER_OF_BARS - 1;
    const min: number = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    if (start) {
      const intervalId = setInterval(() => {
        const randNum = getRandomNumber();
        const updateBarsConfig = barsConfig.map((bar, i) =>
          i === randNum
            ? (Object.fromEntries(
                Object.entries(bar).map(([key, value]) =>
                  key === 'height' ? [key, (value += 1)] : [key, value],
                ),
              ) as IConfig)
            : bar,
        );
        setBarsConfig(updateBarsConfig);
      }, inputRange * 100);

      return () => clearInterval(intervalId);
    }
  }, [barsConfig, inputRange, start]);

  const toggleStartBtn = () => {
    setStart(true);
  };

  const toggleStopBtn = () => {
    setStart(false);
  };

  const toggleResetBtn = () => {
    createInitialBars();
  };

  return (
    <div className="App">
      <div className="normal-distribution">
        <Chart barsConfig={barsConfig} />
        <Input
          disabled={start}
          type="range"
          min="0.1"
          max="1"
          step="0.1"
          onChange={toggleInputRange}
        />
        <div className="btn-container">
          {!start ? (
            <Button type="button" onClick={toggleStartBtn}>
              Start
            </Button>
          ) : (
            <Button type="button" onClick={toggleStopBtn}>
              Stop
            </Button>
          )}
          <Button type="reset" onClick={toggleResetBtn}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
