import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '.'

export const useUpdatePage = () => {
    const dispatch = useDispatch()  
    return useCallback( (index)=> dispatch(setPage(index)), [dispatch] )
}