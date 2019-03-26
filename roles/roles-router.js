const router = require('express').Router();
const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/roles.db3'
  },
};

const db = knex(knexConfig);


router.get('/', (req, res) => {
  // returns a promise that resolves to all records in the table
  db('roles')
  .then(roles => {
    res.status(200).json(roles);
  })
  .catch(error => {
    res.status(500).json(error);
  })
});

router.get('/:id', (req, res) => {
  // retrieve a role by id
  const { id } = req.params;

  db('roles')
  .where({ id })
  .first()
  .then(role => {
    res.status(200).json(role);
  })
  .catch(error => {
    res.status(500).json(error);
  })
});

router.post('/', (req, res) => {
  // get back an array with the last id generated: [3]
  db('roles')
  .insert(req.body)
  .then(is => {
    
  })
});

router.put('/:id', (req, res) => {
  // update roles
  res.send('Write code to modify a role');
});

router.delete('/:id', (req, res) => {
  // remove roles (inactivate the role)
  res.send('Write code to remove a role');
});

module.exports = router;
