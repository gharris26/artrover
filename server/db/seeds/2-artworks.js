/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('artworks').del()
  await knex('artworks').insert([
    {
      gallery_id: 1,
      name: 'Pancake Paradise',
      medium: 'Syrup and butter on a vinyl record',
      description:
        'A syrupy masterpiece where golden pancakes stack like skyscrapers amidst a buttery metropolis, spinning tunes of brunchtime delight.',
    },
    {
      gallery_id: 2,
      name: 'The Quirky Quokka Quartet',
      medium: 'Crayon and glitter on cardboard',
      description:
        'Four jolly quokkas form a glittery quartet, serenading you with their jazzy tunes and dancing their way into your heart.',
    },
    {
      gallery_id: 3,
      name: 'Bubblegum Galaxy',
      medium: 'Chewing gum wrappers and glitter on canvas',
      description:
        'A sparkling galaxy made of chewed gum wrappers, where planets of bubblegum pop and sugary stars light up the universe.',
    },
    {
      gallery_id: 4,
      name: 'The Zany Zebra Zephyr',
      medium: 'Colored pencil on a feather duster',
      description:
        "A whimsical zebra rides a feather duster zephyr, a joyful jumble of stripes and swirls that'll sweep you off your feet.",
    },
    {
      gallery_id: 1,
      name: 'Squishy Sock Sculpture',
      medium: 'Repurposed socks and fabric glue',
      description:
        'A chaotic creation of colorful, squishy socks sculpted into a towering, toe-tapping testament to comfort and coziness.',
    },
    {
      gallery_id: 2,
      name: 'Giraffic Park',
      medium: 'Paper mache and googly eyes on a garden gnome',
      description:
        'A peculiar garden gnome transformed into a towering giraffe with googly eyes, bringing the wilds of Giraffic Park to your backyard.',
    },
    {
      gallery_id: 3,
      name: 'Flower Power Popsicles',
      medium: 'Popsicle sticks and acrylic paint',
      description:
        'A groovy arrangement of psychedelic popsicles sprouting vibrant flowers, spreading summer vibes and sweet sensations.',
    },
    {
      gallery_id: 4,
      name: 'Octo-Tea Party',
      medium: 'Tea bags and seashells on driftwood',
      description:
        'An underwater tea party hosted by an octopus, complete with teabags and seashell teacups, where the conversation flows as smoothly as the current.',
    },
    {
      gallery_id: 1,
      name: 'Rubber Duckie Rainbow',
      medium: 'Rubber duckies and rainbow-colored foam',
      description:
        'A cheerful rainbow made of rubber duckies, each one wearing a smile and floating on a sea of foam bubbles.',
    },
    {
      gallery_id: 2,
      name: 'Moustache Masterpiece',
      medium: 'Duct tape and felt on a vintage suitcase',
      description:
        'A dapper suitcase adorned with quirky mustache designs, a playful homage to the timeless elegance of facial hair.',
    },
    {
      gallery_id: 3,
      name: 'Banana Bonanza Ballet',
      medium: 'Banana peels and twine on a banana leaf',
      description:
        'A whimsical dance of banana peels and twine on a giant banana leaf stage, showcasing the graceful beauty of fruit in motion.',
    },
    {
      gallery_id: 4,
      name: 'Socktopus Symphony',
      medium: 'Socks and googly eyes on a coat hanger',
      description:
        'A musical coat hanger transformed into a symphony of socktopuses, each playing a unique tune with a charming twist.',
    },
  ])
}
