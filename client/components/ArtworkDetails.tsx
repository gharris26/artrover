import { useParams, Link } from 'react-router-dom'
import { useArtworkDetails } from '../hooks/api.ts'
import LoadingIndicator from './LoadingIndicator'
import ErrorMessage from './ErrorMessage'

export default function ArtworkDetails() {
  const params = useParams()
  const id = Number(params.id)
  const detail = useArtworkDetails(id)

  if (detail.isPending) {
    return <LoadingIndicator />
  }

  if (detail.isError || detail.data == undefined) {
    return <ErrorMessage error={detail.error} />
  }

  const { name, medium, description, gallery_id } = detail.data

  return (
    <>
      <h2 role="heading"><span>Artwork: {name}</span></h2>
      <em>Medium: {medium}</em>
      <p>{description}</p>
      <p>Gallery: <Link to={`/galleries/${gallery_id}`}>{gallery_id}</Link></p>
    </>
  )
}
