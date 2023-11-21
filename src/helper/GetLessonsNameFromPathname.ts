export const getLessonNamePretest = (pathname: string) => {
  switch (pathname) {
    case "/dashboard/pengenalan-pretest":
      return "pengenalan_pretest";
    case "/dashboard/pengucapan-vokal-pretest":
      return "vokal_pretest";
    case "/dashboard/konsonan-pretest":
      return "konsonan_pretest";
    default:
      return "";
  }
};

export const getLessonNamePostTest = (pathname: string) => {
  switch (pathname) {
    case "/dashboard/pengenalan-postest":
      return "pengenalan_post_test";
    case "/dashboard/pengucapan-vokal-postest":
      return "vokal_post_test";
    case "/dashboard/konsonan-postest":
      return "konsonan_post_test";
    default:
      return "";
  }
};
