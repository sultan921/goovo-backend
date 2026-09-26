const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'Open' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);