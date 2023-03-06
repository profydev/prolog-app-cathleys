type ContentMeta = {
  title: string;
  description: string;
  image: string;
};

export type ContentPage<T> = {
  sections: Array<T>;
  meta: ContentMeta;
};
