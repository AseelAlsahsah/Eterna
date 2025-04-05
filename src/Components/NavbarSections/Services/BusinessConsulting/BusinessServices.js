import React from "react";
import "../../../../Styles/BusinessServices.css";
import performanceIcon from "../../../../Styles/images/performance-analysis.png";
import strategyIcon from "../../../../Styles/images/strategic-plan.png";
import pricingIcon from "../../../../Styles/images/strategic-pricing-initiative.png";
import incentiveIcon from "../../../../Styles/images/incentive-compensation-plans.png";
import successionIcon from "../../../../Styles/images/business-succession-plan.png";
import managementIcon from "../../../../Styles/images/performance-management.png";
import workflowIcon from "../../../../Styles/images/workflow-analysis.png";

const services = [
  {
    title: "Performance Analysis",
    description:
      "We provide a comprehensive, 360-degree evaluation of your business, including customer service standards, workflow, market position, financial performance, and detailed recommendations for improvement.",
    icon: performanceIcon,
  },
  {
    title: "Strategic Plan",
    description:
      "We create customized strategic plans that outline your key business initiatives, tactical steps, implementation timelines, and performance tracking for long-term growth and success.",
    icon: strategyIcon,
  },
  {
    title: "Strategic Pricing Initiative",
    description:
      "Our pricing strategy is designed to help you meet your revenue goals while remaining competitive and consumer-friendly. This includes a full pricing review, competitive benchmarking, sales analysis, and the development of a clear and compliant General Price List (GPL).",
    icon: pricingIcon,
  },
  {
    title: "Incentive Compensation Plans",
    description:
      "We design fair, transparent, and measurable incentive programs that motivate your staff to deliver exceptional service while aligning with your business objectives.",
    icon: incentiveIcon,
  },
  {
    title: "Business Succession Plan",
    description:
      "We help you prepare for the future with a clear succession plan well in advance of a sale or transition. This includes identifying potential buyers or successors, increasing enterprise",
    icon: successionIcon,
  },
  {
    title: "Performance Management",
    description:
      "Facilitate regular performance management meetings with you and your team to evaluate ongoing operations and uncover areas for enhancement. These sessions will cover key performance indicators such as customer satisfaction, market presence, call volume, business mix, financial performance, and employee effectiveness. Our business consultants will also offer ongoing coaching in operations, leadership, and management development.",
    icon: managementIcon,
  },
  {
    title: "Workflow Analysis",
    description:
      "Conduct a comprehensive analysis of your workflow and organizational structure to evaluate current staffing levels, staff utilization, and employee morale. Based on the findings, we will provide actionable recommendations to enhance workplace culture through improved communication, better employee welfare management, and focused leadership development.",
    icon: workflowIcon,
  },
];

const BusinessServices = () => {
  return (
    <section className="services-list-container">
      <h2 className="hardwork-title">Our Core Consulting Services</h2>
      {services.map((service, index) => (
        <div key={index} className="service-list-item">
          <img src={service.icon} alt="Service Icon" className="service-list-icon" />
          <div className="service-list-content">
            <h3 className="service-list-title">{service.title}</h3>
            <p className="service-list-description">{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BusinessServices;
