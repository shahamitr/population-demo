var mongoose	= require("mongoose");
var Schema 		= mongoose.Schema;

var userSchema = mongoose.Schema({
	username: String,
	name: {
			first: String,
			last: String
	},
	gender: String,
	dob: Date,
	doj: Date,
  	designation : { type: Schema.Types.ObjectId, ref: 'designation'},
  	detail : { type: Schema.Types.ObjectId, ref: 'userdetail'},
	familydetail: [{ type: Schema.Types.ObjectId, ref: 'userfamilydetail'}],
	address: [{ type: Schema.Types.ObjectId, ref: 'address'}],
}, {collection: "user", versionKey: false, timestamps: true});

//virtual properies
userSchema.virtual('name.full').get(function(){
	return this.name.first + ' ' + this.name.last;
});

var userAddressSchema = mongoose.Schema({
  	add1: String,
	add2: String,
	city: String,
	state: String,
	pincode: Number
}, {collection: "address", versionKey: false, timestamps: true});


var userDetailSchema = mongoose.Schema({
  	userid : { type: Schema.Types.ObjectId, ref: 'user'},
  	hobbies: Array,
  	interest: Array,
  	band: String
}, {collection: "userdetail", versionKey: false, timestamps: true});

var userFamilySchema = mongoose.Schema({
  	userid : { type: Schema.Types.ObjectId, ref: 'user'},
	name: String,
	relation: String,
	age: Number,
	gender: String
}, {collection: "userfamilydetail", versionKey: false, timestamps: true});

var designationSchema = mongoose.Schema({
	title: String
}, {collection: "designation", versionKey: false, timestamps: true});

module.exports.user = mongoose.model("user",userSchema);
module.exports.userDetail = mongoose.model("userdetail",userDetailSchema);
module.exports.userFamily = mongoose.model("userfamilydetail",userFamilySchema);
module.exports.designation = mongoose.model("designation",designationSchema);
module.exports.address = mongoose.model("address",userAddressSchema);