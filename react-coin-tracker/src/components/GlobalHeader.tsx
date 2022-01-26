import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { isDarkAtom, isRootAtom } from '../atoms';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.headerColor};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  padding: 12px 30px;
`;

const ThemeBtn = styled.button<{ isActive: Boolean, }>`
  position: relative;
  width: 120px;
  height: 36px;
  border-radius: 20px;
  text-align: ${props => props.isActive ? 'left' : 'right'};
  padding: 0 13px;
  background-color: ${props => props.theme.headerBtnBg};
  box-shadow: ${props => props.theme.headerBtnShadow};
  color: ${props => props.theme.textColor};
  border: 0;
  overflow: hidden;
  cursor: pointer;
  font-size: 13px;
  float: right;

  span {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: ${props => props.theme.headerBtnAccent};
    box-shadow: 0 0 5px rgb(0 0 0 / 20%);
    margin-right: ${props => props.isActive ? '0px' : '80px'};
    transition: 0.3s margin-right;
  }
`;

const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 36px;
  border-radius: 20px;
  font-size: 13px;
  border: 0;
  padding: 0 20px;
  background-color: transparent;
  color: ${props => props.theme.textColor};
  border: 1px solid ${props => props.theme.textColor};
  cursor: pointer;
  float: left;

  svg {
    margin-right: 10px;
  }
`;

function GlobalHeader() {
  const isDark = useRecoilValue(isDarkAtom);
  const isRoot = useRecoilValue(isRootAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom(prev => !prev);

  return (
    <Header>
      { isRoot ? null : (
        <Link to="/playground">
          <BackBtn>
            <FaArrowLeft />
            Back
          </BackBtn>
        </Link>
      )}
      <ThemeBtn onClick={toggleDarkAtom} isActive={isDark}>
        {isDark ? 'Dark mode' : 'Light mode'}
        <span></span>
      </ThemeBtn>
    </Header>
  );
};

export default GlobalHeader;