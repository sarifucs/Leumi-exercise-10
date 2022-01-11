import axios from "axios";
import { useEffect, useState } from "react";
import { CommentModel } from "../../Models/CommentModel";
import globals from "../../Services/Globals";
import notify from "../../Services/Notification";
import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.css";

function CommentList(): JSX.Element {

    const [commentList, setCommentList] = useState<CommentModel[]>([]);

    const getComments = async () => {
        await axios.get<CommentModel[]>(globals.urls.comments)
            .then(response => {
                console.log(response.data);
                setCommentList(response.data);
            })
            .catch(err => {
                notify.error(err);
            });
    }

    useEffect(() => {
        getComments();
    }, []);

    return (
        <div className="CommentList">
            {commentList.length > 0 ?
                commentList.map((comment: CommentModel) =>
                    <CommentItem comment={comment} key={comment.id} />
                )
                : <p>No comments to show</p>
            }
        </div>
    );
}

export default CommentList;
