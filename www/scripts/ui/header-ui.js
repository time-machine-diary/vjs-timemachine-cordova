class HeaderUI{constructor(){this.header=document.getElementById("header"),this.headerLeft=document.getElementById("header-left"),this.headerCenter=document.getElementById("header-center"),this.headerRight=document.getElementById("header-right"),this.hiddenDatepicker=document.getElementById("hidden-datepicker"),this.hiddenDatepicker.addEventListener("change",e=>{let t=e.currentTarget.value;if(!t){const e=new Date,s=e.getFullYear(),h=e.getMonth()<=9?`0${e.getMonth()+1}`:e.getMonth()+1;t=`${s}-${h}`,setTimeout(()=>{this.hiddenDatepicker.value=t,this.hiddenDatepicker.blur()},100)}const s=t.split("-"),h=parseInt(s[0]),n=parseInt(s[1]);h===parseInt(window.stdDateUtil.getYearStr())&&n===parseInt(window.stdDateUtil.getMonthStr())||(window.stdDateUtil.setYearMonth(h,n),document.dispatchEvent(new CustomEvent("date-picked")))})}appendContent(e){const t=e.left,s=e.center,h=e.right;t?this.appendLeftElement(t):this.clearLeftElement(),s?this.appendCenterElement(s):this.clearCenterElement(),h?this.appendRightElement(h):this.clearRightElement()}clearLeftElement(){for(;this.headerLeft.children.length;)this.headerLeft.removeChild(this.headerLeft.firstChild)}clearCenterElement(){for(;this.headerCenter.children.length;)this.headerCenter.removeChild(this.headerCenter.firstChild)}clearRightElement(){for(;this.headerRight.children.length;)this.headerRight.removeChild(this.headerRight.firstChild)}appendLeftElement(e){this.clearLeftElement(),this.headerLeft.appendChild(e)}appendCenterElement(e){this.clearCenterElement(),this.headerCenter.appendChild(e)}appendRightElement(e){this.clearRightElement(),this.headerRight.appendChild(e)}showCommonHeader(){this.showSearchBtn(),this.showMonthDisplay(),this.showMenuBtn()}showEditorHeader(){this.showRouteBackBtn(),this.showCenterFullDate(),this.clearRightElement()}showSearchHeader(){this.showSearchBtn(),this.showSearchCloseBtn(),this.showSearchInput()}showSearchBtn(){this.appendLeftElement(this.getSearchBtn())}showMonthDisplay(){this.appendCenterElement(this.getMonthDisplay())}showMenuBtn(){this.appendRightElement(this.getMenuBtn())}showSearchInput(){this.appendCenterElement(this.getSearchInput()),this.searchInput.focus()}showSearchCloseBtn(){this.appendRightElement(this.getSearchCloseBtn())}showRouteBackBtn(){this.appendLeftElement(this.getRouteBackBtn())}showCenterFullDate(){this.appendCenterElement(this.getFullDateDisplay())}showWeatherIcon(){this.appendRightElement(this.getWeatherIcon())}getSearchBtn(){return this.searchBtn||(this.searchBtn=document.createElement("img"),this.searchBtn.setAttribute("id","search-btn"),this.searchBtn.setAttribute("src","./assets/images/search.svg"),this.searchBtn.addEventListener("click",()=>{this.showSearchHeader()})),this.searchBtn}getMonthDisplay(){return this.monthDisplay||(this.monthDisplay=document.createElement("span"),this.monthDisplay.setAttribute("id","month-display"),this.monthDisplay.addEventListener("touchstart",()=>{this.monthDisplay.tapCount=this.monthDisplay.tapCount?this.monthDisplay.tapCount+1:1,setTimeout(()=>{if(2===this.monthDisplay.tapCount){const e=new Date,t=e.getFullYear(),s=e.getMonth()<=9?`0${e.getMonth()+1}`:e.getMonth()+1;this.hiddenDatepicker.value=`${t}-${s}`,this.hiddenDatepicker.dispatchEvent(new InputEvent("change"))}else 1===this.monthDisplay.tapCount&&this.hiddenDatepicker.focus();this.monthDisplay.tapCount=0},200)})),this.monthDisplay.innerText=window.stdDateUtil.getYearMonthStr(),this.monthDisplay}getMenuBtn(){return this.menuBtn||(this.menuBtn=document.createElement("img"),this.menuBtn.setAttribute("id","menu-btn"),this.menuBtn.setAttribute("src","./assets/images/menu.svg"),this.menuBtn.addEventListener("click",()=>{location.hash="setting"})),this.menuBtn}getSearchInput(){return this.searchInput||(this.searchInput=document.createElement("input"),this.searchInput.setAttribute("id","search-input"),this.searchInput.setAttribute("type","search"),this.searchInput.addEventListener("input",()=>{document.dispatchEvent(new CustomEvent("search-keyword-changed"))})),this.searchInput}getSearchCloseBtn(){return this.searchCloseBtn||(this.searchCloseBtn=document.createElement("img"),this.searchCloseBtn.setAttribute("id","search-close-btn"),this.searchCloseBtn.setAttribute("src","./assets/images/white-x.svg"),this.searchCloseBtn.addEventListener("click",()=>{this.showCommonHeader(),this.searchInput.value="",location.hash.indexOf("search")>=0&&history.back()})),this.searchCloseBtn}getRouteBackBtn(){return this.routeBackBtn||(this.routeBackBtn=document.createElement("img"),this.routeBackBtn.setAttribute("id","route-back-btn"),this.routeBackBtn.setAttribute("src","./assets/images/back-icon.svg"),this.routeBackBtn.addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("route-back"))})),this.routeBackBtn}getFullDateDisplay(){return this.fullDateDisplay||(this.fullDateDisplay=document.createElement("span"),this.fullDateDisplay.setAttribute("id","full-date-display")),this.fullDateDisplay.innerText=window.currentDateUtil.getFullDateStr(),this.fullDateDisplay}getWeatherIcon(){return this.weatherIcon||(this.weatherIcon=document.createElement("img"),this.weatherIcon.setAttribute("id","weather-icon"),this.weatherIcon.setAttribute("type",CONST.WEATHER.TYPES[0]),this.weatherIcon.setAttribute("src","./assets/images/w-sunny.svg"),this.weatherIcon.addEventListener("click",()=>{this.hiddenWeatherCombo||(this.hiddenWeatherCombo=document.querySelector("#hidden-weather-combo"),this.hiddenWeatherCombo.addEventListener("change",e=>{switch(this.weatherIcon.setAttribute("type",CONST.WEATHER.TYPES[0]),e.currentTarget.value){case CONST.WEATHER.TYPES[0]:this.weatherIcon.setAttribute("src","./assets/images/w-sunny.svg");break;case CONST.WEATHER.TYPES[1]:this.weatherIcon.setAttribute("src","./assets/images/w-cloudy.svg");break;case CONST.WEATHER.TYPES[2]:this.weatherIcon.setAttribute("src","./assets/images/w-rainy.svg");break;case CONST.WEATHER.TYPES[3]:this.weatherIcon.setAttribute("src","./assets/images/w-snowy.svg")}})),this.hiddenWeatherCombo.click()})),this.weatherIcon}showHeader(){this.header.style.display="grid"}hideHeader(){this.header.style.display="none"}}