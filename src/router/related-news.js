const router = require('express').Router();
const db = require('../db/db-config');

const models = require('../models/');
const News = models.news;

router.get('/', (req, res) => {
  db.transaction(async t => {
    const news = await News.findAll({ order: [['id', 'ASC']] });
    return Promise.resolve(res.send(news));
  });
});

module.exports = router;
