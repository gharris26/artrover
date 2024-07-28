/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('galleries').del()
  await knex('galleries').insert([
    {
      id: 1,
      name: 'Gallery of Quirk & Whimsy',
      description:
        'Step into a world of whimsy at the Gallery of Quirk & Whimsy, where art takes on a life of its own. Our exhibitions will tickle your imagination and leave you grinning from ear to ear.',
    },
    {
      id: 2,
      name: 'Surrealicious Art Haven',
      description:
        'Surrealicious Art Haven is where reality and dreams collide in a delightful dance of creativity. Explore the absurd, the fantastical, and the utterly bizarre in our enchanted gallery.',
    },
    {
      id: 3,
      name: 'The Wacky Brushstroke Wonderland',
      description:
        'Welcome to The Wacky Brushstroke Wonderland, a place where imagination runs wild and artistic boundaries are non-existent. Our gallery is a playground for the eccentric and the whimsical.',
    },
    {
      id: 4,
      name: 'Doodle Dandy Delights Gallery',
      description:
        'Doodle Dandy Delights Gallery celebrates the joy of doodles and the power of whimsy. Our exhibitions will transport you to a world of playful lines, colors, and boundless creativity.',
    },
  ])
}
