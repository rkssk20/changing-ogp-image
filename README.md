### Changing OGP Image
[https://changing-ogp-image.vercel.app](https://changing-ogp-image.vercel.app)

同一ページで動的OGPができるかのテスト

(ページごとではなく、一つのページで動的に変更させる)

### 方法
- 画像生成にvercel/og-imageを使用
- 同一ページで毎回OGPを変更することはできるが、共有先のTwitterなどでキャッシュされてしまう
- キャッシュ対策でパラメータを変更させればOK

- タイムスタンプをパラメータにすることで、URLを動的に変更させてキャッシュを回避する
- タイムスタンプだと推測しやすいため、Cryptoで暗号化する

「〇時〇分現在の天気、コロナの感染者数、スポーツ試合の途中経過」など、同一ページ内で変化する情報を動的OGPにできる