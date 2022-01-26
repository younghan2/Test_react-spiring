import logo from './logo.svg';
import './App.css';

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

let a = 10;
const b = 20;

function App() {
  let list = [1, 2, 3]; // rest ��Ʈ�ѷ��� ������� ������

  return (
    <div>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
