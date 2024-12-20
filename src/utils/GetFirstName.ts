/**
 * Extracts and returns the first name from a full name.
 * @param fullName - The full name as a string.
 * @returns The first name, or an empty string if the input is invalid.
 */
export function getFirstName(fullName: string): string {
  if (!fullName || typeof fullName !== 'string') {
    return '';
  }

  const nameParts = fullName.trim().split(' ');
  return nameParts[0] || '';
}

// Example usage:
const fullName = "Andrew Johnstons";
const firstName = getFirstName(fullName);
console.log(firstName); // Output: "Andrew"
