/**
 * 
 * @param {number} id 
 * @param {string} title 
 * @param {Date} date 
 * @param {Date} dueDate 
 * @param {Array} steps 
 * @param {string} notes 
 * @param {boolean} starred 
 */

export default function(id, title, date, dueDate, steps, notes, starred) {
  this.id = id;
  this.title = title;
  this.date = date;
  this.dueDate = dueDate;
  this.steps = steps;
  this.notes = notes;
  this.starred = starred;
}