
import tw, { styled  } from 'twin.macro';


export const Footer = ()=>{
    return (
        <footer>
            <Foot>
                &copy; {new Date().getFullYear()}
            </Foot>
        </footer>
    )
}



export const Foot = styled.h1(({isSecondary})=>[  
    tw`text-purple-500  text-center my-5 text-xl font-bold font-mono
    `,
  
])