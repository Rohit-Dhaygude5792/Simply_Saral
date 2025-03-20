const Schemes=[{
    title: "Kisan Credit Card (KCC) Scheme – A Comprehensive Guide",
    description: "The Kisan Credit Card (KCC) Scheme, launched in 1998, is a vital government initiative designed to provide farmers with timely and adequate credit support to meet their agricultural needs.",
    launched_year: 1998,
    eligibility_criteria: {
        age_min: 18,
        age_max: 75,
        land_requirement_acres: 0.5,
        repayment_capacity: "Applicant must demonstrate repayment ability based on agricultural income."
    },
    important_links: [
        { title: "Official KCC Scheme Information", url: "https://rbi.org.in" },
        { title: "KCC Application Process Video Guide", url: "https://youtube.com/kccguide" }
    ],
    application_process: {
        offline_steps: [
            "Visit a bank branch offering KCC.",
            "Collect and fill out the KCC application form.",
            "Submit required documents including identity proof, land ownership records, and bank details.",
            "Await verification and approval."
        ],
        online_steps: [
            "Visit the bank’s online portal.",
            "Fill out the application form with necessary details.",
            "Upload identity proof, land records, and bank details.",
            "Submit the application and await confirmation."
        ]
    },
    documents_required: ["Identity Proof", "Address Proof", "Land Ownership Proof", "Photographs", "Bank Account Details"],
    loan_details: {
        short_term_credit: 300000,
        interest_rate: 7,
        subsidy_rate: 3,
        loan_tenure: "1 year (short-term)"
    },
    benefits: [
        "Subsidized Interest Rates - 7% per annum with a 3% subsidy for prompt repayment.",
        "Flexible Repayment Schedule aligned with crop harvest and marketing seasons.",
        "Covers diverse agricultural needs such as crop production, post-harvest expenses, and allied activities (dairy, poultry, fisheries)."
    ],
    special_provisions: {
        dairy_farmers: true,
        fisheries: true
    },
    helpline_numbers: {
        toll_free: "1800-XXX-XXXX",
        customer_service: ["011-XXXXX123", "022-XXXXX456"]
    },
    research_insights: [
        { title: "Impact of KCC on Farmers' Financial Stability", source: "ResearchGate, Google Scholar" }
    ],
    created_at: Date.now()
},
{
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description: "The Pradhan Mantri Fasal Bima Yojana (PMFBY) is a government initiative launched in 2016 to provide comprehensive crop insurance coverage to farmers, protecting them from financial loss due to natural calamities, pests, and diseases.",
    launched_year: 2016,
    important_links: [
        { title: "PMFBY Official Website", url: "https://pmfby.gov.in" }
    ],
    government_pdfs: [
        { title: "PMFBY Operational Guidelines", url: "https://pmfby.gov.in/guidelines.pdf" },
        { title: "PMFBY Compendium", url: "https://pmfby.gov.in/compendium.pdf" },
        { title: "PMFBY Claim Settlement Report", url: "https://pmfby.gov.in/claim-settlement.pdf" },
        { title: "Guidelines for Farmers", url: "https://pmfby.gov.in/farmer-guidelines.pdf" }
    ],
    helpline_numbers: {
        toll_free: "1800-180-1551",
        ministry_of_agriculture: "011-2338-1211",
        insurance_companies: "Visit PMFBY website for specific insurer contact details."
    },
    research_insights: [
        { title: "Evaluation Report on PMFBY", source: "https://pmfby.gov.in/evaluation-report.pdf" },
        { title: "Best Practices for PMFBY Implementation", source: "https://pmfby.gov.in/best-practices.pdf" },
        { title: "Agricultural Insurance in India", source: "https://pmfby.gov.in/agri-insurance-research.pdf" }
    ],
    videos_tutorials: [
        { title: "PMFBY Overview Video", url: "https://youtube.com/pmfby-overview" },
        { title: "How to Apply for PMFBY", url: "https://youtube.com/pmfby-apply" },
        { title: "Farmer Success Stories", url: "https://youtube.com/pmfby-success" }
    ],
    infographics: [
        { title: "PMFBY Infographic", url: "https://pmfby.gov.in/infographic" },
        { title: "Benefits of PMFBY", url: "https://pmfby.gov.in/benefits-visuals" }
    ],
    social_media: {
        twitter: "@PMFBYIndia"
    },
    faq_section: "https://pmfby.gov.in/faqs",
    created_at: Date.now()
},

]

module.exports={data:Schemes};
   