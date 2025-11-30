//チャットの状態管理
import { useEffect, useRef, useState } from 'react';
import { streamMessage } from '../api/apiClient';

export function useChat(initial) {
  const [messages, setMessages] = useState(initial ?? [
    { id: 'sys', role: 'system', content: 'あなたは親切なアシスタントです。', createdAt: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input.trim(),
      createdAt: Date.now(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const assistantId = crypto.randomUUID();
    setMessages(prev => [...prev, { id: assistantId, role: 'assistant', content: '', createdAt: Date.now() }]);

    let acc = '';
    for await (const chunk of streamMessage([...messages, userMsg])) {
      acc += chunk;
      setMessages(prev => prev.map(m => m.id === assistantId ? { ...m, content: acc } : m));
    }
    setLoading(false);
  }

  return { messages, input, setInput, send, loading, scrollRef };
}