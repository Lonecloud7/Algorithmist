const mongoose = require('mongoose');

const resourcesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Blog', 'PDF', 'Question Paper', 'Course', 'Other'],
    required: true,
    default: 'PDF',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  report_count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('All_Resources', resourcesSchema);
