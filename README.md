# ManagerBot
BattleEarthのチケットボット

## 特徴
- Node.jsとDiscord.jsを入れるだけで使える簡単仕様です。
- config.jsonを変更するだけで、どのサーバーにも使えます。

## インストール

[Node js V13.0+](https://nodejs.org/)をインストールする必要があります。
``````bash
git clone https://github.com/BattleEarth/Tickety
cd Tickety
npm install
``````

## 構成

必ず以下の項目を変更してください。
- config.json
```json
{
  "clientId": "BotのID",
  "token": "Botのトークン",

  "parentOpened": "チケットが開かれたときのカテゴリのID",
  "Category1": "1つ目のサポートカテゴリの名前",
  "Category2": "2つ目のサポートカテゴリの名前",
  "Category3": "3つ目のサポートカテゴリの名前",

  "roleSupport": "運営のロールのID",
  
  "logsTicket": "チケットログのチャンネルのID",
  "ticketChannel": "チケットを作成するためのチャンネルのID"
}
```

+ カテゴリの絵文字は、`events/intractionCreate.js`の50行目で変更できます。
+ `ticketChannel`のチャンネルにメッセージがないことを確認してください。

## 起動
```bash
node index.js #Botを起動します
```

##
Created by Myoko
