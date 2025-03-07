import { createBrowserRouter, Navigate } from 'react-router-dom';

// PROMOTION PAGES

import Index from '../Layouts/Promotion/Index.jsx';
import HomePromotion from "../Pages/Promotion/Home/Home.jsx";

import Pricing from "../Pages/Promotion/Pricing/Pricing.jsx";
import Contact from '../Pages/Promotion/Contact/Contact.jsx';
import Features from '../Pages/Promotion/Features/Features.jsx';

// ADMIN DASHBOARD PAGES

import HomeAdmin from "../Pages/Dashboard/Admin/Home/Home.jsx";

import ManagerList from "../Pages/Dashboard/Admin/Managers/ManagerList.jsx";
import AddManager from "../Pages/Dashboard/Admin/Managers/AddManager.jsx";

import CustomerList from "../Pages/Dashboard/Admin/Customers/CustomerList.jsx";

import EditPrices from "../Pages/Dashboard/Admin/Prices/EditPrices.jsx";

import RestaurantListAdmin from "../Pages/Dashboard/Admin/Restaurants/RestaurantList.jsx";
import RestaurantAnalysis from "../Pages/Dashboard/Admin/Restaurants/RestaurantAnalysis.jsx";

import CuisineList from "../Pages/Dashboard/Admin/Cuisines/CuisineList.jsx";

import ReservationAnalysis from "../Pages/Dashboard/Admin/Reservations/ReservationAnalysis.jsx";

import LocationList from "../Pages/Dashboard/Admin/Location/LocationList.jsx";
import LocationAnalysis from "../Pages/Dashboard/Admin/Location/LocationAnalysis.jsx";

import Revenue from "../Pages/Dashboard/Admin/Revenue/Revenue.jsx";

// MANAGER DASHBOARD PAGES

import HomeManager from "../Pages/Dashboard/Manager/Home/Home.jsx";

import RestaurantListManager from "../Pages/Dashboard/Manager/RestaurantList/RestaurantList.jsx";
import RestaurantRequests from "../Pages/Dashboard/Manager/RestaurantRequest/RestaurantRequests.jsx";
import UpdateRestaurantManager from "../Pages/Dashboard/Manager/UpdateRestaurant/UpdateRestaurant.jsx";
import ApproveRequest from '../Pages/Dashboard/Manager/RestaurantRequest/ApproveRequest.jsx';
import DenyRequest from '../Pages/Dashboard/Manager/RestaurantRequest/DenyRequest.jsx';

// RESTAURANT OWNER DASHBOARD PAGES

import HomeRestaurantOwner from "../Pages/Dashboard/Restaurant-Owner/Home/Home.jsx";

import UpdateRestaurantOwner from "../Pages/Dashboard/Restaurant-Owner/Restaurant/UpdateRestaurant.jsx";
import TableInfo from "../Pages/Dashboard/Restaurant-Owner/Table/TableInfo.jsx";
import CreateSessions from "../Pages/Dashboard/Restaurant-Owner/Session/CreateSessions.jsx";

import ReservationRequest from "../Pages/Dashboard/Restaurant-Owner/ReservationRequest/ReservationRequests.jsx";

import CalendarViewReservations from "../Pages/Dashboard/Restaurant-Owner/Reservations/CalendarView.jsx";
import ListViewReservations from "../Pages/Dashboard/Restaurant-Owner/Reservations/ListView.jsx";
import UpdatePersonelInfo from "../Pages/Dashboard/Restaurant-Owner/UpdatePersonel/UpdatePersonel.jsx";
import YourPlan from "../Pages/Dashboard/Restaurant-Owner/YourPlan/YourPlan.jsx";

import Reserve from "../Pages/ExternalCustomer/Reserve.jsx";
import ReserveSecond from "../Pages/ExternalCustomer/ReserveSecond.jsx";

import Template from  '../Layouts/Dashboard/Template.jsx';

import ExternalCustomer from "../Layouts/ExternalCustomer/ExternalTemplate.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children: [
            {
                path: "/",
                element: <HomePromotion />
            },
            {
                path: "home",
                element: <HomePromotion />
            },
            {
                path: "pricing",
                element: <Pricing />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "features",
                element: <Features />
            },
        ]
    },
    {
        path: '/index',
        element: <Index />
    },
    {
        path: "/admin",
        element: <Template />,
        children: [
            {
                path: "",
                element: <Navigate to="home" replace />
            },
            {
                path: "home",
                element: <HomeAdmin/>
            },
            {
                path: "cuisines",
                children: [
                    {
                        path: "cuisine-list",
                        element: <CuisineList/>
                    }
                ]
            },
            {
                path: "managers",
                children: [
                    {
                        path: "manager-list",
                        element: <ManagerList/>
                    },
                    {
                        path: "add-manager",
                        element: <AddManager/>
                    }
                ]
            },
            {
                path: "edit-prices",
                element: <EditPrices/>
            },
            {
                path: "locations",
                children: [
                    {
                        path: "location-list",
                        element: <LocationList/>
                    },
                    {
                        path: "location-analysis",
                        element: <LocationAnalysis/>
                    }
                ]
            },
            {
                path: "reservations",
                children : [
                    {
                        path: "reservation-analysis",
                        element: <ReservationAnalysis/>
                    }
                ]
            },
            {
                path: "restaurants",
                children: [
                    {
                        path: "restaurant-list",
                        element: <RestaurantListAdmin/>
                    },
                    {
                        path: "restaurant-analysis",
                        element: <RestaurantAnalysis/>
                    }
                ]
            },
            {
                path: "revenue",
                element: <Revenue/>
            },
            {
                path: "customer-list",
                element: <CustomerList />
            }
        ]
    },
    {
        path: "/manager",
        element: <Template />,
        children: [
            {
                path: "",
                element: <Navigate to="home" replace />
            },
            {
                path: "home",
                element: <HomeManager/>
            },
            {
                path: "restaurant-list",
                element: <RestaurantListManager/>
            },
            {
                path: "restaurant-requests",
                element: <RestaurantRequests/>
            },
            {
                path: "update-restaurant",
                element: <UpdateRestaurantManager/>
            },
            {
                path: "approve-request",
                element: <ApproveRequest/>
            },
            {
                path: "deny-request",
                element: <DenyRequest/>
            }
        ]
    },
    {
        path: "/restaurant-owner",
        element: <Template />,
        children: [
            {
                path: "",
                element: <Navigate to="home" replace />
            },
            {
                path: "home",
                element: <HomeRestaurantOwner/>
            },
            {
                path: "update-restaurant",
                element: <UpdateRestaurantOwner/>
            },
            {
                path: "table-info",
                element: <TableInfo/>
            },
            {
                path: "create-sessions",
                element: <CreateSessions/>
            },
            {
                path: "reservation-requests",
                element: <ReservationRequest/>
            },
            {
                path: "reservations",
                children: [
                    {
                        path: "calendar-view",
                        element: <CalendarViewReservations/>
                    },
                    {
                        path: "list-view",
                        element: <ListViewReservations/>
                    }
                ]
            },
            {
                path: "update-personel-info",
                element: <UpdatePersonelInfo/>
            },
            {
                path: "your-plan",
                element: <YourPlan/>
            }
        ]
    },
    {
        path: "reserve",
        element: <ExternalCustomer />,
        children: [
            {
                path: "",
                element: <Reserve/>
            }
        ]
    },
    {
        path: "reserve-second",
        element: <ExternalCustomer />,
        children: [
            {
                path: "",
                element: <ReserveSecond />
            }
        ]
    }
]);

export default router;