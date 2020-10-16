import React from "react";
import { 
  Section, 
  Link,
  Image,
  FilmmakingContainer, 
  VideoFlexContainer, 
  VideoContainer, 
  VideoIFrame,
  PhotographyContainer,
  PhotoFlexContainer,
  PhotoContainer
} from "./styles/StyledMedia.js";

const Media = () => (
  <Section>
    <div>
      <h2 style={{color: "white", textAlign: "center"}}>Film Production/Videography</h2>
      <FilmmakingContainer>

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

        <div style={{margin: "3% auto"}} id="link-to-youtube-remove-this-later">
          <Link target="_blank" to="https://www.youtube.com/channel/UCWIqtGDXMRB6xgA-n5aOgoQ">
            View My YouTube Channel?
          </Link>
        </div>
      </FilmmakingContainer>
    </div>
    
    <div>
      <h2 style={{color: "white", textAlign: "center"}}>Photography</h2>
      <PhotographyContainer>
        <PhotoFlexContainer>
          <PhotoContainer><Image src="https://live.staticflickr.com/7462/15734843801_8b735d7643_k.jpg" alt="cocoa beach"/></PhotoContainer>
        </PhotoFlexContainer>

        <PhotoFlexContainer>
          <PhotoContainer>
            <Image src="https://live.staticflickr.com/5610/15550440678_93049faa02_k.jpg" alt="cocoa beach"/>
          </PhotoContainer>
        </PhotoFlexContainer>

        <PhotoFlexContainer>
          <PhotoContainer>
            <Image src="https://live.staticflickr.com/7518/15783004761_a932aa109c_k.jpg" alt="bird"/>
          </PhotoContainer>
        </PhotoFlexContainer>

        <PhotoFlexContainer>
          <PhotoContainer>
            <Image src="https://live.staticflickr.com/65535/50482743256_554ab268b4_b.jpg" alt="Clearwater Sunset"/>
          </PhotoContainer>
        </PhotoFlexContainer>

        <PhotoFlexContainer>
          <PhotoContainer><Image src="https://live.staticflickr.com/7408/16479517816_17c6737f85_b.jpg" alt="Daytona Beach Night"/></PhotoContainer>
        </PhotoFlexContainer>

        <PhotoFlexContainer>
          <PhotoContainer>
            <Image src="https://live.staticflickr.com/65535/50483138422_9954a74cae_b.jpg" alt="Clearwater Beach Sunset"/>
          </PhotoContainer>
        </PhotoFlexContainer>

        <PhotoFlexContainer>
          <PhotoContainer><Image src="https://live.staticflickr.com/65535/50482993091_f5d384330e_b.jpg" alt="Times Square"/></PhotoContainer>
        </PhotoFlexContainer>

        <PhotoFlexContainer>
          <PhotoContainer><Image src="https://live.staticflickr.com/65535/50357280812_a77a477ef9_b.jpg" alt="NY"/></PhotoContainer>
        </PhotoFlexContainer>

        <PhotoFlexContainer>
          <PhotoContainer><Image src="https://live.staticflickr.com/65535/50356417293_5ca11c82e9_b.jpg" alt="Empire State View"/></PhotoContainer>
        </PhotoFlexContainer>
        <div style={{margin: "3% auto"}}>
          <Link target="_blank" to="https://www.flickr.com/photos/127589825@N02/">
            View My Flickr?
          </Link>
        </div>
      </PhotographyContainer>
    </div>
  </Section>
);

export default Media;