import { useState, useEffect } from 'react';
import {useGetCharacterDetailsQuery, useGetCharactersQuery} from '../../services/api'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import CharacterCard from '../../component/CharacterCard';
import Pagination from '../../component/Pagination';
import Loader from '../../component/Loader';

function Characters() {
    const [page, setPage] = useState(1);
    const {data:results, isFetching, isLoading, isError}  = useGetCharactersQuery(page)
    const handlePageChange = (number)=>{
        setPage(number)
    }
    
    const _loader = isFetching && <Loader />
   
    const _characters =  <CharacterCard data ={results?.results || []}/>
    const _paginate = !isLoading &&  <Pagination info={results?.info} changePage ={handlePageChange} />

      
    return (
        <>
        {_loader}
        {_characters}
       {_paginate}
        </>
    )
}


export default Characters
