export enum ProgramType {
      Event = "#A40A79",
      Workshop = "#0A92A4",
      eSports = "#0AA419",
      Discussion = "#A4540A",
      Competition = "#0A2CA4",
      Project_expo  = "#A40A79",
      ICT_night ="#98A40A",
}

export interface DataSchedule {
 EventType: string;
 EventName: string;
 EventTimeStart: number;
 EventTimeEnd: number;
 EventImage?: string;
 EventAuthor: string;
 EventRoom: number;
 ProgramType?:ProgramType | string | undefined;
}


