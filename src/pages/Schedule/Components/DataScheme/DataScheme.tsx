


export enum ProgramType {
      Event = "Event",
      Workshop = "Workshop",
      eSports = "eSports",
      Panel_Discussion = "Panel_Discussion",
      Competition = "Competition",
      Project_expo  = "Project_expo",
      ICT_night ="ICT_night",
}

export interface DataSchedule {
 EventType: string;
 EventName: string;
 EventTimeStart: number;
 EventTimeEnd: number;
 EventImage?: string;
 EventAuthor: string;
 EventRoom: number;
 ProgramType?: ProgramType;
}


