const { Router } = require("express");
const User = require("../models/user");
const router = Router();


const diet_plan = [
        {
            "day": "Monday",
            "meals": [
                { "time": "8:00 AM", "meal": "Breakfast: Oatmeal with fruits" },
                { "time": "12:00 PM", "meal": "Lunch: Grilled chicken with quinoa salad" },
                { "time": "4:00 PM", "meal": "Snack: Greek yogurt with honey" },
                { "time": "7:00 PM", "meal": "Dinner: Baked salmon with roasted vegetables" }
            ]
        },
        {
            "day": "Tuesday",
            "meals": [
                { "time": "8:00 AM", "meal": "Breakfast: Scrambled eggs with spinach and whole grain toast" },
                { "time": "12:00 PM", "meal": "Lunch: Turkey sandwich with avocado and mixed greens" },
                { "time": "4:00 PM", "meal": "Snack: Apple slices with almond butter" },
                { "time": "7:00 PM", "meal": "Dinner: Grilled steak with sweet potato fries and steamed broccoli" }
            ]
        },
        {
            "day": "Wednesday",
            "meals": [
                { "time": "8:00 AM", "meal": "Breakfast: Greek yogurt parfait with granola and berries" },
                { "time": "12:00 PM", "meal": "Lunch: Quinoa and black bean salad with avocado dressing" },
                { "time": "4:00 PM", "meal": "Snack: Cottage cheese with pineapple chunks" },
                { "time": "7:00 PM", "meal": "Dinner: Lemon herb baked chicken with brown rice and steamed asparagus" }
            ]
        },
        {
            "day": "Thursday",
            "meals": [
                { "time": "8:00 AM", "meal": "Breakfast: Whole grain pancakes with maple syrup and sliced bananas" },
                { "time": "12:00 PM", "meal": "Lunch: Tuna salad wrap with lettuce and tomato" },
                { "time": "4:00 PM", "meal": "Snack: Carrot sticks with hummus" },
                { "time": "7:00 PM", "meal": "Dinner: Shrimp stir-fry with mixed vegetables and brown rice" }
            ]
        },
        {
            "day": "Friday",
            "meals": [
                { "time": "8:00 AM", "meal": "Breakfast: Smoothie made with spinach, banana, and almond milk" },
                { "time": "12:00 PM", "meal": "Lunch: Quinoa sushi rolls with cucumber and avocado" },
                { "time": "4:00 PM", "meal": "Snack: Trail mix with nuts and dried fruit" },
                { "time": "7:00 PM", "meal": "Dinner: Baked cod with lemon garlic butter sauce and roasted Brussels sprouts" }
            ]
        },
        {
            "day": "Saturday",
            "meals": [
                { "time": "8:00 AM", "meal": "Breakfast: Veggie omelette with tomatoes, onions, and peppers" },
                { "time": "12:00 PM", "meal": "Lunch: Chicken Caesar salad with homemade dressing" },
                { "time": "4:00 PM", "meal": "Snack: Edamame beans sprinkled with sea salt" },
                { "time": "7:00 PM", "meal": "Dinner: Beef and vegetable kebabs with quinoa pilaf" }
            ]
        },
        {
            "day": "Sunday",
            "meals": [
                { "time": "8:00 AM", "meal": "Breakfast: Whole wheat toast with avocado and poached eggs" },
                { "time": "12:00 PM", "meal": "Lunch: Lentil soup with whole grain bread" },
                { "time": "4:00 PM", "meal": "Snack: Greek yogurt with mixed berries" },
                { "time": "7:00 PM", "meal": "Dinner: Baked tofu with stir-fried vegetables and brown rice" }
            ]
        }
    ]




router.get('/humandiet', (req, res) => {
    res.render('diete', { diet_plan });
});


router.get('/abs', (req, res) => {
    return res.render("abs", {
        user: req.user,
    });
});

router.get('/chest', (req, res) => {
    return res.render("chest", {
        user: req.user,
    });
});
router.get('/legs', (req, res) => {
    return res.render("legs", {
        user: req.user,
    });
});


module.exports = router;







// const app = express();
// const port = 3000;

// Replace 'YOUR_YOUTUBE_API_KEY' with your actual YouTube API key
// const apiKey = 'AIzaSyDKcjFBfJczIUVKD43mwBJtOkKsdnJaVGg';
// const youtube = google.youtube({ version: 'v3', auth: apiKey });

// // app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.render('index');
// });


