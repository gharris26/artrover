/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.alterTable('artworks', (table) => {
        table.integer('gallery_id').references('galleries.id').onDelete('CASCADE')
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.table('artworks', function (table) {
        table.dropColumn('gallery_id')
    })
};