import { Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

// 1. �������
// 2. JSX ����

// (1) return�ÿ� �ϳ��� Dom�� ������ �� �ִ�.
// (2) ���������� let Ȥ�� const�θ� �ؾ� ��. let�� ����, const�� ���. var�� �������� �̻��ؼ� �Լ� �ȿ��� �����ص� �ۿ��� ����� �� ����
// (3) if��� �Ұ���X -> ���׿����� (���� ? ��(true) : �� (false))
// (4) ���Ǻ� ������ -> (���� && ��(true))
// (5) css ������
//    -���ο� ���� ��� (��õ��������)
//    - �ܺ� ���Ͽ� ���� ���
//    - ���̺귯�� ��� (��Ʈ��Ʈ��, component-styled(��õ))

function App() {
  return (
    <div>
      <Navigation />
      <Router path="/" exact={true} component={ListPage} />
      <Router path="/write" exact={true} component={WritePage} />
    </div>
  );
}

export default App;
