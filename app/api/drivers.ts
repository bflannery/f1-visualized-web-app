export type Driver = {
  id: string
  forename: string
  surname: string
  dob: string
  reference: string
  nationality: string
  code: string
  number: number
  wiki_url: string
}

export async function getApiDrivers(): Promise<Driver[]> {
  const url = `http://localhost:8000/drivers`
  const res = await fetch(url)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
