import React from 'react';
import Button from '@material-ui/core/Button';
import { green, purple, red } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const SalesPersonCard = () => {
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
            <section>
                {
                    salesData.map((el, index) => {
                        return (
                            <div class="p-1 w-full">
                                <div class="h-full flex items-center border-gray-200 shadow-md border p-3 rounded-lg">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4" src={`/img/${el.profile_img}.png`} />
                                    <div class="flex-grow w-full">
                                        <div className="flex flex-row justify-between space-x-4">
                                            <div className="flex-grow w-1/2">
                                                <h2 class="text-indigo-600 text-sm title-font font-bold">
                                                    <div className="flex flex-row justify-start items-center space-x-2">
                                                        <p>{el.name}</p>
                                                        <img src="/img/checkmark.png" className="object-contain object-cover w-4 h-4" />
                                                    </div>
                                                </h2>
                                                <p class="text-blue-900 text-xs">{el.email}</p>
                                                <p class="text-gray-500 text-xs mt-3">SalePerson ID:-</p>
                                                <p class="text-green-600 text-xs">{el.saleperson_id}</p>
                                            </div>
                                            <div class="flex-grow w-1/2 space-y-1 border-gray-300 border-r-2">
                                                <h2 class="text-gray-800 text-xs title-font font-medium">
                                                    <p>Logged In At:<small className="ml-1 text-white bg-blue-500 p-1 rounded"> {el.logged_in_time}</small></p>
                                                </h2>
                                                <p class="text-blue-900 text-xs">Team: {el.team_name}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow ml-2 w-1/2 space-y-2">
                                        <h2 class="text-blue-500 text-sm title-font font-bold">
                                            <p>Employees Availablity</p>
                                            <p class="text-blue-900 text-xs font-medium">Show's if the employee is assigned with a task.</p>
                                        </h2>
                                        {
                                            el.is_available == 'Available' ? <ThemeProvider theme={theme}>
                                                <Button variant="contained" color="primary">
                                                    <div className="flex flex-row space-x-1 items-center">
                                                        <div>
                                                            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                        </div>
                                                        <div>
                                                            <span className="text-xs text-white font-bold">Available</span>
                                                        </div>
                                                    </div>
                                                </Button>
                                            </ThemeProvider>
                                                :
                                                <ThemeProvider>
                                                    <Button variant="contained" color="secondary">
                                                        <div className="flex flex-row space-x-1 items-center">
                                                            <div>
                                                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                                                            </div>
                                                            <div>
                                                                <span className="text-xs text-white font-bold">Not Available</span>
                                                            </div>
                                                        </div>
                                                    </Button>
                                                </ThemeProvider>
                                        }

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </React.Fragment>
    )
}

export default SalesPersonCard;