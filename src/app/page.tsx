import getAllPosts from '@/lib/getAllPosts'
import HeaderText from './components/HeaderText';
import TableBody from './components/TableBody';
import TableHeader from './components/TableHeader';
import { Post } from '../../type.dt';

export default async function Home() {

  const postData: Promise<Post[]> = getAllPosts()
  const posts = await postData

  return (
    <main className="flex w-full flex-col items-center justify-between p-5 space-y-6">
      <h1 className='text-[50px] font-bold'><HeaderText /></h1>
      <div className="bg-white border-white border border-b-2 w-full"/>
      
      <div className='w-full flex flex-col items-center justify-center text-black text-[12px]'>
        <TableHeader />
        <TableBody data={posts}/>
      </div>
    </main>
  )
}


