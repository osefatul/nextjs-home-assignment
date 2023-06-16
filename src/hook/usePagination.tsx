"use client"
import React, {useState} from 'react'
import { Post, Props } from '../../type.dt';



const usePagination = ({data} : {data:Post[]} , itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };

  const goToPage = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const previousPage = () => {
    goToPage(currentPage - 1);
  };

  const selectedRow = (id:number) =>{
    return data.filter((el)=> el?.id === id);
  }

  return {
    currentPage,
    totalPages,
    currentData,
    nextPage,
    previousPage,
    selectedRow
  };
};

export default usePagination;