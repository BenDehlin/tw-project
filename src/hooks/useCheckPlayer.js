import {useEffect} from 'react'

const useCheckPlayer = (player, push) => {
  useEffect(() => {
    if(!player.player_id){
      push('/login')
    }
  }, [])
}

export default useCheckPlayer