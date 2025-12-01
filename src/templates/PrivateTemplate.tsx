import { Outlet } from "react-router";

const PrivateTemplate = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default PrivateTemplate;
