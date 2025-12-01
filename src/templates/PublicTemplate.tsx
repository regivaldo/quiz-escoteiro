import { Outlet } from "react-router";

const PublicTemplate = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default PublicTemplate;