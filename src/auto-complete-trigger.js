'use strict';

/**
 * @ngdoc directive
 * @name autoCompleteTrigger
 * @module ngTagsInput
 *
 * @description
 * Provides an autocomplete trigger button.
 */
tagsInput.directive('autoCompleteTrigger', function() {
    return {
        restrict: 'E',
        require: '^tagsInput',
        templateUrl: 'ngTagsInput/auto-complete-trigger.html',
        scope: { data: '=' },
        link: function(scope, element, attrs, tagsInputCtrl) {
            var tagsInput = tagsInputCtrl.registerAutocompleteTrigger();
            scope.triggerIcon = 'autocomplete-trigger-icon ';
            if (attrs && attrs.iconClass){
                scope.triggerIcon = scope.triggerIcon + attrs.iconClass;
            }
            scope.triggerAutocomplete = function() {
                tagsInput.loadSuggestions();
            };
        }
    };
});
