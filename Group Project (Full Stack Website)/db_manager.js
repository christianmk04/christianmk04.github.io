var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://wad2g9:flannelgang@cluster0.dxjblb1.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("domesticaid");

  //loading thread
  /*
  const thread = {
    id: "2",
    title: "Need advise on remitting money",
    text: "Does anyone have recommendations on reliable and credible service to transfer money back home",
    category:  "Enquiry",
    publish_date: "19/10/2022",
    likes: "2",
    author: "Alethea"
  }
  */

  // loading facility
  
  const facility = {
    id: "4",
    name: "MINISTRY OF HEALTH CHANGI GENERAL HOSPITAL",
    category: "hospitals",
    sub_category: "",
    type: "Government",
    postal: "529889",
    address: "2 Simei Street 3",
    hours: "Opened 24 hours",
    description: "Test description",
    website: "http://www.skh.com.sg/",
    phone: "6930 5000"
  }
  
 
  // loading user
  /*
  const account = {
    id: "1",
    first_name: "Joy",
    last_name: "Noelle",
    birthdate: "06/17/1990", 
    username: "Joynoelle",
    email: "joynoelle@gmail.com",
    postal_code: "540122", 
    phone_number: "82236536",
    telegram_handle: "joynoelle",
    translate_language: "Tagalog"
  }
  */
  

  // loading facility
  /*
  const facility = {
    id: "3",
    name: "SINGHEALTH POLYCLINICS - TAMPINES",
    category: "polyclinics",
    sub_category: "",
    type: "Government",
    postal: "529203",
    address: "1 Tampines Street 41 ",
    hours: "Mon - Fri : 7:30 - 11:00am, 1:30 - 4:00pm",
    description: "Test description",
    website: "http://www.singhealth.com.sg",
    phone: "6643 6969"
  }
  */
  
  // inserting data into collection
  
  dbo.collection('facilities').insertOne(facility, function(err, res){
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
});