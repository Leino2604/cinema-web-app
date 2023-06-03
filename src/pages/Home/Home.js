// import React from 'react';

// function Home() {
//     return (
//         <div className='homepage'>
//         <h1>Home</h1>
//         </div>
//     );
// }

// export default Home;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  // const onRegisterTextClick = useCallback(() => {
  //   navigate("/sign-up-tix-id");
  // }, [navigate]);

  const onSpidermanNoWayHomeClick = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  const onSpidermanNoWayHome1Click = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <div className={styles.tixIdNews}>TIX ID News</div>
      <div className={styles.akanDatang}>Coming Soon</div>
      <div className={styles.beritaTentangDunia}>
        News about the latest hits for you!
      </div>
      <div className={styles.tungguKehadirannyaDi}>
        Your favorite movies are now showing at TIX!
      </div>
      <div className={styles.comingSoonFilm}>
        <img className={styles.pictureIcon} alt="" src="/picture10@2x.png" />
        <div className={styles.comingSoonMovieDescription}>
          <div className={styles.theMatrixResurrections}>
            The Matrix: Resurrections
          </div>
          <div className={styles.allBadge}>
            <div className={styles.badge}>
              <b className={styles.xxi}>XXI</b>
            </div>
            <div className={styles.badge1}>
              <b className={styles.xxi}>CGV</b>
            </div>
            <div>
              <b className={styles.xxi}>CINÉPOLIS</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.comingSoonFilm1}>
        <img className={styles.pictureIcon} alt="" src="/picture11@2x.png" />
        <div className={styles.comingSoonMovieDescription}>
          <div className={styles.theMatrixResurrections}>
            Resident Evil: Welcome to Raccoon City
          </div>
          <div className={styles.allBadge}>
            <div className={styles.badge}>
              <b className={styles.xxi}>XXI</b>
            </div>
            <div className={styles.badge1}>
              <b className={styles.xxi}>CGV</b>
            </div>
            <div className={styles.badge4}>
              <b className={styles.xxi}>CINÉPOLIS</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.comingSoonFilm2}>
        <img className={styles.pictureIcon} alt="" src="/picture12@2x.png" />
        <div className={styles.comingSoonMovieDescription}>
          <div className={styles.theMatrixResurrections}>
            Sword Art Online: Progressive - Aria of a Starless Night
          </div>
          <div className={styles.allBadge}>
            <div className={styles.badge}>
              <b className={styles.xxi}>XXI</b>
            </div>
            <div className={styles.badge1}>
              <b className={styles.xxi}>CGV</b>
            </div>
            <div className={styles.badge4}>
              <b className={styles.xxi}>CINÉPOLIS</b>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.beforeLogin}>
        <div className={styles.tixId}>
          <img className={styles.tixId1} alt="" src="/tix-id-1@2x.png" />
        </div>
        <div className={styles.homeParent}>
          <div className={styles.home}>
            <div className={styles.button}>Home</div>
          </div>
          <div className={styles.home1}>
            <div className={styles.button}>My Tickets</div>
          </div>
          <div className={styles.home1}>
            <div className={styles.button}>TIX ID News</div>
          </div>
          <div className={styles.frameChild} />
          <img className={styles.bellIcon} alt="" src="/32--bell3.svg" />
          <div className={styles.register} onClick={onRegisterTextClick}>
            Register
          </div>
          <div className={styles.button3}>
            <div className={styles.button4}>Log in</div>
          </div>
        </div>
      </div> */}
      <div className={styles.advertisment}>
        <div className={styles.content}>
          <div className={styles.poster1}>
            <div className={styles.poster1Child} />
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
            <b className={styles.sewabeliFilmDan}>
              Buy movie tickets and get a free popcorn!
            </b>
            <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
            <div className={styles.wwwtixid}>www.tix.id</div>
            <div className={styles.tixId2}>tix_id</div>
            <img className={styles.mdiwebIcon} alt="" src="/mdiweb.svg" />
            <img
              className={styles.akarIconsinstagramFill}
              alt=""
              src="/akariconsinstagramfill.svg"
            />
            <div className={styles.tixId3}>
              <img className={styles.tixId1} alt="" src="/tix-id-12@2x.png" />
            </div>
          </div>
          <div className={styles.poster3}>
            <div className={styles.groupParent}>
              <img
                className={styles.groupChild}
                alt=""
                src="/group-29@2x.png"
              />
              <b className={styles.pesanTiketFilm}>
              Book Movie Tickets at TIX ID
              </b>
              <div className={styles.bebasantri}>#FreeQueue</div>
            </div>
          </div>
          <div className={styles.poster2}>
            <div className={styles.poster2Child} />
            <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
            <div className={styles.downloadSekarang}>Download Sekarang!</div>
            <div className={styles.poster2Item} />
            <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
            <div className={styles.rectangleParent}>
              <div className={styles.groupItem} />
              <img
                className={styles.image6Icon}
                alt=""
                src="/image-61@2x.png"
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.poster1Child} />
            <img className={styles.image7Icon1} alt="" src="/image-7@2x.png" />
            <b className={styles.sewabeliFilmDan}>
              Buy ticket for upcoming hits now!
            </b>
            <img className={styles.image3Icon1} alt="" src="/image-3@2x.png" />
            <div className={styles.wwwtixid}>www.tix.id</div>
            <div className={styles.tixId2}>tix_id</div>
            <img className={styles.mdiwebIcon} alt="" src="/mdiweb.svg" />
            <img
              className={styles.akarIconsinstagramFill}
              alt=""
              src="/akariconsinstagramfill.svg"
            />
            <div className={styles.tixId3}>
              <img className={styles.tixId1} alt="" src="/tix-id-12@2x.png" />
            </div>
          </div>
        </div>
        <img
          className={styles.carouselScrollIcon}
          alt=""
          src="/carousel-scroll.svg"
        />
        <img
          className={styles.clickButtonIcon}
          alt=""
          src="/click-button.svg"
        />
      </div>
      {/* <div className={styles.footer}>
        <div className={styles.footersDescription}>
          <div className={styles.footerContent}>
            <div className={styles.button}>Company</div>
            <div className={styles.content1}>
              <div className={styles.home1}>
                <div className={styles.button5}>Contact us</div>
              </div>
              <div className={styles.home1}>
                <div className={styles.button5}>About</div>
              </div>
              <div className={styles.home1}>
                <div className={styles.button5}>Partner</div>
              </div>
            </div>
          </div>
          <div className={styles.footerContent}>
            <div className={styles.button}>About</div>
            <div className={styles.content1}>
              <div className={styles.home1}>
                <div className={styles.button5}>TIX ID News</div>
              </div>
              <div className={styles.home1}>
                <div className={styles.button5}>Cinema</div>
              </div>
              <div className={styles.home1}>
                <div className={styles.button5}>My Tickets</div>
              </div>
              <div className={styles.home1}>
                <div className={styles.button5}>Payment</div>
              </div>
              <div className={styles.home1}>
                <div className={styles.button5}>Install</div>
              </div>
            </div>
          </div>
          <div className={styles.footerContent}>
            <div className={styles.button}>Support</div>
            <div className={styles.content1}>
              <div className={styles.home1}>
                <div className={styles.button5}>Help Center</div>
              </div>
              <div className={styles.home1}>
                <div className={styles.button5}>Privacy Policy</div>
              </div>
              <div className={styles.home1}>
                <div className={styles.button5}>FAQ</div>
              </div>
              <div className={styles.home1}>
                <div className={styles.button5}>Terms and Conditions</div>
              </div>
              <div className={styles.home1}>
                <div className={styles.button5}>Update Covid-19</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialMediaAndDownloadApps}>
          <div className={styles.downloadTixIdParent}>
            <div className={styles.button}>Download TIX ID</div>
            <div className={styles.googlePlayParent}>
              <img
                className={styles.googlePlayIcon}
                alt=""
                src="/google-play@2x.png"
              />
              <div className={styles.appStore}>
                <div className={styles.appStoreChild} />
                <div className={styles.image6Wrapper}>
                  <img
                    className={styles.googlePlayIcon}
                    alt=""
                    src="/image-6@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.followSocialMediaParent}>
            <div className={styles.button}>Follow Social Media</div>
            <div className={styles.instagramParent}>
              <img
                className={styles.instagramIcon}
                alt=""
                src="/24--instagram.svg"
              />
              <img
                className={styles.instagramIcon}
                alt=""
                src="/24--twitter.svg"
              />
              <img
                className={styles.instagramIcon}
                alt=""
                src="/24--facebook.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.tixId6}>
          <img className={styles.tixId13} alt="" src="/tix-id-11@2x.png" />
        </div>
        <div className={styles.tixId7}>2023 TIX ID - All rights reserved.</div>
        <div className={styles.divider} />
      </div> */}
      <div className={styles.lihatSemua}>View All</div>
      <div className={styles.lihatSemua1}>View All</div>
      <div className={styles.movieSelection}>
        <div className={styles.movieAndBadgeFrame}>
          <div
            className={styles.spidermanNoWayHome}
            onClick={onSpidermanNoWayHomeClick}
          >
            <img
              className={styles.spidermanNoWayHomeChild}
              alt=""
              src="/group-17@2x.png"
            />
            <div className={styles.titleAndBadge}>
              <b className={styles.spiderManNoWay}>Spider-Man: No Way Home</b>
              <div className={styles.badge8}>
                <div className={styles.badge}>
                  <b className={styles.xxi}>XXI</b>
                </div>
                <div className={styles.badge1}>
                  <b className={styles.xxi}>CGV</b>
                </div>
                <div className={styles.badge4}>
                  <b className={styles.xxi}>CINÉPOLIS</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.yowisBenFinale}>
            <img
              className={styles.spidermanNoWayHomeChild}
              alt=""
              src="/group-18@2x.png"
            />
            <div className={styles.titleAndBadge1}>
              <b className={styles.yowisBenFinale1}>Yowis Ben Finale</b>
              <div className={styles.badge8}>
                <div className={styles.badge}>
                  <b className={styles.xxi}>XXI</b>
                </div>
                <div className={styles.badge1}>
                  <b className={styles.xxi}>CGV</b>
                </div>
                <div className={styles.badge4}>
                  <b className={styles.xxi}>CINÉPOLIS</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ghostbustersAfterlife}>
            <img
              className={styles.spidermanNoWayHomeChild}
              alt=""
              src="/group-181@2x.png"
            />
            <div className={styles.titleAndBadge1}>
              <b className={styles.yowisBenFinale1}>Ghostbusters: Afterlife</b>
              <div className={styles.badge8}>
                <div className={styles.badge}>
                  <b className={styles.xxi}>XXI</b>
                </div>
                <div className={styles.badge1}>
                  <b className={styles.xxi}>CGV</b>
                </div>
                <div className={styles.badge4}>
                  <b className={styles.xxi}>CINÉPOLIS</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.houseOfGucci}>
            <img
              className={styles.spidermanNoWayHomeChild}
              alt=""
              src="/group-182@2x.png"
            />
            <div className={styles.titleAndBadge1}>
              <b className={styles.yowisBenFinale1}>House of Gucci</b>
              <div className={styles.badge8}>
                <div className={styles.badge}>
                  <b className={styles.xxi}>XXI</b>
                </div>
                <div className={styles.badge1}>
                  <b className={styles.xxi}>CGV</b>
                </div>
                <div className={styles.badge4}>
                  <b className={styles.xxi}>CINÉPOLIS</b>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.spidermanNoWayHome1}
            onClick={onSpidermanNoWayHome1Click}
          >
            <img
              className={styles.spidermanNoWayHomeChild}
              alt=""
              src="/group-17@2x.png"
            />
            <div className={styles.titleAndBadge}>
              <b className={styles.spiderManNoWay}>Spider-Man: No Way Home</b>
              <div className={styles.badge8}>
                <div className={styles.badge}>
                  <b className={styles.xxi}>XXI</b>
                </div>
                <div className={styles.badge1}>
                  <b className={styles.xxi}>CGV</b>
                </div>
                <div className={styles.badge4}>
                  <b className={styles.xxi}>CINÉPOLIS</b>
                </div>
              </div>
            </div>
            <div className={styles.number}>
              <b className={styles.b}>1</b>
            </div>
          </div>
        </div>
        <img
          className={styles.clickButtonIcon1}
          alt=""
          src="/click-button1.svg"
        />
      </div>
      <div className={styles.tixIdNewsCardParent}>
        <div className={styles.tixIdNewsCard}>
          <img
            className={styles.tixIdNews1}
            alt=""
            src="/tix-id-news3@2x.png"
          />
          <div className={styles.titleAndTag}>
            <div className={styles.newsTag}>
              <div className={styles.xxi}>Spotlight</div>
            </div>
            <div className={styles.titleArticleAndDate}>
              <div className={styles.theMatrixResurrections}>
                Spider-Man: No Way Home trailer revealed!.
              </div>
              <div className={styles.nov2021}>08 Nov 2021 | TIX ID</div>
            </div>
          </div>
        </div>
        <div className={styles.tixIdNewsCard}>
          <img
            className={styles.tixIdNews1}
            alt=""
            src="/tix-id-news4@2x.png"
          />
          <div className={styles.titleAndTag}>
            <div className={styles.newsTag}>
              <div className={styles.xxi}>Spotlight</div>
            </div>
            <div className={styles.titleArticleAndDate}>
              <div
                className={styles.theMatrixResurrections}
              >{`Yowis Ben Finale - Facts You Need to Know Before Watching!.`}</div>
              <div className={styles.nov2021}>09 Nov 2021 | TIX ID</div>
            </div>
          </div>
        </div>
        <div className={styles.tixIdNewsCard}>
          <img className={styles.tixIdNews1} alt="" src="/tix-id-news@2x.png" />
          <div className={styles.titleAndTag}>
            <div className={styles.newsTag}>
              <div className={styles.xxi}>News</div>
            </div>
            <div className={styles.titleArticleAndDate}>
              <div className={styles.theMatrixResurrections}>
                Ghostbusters: Afterlife - Present Featuring New Ghost Variations
              </div>
              <div className={styles.nov2021}>15 Nov 2021 | TIX ID</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
