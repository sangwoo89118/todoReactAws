import React, {useState} from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";
import ProjectContext from './ProjectContext';
import SideNavBarContext from './SideNavBarContext';
import RouterContext from './RouterContext';

const Store = ({children}) => {
    const history = createBrowserHistory();
    const [sideNavBarStatus, setSideNavBarStatus] = useState(false);
    const [project, setProject] = useState(
        [
            {
                id: 1, 
                title: "GIT America", 
                members: 
                    [
                        {
                            id: 1, 
                            name: "@jiho",
                            email: "jiholee@gitamerica.com",                    
                        },
                        {
                            id: 2, 
                            name: "@kammi75",
                            email: "kammi75@gitamerica.com",                    
                        },
                        {
                            id: 3, 
                            name: "@erick",
                            email: "erick@gitamerica.com",                    
                        },
                        {
                            id: 4, 
                            name: "@bangoole",
                            email: "bangoole@gitamerica.com",                    
                        },
                        {
                            id: 5, 
                            name: "@sangwoo",
                            email: "sangwoo@gitamerica.com",                    
                        },
                        {
                            id: 6, 
                            name: "@philip",
                            email: "philipe@gitamerica.com",                    
                        },
                    ]
            },
            {
                id: 2, 
                title: "Auto Ever", 
                members: 
                    [
                        {
                            id: 7, 
                            name: "@pardha",
                            email: "pardha@autoever.com",                    
                        },
                        {
                            id: 8, 
                            name: "@kiran",
                            email: "kiran@autoever.com",                    
                        },
                        {
                            id: 9, 
                            name: "@himanshu",
                            email: "himanshu@autoever.com",                    
                        },
                    ]
            },
            {
                id: 3, 
                title: "HMA", 
                members: 
                    [
                        {
                            id: 10, 
                            name: "@deando",
                            email: "deando@hmausa.com",                    
                        },
                        {
                            id: 11, 
                            name: "@peter",
                            email: "peter@hmausa.com",                    
                        },
                        {
                            id: 12, 
                            name: "@mike",
                            email: "mike@hmausa.com",                    
                        },
                        {
                            id: 13, 
                            name: "@jeff",
                            email: "jeff@hmausa.com",                    
                        },
                    ]
            },
            {
                id: 4, 
                title: "KMA", 
                members: 
                    [
                        {
                            id: 14, 
                            name: "@carlos",
                            email: "carlos@gitamerica.com",                    
                        },
                        {
                            id: 15, 
                            name: "@lewis",
                            email: "lewis@gitamerica.com",                    
                        },
                        {
                            id: 16, 
                            name: "@sonny",
                            email: "sonny@gitamerica.com",                    
                        },
                    ]
            },
        ]
    );

    return (
        <ProjectContext.Provider value={[project, setProject]}>
            <SideNavBarContext.Provider value={[sideNavBarStatus, setSideNavBarStatus]}>
                <Router history={history}>
                    <RouterContext.Provider value={[history]}>
                        {children}
                    </RouterContext.Provider>
                </Router>
            </SideNavBarContext.Provider>
        </ProjectContext.Provider>
    );
};

export default Store;
