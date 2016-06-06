'use strict';

pptscontrolcenter.controller('MapCtrl', ['$scope', "uiGmapGoogleMapApi",
      function ($scope,uiGmapGoogleMapApi) {
        $scope.map = {
          dragZoom: {options: {}},
          center: {
            latitude: 26.153215225012733,
            longitude: -81.80121597097774
          },
          pan: true,
          zoom: 16,
          refresh: false,
          events: {},
          bounds: {}
        };
        uiGmapGoogleMapApi.then(function () {
          $scope.map.dragZoom = {
            options: {
              visualEnabled: true,
              visualPosition: google.maps.ControlPosition.LEFT,
              visualPositionOffset: new google.maps.Size(35, 0),
              visualPositionIndex: null,
              visualSprite: "http://maps.gstatic.com/mapfiles/ftr/controls/dragzoom_btn.png",
              visualSize: new google.maps.Size(20, 20),
              visualTips: {
                off: "Turn on",
                on: "Turn off"
              }
            }
          }
          console.log('Hello rascal');
        });
      }]);


