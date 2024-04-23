# OlveraSec-Chrome-Extension
### A Chrome extension to ban +18 content as well as malware webs

OlveraSec is a plugin for Chrome that constantly checks for unwanted url or words in currently opened tabs closing them inmediatly while keeping the search in your browser history.

It is designed to be set up with an organization account (ex: student@myschool.org) in Google Console so all organization members browsing will be controlled and restricted.

To disable it, it's as easy as diseable the checkbox in chrome extensions, that is why I also created a program for Windows that, in case of being executed in background, will detect if the extensions is diseabled and stop the browser from opening.

## SETUP OF THE C++ PROGRAM (if necesary):

- Set the .exe as an application to be opened when starting the computer
- Prevent non-admin users from stoping its execution
- Fill the data.txt information according to this instructions:
  - **isenbld**=*[Write **t** for enabled and **f** for diseabled]*;
  - **extid**=*[Chrome Extension id, visible in chrome://extensions/ when developer mode is enabled]*;
  - **usr**=*[Windows User name where Chrome is installed]*
