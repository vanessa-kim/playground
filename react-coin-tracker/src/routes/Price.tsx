import { useQuery } from "react-query";
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";
interface priceProps {
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

function Price({ coinId }: priceProps) {
  const {isLoading, data: priceData} = useQuery<IHistorical[]>(['price', coinId], () => fetchCoinHistory(coinId));
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      {isLoading ? "loading price chart..." : (
        <div>
          <ApexChart
            type="candlestick"
            series={[{
              data: priceData?.map(price => ({
                x: price.time_open.split('T')[0],
                y: [price.open.toFixed(0), price.high.toFixed(0), price.low.toFixed(0), price.close.toFixed(0)],
              }))
            }]}
            options={{
              theme: {
                mode: isDark ? 'dark' : 'light',
              },
              chart: {
                type: 'candlestick',
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
              plotOptions: {
                candlestick: {
                  colors: {
                    upward: '#00a8ff',
                    downward: '#ff4154'
                  },              
                  wick: {
                    useFillColor: true,
                  }
                }
              },
              stroke: {
                colors: ['pink', 'purple']
              },
            }}
          />
        </div>
      )}
    </>
  );
}

export default Price;