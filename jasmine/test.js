var data;
var citySelector = new CitySelector();
describe("内部城市切换", function() {
	it("定位苏州，首页选择苏州，发现选择苏州", function() {
		localStorage.discover_locationInfo = JSON.stringify({
			countryCode:'cn',
			selectCityName:'苏州',
			selectCityId:'226',
			cityName:'苏州',
			cityId:'226'
		});
		citySelector.reset();
		expect('苏州').toEqual(citySelector.getCurrentSelectCity().selectCityName);
	});
	it("重复选择苏州", function() {
		data = {
			cName: '苏州',
			extend: {
				cId: 226
			}
		};
		expect(null).toEqual(citySelector.executeCityChoose(data));
	});
	it("重复选择定位苏州", function() {
		data = {
			cName: '苏州',
			extend: {
				isLocate:true
			}
		};
		expect(null).toEqual(citySelector.executeCityChoose(data));
	});
	it("选择无锡", function() {
		data = {
			cName: '无锡',
			extend: {
				cId: 224
			}
		};
		citySelector.executeCityChoose(data);
		expect(data.cName).toEqual(citySelector.getCurrentSelectCity().selectCityName);
		expect(data.cName).toEqual(citySelector.getCurrentCityName());
		expect(data.extend.cId).toEqual(+citySelector.getCurrentSelectCity().selectCityId);
		expect('CN').toEqual(citySelector.getCurrentSelectCity().countryCode);
	});
	it("选择澳大利亚", function() {
		data = {
			"cName": "澳大利亚",
			"cPY": "AoDaLiYa",
			"cPYS": "adly",
			"extend": {
				"lat": "-33.8674869",
				"lon": "151.2069902",
				"countryId": "2755",
				"countryCode": "AU"
			}
		}
		citySelector.executeCityChoose(data);
		expect(data.cName).toEqual(citySelector.getCurrentSelectCity().destName);
		expect(data.extend.lat).toEqual(citySelector.getCurrentSelectCity().lat);
		expect(data.extend.lon).toEqual(citySelector.getCurrentSelectCity().lon);
		expect(data.extend.countryId).toEqual(citySelector.getCurrentSelectCity().countryId);
		expect(data.extend.countryCode).toEqual(citySelector.getCurrentSelectCity().countryCode);
	});
	it("选择澳大利亚后又选择澳大利亚", function() {
		data = {
			"cName": "澳大利亚",
			"cPY": "AoDaLiYa",
			"cPYS": "adly",
			"extend": {
				"lat": "-33.8674869",
				"lon": "151.2069902",
				"countryId": "2755",
				"countryCode": "AU"
			}
		}
		citySelector.executeCityChoose(data);
		expect(data.cName).toEqual(citySelector.getCurrentSelectCity().destName);
		expect(data.extend.lat).toEqual(citySelector.getCurrentSelectCity().lat);
		expect(data.extend.lon).toEqual(citySelector.getCurrentSelectCity().lon);
		expect(data.extend.countryId).toEqual(citySelector.getCurrentSelectCity().countryId);
		expect(data.extend.countryCode).toEqual(citySelector.getCurrentSelectCity().countryCode);
		expect(data.cName).toEqual(citySelector.getCurrentCityName());
		expect(null).toEqual(citySelector.executeCityChoose(data));
	});
});
describe("与首页国内相关的切换", function() {
	it("回到首页又回去", function() {
		var orginLocation = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		localStorage.discover_locationInfo = JSON.stringify({
			selectCityName:'苏州',
			selectCityId:'226',
			cityName:'苏州',
			cityId:'226',
			countryCode:'cn'
		})
		var locationInfo = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		var oldSelection = citySelector.getCurrentSelectCity();
		expect(false).toEqual(canRefreshIndex(locationInfo,oldSelection) && !isSameCity(orginLocation,locationInfo));
	});
	it("选择澳大利亚", function() {
		data = {
			"cName": "澳大利亚",
			"cPY": "AoDaLiYa",
			"cPYS": "adly",
			"extend": {
				"lat": "-33.8674869",
				"lon": "151.2069902",
				"countryId": "2755",
				"countryCode": "AU"
			}
		}
		citySelector.executeCityChoose(data);
		expect(data.cName).toEqual(citySelector.getCurrentSelectCity().destName);
		expect(data.extend.lat).toEqual(citySelector.getCurrentSelectCity().lat);
		expect(data.extend.lon).toEqual(citySelector.getCurrentSelectCity().lon);
		expect(data.extend.countryId).toEqual(citySelector.getCurrentSelectCity().countryId);
		expect(data.extend.countryCode).toEqual(citySelector.getCurrentSelectCity().countryCode);
	});
	it("回到首页又回去", function() {
		var orginLocation = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		localStorage.discover_locationInfo = JSON.stringify({
			selectCityName:'苏州',
			selectCityId:'226',
			cityName:'苏州',
			cityId:'226',
			countryCode:'cn'
		})
		var locationInfo = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		var oldSelection = citySelector.getCurrentSelectCity();
		expect(false).toEqual(canRefreshIndex(locationInfo,oldSelection) && !isSameCity(orginLocation,locationInfo));
		expect('澳大利亚').toEqual(citySelector.getCurrentSelectCity().destName);
	});
	it("回到首页，首页切换到无锡", function() {
		var orginLocation = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		localStorage.discover_locationInfo = JSON.stringify({
			selectCityName:'无锡',
			selectCityId:'224',
			cityName:'苏州',
			cityId:'226',
			countryCode:'cn'
		})
		var locationInfo = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		var oldSelection = citySelector.getCurrentSelectCity();
		citySelector.reset()
		expect(true).toEqual(canRefreshIndex(locationInfo,oldSelection) && !isSameCity(orginLocation,locationInfo));
		expect('无锡').toEqual(citySelector.getCurrentSelectCity().selectCityName);
		expect('苏州').toEqual(citySelector.getCurrentSelectCity().cityName);
	});
});
describe("与首页相关的定位", function() {
	it("回到首页，首页定位到无锡，但是选择还在无锡", function() {
		var orginLocation = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		localStorage.discover_locationInfo = JSON.stringify({
			selectCityName:'无锡',
			selectCityId:'224',
			cityName:'无锡',
			cityId:'224',
			countryCode:'cn'
		})
		var locationInfo = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		var oldSelection = citySelector.getCurrentSelectCity();
		expect(false).toEqual(canRefreshIndex(locationInfo,oldSelection) && !isSameCity(orginLocation,locationInfo));
		expect('无锡').toEqual(citySelector.getCurrentSelectCity().selectCityName);
		expect('无锡').toEqual(citySelector.getLocationName());
	});
	it("回到首页，首页定位到苏州，切换选择到苏州", function() {
		var orginLocation = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		localStorage.discover_locationInfo = JSON.stringify({
			selectCityName:'苏州',
			selectCityId:'226',
			cityName:'苏州',
			cityId:'226',
			countryCode:'cn'
		})
		var locationInfo = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		var oldSelection = citySelector.getCurrentSelectCity();
		expect(true).toEqual(canRefreshIndex(locationInfo,oldSelection) && !isSameCity(orginLocation,locationInfo));
		citySelector.reset();
		expect('苏州').toEqual(citySelector.getCurrentSelectCity().selectCityName);
		expect('苏州').toEqual(citySelector.getLocationName());
	});
	it("回到首页，首页定位到无锡，仍然选择到苏州", function() {
		var orginLocation = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		localStorage.discover_locationInfo = JSON.stringify({
			selectCityName:'苏州',
			selectCityId:'226',
			cityName:'无锡',
			cityId:'224',
			countryCode:'cn'
		})
		var locationInfo = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		var oldSelection = citySelector.getCurrentSelectCity();
		expect(false).toEqual(canRefreshIndex(locationInfo,oldSelection) && !isSameCity(orginLocation,locationInfo));
		expect('苏州').toEqual(citySelector.getCurrentSelectCity().selectCityName);
		expect('无锡').toEqual(citySelector.getLocationName());
	});
	it("回到首页，首页定位到美国，仍然选择到苏州", function() {
		var orginLocation = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		localStorage.discover_locationInfo = JSON.stringify({
			selectCityName:'苏州',
			selectCityId:'226',
			destName:'某某地',
			destId:'224',
			countryCode:'us'
		})
		var locationInfo = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		var oldSelection = citySelector.getCurrentSelectCity();
		expect(false).toEqual(canRefreshIndex(locationInfo,oldSelection) && !isSameCity(orginLocation,locationInfo));
		expect('苏州').toEqual(citySelector.getCurrentSelectCity().selectCityName);
		expect('某某地').toEqual(citySelector.getLocationName());
	});
	it("回到首页，首页定位到泰国，选择到甲米", function() {
		var orginLocation = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		localStorage.discover_locationInfo = JSON.stringify({
			destName:'甲米',
			destId:'224',
			countryCode:'th'
		})
		var locationInfo = citySelector.getCityInfo(JSON.parse(localStorage.discover_locationInfo));
		var oldSelection = citySelector.getCurrentSelectCity();
		expect(true).toEqual(canRefreshIndex(locationInfo,oldSelection) && !isSameCity(orginLocation,locationInfo));
		citySelector.reset();
		expect('甲米').toEqual(citySelector.getCurrentCityName());
		expect('甲米').toEqual(citySelector.getLocationName());
	});
});
