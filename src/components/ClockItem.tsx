import "./ClockItem.css";

type clockProps = {
  title: string;
  date: string;
};

const ClockItem = ({ title, date }: clockProps) => {
  return (
    <div className="flex flex-col bg-black justify-center items-center flex-1 Clock-cont-info">
      <h2 className="text-2 font-bold text-white">{date}</h2>
      <span className="text-white font-bold">{title}</span>
    </div>
  );
};

export default ClockItem;