import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center mb-8">Which Pokemon is rounder?</div>
      <div className="border rounded p-8 flex justify-between items-center max-w-3xl">
        <div className="w-16 h-16 bg-red-300"></div>
        <span className="p-8">VS</span>
        <div className="w-16 h-16 bg-red-300"></div>
      </div>
    </div>
  )
}

export default Home
