import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { PieDataProps } from './types';

export default function CustomPie(props: PieDataProps) {
  return (
    <PieChart
      height={200}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      series={[
        {
          data: props.data,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      slotProps={{
        legend: {
          hidden: true,
        },
      }}
      width={400}
    />
  );
}
