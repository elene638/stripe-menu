import React from "react";
import Sublinks from './data'

const AppContext = React.createContext()
const AppProvider = ({children}) => {

    const [sidebarOpen, setSidebarOpen] = React.useState(true)
    const [submenuOpen, setSubmenuOpen] = React.useState(true)

    const openSidebar = () => {
        setSidebarOpen(true)
    }

    const closeSidebar = () => {
        setSidebarOpen(false)
    }

    const openSubmenu = () => {
        setSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setSubmenuOpen(false)
    }

    return (
        <AppContext.Provider
            value={{                
                sidebarOpen,
                submenuOpen,
                openSidebar,
                openSubmenu,
                closeSidebar,
                closeSubmenu
            }}
        >
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(AppContext)
}

export {AppContext, AppProvider}