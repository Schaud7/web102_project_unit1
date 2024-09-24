import Event from './Event';
import React from "react";

const Card = () => {
  return (
    
    <div className="Card">
        <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
  <tbody>
        <tr>
            <td className="column"></td>
            <Event 
    event='League of Legends (LoL)' 
    color='black' 
    link='https://www.leagueoflegends.com' 
    image='https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b' 
/>
<Event 
    event='Dota 2' 
    color='black' 
    link='https://www.dota2.com/home' 
    image='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg?t=1724428927' 
/>
<Event 
    event='Valorant' 
    color='black' 
    link='https://playvalorant.com/en-us/' 
    image='https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2021/03/Valorant.png?fit=1200%2C675&ssl=1' 
/>
            <td></td>
          </tr>
          <tr>
            <td className="column"></td>
            <Event 
    event='Fortnite' 
    color='black' 
    link='https://www.fortnite.com/?lang=en-US' 
    image='https://gmedia.playstation.com/is/image/SIEPDC/fortnite-keyart-01-en-30nov23?$facebook$' 
/>
<Event 
    event='PUBG Mobile' 
    color='black' 
    link='https://www.pubgmobile.com/en-US/home.shtml' 
    image='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/pubgmobile_1200x768.jpeg' 
/>
<Event 
    event='Apex Legends' 
    color='black' 
    link='https://www.ea.com/games/apex-legends/shockwave?utm_campaign=APXL_BRD_US_GAM_SRCH_GGL_UA_PMAX&utm_medium=cpc&utm_source=google&utm_term=&gad_source=1&gclid=Cj0KCQjwo8S3BhDeARIsAFRmkOOfF0Hiat2EZRGtHDAc3BxB61KgqInISx3e5m4r_Covjh7H0bV2EF0aAk6KEALw_wcB&gclsrc=aw.ds' 
    image='https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop191x100.628p.jpg' 
/>
            <td></td>
          </tr><tr>
            <td className="column"></td>
            <Event 
    event='Overwatch' 
    color='black' 
    link='https://overwatch.blizzard.com/en-us/' 
    image='https://i.ytimg.com/vi/GKXS_YA9s7E/sddefault.jpg' 
/>
<Event 
    event='Rainbow Six Siege' 
    color='black' 
    link='https://www.ubisoft.com/en-us/game/rainbow-six/siege' 
    image='https://www.kemperlesnik.com/wp-content/uploads/2020/05/rainbow-six-siege-logo-header.-1.jpg' 
/>
<Event 
    event='Call of Duty' 
    color='black' 
    link='https://www.callofduty.com/' 
    image='https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/ac505d57a46e24dd96712263d89a150cb443af288c025ff2.jpg' 
/>
            <td></td>
          </tr><tr>
            <td className="column"></td>
            <Event 
    event='Counter-Strike: Global Offensive (CS:GO)' 
    color='black' 
    link='https://blog.counter-strike.net/' 
    image='https://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6' 
/>
            <td></td>
          </tr>
          
  </tbody>    
</table>
    
    </div>
  )
}

export default Card;
