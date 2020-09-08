'use strict';

const TABLE='tags'

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
     name: 'ショッピング'
    },
    {
     name: 'MeetUp'
    },
    {
     name: 'イベント'
    },
    {
     name: '東京'
    },
    {
     name: '乗り換え案内'
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
