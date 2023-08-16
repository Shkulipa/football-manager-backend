/** operationIds */
export enum OperationIds {
  HEALTH_CHECK = 'get-health',
  APP_DOC = 'app-doc',

  SIGNUP = 'signup',
  LOGIN = 'login',
  AUTH_CONFIRM_EMAIL = 'auth-confirm-email',
  UPDATE_CONFIRM_EMAIL = 'update_confirm_email',
  RESEND_EMAIL = 'resend-email',
  SEND_RESTORE_PASS = 'send-restore-pass',
  UPDATE_RESTORED_PASS = 'update_restored_pass',

  COUNTRY_GET_MANY = 'country-get-many',
  COUNTRY_GET_BY_ID = 'country-get-by-id',
  COUNTRY_CREATE = 'country-create',
  COUNTRY_UPDATE = 'country-update',
  COUNTRY_DELETE = 'country-delete',

  LEAGUE_GET_MANY = 'league-get-many',
  LEAGUE_GET_BY_ID = 'league-get-by-id',
  LEAGUE_CREATE = 'league-create',
  LEAGUE_UPDATE = 'league-update',
  LEAGUE_DELETE = 'league-delete',

  REAL_TEAM_GET_MANY = 'real-team-get-many',
  REAL_TEAM_GET_BY_ID = 'real-team-get-by-id',
  REAL_TEAM_CREATE = 'real-team-create',
  REAL_TEAM_UPDATE = 'real-team-update',
  REAL_TEAM_DELETE = 'real-team-delete',

  REAL_PLAYER_GET_MANY = 'real-player-get-many',
  REAL_PLAYER_GET_BY_ID = 'real-player-get-by-id',
  REAL_PLAYER_CREATE = 'real-player-create',
  REAL_PLAYER_UPDATE = 'real-player-update',
  REAL_PLAYER_DELETE = 'real-player-delete',

  USER_UPDATE_PASSWORD = 'user-update-password',
  USER_UPDATE_USERNAME = 'user-update-username',
  USER_UPDATE_EMAIL = 'user-update-email',
}