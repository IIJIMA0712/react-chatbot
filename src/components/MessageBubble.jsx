//吹き出し
import styles from '../styles/chat.module.css';
import clsx from 'classnames';

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  const roleLabel = message.role === 'assistant' ? 'AI' :
                    message.role === 'user' ? 'You' : 'System';
  return (
    <div className={styles.bubbleRow} style={{ justifyContent: isUser ? 'flex-end' : 'flex-start' }}>
      <div className={clsx(styles.bubble, isUser ? styles.user : styles.bot)}>
        <div className={styles.role}>{roleLabel}</div>
        <div>{message.content}</div>
      </div>
    </div>
  );
}
