//疑似応答　APIに差し替え予定
export async function sendMessage(messages) {
    const last = messages[messages.length - 1]?.content ?? ''
    const reply = `「${last}」についての回答です。\n- これは疑似応答です。\n- 後でRailsのAPIに差し替え予定。`
    await delay(600)       // ネットワーク風の待ち時間
    return { reply }
  }
  
  export async function* streamMessage(messages) {
    const text = (await sendMessage(messages)).reply
    for (const chunk of chunkText(text, 18)) {   // 18文字ずつ分割
      await delay(50)
      yield chunk                                // 1チャンクずつ返す
    }
  }
  
  const delay = (ms) => new Promise(r => setTimeout(r, ms))
  function chunkText(t, size) {
    const out = []
    for (let i = 0; i < t.length; i += size) out.push(t.slice(i, i + size))
    return out
  }
  