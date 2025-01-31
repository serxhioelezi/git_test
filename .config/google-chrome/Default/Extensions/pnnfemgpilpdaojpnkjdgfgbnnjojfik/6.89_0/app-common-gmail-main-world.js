// There's a bug with Chrome where HTMLInputElement.prototype.showPicker() fails to work sometimes
// inside of MV3 content scripts. We work around this by having a world:MAIN script call showPicker()
// on the content script's behalf.
if (!globalThis.__streak_input_showPicker_workaround_installed) {
  globalThis.__streak_input_showPicker_workaround_installed = true;
  document.documentElement.addEventListener('streak-showPicker', e => {
    if (e.target instanceof HTMLInputElement && e.target.showPicker) {
      e.target.showPicker();
      e.stopImmediatePropagation();
    }
  });
}
