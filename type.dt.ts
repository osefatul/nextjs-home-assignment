
export interface Post {
  userId: number;
  id:number;
  title: string;
  body: string;
}


export interface Props{
  data: Post[]
}

export interface SetheaderText {
  setheaderText: (name:string)=>void
}

export interface PaginationProps {
  current: number;
  prev: ()=>void;
  next: ()=>void;
  totalPages: number;
}

export interface RowProps {
  id: number;
  title: string;
  body: string;
  type: string;
  setSelected: (id:number)=>void;
}