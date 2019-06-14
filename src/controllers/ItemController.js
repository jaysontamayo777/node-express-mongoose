import { Item } from '../models';
import { PostsService } from '../services';

function search(req, res) {
  let findOptions = {}

  if (req.query.name) {
    findOptions.name = req.query.name;
  }

  if (req.query.code) {
    findOptions.code = req.query.code;
  }

  Item.find(findOptions)
    .then(items => {
      res.status(200).json({
        items
      })
    })
    .catch(err => {
      res.status(400).json({
        error: err
      });
    })
}

function get(req, res) {
  const { code } = req.params;
  const findOptions = {
    code
  };

  Item.findOne(findOptions)
    .then(item => {
      const result = item || {};
      res.status(200).json({
        item: result
      })
    })
    .catch(err => {
      res.status(400).json({
        error: err
      });
    })
}

function create(req, res) {
  const item = req.body;

  console.log('item:', item);
  Item.create(item)
    .then(newItem => {
      res.status(200).json({
        item: newItem
      })
    })
    .catch(err => {
      res.status(400).json({
        error: err
      });
    })
}

function update(req, res) {
  res.status(200).json({
    action: 'Create Item'
  })
}

function getFromSampleApi(req, res) {
  PostsService.getPosts()
    .then(results => {
      res.status(200).json({
        posts: results
      })
    })
    .catch(err => {
      res.status(400).json({
        error: err
      });
    })
}
module.exports = {
  search,
  get,
  create,
  update,
  getFromSampleApi
}