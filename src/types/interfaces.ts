import { imagesToShow } from "./types";

export interface postObj {
    id: number;
    src: string;
    title: string;
    alt: string;
    snippet: string;
    article: string;
  }

  export interface formValueI {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
  }
  
  export interface errorObjI {
    firstname?: string;
    lastname?: string;
    email?: string;
    message?: string;
  }
  
  export interface ImagesProp {
    imagesToShow: imagesToShow[]
    toggle: () => void;
    setModalImg: (imgIndex: number) => void;
  
  }
  
  export interface paginationEvent {
    selected: number;
  }