import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faBookBookmark,
  faEllipsis,
  faEnvelope,
  faFeatherAlt,
  faHashtag,
  faHome,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  function icons(icon, text) {
    return (
      <div className="cursor-pointer flex items-center p-3 rounded-full hover:bg-gray-700 transition duration-200 ">
        <FontAwesomeIcon
          icon={icon}
          style={{ width: "24px", height: "24px" }}
          className="mr-4"
        />
        <span className="text-xl hidden xl:inline">{text}</span>
      </div>
    );
  }

  return (
    <div className="w-52 sticky top-0 px-2 h-screen xl:w-64">
      <FontAwesomeIcon
        icon={faTwitter}
        style={{ width: "32px", height: "32px" }} // Ajuste o tamanho do ícone diretamente aqui
        className="text-blue-500 m-4"
      />

      <nav>
        {icons(faHome, "Home")}
        {icons(faHashtag, "Explore")}
        {icons(faBell, "Notifications")}
        {icons(faEnvelope, "Messages")}
        {icons(faBookBookmark, "Bookmarks")}
        {icons(faUserFriends, "Communities")}
        {icons(faTwitter, "Premium")}
        {icons(faUser, "Profile")}
        {icons(faEllipsis, "More")}
      </nav>
      <button className="hidden xl:inline cursor-pointer font-bold rounded-full bg-blue-500 px-4 py-3 mt-4 w-full hover:bg-blue-400 transition duration-200">
        <span className="hidden xl:inline">Twitter</span>
      </button>
      <FontAwesomeIcon
        icon={faFeatherAlt}
        className="text-blue-500 m-4 inline xl:hidden"
        style={{ width: "32px", height: "32px" }}
      />
    </div>
  );
}
