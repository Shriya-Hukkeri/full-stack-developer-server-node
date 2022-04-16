import mongoose from 'mongoose';
const schema = mongoose.Schema({
	topic: String,
	postedBy: {
		username: String
	},
	handle: String,
	time: String,
	title: String,
	tuit: String,
	attachments: {
		video: String
	},
	logoImage: String,
	avatarImage: String,
	stats: {
		comments: Number,
		retuits: Number,
		likes: Number
	}
}, {collection: 'tuits'});
export default schema;