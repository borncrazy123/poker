import { trim } from '@/utils/format';
import { useModel } from '@umijs/max';
import styles from './index.less';

const PokerPage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <div className={styles.container}>
        xxxxx
    </div>
  );
};

export default PokerPage;
