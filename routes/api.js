var express = require('express');
var dao = require('../data/Dao');
var router = express.Router();


/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create new users.
 *     responses:
 *       200:
 *         description: Create new users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID.
 *                   name:
 *                     type: string
 *                     description: The user's name.
 */
router.post('/user', function(req, res) {
  const { name } = req.body;
  let jsonData = dao.createName(name);
  res.status(200).json(jsonData);
});

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Returns a list of users.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID.
 *                   name:
 *                     type: string
 *                     description: The user's name.
 */
router.get('/user', function(req, res) {
  const { id } = req.body;
  
  let jsonData = dao.getNames(id);
  res.status(200).json(jsonData);
});

/**
 * @swagger
 * /api/user:
 *   put:
 *     summary: Returns a list of users.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID.
 *                   name:
 *                     type: string
 *                     description: The user's name.
 */

router.put('/user', function(req, res) {
  const { id, name } = req.body;

  let jsonData = dao.update(id, name);
  res.status(200).json(jsonData);
});

/**
 * @swagger
 * /api/user:
 *   delete:
 *     summary: Returns a list of users.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID.
 *                   name:
 *                     type: string
 *                     description: The user's name.
 */
router.delete('/user', function(req, res) {
  const { id } = req.body;

  let jsonData = dao.delete(id);
  res.status(200).json(jsonData);
});

module.exports = router;
