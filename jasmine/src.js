function CitySelector() {
    var _currentCityName;
    var _showCityListBriParam;
    /*
    * {
    *     countryCode:'CN',//为大写
    *     lon:,//空：undefined
    *     lat:,//空：undefined
    *     selectCityName://有值
    *     selectCityId://国内一定有值，空：undefined
    *     destName://有值,此外,这个值也许不是一个维护的destName，比如说澳大利亚。如果是标准destName，则destId也有值。
    *     countryId://空：undefined
    *     destId://空：undefined
    * }
     */
    var _currentSelectCity;
    //获得bridge请求的参数
    function getListParamWithCityName(cityName) {
        var outCityList = '{"tagList":[{"cityList":[{"cName":"澳大利亚","cPY":"AoDaLiYa","cPYS":"adly","extend":{"lat":"-33.8674869","lon":"151.2069902","countryId":"2755","countryCode":"AU"}},{"cName":"澳门","cPY":"AoMen","cPYS":"am","extend":{"lat":"22.198745","lon":"113.543873","destId":"396","countryId":"1","countryCode":"MO"}}],"title":"A"},{"cityList":[{"cName":"巴厘岛","cPY":"BaLiDao","cPYS":"bld","extend":{"lat":"-8.4095178","lon":"115.188916","destId":"3228","countryId":"2840","countryCode":"ID"}},{"cName":"芭提雅","cPY":"BaTiYa","cPYS":"bty","extend":{"lat":"12.9276082","lon":"100.8770813","destId":"3188","countryId":"2946","countryCode":"TH"}}],"title":"B"},{"cityList":[{"cName":"长滩岛","cPY":"ChangTanDao","cPYS":"ctd","extend":{"lat":"11.9673502","lon":"121.924759","destId":"5687","countryId":"2906","countryCode":"PH"}},{"cName":"冲绳","cPY":"ChongSheng","cPYS":"cs","extend":{"lat":"26.2123124","lon":"127.6791568","countryId":"2847","countryCode":"JP"}}],"title":"C"},{"cityList":[{"cName":"大阪","cPY":"DaBan","cPYS":"db","extend":{"lat":"34.6937378","lon":"135.5021651","destId":"3160","countryId":"2847","countryCode":"JP"}},{"cName":"东京","cPY":"DongJing","cPYS":"dj","extend":{"lat":"35.6894875","lon":"139.6917064","destId":"3172","countryId":"2847","countryCode":"JP"}},{"cName":"迪拜","cPY":"DiBai","cPYS":"db","extend":{"lat":"25.2048493","lon":"55.2707828","destId":"3257","countryId":"2958","countryCode":"AE"}}],"title":"D"},{"cityList":[{"cName":"关岛","cPY":"GuanDao","cPYS":"gd","extend":{"lat":"13.4453052","lon":"144.7867717","countryCode":"GU"}}],"title":"G"},{"cityList":[{"cName":"吉隆坡","cPY":"JiLongPo","cPYS":"jlp","extend":{"lat":"3.139003","lon":"101.686855","destId":"3202","countryId":"2866","countryCode":"MY"}},{"cName":"济州岛","cPY":"JiZhouDao","cPYS":"jzd","extend":{"lat":"33.4996213","lon":"126.5311884","destId":"5702","countryId":"2932","countryCode":"KR"}}],"title":"J"},{"cityList":[{"cName":"曼谷","cPY":"ManGu","cPYS":"mg","extend":{"lat":"13.7563309","lon":"100.5017651","destId":"3187","countryId":"2946","countryCode":"TH"}}],"title":"M"},{"cityList":[{"cName":"普吉岛","cPY":"PuJiDao","cPYS":"pj","extend":{"lat":"7.9519331","lon":"98.3380883999999","destId":"3144","countryId":"2946","countryCode":"TH"}}],"title":"P"},{"cityList":[{"cName":"清迈","cPY":"QingMai","cPYS":"qm","extend":{"lat":"18.7060641","lon":"98.9817163","destId":"3191","countryId":"2946","countryCode":"TH"}}],"title":"Q"},{"cityList":[{"cName":"塞班岛","cPY":"SaiBan","cPYS":"sb","extend":{"lat":"15.177801","lon":"145.750967","destId":"4250","countryId":"2960","countryCode":"MP"}},{"cName":"沙巴","cPY":"ShaBa","cPYS":"sb","extend":{"lat":"5.9825946","lon":"116.0749757","countryId":"2866","countryCode":"MY"}},{"cName":"首尔","cPY":"ShouEr","cPYS":"se","extend":{"lat":"37.566535","lon":"126.9779692","destId":"3195","countryId":"2932","countryCode":"KR"}}],"title":"S"},{"cityList":[{"cName":"暹粒","cPY":"XianLi","cPYS":"xl","extend":{"lat":"13.3670968","lon":"103.8448134","destId":"3270","countryId":"2778","countryCode":"KH"}},{"cName":"新加坡","cPY":"XinJiaPo","cPYS":"xjp","extend":{"lat":"1.2494041","lon":"103.8303209","countryId":"2926","countryCode":"SG"}},{"cName":"香港","cPY":"XiangGang","cPYS":"xg","extend":{"lat":"22.396428","lon":"114.109497","destId":"395","countryId":"1","countryCode":"HK"}},{"cName":"新西兰","cPY":"XinXiLan","cPYS":"xxl","extend":{"lat":"-36.8484597","lon":"174.7633315","countryId":"2890","countryCode":"NZ"}}],"title":"X"}]}';
        var jsonObj = {
            "param": {
                "tagname": "show_location",
                "title": "选择目的城市",
                "sName": cityName,
                "cityConfig": [
                {
                    "headerCitys":'{"tagList":[{"title":"定位","cityList":[{"extend":{"isLocate":true},"cName":"定位城市"}]}]}',
                    "subTitle": "境内城市",
                    "tips": "请输入城市名(如北京、bj、Beijing)",
                    "cityH5File": "file",
                },
                {
                    "subTitle": "境外城市",
                    "tips": "请输入城市名(如曼谷、mg、ManGu)",
                    "allCitys": outCityList
                }]
            },
            "CBPluginName": "discover_cb",
            "CBTagName": "selectCity"
        };
        var path = location.href || location;
        if (path.match("file:") != null) {
            var dir = path.split("main.html")[0].substring(0, path.lastIndexOf('/'));
            jsonObj.param.cityConfig[0].cityH5File = dir + "chinacity.txt";
        }else{
            jsonObj.param.cityConfig[0].allCitys = '{"tagList":[{"cityList":[{"cName":"北京","cPY":"Beijing","cPYS":"BJ","extend":{"cId":"53"}},{"cName":"香港","cPY":"xianggang","cPYS":"xg","extend":{"cId":"395"}},{"cName":"台北","cPY":"Taipei","cPYS":"taipei","extend":{"cId":"401"}},{"cName":"杭州","cPY":"Hangzhou","cPYS":"hz","extend":{"cId":"383"}},{"cName":"苏州","cPY":"SuZhou","cPYS":"sz","extend":{"cId":"226"}},{"cName":"上海","cPY":"Shanghai","cPYS":"SH","extend":{"cId":"321"}},{"cName":"重庆","cPY":"chongqing","cPYS":"cq","extend":{"cId":"394"}},{"cName":"广州","cPY":"Guangzhou","cPYS":"gz","extend":{"cId":"80"}},{"cName":"宁波","cPY":"ningbo","cPYS":"nb","extend":{"cId":"388"}},{"cName":"成都","cPY":"Chengdu","cPYS":"cd","extend":{"cId":"324"}},{"cName":"桂林","cPY":"Guilin","cPYS":"gl","extend":{"cId":"102"}},{"cName":"厦门","cPY":"Xiamen","cPYS":"xm","extend":{"cId":"61"}},{"cName":"南京","cPY":"nanjing","cPYS":"nj","extend":{"cId":"224"}},{"cName":"三亚","cPY":"sanya","cPYS":"sy","extend":{"cId":"133"}},{"cName":"黄山","cPY":"huangshan","cPYS":"hs","extend":{"cId":"45"}},{"cName":"高雄","cPY":"Kaohsiung","cPYS":"gx","extend":{"cId":"397"}},{"cName":"西安","cPY":"Xian","cPYS":"xa","extend":{"cId":"317"}},{"cName":"金华","cPY":"jinhua","cPYS":"jh","extend":{"cId":"386"}},{"cName":"青岛","cPY":"Qingdao","cPYS":"QD","extend":{"cId":"292"}},{"cName":"无锡","cPY":"Wuxi","cPYS":"wx","extend":{"cId":"229"}},{"cName":"大连","cPY":"Dalian","cPYS":"DL ","extend":{"cId":"248"}}],"title":"热门"},{"cityList":[{"cName":"安庆","cPY":"anqing","cPYS":"aq","extend":{"cId":"36"}},{"cName":"安阳","cPY":"anyang","cPYS":"ay","extend":{"cId":"150"}},{"cName":"阿坝州","cPY":"aba","cPYS":"ab","extend":{"cId":"322"}},{"cName":"安康","cPY":"ankang","cPYS":"ak","extend":{"cId":"311"}},{"cName":"安顺","cPY":"anshun","cPYS":"as","extend":{"cId":"112"}},{"cName":"鞍山","cPY":"anshan","cPYS":"as","extend":{"cId":"245"}},{"cName":"阿拉善盟","cPY":"alashan","cPYS":"alsm","extend":{"cId":"259"}},{"cName":"阿勒泰","cPY":"aletai","cPYS":"alt","extend":{"cId":"3114"}},{"cName":"阿克苏地区","cPY":"akesu","cPYS":"aks","extend":{"cId":"351"}},{"cName":"阿拉尔","cPY":"alaer","cPYS":"alr","extend":{"cId":"352"}}],"title":"A"}]}'
            jsonObj.param.cityConfig[0].cityH5File = '';
        }
        _showCityListBriParam = jsonObj;

        //初始化函数
        getListParamWithCityName = function(cityName){
            var locateCity = {"tagList":[{"title":"定位","cityList":[{"extend":{"isLocate":true},"cName":"定位城市"}]}]};
            //此处需要拿取最新的定位数据，如果沿用之前的定位数据，可能中间定位发生了变化。
            var locationInfo = getCityInfo(JSON.parse(localStorage.discover_locationInfo));
            locateCity.tagList[0].cityList[0].cName = getLocationName();
            if(locationInfo.countryCode === 'CN'){
                _showCityListBriParam.param.cityConfig[0].headerCitys = JSON.stringify(locateCity);//插入境内城市
                delete _showCityListBriParam.param.cityConfig[1].headerCitys;//去除境外的定位城市，防止默认跳境外
            }else{
                _showCityListBriParam.param.cityConfig[1].headerCitys = JSON.stringify(locateCity);//插入境内城市
                delete _showCityListBriParam.param.cityConfig[0].headerCitys;//去除境外的定位城市，防止默认跳境外
            }
            //设置当前选择的城市，如果当前没有选择过城市，则选择定位城市
            _showCityListBriParam.param.sName = cityName || locateCity.tagList[0].cityList[0].cName;
            return _showCityListBriParam;
        };
        return getListParamWithCityName(cityName)
    }
    function getLocationName(){
        var locationInfo = getCityInfo(JSON.parse(localStorage.discover_locationInfo));
        if(locationInfo.countryCode === 'CN'){
            //无定位状态显示境内
            return  locationInfo.cityName || '境内';
        }else{
            //理论上不能显示境外
            return  locationInfo.destName || '境外';
        }
    }
    //获得当前选择的城市的名称
    function getCurrentCityName() {
        //如果没有当前选择的城市，则使用定位的数据
        if(!_currentCityName){
            var locationInfo = getCurrentSelectCity();
            if(locationInfo.countryCode == 'CN'){
                _currentCityName = locationInfo.selectCityName || locationInfo.cityName || '境内';
            }else{
                _currentCityName = locationInfo.destName || '境外';
            }
        }
        return _currentCityName;
    }
    //获得当前选择的城市的数据
    function getCurrentSelectCity() {
        //如果没有当前选择的城市，则使用定位的数据
        if(!_currentSelectCity){
            var locationInfo = getCityInfo(JSON.parse(localStorage.discover_locationInfo));
            _currentSelectCity = locationInfo;
        }
        return _currentSelectCity;
    }
    //设置当前的选择城市的城市名。城市名用于展示在标题上
    function setCurrentCityName(newName) {
        _currentCityName = newName;
        return newName;
    }
    //设置当前选择的城市
    function setCurrentSelectCity(cityInfo) {
        _currentSelectCity = cityInfo;
    }
    //判断是否选择的城市和当前城市相同
    function isCurrentCity(newName) {
        return newName === getCurrentCityName();
    }
    //获得一个城市类型，参数可以是城市切换回调参数，或者是一个locationInfo参数。
    function getCityInfo(data){
        //选择的城市 数据类型
        if(data.cName){
            data.extend = data.extend || {};
            data.extend.countryCode = data.extend.countryCode || "CN";
            return {
                selectCityName:data.cName,
                selectCityId:data.extend.cId,
                countryCode:data.extend.countryCode.toUpperCase(),
                destName:data.cName,
                destId:data.extend.destId,
                countryId:data.extend.countryId,
                lon:data.extend.lon,
                lat:data.extend.lat,
            }
        }else{
            //locationInfo 数据类型
            data.countryCode = data.countryCode && data.countryCode.toUpperCase() || 'CN';
            return data;
        }
    }
    //获得城市列表的参数
    function getCityListParam() {
        return getListParamWithCityName(getCurrentCityName());
    }
    //判断选择的城市是否是定位城市
    function isLocateCity(data){
        return data.extend.isLocate == true || data.cName == getLocationName();
    }
    return {
        getCurrentCityName: getCurrentCityName,
        getCurrentSelectCity:getCurrentSelectCity,
        getCityInfo:getCityInfo,
        getLocationName:getLocationName,
        reset:function(){
            var locationInfo = JSON.parse(localStorage.discover_locationInfo);
            if(locationInfo.selectCityName){
                //则国内
                locationInfo.countryCode = "CN";
            }
            setCurrentSelectCity(locationInfo);
            setCurrentCityName();
            getCurrentCityName();
        },
        showCityListWithLocateName: function() {
            window._tc_bridge_map.select_city(getCityListParam());
        },
        executeCityChoose: function(data) {
            //先确认选择的城市是否是当前城市
            if(!isCurrentCity(data.cName)){
                    var cityInfo;
                    if(isLocateCity(data)){
                        var locationInfo = JSON.parse(localStorage.discover_locationInfo);
                        locationInfo.selectCityName = locationInfo.cityName;
                        locationInfo.selectCityId = locationInfo.cityId;
                        cityInfo = getCityInfo(locationInfo);
                    }else{
                        cityInfo = getCityInfo(data);
                    }
                    setCurrentSelectCity(cityInfo);
                    setCurrentCityName(data.cName);
                    return data;
            }
            return null;
        },
        isLocateCity:isLocateCity
    }
}
function canRefreshIndex(newLoc,oldLoc){
    //大首页切换了城市的选择，且选择的城市不是发现目前选择的城市
    if(newLoc.countryCode!=='CN'){
        //在国外，选择了国内的城市
        if(newLoc.selectCityName){
            if(oldLoc.countryCode!=='CN'){
                //目前发现在国外，切
                return true;
            }else{
                //目前发现在国内，则匹配是否是相同的城市来选择切或不切
                return newLoc.selectCityName!==oldLoc.selectCityName;
            }
        }else{
            //在国外，刚刚定位到新的维护的城市,大首页还没有选择过城市
            if(oldLoc.countryCode!=='CN'){
                //目前发现在国外，判断是否在同一城市来选择切不切
                return newLoc.destName!==oldLoc.destName;
            }else{
                //目前发现在国内，切
                return true;
            }
        }
    }else{
        if(newLoc.selectCityName){
            //在国内，选择了国内的城市
            if(oldLoc.countryCode!=='CN'){
                //目前发现在国外，切
                return true;
            }else{
                //目前发现在国内，则匹配是否是相同的城市来选择切或不切
                return newLoc.selectCityName!==oldLoc.selectCityName;
            }
        }else{
            //在国内，没有选择的城市，1.可能是没有定位，2.可能是刚刚从国外切过来
            return false;
        }
    }
}
function isSameCity(one,two){
    if(one.selectCityName === two.selectCityName && !one.selectCityName){
        return one.destName === two.destName;
    }else{
        return one.selectCityName === two.selectCityName;
    }
}
function locateChange(one,two){
    if(one.countryCode!==two.countryCode){
        return true;
    }else{
        if(one.countryCode == 'CN'){
            return one.cityName !== two.cityName;
        }else{
            return one.destName !== two.destName;
        }
    }
}