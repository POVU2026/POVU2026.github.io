// POINT OF VU — shared settings for the public pages.
// The ticket system itself (sheet, emails) lives in the "POVU Tickets" Apps Script
// project on the POVU Gmail (pointofvusff@gmail.com). If you ever make a NEW
// deployment there, paste its /exec URL below.
window.POVU_API = 'https://script.google.com/macros/s/AKfycbwftm1gwpGQj6BAiszp72wxlDmNWx2M6_MMeK3SpP5f_GCw63mmxi93QDl1_CHbWsND/exec';

window.povuApi = function (params) {
  var u = new URL(window.POVU_API);
  Object.keys(params).forEach(function (k) { u.searchParams.set(k, params[k]); });
  // credentials:'omit' avoids Google's multi-account "unable to open the file" bug
  return fetch(u.toString(), { credentials: 'omit', redirect: 'follow' })
    .then(function (r) { return r.json(); })
    .then(function (j) {
      if (!j.ok) throw new Error(j.error || 'Something went wrong.');
      return j.data;
    });
};
