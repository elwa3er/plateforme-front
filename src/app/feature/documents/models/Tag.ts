import {ArticleCreateDTO} from "./Article";

export interface TagCreateDTO {
  libelle: string;
  article: ArticleCreateDTO;
}

export interface TagResponseDTO {
  id_doc: number;
  libelle: string;
}

export interface TagUpdateDTO {
  id_doc: number;
  libelle: string;
}
