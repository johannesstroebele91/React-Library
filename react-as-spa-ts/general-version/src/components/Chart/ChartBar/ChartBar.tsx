import "./ChartBar.css";

interface ChartBarProps {
  label: string;
  value: number;
  maxValue: number;
}

const ChartBar: React.FC<ChartBarProps> = ({ label, value, maxValue }) => {
  // Will be assigned as a CSS, therefore string
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%"; // gets converted to a string due to `+ "%"`
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* Sets the style of a element dynamically  */}
        {/* Expects an JS styling object  */}
        {/* In case of a property with a `-`, either write it with '' or in camel case  */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};
export default ChartBar;
