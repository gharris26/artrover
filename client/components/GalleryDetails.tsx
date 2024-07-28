import { useParams, Link } from 'react-router-dom'
import { useGalleryDetails } from '../hooks/api.ts'
import LoadingIndicator from './LoadingIndicator.tsx'
import ErrorMessage from './ErrorMessage.tsx'

export default function GalleryDetails() {
  const params = useParams()
  const id = Number(params.id)
  const detail = useGalleryDetails(id)

  if (detail.isPending) {
    return <LoadingIndicator />
  }

  if (detail.isError || detail.data == undefined) {
    return <ErrorMessage error={detail.error} />
  }

  return (
    <>
      <h2 role="heading">Gallery: {detail.data[0].name}</h2>
      <p>{detail.data[0].description}</p>
      <h3>Artworks</h3>
      <ul>
        {detail.data.map((artwork) => (
          <li key={artwork.id}>
            <h4>
              <Link role="link" to={`/artworks/${artwork.artwork_id}`}>{artwork.artwork_name}</Link>
            </h4>
            <em>{artwork.artwork_medium}</em>
            <p>{artwork.artwork_description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
