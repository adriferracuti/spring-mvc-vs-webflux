import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 100,
  duration: '10s',
  gracefulStop: '0s'
};

export default function () {
  let resp = http.get('http://localhost:8080/webclient?delay=1000');
  check(resp, {
    "is status 200": (r) => r.status === 200
  })
  // sleep(1);
}

// export function handleSummary(data) {
//   return {
//     "summary.html": htmlReport(data),
//   };
// }
