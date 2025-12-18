import React from 'react';

export default function DuplicateOrderWidget() {
  const orders = [
    {
      id: 'ORD-8791',
      customerName: 'Anne Perera',
      date: '14 Nov 2022',
      isDuplicate: true
    },
    {
      id: 'ORD-8792',
      customerName: 'John Smith',
      date: '14 Nov 2022'
    },
    {
      id: 'ORD-8793',
      customerName: 'Sarah Wilson',
      date: '14 Nov 2022',
      isDuplicate: true
    }
  ];

  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Card Header with Gradient Accent */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm"></div>
        <div className="relative px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-gray-900">Duplicate Orders</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              2 Found
            </span>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All
          </button>
        </div>
      </div>

      {/* Order List */}
      <div className="px-6 py-4">
        <div className="space-y-3">
          {orders.map((order, index) => (
            <div
              key={order.id}
              className={`p-3 rounded-lg transition-all ${
                order.isDuplicate
                  ? 'bg-red-50 border border-red-100'
                  : 'hover:bg-gray-50 border border-transparent'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">{order.id}</span>
                      {order.isDuplicate && (
                        <span className="text-red-500 text-sm">⚠️</span>
                      )}
                    </div>
                    <div className="flex items-center mt-0.5 space-x-2">
                      <span className="text-sm text-gray-600">{order.customerName}</span>
                      {order.isDuplicate && (
                        <span className="text-xs text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                          Duplicate Detected
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {order.isDuplicate && (
                  <button className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
                    Fix Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 bg-gray-50 bg-opacity-50">
        <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Resolve All Duplicates
        </button>
      </div>
    </div>
  );
}
