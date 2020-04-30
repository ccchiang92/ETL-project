#  ETL Coronavirus Project 
Data base ETL project for UC Berkeley Extension Data Analytics Bootcamp
## Sumary
To track the coronavirus cases in Italy, China, South Korea, and the US in the last 3 months, as well as the main stock market index for each nation on a day-by-day basis. With this data we will construct a sql relational database. With a cleaned and structured database, we can observe trends and predict future market behavior. We will also add an additional database which tracks key events during this pandemic, in the form of a timeline, and see their impact on both the market and case counts. Finally, we can compare how different countries responded, and trace the spread of the virus, as well as the change in the market, in each nation, respectively. 
<br/>
<br/>
<br/>
<br/>
Further details check out the report pdf

<br/>
<br/>

## Sources
    * Johns Hopkins CSSE for Covid-19 data, https://github.com/CSSEGISandData/COVID-19
    * Market Index Data from https://www.investing.com/
    * Grab major event timline data from https://www.cnn.com/2020/02/06/health/wuhan-coronavirus-timeline-fast-facts/index.html


<br/>
<br/>

## Visualization 
    check out github pages for some plots, an example use case of this database
    https://ccchiang92.github.io/ETL-project/

<br/>
<br/>

## Auto Updating
    update our whole database and tables with the newest data just by running 2 commands
    1. do a fresh git pull, it will not only pull this repo but also the Johns Hopkins CSSE repo for new raw csv data
    *If cloning use recursive clone
    2. Run python script auto_update.py



## Group Members

Richard Wendel, Chris Chiang, Brian Perry, Akylbek 
