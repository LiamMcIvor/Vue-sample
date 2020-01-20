# Vehicle Maintenance application

In fulfilment of the solo project assignment due Monday week 7 at QA consulting.

## Index
[Mandate](#mandate)
   * [Solution](#solution)
   
[Architecture](#architecture)
   * [Entity Relationship Diagrams](#erd)
   * [Multi Tier Architechture Diagram](#mla)
	
[Testing](#testing)
   * [Report](#report)

     
[Deployment](#depl)
   * [Technologies Used](#tech)
     
[Front End Design](#FE)

[Improvements for the Future](#improve)

[Authors](#auth)

[Acknowledgements](#ack)

<a name="mandate"></a>
## The Mandate

To create an OOP-based application with utilisation of supporting tools, methodologies and technologies that encapsulate all core modules covered during training.
* Use of a project tracking tool such as Trello
* A relational database used to persist data for the project. 
* A functional backend application created in an OOP language, following best practices and design principles.
* An API that exposes your backend application via REST
* A front-end that integrates with your RESTful API
* A fully designed test suites with a minimum of 80%-unit test coverage.
* A simple CI/CD solution that deploys your application into a non-local environment
* All code controlled and documented via source control

<a name="solution"></a>
### Solution

The solution that I chose was to create a vehical management application that would allow the user to add vehicles and add their corresponding issues that need to be addressed on a routine basis.

<a name="architecture"></a>
## Architecture
<a name="erd"></a>
### Entity Relationship Diagrams


#### Solution
![ERD](/Documentation/ERD_Final.jpg)

The ERD that I had chosen was three tables, one for the users, the vehicles and the issues. The relationship is one-to-many for users to vehicles and one-to-many for vehicles to issues.

<a name="mla"></a>
### Multi Tier Architecture Diagram
Please click on the diagram for a high resolution version:
![MTA](/Documentation/MTA.jpg)

This is a very high-level architecture diagram to demonstrate the architecture of the application. It does not include getters and setters, test classes, or constants classes. 


<a name="testing"></a>
## Testing

JUnit and Mockito have been used for automated testing and onarQube for static reporting. I plan on doing Selenium tests for the front end.

<a name="report"></a>
### Report

[Link to Final Surefire Report](/Documentation/Surefire_Report.pdf)

Test coverage for the backend is at 84%, there are as of yet no working Selenium tests but hope to get these running soon.
The SonarQube static report shows 9 code smells remaining, 0 bugs, 0 duplications and 0 vulnerabilities.

<a name="depl"></a>
## Deployment

The build, test and deployment process was automated using Jenkins, with a webhook to GitHub which was triggered with every push event

This application can be deployed both locally and externally through a virtual machine. The constants.js file has commented out options to switch from an external to local IP address.

![Deployment Pipeline](/Documentation/CI_pipeline.jpg)
<a name="tech"></a>
### Technologies Used

* H2 Database Engine - Database
* Java - Back-end
* Tomcat - Deployment
* Jenkins - CI Server
* Maven - Dependency Management
* Surefire - Test Reporting
* SonarQube - Static Testing
* [Git](https://github.com/ayshamarty/SoloProject.git) - VCS
* [Trello](https://trello.com/b/HkmOBJuD/vmms) - Project Tracking
* AWS - Deployment

<a name="FE"></a>
## Front End Design
### Wireframes
Poses
![Poses Wireframe](/Documentation/Poses_Wireframe.png)
Routines
![Routines Wireframe](/Documentation/Routines_Wireframe.png)
### Final Appearance

<a name="improve"></a>
## Improvements for the Future

Currently, IDs are required to update poses and routines, and to add or remove poses from routines. In my next sprint, I would like to create buttons in the front end which allow this functionality without the need for IDs, which would allow the object IDs to be hidden from the user.

In later sprints, I would also like create a health-benefit entity which would have a many to many relationship with poses, so that users can create routines based on their focus for their practice. After this, I would add the capability to create different user accounts. At this point, I would remove the functionality for the user to add and remove poses themselves in the front end. These would instead be hard coded into the database, which the user could manipulate only for adding and removing them from their own routines.

<a name="auth"></a>
## Authors

Liam McIvor

<a name="ack"></a>
## Acknowledgements

* QA consulting 
    * John
    * Jordan
    * Nick
    * Tadas
* Everyone in cohort 10, the stars


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
