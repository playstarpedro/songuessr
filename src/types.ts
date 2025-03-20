export type Artist = {
  id: string;
  name: string;
  images: [
    {
      url: string;
      height: number;
      width: number;
    }
  ]
  genres?: string[];
};
