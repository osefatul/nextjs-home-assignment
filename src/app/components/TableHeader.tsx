

export default async function TableHeader () {

  return (
      <div className="flex w-full space-x-1 font-bold">
        <span className="w-[20%] h-10 bg-emerald-500 flex items-center justify-center">
        </span>
        
        <div className="w-[15%] h-10 bg-emerald-500 flex items-center justify-center">
          Title
        </div>

        <div className="w-[65%] h-10 bg-emerald-500 flex items-center justify-center">
          Body
        </div>
      </div>
  )

}