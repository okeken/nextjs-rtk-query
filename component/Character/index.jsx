import { useRouter } from 'next/router'
import {useGetCharacterDetailsQuery} from '../../services/api'

function Character() {
    const router = useRouter()
    const {data, isFetching, isError} = useGetCharacterDetailsQuery(1)
    console.log(router)

    return (
        <div>
            Character
        </div>
    )
}

export default Character
