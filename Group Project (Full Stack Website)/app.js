// INITIALIZING MONGODB CONNECTION 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://wad2g9:flannelgang@cluster0.dxjblb1.mongodb.net/test";

// INITIALIZING WEB SERVER WITH NODE.JS, AND MIDDLEWARE FRAMEWORK EXPRESS FOR ROUTING
const express = require("express");
const path = require("path");
let app = express();
var cors = require('cors');
const { stringify } = require('querystring');
app.use(cors());
const port = 3000;

// ALLOWING WEB SERVER TO SERVE STATIC  (EG IMGS, JAVASCRIPT)
app.use('/img', express.static('img'));
app.use('/stylesheets', express.static('stylesheets'));
app.use('/scripts', express.static('scripts'));

app.get('/',(req,res)=>{
    console.log('index requested');
    res.sendFile('HomeLandingAbout/homepage.html', { root: __dirname });
})

app.get('/HomeLandingAbout/about.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HomeLandingAbout/about.html', { root: __dirname });
})


// HOMEPAGE
app.get('/HomeLandingAbout/homepage.html',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log('translating')
  // TRANSLATION TESTING
  var translated = ''
  const {Translate} = require('@google-cloud/translate').v2;
  require('dotenv').config();

  const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
  console.log(CREDENTIALS);

  const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

// detectLanguage('Oggi è lunedì')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
        translated = response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

translateText("Hello ~ How can we help you today? ~ EDIT PROFILE ~ Upcoming activities ~ Social+ ~ Connect with fellow domestic helpers ~ POST A THREAD ~ Social+'s Forums allow you to post questions and respond to threads by domestic helpers like you who are facing similar issues as you. Connect with them here. ~ Do an activity with a friend ~ Social+ allows you to participate in activities with other domestic helpers with similar interests as you. Join an activity today and make new friends! ~ FIND ACTIVITY ~ Guides ~ I am lost about how to carry out my responsibilities ~ Find out more about what you need to do as a helper, soft skills and how to navigate Singapore and its places. ~ EXPLORE GUIDES ~ I want to know more about my rights ~ Guides and resources are available to help you cope with what any questions you may have about your rights. ~ LET'S BEGIN ~ I need help assimilating into Singapore ~ Feeling unfamiliar with your new surroundings? Not sure what to do or where to go? Check out our resources for living in Singapore! ~ FIND NOW ~ Wellness ~ Take a breather ~ Feeling anxious or stressed out? Breathing exercises are known to calm people down and make them feel better. Try our breathing exercises today. ~ START BREATHING ~ Words of Wisdom ~ Sometimes, a few golden words of advice would be plenty. Take a look at some of our mental wellness articles for encouragement and advice. ~ BEGIN READING ~ Journal your thoughts ~ Writing down your thoughts and emotions is a good way of understanding yourself better and how you're feeling. Start Journalling to have a peace of mind. ~ LET'S BEGIN ~ Make sure you're physically healthy ~ We get that finding healtcare institution like a clinic or hospital is difficult, and even more so if you don't know where to look. Fret not, we have you covered ~ SEARCH NOW ~ Caregiving ~ Navigating Singapore ~ Know your rights! ~ Mental Health ~ Physical Health ~ Request emergency help ~ ATTENTION ~ Choosing 'Confirm' will send an immediate help alert to the Singapore Police. ~ All information shared with us remains confidential ~ Please do not abuse this function ~ Your name: ~ Your location: ~ Problem description ~ Cancel ~ Confirm"  ,  'id')
     .then((translate) => {
         translated = translate;  
         console.log('index requested');
         res.sendFile('/HomeLandingAbout/homepage.html', { root: __dirname });
         console.log(translated)
         res.set('translation', translated);

     })
     .catch((err) => {
         console.log(err);
     });

    /*
    console.log('index requested');
    res.sendFile('/HomeLandingAbout/homepage.html', { root: __dirname });
    console.log(translated)
    res.set('translation', translated);
    */  
})

//EDIT PROFILLING
app.get('/Registration&Profiling/edit_profiling.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Registration&Profiling/edit_profiling.html', { root: __dirname });
})

