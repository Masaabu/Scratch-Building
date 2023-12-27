> [English](./README_en.md) / [日本語](./README_ja.md)

# ビル経営ゲーム

ビル経営ゲームはScratchで作られたビルを作るシミュレーションゲームです。

## [公式ホームページ](https://masaabu.github.io/Scratch-Building/)
source code on [GitHub](https://github.com/Masaabu/Scratch-Building)

# コメント - ガイド
データに保存されているコメントを取得し、コメントを表示したり、管理することができる。コメントのセキュリティーは保護されていません。スパム対策などの対策機能は未実装

## コメントをさらに読み込むボタンの追加

```html
<a id="loadAddComment" class="button" onclick="loadAddComment('add','5')" style="text-align: center;">もっと見る</a>
```

### onclick要素の解説
```js
loadAddComment('add','5')
```
> 上のコードでは、コメント表示欄に表示するコメント数を```5```個```増やす```というfunctionを実行している。

現在```add```と書かれているところはモードを入力し、現在```5```と書かれているところは、```value```を設定することができる。

### モード一覧
- ```set``` / コメント表示欄に表示するコメント数を設定することができる。
- ```add``` / コメント表示欄に表示するコメント数を増やすことができる。

# MOD - ガイド
データに保存されているMODの情報を解析、表示することができる。データベースは現在実装されてない為、オブジェクト変数にデータを保存している。

## MODの情報を表示する
```html
<div id="mods"></div>
```
> 上のコードの様に```id=mods```の要素にMOD情報が追加される。

## TAGIDの説明
```tagId```には、```0``` ```1``` ```2```があります。
- ```0``` / ```一般```（tagが表示されることはない）
- ```1``` / ```公式```（tagが表示され```name```がタグの名前として表示される。）
- ```2``` / ```前提```（tagが表示され```name```がタグの名前として表示される。）

# API
GETリクエストを送信するとJson形式で情報が取得できます。

# API - 変更履歴
ゲームの変更履歴をJSON形式で取得することができる。
```json
{
    "createdBy": "Fun117",
    "version": "0.0.1",
    "title": "ビル経営ゲーム更新履歴",
    "release_time": "2023-12-01",
    "last_change_time": "2023-12-25",
    "content_list": [
        {
            "group": "v7",
            "title": "ビル経営ゲームv7 更新履歴",
            "creator": "@Masaabu-YT",
            "content": [
                {
                    "version": "v7.1 [Pre-alpha]",
                    "release_time": "2024年",
                    "creator": "Masaabu-YT",
                    "log": [
                        {
                            "title": "アイテムの追加 (Beta)"
                        }
                    ]
                }
            ]
        }
    ]
}
```
# API - MOD情報
登録されているMODの情報をJSON形式で取得することができる。
```json
{
    "createdBy": "Fun117",
    "version": "0.0.1",
    "release_time": "null",
    "last_change_time": "2023-12-03",
    "content_list": [
        {
            "group": "SB MOD [v7]",
            "description": "使い方は<a href='../wiki/content/sbmod/' class='text-[#6094F8]' target='_blank'>こちら</a>",
            "creator": "@Masaabu-YT",
            "content": [
                {
                    "name": "SB MOD v1.0",
                    "description": "",
                    "creator": "Masaabu-YT",
                    "projectId": "940232456",
                    "tags": [
                        {
                            "tagId": "1",
                            "name": "公式"
                        }
                    ]
                }
            ]
        }
    ]
}
```
# API - Q&A情報
登録されている質問と回答の情報をJSON形式で取得することができる。
```json
{
    "createdBy": "Fun117",
    "version": "0.0.1",
    "title": "ビル経営ゲームよくある質問",
    "release_time": "2023-12-02",
    "last_change_time": "2023-12-03",
    "content_list": [
        {
            "group": "v7",
            "title": "ビル経営ゲームv7のよくある質問",
            "release_time": "2023-12-02",
            "last_change_time": "2023-12-03",
            "creator": "@Masaabu-YT",
            "content": [
                {
                    "q": "トンカチと猫のアイコンの物は何ですか？",
                    "a": "モードです！それぞれ建築モード、猫モードという名前で、建築モードなら部屋をタップすることで建築ができます！猫モードなら猫をタップするとその猫のステータスを見ることができます！"
                }
            ]
        }
    ]
}
```
# API - Q&A情報
登録されている質問と回答の情報をJSON形式で取得することができる。
```json
{
    "createdBy": "Fun117",
    "version": "0.0.1",
    "title": "ビル経営ゲームよくある質問",
    "release_time": "2023-12-02",
    "last_change_time": "2023-12-03",
    "content_list": [
        {
            "group": "v7",
            "title": "ビル経営ゲームv7のよくある質問",
            "release_time": "2023-12-02",
            "last_change_time": "2023-12-03",
            "creator": "@Masaabu-YT",
            "content": [
                {
                    "q": "トンカチと猫のアイコンの物は何ですか？",
                    "a": "モードです！それぞれ建築モード、猫モードという名前で、建築モードなら部屋をタップすることで建築ができます！猫モードなら猫をタップするとその猫のステータスを見ることができます！"
                }
            ]
        }
    ]
}
```
# API - News
お知らせの情報をJSON形式で取得することができる。
```json
{
    "createdBy": "Fun117",
    "version": "0.0.1",
    "title": "お知らせ",
    "content_list": [
        {
            "id": "43e33a56-7172-40b3-b98e-30df4c2f8af1",
            "title": "<a href='https://scratch.mit.edu/projects/927111186' target='_blank'>🎄クリスマス イベント開催中</a>",
            "description": "",
            "saveTime": "600",
            "start": "nYE12MO24DA0HO0MI0SE",
            "end": "nYE12MO25DA24HO59MI0SE",
            "creator": "@Fun117",
            "page": "all",
            "content": [
                {
                    "title": "",
                    "description": "",
                    "creator": "@Fun117"
                }
            ]
        }
    ]
}
```
# API - 設定項目
サイトに実装されている設定項目の情報をJSON形式で取得することができる。
```json
{
    "createdBy": "Fun117",
    "version": "0.0.1.1",
    "title": "設定",
    "content_list": [
        {
            "title": "安全な情報のみ表示",
            "id": "f7056b58-05c9-464c-be1c-770d0060e8b8",
            "release": "true",
            "initial_value": "checked",
            "creator": "@Fun117",
            "content": [
                {
                    "title": "認証がされていないコメントに含まれるURLなどを非表示にします。"
                }
            ]
        }
    ]
}
```