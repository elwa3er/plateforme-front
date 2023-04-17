import {TagCreateDTO, TagResponseDTO} from "./Tag";

export interface ArticleCreateDTO {
  title: string;
  releaseDate: string;
  categoryId: number;
  categoryName: string;
  natureId: number;
  natureName: string;
  version: string;
  status: string;
  description: string;
  language: string;
  filename: string;
}

export interface ArticleUpdateDTO {
  id: number;
  title: string;
  releaseDate: string;
  categoryId: number;
  categoryName: string;
  natureId: number;
  natureName: string;
  version: string;
  status: string;
  description: string;
  language: string;
  filename: string;
  tags: TagCreateDTO[];
}

export interface ArticleResponseDTO {
  id: string;
  title: string;
  releaseDate: string;
  categoryId: number;
  categoryName: string;
  natureId: number;
  natureName: string;
  version: string;
  status: string;
  description: string;
  language: string;
  filename: string;
  fileUrl: string;
  tags: TagResponseDTO[];
}
