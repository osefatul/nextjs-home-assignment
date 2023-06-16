"use client"

import usePagination from "@/hook/usePagination";
import { Post, Props, SetheaderText } from "../../../type.dt";
import PaginationNav from "./PaginationNav";
import { useState } from "react";
import Row from "./Row"

export default async function TableBody (data:Props) {

  const { 
    currentPage, 
    totalPages, 
    nextPage, 
    currentData, 
    previousPage, 
    selectedRow } = usePagination(data, 5);

  const [selected, setSelected] = useState<number>(0);
  
  return (
    <div className="w-full h-full relative">
      { 
      selected ? 
      selectedRow(selected).map((post: Post)=>(
        <div 
          key={post.id}>
          <Row
          setSelected={setSelected}
          type="selectedRow"
          id={post.id}
          title={post.title}
          body={post.body}/>
        </div>
      ))
      :
      currentData().map((post: Post)=> (
        <div 
          key={post.id}>
          <Row
          setSelected = {setSelected}
          type ="allDataSet"
          id = {post.id}
          title = {post.title}
          body = {post.body}/>
        </div>
      ))}

      <PaginationNav
      prev={previousPage} 
      current={currentPage}
      next={nextPage}
      totalPages={totalPages}/>
    </div>
  )
}