import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
        {
            title: "Home1",
            path: "/home/home1",
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: "Home2",
            path: "/home/home2",
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: "Home3",
            path: "/home/home3",
            icon: <IoIcons.IoIosPaper />,
        },
        ],
    },
    {
        title: "Rooms",
        path: "/rooms",
        icon: <FaIcons.FaKey />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
        {
            title: "Search pages",
            path: "/rooms",
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: "Single Branch",
            path: "/rooms",
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: "Single suite",
            path: "/rooms",
            icon: <IoIcons.IoIosPaper />,
        },
        ],
    },
{
	title: "About",
	path: "/about-us",
	icon: <AiIcons.AiFillSetting />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Our Aim",
		path: "/about-us/aim",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Our Vision",
		path: "/about-us/vision",
		icon: <IoIcons.IoIosPaper />,
	},
    {
		title: "Our Teams",
		path: "/about-us/teams",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Services",
	path: "/services",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Service 1",
		path: "/services/services1",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Service 2",
		path: "/services/services2",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Service 3",
		path: "/services/services3",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Shop",
	path: "/shop",
	icon: <AiIcons.AiOutlineShoppingCart />,
},
{
	title: "Events",
	path: "/events",
	icon: <RiIcons.RiCalendarEventLine />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Event 1",
		path: "/events/events1",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Event 2",
		path: "/events/events2",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "News",
	path: "/news",
	icon: <RiIcons.RiNewspaperLine />,
},
{
	title: "Contact",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},
{
	title: "Support",
	path: "/support",
	icon: <IoIcons.IoMdHelpCircle />,
},
];
