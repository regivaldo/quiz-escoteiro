import { Outlet } from "react-router";

const PublicTemplate = () => {
    return (
        <div className="bg-background-dark font-display text-text-dark min-h-screen">
            <Outlet />
        </div>
    );
};

export default PublicTemplate;