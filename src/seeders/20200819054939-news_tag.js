'use strict';

const TABLE='news_tags'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert(TABLE, [
    {
      news_id: 1,
      tag_id: 1,
    },
    {
      news_id: 1,
      tag_id: 2,
    },
    {
      news_id: 1,
      tag_id: 3,
    },
    {
      news_id: 2,
      tag_id: 1,
    },
    {
      news_id: 3,
      tag_id: 2,
    },
    {
      news_id: 4,
      tag_id: 3,
    },
    {
      news_id: 5,
      tag_id: 3,
    },
    {
      news_id: 5,
      tag_id: 5,
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(TABLE, null, {});
  }
};
