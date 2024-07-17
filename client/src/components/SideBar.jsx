import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
function SideBar(props) {
    const refSlidebar = useRef(null);
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        if (refSlidebar.current) {
            if (refSlidebar.current.style.display === 'none') {
                refSlidebar.current.style.display = 'block';
                setToggle(!toggle);
            } else {
                refSlidebar.current.style.display = 'none';
                setToggle(!toggle);
            }
        }
    }
    return (
        <>
            {toggle && <button type='button' className='close-sidebarr  position-absolute' onClick={handleClick}>&times;</button>}

            <div className='sidebar-dashboard' ref={refSlidebar}>
                <p className='sidebar-dashboard-title'>compaines dashboard</p>
                <div className='sidebar-dashboard-navlist'>
                    <ul className='sidebar-dashboard-navlist-group list-unstyled'>
                        <li className='sidebar-dashboard-nav-item'><Link to={'?page=link1'}>
                            <span className="icon-nav me-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 16.5L12 21.75L21 16.5" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 12L12 17.25L21 12" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>Overview
                        </Link></li>
                        <li className='sidebar-dashboard-nav-item'><Link to={'?page=link2'}>
                            <span className="icon-nav me-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#767F8C" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z" stroke="#767F8C" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M5.98096 18.6913C6.5459 17.5806 7.40719 16.6478 8.46948 15.9963C9.53177 15.3448 10.7536 15 11.9998 15C13.2459 15 14.4678 15.3448 15.5301 15.9963C16.5924 16.6478 17.4537 17.5806 18.0186 18.6913" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>Companies Profile
                        </Link></li>
                        <li className='sidebar-dashboard-nav-item'><Link to={'/post-a-job'}>
                            <span className="icon-nav me-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#767F8C" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M8.25 12H15.75" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 8.25V15.75" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>Post a Job
                        </Link></li>
                        <li className='sidebar-dashboard-nav-item'><Link to={'/my-job'}>
                            <span className="icon-nav me-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.2505 6.75H3.75049C3.33627 6.75 3.00049 7.08579 3.00049 7.5V19.5C3.00049 19.9142 3.33627 20.25 3.75049 20.25H20.2505C20.6647 20.25 21.0005 19.9142 21.0005 19.5V7.5C21.0005 7.08579 20.6647 6.75 20.2505 6.75Z" stroke="#0A65CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.75 6.75V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0294 3.90804 14.6478 3.75 14.25 3.75H9.75C9.35218 3.75 8.97064 3.90804 8.68934 4.18934C8.40804 4.47064 8.25 4.85218 8.25 5.25V6.75" stroke="#0A65CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.0006 11.8418C18.2653 13.4243 15.16 14.2553 11.9999 14.2503C8.84026 14.2553 5.73551 13.4246 3.00049 11.8426" stroke="#0A65CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.875 11.25H13.125" stroke="#0A65CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>My Jobs
                        </Link></li>
                        <li className='sidebar-dashboard-nav-item'><Link to={'?page=link4'}>
                            <span className="icon-nav me-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>Saved Candidate
                        </Link></li>
                        <li className='sidebar-dashboard-nav-item'><Link to={'?page=link4'}>
                            <span className="icon-nav me-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 10.5H16.5" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 13.5H16.5" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.5 3.75V20.25" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>Plans & Billing
                        </Link></li>
                        <li className='sidebar-dashboard-nav-item'><Link to={'?page=link4'}>
                            <span className="icon-nav me-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_4386_2383)">
                                        <path d="M7.5 13.5C9.57107 13.5 11.25 11.8211 11.25 9.75C11.25 7.67893 9.57107 6 7.5 6C5.42893 6 3.75 7.67893 3.75 9.75C3.75 11.8211 5.42893 13.5 7.5 13.5Z" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.25 7.5H23.25" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.25 12H23.25" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.5 16.5H23.25" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.6875 18C2.01795 16.7094 2.76855 15.5655 3.82097 14.7486C4.87338 13.9317 6.16774 13.4883 7.5 13.4883C8.83226 13.4883 10.1266 13.9317 11.179 14.7486C12.2314 15.5655 12.982 16.7094 13.3125 18" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4386_2383">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </span>All Companies
                        </Link></li>
                        <li className='sidebar-dashboard-nav-item'><Link to={'?page=link4'}>
                            <span className="icon-nav me-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.5193 4.13952L9.75029 2.81315C9.65538 2.74175 9.54485 2.69393 9.42783 2.67363C9.31081 2.65332 9.19063 2.66112 9.07721 2.69638C8.52933 2.86794 7.99779 3.08787 7.48885 3.35355C7.38349 3.40881 7.29279 3.48834 7.22422 3.58556C7.15566 3.68278 7.1112 3.79492 7.09452 3.91271L6.78179 6.10186C6.66259 6.20753 6.54589 6.31742 6.43169 6.43156C6.31752 6.54573 6.2076 6.66246 6.10191 6.78176L6.10186 6.78179L3.9131 7.09479C3.7955 7.11142 3.68353 7.15576 3.58642 7.22415C3.48932 7.29254 3.40986 7.38303 3.35459 7.48816C3.08849 7.99689 2.86814 8.52826 2.69613 9.076C2.66071 9.18957 2.65281 9.30994 2.67307 9.42717C2.69334 9.5444 2.7412 9.65513 2.81269 9.75022L4.13952 11.5193C4.12995 11.6783 4.12514 11.8385 4.12509 12C4.12509 12.1615 4.1299 12.3217 4.13953 12.4808L4.13952 12.4809L2.81315 14.2499C2.74175 14.3448 2.69393 14.4553 2.67363 14.5724C2.65332 14.6894 2.66112 14.8095 2.69638 14.923C2.86794 15.4708 3.08787 16.0024 3.35355 16.5113C3.40881 16.6167 3.48834 16.7074 3.58556 16.776C3.68278 16.8445 3.79492 16.889 3.91271 16.9057L6.10186 17.2184C6.20752 17.3376 6.31742 17.4543 6.43156 17.5685C6.54572 17.6827 6.66245 17.7926 6.78175 17.8983L6.78179 17.8983L7.09479 20.0871C7.11142 20.2047 7.15575 20.3167 7.22415 20.4138C7.29254 20.5109 7.38303 20.5903 7.48816 20.6456C7.99688 20.9117 8.52825 21.132 9.07599 21.304C9.18957 21.3395 9.30994 21.3474 9.42717 21.3271C9.5444 21.3068 9.65512 21.259 9.75021 21.1875L11.5193 19.8607C11.6783 19.8702 11.8385 19.875 12 19.8751C12.1614 19.8751 12.3217 19.8703 12.4808 19.8607L12.4809 19.8607L14.2499 21.187C14.3448 21.2584 14.4553 21.3063 14.5724 21.3266C14.6894 21.3469 14.8095 21.3391 14.923 21.3038C15.4708 21.1322 16.0024 20.9123 16.5113 20.6466C16.6167 20.5914 16.7074 20.5118 16.776 20.4146C16.8445 20.3174 16.889 20.2053 16.9057 20.0875L17.2184 17.8983C17.3376 17.7927 17.4543 17.6828 17.5685 17.5686C17.6827 17.4545 17.7926 17.3377 17.8983 17.2184L17.8983 17.2184L20.0871 16.9054C20.2047 16.8888 20.3167 16.8444 20.4138 16.776C20.5109 16.7076 20.5903 16.6172 20.6456 16.512C20.9117 16.0033 21.132 15.4719 21.304 14.9242C21.3395 14.8106 21.3474 14.6902 21.3271 14.573C21.3068 14.4558 21.259 14.3451 21.1875 14.25L19.8607 12.4809C19.8702 12.3219 19.875 12.1616 19.8751 12.0002C19.8751 11.8387 19.8703 11.6785 19.8607 11.5194L19.8607 11.5193L21.187 9.75029C21.2584 9.65538 21.3063 9.54485 21.3266 9.42783C21.3469 9.31081 21.3391 9.19063 21.3038 9.07721C21.1322 8.52933 20.9123 7.99779 20.6466 7.48885C20.5914 7.38349 20.5118 7.29279 20.4146 7.22422C20.3174 7.15566 20.2053 7.1112 20.0875 7.09452L17.8983 6.78179C17.7927 6.66259 17.6828 6.54589 17.5686 6.43169C17.4545 6.31752 17.3377 6.2076 17.2184 6.10191L17.2184 6.10186L16.9054 3.9131C16.8888 3.7955 16.8444 3.68353 16.776 3.58642C16.7076 3.48932 16.6172 3.40986 16.512 3.35459C16.0033 3.08849 15.4719 2.86814 14.9242 2.69613C14.8106 2.66071 14.6902 2.65281 14.573 2.67307C14.4558 2.69334 14.3451 2.7412 14.25 2.81269L12.4809 4.13952C12.3219 4.12995 12.1616 4.12514 12.0002 4.12509C11.8387 4.12509 11.6785 4.1299 11.5194 4.13953L11.5193 4.13952Z" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>Settings
                        </Link></li>
                    </ul>
                    <div className='sidebar-dashboard-logout'>
                        <ul className='sidebar-dashboard-navlist-group list-unstyled'>
                            <li className='sidebar-dashboard-nav-item'><Link to={'?page=link8'}>
                                <span className="icon-nav me-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.3135 8.0625L20.2499 12L16.3135 15.9375" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.75 12H20.2472" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.75 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H9.75" stroke="#767F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>Log-out </Link></li>
                        </ul>
                    </div>
                </div>
                <button type='button' className='close-sidebar position-absolute' onClick={handleClick}>&times;</button>
            </div>
        </>
    )
}

export default SideBar;