//LOGIN REG
app.get('/Registration&Profiling/register.html',(req,res)=>{
  console.log('index requested');

  res.sendFile('/Registration&Profiling/register.html', { root: __dirname });

  
})

//LOGIN
app.get('/Registration&Profiling/login.html',(req,res)=>{
  console.log('index requested');
  var input_email = req.query.email
  var input_password = req.query.password
  console.log(input_email)


  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("domesticaid");
    console.log(dbo);
    const result = dbo.collection("accounts").find({email:input_email}).toArray();
    result.then(data => {
      //global threads = data;
      console.log('hi')
      console.log(data);
      db.close()
      if(data.length != 0){
        console.log('account found');
        user_password = data[0].password
        console.log('verifying password')
        if(input_password == user_password){
          console.log('password correct')
          res.sendFile('/Registration&Profiling/profiling.html', { root: __dirname });
        }else{
          console.log('password incorrect')
          res.sendFile('/Registration&Profiling/login.html', { root: __dirname });
        }

       
      }else{
        console.log('account not found');
        res.sendFile('/Registration&Profiling/login.html', { root: __dirname });
      }

      
    })
    
  })


})

//PROFILE
app.get('/Registration&Profiling/profile.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Registration&Profiling/profile.html', { root: __dirname });
})

//PROFILING
app.get('/Registration&Profiling/profiling.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Registration&Profiling/profiling.html', { root: __dirname });
})

// HEALTH IS WEALTH
app.get('/HealthIsWealth/health_is_wealth.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HealthIsWealth/health_is_wealth.html', { root: __dirname });
})

// MENTAL HEALTH - BREATHING
app.get('/HealthIsWealth/Mental_Health/breathing.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HealthIsWealth//Mental_Health/breathing.html', { root: __dirname });
})

// MENTAL HEALTH - JOURNALLING
// app.get('/HealthIsWealth/Mental_Health/journalling.html',(req,res)=>{
//   console.log('index requested');
//   res.sendFile('/HealthIsWealth//Mental_Health/journalling.html', { root: __dirname });
// })
function getDate() {



  months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April", 
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }

  console.log("test");
  var date = new Date();

  out_date = date.getDate();
  out_month = date.getMonth();
  out_year = date.getFullYear();
  
  extracted_date = `${out_date} ${months[out_month]} ${out_year}`;
  return extracted_date;
}

app.all('/HealthIsWealth/Mental_Health/journalling.html',(req,res)=>{

  MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db('domesticaid');
    const result = dbo.collection('journal').find().toArray();
    id_counter = result.length;
    result.then(data => {
      console.log(data)
      res.sendFile('/HealthIsWealth/Mental_Health/journalling.html', {root: __dirname});
      console.log(JSON.stringify(data));
      db.close();
      res.set('journal', JSON.stringify(data));
    })
  })

  // category
  if(req.query.category){
  var category = req.query.category;
  console.log(category);
  }
  // date
  entry_date = getDate();
  if(req.query.entry){
    var entry = req.query.entry;
    console.log(entry);
  }
  // if there's an entry, do below
  if(entry){
    MongoClient.connect(url, function(err, db) {
      
      if (err) throw err;
      var dbo = db.db("domesticaid");
      console.log('found database');
      var result = dbo.collection("journal").find().toArray();
      // var id_counter = result.length;
      console.log(id_counter);
      // id_counter += 1;
      
      const journals = dbo.collection("journal");
      


      new_journal_entry = { 'category': category, 'date':entry_date, 'entry': entry };
    
      journals.insertOne( new_journal_entry);
      //res.sendFile('/HealthIsWealth/Mental_Health/journalling.html', { root: __dirname });

      
    })
  };

})




// MENTAL HEALTH - LANDING
app.get('/HealthIsWealth/Mental_Health/mental_health_landing.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HealthIsWealth//Mental_Health/mental_health_landing.html', { root: __dirname });
})

// MENTAL HEALTH - GUIDES
app.get('/HealthIsWealth/Mental_Health/mental_guides.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HealthIsWealth//Mental_Health/mental_guides.html', { root: __dirname });
})

// PHYSICAL HEALTH - CATEGORIES
app.get('/HealthIsWealth/Physical_Health/categories.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HealthIsWealth//Physical_Health/categories.html', { root: __dirname });
})

