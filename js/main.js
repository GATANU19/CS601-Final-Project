import { getExperienceData } from "../modules/experience.js";
import { getEducationData } from "../modules/education.js";
import { getGalleryData } from "../modules/gallery.js";
import { getContactData } from "../modules/contact.js";
import { getAboutData } from "../modules/about.js";
const profileImage = ("../assets/profile.jpeg");

Vue.createApp({
    data() {
        return {
            profileImage,
            helloMsg: 'HELLO, I AM ATANU',
            selectedPage: 'home',
            bioContent: 'Experienced Senior Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Java, J2EE, SpringBoot, REST, SOAP, Microservices, Kafka, Drools, Hibernate, JSF, HTML5, CSS, Javascript, VueJS, NodeJS, PHP, PL/ SQL, MongoDB, AWS, Terraform and Informatica. Currently working as Associate Software Engineer at J.P.Morgan & Chase Bank having a total work experience of more than 12 years. My main area of experience is in working as a full stack Java application developer as well as managing my team to ensure delivery of projects on time. I have good analytical skills and problem - solving abilities. I also possess great enthusiasm for learning new things.'


        }
    },
    computed: {
        output() {
            if (this.selectedPage == "home") {
                return getExperienceData();
            }
            if (this.selectedPage == "education") {
                return getEducationData();
            }
            if (this.selectedPage == "gallery") {
                return getGalleryData();
            }
            if (this.selectedPage == "contact") {
                return getContactData();
            }
            if (this.selectedPage == "about") {
                return getAboutData();
            }

        }
    },
    methods: {
        pictureProfile() {
            return this.profileImage;
        },
        activeHome() {
            if (this.selectedPage == "home") {
                return 'active'
            }
            else {
                return '';
            }
        },
        activeEdu() {
            if (this.selectedPage == "education") {
                return 'active'
            }
            else {
                return '';
            }
        },
        activeGallery() {
            if (this.selectedPage == "gallery") {
                return 'active'
            }
            else {
                return '';
            }
        },
        activeContact() {
            if (this.selectedPage == "contact") {
                return 'active'
            }
            else {
                return '';
            }
        },
        activeAbout() {
            if (this.selectedPage == "about") {
                return 'active'
            }
            else {
                return '';
            }
        },
    },
}).mount('#app');