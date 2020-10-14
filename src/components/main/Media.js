import React from "react";
import { Link } from "gatsby";
import { Section, FilmmakingContainer, VideoFlexContainer, VideoContainer, VideoIFrame } from "./styles/StyledMedia.js";

const Media = () => (
  <Section>
    <div style={{width: "100%"}}>
      <h2 style={{color: "white", textAlign: "center"}}>Film Production/Videography</h2>
      <FilmmakingContainer>

        <VideoFlexContainer>
          <VideoContainer>
            <VideoIFrame 
              title="13 Feet Deep"
              width="460" 
              height="315" 
              src="https://www.youtube.com/embed/tJMiJNGFyto" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            />
          </VideoContainer>
        </VideoFlexContainer>

        <VideoFlexContainer>
          <VideoContainer>
            <VideoIFrame 
              title="Removing The Hook"
              width="460" 
              height="315" 
              src="https://www.youtube.com/embed/YsiBqSazX1w" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            />
          </VideoContainer>
        </VideoFlexContainer>

        <VideoFlexContainer>
          <VideoContainer>
            <VideoIFrame 
              title="Doritos: Bite On This"
              width="460" 
              height="315" 
              src="https://www.youtube.com/embed/UQBw3o0PZcY" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            />
          </VideoContainer>
        </VideoFlexContainer>

        <VideoFlexContainer>
          <VideoContainer>
            <VideoIFrame 
              title="Death Game" 
              width="460" 
              height="315" 
              src="https://www.youtube.com/embed/6aHThT7tjlg" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            />
          </VideoContainer>
        </VideoFlexContainer>

        <VideoFlexContainer>
          <VideoContainer>
            <VideoIFrame 
              title="Plasmids By Ryan Industries"
              width="460" 
              height="315" 
              src="https://www.youtube.com/embed/_6XZJMRpszs" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            />
          </VideoContainer>
        </VideoFlexContainer>

        <VideoFlexContainer>
          <VideoContainer>
            <VideoIFrame 
              title="Sweet Summer Knight Mini Series" 
              width="460" 
              height="315" 
              src="https://www.youtube.com/embed/ck66Prkdprc" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            />
          </VideoContainer>
        </VideoFlexContainer>

        <VideoFlexContainer>
          <VideoContainer>
            <VideoIFrame 
              title="Alissa & Austin Wedding Film"
              src="https://player.vimeo.com/video/247823187" 
              width="460" 
              height="315" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            />
          </VideoContainer>
        </VideoFlexContainer>

        <VideoFlexContainer>
          <VideoContainer>
            <VideoIFrame 
              title="Michelle and Will Wedding Film" 
              src="https://player.vimeo.com/video/275519651" 
              width="460" 
              height="315" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            />
          </VideoContainer>
        </VideoFlexContainer>

        <VideoFlexContainer>
          <VideoContainer>
            <VideoIFrame 
              title="Anjelica and Brent Wedding Film" 
              src="https://player.vimeo.com/video/266352313" 
              width="460" 
              height="315" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            />
          </VideoContainer>
        </VideoFlexContainer>

        <div id="link-to-youtube-remove-this-later">
          <Link to="https://www.youtube.com/channel/UCWIqtGDXMRB6xgA-n5aOgoQ">
            View My YouTube Channel?
          </Link>
        </div>
      </FilmmakingContainer>
    </div>
    
    <div>
      <h2>Photography</h2>
      <div style={{display: "flex"}}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div id="link-to-flickr-remove-this-later"></div>
      </div>
    </div>
  </Section>
);

export default Media;