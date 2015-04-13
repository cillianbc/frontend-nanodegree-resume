var bio ={
  "name": "Cillian",
  "skills": [ "CSS","HTML","SEO" ],
  "role":"Web Developer",
  "bioPic":"images/cillianbc-Logo.jpg",
  "contacts":{
    "email":"cillianbc@gmail.com",
    "github":"https://github.com/cillianbc",
    "twitter":"@cillianbc",
    "mobile":"1234-5678",
    "location":"Sydney"
  },
  "welcomMessage":"Webby Wonder",
  "display":function(){
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
  var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts["twitter"]);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts["email"]);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts["location"]);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts["mobile"]);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts["github"]);
  var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
  $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcome);
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills){
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
    $("#header").append(formattedSkills);
  }
  }
}


var education ={
  "schools": [{
    "name":"Carlow IT",
    "location":"Carlow",
    "degree":"Business + Programming",
    "majors":["Programming","Business","Economics"],
    "dates":"2003-2005",
    "url":"www.carolowIt.ie"
  }],
  "onlineCourses": [{
    "name":"Front End Web Dev",
    "location":"Thinkful",
    "dates":2015,
    "url":"www.thinkful.com"
  }],
  "display":function(){
  $(".education-entry").append(HTMLschoolStart);
  for (school in education.schools){
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $("#education").append(formattedSchoolName);
    $("#education").append(formattedSchoolDegree);
    $("#education").append(formattedSchoolDates);
    $("#education").append(formattedSchoolLocation);
    for (major in education.schools[school].majors){
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $("#education").append(formattedSchoolMajor);
      }
    }
  for (online in education.onlineCourses){
    $("#education").append(HTMLonlineClasses);
    var formattedOnlineSchoolName = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].name);
    var formattedOnlineSchoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
    var formattedOnlineSchoolURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
    $("#education").append(formattedOnlineSchoolName);
    $("#education").append(formattedOnlineSchoolDates);
    $("#education").append(formattedOnlineSchoolURL);
      }
    }

  }


var work ={
  "jobs": [{
    "employer":"Cillianbc.com",
    "title":"King",
    "description":"Web dev,SEO and Hosting. Specialising in Wordpress site development for small business. PPC campaign advice ",
    "location":"World Wide Baby",
    "dates":"Forever"
  }],
  "display":function(){
  $("#workExperience").append(HTMLworkStart);
  for (jobs in work.jobs){
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
    $(".work-entry").append(formattedEmployer+formattedWorkTitle);
    var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
    $(".work-entry").append(formattedWorkDesc);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
    $(".work-entry").append(formattedWorkLocation);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
    $(".work-entry").append(formattedWorkDates);
    }
  }
}

var projects ={
  "API": [{
    "title":"API App",
    "dates":2015,
    "description":"Page speed Insights API used to grade webpages",
    "images":["images/api-pc.jpg","images/API_HACk.png"]
  }],
  "display":function(){
  $("#projects").append(HTMLprojectStart);
  for (project in projects.API){
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.API[project].title);
    $(".project-entry").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.API[project].dates);
    $(".project-entry").append(formattedProjectDates);
    var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.API[project].description);
    $(".project-entry").append(formattedProjectDesc);
    for (image in projects.API[project].images){
      var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.API[project].images[image]);
      $(".project-entry").append(formattedProjectImage);
        }
      }
  }
}



bio.display();
work.display();
projects.display();
education.display();
