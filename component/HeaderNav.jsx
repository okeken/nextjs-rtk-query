import tw, { styled } from 'twin.macro';


export const HeaderNav = ()=>{
    return(
    <>
    <Heading>
    The Rick and Morty
    </Heading>
    </>)
}

export const Heading = styled.h1(({isSecondary})=>[  
    tw`text-purple-600  text-center my-10 text-6xl font-bold font-mono
    `,
  
])

