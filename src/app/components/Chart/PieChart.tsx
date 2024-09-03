import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { PieDataProps } from './types';

export default function CustomPie(props: PieDataProps) {
  return (
    <PieChart
      height={200}
      series={[
        {
          data: props.data,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      width={400}
    />
  );
}
