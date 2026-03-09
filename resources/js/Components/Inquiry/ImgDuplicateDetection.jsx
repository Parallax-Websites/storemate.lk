import { useState } from 'react';
import { useInquiryTranslation } from '@/Utils/inquiryTranslations';

export default function DuplicateDetection() {
  const [selectedRows, setSelectedRows] = useState([]);
  const { tInquiry } = useInquiryTranslation();

  const orders = [
    {
      id: '00879',
      date: '14/11/2022 10:02 AM',
      customerName: 'Anne Perera',
      contactNumber1: '+94 71 234 5678',
      contactNumber2: '+94 71 234 5678',
      assignee: 'Kasun Bandara',
      isDuplicate: true
    },
    {
      id: '00879',
      date: '14/11/2022 10:02 AM',
      customerName: 'Anne Perera',
      contactNumber1: '+94 71 234 5678',
      contactNumber2: '+94 71 234 5678',
      assignee: 'Kasun Bandara',
      isDuplicate: true,
      isHighlighted: true
    },
    {
      id: '00879',
      date: '14/11/2022 10:02 AM',
      customerName: 'Anne Perera',
      contactNumber1: '+94 71 234 5678',
      contactNumber2: '+94 71 234 5678',
      assignee: 'Kasun Bandara',
      isDuplicate: true,
      isHighlighted: true
    }
  ];

  const handleSelectRow = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter(i => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header Alert */}
      <div className="bg-gray-50 p-3 flex items-center justify-between border-b">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium">2 sales orders and 1 inquiry found in last 20 days</span>
        </div>
      </div>

      {/* Table Controls */}
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Search by</span>
            <select className="form-select text-sm border-gray-300 rounded-md shadow-sm">
              <option>Customer Name</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Anne Perera"
            className="form-input text-sm border-gray-300 rounded-md shadow-sm"
          />
          <button className="p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <button
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            Update Assignee
          </button>
          <span className="text-sm text-gray-600">3 Selected</span>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-full">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="w-10 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                </th>
                <th scope="col" className="w-32 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="w-24 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order #
                </th>
                <th scope="col" className="w-40 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="w-32 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Contact #1
                </th>
                <th scope="col" className="w-32 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                  Contact #2
                </th>
                <th scope="col" className="w-28 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assignee
                </th>
                <th scope="col" className="w-24 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order, index) => (
              <tr
                key={index}
                className={`${order.isHighlighted ? 'bg-red-50' : 'hover:bg-gray-50'} transition-colors`}
              >
                <td className="w-10 px-2 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => handleSelectRow(index)}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                </td>
                <td className="w-32 px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.date}
                </td>
                <td className="w-24 px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center space-x-2">
                    <span>{order.id}</span>
                    {order.isDuplicate && (
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </td>
                <td className="w-40 px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.customerName}
                  {order.isDuplicate && <span className="text-red-500 ml-2">⚠️</span>}
                </td>
                <td className="w-32 px-2 py-4 whitespace-nowrap text-sm text-gray-900 hidden md:table-cell">
                  {order.contactNumber1}
                </td>
                <td className="w-32 px-2 py-4 whitespace-nowrap text-sm text-gray-900 hidden lg:table-cell">
                  {order.contactNumber2}
                </td>
                <td className="w-28 px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.assignee}
                </td>
                <td className="w-24 px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <button className="text-yellow-600 hover:text-yellow-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="text-blue-600 hover:text-blue-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </button>
                    <button className="text-green-600 hover:text-green-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="px-4 py-3 flex items-center justify-between border-t">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Showing 1 to 10 of 100 entries</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm text-gray-500 bg-white border rounded-md hover:bg-gray-50">Previous</button>
          <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">1</button>
          <button className="px-3 py-1 text-sm text-gray-700 bg-white border rounded-md hover:bg-gray-50">2</button>
          <button className="px-3 py-1 text-sm text-gray-700 bg-white border rounded-md hover:bg-gray-50">3</button>
          <button className="px-3 py-1 text-sm text-gray-700 bg-white border rounded-md hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
}
