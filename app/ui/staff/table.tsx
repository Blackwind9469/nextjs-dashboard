import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { FormattedStaffTable } from "@/app/lib/definitions";

export default async function StaffTable({
  staff,
}: {
  staff: FormattedStaffTable[];
}) {
  return (
    <div className='w-full'>
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Staff
      </h1>
      <Search placeholder='Search staff...' />
      <div className='mt-6 flow-root'>
        <div className='overflow-x-auto'>
          <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0'>
              <div className='md:hidden'>
                {staff?.map((staff) => (
                  <div
                    key={staff.id}
                    className='mb-2 w-full rounded-md bg-white p-4'
                  >
                    <div className='flex items-center justify-between border-b pb-4'>
                      <div>
                        <div className='mb-2 flex items-center'>
                          <div className='flex items-center gap-3'>
                            <Image
                              src={staff.image_url}
                              className='rounded-full'
                              alt={`${staff.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{staff.name}</p>
                          </div>
                        </div>
                        <p className='text-sm text-gray-500'>{staff.email}</p>
                      </div>
                    </div>
                    <div className='flex w-full items-center justify-between border-b py-5'>
                      <div className='flex w-1/2 flex-col'>
                        <p className='text-xs'>Aktif</p>
                        <p className='font-medium'>{staff.total_aktif}</p>
                      </div>
                      <div className='flex w-1/2 flex-col'>
                        <p className='text-xs'>Pasif</p>
                        <p className='font-medium'>{staff.total_pasif}</p>
                      </div>
                    </div>
                    <div className='pt-4 text-sm'>
                      <p>{staff.total_contract} sozlesme</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className='hidden min-w-full rounded-md text-gray-900 md:table'>
                <thead className='rounded-md bg-gray-50 text-left text-sm font-normal'>
                  <tr>
                    <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                      Name
                    </th>
                    <th scope='col' className='px-3 py-5 font-medium'>
                      Email
                    </th>
                    <th scope='col' className='px-3 py-5 font-medium'>
                      Toplam Sozlesme
                    </th>
                    <th scope='col' className='px-3 py-5 font-medium'>
                      Toplam Aktif
                    </th>
                    <th scope='col' className='px-4 py-5 font-medium'>
                      Toplam Pasif
                    </th>
                  </tr>
                </thead>

                <tbody className='divide-y divide-gray-200 text-gray-900'>
                  {staff.map((staff) => (
                    <tr key={staff.id} className='group'>
                      <td className='whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6'>
                        <div className='flex items-center gap-3'>
                          <Image
                            src={staff.image_url}
                            className='rounded-full'
                            alt={`${staff.name}'s profile picture`}
                            width={40}
                            height={40}
                          />
                          <p>{staff.name}</p>
                        </div>
                      </td>
                      <td className='whitespace-nowrap bg-white px-4 py-5 text-sm'>
                        {staff.email}
                      </td>
                      <td className='whitespace-nowrap bg-white px-4 py-5 text-sm'>
                        {staff.total_contract}
                      </td>
                      <td className='whitespace-nowrap bg-white px-4 py-5 text-sm'>
                        {staff.total_aktif}
                      </td>
                      <td className='whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md'>
                        {staff.total_pasif}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
