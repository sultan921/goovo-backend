const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  type: { type: String, required: true }, // Deposit, Withdrawal, Transfer
  amount: { type: Number, required: true },
  method: String,
  status: { type: String, default: 'Pending' },
  date: { type: String, required: true }
});

module.exports = mongoose.model('Record', recordSchema);