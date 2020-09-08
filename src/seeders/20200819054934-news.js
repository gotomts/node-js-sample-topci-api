'use strict';

const TABLE='news'

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
    title: '1年で8回の資金調達（総額$34M）を成功させたわずか8枚の類似画像検索技術',
    category_id: 1,
    url: 'news1',
    image: 'image1.png',
    tag_id: 1,
    content: 'ニュース記事詳細サンプル',
    created_by: 1,
    updated_by: 1,
    created_at: new Date(),
    updated_at: new Date()
   },
   {
    title: '主要なメガネ 4種をざっくり解説',
    category_id: 2,
    url: 'news2',
    image: 'image2.png',
    tag_id: 1,
    content: 'ニュース記事詳細サンプル',
    created_by: 1,
    updated_by: 1,
    created_at: new Date(),
    updated_at: new Date()
   },
   {
    title: 'お金の厳選おすすめエクステンション50個まとめ',
    category_id: 3,
    url: 'news3',
    image: 'image3.png',
    tag_id: 1,
    content: 'ニュース記事詳細サンプル',
    created_by: 1,
    updated_by: 1,
    created_at: new Date(),
    updated_at: new Date()
   },
   {
    title: '大人になった今だからこそ楽しめるテスト 2講義',
    category_id: 2,
    url: 'news4',
    image: 'image4.png',
    tag_id: 1,
    content: 'ニュース記事詳細サンプル',
    created_by: 1,
    updated_by: 1,
    created_at: new Date(),
    updated_at: new Date()
   },
   {
    title: '習慣でもここまでできる！米財務省から学べる美しい資料作りのポイント',
    category_id: 1,
    url: 'news5',
    image: 'image5.png',
    tag_id: 1,
    content: 'ニュース記事詳細サンプル',
    created_by: 1,
    updated_by: 1,
    created_at: new Date(),
    updated_at: new Date()
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
