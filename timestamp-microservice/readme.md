# Timestamp Microservice  
A freeCodeCamp Back-End project

## User stories:
* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).  
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.  

## Accepted formats  
```
Dates:
2015-02-23
23-02-2015
2015 02 23
23 Feb 2015
23 February 2015
Feb 23 2015
Feb 23, 2015
February 23 2015
February 23, 2015

2015-02-23 16:09:11
23-02-2015 16:09:11
2015 02 23 16:09:11
23 Feb 2015 16:09:11
23 February 2015 16:09:11
Feb 23 2015 16:09:11
Feb 23, 2015 16:09:11
February 23 2015 16:09:11
February 23, 2015 16:09:11

Unix timestamp:
1510416220049
```
