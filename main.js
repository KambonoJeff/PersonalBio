require('dotenv').config()
const nodemailer = require('nodemailer');

const email_ = process.env.EMAIL
const pass_ = process.env.PASS
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phoneNumber = document.getElementById("phonenumber").value;
const message = document.getElementById("message").value;
function sendEmail(){
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email_,
            pass: pass_
        }
    });
    let mailOptions = {
        from: email, 
        to: email_, 
        subject:`Commment from ${name}`, 
        text: message, 
        html: '<b>Hello world?</b>'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.err(error);
        } else {
            console.log('Message sent: %s', info.messageId);
        }
    });
    

}

function validate(){
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
function doThis(event){
    event.preventDefault();
    function validate();
    function sendEmail();
  
}
const education = document.getElementById("Education").addEventListener('click',()=>{
    const educationContent = document.getElementById("educationContent");
    console.log(educationContent);
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
