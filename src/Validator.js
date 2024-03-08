/**
 * 
 * @param {string} text 
 * @returns {string}
 */
export function textLengthValidator(text) {
  if (text.length > 22) {
    return text.substring(0, 22) + "...";
  }

  return text;
}