# React Chatbot Portfolio

## 概要
このプロジェクトは、React + Viteで構築したチャットボットUIアプリです。  
将来的にRails APIと連携し応答機能を追加予定です。

---

## デモ
[https://react-chatbot-demo-nine.vercel.app/）]

---

## 技術
- **Frontend**: React, Vite, CSS Modules
- **State Management**: React Hooks (`useChat`)
- **API**: Rails（予定）
- **その他**: Axios, ESLint, Prettier

---

## プロジェクト構成
```
src/
 ├── components/
 │    ├── ChatWindow.jsx
 │    ├── Message.jsx
 ├── hooks/
 │    └── useChat.js
 ├── api/
 │    └── apiClient.js
 ├── App.jsx
 └── main.jsx
```

---

## セットアップ手順
```bash
# クローン
git clone https://github.com/IIJIMA0712/react-chatbot.git
cd chatbot-portfolio

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
```

---

## 主な機能
- ユーザー入力に応じたチャットUI表示
- メッセージ履歴管理（React Hooks）
- API連携準備済み（Railsバックエンド）


---

## 今後の改善予定
- Rails APIとの統合
- 自然言語処理
- UIデザインの強化

---

## ライセンス
MIT License
