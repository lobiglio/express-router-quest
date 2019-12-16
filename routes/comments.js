const express = require('express');
const fakeComments = require('../data/comments');

const router = express.Router({ mergeParams: true });

// Get a list of comments
router.get('/', (req, res) => {
  const postId = Number(req.params.postId);
  const postComments = fakeComments.filter((comment) => comment.post_id === postId);
  res.json(postComments);
});

// Get a single comment
router.get('/:id', (req, res) => {
  // Find the post in the array that has the id given by req.params.id
  const commentId = Number(req.params.id);
  const foundComment = fakeComments.find((comment) => comment.id === commentId);
  if (!foundComment) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  return res.json(foundComment);
});

module.exports = router;
