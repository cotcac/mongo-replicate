const mongoose = require('mongoose');
// Connect to mongodb.
mongoose.connect('mongodb://mongo-node1:27017,mongo-node2:27017,mongo-node3:27017/testdb?replicaSet=rs0',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
).then(r=>{
    console.log("connect to mongodb success");
    console.log(r.models);
    
    
}).catch(e=>{
    console.log("Fail to connect to mongodb");
    console.log(e);
})
// Define Model
var PostSchema = new mongoose.Schema({
    title: String
});

var Post = mongoose.model('posts', PostSchema);
module.exports = Post;