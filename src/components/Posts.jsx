export default function Posts( { title, message, username, date }) {

  const formatDate = (date) => {
    const d = date?.toDate ? date.toDate() : new Date(date);
    const day = d.getDate();
    const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
    const time = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    const month = d.toLocaleDateString("en-US", { month: "long" });
    const year = d.getFullYear();
    return `${day} ${dayName} ${time} ${month} ${year}`;
};

  return (    
    <div className="flex flex-col mt-3">
      <p className="font-bole text-2xl"># {title}</p>
      <p className="text-sm text-gray-500">{message}</p>
      <div className="flex justify-between">
        <p className="text-blue-500">
          @{username}
        </p>
        <p className="mr-2"> {formatDate(date)}</p>
      </div>
    </div>
  )
}
