import { useNavigate, useParams } from 'react-router-dom'

const KatasDetailPage = () => {

  // Find Id from params
  let { id } = useParams()

  let navigate = useNavigate()

  return (
    <div>
      <h1>Katas Detail Page { id }</h1>
    </div>
  )
}

export default KatasDetailPage