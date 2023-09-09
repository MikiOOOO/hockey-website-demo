export interface Event {
  id: number,
  title: string,
  previewDescription: string,
  fullDescription: string,
};

export interface CampStructure extends Event {
  previewImageUrl: string,
  imageUrls: string[] | null,
  decorationImageUrl: string,
};

export interface TournamentStructure extends Event {
  imageUrls: string[] | null,
}

export interface ExchangeStructure extends Omit<CampStructure, 'decorationImageUrl'> {}