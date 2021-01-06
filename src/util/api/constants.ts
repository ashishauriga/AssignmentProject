// __ Home

export const HOME_PAGE_URL = 'home-new/';
export const BOOK_PAGE_URL = 'list-schedules/?format=json&';
export const FAVOURITE_SESSION = 'favourite-session/';
export const SENDFEEDBACK_URL = 'customer-feedback/?format=json';
export const MARKFAVORITE_URL = 'home/?customer_id=1999';
export const TOOGLE_FAVORITE_URL = 'user_fav/';
export const SAVE_RATING_URL = 'user_rating/';
export const MARK_REMINDER_URL = 'inapp-reminders/';
export const CHANGE_EMAIL_URL = 'customer/change-email/';
export const USER_STATE_URL = 'userstate/';
export const RESEND_VERIFICATION_URL = 'customer/resend_verify_email/';
export const LOGIN_URL = 'customer/log-in/';
export const CUSTOMER_OTP_URL = 'customer/OTP/';
export const SIGNUP_URL = 'customer/sign-up/';
export const GET_PRODUCT_SKU = 'packages/?format=json';
export const CUSTOMER_PROFILE = 'customer-profile/?format=json';
export const UPDATE_PROFILE = 'customer-profile-picture//?format=json';
export const ACTIVITY_PROFILER = 'activity_profiler/progress/';
export const GET_DONOW = 'do_now/';

export const DISABLE_PACK_POPUP = (slug: string) => {
  return `pack/${slug}/disable_target_popup/`;
};

export const UNSUBSCRIBE_PACK = (slug: string) => {
  return `pack/${slug}/unsubscribe/`;
};

export const RESET_PACK = (slug: string) => {
  return `pack/${slug}/reset/`;
};

export const ACTIVATE_PACK = (slug: string) => {
  return `pack/${slug}/subscribe/`;
};

export const COMPLETE_PACK = (slug: string) => {
  return `pack/${slug}/mark_complete/`;
};

export const CONTINUE_PACK = (slug: string) => {
  return `pack/${slug}/continue/`;
};

export const GET_COMPETE_CLASS = (session_schedule_slug: string) => {
  return `session-completed/${session_schedule_slug}/`;
};

export const GET_DONOW_ALBUM = (slug: string) => {
  return `do_now/album/${slug}/`;
};

export const GET_POPULAR_TRACK = (slug: string, filter?: string) => {
  if (filter) return `do_now/album/${slug}/filter/${filter}/`;
  return `do_now/album/${slug}/`;
};

export const GET_TRACK_DETAIL = (slug: string) => {
  return `do_now/track/${slug}/`;
};

export const GET_GOAL_DETAILS = (slug: string) => {
  return `do_now/goal/${slug}/`;
};

export const GET_REFERAL_LINK = (
  referral_type: string,
  session_schedule_slug: string,
) => {
  let url = 'customer-referral/?';
  if (referral_type) url = `${url}&referral_type=${referral_type}`;
  if (session_schedule_slug)
    url = `${url}&session_schedule_slug=${session_schedule_slug}`;
  return url;
};
export const GET_LIVE_VIDEO_TRACK = (session_slug: string) => {
  return `session_live_meta/${session_slug}/`;
};
export const PROFIILE_HISTORY = (page: number) => {
  return `activity_profiler/history/${page}/`;
};
