exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.string('userName');
    table.string('password');
  })
};

exports.down = function(knex, Promise) {

};
