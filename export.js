// ==UserScript==
// @ShortcutManager
// @name Edit the task
// @namespace ygBaFeHjj9ld
// @key e
// @include https://phab.gotokeep.com/T*
// ==/UserScript==
document.getElementsByClassName('phabricator-action-view-item')[0].click()

// ==UserScript==
// @ShortcutManager
// @name Save the task
// @namespace ygBaFeHjj9ld
// @key s
// @include https://phab.gotokeep.com/maniphest/task/edit/*
// ==/UserScript==
document.getElementsByName('__submit__')[0].click()

// ==UserScript==
// @ShortcutManager
// @name Cancel the edit
// @namespace ygBaFeHjj9ld
// @key c
// @include https://phab.gotokeep.com/maniphest/task/edit/*
// ==/UserScript==
var c = document.getElementsByClassName('button grey')
for(var i = 0;i<c.length;i++){
  if (c[i].innerText === "Cancel") {
    c[i].click()
  }
}
