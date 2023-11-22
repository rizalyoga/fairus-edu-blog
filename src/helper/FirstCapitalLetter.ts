export function capitalizeFirstLetter(input: string): string {
  // Mengecek apakah input tidak kosong
  if (!input) {
    return input;
  }

  // Mengubah karakter pertama menjadi huruf kapital dan menggabungkan dengan sisa string
  return input.charAt(0).toUpperCase() + input.slice(1);
}
