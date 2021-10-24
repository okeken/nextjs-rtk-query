import tw, { styled } from 'twin.macro';
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Card, LoaderWrapper } from './style'

function Loader() {
    return (
        <LoaderWrapper>
             <div tw="grid grid-cols-4 gap-6 mx-10">
            {
                new Array(12).fill(12).map((item, idx)=>
                    <Card key={idx}> 
                    <div tw='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                     <Skeleton  width='13rem' height='13rem'/>
                     </div>  
                    </Card>
                )
            }
               </div>
        </LoaderWrapper>
    )
}

export default Loader




export const Heading = styled.h1(({isSecondary})=>[  
    tw`text-purple-600  text-center my-10 text-6xl font-bold font-mono
    `,
  
])


