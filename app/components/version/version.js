'use strict';

angular.module('indigoApp.version', [
  'indigoApp.version.interpolate-filter',
  'indigoApp.version.version-directive'
])

.value('version', '0.1');
