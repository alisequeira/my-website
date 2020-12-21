import Head from 'next/head'

export default function Home() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-blue-light rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
      </div>
      <div>
        <div className="text-xl font-medium text-text-white">ChitChat</div>
        <p className="text-text-white">You have a new message!</p>
      </div>
    </div>
  )
}
