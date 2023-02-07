export enum EUserRoles {
  ADD_TEAM = 'ADD_TEAM',
  DELETE_TEAM = 'DELETE_TEAM',
}

export const arrayRoles: EUserRoles[] = [
  ...Object.keys(EUserRoles).map((key) => EUserRoles[key]),
];
