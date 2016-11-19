exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('userName').unique();
    table.string('password');
  }).createTable('videos', (table) => {
    table.increments();
    table.integer('creator_id');
    table.string('title');
    table.string('embed_url');
    table.float('rating');
    table.bigInteger('created_at').notNullable().defaultTo(Date.now());
  });
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users').dropTable('videos');
};
