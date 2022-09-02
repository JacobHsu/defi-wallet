import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setMenuDialog, setTgLoginDialog, setCreateWalletDialog } from '.'

export const useSetMenuDialog = () => {
    const dispatch = useDispatch()  
    return useCallback( (index)=> dispatch(setMenuDialog(index)), [dispatch] )
}

export const useSetTgLoginDialog = () => {
    const dispatch = useDispatch()  
    return useCallback( (val)=> dispatch(setTgLoginDialog(val)), [dispatch] )
}

export const useSetCreateWalletDialog = () => {
    const dispatch = useDispatch()  
    return useCallback( (val)=> dispatch(setCreateWalletDialog(val)), [dispatch] )
}