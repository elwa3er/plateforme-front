import { Nature, NatureCreateDTO, NatureUpdateDTO } from "./Nature";

export interface Category {
    id: number;
    alfrescoId: string;
    name: string;
    natures: Nature[];
  }
  
  export interface CategoryCreateDTO {
    name: string;
    alfrescoId?: string;
    natures?: NatureCreateDTO[];
  }
  
  export interface CategoryUpdateDTO {
    id: number;
    name: string;
    alfrescoId: string;
    natures: NatureUpdateDTO[];
  }
  