import { useRouter } from 'next/router'
import {useGetCharacterDetailsQuery} from '../../services/api'


function Character() {
    const router = useRouter()
    const { slug } = router.query
    const {data, isFetching, isError, isLoading, refetch} = useGetCharacterDetailsQuery(1)

 
    return (
        <div>
           character One
        </div>
    )
}

export default Character
