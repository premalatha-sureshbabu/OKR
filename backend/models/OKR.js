import mongoose from 'mongoose';

const okrSchema = new mongoose.Schema({
  title: String,
  description: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  progress: { type: Number, default: 0 },
  dueDate: Date,
});

const OKR = mongoose.model('OKR', okrSchema);
export default OKR;
