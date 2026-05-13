import { useLocation } from "react-router-dom";

export default function Posts( { title, message, username, date, onDelete }) {

  const formatDate = (date) => {
    const d = date?.toDate ? date.toDate() : new Date(date);
    const day = d.getDate();
    const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
    const time = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    const month = d.toLocaleDateString("en-US", { month: "long" });
    const year = d.getFullYear();
    return `${day} ${dayName} ${time} ${month} ${year}`;
};

  const location = useLocation();


  return (    
    <div className="flex flex-col mt-3">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="font-bole text-2xl"># {title}</p>
          <p className="text-sm text-gray-500">{message}</p>
        </div>
        <div className="flex items-start mr-2">
          { location.pathname === '/profile' ? 
          <button 
            className="text-red-500 
            font-bold hover:text-red-400
            pointer-cursor duration-150 ease-in-out"
            onClick={onDelete}
          >
            X
          </button>
          :
          ""  
        }
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-blue-500">
          @{username}
        </p>
        <p className="mr-2"> {formatDate(date)}</p>
      </div>
    </div>
  )
}
