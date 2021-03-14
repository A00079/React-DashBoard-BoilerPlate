import React from 'react';

const LoggedInEmployees = () => {
    return (
        <React.Fragment>
            <section>
                <p className="text-gray-600 text-sm font-semibold py-1">Employees Logged In</p>
                <div className="container w-full mx-auto bg-indigo-50 border-gray-200 border rounded-md">
                    <div class="flex flex-wrap space-y-1 p-2">
                        <div class="w-full">
                            <div class="h-full flex items-center bg-yellow-100 border-yellow-400 border p-2 rounded-lg">
                                <img alt="team" class="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2 lg:mr-4" src="https://dummyimage.com/80x80" />
                                <div class="flex-grow">
                                    <h2 class="text-green-600 text-xs title-font font-medium">Holden Caulfield</h2>
                                    <p class="text-gray-500 text-xs">UI Designer</p>
                                    <p class="block sm:hidden text-gray-500 text-xs mt-1 border-yellow-400 border-t-2 border-dashed">Logged In Date</p>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-blue-500 text-xs title-font font-medium">LogIn Time</h2>
                                    <p class="text-gray-500 text-xs">10:02:54</p>
                                    <p class="block sm:hidden text-gray-500 text-xs mt-1 border-yellow-400 border-t-2 border-dashed">14-03-2021</p>
                                </div>
                                <div class="hidden sm:block flex-grow">
                                    <h2 class="text-blue-500 text-xs title-font font-medium">LogIn Date</h2>
                                    <p class="text-gray-500 text-xs">14-03-2021</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="h-full flex items-center bg-yellow-100 border-yellow-400 border p-2 rounded-lg">
                                <img alt="team" class="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2 lg:mr-4" src="https://dummyimage.com/80x80" />
                                <div class="flex-grow">
                                    <h2 class="text-green-600 text-xs title-font font-medium">Holden Caulfield</h2>
                                    <p class="text-gray-500 text-xs">UI Designer</p>
                                    <p class="block sm:hidden text-gray-500 text-xs mt-1 border-yellow-400 border-t-2 border-dashed">Logged In Date</p>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-blue-500 text-xs title-font font-medium">LogIn Time</h2>
                                    <p class="text-gray-500 text-xs">10:02:54</p>
                                    <p class="block sm:hidden text-gray-500 text-xs mt-1 border-yellow-400 border-t-2 border-dashed">14-03-2021</p>
                                </div>
                                <div class="hidden sm:block flex-grow">
                                    <h2 class="text-blue-500 text-xs title-font font-medium">LogIn Date</h2>
                                    <p class="text-gray-500 text-xs">14-03-2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default LoggedInEmployees;