// library
import React, {useState} from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";

// context
import ProjectContext from './ProjectContext';
import SideNavBarContext from './SideNavBarContext';
import RouterContext from './RouterContext';
import CurrentTitleContext from './CurrentTitleContext';

// dummy data
import dummyData from './dummyData';

const Store = ({ children }) => {
    const history = createBrowserHistory();
    const [ sideNavBarStatus, setSideNavBarStatus ] = useState(false);
    const [ currentTitle, setCurrentTitle ] = useState("");
    const [ project, setProject ] = useState([]);

    return (
        <ProjectContext.Provider value={[ project, setProject ]}>
            <SideNavBarContext.Provider value={[ sideNavBarStatus, setSideNavBarStatus ]}>
                <CurrentTitleContext.Provider value={[ currentTitle, setCurrentTitle ]}>
                    <Router history={history} key={Math.random()}> {/* passing Router a random key seems to work hot reload issue */}
                        <RouterContext.Provider value={[ history ]}>
                            {children}
                        </RouterContext.Provider>
                    </Router>
                </CurrentTitleContext.Provider>
            </SideNavBarContext.Provider>
        </ProjectContext.Provider>
    );
};

export default Store;
