import "./AccessibilityStatement.css"

function AccessibilityStatement(){
  return(
    <main className="accessibility">
      <div className="accessibility-header">
        <h1>Accessibility Statement</h1>
        <p>
          Hummingbird Subsurface Consultants (HSC) is committed to ensuring digital accessibility for all people, including those with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
        </p>
      </div>
      <div className="accessibility-content">
        <section>
          <h2>Commitment to Accessibility</h2>
          <p>
            HSC strives to ensure its website and digital platforms conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These guidelines explain how to make web content more accessible to people with a wide array of disabilities, and compliance with these guidelines helps us create a more inclusive digital environment for all of our clients and partners.
          </p>
        </section>
        <section>
          <h2>Measures to Support Accessibility</h2>
          <p>
            To achieve our accessibility goals, HSC:
          </p>
          <ul>
            <li>
              Continual Evaluation: Integrates accessibility checks into our development and testing processes.
            </li>
            <li>
              Standards Compliance: Aims for full compliance with WCAG 2.1 Level AA to provide maximum access.
            </li>
            <li>
              User Experience Focus: Ensures navigation, content structure, and interactive elements are clear, predictable, and operable with keyboard-only commands.
            </li>
          </ul>
        </section>
        <section>
          <h2>Limitations</h2>
          <p>
            Despite our best efforts to ensure the accessibility of the HSC website, there may be some limitations. Please be aware that, due to the technical nature of some third-party integrations (such as embedded industry data tools), we cannot always control the accessibility of those features. We monitor these elements and encourage vendors to provide accessible content.
          </p>
        </section>
        <section>
          <h2>Feedback and Contact Information</h2>
          <p>
            We welcome your feedback on the accessibility of the HSC website. If you encounter accessibility barriers or require assistance with any part of our site or services, please contact us:
          </p>
          <p>
            Hummingbird Subsurface Consultants (HSC) <br />
            Email: info@hummingbirdsubsurface.com <br/>
            Phone: +1 979 304 6262 <br />
            Website: www.hummingbirdsubsurface.com
          </p>
        </section>
      </div>

    </main>
  )
}

export default AccessibilityStatement;