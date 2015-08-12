angular.module('infiniteScroll', [])
.directive('infiniteScroll', [ "$window", function ($window) {
    return {
        link:function (scope, element, attrs) {
            var offset = parseInt(attrs.threshold) || 0;
            var e = element[0];
            element.bind('scroll', function () {
                if (scope.$eval(attrs.canLoad) && e.scrollTop + e.offsetHeight >= e.scrollHeight - offset) {
                    scope.$apply(attrs.infiniteScroll);
                }
            });
        }
    };
}])
.directive("loader", function () {
    /**
     * @example
     <loader loading-text="111" loaded-all-text="222" loaderState="state"></loader>
     */
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            loaderState:'=',
            showLoader:'&'
        },
        template: '<div id="loader" ng-hide="state==\'normal\'"><div class="loader {{loaderClass}}"></div><span ng-bind="loaderText"></span></div>',
        link: function ($scope, $elem, $attr,CalController) {
            var loadingText = $attr.loadingText || "正在加载更多数据...";
            var loadedAllText = $attr.loadedAllText || "没有更多数据了";
            $scope.$watch('loaderState',function(state){
                if(state === 'loading'){
                    $scope.loaderText = loadingText;
                    $scope.loaderClass = 'loading';
                }else if(state === 'loading'){
                    $scope.loaderText = loadedAllText;
                    $scope.loaderClass = 'loadedAll';
                }else if(state === 'normal'){
                    $elem.hide();
                }
            });
            $scope.state = 'normal';
        }
    };
});
