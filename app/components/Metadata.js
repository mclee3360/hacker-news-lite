import React from "react"
import PropTypes from "prop-types"
import Moment from "react-moment"
import {NavLink} from "react-router-dom"

export function PostMetadata({id, username, time, comments})
{
    return (
        <div className="metadata">
            {
                username && <span>by&nbsp;
                <NavLink
                    className="link"
                    to={{
                        pathname: "/user",
                        search: `?id=${username}`
                    }}
                >
                    {username}
                </NavLink></span>
            }
            {time && <span>on <Moment unix local format="MMM D, YYYY [at] h:mm a">{time}</Moment></span>}
            {
                id && <span>with&nbsp;
                <NavLink
                    className="link"
                    to={{
                        pathname: "/post",
                        search: `?id=${id}`
                    }}
                >
                    {comments}
                </NavLink> comments</span>
            }
        </div>
    )
}
PostMetadata.propTypes = {
    id: PropTypes.number,
    username: PropTypes.string,
    time: PropTypes.number,
    comments: PropTypes.number
}

export function UserMetadata({time, karma})
{
    return (
        <div className="metadata">
            {time && <span>joined <b><Moment unix local format="MMM D, YYYY">{time}</Moment></b></span>}
            {karma && <span>has <b>{karma}</b> karma</span>}
        </div>
    )
}
UserMetadata.propTypes = {
    time: PropTypes.number,
    karma: PropTypes.number
}
