const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatusSchema = new Schema({
	create: { type: Boolean, default: false },
	view: { type: Boolean, default: false },
	edit: { type: Boolean, default: false },
});

const ProfileSchema = new Schema({
	profileName: { type: String, required: true },
	status: {
		sendCall: StatusSchema,
		liveCall: StatusSchema,
		product: StatusSchema,
		review: StatusSchema,
		faq: StatusSchema,
		client: StatusSchema,
		user: StatusSchema,
		client:StatusSchema,
		product : StatusSchema,
		sendCalll : StatusSchema,
		liveCalll : StatusSchema,
		user	 : StatusSchema,
		profile : StatusSchema,
		review : StatusSchema,
		faq :StatusSchema,
		complaint : StatusSchema,
		suggestion : StatusSchema,
		complaintTable  : StatusSchema,
		annualComplaintTable  : StatusSchema,
		dashboardComplaintTable : StatusSchema,
		factSheet : StatusSchema,
		notification : StatusSchema,
	}
}, {
	timestamps: true,
});

const ProfileModel = mongoose.model('Profile', ProfileSchema);

module.exports = ProfileModel;
