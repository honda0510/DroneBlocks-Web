# DroneBlocks-Web

このリポジトリはChromeアプリの[DroneBlocks](https://chrome.google.com/webstore/detail/droneblocks/nbfahmffcopanponfpkefngbijhbnffa)を日本語化するものです。子ども向けのワークショップのために[dbaldwin/DroneBlocks-Web](https://github.com/dbaldwin/DroneBlocks-Web)をフォークして作りました。

## 使い方

1. `tello.appcache`に書かれたファイルをすべてhttpサーバーにアップロードします。`tello.appcache`も必要です。
2. httpサーバーにマニフェストファイル (.appcache)のMIMEタイプを設定します。  
Apacheであれば、`.htaccess`ファイルに `AddType text/cache-manifest .appcache` を追加します。
3. DroneBlocksがインストールされたフォルダにある`window.html`をエディタで開き、`<webview>`タグのURLをご自身のサーバーのURLに変更します。
