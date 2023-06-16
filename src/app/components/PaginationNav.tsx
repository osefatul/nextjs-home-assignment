import { PaginationProps } from "../../../type.dt";





export default function PaginationNav({current, prev, next, totalPages}: PaginationProps) {
  return (
    <div className=" absolute right-0 -bottom-10 space-x-3">
        <button className="w-18 text-[12] p-1 cursor-pointer rounded-md bg-slate-200" onClick={prev} disabled={current === 1}>
          Previous
        </button>
        <span className="font-bold">{`Page ${current} of ${totalPages}`}</span>
        <button className= "w-16 text-[12] p-1 rounded-md cursor-pointer bg-slate-200" onClick={next} disabled={current === totalPages}>
          Next
        </button>
    </div>
  )
}