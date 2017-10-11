var mongoose=require('mongoose');

mongoose.Promise=global.Promise; //in order to tell mongoose that we are using promises
mongoose.connect("mongodb://localhost:27017/TodoApp",{useMongoClient:true});

module.exports={mongoose};
