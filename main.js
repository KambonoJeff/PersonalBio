function onload(event){
    console.log(event.currentTarget.navigator.geolocation.protoType);
}
function validate(){
    console.log("Validate Summoned")
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phonenumber").value;
    let message = document.getElementById("message").value;
    let formTitle = document.getElementById("form")
    const validName = /^[a-zA-Z ]{2,30}$/.test(name);
    const validEmail = /\S+@\S+\.\S+/.test(email);
    const validPhoneNum = /^[0-9]{10}$/.test(phoneNumber);
    if(!validName){
        formTitle.innerHTML ='<h2>Please Enter A valid Name!!</h2>' ;
        return;
    }
    if(!validEmail){
        formTitle.innerHTML ='<h2>Please Enter A valid Email!!</h2>' ;
        return;
    }
    if(!validPhoneNum){
        formTitle.innerHTML = '<h2>Please Enter A valid Phone Number!!</h2>';
        return;
    }
    formTitle.innerHTML =`Welcome ${ name }, Your Message has been successfully sent`;  
}
function findLocation(){
    console.log("Al find you");
    let location = navigator.geolocation();
    if (location){
        location.getCurrentPosition(showPosition(position));
    }
    else{
        console.log("geolocation not enabled");
    }
    function showPosition(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log(lat);
        console.log(long);
    }
    //navigation
}
function doThis(event){
    event.preventDefault();
    validate();
    findLocation();
  
}

const education = document.getElementById("Education").addEventListener('click',()=>{
    const educationContent = document.getElementById("educationContent");
    if(educationContent.style.display==="none"){
        educationContent.style.display="block";
    }
    else{
        educationContent.style.display="none";
    }

});
const Skills = document.getElementById("Skills").addEventListener('click',()=>{
    const SkillsContent = document.getElementById("SkillsContent");
    console.log(SkillsContent);
    if(SkillsContent.style.display==="none"){
        SkillsContent.style.display="block";
    }
    else{
        SkillsContent.style.display="none";
    }
});
const Projects = document.getElementById("Projects").addEventListener('click',()=>{
    const ProjectsContent = document.getElementById("ProjectsContent");
    console.log(ProjectsContent);
    if(ProjectsContent.style.display==="none"){
        ProjectsContent.style.display="flex";
    }
    else{
        ProjectsContent.style.display="none";
    }
});
const Leadership = document.getElementById("Leadership").addEventListener('click',()=>{
    const LeadershipContent = document.getElementById("LeadershipContent");
    console.log(LeadershipContent);
    if(LeadershipContent.style.display==="none"){
        LeadershipContent.style.display="flex";
    }
    else{
        LeadershipContent.style.display="none";
    }
});
const Referees = document.getElementById("Referees").addEventListener('click',()=>{
    const RefereesContent = document.getElementById("RefereesContent");
    console.log(RefereesContent);
    if(RefereesContent.style.display==="none"){
        RefereesContent.style.display="block";
    }
    else{
        RefereesContent.style.display="none";
    }
});
