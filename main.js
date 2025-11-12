// main.js – Offline Mode (for Live Server, no Node.js needed)

async function loadForecast() {
  try {
    const res = await fetch("../data/forecast_results.json");
    const data = await res.json();

    document.getElementById("data").innerHTML = "<h3>Forecast Results</h3>";

    const ctx = document.getElementById("chart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Oct 1",
          "Oct 2",
          "Oct 3",
          "Oct 4",
          "Oct 5",
          "Oct 6",
          "Oct 7",
          "Oct 8",
          "Oct 9",
          "Oct 10"
        ],
        datasets: [
          {
            label: "Forecast (Moving Average)",
            data: data.forecast,
            borderColor: "blue",
            fill: false,
          },
        ],
      },
    });

    document.getElementById("data").innerHTML += `
      <p><strong>MAPE:</strong> ${data.accuracy.mape}% |
         <strong>MAE:</strong> ${data.accuracy.mae} |
         <strong>RMSE:</strong> ${data.accuracy.rmse}</p>`;
  } catch (err) {
    console.error("Error loading forecast:", err);
  }
}

async function loadRFM() {
  try {
    const res = await fetch("../data/customers.json");
    const customers = await res.json();
    let html = "<h3>RFM Segmentation (Static)</h3>";
    html += "<ul style='text-align:left; list-style-type:none;'>";
    html += customers
      .map(
        c => `<li>👤 <strong>${c.name}</strong> (${c.country}) — ${c.email}</li>`
      )
      .join("");
    html += "</ul>";
    document.getElementById("data").innerHTML = html;
  } catch (err) {
    console.error("Error loading RFM:", err);
  }
}

async function loadPromotions() {
  const html = `
    <h3>Promotion Recommendation</h3>
    <p>📦 Average recent sales: <strong>210 units/day</strong></p>
    <p>💡 Suggested strategy: <strong>Voucher campaign</strong> (10% discount)</p>
    <p>🕒 Timing: Weekend sale or low-demand days (Mon–Tue)</p>
    <p>📧 Example message: “Get 10% off your next order – valid for 48h!”</p>
  `;
  document.getElementById("data").innerHTML = html;
}

async function loadCare() {
  const html = `
    <h3>Customer Care Actions</h3>
    <ul style="text-align:left; list-style-type: none;">
      <li>🎯 <b>Post-purchase:</b> Send thank-you email + 10% voucher for next order.</li>
      <li>📅 <b>Inactive >30 days:</b> Send reactivation message with free shipping.</li>
      <li>🏆 <b>High-value:</b> Send loyalty reward + feedback survey.</li>
      <li>🧾 <b>After-sale:</b> Provide invoice download link and service hotline.</li>
    </ul>
  `;
  document.getElementById("data").innerHTML = html;
}

async function loadSummary() {
  const html = `
<pre style="text-align:left">
 <b>AI Summary Report for SME E-commerce Platform</b>

<b>Sales Forecast Insight</b>
- Predicted average sales: ≈ 210 units/day.
- Forecast accuracy: MAPE ≈ 8.3% (very good).

<b>Customer Behavior (RFM Segmentation)</b>
- Loyal: 2 | Potential: 2 | Low-value: 1
- Focus on nurturing "Potential" customers via email campaigns.

<b>Promotion Strategy</b>
- Recommended: Voucher campaign (10%) or short-term flash sale.
- Goal: Boost conversion on low-demand weekdays.

<b>AI-driven Recommendations</b>
1. Implement automatic flash-sale scheduling (based on demand).
2. Offer loyalty rewards for top-tier customers.
3. Collect customer satisfaction data to refine promotions.
4. Integrate predictive analytics into inventory planning.
</pre>
  `;
  document.getElementById("data").innerHTML = html;
}
async function loadAbout() {
  const html = `
  <div style="text-align:left; max-width:800px; margin:auto;">
    <h2> About Me</h2>
    <p>
      I'm a third-year student at <b>University of Economics and Law (UEL)</b>, majoring in
      <b>E-Commerce</b> under the <b>Talented Bachelor Program</b> of the Faculty of Information Systems.
    </p>
    <p>
      This website, <em>AI-Driven SME Analytics</em>, is my individual final project for
      the <b>Business Web Development</b> course.
    </p>

    <h3> Project Overview</h3>
    <p>
      The system simulates an <b>AI-powered business intelligence platform</b> for small
      and medium enterprises (SMEs) in <b>E-commerce</b>, <b>Supply Chain</b>, and
      <b>Logistics</b>. It uses customer behavior analytics, demand forecasting, and AI recommendations
      to generate marketing strategies such as flash sales, vouchers, and customer care automation.
    </p>

    <h3> My Role & Skills</h3>
    <ul>
      <li>Developed the entire system independently (frontend + logic)</li>
      <li>Applied RFM segmentation, demand forecasting, and AI summarization</li>
      <li>Designed an interactive dashboard with Chart.js</li>
      <li>Learned data-driven decision making for business strategy</li>
    </ul>

    <h3> Technical Stack</h3>
    <ul>
      <li>HTML, CSS, JavaScript (Chart.js)</li>
      <li>JSON data simulation (offline mode)</li>
      <li>Optional Node.js backend with Express</li>
    </ul>

    <h3> Contact</h3>
    <p>
      University: University of Economics and Law (UEL), Vietnam National University HCMC<br>
      Email: <em>quynhtd234062@st.uel.edu.vn</em><br>
      GitHub/Portfolio: quynhtruong0904
    </p>
  </div>
  `;
  document.getElementById("data").innerHTML = html;
}
