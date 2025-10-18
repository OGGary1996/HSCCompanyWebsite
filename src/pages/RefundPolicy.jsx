import "./RefundPolicy.css"

function RefundPolicy(){
  return (
    <main className="refund">
      <div className="refund-header">
        <h1>Refund Policy</h1>
        <h3>Effective Date: October 14, 2025</h3>
        <p>
          Hummingbird Subsurface Consultants (HSC) provides expert professional consulting services, which are non-tangible, customized services delivered under specific project agreements. This Refund Policy outlines the general terms related to refunds and cancellation of services.
        </p>
      </div>
      <div className="refund-content">
        <section>
          <h2>1. Service Basis</h2>
          <p>
            Our services are delivered on a project-by-project basis, governed by a legally binding Master Service Agreement (MSA) and/or Statement of Work (SOW). The specific terms for service cancellation, termination, invoicing, and potential refunds will be detailed exclusively within the executed MSA/SOW.
          </p>
        </section>
        <section>
          <h2>2. General Non-Refundable Items</h2>
          <p>The following items are generally non-refundable unless explicitly stated otherwise in the governing SOW:</p>
          <ul>
            <li>
              Completed Work: Fees charged for services that have already been rendered, reports that have been delivered, or milestones that have been achieved and accepted by the client.
            </li>
            <li>
              Retainer Fees: Any non-refundable retainer or upfront fees paid to reserve HSC resources or initiate the engagement, as outlined in the SOW.
            </li>
            <li>
              Expenses: Costs incurred by HSC related to the project, such as travel, data licenses, or third-party service fees, once those expenses have been committed or paid.
            </li>
          </ul>
        </section>
        <section>
          <h2>3. Refunds for Pre-Paid, Unrendered Services</h2>
          <p>
            In the event that a project is mutually terminated by both HSC and the client prior to the completion of all scheduled services, and where the client has made payments for future work not yet started, a partial refund may be issued.
          </p>
          <ul>
            <li>
              The refund amount will be calculated based on the difference between the pre-paid amount and the full cost of all services rendered up to the date of termination, plus any non-refundable expenses or fees specified in the SOW.
            </li>
            <li>
              The terms of termination, including any penalty fees or early cancellation charges, will be determined by the provisions of the governing MSA/SOW.
            </li>
          </ul>
        </section>
        <section>
          <h2>4. How to Request Cancellation</h2>
          <p>All requests for service cancellation or termination must be submitted in writing (via email or formal letter) to the designated HSC Project Manager and copied to the contact email below. The effective date of cancellation will be the date HSC receives the written notice, and any refund calculation will begin from that date.</p>
        </section>
        <section>
          <h2>5. Contact Information</h2>
          <p>For questions regarding invoicing, payment, or cancellation of services:</p>
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

export default RefundPolicy