import React from 'react';
import './style1.css'; // Assuming your CSS file is named growth1.css and located in the same directory

function Growth1() {
  return (
    <div>
      <div className="content">
        <div className="row" id="row1">
          <h1>Lets Grow Up!</h1>
          <br /><br />
          <p>
            Babies grow at different rates. On average, at 1 month they gain between 0.7 to 0.9kg each month and grow 2.5 to 4cm. Their head circumference will increase by about 1.25cm each month.
          </p>
          <br />
          <p>
            Babies lose weight right after they are born. Healthy babies usually get back to their birth weight in the first 2 weeks and will then continue to grow. A baby loses up to 10% of their birth weight in the first week and regains this by 2 weeks.
          </p>
          <br />
          <p>
            Your baby was weighed at birth and your doctor or maternal child health nurse will plot their growth regularly on a growth chart. Babies come in all different shapes and sizes, and your baby might be large or small. What matters is that they grow consistently over time.
          </p>
          <br />
          <p>
            Try not compare your baby's weight gain with that of other babies.
          </p>
          <br /><br />
          <div className="innerdiv">
            <h3>Your Baby's Weight Gain Might Slow Down Because, </h3><br />
            <ul>
              <li>Your Baby Start To Sleep More And Feeds Less Often</li>
              <li>You Or Your Baby Become Ill</li>
              <li>Your Breastmilk Supply Changes (There Are Different Reasons This Might Happen)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Growth1;
