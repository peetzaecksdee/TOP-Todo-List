/**
 * 
 * @param {number} id 
 * @param {string} title 
 * @param {Date} date 
 * @param {Date?} dueDate 
 * @param {Array<string>} steps 
 * @param {string?} notes 
 * @param {boolean} starred 
 */

export default function(id=1, title, date, dueDate=null, steps=[], notes="", starred=false) {
  this.id = id;
  this.title = title;
  this.date = date;
  this.dueDate = dueDate;
  this.steps = steps;
  this.notes = notes;
  this.starred = starred;
}