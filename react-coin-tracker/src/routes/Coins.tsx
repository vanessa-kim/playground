import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoins } from '../api';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSetRecoilState } from 'recoil';
import { isRootAtom } from '../atoms';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${props => props.theme.cardColor};
  color: ${props => props.theme.textColor};
  border: 1px solid ${props => props.theme.cardBorderColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor };
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color:${ props => props.theme.accentColor }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
interface CoinInterface {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

function Coins() {
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async() => {
  //     const response = await fetch('https://api.coinpaprika.com/v1/coins');
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, []);
  const { isLoading, data } = useQuery<CoinInterface[]>('allCoins', fetchCoins);
  const setRootAtom = useSetRecoilState(isRootAtom);
  setRootAtom(true);
  return <Container>
    <HelmetProvider>
      <Helmet>
        <title>Coins</title>
      </Helmet>
    </HelmetProvider>
    <Header>
      <Title>Coins</Title>
    </Header>
    {isLoading ? (
      <Loader>...Loading</Loader>
      ) : <CoinsList>
        { data?.slice(0, 100).map(coin => 
          <Coin key={coin.id}>
            <Link 
              to={{
                pathname: `/${coin.id}`,
                state: { name: coin.name },
              }}
            >
              <Img 
                src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} 
              />
              {coin.name} &rarr;
            </Link>
          </Coin>
      )}
    </CoinsList>}
  </Container>;
}

export default Coins;