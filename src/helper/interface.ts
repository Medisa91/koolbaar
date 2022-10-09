export interface DepartureOptions {
  from: string;
  fromDate: string;
}

export interface ArrivalOptions {
  to: string;
  toDate: string;
}

export interface Option {
  value: string | number;
  label: string;
}