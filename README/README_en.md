> [English](./README_en.md) / [日本語](./README_ja.md)

# ビル経営ゲーム

Building Management Game is a building simulation game made in Scratch.

## [公式ホームページ](https://masaabu.github.io/Scratch-Building/)
source code on [GitHub](https://github.com/Masaabu/Scratch-Building)

# Comments - Guide
You can retrieve comments stored in the data, view and manage comments. Comments are not secured. Anti-spam and other functions are not yet implemented.

## Add button to read comments

```html
<a id="loadAddComment" class="button" onclick="loadAddComment('add','5')" style="text-align: center;">See more</a>
```

### Description of the onclick element
```js
loadAddComment('add','5')
```
> The code above executes a FUNCTION that increases the number of comments displayed in the comment display field by ```5```.

Where it currently says `add`, you can enter the mode, and where it currently says `5`, you can set the value.

### Mode List
- ```set``` / The number of comments to be displayed in the comment display field can be set.
- ```add``` / The number of comments displayed in the comment display section can be increased.

# MOD - Guide
The information on the mods stored in the data can be analyzed and displayed. Since no database is currently implemented, data is stored in object variables.

## Display mod information
```html
<div id="mods"></div>
```
> The mod information is added to the ``id=mods`` element as shown in the code above.

## TAGID Description
There are 0, 1, and 2 in tagId.
- ``0`` / ``general`` (tags will never be displayed)
- ``1`` / ``official`` (the tag is displayed and ``name`` is displayed as the name of the tag).
- ``2`` / ``premise`` (the tag is displayed and ``name`` is displayed as the name of the tag).

# API
Send a GET request to obtain information in Json format.

# API - changelog
You can get the game change history in JSON format.
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
# API - MOD Information
Information on registered mods can be obtained in JSON format.
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
# API - Q&A Information
Registered question and answer information can be retrieved in JSON format.
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
Information about notifications can be obtained in JSON format.
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
# API - Configuration Items
Information on configuration items implemented on the site can be obtained in JSON format.
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