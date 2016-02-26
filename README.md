**Print Cheque App**

We need an application to print virtual bank cheques. The application takes in the recipient name, a date and a nominal value, and generates a virtual cheque (on screen) with the proper string representation of the value, eg. when 1,303.48 is entered, convert to “One Thousand Three Hundred and Three dollars and Forty-Eight cents”.


**User Stories**

1.1 – Creating a new cheque requires the operator to enter a value, a payment date and a recipient name. Entering valid details will trigger the application to (a) save the cheque generated and (b) display the generated cheque, as per 1.4.

1.2 – List of all cheques saved is available and shows a the date, recipient name and value as well as a link to view.

1.3 – Filtering the list is possible by clicking on a recipient name, which results in showing the list of cheque as 1.2, but for a selected recipient only.

1.4 – Viewing a cheque allows for the operator to view the cheque as saved and generated out the system, including (but not limited to!) the numeric to string representation conversion.


**The technologies Used:**

Web API:

> Ruby 2.2.3
> Rails 4.2.4
> Database PostgreSQL

Client App:

> AngularJS
> CoffeeScript
> Twitter Bootstrap (for styling)

Testing:

> RSpec (for back-end tests)
> Jasmine (for front-end tests)
> Capybara & Selenium (for browser-based acceptance tests)
> Firefox browser. (for Capybara and Selenium to work, as it's required for the browser-based testing to work.)

Package Manager:
> Bower (Installed with npm) (to manage front-end dependencies)

Deployment:
> Heroku (for deployment)

Version Control:
> Git


**Installation:**

> Make sure your postgresql server is running.
> Update the username and password field at app/config/database.yml file
> rake db:create 
> rake db:migrate
> rails s


**Application Structure:**

This application has been developed in two parts. Backend as an API service using rails-api and frontend using AngularJS. Angular assets have been served by rails assets pipeline. PostgreSQL database has been used with rails Active record ORM. In TDD approach, RSpec used for back-end tests, Jasmine for front-end tests, Capybara and Selenium for browser based acceptance test,Bower to manage front end dependencies, Twitter Bootstrap for styling.


**Directory structures for web api:**

app/controllers → Backend Controllers (cheques_controller.rb is out controller)

app/models      → Backend Models (cheque.rb is our model)

app/services     → Backend Services

app/views         → JSON data are returning from the backend web services through json.jbuilder views.

Two services has been created to support single responsibility principle.

    > app/services/date_time_util.rb → For date time manipulation
    > app/services/number_util.rb     → For formatting of numbers
 
 
**Directory structures for frontend client:**

app/assets/javascript is the home of frontend application.

In controllers directory inside app/assets/javascripts there are following 3 controllers to support single responsibility principles:
> ListController
> CreateController
> PrintController

    
Cheque service has been injected as dependency in all of the controllers. Cheque service reside in app.js along with routings.

Templates are provided from templates directory.

> cheque
> directives

Date Picker used as a directive in the create view.


**Tests:**

All tests are in spec directory at root.
> controllers   → Tests for backend controllers
> models            → Tests for backend models 
> javascripts   →  Tests for frontend
> controllers

>> Executing frontend test       rake teaspoon
>> Executing backend test     rspec
