import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../../../lotties/admin.json';
import { EmployeeInfo, LoggedInEmployees, TotalTeams, HelpCenter, SalesPersonFilter, SalesPersonCards } from "../../components";
import './banner.css';

const Banner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <React.Fragment>
            <section>
                <div className="w-full flex flex-row justify-between space-x-2">
                    <div class="w-full h-40 sm:w-2/2 text-gray-600 body-font">
                        <div class="container mx-auto px-5 flex md:flex-row flex-col rounded-lg items-center" style={{ background: '#E8F6ED' }}>
                            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 class="title-font sm:text-xl text-3xl mb-1 font-bold" style={{ color: '#88D985' }}>Welcome back! <span style={{ color: '#88D985' }}>Admin</span>
                                </h1>
                                <p class="mb-1 leading-relaxed text-xs text-gray-400 font-medium">All system are running smoothly.</p>
                                <p class="mb-1 leading-relaxed text-xs text-gray-400 font-medium">All the stats of your activity are displayed below & up to date.</p>
                            </div>
                            <div class="md:w-1/2 w-full">
                                <Lottie
                                    options={defaultOptions}
                                    height={150}
                                    width={150}
                                />
                            </div>
                        </div>
                        <section className="main-emp-details flex flex-row justify-start space-x-3">
                            <SalesPersonFilter />
                            <SalesPersonFilter />
                            <SalesPersonFilter />
                        </section>
                        <section className="mt-2 h-80 overflow-auto custom-scroll scrollbar">
                            <SalesPersonCards />
                        </section>
                    </div>
                    <div className="w-full sm:w-1/2 short-employee-info">
                        <EmployeeInfo />
                        <div className="logged-in-emp-details mt-2">
                            <LoggedInEmployees />
                        </div>
                        <div className="team-info mt-1">
                            <p className="text-gray-600 text-sm font-semibold py-1">Teams</p>
                            <TotalTeams />
                        </div>
                        <div className="need-help">
                            <HelpCenter />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}

export default Banner;