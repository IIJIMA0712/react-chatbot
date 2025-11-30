//入力覧と送信ボタン
import styles from '../styles/chat.module.css';

export default function InputBar({ value, onChange, onSend, disabled }) {
  return (
    <div className={styles.inputBar}>
      <textarea
        className={styles.textarea}
        value={value}
        placeholder="メッセージを入力して Enter（Shift+Enterで改行）"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSend();
          }
        }}
      />
      <button className={styles.btn} onClick={onSend} disabled={disabled}>
        送信
      </button>
    </div>
  );
}
