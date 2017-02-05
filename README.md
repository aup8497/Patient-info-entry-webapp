# patient-info-entry-webapp
A webapp which takes in Patient information and logs it into the database.A patient directory with local search functionality to search patients based on their attributes.

This webapp has two screens:
Screen 1: A patient entry screen with fields like firstname,lastname,age,dob,gender (dropdown),phone,free text information.
       A submit button validates and puts the information in the mongo database. Validation of fields are done.
Screen 2: A patient directory which shows a list of patients, with local search functionality based on patient name.

Note: To go to second screen just concatenate '/patients' to the url.


## How to use

To start the mongo local database server
```bash
$ mongod
```
To start the webapp
```bash
$ npm bin/www
```

Here are some snapshots of the webapp and the terminal. 
![alt tag](https://github.com/aup8497/patient-info-entry-webapp/blob/master/patient-entry-firstScreen.png)

![alt tag](https://github.com/aup8497/patient-info-entry-webapp/blob/master/patientEntryFirstScreen.png)

![alt tag](https://github.com/aup8497/patient-info-entry-webapp/blob/master/patient-info-secondScreen.png)

##Requirements
  - npm
  - mongoDB

##The MIT LICENSE

>MIT License

>Copyright (c) 2017 Optimus_prime (aup8497)

>Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

>The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
