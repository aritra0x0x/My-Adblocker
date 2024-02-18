const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
    // "*://*.codequotient.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function() { return { cancel: true }},//for call back
    { urls: defaultFilters },//filter
   ["blocking"]
)