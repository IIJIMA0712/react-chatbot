//チャット画面
import styles from '../styles/chat.module.css';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';
import Sidebar from './Sidebar';
import { useChat } from '../hooks/useChat';

export default function ChatWindow() {
  const { messages, input, setInput, send, loading, scrollRef } = useChat();

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.chatArea} ref={scrollRef}>
          {messages.filter(m => m.role !== 'system').map(m => (
            <MessageBubble key={m.id} message={m} />
          ))}
        </div>
        <InputBar
          value={input}
          onChange={setInput}
          onSend={send}
          disabled={loading}
        />
      </main>
    </div>
  );
}
