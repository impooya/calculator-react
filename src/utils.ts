export function isValidMathEquation(text: string): boolean {
  try {
    // Attempt to evaluate the expression using eval
    eval(text);
    return true;
  } catch (error) {
    // If an error occurs during evaluation, return false
    return false;
  }
}
