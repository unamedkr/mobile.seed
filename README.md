Mobile Web Seed Project
==============================

An Mobile web seed project

  - grunt-angular-phonegap
  - bootstrap & font-awesome
  - html5 compatibility libraries
  - ui-router
  - angular-touch
  - ngCordova
  - phonegap base project


## Getting started

0. 관련 Library 설치 

        npm install -g phonegap cordova generator-angular

1. Clone this project

        git clone https://github.com/unamedkr/mobile.seed.git && cd mobile.seed/ 

2. Install npm modules

        npm install

3. Install bower dependencies

        bower install

4. Add a mobile platform

        cordova platform add android

4. Build the project

        grunt phonegap:build

5. Start an emulator

        grunt phonegap:emulate

6. Run on Device 

        cordova run android


## References

- grunt-angular-phonegap : https://github.com/dsimard/grunt-angular-phonegap
- ngCordova : http://ngcordova.com/docs/
- Mobile Angular UI : http://mobileangularui.com/