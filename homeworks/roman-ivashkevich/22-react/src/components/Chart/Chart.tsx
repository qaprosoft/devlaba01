import React, { FC } from 'react';
import './Chart.css';
import Bar from '../Bar/Bar';

interface IBarsConfig {
  id: number;
  height: number;
}

interface ChartProps {
  barsConfig: IBarsConfig[];
}

const Chart: FC<ChartProps> = ({ barsConfig }) => {
  const TOP_BAR = 'red';
  const cloneBarsConfig = [...barsConfig];
  const sortBarsConfig = cloneBarsConfig.sort((a, b) =>
    a.height > b.height ? -1 : 1,
  );

  const [max1, max2] = sortBarsConfig;

  return (
    <div className="chart">
      {barsConfig.map((bar) => {
        if (bar.id === max1.id || bar.id === max2.id) {
          return <Bar key={bar.id} className={TOP_BAR} height={bar.height} />;
        } else {
          return <Bar key={bar.id} height={bar.height} />;
        }
      })}
    </div>
  );
};

export default Chart;
