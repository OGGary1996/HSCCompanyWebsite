
import './Training.css'
import React from "react";

function Training() {
  return (
    <main className="training">
      <section className="training-header">
        <h1>Mentoring & Training</h1>
        <h3>Mentoring and Training are not Optional—they are the Difference Between Success and Costly Mistakes.</h3>
        <p>At HSC we integrate mentoring into live projects and deliver targeted trainings to equip your teams with the skills and confidence to succeed long after the project ends.</p>
      </section>
      <section className="content-1">
        <div className="content-1-left">
          <h2>WELL INTEGRITY & WELL INTERVENTION FUNDAMENTALS</h2>
          <h3>Build capability. Strengthen safety. Achieve operational excellence.</h3>
          <p>In the high-stakes world of well integrity and intervention, precision isn’t optional — it’s essential.<br/>
          This 2-day course builds a shared foundation across teams, equipping engineers with the confidence and practical expertise to apply fundamentals effectively.<br/>
          The result? Safer operations, reduced risks, and stronger performance across your assets.</p>
        </div>
        <div className="content-1-divider"></div>
        <div className="content-1-right">
          <div className="content-1-card1">
            <h3>Comprehensive Understanding</h3>
            <p>Learn the principles and practices of well integrity and well intervention, and how they intersect to drive operational success</p>
          </div>
          <div className="content-1-card2">
            <h3>Practical Application</h3>
            <p>Confidently apply well barrier concepts, the double barrier philosophy, and MAASP in real-world contexts</p>
          </div>
          <div className="content-1-card3">
            <h3>Enhanced Collaboration</h3>
            <p>Bridge the gap between office engineers, field operations, and intervention teams for safer, more effective performance</p>
          </div>
        </div>
      </section>

      <section className="content-2">
        <div className="content-2-left">
          <div className="content-2-card1">
            <h3>Comprehensive Mastery</h3>
            <p>Build a strong foundation in gas lift design, optimization, and troubleshooting to unlock maximum efficiency</p>
          </div>
          <div className="content-2-card2">
            <h3>Practical Techniques</h3>
            <p>Apply proven methods and real-world case studies to reduce downtime, minimize costly interventions, and solve persistent challenges</p>
          </div>
          <div className="content-2-card3">
            <h3>Leadership Confidence</h3>
            <p>Gain the expertise to lead gas lift operations with authority and deliver consistent, reliable production</p>
          </div>
        </div>
        <div className="content-2-divider"></div>
        <div className="content-2-right">
          <h2>MASTERING GAS LIFT</h2>
          <h3>Maximize production. Minimize downtime. Lead with confidence.</h3>
          <p>Gas lift systems are the backbone of artificial lift operations, but even experienced engineers face challenges designing, optimizing, and troubleshooting them.<br/>
            This immersive 3-day course builds confidence and practical expertise, enabling your team to maximize production, minimize downtime, and ensure reliable performance across the field.</p>
        </div>
      </section>

      {/* Why Partner with HSC */}
      <section className="why-partner-section">
        <div className="why-left">
          <h2>WHY PARTNER WITH US</h2>
          <p>
            HSC was born from a vision: to bring nearly 30 years of petroleum
            engineering leadership to operators seeking agile, value-driven
            solutions.
          </p>
          <p>
            Shaped by senior roles at industry giants including Petronas,
            Occidental Petroleum, Maersk Oil, Schlumberger, and BP, our team’s
            global experience has delivered tangible results—multi-million-dollar
            savings, improved recovery rates, and safer, more reliable operations.
          </p>
          <p>
            Today, that legacy of proven impact is the backbone of HSC. We channel
            decades of expertise into innovative consulting that helps clients
            solve their toughest challenges. Whether it’s optimizing production,
            safeguarding assets, or advancing sustainability, we’re not just
            consultants—we’re your trusted partner in navigating the demands of
            both the field and the future.
          </p>
          <blockquote>
            With HSC, you gain more than a consultant — you gain a trusted partner.
          </blockquote>
        </div>
        <div className="why-divider"></div>
        <div className="why-right">
          <div className="wp-card wp-red">
            <div className="wp-num">01</div>
            <h3>AGILE PARTNERSHIP</h3>
            <p>
              No two projects are the same, and neither are our solutions. We work
              closely with your team to understand your goals and deliver
              strategies that align with your vision, values, and operational
              priorities.
            </p>
          </div>
          <div className="wp-card wp-blue">
            <div className="wp-num">02</div>
            <h3>STRATEGIC INSIGHT</h3>
            <p>
              We turn decades of technical leadership into clear, actionable
              guidance that helps you make smarter, faster decisions in complex
              environments.
            </p>
          </div>
          <div className="wp-card wp-gold">
            <div className="wp-num">03</div>
            <h3>SUSTAINABLE IMPACT</h3>
            <p>
              Our solutions don’t stop at immediate results. We embed practices
              that safeguard assets, optimize production, and advance
              sustainability for the long term.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Training;