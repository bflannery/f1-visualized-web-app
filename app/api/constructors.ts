interface Constructor {
  id: string
  name: string
  reference: string
  nationality: string
  wiki_url: string
}

export async function getConstructors(): Promise<Constructor[]> {
  const url = 'http://localhost:8000/constructors'
  const res = await fetch(url)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
