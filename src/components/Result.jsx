import { formatter, calculateInvestmentResults } from "../util/investment";

const Result = ({ userInput }) => {
  const investmentData = calculateInvestmentResults(userInput);
  const initialInvestment =
    investmentData[0].valueEndOfYear -
    investmentData[0].interest -
    investmentData[0].annualInvestment;
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Interested Capital</th>
          </tr>
        </thead>
        <tbody>
          {investmentData.map((data) => {
            const totalInterest =
              data.valueEndOfYear -
              data.annualInvestment * data.year -
              initialInvestment;
            return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(data.valueEndOfYear - totalInterest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
