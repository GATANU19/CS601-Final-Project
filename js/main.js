//import certsHTML from '@/certifications.html';
const profileImage = ("../assets/profile.jpeg");
//import certsHTML from './certifications.html';

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
                return  '<section><header><h3>Experience Summary</h3></header><ul><li>' +
                        '<p>Have worked on all stages of the software life cycle i.e., Requirements Analysis, Design,' +
                        ' Development, Maintenance and Testing in both Waterfall and Agile Development Methodology.</p>' +
                        '</li><li><p>Expertise in Web Designing (HTML5, Javascript, NodeJS, PHP), Web Services (SOAP, REST) and' +
                        ' Programming languages including Java/J2EE (Spring, Spring Boot, Hibernate, JAVA 8), Swagger, Microservices,' +
                        ' Apache Kafka, MQ, PL/SQL, Unix shell scripting.</p>' +
                        '</li><li><p>Designed and developed MongoDB (NoSQL) based external RESTful API for exposing the existing' +
                        ' functionality of a SAAS platform and also built UI for it using HTML5 and Javascript in an Agile work' +
                        ' environment.</p></li><li><p>Created Spring Boot - REST based JSON services, used swagger to define contract and used REST' +
                        ' Template for making a client call to JAX-RS web services.</p>' +
                        '</li><li><p>Have written unit and integration tests to test all the desired functionality with JUnit (TDD)' +
                        ' Testing, BDD and Mockito.</p></li><li>' +
                        '<p>Have worked with various distributed version control tools such as git, bitbucket, subversion;' +
                        ' automation server such as Jenkins, Jules; build tool such as Maven, CI-CD pipeline using' +
                        ' Concourse, XL Release; logging and debugging using Slf4 and Log4j. Provisioned infrastructure in AWS using' +
                        ' Terraform.</p></li><li><p>Have built and integrated to API management platforms using WSO2, Apigee.</p>' +
                        '</li><li><p>Designed and developed microservices using SAGA and CQRS patterns and deployed to private and' +
                        ' public cloud infrastructure using Docker and Kubernetes. Managed product development/implementation using' +
                        ' Kubernetes, Rancher and AWS cloud infrastructure (EC2, ECS, EKS, MSK, S3, RDS, Lambda).</p>' +
                        '</li><li><p>Exposure to various aspects of relational database technology like IBM DB2, Oracle, mySQL, SQL' +
                        ' Server and non-relational database such as MongoDB.</p></li><li>' +
                        '<p>Worked on various Web and Application Server including Apache Tomcat, Pivotal, WildFly,' +
                        'IBM Websphere.</p></li><li><p>Experience with Use-Case design, Class and Sequence diagrams using UML.</p>' +
                        '</li></ul><section><br><header><h3>Companies Worked At</h3></header>' +
                        '<div class="flex-container-companies">' +
                        '<div class="grow"><img src="assets/jpmc.png" alt="Logo of JPMorgan Chase & Co" width="299" height="56">' +
                        '</div><div class="grow"><img src="assets/pub.png" alt="Logo of Peoples United Bank" width="299" height="56">' +
                        '</div><div class="grow"><img src="assets/fidelity.png" alt="Logo of Fidelity" width="299" height="56"></div>' +
                        '<div class="grow"><img src="assets/pnc.png" alt="Logo of PNC Bank" width="299" height="56"></div>' +
                        '<div class="grow"><img src="assets/bofa.png" alt="Logo of Bank of America Bank" width="299" height="56">' +
                        '</div></div></section>';
            }            
            if (this.selectedPage == "education") {
                return '<section><header><h3>Education</h3></header><br><table><thead><tr><th>Degree</th>' +
                '<th>University</th><th>Year of Passing</th></tr></thead><tbody><tr><td>' +
                '<p>Master of Science,<br>Computer Information Systems<br>(Specialization in Web<br>Application Development)</p>' +
                '</td><td><p>Boston University, USA</p>' +
                '<div class="grow"><img src="assets/bu.png" alt="Logo of Boston University"></div><br><br>' +
                '</td><td><p>Currently Pursuing<br>(Expected Completion<br>on 2023)</p>' +
                '</td></tr><tr><td><p>Bachelor of Technology in<br>Computer Science<br>and Engineering</p>' +
                '</td><td><p>West Bengal University of Technology, INDIA</p><div class="grow"><img src="assets/WBUT.png"' +
                ' alt="Logo of West Bengal University of Technology, INDIA"></div></td><td>' +
                '<p>2010</p></td></tr></tbody></table></section><br>' +
                '<section> '+
                '<header>' +
                    '<h3>Recent Certifications Achieved</h3>' +
                '</header>' +
                '<div class="flex-container-certs">' +
                    '<div class="grow">' +
                        '<h4>Oracle Certified Professional,<br>Java SE6 Programmer</h4><img src="assets/java.png"' +
                            ' alt="Logo of Oracle Certified Professional, Java SE6 Programmer">' +
                    '</div>' +
                    '<div class="grow">' +
                        '<h4>MCTS - SQL Server,<br>Implementation and Maintenance</h4><img src="assets/mcts.png"' +
                            ' alt="Logo of MCTS - SQL Server, Implementation and Maintenance">' +
                    '</div>' +
                    '<div class="grow">' +
                        '<h4>AWS Certified Cloud<br>Practitioner</h4><img src="assets/AWSC2P.png"' +
                            ' alt="Logo of AWS Certified Cloud Practitioner">' +
                    '</div>'+
                    '<div class="grow">' +
                        '<h4>ITIL Foundation Certificate,<br>IT Service Management</h4><img src="assets/ITIL.png"' +
                            ' alt="ITIL Foundation Certificate, IT Service Management">' + 
                    '</div>' +
                    '<div class="grow">' +
                        '<h4>IBM Certified SOA<br>Solution Designer</h4><img src="assets/SOA.png"' +
                            ' alt="IBM Certified SOA Solution Designer">' +
                    '</div>' +
                    '<div class="grow">' +
                        '<h4>Distributed Data Patterns @microservices.io</h4><img src="assets/microservice.png"' +
                            ' alt="Logo of Distributed Data Patterns for Microservices Certifications">' +
                    '</div>' +
                    '<div class="grow">' +
                        '<h4>MapR HDE 100,<br>Hadoop Essentials</h4><br><img src="assets/hadoop.png"' +
                            ' alt="MapR HDE 100 – Hadoop Essentials">' +
                    '</div>' +
                    '<div class="grow">' +
                        '<h4>Agile @PNC Bank Certified</h4><img src="assets/agile.png" alt="Logo of Agile @PNC Bank Certified">' +
                    '</div>' +
                    '<div class="grow">' +
                        '<h4>IBM DB2 9.7 DBA for<br>Linux, UNIX and Windows</h4><img src="assets/db2.png"' +
                            ' alt="IBM DB2 9.7 DBA for Linux, UNIX and Windows">' +
                    '</div>' +
                    '<div class="grow">' +
                        '<h4>IBM Certified Database Associate, DB2 9</h4><img src="assets/db2.png"' +
                            ' alt="IBM Certified Database Associate, DB2 9 Database & Application">' +
                    '</div>' +
                '</div>' +
            '</section>';
            }
            if (this.selectedPage == "about") {
                return '<section>' + 
                '<header>' +
                    '<h3>About Me</h3>' +
                '</header>' +
                '<p>I live in Clinton, New Jersey with my wife and my teddy bear Samba whose video is below. I love' +
                    ' hiking, photography, kayaking and long road trips.</p><br>' +    
                '<video width="180" height="320" controls>' +
                    '<source src="../assets/Samba.MP4" type="video/mp4">' +
                    'Your browser does not support the video tag.' + 
                '</video><br><br>' +    
                '<h3>Connect with me at</h3>' +
                '<div class="flex-container-social">' +
                    '<div class="grow"><a href="https://www.linkedin.com/in/atanughorai88/" target="_blank"><img' +
                                ' src="assets/linkedin.png" alt="Link to Atanu Ghorai LinkedIn Profile" width="50"' +
                                ' height="50"></a></div>' +
                    '<div class="grow"><a href="https://twitter.com/Atanu_evil" target="_blank"><img src="assets/twitter.png"' +
                                ' alt="Link to Atanu Ghorai Twitter Profile" width="50" height="50"></a></div>' +
                    '<div class="grow"><a href="https://www.facebook.com/atanu.ghorai" target="_blank"><img' +
                                ' src="assets/facebook.png" alt="Link to Atanu Ghorai Facebook Profile" width="50"' + 
                                ' height="50"></a></div>' +
                    '<div class="grow"><a href="https://www.instagram.com/atanu_g/" target="_blank"><img' +
                                ' src="assets/instagram.png" alt="Link to Atanu Ghorai Instagram Profile" width="50"' +
                                ' height="50"></a></div>' +
                '</div></section>';
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