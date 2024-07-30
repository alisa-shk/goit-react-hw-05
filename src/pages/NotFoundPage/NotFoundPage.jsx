import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <p>Sorry, your page is not found!</p>
            <Link to="/">Home</Link>
        </div>
    )
};

export default NotFoundPage;