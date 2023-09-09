export interface CampType {
  name: string, dateStart: Date, dateEnd: Date, place: string,
}

export interface CampOption {
  name: string,
  price: number,
}

export interface GroupType {
  name: string,
  bottomYear: number,
  topYear: number,
}


export interface UpcomingEvent {
  id: number,
  title: string,
  groupTypes?: GroupType[],
  campOptions?: CampOption[],
  date: Date,
  price?: number,
  campTypes?: CampType[],
}