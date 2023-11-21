export function getPathnamePage(link: string): string {
  // Menghilangkan karakter "/" di awal atau akhir jika ada
  link = link.trim().replace(/^\/+|\/+$/g, "");

  // Membagi link menjadi segmen berdasarkan tanda "/"
  const pathSegments = link.split("/");

  // Mengambil kata terakhir sebelum tanda "/"
  if (pathSegments.length > 0) {
    const pathNamePage = pathSegments[pathSegments.length - 1];
    return pathNamePage.charAt(0).toUpperCase() + pathNamePage.slice(1);
  } else {
    return "";
  }
}
