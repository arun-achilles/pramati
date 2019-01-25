## CSV Dumping And Loading with Database

###CSV Dumping

-To dump all the records
```
\COPY {table-name} TO '{path to csv}' delimiter ',' CSV
```
-To dump selected records
```
\COPY (SELECT QUERY) TO '{path to csv}' delimiter ',' CSV
``` 

###CSV Loading

-To load all the records
```
\COPY {table-name} FROM '{path to csv}' delimiter ',' CSV
```
-To dump selected records
```
\COPY (SELECT QUERY) FROM '{path to csv}' delimiter ',' CSV
``` 


