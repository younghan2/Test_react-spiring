import { Router } from 'react-router-dom';
import ListPage from './pages/ListPage';

// 1. 실행과정
// 2. JSX 문법

// (1) return시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수선언은 let 혹은 const로만 해야 함. let은 변수, const는 상수. var은 스코프가 이상해서 함수 안에서 정의해도 밖에서 사용할 수 있음
// (3) if사용 불가능X -> 삼항연산자 (조건 ? 값(true) : 값 (false))
// (4) 조건부 렌더링 -> (조건 && 값(true))
// (5) css 디자인
//    -내부에 적는 방법 (추천하지않음)
//    - 외부 파일에 적는 방법
//    - 라이브러리 사용 (부트스트랩, component-styled(추천))

function App() {
  return (
    <div>
      <ListPage />
    </div>
  );
}

export default App;
