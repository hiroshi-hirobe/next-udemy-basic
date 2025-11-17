import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ記事一覧",
  description: "ブログ記事一覧が表示されます。",
};

// ダミーデータ
const articles = [
  {id: "1", title: "タイトル1"},
  {id: "2", title: "タイトル2"},
  {id: "3", title: "タイトル3"},
]

// 3秒間待機
async function fetchArtiles() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  // // エラーページの確認用
  // throw new Error('エラーが発生')

  return articles
}

export default async function BlogPage() {
  const articles = await fetchArtiles()
  return (
    <div>
      <ul>
        { articles.map((article) => (
          <li key={article.id}>
            title: {article.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
