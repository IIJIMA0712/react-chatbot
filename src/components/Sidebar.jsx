//左側のバー　セッション一覧風　今後追加予定
import styles from '../styles/chat.module.css';

export default function Sidebar() {
  const sessions = [
    { id: 's1', title: 'チャット1' },
    { id: 's2', title: 'チャット2' },
    { id: 's3', title: 'チャット3' },
  ];
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span>Chatbot<span className={styles.brandDot}>.</span></span>
      </div>
      <div className={styles.session}>
        {sessions.map(s => (
          <div key={s.id} className={styles.sessionItem}>{s.title}</div>
        ))}
      </div>
    </aside>
  );
}
