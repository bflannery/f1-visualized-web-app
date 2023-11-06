'use client'

import InfiniteScroll from 'react-infinite-scroll-component';
import { getConstructors } from '@/app/api/constructors'

export default async function Page() {
  const constructors = await getConstructors()
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <InfiniteScroll
            dataLength={constructors.length}
            next={getConstructors}
            hasMore={true} // Replace with a condition based on your data source
            loader={<p>Loading...</p>}
            endMessage={<p>No more data to load.</p>}
          >
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Name
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                 Nationality
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Wiki Url
              </th>
            </tr>
            </thead>
            <tbody className="bg-white">
            {constructors?.map((constructor) => (
              <tr
                key={constructor.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <p>{constructor.name}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {constructor.nationality}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {constructor.wiki_url}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}


// <div className="md:hidden">
//             {constructors?.map((constructor) => (
//               <div
//                 key={constructor.id}
//                 className="mb-2 w-full rounded-md bg-white p-4"
//               >
//                 <div className="flex items-center justify-between border-b pb-4">
//                   <div>
//                     <p className="text-sm text-gray-500">{constructor.name}</p>
//                   </div>
//                 </div>
//                 <div className="flex w-full items-center justify-between pt-4">
//                   <div>
//                     <p className="text-xl font-medium">
//                       {constructor.nationality}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xl font-medium">
//                       {constructor.wiki_url}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
