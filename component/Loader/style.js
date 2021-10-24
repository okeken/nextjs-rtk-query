import tw, { styled, theme, css } from 'twin.macro';




export const Card = styled.div(({isSecondary})=>[  
    tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-xl`,

])

export const LoaderWrapper = styled.div(({isSecondary})=>[  
    tw`mx-auto   mt-20  `])