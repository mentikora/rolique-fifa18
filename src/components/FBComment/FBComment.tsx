import React from 'react'
import './styles.css'

type Props = {
  avatar?: string;
  name: string;
  status?: string;
  date: string;
  post: string;
  hash?: string;
  image?: any;
  isLiked?: boolean;
  controls?: boolean;
  onLikeClick?: any;
  onCommentClick?: any;
}

export const FBComment: React.FunctionComponent<Props> = ({
  controls = false,
  avatar,
  name,
  status,
  date,
  post,
  hash,
  image,
  isLiked,
  onLikeClick,
  onCommentClick,
}) => {
  return (
    <div className="fb-post">
      <div className="fb-post__head">
        <div className="fb-post__avatar" style={{backgroundImage: `url(${avatar || ''})`}}/>
        <div className="flex">
          <div>
            <span className="fb-post__name">
              {name}
            </span>
            {status && <span className="fb-post__status">
              {status}
            </span>}
          </div>
          <span className="fb-post__date">
            {date}
          </span>
        </div>
      </div>
      <div className="fb-post__body">
        <p>
          {post}
          <span className="fb-post__hashtags">
            {hash}
          </span>
        </p>
      </div>
      {image && <div className="fb-post__image">
        <img src={image} alt="stay calm" />
      </div>}
      {isLiked && <div className="fb-post__likes">
        <span>You, Pavlo Zibrov and 100500 others</span>
      </div>}
      {controls && <div className="fb-post__footer">
        <button type="button" onClick={onLikeClick}>
          Like
        </button>
        <button type="button" onClick={onCommentClick}>
          Comment
        </button>
      </div>
      }
    </div>
  )
};