
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Avatar, CustomDropDown, ThreeDotMenu } from "../../components";
import StoreIcon from '@material-ui/icons/Store';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ExploreIcon from '@material-ui/icons/Explore';
import RoomIcon from '@material-ui/icons/Room';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import DeleteIcon from '@material-ui/icons/Delete';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import GroupIcon from '@material-ui/icons/Group';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HistoryIcon from '@material-ui/icons/History';
import Button from '@material-ui/core/Button';
import { Gauge } from '../../../../../../components/GraphComponents/components';
import { Banner } from '../../../MainSection/components';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        overflow: '!important hidden',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
        },
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#f5f5f5',
        fontSize:'12px',
        '&:hover': {
            backgroundColor: '#eeeeee',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        fontWeight: 'bold'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        fontSize:'12px',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    nested: {
        paddingTop: theme.spacing(0),
        paddingLeft: theme.spacing(4),
    },
}));


export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [activePanelNumber, setActivePanelNumber] = React.useState('1');

    React.useEffect(() => {
        getCurrentDate();
    });

    const activePanel = (item) => {
        if (item == 'managestore') {
            setActivePanelNumber('1');
        } else if (item == 'salesteam') {
            setActivePanelNumber('2');
        } else if (item == 'manageroutes') {
            setActivePanelNumber('3');
        } else if (item == 'assignroutes') {
            setActivePanelNumber('4');
        } else if (item == 'createschedule') {
            setActivePanelNumber('5');
        } else if (item == 'viewhistory') {
            setActivePanelNumber('6');
        }
        handleDrawerOpen();
    }

    const getCurrentDate = () => {
        var today = new Date();
        var day = today.getDay();
        var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
        console.log("Today is : " + daylist[day] + ".");
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
        var prepand = (hour >= 12) ? " PM " : " AM ";
        hour = (hour >= 12) ? hour - 12 : hour;
        if (hour === 0 && prepand === ' PM ') {
            if (minute === 0 && second === 0) {
                hour = 12;
                prepand = ' Noon';
            }
            else {
                hour = 12;
                prepand = ' PM';
            }
        }
        if (hour === 0 && prepand === ' AM ') {
            if (minute === 0 && second === 0) {
                hour = 12;
                prepand = ' Midnight';
            }
            else {
                hour = 12;
                prepand = ' AM';
            }
        }
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const d = new Date();
        return hour + ":" + minute + prepand + " at " + new Date().getDate() + "th " + monthNames[d.getMonth()] + ' ' + new Date().getFullYear();
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        handleAssignRoutes('close');
        handleStore('close');
        handleCreateSchedule('close');
        handleSalesTeamRoutes('close');
        handleSalesPerson('close');
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const [openStore, setOpenStore] = React.useState(false);
    const [openSalesPerson, setOpenSalesPerson] = React.useState(false);
    const [openAssignRoutes, setOpenAssignRoutes] = React.useState(false);
    const [openCreateSchedule, setOpenCreateSchedule] = React.useState(false);
    const [openSalesTeamRoutes, setOpenSalesTeamRoutes] = React.useState(false);

    const handleCreateSchedule = (el) => {
        if (!!el) {
            if (el == 'close') {
                setOpenCreateSchedule(false);
            } else {
                setOpenCreateSchedule(!openCreateSchedule);
            }
        }
    };
    const handleAssignRoutes = (el) => {
        if (!!el) {
            if (el == 'close') {
                setOpenAssignRoutes(false);
            } else {
                setOpenAssignRoutes(!openAssignRoutes);
            }
        }
    };
    const handleSalesTeamRoutes = (el) => {
        if (!!el) {
            if (el == 'close') {
                setOpenSalesTeamRoutes(false);
            } else {
                setOpenSalesTeamRoutes(!openSalesTeamRoutes);
            }
        }
    };
    const handleSalesPerson = (el) => {
        if (!!el) {
            if (el == 'close') {
                setOpenSalesPerson(false);
            } else {
                setOpenSalesPerson(!openSalesPerson);
            }
        }
    };
    const handleStore = (el) => {
        if (!!el) {
            if (el == 'close') {
                setOpenStore(false);
            } else {
                setOpenStore(!openStore);
            }
        }
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.grow}>
                <AppBar position="fixed"
                    color={'inherit'}
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                    <Toolbar>
                        <div className="flex flex-row justify-between sm:space-x-8">
                            {
                                open ? "" : <img src="/img/dashboardLogo.svg" className="hidden sm:block object-contain object-cover w-16 h-16 py-4 -mx-6" />
                            }
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div className="flex flex-col ml-4">
                            <Typography className={classes.title} variant="h6" noWrap>
                                <span className="font-semibold text-indigo-800">BoilerPlate</span>
                            </Typography>
                            <small className="text-xs font-medium text-gray-400">{getCurrentDate()}</small>
                        </div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <Button variant="contained" style={{ backgroundColor: '#068F38', marginRight: '10px' }}>
                            <div className="flex flex-row justify-between items-center space-x-1">
                                <HistoryIcon className="text-white" />
                                <small className="text-xs font-bold text-white capitalize">View History</small>
                            </div>
                        </Button>
                        <div className={classes.sectionDesktop}>
                            <div className="border-gray-100 border-l-2 border-r-2 mt-2">
                                <IconButton aria-label="show 4 new mails" className="border-none outline-none" color="inherit">
                                    <Badge badgeContent={4} color="secondary">
                                        <MailIcon className="text-gray-500" />
                                    </Badge>
                                </IconButton>
                            </div>
                            <div className="border-gray-100 border-r-2 px-2 mt-2">
                                <IconButton aria-label="show 17 new notifications" color="inherit">
                                    <Badge badgeContent={17} color="secondary">
                                        <NotificationsIcon className="text-gray-500" />
                                    </Badge>
                                </IconButton>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <Avatar />
                                <CustomDropDown />
                            </div>

                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </div>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer,{
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <div className="flex flex-row justify-between items-center">
                        <img src="/img/dashboardLogo.svg" className="object-contain object-cover w-16 h-16 py-2" />
                        <h4 className="text-gray-600 text-indigo-800 font-bold text-lg ml-2" paragraph>Dashboard</h4>
                    </div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className="bg-blue-50">
                    <ListItem className="bg-green-50">
                        {
                            open ? <div className="lg:w-full md:full w-full">
                                <div className="h-full flex flex-row justify-between items-center rounded-lg">
                                    <Avatar />
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                                        <p className="text-gray-500">UI Designer</p>
                                    </div>
                                    <ThreeDotMenu />
                                </div>
                            </div> : <div className="-mx-2 p-0"><Avatar /></div>
                        }
                    </ListItem>
                </List>
                {
                    open ? <h4 className="text-gray-600 font-bold ml-3">Navigation</h4> : ""
                }
                <List>
                    <div onClick={() => activePanel('managestore')} className={activePanelNumber == '1' ? 'border-blue-700 border-l-4 rounded-r-full bg-indigo-100' : 'hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100'}>
                        <ListItem button onClick={handleStore}>
                            <ListItemIcon>
                                <div className="bg-indigo-100 p-2 rounded ">
                                    <StoreIcon className={open ? 'text-red-800' : 'text-red-800'} />
                                </div>
                            </ListItemIcon>
                            <ListItemText><span className="text-sm text-purple-800 font-bold">Manage Store</span></ListItemText>
                            {openStore ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </div>
                    <Collapse in={openStore} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <div className="bg-indigo-100 p-0 rounded ">
                                        <AddBoxIcon className={open ? 'text-green-700' : 'text-green-700'} />
                                    </div>
                                </ListItemIcon>
                                <ListItemText><span className="text-green-700 font-bold text-xs">Add Shops</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <div className="bg-indigo-100 p-0 rounded ">
                                        <EditIcon className={open ? 'text-green-700' : 'text-green-700'} />
                                    </div>
                                </ListItemIcon>
                                <ListItemText><span className="text-green-700 font-bold text-xs">Update Shops</span></ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <div onClick={() => activePanel('salesteam')} className={activePanelNumber == '2' ? 'border-blue-700 border-l-4 rounded-r-full bg-indigo-100' : 'hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100'}>
                        <ListItem button onClick={handleSalesPerson}>
                            <ListItemIcon>
                                <div className="bg-indigo-100 p-2 rounded ">
                                    <GroupAddIcon className={open ? 'text-purple-800' : 'text-purple-800'} />
                                </div>
                            </ListItemIcon>
                            <ListItemText><span className="text-sm text-purple-800 font-bold">Sales/Team</span></ListItemText>
                            {openSalesPerson ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </div>
                    <Collapse in={openSalesPerson} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <div className="bg-indigo-100 p-0 rounded ">
                                        <AddBoxIcon className={open ? 'text-green-700' : 'text-green-700'} />
                                    </div>
                                </ListItemIcon>
                                <ListItemText><span className="text-green-700 font-bold text-xs break-words">Add Sales/Team</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <div className="bg-indigo-100 p-0 rounded ">
                                        <EditIcon className={open ? 'text-yellow-500' : 'text-yellow-500'} />
                                    </div>
                                </ListItemIcon>
                                <ListItemText><span className="text-yellow-500 font-bold text-xs">Update Sales/Team</span></ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <div onClick={() => activePanel('manageroutes')} className={activePanelNumber == '3' ? 'border-blue-700 border-l-4 rounded-r-full bg-indigo-100' : 'hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100'}>
                        <ListItem button onClick={handleSalesTeamRoutes}>
                            <ListItemIcon>
                                <div className="bg-indigo-100 p-2 rounded ">
                                    <ExploreIcon className={open ? 'text-yellow-500' : 'text-yellow-500'} />
                                </div>
                            </ListItemIcon>
                            <ListItemText><span className="text-sm text-purple-800 font-bold">Manage Routes</span></ListItemText>
                            {openSalesTeamRoutes ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </div>
                    <Collapse in={openSalesTeamRoutes} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <div className="bg-indigo-100 p-0 rounded ">
                                        <AddLocationIcon className={open ? 'text-green-700' : 'text-green-700'} />
                                    </div>
                                </ListItemIcon>
                                <ListItemText><span className="text-green-700 font-bold text-xs break-words">Add Routes</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <div className="bg-indigo-100 p-0 rounded ">
                                        <EditLocationIcon className={open ? 'text-yellow-500' : 'text-yellow-500'} />
                                    </div>
                                </ListItemIcon>
                                <ListItemText><span className="text-yellow-500 font-bold text-xs">Update Routes</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <div className="bg-indigo-100 p-0 rounded ">
                                        <DeleteIcon className={open ? 'text-red-600' : 'text-red-600'} />
                                    </div>
                                </ListItemIcon>
                                <ListItemText><span className="text-red-500 font-bold text-xs">Delete Routes</span></ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <div onClick={() => activePanel('assignroutes')} className={activePanelNumber == '4' ? 'border-blue-700 border-l-4 rounded-r-full bg-indigo-100' : 'hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100'}>
                        <ListItem button onClick={handleAssignRoutes}>
                            <ListItemIcon>
                                <div className="bg-indigo-100 p-2 rounded ">
                                    <PersonPinCircleIcon className={open ? 'text-indigo-500' : 'text-indigo-500'} />
                                </div>
                            </ListItemIcon>
                            <ListItemText><span className="text-sm text-purple-800 font-bold">Assign Routes</span></ListItemText>
                            {openAssignRoutes ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </div>
                    <Collapse in={openAssignRoutes} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <div className="bg-indigo-100 p-0 rounded ">
                                        <AccessibilityIcon className={open ? 'text-red-800' : 'text-red-800'} />
                                    </div>
                                </ListItemIcon>
                                <ListItemText><span className="text-gray-700 font-bold text-xs break-words">Sales Person</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <div className="bg-indigo-100 p-0 rounded ">
                                        <GroupIcon className={open ? 'text-green-700' : 'text-green-700'} />
                                    </div>
                                </ListItemIcon>
                                <ListItemText><span className="text-gray-700 font-bold text-xs">Team</span></ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <div onClick={() => activePanel('createschedule')} className={activePanelNumber == '5' ? 'border-blue-700 border-l-4 rounded-r-full bg-indigo-100' : 'hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100'}>
                        <ListItem button onClick={handleCreateSchedule}>
                            <ListItemIcon>
                                <div className="bg-indigo-100 p-2 rounded ">
                                    <AddAlarmIcon className={open ? 'text-green-700' : 'text-green-700'} />
                                </div>
                            </ListItemIcon>
                            <ListItemText><span className="text-sm text-purple-800 font-bold">Create Schedule</span></ListItemText>
                            {openCreateSchedule ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </div>
                    <Collapse in={openCreateSchedule} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <div className="bg-indigo-100 p-0 rounded ">
                                        <AccessibilityIcon className={open ? 'text-red-800' : 'text-red-800'} />
                                    </div>
                                </ListItemIcon>
                                <ListItemText><span className="text-gray-700 font-semibold text-xs break-words">Sales Person</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <div className="bg-indigo-100 p-0 rounded ">
                                        <GroupIcon className={open ? 'text-green-700' : 'text-green-700'} />
                                    </div>
                                </ListItemIcon>
                                <ListItemText><span className="text-gray-700 font-semibold text-xs">Team</span></ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <div onClick={() => activePanel('viewhistory')} className={activePanelNumber == '6' ? 'border-blue-700 border-l-4 rounded-r-full bg-indigo-100' : 'hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100'}>
                        <ListItem button>
                            <ListItemIcon>
                                <div className="bg-indigo-100 p-2 rounded ">
                                    <VisibilityIcon className={open ? 'text-gray-700' : 'text-gray-700'} />
                                </div>
                            </ListItemIcon>
                            <ListItemText><span className="text-sm text-purple-800 font-bold">View History</span></ListItemText>
                        </ListItem>
                    </div>
                    <ListItem button>
                        <ListItemIcon>
                            <div className="bg-indigo-100 p-2 rounded ">
                                <ExitToAppIcon className={open ? 'text-blue-700' : 'text-blue-700'} />
                            </div>
                        </ListItemIcon>
                        <ListItemText><span className="text-sm text-purple-800 font-bold">Logout</span></ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <main className={clsx(classes.content, 'w-full')}>
                <div className={classes.toolbar} />
                <Typography paragraph>
                    <Banner />
                </Typography>
                <Typography paragraph>
                </Typography>
            </main>
        </div >
    );
}
