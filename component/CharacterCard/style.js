import tw, { styled, theme, css } from 'twin.macro';

export const InfoPanel =styled.div(()=>[tw`flex justify-between p-2 bg-gray-50`])

export const CardWrapper = styled.div(({isSecondary})=>[  
    tw`mx-auto  max-w-4xl mt-20 md:place-items-center `])

export const Card = styled.div(({isSecondary})=>[  
    tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-xl`,

])
export const CardImage = styled.img(({isSecondary})=>[  
    tw`rounded-sm cursor-pointer 
    `,
  
])

