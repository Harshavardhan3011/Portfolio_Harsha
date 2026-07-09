import React from 'react';

export default function Reviews() {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Review Card 1 */}
        <div className="w-full sm:w-[300px] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover" />
              <div>
                <h4 className="font-bold">Raju</h4>
                <span className="text-xs text-gray-500">2 days ago</span>
              </div>
            </div>
            <div className="text-yellow-600 font-bold text-lg">★ 4.5</div>
          </div>
          <p className="text-sm text-gray-600">Excellent service, fast turnaround, and great communication!</p>
        </div>

        {/* Review Card 2 */}
        <div className="w-full sm:w-[300px] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="User" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover" />
              <div>
                <h4 className="font-bold">leela vardhan</h4>
                <span className="text-xs text-gray-500">5 days ago</span>
              </div>
            </div>
            <div className="text-yellow-600 font-bold text-lg">★ 5.0</div>
          </div>
          <p className="text-sm text-gray-600">Very professional and responsive. Would work again!</p>
        </div>

        {/* Review Card 3 */}
        <div className="w-full sm:w-[300px] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="User" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover" />
              <div>
                <h4 className="font-bold">Rahul</h4>
                <span className="text-xs text-gray-500">1 week ago</span>
              </div>
            </div>
            <div className="text-yellow-600 font-bold text-lg">★ 4.8</div>
          </div>
          <p className="text-sm text-gray-600">Delivered more than expected. Highly recommend.</p>
        </div>
      </div>
    </div>
  );
}
