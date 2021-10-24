import { Card, CardImage, CardWrapper, InfoPanel } from "./style"
import { useRouter } from 'next/router'
import Link from 'next/link'
import  slugify from 'slugify'
import tw, { styled, theme, css } from 'twin.macro';

function CharacterCard({data}) {
    const router = useRouter()
   // console.log('router', router)
    return (
        <>
        <CardWrapper>
            
            <Card>
         
            {
                data?.map((i)=> 
                <Link href={`characters/${i.id} `} key={i?.id}>
             <div> 
                 <CardImage src={`${i.image}`} />   
                <InfoPanel> 
                <div> {(i.name).slice(0, 10)} </div>
                <div css={[ i.status ==='Dead' && tw`bg-red-50`,  i.status ==='Alive' && tw`bg-green-100`, tw`p-1 rounded-md`, i.status ==='unknown' && tw`bg-purple-100` ]} > 
                <p css={[ i.status ==='Dead' && tw`text-red-400`,  i.status ==='Alive' && tw`text-green-400`,  i.status ==='unknown' && tw`text-purple-400` ]}>
                {i.status}
                </p>
                 </div>
                 </InfoPanel>
             </div>
                </Link>
             )   
            }
            
            </Card>
        </CardWrapper>
        </>
    )
}

export default CharacterCard
