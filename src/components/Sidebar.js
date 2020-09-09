import React from 'react'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const Sidebar = () => {
    return (
      <div className="sidebar">
        <SidebarRow
          src="https://scontent.ftpe1-1.fna.fbcdn.net/v/t1.0-9/27750654_196100737654050_83083625155525200_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=poAjNp430jkAX_yBG3g&_nc_ht=scontent.ftpe1-1.fna&oh=fbcc0254c3c9da4e51aebc3a1015a1cf&oe=5F7B6505"
          alt="name"
          title="陳泓棣"
        />
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="COVID-19 Information Center"
        />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
      </div>
    );
}

export default Sidebar;
