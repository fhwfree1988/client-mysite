import React from 'react'
const Dashboard = (AuthContext: React.Context<unknown>) => {
    const token = React.useContext(AuthContext);

    return (
        <div>
            {/*<h2>Dashboard (Protected)</h2>
            <div>Authenticated as {token}</div>*/}
        </div>
    );
};

export default Dashboard;