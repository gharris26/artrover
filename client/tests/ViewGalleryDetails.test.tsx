// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { setupApp } from './test-setup.js'
import nock from 'nock'
import {screen} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

describe('gallery details', () => {
  it('renders the detail from an gallery', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/galleries/1')
      .reply(200, [{
        id: 1,
        name: 'Gallery of Quirk & Whimsy',
        description:
          'Step into a world of whimsy at the Gallery of Quirk & Whimsy, where art takes on a life of its own. Our exhibitions will tickle your imagination and leave you grinning from ear to ear.',
      }])

    const { ...screen } = setupApp('/galleries/1')
    const heading = await screen.findByRole('heading', {
      name: 'Gallery: Gallery of Quirk & Whimsy',
    })

    expect(heading).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
  
  it('should have correct links', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/galleries/1')
      .reply(200, [{
        id: 1,
        name: 'Gallery of Quirk & Whimsy',
        description:
          'Step into a world of whimsy at the Gallery of Quirk & Whimsy, where art takes on a life of its own. Our exhibitions will tickle your imagination and leave you grinning from ear to ear.',
        artwork_id: 1,
        artwork_name: "Pancake Paradise",
        artwork_description: "A syrupy masterpiece where golden pancakes stack like skyscrapers amidst a buttery metropolis, spinning tunes of brunchtime delight.",
        artwork_medium: "Syrup and butter on a vinyl record"
        }])

    const scope2 = nock('http://localhost')
      .get('/api/v1/artworks/1')
      .reply(200, [{
        "id": 1,
        "name": "Pancake Paradise",
        "medium": "Syrup and butter on a vinyl record",
        "description": "A syrupy masterpiece where golden pancakes stack like skyscrapers amidst a buttery metropolis, spinning tunes of brunchtime delight.",
        "gallery_id": 1,
        "gallery_name": "Gallery of Quirk & Whimsy"
    }])
    
    const { ...screen1 } = setupApp('/galleries/1')
    const { ...screen2 } = setupApp('/artworks/1')

    // Get the heading from /galleries/1
    const heading1 = await screen1.findByRole('heading', {
      name: 'Gallery: Gallery of Quirk & Whimsy',
    })
    expect(heading1).toBeVisible()
    expect(scope.isDone()).toBe(true)

    // Navigate to the artwork details page
    const link = await screen1.findByRole('link', { name: 'Pancake Paradise' })
    await userEvent.click(link)

    // Get the heading from /artworks/1
    const heading2 = await screen2.findByRole('heading', {
      name: 'Artwork: Pancake Paradise',
    })
    expect(heading2).toBeVisible()
    expect(scope2.isDone()).toBe(true)
  })
})
