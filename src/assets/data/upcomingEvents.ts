import { UpcomingEvent } from "../../types/upcomingEvent";

export const upcomingEvents: UpcomingEvent[] = [
  { 
    id: 1,
    title: "Magiczny Sylwester z Festiwalem Hokeja",
    groupTypes:[
      {name: "Grupa A", bottomYear: 2008, topYear: 2011},
      {name: "Grupa B", bottomYear: 2012, topYear: 2013},
      {name: "Grupa C", bottomYear: 2014, topYear: 2017},
    ],
    campOptions: [
      {name: "Dochodzeniowa", price: 2000},
      {name: "Stacjonarna", price: 2390},
      {name: "Stacjonarna z transportem", price: 2590},
    ],
    date: new Date(2023, 11, 31),
  }
]