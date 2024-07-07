import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results({ userInput }) {
  const result = calculateInvestmentResults(userInput);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {result.map((yearData) => {
          const totalIntrest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>
                {formatter.format(yearData.valueEndOfYear - totalIntrest)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
