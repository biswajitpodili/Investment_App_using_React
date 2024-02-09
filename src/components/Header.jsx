import investmentlogo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={investmentlogo} alt="investment-png" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
