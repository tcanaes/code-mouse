# MAP Creation
<p>Maps should be easily created by anyone.<br> The current pattern is a CSV file, with letters indicating what each columns are.</p>

### Naming Pattern
```
00_000_Title.csv
```
+ <strong>00:</strong> Level dificulty.

+ <strong>000:</strong> Level number.

+ <strong>Title:</strong> Level name.

### Mapping Columns
<p>Letter indicates what's inside each column.</p>

+ <strong>S:</strong> Mouse starting location.<br> Only one <strong>S</strong> should exist in each map.

+ <strong>C:</strong> Cheese locations.<br> Any ammount of cheese could be set.

+ <strong>O?:</strong> Obstacle. 
Any ammount of obstacles could be set. 
Eventualy, mouse will gain abilities to overcome obstacles. Cut wood, break rocks and so on... The level indicates what kind of block it is.
    + <strong>O1:</strong> Wood
    + <strong>O2:</strong> Rock
    + <strong>O3:</strong> Steel
 
+ <strong>T?:</strong> Teleport.
Any ammount of teleporters could be set. And each teleport can and must have 2 portals.

