const uri = `mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASSWORD}@clustermyfirstmongodbpr.2cecfoe.mongodb.net/?appName=ClusterMyFirstMongoDbProject`;
const dbname = process.env.MONGODB_NAME;
export const collections = {
  HOTEL: "hoteldata",
  USER: "users",
  ORDER:"orders",
  CONTACT:"contact"
};

const { MongoClient, ServerApiVersion } = require("mongodb");
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = (cname) => {
  return client.db(dbname).collection(cname);
};
