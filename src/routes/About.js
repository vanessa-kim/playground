import styles from './About.modules.scss';

function About() {
  return (
    <div className="aboutPage">
      <h1>About</h1>
      <div className="aboutMovie">
        <div class="aboutCard">
          <h1>About movie information web site</h1>
          <h4>영화 정보 사이트에 대하여</h4>
          <p>이 웹 사이트는 리액트로 만들어졌습니다. <br/>
          바네사 김의 첫번째 리액트 사이트이며, 굉장히 감회가 새롭네요. <br/> 
          앞으로 추가해 나아가야할 사항들이 많지만, 현재로서는 무척 만족중입니다. <br/> 
          앞으로 남은 사항은 전역 스토어와 라이프사이클 훅을 알아나가는 것이군요 :-)  <br/>
          화이팅해서 마저 해봅시다!</p>
        </div>
      </div>
    </div>
  );
};

export default About;