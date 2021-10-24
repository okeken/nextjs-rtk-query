import { useState } from 'react';
import tw from 'twin.macro';
import { extractNumber } from '../../utils';

const emp  =[]
const  defaultUrl = Array(10).fill(1).map((i, idx)=>emp.push(idx))

function Pagination({info, changePage}) {
    const [totalRecords, setTotalRecords] = useState(null)
    const [totalNumber, setNumber] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    const [pageArray, setPageArrcay] = useState(defaultUrl)

    const handleChange =(type, info)=>{
        if(type==='setPage'){
            setCurrentPage(info)
            console.log(info, 'nifo')
            setCurrentPage(info)
        //     const reduceNumber = info - 1
        //     const newPageArray = pageArray.map(i => (i + reduceNumber))
        //     console.log(pageArray, newPageArray)
        //    setPageArrcay(newPageArray)

            return  changePage(info)
        }
        if(type==='prev'){
            const link   = info?.prev || []
          setCurrentPage(extractNumber(link))
        //   const newPageArray = pageArray.map(i => (i - 1))
        //   setPageArrcay(newPageArray)
        const numberToUse = currentPage >1 ? currentPage+1 :extractNumber(link)
        return changePage(numberToUse)
     
        }

        if(type==='next'){
        const link   = info?.next || []
        // const newPageArray = pageArray.map(i => (i + 1))
        // setPageArrcay(newPageArray)
        setCurrentPage(extractNumber(link))
        const numberToUse = currentPage >1 ? currentPage+1 :extractNumber(link)
         return changePage(numberToUse)
        }

        
    }
   

    return (
        <div tw="flex items-center space-x-1 mx-auto my-10 justify-center">
    <span onClick={() => handleChange('prev', info)} tw="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" tw="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
    </span>

    {
       pageArray.map((item)=>(
            <span 
            disable={`${item ===currentPage}`}
            onClick={()=> handleChange('setPage', item)}

            css={[ item ==currentPage ? tw`bg-blue-400 cursor-not-allowed`: tw`bg-gray-200` ]}
            // css={[tw`border border-solid border-black`, true && tw`hover:border-red-300`]}

            key={item} tw='hover:bg-blue-400 px-4 py-2 text-gray-700 cursor-pointer  rounded-md hover:bg-blue-400 hover:text-white'>
            {item}
      
        </span>
        ))
    }


    <span onClick={() => handleChange('next', info)} tw="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" tw="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    </span>
</div>
    )
}

export default Pagination
