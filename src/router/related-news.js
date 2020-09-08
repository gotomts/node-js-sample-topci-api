const router = require('express').Router();
const db = require('../db/db-config');

const models = require('../models/');

router.get('/', (req, res) => {
  db.transaction(async t => {
    const news = await models.news.findAll({
      order: [['id', 'ASC']],
      limit: 4,
      include: models.category
    });
    return Promise.resolve(res.send(news));
  });
});

module.exports = router;
