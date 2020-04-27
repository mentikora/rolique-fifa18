import React from 'react'
import './styles.css'
import stay from './images/stayCalm.gif'
import { FBComment } from '../FBComment';

export const Fifa = () => {
  const [like, showLike] = React.useState(false);

  const onLikeClick = () => showLike(!like);
  const onCommentClick = () => alert('Our junior developer Mark is currently developing this feature. Sorry');

  const t = `
    Due to the continued uncertainty surrounding COVID-19 and the precautions being taken by authorities worldwide to manage this pandemic, we have come to the difficult decision to cancel the 6th Fifa Rolique Championship this May.
    This doesn't mean what we'll not have summer championship.
    Stay healthy and see you soon.
  `;

  return (
    <>
      <section className="fifa-section">
        <h1>
          <span>
          #stay
          </span>
          {/* <br/> */}
          <sup>home</sup>
        </h1>
        <a href="#info" className="button" type="button">
          read more
        </a>
      </section>
      <section id="info" className="info-section">

        <FBComment
          controls={true}
          avatar={`https://scontent.flwo3-1.fna.fbcdn.net/v/t1.0-1/p200x200/44345703_2248659785346519_4957499459203235840_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_oc=AQlaXgv-og6zXcVhrn2RkqfBc4i92c9S8ozT0rBkRnf7UaUdzPOH_zzXMWpmV0b8Gm4&_nc_ht=scontent.flwo3-1.fna&_nc_tp=6&oh=a3ef2f310dbd7eed187cb8aa79fdf77f&oe=5ECCC0FE`}
          name="Rolique eSport"
          status="is feeling hopeful."
          date="April 27 at 11:00AM"
          post={t}
          hash="#rolique #rolique_rocks #rolique_team"
          image={stay}
          isLiked={like}
          onLikeClick={onLikeClick}
          onCommentClick={onCommentClick}
        />

      </section>
    </>
  )
};
