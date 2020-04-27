import React from 'react'
import './styles.css'
import { FBComment } from '../FBComment';

export const CSGO = () => (
  <>
    <section className="csgo-top">
      <div className="container">
        <h1 className="text-center">
          Stay home and rush B cyka blyat
        </h1>
        <div className="comments-wrapper">
          
          <div>
          <FBComment
            name={`Patrik “f0rest” Lindberg`}
            date="April 12 at 17:18PM"
            post={`I remember my friends telling me about a new crazy game which every person is on a computer and every person is a soldier, the concept of multiplayer was fairly new. I remember being able to play duke nukem or somehting in a lan of like 3-4 pc but I would never have thought that I was being part of history in the making.
            Counter Strike changed the gaming industry.
            Now , I am 30, married and busy.
            Life goes fast.`}
          />
          </div>
          <div>
          <FBComment
            name={`Filip “NEO” Kubski`}
            date="April 12 at 17:19PM"
            post={`I remember the very first time I ever played CS, it was in December 2001, CS 1.5, the map was cs_assault.
            I saw the Colt and thought it was the AR33 from GoldenEye. It was a small 8 or 10 lan on the shopping mall.`}
            />
            </div>
          <div>
          <FBComment
            name="Nikola “NiKo” Kovac "
            date="April 12 at 17:20PM"
            post="Played 1.3-1.5 when I was 10-11 and never played a match, just dueled my schoolmates. My friend's older brother helped with installing and patching everything, but couldn't be arsed helping with 1.6 and steam, so I had to quit until I figured out how to actually use a PC."
          />
          </div>
          <div>
          <FBComment
            name={`Nicolai “device” Reedtz`}
            date="April 12 at 17:21PM"
            post="used to play 1.6 with other classmates (older than me) in informatics class. i didnt understand dogshit but we all played in LAN servers and was rly fun"
          />
          </div>
          <div>
          <FBComment
            name={`Oleksandr “s1mple” Kostyliev`}
            date="April 12 at 17:17PM"
            post="Getting my first pc... And 1.6... Aaaahh~ So good, partner."
          />
          </div>
        </div>
      </div>
    </section>
    <section className="csgo">
      <div className="container">
        <div className="media">
          <iframe
            title="youtube video"
            src="https://www.youtube-nocookie.com/embed/vx5iIHzlGfg?controls=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  </>
)