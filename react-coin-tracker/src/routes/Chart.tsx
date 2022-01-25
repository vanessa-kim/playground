import { useQuery } from "react-query";
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume:number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const {isLoading, data} = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId));
  const isDark = useRecoilValue(isDarkAtom);
  
  return <div>{ isLoading ? "loading chart..." : (
    <ApexChart 
      type="line"
      series={[
        {
          name: 'price',
          data: data?.map(price => price.close),
        },
      ]}
      options={{
        theme: {
          mode: isDark ? 'dark' : 'light',
        },
        chart: {
          height: 300,
          width: 500,
          toolbar: {
            show: false,
          },
          background: 'transparent',
        },
        grid: {
          show: false,
        },
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false },
          categories: data?.map(price => price.time_close),
          type: 'datetime',
        },
        fill: { 
          type: 'gradient', 
          gradient: { gradientToColors: ['#1abc9c'], stops: [0, 100]},
        },
        colors: ['#3498db'],
        tooltip: {
          y: {
            formatter: (value) => `$ ${value.toFixed(3)}`,
          },
        },
      }}
    />
  )}</div>;
}

export default Chart;