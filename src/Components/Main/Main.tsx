import CommentList from "../CommentList/CommentList";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main bg-blue-100">
            <CommentList />
        </div>
    );
}

export default Main;
