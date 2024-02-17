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


router.get('/utube' ,(req , res)=>{
    res.render('utube');
} )

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


