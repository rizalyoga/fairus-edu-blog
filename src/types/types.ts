type RoutesType = {
  path: string;
  name: string;
  icon: React.ReactNode;
};

export interface RoutesInterfaces {
  path: string;
  name: string;
  icon: React.ReactNode;
  submenu: RoutesType[];
}

export type QuestionVideoType = {
  second: number;
  point: number;
  question: string;
  choices: string[];
  trueAnswer: string;
};

export interface QuestionVideoInterface {
  path: string;
  videoUrl: string;
  questions: QuestionVideoType[];
}

export interface StudentDataProps {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  id: number;
  date: string;
}

export interface LoginProps {
  username: string;
  password: string;
}

export interface PrestestProps {
  id: number;
  question: string;
  choices: string[];
  answer: string;
  score: number;
}

export interface DataScoreInterface {
  id: number;
  username: string;
  pretest_score: number;
  video_vokal_a_score?: number | string; // Video score for Vowel 'A'
  vokal_a_final_score: number | string;
  video_vokal_i_score?: number | string; // Video score for Vowel 'I'
  vokal_i_final_score?: number | string; // Final score for Vowel 'I'
  video_vokal_u_score?: number | string; // Video score for Vowel 'U'
  vokal_u_final_score?: number | string; // Final score for Vowel 'U'
  video_vokal_e_score?: number | string; // Video score for Vowel 'E'
  vokal_e_final_score?: number | string; // Final score for Vowel 'E'
  video_vokal_o_score?: number | string; // Video score for Vowel 'O'
  vokal_o_final_score?: number | string; // Final score for Vowel 'O'
  video_kon_b_score?: number | string; // Video score for Consonant 'B'
  kon_b_final_score?: number | string; // Final score for Consonant 'B'
  video_kon_c_score?: number | string; // Video score for Consonant 'C'
  kon_c_final_score?: number | string; // Final score for Consonant 'C'
  video_kon_d_score?: number | string; // Video score for Consonant 'D'
  kon_d_final_score?: number | string; // Final score for Consonant 'D'
  video_kon_j_score?: number | string; // Video score for Consonant 'J'
  kon_j_final_score?: number | string; // Final score for Consonant 'J'
  video_kon_k_score?: number | string; // Video score for Consonant 'K'
  kon_k_final_score?: number | string; // Final score for Consonant 'K'
  video_kon_m_score?: number | string; // Video score for Consonant 'M'
  kon_m_final_score?: number | string; // Final score for Consonant 'M'
  video_kon_n_score?: number | string; // Video score for Consonant 'N'
  kon_n_final_score?: number | string; // Final score for Consonant 'N'
  video_kon_p_score?: number | string; // Video score for Consonant 'P'
  kon_p_final_score?: number | string; // Final score for Consonant 'P'
  video_kon_s_score?: number | string; // Video score for Consonant 'S'
  kon_s_final_score?: number | string; // Final score for Consonant 'S'
  video_kon_t_score?: number | string; // Video score for Consonant 'T'
  kon_t_final_score?: number | string; // Final score for Consonant 'T'
  video_kon_ng_score?: number | string; // Video score for Consonant 'NG'
  kon_ng_final_score?: number | string; // Final score for Consonant 'NG'
}
