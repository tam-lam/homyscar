export function isThereEmptyField(obj) {
  for (var o in obj) if (obj[o] === "" || obj[o] === null) return true;
  return false;
}
export const emptyFieldMessage = "All fields cannot be blank!";
