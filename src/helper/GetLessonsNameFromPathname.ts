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

export const getLessonNameVideoQuiz = (pathname: string) => {
  switch (pathname) {
    case "/dashboard/pernapasan":
      return "video_pernapasan";
    case "/dashboard/pembentuk-suara":
      return "video_pembentuk_suara";
    case "/dashboard/pelemasan-organ-bicara":
      return "video_organ_bicara";
    case "/dashboard/vokal-a":
      return "video_vokal_a_score";
    case "/dashboard/vokal-i":
      return "video_vokal_i_score";
    case "/dashboard/vokal-u":
      return "video_vokal_u_score";
    case "/dashboard/vokal-e":
      return "video_vokal_e_score";
    case "/dashboard/vokal-o":
      return "video_vokal_o_score";
    case "/dashboard/konsonan-b":
      return "video_kon_b_score";
    case "/dashboard/konsonan-c":
      return "video_kon_c_score";
    case "/dashboard/konsonan-d":
      return "video_kon_d_score";
    case "/dashboard/konsonan-j":
      return "video_kon_j_score";
    case "/dashboard/konsonan-k":
      return "video_kon_k_score";
    case "/dashboard/konsonan-m":
      return "video_kon_m_score";
    case "/dashboard/konsonan-n":
      return "video_kon_n_score";
    case "/dashboard/konsonan-p":
      return "video_kon_p_score";
    case "/dashboard/konsonan-s":
      return "video_kon_s_score";
    case "/dashboard/konsonan-t":
      return "video_kon_t_score";
    case "/dashboard/konsonan-ng":
      return "video_kon_ng_score";
    default:
      return "";
  }
};
