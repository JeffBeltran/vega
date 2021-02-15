var t=Object.assign;import e from"react";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}var i=function(){function t(){this.listeners=[]}var e=t.prototype;return e.subscribe=function(t){var e=this,n=t||function(){};return this.listeners.push(n),this.onSubscribe(),function(){e.listeners=e.listeners.filter((function(t){return t!==n})),e.onUnsubscribe()}},e.hasListeners=function(){return this.listeners.length>0},e.onSubscribe=function(){},e.onUnsubscribe=function(){},t}();function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var o="undefined"==typeof window;function u(){}function a(t){return"number"==typeof t&&t>=0&&t!==1/0}function c(t,e,n){return"string"==typeof(r=t)||Array.isArray(r)?"function"==typeof e?s({},n,{queryKey:t,queryFn:e}):s({},e,{queryKey:t}):t;var r}function h(t,e){if(t===e)return t;var n=Array.isArray(t)&&Array.isArray(e);if(n||l(t)&&l(e)){for(var r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),s=i.length,o=n?[]:{},u=0,a=0;a<s;a++){var c=n?a:i[a];o[c]=h(t[c],e[c]),o[c]===t[c]&&u++}return r===s&&u===r?t:o}return e}function l(t){if(!f(t))return!1;var e=t.constructor;if(void 0===e)return!0;var n=e.prototype;return!!f(n)&&!!n.hasOwnProperty("isPrototypeOf")}function f(t){return"[object Object]"===Object.prototype.toString.call(t)}function d(t){Promise.resolve().then(t).catch((function(t){return setTimeout((function(){throw t}))}))}var p=new(function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var n=e.prototype;return n.onSubscribe=function(){this.removeEventListener||this.setDefaultEventListener()},n.setEventListener=function(t){var e=this;this.removeEventListener&&this.removeEventListener(),this.removeEventListener=t((function(t){"boolean"==typeof t?e.setFocused(t):e.onFocus()}))},n.setFocused=function(t){this.focused=t,t&&this.onFocus()},n.onFocus=function(){this.listeners.forEach((function(t){t()}))},n.isFocused=function(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)},n.setDefaultEventListener=function(){var t;!o&&(null==(t=window)?void 0:t.addEventListener)&&this.setEventListener((function(t){return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),function(){window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}))},e}(i)),v=new(function(){function t(){this.queue=[],this.transactions=0,this.notifyFn=function(t){t()},this.batchNotifyFn=function(t){t()}}var e=t.prototype;return e.batch=function(t){this.transactions++;var e=t();return this.transactions--,this.transactions||this.flush(),e},e.schedule=function(t){var e=this;this.transactions?this.queue.push(t):d((function(){e.notifyFn(t)}))},e.batchCalls=function(t){var e=this;return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.schedule((function(){t.apply(void 0,r)}))}},e.flush=function(){var t=this,e=this.queue;this.queue=[],e.length&&d((function(){t.batchNotifyFn((function(){e.forEach((function(e){t.notifyFn(e)}))}))}))},e.setNotifyFunction=function(t){this.notifyFn=t},e.setBatchNotifyFunction=function(t){this.batchNotifyFn=t},t}()),y=console||{error:u,warn:u,log:u};var b=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.options=n,r.trackedProps=[],r.bindMethods(),r.setOptions(n),r}r(e,t);var n=e.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),m(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&O(t,e));var t,e},n.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&O(t,e));var t,e},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(t,e){var n=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();var i=this.hasListeners();i&&R(this.currentQuery,r,this.options,n)&&this.executeFetch(),this.updateResult(e),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.staleTime===n.staleTime||this.updateStaleTimeout(),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.refetchInterval===n.refetchInterval||this.updateRefetchInterval()},n.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,e);return this.createResult(n,e)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(t){var e=this,n={};return Object.keys(t).forEach((function(r){Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:function(){var n=r;return e.trackedProps.includes(n)||e.trackedProps.push(n),t[n]}})})),n},n.getNextResult=function(t){var e=this;return new Promise((function(n,r){var i=e.subscribe((function(e){e.isFetching||(i(),e.isError&&(null==t?void 0:t.throwOnError)?r(e.error):n(e))}))}))},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(t){return this.fetch(t)},n.fetchOptimistic=function(t){var e=this,n=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.fetch().then((function(){return e.createResult(r,n)}))},n.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},n.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(u)),e},n.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!o&&!this.currentResult.isStale&&a(this.options.staleTime)){var e,n,r=(e=this.currentResult.dataUpdatedAt,n=this.options.staleTime,Math.max(e+(n||0)-Date.now(),0))+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),r)}},n.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!o&&!1!==this.options.enabled&&a(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||p.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},n.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},n.createResult=function(t,e){var n,r,i=this.currentQuery,s=this.options,o=this.currentResult,u=this.currentResultState,a=this.currentResultOptions,c=t!==i,l=c?t.state:this.currentQueryInitialState,f=c?this.currentResult:this.previousQueryResult,d=t.state,p=d.dataUpdatedAt,v=d.error,b=d.errorUpdatedAt,S=d.isFetching,g=d.status,w=!1,E=!1;if(e.optimisticResults){var C=this.hasListeners(),Q=!C&&m(t,e),F=C&&R(t,i,e,s);(Q||F)&&(S=!0,p||(g="loading"))}if(e.keepPreviousData&&!d.dataUpdateCount&&(null==f?void 0:f.isSuccess)&&"error"!==g)n=f.data,p=f.dataUpdatedAt,g=f.status,w=!0;else if(e.select&&void 0!==d.data)if(o&&d.data===(null==u?void 0:u.data)&&e.select===(null==a?void 0:a.select))n=o.data;else try{n=e.select(d.data),!1!==e.structuralSharing&&(n=h(null==o?void 0:o.data,n))}catch(L){y.error(L),v=L,b=Date.now(),g="error"}else n=d.data;void 0!==e.placeholderData&&void 0===n&&"loading"===g&&(void 0!==(r=(null==o?void 0:o.isPlaceholderData)&&e.placeholderData===(null==a?void 0:a.placeholderData)?o.data:"function"==typeof e.placeholderData?e.placeholderData():e.placeholderData)&&(g="success",n=r,E=!0));return{status:g,isLoading:"loading"===g,isSuccess:"success"===g,isError:"error"===g,isIdle:"idle"===g,data:n,dataUpdatedAt:p,error:v,errorUpdatedAt:b,failureCount:d.fetchFailureCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>l.dataUpdateCount||d.errorUpdateCount>l.errorUpdateCount,isFetching:S,isLoadingError:"error"===g&&0===d.dataUpdatedAt,isPlaceholderData:E,isPreviousData:w,isRefetchError:"error"===g&&0!==d.dataUpdatedAt,isStale:O(t,e),refetch:this.refetch,remove:this.remove}},n.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var n=this.options,r=n.notifyOnChangeProps,i=n.notifyOnChangePropsExclusions;if(!r&&!i)return!0;if("tracked"===r&&!this.trackedProps.length)return!0;var s="tracked"===r?this.trackedProps:r;return Object.keys(t).some((function(n){var r=n,o=t[r]!==e[r],u=null==s?void 0:s.some((function(t){return t===n})),a=null==i?void 0:i.some((function(t){return t===n}));return o&&!a&&(!s||u)}))},n.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!function(t,e){if(t&&!e||e&&!t)return!1;for(var n in t)if(t[n]!==e[n])return!1;return!0}(this.currentResult,e)){var n={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(n.listeners=!0),this.notify(s({},n,t))}},n.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},n.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},n.notify=function(t){var e=this;v.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify(e.currentQuery)}))},e}(i);function m(t,e){return function(t,e){return!(!1===e.enabled||t.state.dataUpdatedAt||"error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&O(t,e))}(t,e)}function R(t,e,n,r){return!1!==n.enabled&&(t!==e||!1===r.enabled)&&O(t,n)}function O(t,e){return t.isStaleByTime(e.staleTime)}var S,g=(S=e.createContext(void 0),"undefined"!=typeof window&&(window.ReactQueryClientContext=S),S);var w=function(){var t,n=e.useContext("undefined"!=typeof window&&null!=(t=window.ReactQueryClientContext)?t:g);if(!n)throw new Error("No QueryClient set, use QueryClientProvider to set one");return n};var E,C=e.createContext((E=!1,{clearReset:function(){E=!1},reset:function(){E=!0},isReset:function(){return E}}));function Q(t,n){var r=e.useRef(!1),i=e.useState(0)[1],s=w(),o=e.useContext(C),u=s.defaultQueryObserverOptions(t);u.optimisticResults=!0,u.onError&&(u.onError=v.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=v.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=v.batchCalls(u.onSettled)),u.suspense&&"number"!=typeof u.staleTime&&(u.staleTime=1e3),(u.suspense||u.useErrorBoundary)&&(o.isReset()||(u.retryOnMount=!1));var a=e.useRef();a.current||(a.current=new n(s,u));var c=a.current.getOptimisticResult(u);if(e.useEffect((function(){r.current=!0,o.clearReset();var t=a.current.subscribe(v.batchCalls((function(){r.current&&i((function(t){return t+1}))})));return a.current.updateResult(),function(){r.current=!1,t()}}),[o]),e.useEffect((function(){a.current.setOptions(u,{listeners:!1})}),[u]),u.suspense&&c.isLoading)throw a.current.fetchOptimistic(u).then((function(t){var e=t.data;null==u.onSuccess||u.onSuccess(e),null==u.onSettled||u.onSettled(e,null)})).catch((function(t){o.clearReset(),null==u.onError||u.onError(t),null==u.onSettled||u.onSettled(void 0,t)}));if((u.suspense||u.useErrorBoundary)&&c.isError)throw c.error;return"tracked"===u.notifyOnChangeProps&&(c=a.current.trackResult(c)),c}var F=function t(e){function n(t,e,r){var i,s={};if(Array.isArray(t))return t.concat(e);for(i in t)s[r?i.toLowerCase():i]=t[i];for(i in e){var o=r?i.toLowerCase():i,u=e[i];s[o]=o in s&&"object"==typeof u?n(s[o],u,"headers"===o):u}return s}function r(t,r,i,s){"string"!=typeof t&&(t=(r=t).url);var o={config:r},u=n(e,r),a={},c=s||u.data;(u.transformRequest||[]).map((function(t){c=t(c,u.headers)||c})),c&&"object"==typeof c&&"function"!=typeof c.append&&(c=JSON.stringify(c),a["content-type"]="application/json");var h="undefined"!=typeof document&&document.cookie.match(RegExp("(^|; )"+u.xsrfCookieName+"=([^;]*)"));if(h&&(a[u.xsrfHeaderName]=h[2]),u.auth&&(a.authorization=u.auth),u.baseURL&&(t=t.replace(/^(?!.*\/\/)\/?(.*)$/,u.baseURL+"/$1")),u.params){var l=~t.indexOf("?")?"&":"?";t+=l+(u.paramsSerializer?u.paramsSerializer(u.params):new URLSearchParams(u.params))}return(u.fetch||fetch)(t,{method:i||u.method,body:c,headers:n(u.headers,a,!0),credentials:u.withCredentials?"include":"same-origin"}).then((function(t){for(var e in t)"function"!=typeof t[e]&&(o[e]=t[e]);var n=u.validateStatus?u.validateStatus(t.status):t.ok;return"stream"==u.responseType?(o.data=t.body,o):t[u.responseType||"text"]().then((function(t){o.data=t,o.data=JSON.parse(t)})).catch(Object).then((function(){return n?o:Promise.reject(o)}))}))}return e=e||{},r.request=r,r.get=function(t,e){return r(t,e,"get")},r.delete=function(t,e){return r(t,e,"delete")},r.head=function(t,e){return r(t,e,"head")},r.options=function(t,e){return r(t,e,"options")},r.post=function(t,e,n){return r(t,n,"post",e)},r.put=function(t,e,n){return r(t,n,"put",e)},r.patch=function(t,e,n){return r(t,n,"patch",e)},r.all=Promise.all.bind(Promise),r.spread=function(t){return function(e){return t.apply(this,e)}},r.CancelToken="function"==typeof AbortController?AbortController:Object,r.defaults=e,r.create=t,r}();const L=e=>{return n="launches-next",r=async()=>{const{data:t}=await F("https://api.spacexdata.com/v4/launches/next");return t},i=t({},e),Q(c(n,r,i),b);var n,r,i};export{L as useNextLaunch};
