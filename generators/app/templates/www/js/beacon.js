// Hide back button if we referrer is empty.
var hasReferrer = document.referrer && document.referrer != '';
if (!hasReferrer)
{
      $('#id-screen-home-button-back').hide();
}
// Setup button handlers.
evothings.touch.onTap(
  $('#id-screen-home-button-back')[0],
  app.onNavigateBack);
evothings.touch.onTap(
  $('#id-screen-home-button-scan-beacons')[0],
  app.startScanningBeacons);
evothings.touch.onTap(
  $('#id-screen-home-button-range-beacons')[0],
  app.startRangingBeacons);
evothings.touch.onTap(
  $('#id-screen-home-button-monitor-regions')[0],
  app.startMonitoringRegions);
evothings.touch.onTap(
  $('#id-screen-home-button-range-nearables')[0],
  app.startRangingNearables);
evothings.touch.onTap(
  $('#id-screen-home-button-monitor-nearables')[0],
  app.startMonitoringNearables);
evothings.touch.onTap(
  $('#id-screen-home-button-trigger-nearables')[0],
  app.startMonitoringNearableTrigger);
evothings.touch.onTap(
  $('#id-screen-home-button-live-development')[0],
  app.showLiveDevelopmentScreen);
// Back buttons on each screen.
evothings.touch.onTap(
  $('#id-screen-scan-beacons div.style-button-back')[0],
  app.stopScanningBeacons);
evothings.touch.onTap(
  $('#id-screen-range-beacons div.style-button-back')[0],
  app.stopRangingBeacons);
evothings.touch.onTap(
  $('#id-screen-monitor-regions div.style-button-back')[0],
  app.stopMonitoringRegions);
evothings.touch.onTap(
  $('#id-screen-range-nearables div.style-button-back')[0],
  app.stopRangingNearables);
evothings.touch.onTap(
  $('#id-screen-monitor-nearables div.style-button-back')[0],
  app.stopMonitoringNearables);
evothings.touch.onTap(
  $('#id-screen-trigger-nearables div.style-button-back')[0],
  app.stopMonitoringNearableTrigger);
evothings.touch.onTap(
  $('#id-screen-live-development div.style-button-back')[0],
  app.showHomeScreen);

// Connect button on Live Coding screen.
evothings.touch.onTap(
  $('#id-screen-live-development-button-connect')[0],
  app.connectToEvothingsWorkbench);

// Hide buttons on Android.
var isAndroid =
  navigator.userAgent.match(/Android/) ||
  navigator.userAgent.match(/android/);

if (isAndroid) {
      $('#id-screen-home-button-scan-beacons').hide();
      $('#id-screen-home-button-range-nearables').hide();
      $('#id-screen-home-button-monitor-nearables').hide();
      $('#id-screen-home-button-trigger-nearables').hide();
}
