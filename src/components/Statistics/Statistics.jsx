import { useState } from 'react'
import StatisticsItem from './StatisticsItem'
import Total from './Total'
import PositiveFb from '../PositiveFb/PositiveFb'

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  const [visible, stVisible] = useState(false)
  return (
    <div>
      {total === 0 ? (
        visible
      ) : (
        <ul>
          <StatisticsItem good={good} neutral={neutral} bad={bad} />
          <Total total={total} />
          <PositiveFb positivePercentage={positivePercentage} />
        </ul>
      )}
    </div>
  )
}

//=======old class
// class Statistics extends Component {
//   state = {
//     visible: false,
//   }

//   render() {
//     const { good, neutral, bad, total, positivePercentage } = this.props

//     return (
//       <div>
//         {total === 0 ? (
//           this.state.visible
//         ) : (
//           <ul>
//             <StatisticsItem good={good} neutral={neutral} bad={bad} />
//             <Total total={total} />
//             <PositiveFb positivePercentage={positivePercentage} />
//           </ul>
//         )}
//       </div>
//     )
//   }
// }

// export default Statistics
