const Receipe = ({text}) => {
  let steps = text.split('STEP').filter(step => step.trim() !== '');

  if (steps.length === 1) {
    steps = text.split('\n').filter(step => step.trim() !== '');
  }

  return (
    <div>
      <h2>Receipe</h2>
      {steps.map((step, index) => (
        <div key={index}>
          <h3>STEP {index + 1}</h3>
          <p>{step.trim()}</p>
        </div>
      ))}
    </div>
  );
}

export default Receipe;