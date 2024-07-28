export interface ArtworkData {
  name: string
  medium: string
  description: string
}

export interface ArtworkDetails extends Artwork {
  gallery_id: number
  gallery_name: string
  gallery_description: string
}

export interface Artwork extends ArtworkData {
  id: number
}

// TODO: define ArtworkDetails
