/**
 * 
 * @param {string} text 
 * @returns {string}
 */
export function textLengthValidator(text) {
  if (text.length > 16) {
    return text.substring(0, 16) + "...";
  }

  return text;
}