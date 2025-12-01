import { Outlet } from "react-router";

const PublicTemplate = () => {
    return (
        <div className="bg-bg-dark font-display text-text-on-dark min-h-screen">
            <Outlet />
        </div>
    );
};

export default PublicTemplate;