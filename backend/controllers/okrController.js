import OKR from '../models/OKR.js';

export const getOKRs = async (req, res) => {
  const okrs = await OKR.find({ owner: req.user._id });
  res.json(okrs);
};

export const createOKR = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const okr = new OKR({ title, description, dueDate, owner: req.user._id });
  await okr.save();
  res.status(201).json(okr);
};

export const updateOKR = async (req, res) => {
  const okr = await OKR.findById(req.params.id);
  if (!okr) return res.status(404).json({ message: 'OKR not found' });

  if (okr.owner.toString() !== req.user._id.toString()) return res.status(401).json({ message: 'Not authorized' });

  okr.title = req.body.title || okr.title;
  okr.description = req.body.description || okr.description;
  okr.progress = req.body.progress !== undefined ? req.body.progress : okr.progress;
  okr.dueDate = req.body.dueDate || okr.dueDate;

  const updated = await okr.save();
  res.json(updated);
};

export const deleteOKR = async (req, res) => {
  const okr = await OKR.findById(req.params.id);
  if (!okr) return res.status(404).json({ message: 'OKR not found' });

  await okr.remove();
  res.json({ message: 'OKR removed' });
};
