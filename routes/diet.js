const { Router } = require("express");
const User = require("../models/user");
const router = Router();


const dietPlan = {
    day: 'Monday',
    meals: [
        { time: '8:00 AM', meal: 'Breakfast: Oatmeal with fruits' },
        { time: '12:00 PM', meal: 'Lunch: Grilled chicken with quinoa salad' },
        { time: '4:00 PM', meal: 'Snack: Greek yogurt with honey' },
        { time: '7:00 PM', meal: 'Dinner: Baked salmon with roasted vegetables' }
    ]
};


router.get('/humandiet', (req, res) => {
    res.render('diete', { dietPlan });
});



module.exports = router;