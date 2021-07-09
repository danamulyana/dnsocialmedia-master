import './post.css'
import { MoreVert } from '@material-ui/icons'

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/3.jpeg" alt="" className="postProfileImg" />
                        <span className="postUsername">safak koceali</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">hey! its my first post</span>
                    <img src="/assets/post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">32 peopel like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">8 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
