//"named export":
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGIN_USER = 'login_user';

export const EMPLOYEE_UPDATE = 'employee_update';
// just has to be a string that's unique against all the other actions that we have:
//this is just a little marker on the action and the reducer.
//e.g., 'login_user' refers to commencing the login practice. purely semantic.
// the semantics specifically support the "when" over the "what" in engineering the "how":
// [knowing *when* is more important that *what* to the haec:]
// when is something going to get dispatched, vs. what can it do.
// Think Chuang Tzu on the Hao!

// Then again:
//"One thing to note is that we don’t intend Redux to be used for all state. Just whatever seems significant to the app. I would argue inputs and animation state should be handled by React (or another ephemeral state abstraction). Redux works better for things like fetched data and locally modified models."
