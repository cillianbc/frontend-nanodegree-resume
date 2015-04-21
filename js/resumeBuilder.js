var bio = {
  "name": "Cillian",
  "skills": [ "CSS","HTML","SEO" ],
  "role":"Web Developer",
  "bioPic":"images/cillianbc-Logo.png",
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


var education = {
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
  "display": function() {
        for (school in this.schools) {
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
            var formattedSchoolDate = HTMLschoolDates.replace("%data%", this.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);

            var lastEducationEntry = $('.education-entry:last');
            lastEducationEntry.append(formattedSchoolName + formattedSchoolDegree)
                .append(formattedSchoolDate)
                .append(formattedSchoolLocation);

            for (major in this.schools[school].majors) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]);
                lastEducationEntry.append(formattedSchoolMajor);
            }
        }
        $('#education').append(HTMLonlineClasses);
        for (onlineCourse in this.onlineCourses) {
            $('#education').append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].name);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);

            var lastEducationEntry = $('.education-entry:last');
            lastEducationEntry.append(formattedOnlineTitle)
                .append(formattedOnlineDates)
                .append(formattedOnlineURL);
        }
    }

  }


var work = {
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

var projects = {
  "API": [{
    "title":"API App",
    "dates":2015,
    "description":"Page speed Insights API used to grade webpages",
    "images":["images/api-pc.png","images/API_HACk.png"]
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

$("#mapDiv").append(googleMap);
