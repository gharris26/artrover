import { Artwork, ArtworkDetails } from '../../models/artwork.ts'
import connection from './connection.js'

export async function all() {
  const artworks = await connection('artworks').select('*')
  return artworks as Artwork[]
}

export async function byId(id: number) {
  const data = await connection('artworks')
    .join('galleries', 'artworks.gallery_id', 'galleries.id')
    .select(
    'artworks.*',
    'galleries.name as gallery_name')
    .where('artworks.id', id)
  return data as ArtworkDetails
}
