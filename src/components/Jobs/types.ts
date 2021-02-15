export interface JobsData {
  countries: Country[];
}

interface Country {
  name: string;
  cities: City[];
}

interface City {
  name: string;
  jobs: Job[];
}

interface Job {
  id: string;
  title: string;
  company: Company;
  remotes: Remote[];
}

interface Company {
  name: string;
}

interface Remote {
  type: string;
}