// PHYSICAL HEALTH - PLACES
app.get('/HealthIsWealth/Physical_Health/physical_health_places.html',(req,res)=>{
  console.log('index requested');

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("domesticaid");
    const result = dbo.collection("facilities").find().toArray();
    result.then(data => {
      //global threads = data;
      res.sendFile('/HealthIsWealth/Physical_Health/physical_health_places.html', { root: __dirname });
      console.log(JSON.stringify(data));
      db.close();
      res.set('facilities', JSON.stringify(data) );

    })
    
  });

})

  

// MENTAL HEALTH - PLACES
app.get('/HealthIsWealth/Mental_Health/mental_health_places.html',(req,res)=>{
  console.log('index requested');
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
  
    var dbo = db.db("domesticaid");
    dbo.collection("facilities").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });
  res.sendFile('/HealthIsWealth/Mental_Health/mental_health_places.html', { root: __dirname });
})




// GUIDE LANDING
app.get('/Guides/guides_categories.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Guides/guides_categories.html', { root: __dirname });
})

// GUIDE CARE
app.get('/Guides/guide_care.html',(req,res)=>{
  console.log('index requested');

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("domesticaid");
    const result = dbo.collection("guides2").find().toArray();
    result.then(data => {
      //global threads = data;
      console.log(data);
      db.close()
      res.sendFile('/Guides/guide_care.html', { root: __dirname });
      res.set('guides', JSON.stringify(data) );
      

      
    })
    
  });

})

// GUIDE RIGHTS
app.get('/Guides/guide_rights.html',(req,res)=>{
  console.log('index requested');

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("domesticaid");
    const result = dbo.collection("guides2").find().toArray();
    result.then(data => {
      //global threads = data;
      res.sendFile('/Guides/guide_rights.html', { root: __dirname });
      console.log(JSON.stringify(data));
      res.set('guides', JSON.stringify(data) );
      db.close()
    })
    
  });

})

// GUIDE NAVIGATION
app.get('/Guides/guide_navigation.html',(req,res)=>{
  console.log('index requested');

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("domesticaid");
    const result = dbo.collection("guides2").find().toArray();
    result.then(data => {
      //global threads = data;
      res.sendFile('/Guides/guide_navigation.html', { root: __dirname });
      console.log(JSON.stringify(data));
      res.set('guides', JSON.stringify(data) );
      db.close()
    })
    
  });

})




// SOCIAL+ 
app.get('/Social/social_plus.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('Social/social_plus.html', { root: __dirname });
})

//SOCIAL+ FORUM
app.get('/Social/Forum/forum.html',(req,res)=>{
  console.log('index requested');
  console.log('forum')

  // TRANSLATION TESTING
  const {Translate} = require('@google-cloud/translate').v2;
  require('dotenv').config();

  const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
  console.log(CREDENTIALS);

  const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

// detectLanguage('Oggi è lunedì')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

translateText("Hello ~ How can we help you today? ~ EDIT PROFILE ~ Upcoming activites", 'fil')
     .then((res) => {
         console.log(res);
     })
     .catch((err) => {
         console.log(err);
     });
  
    /**
 * TODO(developer): Uncomment the following line before running the sample.
 */
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("domesticaid");
    const result = dbo.collection("threads").find().toArray();
    result.then(data => {
      //global threads = data;
      res.sendFile('/Social/Forum/forum.html', { root: __dirname });
      res.set('threads', JSON.stringify(data) );
      db.close()

  
    })
    
  });
 
})

//SOCIAL+ ACTIVITIES
app.get('/Social/Activities/activities_landing.html',(req,res)=>{
  console.log('index requested');
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("domesticaid");
    const result = dbo.collection("activities").find().toArray();
    result.then(data => {
      //global threads = data;
      console.log(data);
      res.sendFile('/Social/Activities/activities_landing.html', { root: __dirname });
      res.set('activities', JSON.stringify(data) );
      db.close()
    })
    
  });
})

// SOCIAL+ CREATE ACTIVITIES
app.get('/Social/Activities/activities_create_activity.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Social/Activities/activities_create_activity.html', { root: __dirname });
})



app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});