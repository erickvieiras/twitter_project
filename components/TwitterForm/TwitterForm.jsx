import {
  faCalendarAlt,
  faChartBar,
  faFilm,
  faImage,
  faMapMarkedAlt,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TwitterForm() {
  function iconForm(icon) {
    return (
      <div>
        <FontAwesomeIcon
          icon={icon}
          className="cursor-pointer text-blue-500 hover:text-blue-400"
          style={{ width: "16px", height: "16px" }}
        />
      </div>
    );
  }

  return (
    <main className="flex-grow border-l border-r border-gray-700 max-w-xl ">
      <header className="sticky top-0 z-10 bg-opacity-80 backdrop-blur-sm twitter-background">
        <h2 className="px-4 py-3 font-bold text-xl">For You</h2>
      </header>
      <div className="border-gray-800 px-4">
        <textarea
          placeholder="What's happening"
          className="w-full bg-opacity-80 text-xl text-white resize-none outline-none"
        />
      </div>
      <div className="flex justify-between items-center border-b border-gray-700 pb-2">
        <nav className="flex space-x-4 px-4">
          {iconForm(faImage)}
          {iconForm(faFilm)}
          {iconForm(faChartBar)}
          {iconForm(faSmile)}
          {iconForm(faCalendarAlt)}
          {iconForm(faMapMarkedAlt)}
        </nav>
        <button className="cursor-pointer bg-blue-500 text-xs font-bold px-3 py-2 mr-4 rounded-full hover:bg-blue-400 transition duration-200">
          Tweet
        </button>
      </div>
    </main>
  );
}
