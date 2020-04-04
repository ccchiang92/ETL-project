DROP TABLE "Total_table";
-- Total data
CREATE TABLE "Total_table" (
	"Date" DATE, 
	"Country/Region" VARCHAR, 
	"Confirmed cases" DECIMAL, 
	"Deaths" DECIMAL,
	PRIMARY KEY ("Date")
);

Select * From "Total_table"

-- Import from different files and change table name for each country
CREATE TABLE "Korea_data" (
	"Date" DATE, 
	"Country/Region" VARCHAR, 
	"Confirmed cases" DECIMAL, 
	"Deaths" DECIMAL, 
	"Index Price" DECIMAL, 
	"Index Daily % Change" DECIMAL,
	PRIMARY KEY ("Date")
)

CREATE TABLE "Event_Table" (
	"Date" DATE, 
	"Major Event" VARCHAR, 
	PRIMARY KEY ("Date")
)