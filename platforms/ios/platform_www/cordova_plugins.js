cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com-sarriaroman-photoviewer.PhotoViewer",
    "file": "plugins/com-sarriaroman-photoviewer/www/PhotoViewer.js",
    "pluginId": "com-sarriaroman-photoviewer",
    "clobbers": [
      "PhotoViewer"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-keyboard.keyboard",
    "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
    "pluginId": "cordova-plugin-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "mx.ferreyra.callnumber.CallNumber",
    "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
    "pluginId": "mx.ferreyra.callnumber",
    "clobbers": [
      "call"
    ]
  },
  {
    "id": "org.apache.cordova.plugin.cache.Cache",
    "file": "plugins/org.apache.cordova.plugin.cache/www/Cache.js",
    "pluginId": "org.apache.cordova.plugin.cache",
    "clobbers": [
      "cache"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com-sarriaroman-photoviewer": "1.1.18",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-plugin-ionic-keyboard": "2.1.3",
  "cordova-plugin-ionic-webview": "2.2.0",
  "cordova-plugin-keyboard": "1.2.0",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-whitelist": "1.3.3",
  "mx.ferreyra.callnumber": "0.0.2",
  "org.apache.cordova.plugin.cache": "1.0.5"
};
// BOTTOM OF METADATA
});