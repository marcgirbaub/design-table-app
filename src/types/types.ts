export enum Status {
  inProgress = "in-progress",
  finished = "finished",
}

export interface UserStructure {
  id: number;
  name: string;
}

export type UsersStructure = UserStructure[];

export interface DesignStructure {
  courses: number;
  id: number;
  name: string;
  status: Status;
  updated: string;
  user_id_last_update: number;
  wales: number;
}

export type DesignsStructure = DesignStructure[];

export interface SetoutStructure {
  id: number;
  updated: string;
  name: string;
  machine_name: string;
  machine_width: number;
  courses: number;
}

export type SetoutsStructure = SetoutStructure[];

export type ApiResponseStructure =
  | DesignsStructure
  | SetoutsStructure
  | UsersStructure;
