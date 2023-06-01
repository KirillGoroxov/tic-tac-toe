import { useContext } from 'react'
import c from './Score.module.scss'
import { dataContext } from '../../Context'
const Score = () => {
  const data = useContext(dataContext)
  const styleCross = data.whoseMove === 'cross' ? true : false
  const styleCircle = data.whoseMove === 'circle' ? true : false
  return (
    <div className={c.score}>
      <div className={c.player} style={{ color: 'rgb(207, 112, 112)', borderBottom: styleCross && '4px solid rgb(207, 112, 112)' }}>
        x - {data.cross}
      </div>
      <div className={c.player} style={{ color: 'rgb(98, 98, 226)', borderBottom: styleCircle && '4px solid rgb(98, 98, 226)' }}>
        o - {data.circle}
      </div>
    </div>
  )
}

export default Score