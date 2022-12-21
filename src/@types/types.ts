export interface mockWorks {
  id: number;
  name: string;
  date: string;
  buyUrl: string;
}


export interface mockData {
  id: number,
  name: string;
  birthDate: string,
  description: string;
  flag: string;
  image: string;
  country: string;
  typePhilosophy: string;
  works: Array<mockWorks>
}
