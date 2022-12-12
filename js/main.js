// src/main.js
//import App from '../components/App.js';
//const app = new Vue({
//render: h => h(App),

// let picture1 = ("../assets/1.jpg");
// let picture2 = ("../assets/2.jpg");
// let picture3 = ("../assets/3.jpg");
// let picture4 = ("../assets/4.jpg");
// const pictures = [picture1, picture2, picture3, picture4];
// const suiteNames = ["Mark VII - The Avengers",  "Mark XLV - Avengers Age of Ultron", "Mark L - Avengers Infinity War", "Mark LXXXV - Avengers Endgame"];
// let index = 0;
const profileImage = ("../assets/profile.jpeg");

Vue.createApp({
    data() {
        return {
            profileImage,
            helloMsg: 'HELLO, I AM ATANU',
            bioContent: 'Experienced Senior Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Java, J2EE, Spring, Spring Boot, REST, SOAP, Microservices, Kafka, Drools, Hibernate, JSF, HTML5, CSS, Javascript, VueJS, NodeJS, PHP, PL/ SQL, MongoDB, AWS and Informatica. Currently working as Associate Software Engineer at J.P.Morgan & Chase Bank having a total work experience of more than 12 years. My main area of experience is in working as a full stack Java application developer as well as managing my team to ensure delivery of projects on time. I have good analytical skills and problem - solving abilities. I also possess great enthusiasm for learning new things.' 
            // picture1: require("../assets/1.jpg"),
            // picture2: require("../assets/2.jpg"),
            // hover: false
            // message: 'Iron Man Suite Evolution',
            // pictures,
            // suiteName: suiteNames[0],
            // hover: false,
            // index,
        }
},
    methods: {
    pictureProfile() {
        return this.profileImage;
    }
    // pictureHover() {
    //     if (this.hover == true) {
    //         if (index == 3)
    //             index = 0;
    //         else
    //             index++;
    //         this.suiteName = suiteNames[index];
    //     }
    //     //if (this.hover == true)            
    //     return this.pictures[index];
    //     // else
    //     //     return this.pictures[index]
    // }
},   
}).mount('#app');