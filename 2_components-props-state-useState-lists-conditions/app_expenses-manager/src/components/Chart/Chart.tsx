import ChartBar from "./ChartBar/ChartBar";
import "./Chart.css";

interface DataPoint {
  label: string;
  value: number;
}

interface ChartProps {
  dataPoints: DataPoint[];
}
const Chart: React.FC<ChartProps> = ({ dataPoints }) => {
  // Transform objects to numbers for
  // finding out the maximum values of an array of number
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) =>
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      )}
    </div>
  );
};
export default Chart;
