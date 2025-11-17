import ClientComponent from '@/components/ClientComponent'

export default function ServerComponent() {
  console.log('Sever')
  return (
    <div>
      サーバー
      <ClientComponent />
    </div>
  )
}
