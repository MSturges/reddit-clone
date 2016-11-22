exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('userName').unique();
    table.string('password');
  }).createTable('videos', (table) => {
    table.increments();
    table.integer('creator_id').unsigned().references('users.id').onUpdate('CASCADE').index();
    table.string('creator_name');
    table.string('title');
    table.string('embed_url');
    table.float('rating');
    table.bigInteger('created_at').notNullable().defaultTo(Date.now());
  }).createTable('comments', (table) => {
    table.increments();
    table.string('creator_name');
    table.integer('creator_id').unsigned().references('users.id').onUpdate('CASCADE').index();
    table.integer('comment_id').unsigned().references('videos.id').onUpdate('CASCADE').index();
    table.string('comment');
  });
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments').dropTable('videos').dropTable('users');
};
