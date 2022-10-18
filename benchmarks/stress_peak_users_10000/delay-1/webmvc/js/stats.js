var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "8211",
        "ko": "1789"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "10",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "691",
        "ok": "661",
        "ko": "691"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "54",
        "ko": "214"
    },
    "standardDeviation": {
        "total": "122",
        "ok": "99",
        "ko": "130"
    },
    "percentiles1": {
        "total": "23",
        "ok": "22",
        "ko": "185"
    },
    "percentiles2": {
        "total": "95",
        "ok": "25",
        "ko": "287"
    },
    "percentiles3": {
        "total": "352",
        "ok": "286",
        "ko": "462"
    },
    "percentiles4": {
        "total": "569",
        "ok": "519",
        "ko": "645"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8211,
    "percentage": 82
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1789,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "273.7",
        "ko": "59.633"
    }
},
contents: {
"req_webflux-06e1c": {
        type: "REQUEST",
        name: "webFlux",
path: "webFlux",
pathFormatted: "req_webflux-06e1c",
stats: {
    "name": "webFlux",
    "numberOfRequests": {
        "total": "10000",
        "ok": "8211",
        "ko": "1789"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "10",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "691",
        "ok": "661",
        "ko": "691"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "54",
        "ko": "214"
    },
    "standardDeviation": {
        "total": "122",
        "ok": "99",
        "ko": "130"
    },
    "percentiles1": {
        "total": "23",
        "ok": "22",
        "ko": "185"
    },
    "percentiles2": {
        "total": "95",
        "ok": "25",
        "ko": "287"
    },
    "percentiles3": {
        "total": "353",
        "ok": "286",
        "ko": "462"
    },
    "percentiles4": {
        "total": "569",
        "ok": "519",
        "ko": "645"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8211,
    "percentage": 82
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1789,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "273.7",
        "ko": "59.633"
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
