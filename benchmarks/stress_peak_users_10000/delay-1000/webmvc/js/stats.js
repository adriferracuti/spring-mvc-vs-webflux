var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9886",
        "ko": "114"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "1013",
        "ko": "13"
    },
    "maxResponseTime": {
        "total": "34501",
        "ok": "34501",
        "ko": "10012"
    },
    "meanResponseTime": {
        "total": "16711",
        "ok": "16843",
        "ko": "5289"
    },
    "standardDeviation": {
        "total": "10558",
        "ok": "10537",
        "ko": "4219"
    },
    "percentiles1": {
        "total": "16595",
        "ok": "16851",
        "ko": "3036"
    },
    "percentiles2": {
        "total": "26493",
        "ok": "26590",
        "ko": "10007"
    },
    "percentiles3": {
        "total": "32485",
        "ok": "32502",
        "ko": "10010"
    },
    "percentiles4": {
        "total": "33054",
        "ok": "33059",
        "ko": "10012"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 569,
    "percentage": 6
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 9317,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 114,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "175.439",
        "ok": "173.439",
        "ko": "2"
    }
},
contents: {
"req_missing-name-b06d1": {
        type: "REQUEST",
        name: "",
path: "",
pathFormatted: "req_missing-name-b06d1",
stats: {
    "name": "",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9886",
        "ko": "114"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "1013",
        "ko": "13"
    },
    "maxResponseTime": {
        "total": "34501",
        "ok": "34501",
        "ko": "10012"
    },
    "meanResponseTime": {
        "total": "16711",
        "ok": "16843",
        "ko": "5289"
    },
    "standardDeviation": {
        "total": "10558",
        "ok": "10537",
        "ko": "4219"
    },
    "percentiles1": {
        "total": "16575",
        "ok": "16852",
        "ko": "3036"
    },
    "percentiles2": {
        "total": "26496",
        "ok": "26590",
        "ko": "10007"
    },
    "percentiles3": {
        "total": "32485",
        "ok": "32503",
        "ko": "10010"
    },
    "percentiles4": {
        "total": "33054",
        "ok": "33059",
        "ko": "10012"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 569,
    "percentage": 6
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 9317,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 114,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "175.439",
        "ok": "173.439",
        "ko": "2"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
