'use client'
// 本コンポーネント配下にインポートするコンポーネントは、
// 'use client'を記載しなくても全てクライアントコンポーネントになる

import { useState } from "react"

export default function ClientComponent() {
  const [ count, setCount ] = useState(0)

  console.log('Client')
  return (
    <div>
      クライアント
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}
