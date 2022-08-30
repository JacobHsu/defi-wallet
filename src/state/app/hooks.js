import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setPhone } from '.'

export const useUpdatePhone = () => {
    const dispatch = useDispatch()  
    return useCallback( (number)=> dispatch(setPhone(number)), [dispatch] )
}