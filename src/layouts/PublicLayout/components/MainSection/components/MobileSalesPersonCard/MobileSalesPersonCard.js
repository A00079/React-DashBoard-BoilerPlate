import React from "react";

const MobileSalesPersonCard = () => {
    const [salesData, setSalesData] = React.useState([
        {
            name: 'Holden Caulfield',
            email: 'HoldenCaulfield@gmail.com',
            saleperson_id: 'xx-e7479vhc-37bj',
            logged_in_time: '10:45 AM',
            team_name: 'x-G-Force',
            is_available: 'Available',
            profile_img: '1'
        },
        {
            name: 'Sherlok Holmes',
            email: 'SherlokHolmesd@gmail.com',
            saleperson_id: 'he848-djd884-do38',
            logged_in_time: '8:28 AM',
            team_name: 'Alpha-G-Force',
            is_available: 'Not Available',
            profile_img: '4'
        },
        {
            name: 'Jhon Watson',
            email: 'JhonWatson@gmail.com',
            saleperson_id: 'anam45-dfjk554-do38',
            logged_in_time: '7:19 AM',
            team_name: 'Alpha-G-Oink',
            is_available: 'Available',
            profile_img: '6'
        }
    ])
    return (
        <React.Fragment>
            <div class="flex flex-wrap">
                {
                    salesData.map((el, index) => {
                        return (
                            <div class="p-1 pl-0 w-full">
                                <div class="h-full flex flex-col sm:flex-row items-center border-gray-200 border p-1 rounded-lg">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-1" src={`/img/${el.profile_img}.png`} />
                                    <div class="flex-grow w-full">
                                        <h2 class="text-indigo-600 title-font font-bold">
                                            <div className="flex flex-row justify-center mt-1 sm:mt-0 sm:justify-start items-center space-x-1">
                                                <p className="text-gray-900 title-font text-sm font-medium">{el.name}</p>
                                                <img src="/img/checkmark.png" className="object-contain object-cover w-3 h-3" />
                                            </div>
                                            <p class="text-gray-500 text-xs text-center sm:text-left mx-auto sm:mx-0 mt-1 sm:mt-0  mb-1 break-words w-36">{el.email}</p>
                                            <div className="flex flex-row sm:flex-col justify-center sm:justify-start">
                                                <p class="text-gray-600 text-xs">SalePerson ID:-</p>
                                                <p class="text-green-500 text-xs">{el.saleperson_id}</p>
                                            </div>
                                            <div className="block sm:hidden flex flex-row mt-1 sm:flex-col justify-center sm:justify-start">
                                                <div className="flex flex-row">
                                                    <div class="text-gray-600 text-xs">Availablity:-</div>
                                                    <div class="text-green-500 text-xs ml-1">
                                                        {
                                                            el.is_available == 'Available' ?
                                                                <div style={{ background: '#4CAF50' }} className="flex flex-row rounded space-x-1 px-1 items-center">
                                                                    <div>
                                                                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                                    </div>
                                                                    <div>
                                                                        <small style={{ fontSize: '11px' }} className="text-xs text-white font-bold">Available</small>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div style={{ background: '#c51162' }} className="flex flex-row mt-5 rounded space-x-1 items-center">
                                                                    <div>
                                                                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                                    </div>
                                                                    <div>
                                                                        <small style={{ fontSize: '9px' }} className="text-xs text-white font-bold">Not Available</small>
                                                                    </div>
                                                                </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="hidden sm:block text-indigo-700 text-xs mt-1">Availablity:-</p>
                                        </h2>
                                    </div>
                                    <div class="flex-grow w-full sm:w-1/2 space-y-1">
                                        <h2 class="flex flex-row sm:flex-col justify-center sm:justify-start mt-1 sm:mt-0 text-gray-800 text-xs title-font font-medium">
                                            <p>Logged In At:</p>
                                            <p><small className="text-white bg-blue-500 p-1 rounded"> {el.logged_in_time}</small></p>
                                        </h2>
                                        <h2 class="flex flex-row sm:flex-col justify-center sm:justify-start text-gray-800 text-xs title-font font-medium">
                                            <p>Team:</p>
                                            <p><small className="text-gray-900">  {el.team_name}</small></p>
                                        </h2>
                                        <h2 class="hidden sm:block text-gray-800 text-xs title-font font-medium">
                                            {
                                                el.is_available == 'Available' ?
                                                    <div style={{ background: '#4CAF50' }} className="flex flex-row rounded mt-5 space-x-1 items-center">
                                                        <div>
                                                            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                        </div>
                                                        <div>
                                                            <small style={{ fontSize: '11px' }} className="text-xs text-white font-bold">Available</small>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div style={{ background: '#c51162' }} className="flex flex-row mt-5 rounded space-x-1 items-center">
                                                        <div>
                                                            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                        </div>
                                                        <div>
                                                            <small style={{ fontSize: '9px' }} className="text-xs text-white font-bold">Not Available</small>
                                                        </div>
                                                    </div>
                                            }
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </React.Fragment>
    )
}

export default MobileSalesPersonCard;