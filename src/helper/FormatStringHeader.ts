export function formatString(inputString: string): string {
  // Menghilangkan karakter "-"
  const stringWithoutDash = inputString.replace(/-/g, " ");

  // Memisahkan setiap kata dan membuat huruf pertama menjadi kapital
  const formattedString = stringWithoutDash
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedString;
}
