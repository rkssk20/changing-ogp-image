### Changing OGP Image

[https://changing-ogp-image.vercel.app]("https://changing-ogp-image.vercel.app/")

(ページごとの動的OGPではなく)同一ページのOGPを、条件によって動的に変更できるかのテストです。

- vercel/og-imageを使って現在時刻をOGPに表示します
- ISRで15秒間キャッシュします
- 同一ページの中で、15秒ごとにOGPの時刻が変化します

- TwitterなどはページのURLでOGPがキャッシュされます
- そのため、現在時刻をパラメータに加えてキャッシュさせないようにします
- タイムスタンプをそのまま設定すると、未来の値を推測して先にキャッシュを作ることも可能
- そのためCryptoで暗号化して推測しにくくしています
