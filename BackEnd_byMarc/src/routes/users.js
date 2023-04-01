const { Router } = require('express');
const router = Router();

const User = require('../models/User');

const faker = require('faker');

router.get('/api/users', (req, res) => {
    res.json('User List');
});

router.get('/api/users/create', async (req, res) => {
    for (let i = 0; i < 5; i++){
        await User.create({
            firstName: faker.name.firstName(), // Genera un nombre random.
            lastName: faker.name.lastName(), // Genera un apellido random.
            avatar: faker.image.avatar() // Genera una foto random.
        });
    }
    res.json({message: '5 Users Created'});
})

module.exports = router;