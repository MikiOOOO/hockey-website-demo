import { CampType } from "./upcomingEvent";
export type PlayingPosition = 'Competitor' | 'Goalie';


export interface UserData {
  name: string,
  surname: string,
  birthDate: Date,
  pesel: string,
  postalCode: string,
  city: string,
  height: number,
  weight: number,
  sportClub: string,
  position: PlayingPosition,
  group: string,
  option?: string,
  campTypes?: CampType[],
}