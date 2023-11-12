import React, { useEffect } from "react";

const RedirectToExternalUrl = ({ url }) => {
    useEffect(() => {
        window.location.href = url;
    }, [url]);

    return <div>Redirecting...</div>;
};

export default RedirectToExternalUrl;
