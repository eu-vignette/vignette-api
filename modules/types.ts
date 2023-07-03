// The Order object
export interface Order {
  id: string,
  user_id?: string,
  cars: [
    {
      plate: string,
      country: string,
      provider_id: string,
      pdf: string
    }
  ],
  purchase_date: null,
  start_from: string,
  period: string,
  type: string,
  country: string,
  status: string

}

// The User object
export interface User {
  id: string,
  email: string,
  created_date: number
}