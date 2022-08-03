### Changing OGP Image

[https://changing-ogp-image.vercel.app]("https://changing-ogp-image.vercel.app/")

(ページごとの動的OGPではなく)同一ページのOGPを、条件によって動的に変更できるかのテストです。

- vercel/og-imageを使って現在時刻をOGPに表示します
- ISRで15秒間キャッシュします
- ページのURLは同じでも、OGPを表示した時刻によって15秒ごとにOGPだけが動的に変更します

- Twitterではページごとにキャッシュが生成されるため、OGP画像のURLが動的に変わってもキャッシュが切れるまでは結局変わらない