import "./CommentItem.css";
import { BsPinAngle } from "react-icons/bs";
import { CommentModel } from "../../Models/CommentModel";

interface CommentItemProps{
    comment: CommentModel;
}

function CommentItem(props: CommentItemProps): JSX.Element {
    return (
        <div className="CommentItem">
            <div id="container" className="card">
                <BsPinAngle className="icon text-yellow-600"/>
                <p className="text-2xl mb-3.5 text-yellow-900">{props.comment.name}</p>
                <p className="mb-3.5">{props.comment.body}</p>
                <p className="text-yellow-900 text-xl">{props.comment.email}</p>
                {/* <p id="name">John Doe</p>
                <p id="exp">Web Developer @ Slackhouse.io</p> */}
            </div>
        </div>
    );
}

export default CommentItem;
