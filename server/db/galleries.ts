import { Gallery } from '../../models/gallery.ts'
import connection from './connection.ts'

export async function all() {
  const galleries = await connection('galleries').select('*')
  return galleries as Gallery[]
}

export async function byId(id: number) {
  const gallery = await connection('galleries')
    .join('artworks', 'artworks.gallery_id', 'galleries.id')
    .select(
      'galleries.*',
      'galleries.id',
      'galleries.name',
      'galleries.description',
      'artworks.id as artwork_id',
      'artworks.name as artwork_name',
      'artworks.description as artwork_description',
      'artworks.medium as artwork_medium',)
    .where('galleries.id', id)
  return gallery as GalleryDetails
}
