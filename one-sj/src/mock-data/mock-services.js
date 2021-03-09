// Mock data for our services so we can simulate back-end behavior

const oneSJ_API = [
  {
    title: "Women's Recovery Association",
    url: "healthright360.org",
    gender: "female",
    ethnicity: "any",
    insurance: true,
  },
  {
    title: "Indian Health Center Adult Behavioral Health",
    url: "indianhealthcenter.org",
    gender: "any",
    ethnicity: "indian",
    insurance: false,
  },
  {
    title: "Santa Clara Valley Medical Center",
    url: "scvmc.org",
    gender: "any",
    ethnicity: "any",
    insurance: true,
  },
  {
    title: "LifeLong Ashby Health Center",
    url: "lifelongmedical.org",
    gender: "any",
    ethnicity: "any",
    insurance: false,
  },
  {
    title: "California Peer-Run Warm Line",
    url: "mentalhealthsf.org",
    gender: "any",
    ethnicity: "any",
    insurance: false,
  },
  {
    title: "East Cliff Family Health Center",
    url: "schealthcenters.org",
    gender: "any",
    ethnicity: "any",
    insurance: true,
  },
];

export function getAPIData() {
  return oneSJ_API;
}
