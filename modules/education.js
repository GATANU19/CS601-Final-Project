//Function to return education data
export function getEducationData(){
    let output = '<section><header><h3>Education</h3></header><br><table><thead><tr><th>Degree</th>' +
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
    return output;
}