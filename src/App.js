import { Router } from 'react-router-dom';
import ListPage from './pages/ListPage';

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
      <ListPage />
    </div>
  );
}

export default App;
