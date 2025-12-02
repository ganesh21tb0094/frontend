import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017")
college = client["college"]
mystudent = college["student"]
mydata = mystudent["power"]

mydict = {"name": "justin", "address": "cuddalore"}

x = mydata.insert_one(mydict)
