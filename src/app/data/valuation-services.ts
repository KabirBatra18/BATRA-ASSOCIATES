export interface ValuationService {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroHeading: string;
  heroSubheading: string;
  whatIsTitle: string;
  whatIsDescription: string;
  whatIsBullets: string[];
  processSteps: { step: number; title: string; description: string }[];
  whyUsIntro: string;
  schemaServiceType: string;
}

export const valuationServices: ValuationService[] = [
  {
    slug: "income-tax",
    metaTitle:
      "Property Valuation for Income Tax in Delhi | Govt Approved Valuer | Batra & Associates",
    metaDescription:
      "Get government-approved property valuation for Income Tax — capital gains (Section 50C), gift tax, wealth tax, and ITR filing. IBBI & IT Dept registered valuer in Delhi. Call 9811741187.",
    keywords: [
      "property valuation for income tax Delhi",
      "capital gains valuation report",
      "Section 50C valuation",
      "govt approved valuer income tax",
      "fair market value property Delhi",
    ],
    heroHeading: "Property Valuation for Income Tax",
    heroSubheading:
      "Government-approved valuation reports accepted by the Income Tax Department for capital gains, Section 50C compliance, gift tax assessments, and wealth declarations.",
    whatIsTitle: "What is Property Valuation for Income Tax?",
    whatIsDescription:
      "Property valuation for income tax is required when you need to determine the fair market value of a property for tax compliance. The Income Tax Act mandates certified valuation reports in several situations to ensure accurate tax assessment.",
    whatIsBullets: [
      "Capital Gains Tax — Fair market value as on 01-04-2001 for computing long-term capital gains under Section 50C",
      "Gift Tax — Valuation of property received as gift exceeding Rs. 50,000",
      "Wealth Tax — Assessment of total taxable wealth including immovable property",
      "ITR Filing — Supporting documentation for property declarations in income tax returns",
      "Section 56(2)(x) — Valuation for property received for inadequate consideration",
    ],
    processSteps: [
      {
        step: 1,
        title: "Share Property Details",
        description:
          "Provide us with property documents — sale deed, registry, map, and any prior valuation reports.",
      },
      {
        step: 2,
        title: "Site Visit & Inspection",
        description:
          "Our team conducts a physical inspection of the property, noting construction quality, area, and locality factors.",
      },
      {
        step: 3,
        title: "Market Analysis & Valuation",
        description:
          "We perform a comprehensive market survey and apply approved valuation methodologies to determine fair market value.",
      },
      {
        step: 4,
        title: "Certified Report Delivery",
        description:
          "Receive a government-approved valuation report accepted by Income Tax authorities, complete with all supporting documentation.",
      },
    ],
    whyUsIntro:
      "Our principal valuer is a Category-I Income Tax Department Approved Valuer since 2014, ensuring your report is accepted without objection.",
    schemaServiceType: "Property Valuation for Income Tax",
  },
  {
    slug: "bank-loan",
    metaTitle:
      "Property Valuation for Bank Loan in Delhi | Empanelled Valuer | Batra & Associates",
    metaDescription:
      "Property valuation for bank loans, home loans, LAP & mortgage in Delhi. Empanelled with SBI, PNB, UCO Bank (Category A). Fast turnaround. Call 9811741187.",
    keywords: [
      "property valuation for bank loan Delhi",
      "home loan valuation report",
      "SBI empanelled valuer Delhi",
      "PNB approved valuer",
      "loan against property valuation",
    ],
    heroHeading: "Property Valuation for Bank Loan",
    heroSubheading:
      "Accurate property valuation reports for home loans, loan against property (LAP), mortgage financing, and refinancing — accepted by all major banks.",
    whatIsTitle: "What is Property Valuation for Bank Loan?",
    whatIsDescription:
      "Banks require an independent property valuation before sanctioning any loan secured against real estate. This report confirms the market value of the property, helping the bank assess lending risk and determine the loan-to-value ratio.",
    whatIsBullets: [
      "Home Loan — Valuation of residential property for purchase financing",
      "Loan Against Property (LAP) — Assessment of property offered as collateral",
      "Mortgage Loan — Determining market value for mortgage-backed lending",
      "Refinancing — Updated valuation for loan restructuring or balance transfer",
      "Commercial Property Loan — Valuation of office, shop, or industrial property for business loans",
    ],
    processSteps: [
      {
        step: 1,
        title: "Bank Referral or Direct Enquiry",
        description:
          "Contact us directly or get referred through your bank. Share property documents and loan reference details.",
      },
      {
        step: 2,
        title: "On-Site Inspection",
        description:
          "Our empanelled valuer visits the property to verify physical conditions, boundaries, construction, and encumbrances.",
      },
      {
        step: 3,
        title: "Valuation & Report Preparation",
        description:
          "We apply bank-approved methodologies to assess market value and prepare a detailed valuation report.",
      },
      {
        step: 4,
        title: "Report Submitted to Bank",
        description:
          "The completed report is submitted directly to the bank in their prescribed format, expediting your loan approval.",
      },
    ],
    whyUsIntro:
      "We are empanelled as Category-A valuers with SBI, PNB, UCO Bank, and Union Bank of India, so our reports are accepted directly without secondary verification.",
    schemaServiceType: "Property Valuation for Bank Loan",
  },
  {
    slug: "court-cases",
    metaTitle:
      "Property Valuation for Court Cases & Litigation in Delhi | Batra & Associates",
    metaDescription:
      "Expert property valuation for court cases — property disputes, divorce settlements, family disputes, and legal proceedings. 20+ years experience. Call 9811741187.",
    keywords: [
      "property valuation for court case Delhi",
      "property valuation for litigation",
      "divorce property valuation",
      "property dispute valuation report",
      "court approved valuer Delhi",
    ],
    heroHeading: "Property Valuation for Court Cases & Litigation",
    heroSubheading:
      "Legally admissible property valuation reports for court proceedings, property disputes, divorce settlements, and partition suits — prepared by government-approved valuers.",
    whatIsTitle: "What is Property Valuation for Court Cases?",
    whatIsDescription:
      "Courts frequently require independent property valuation when the value of real estate is in dispute. A certified valuation report from a government-approved valuer serves as expert evidence and helps the court arrive at a fair judgment.",
    whatIsBullets: [
      "Property Disputes — Independent valuation to resolve ownership or value disagreements",
      "Divorce & Matrimonial Disputes — Fair market value assessment for equitable settlement",
      "Partition Suits — Valuation for division of jointly-held property",
      "Civil Litigation — Expert property valuation as evidence in civil proceedings",
      "Compensation Cases — Market value assessment for compulsory acquisition disputes",
    ],
    processSteps: [
      {
        step: 1,
        title: "Share Case Details",
        description:
          "Provide property documents and relevant court orders or advocate's brief specifying the valuation requirement.",
      },
      {
        step: 2,
        title: "Detailed Site Inspection",
        description:
          "Thorough on-site inspection with photographic documentation, measurement verification, and condition assessment.",
      },
      {
        step: 3,
        title: "Comprehensive Valuation",
        description:
          "We apply multiple valuation approaches (market, cost, income) as required and prepare a defensible valuation opinion.",
      },
      {
        step: 4,
        title: "Court-Ready Report",
        description:
          "Detailed valuation report with supporting evidence, suitable for submission to the court. Expert testimony available if required.",
      },
    ],
    whyUsIntro:
      "With 20+ years of experience and government approval, our valuation reports have been accepted in courts across Delhi NCR. We can also provide expert testimony when needed.",
    schemaServiceType: "Property Valuation for Legal Proceedings",
  },
  {
    slug: "visa-immigration",
    metaTitle:
      "Property Valuation for Visa & Immigration in Delhi | Batra & Associates",
    metaDescription:
      "Property valuation certificate for visa applications, immigration (PR), and embassy submissions. Govt approved valuer in Delhi. Fast delivery. Call 9811741187.",
    keywords: [
      "property valuation for visa Delhi",
      "property valuation for immigration",
      "property valuation certificate for embassy",
      "PR property valuation India",
      "visa property valuation report",
    ],
    heroHeading: "Property Valuation for Visa & Immigration",
    heroSubheading:
      "Government-approved property valuation certificates for visa applications, permanent residency (PR), and embassy submissions — fast turnaround with international format compliance.",
    whatIsTitle: "What is Property Valuation for Visa & Immigration?",
    whatIsDescription:
      "Embassies and immigration authorities require proof of financial assets when processing visa and immigration applications. A certified property valuation report from a government-approved valuer serves as evidence of your net worth and financial stability.",
    whatIsBullets: [
      "Tourist & Business Visa — Proof of property assets for visa applications to USA, UK, Canada, Australia, etc.",
      "Permanent Residency (PR) — Net worth documentation for immigration applications",
      "Student Visa — Financial proof showing family property holdings for education abroad",
      "Investor Visa — Certified asset valuation for investor-category immigration programs",
      "Embassy Requirements — Reports formatted to meet specific embassy or consulate requirements",
    ],
    processSteps: [
      {
        step: 1,
        title: "Share Requirements",
        description:
          "Tell us which country and visa type you are applying for, and share your property documents.",
      },
      {
        step: 2,
        title: "Quick Site Inspection",
        description:
          "We conduct a focused property inspection and verify all ownership and area details.",
      },
      {
        step: 3,
        title: "Valuation & Certificate",
        description:
          "We prepare a valuation certificate in a format accepted by embassies and immigration authorities.",
      },
      {
        step: 4,
        title: "Fast Delivery",
        description:
          "Receive your certified valuation certificate within 2-3 working days, ready for embassy submission.",
      },
    ],
    whyUsIntro:
      "Our valuation certificates are accepted by embassies worldwide. We understand the urgency of visa timelines and provide expedited service.",
    schemaServiceType: "Property Valuation for Visa and Immigration",
  },
  {
    slug: "insolvency",
    metaTitle:
      "Property Valuation for IBBI / Insolvency Cases in Delhi | Registered Valuer | Batra & Associates",
    metaDescription:
      "IBBI registered valuer for insolvency and liquidation cases under IBC. Property and asset valuation for CIRP, liquidation, and resolution plans. Call 9811741187.",
    keywords: [
      "IBBI registered valuer Delhi",
      "property valuation for insolvency",
      "IBC valuation report",
      "CIRP property valuation",
      "liquidation valuation Delhi",
    ],
    heroHeading: "Property Valuation for IBBI / Insolvency",
    heroSubheading:
      "IBBI-registered valuer providing asset valuation for Corporate Insolvency Resolution Process (CIRP), liquidation proceedings, and resolution plans under the Insolvency and Bankruptcy Code.",
    whatIsTitle: "What is Property Valuation for IBBI / Insolvency?",
    whatIsDescription:
      "Under the Insolvency and Bankruptcy Code (IBC) 2016, only IBBI-registered valuers are authorized to conduct asset valuations during insolvency proceedings. These valuations determine the fair value and liquidation value of assets for the Committee of Creditors.",
    whatIsBullets: [
      "CIRP Valuation — Fair value and liquidation value under Section 35 of IBC",
      "Liquidation Process — Asset valuation for liquidation estate under IBBI regulations",
      "Resolution Plan — Property valuation supporting resolution plan submissions",
      "Going Concern Valuation — Assessment of assets as part of ongoing business operations",
      "Distressed Asset Valuation — Valuation of assets under financial stress for NCLT proceedings",
    ],
    processSteps: [
      {
        step: 1,
        title: "Engagement by RP/Liquidator",
        description:
          "The Resolution Professional or Liquidator formally appoints us as IBBI-registered valuer for the case.",
      },
      {
        step: 2,
        title: "Asset Identification & Inspection",
        description:
          "We identify all immovable assets, conduct site inspections, and verify title documents and encumbrances.",
      },
      {
        step: 3,
        title: "Dual Valuation",
        description:
          "We determine both the fair value and liquidation value using IBBI-prescribed methodologies.",
      },
      {
        step: 4,
        title: "IBBI-Compliant Report",
        description:
          "Deliver a valuation report fully compliant with IBBI regulations, ready for submission to the Committee of Creditors and NCLT.",
      },
    ],
    whyUsIntro:
      "We hold IBBI registration (IBBI/RV/02/2019/11402) for Land & Building valuation, making us authorized to conduct valuations under the Insolvency and Bankruptcy Code.",
    schemaServiceType: "Property Valuation for IBBI Insolvency",
  },
  {
    slug: "insurance",
    metaTitle:
      "Property Valuation for Insurance in Delhi | Batra & Associates",
    metaDescription:
      "Property valuation for fire insurance, property insurance, and reinstatement value assessment in Delhi. Govt approved valuer. Call 9811741187.",
    keywords: [
      "property valuation for insurance Delhi",
      "fire insurance valuation report",
      "reinstatement value assessment",
      "property insurance valuation",
      "building insurance valuation Delhi",
    ],
    heroHeading: "Property Valuation for Insurance",
    heroSubheading:
      "Accurate property valuation for insurance purposes — fire insurance, property insurance policies, and reinstatement value assessment to ensure adequate coverage.",
    whatIsTitle: "What is Property Valuation for Insurance?",
    whatIsDescription:
      "Insurance companies require a professional valuation to determine the correct sum insured for a property. An accurate valuation prevents both under-insurance (inadequate claim settlement) and over-insurance (excess premium payment).",
    whatIsBullets: [
      "Fire Insurance — Reinstatement value assessment for fire insurance policies",
      "Property Insurance — Market and replacement value for comprehensive property coverage",
      "Industrial Insurance — Valuation of factory buildings, warehouses, and industrial structures",
      "Claim Settlement — Independent valuation to support insurance claim disputes",
      "Policy Renewal — Updated valuation for insurance policy renewal with current market rates",
    ],
    processSteps: [
      {
        step: 1,
        title: "Share Insurance Requirements",
        description:
          "Tell us the type of insurance coverage needed and share property documents and existing policy details.",
      },
      {
        step: 2,
        title: "Property Inspection",
        description:
          "Detailed inspection covering construction type, materials, building age, and replacement cost factors.",
      },
      {
        step: 3,
        title: "Reinstatement Value Calculation",
        description:
          "We calculate the reinstatement/replacement value using current construction costs and market data.",
      },
      {
        step: 4,
        title: "Insurance-Ready Report",
        description:
          "Certified valuation report in a format accepted by insurance companies, with clear reinstatement and market value breakdowns.",
      },
    ],
    whyUsIntro:
      "As qualified structural engineers and government-approved valuers, we provide technically precise reinstatement valuations that insurance companies trust.",
    schemaServiceType: "Property Valuation for Insurance",
  },
  {
    slug: "stamp-duty",
    metaTitle:
      "Property Valuation for Stamp Duty & Registration in Delhi | Batra & Associates",
    metaDescription:
      "Property valuation for stamp duty assessment, property registration, and circle rate disputes in Delhi. Govt approved valuer. Call 9811741187.",
    keywords: [
      "property valuation for stamp duty Delhi",
      "stamp duty assessment valuation",
      "circle rate dispute valuation",
      "property registration valuation",
      "DDA property valuation Delhi",
    ],
    heroHeading: "Property Valuation for Stamp Duty & Registration",
    heroSubheading:
      "Professional property valuation for stamp duty assessment, property registration, circle rate evaluation, and valuation disputes with registrar offices.",
    whatIsTitle: "What is Property Valuation for Stamp Duty?",
    whatIsDescription:
      "Stamp duty is calculated based on the market value or circle rate of a property, whichever is higher. When there is a significant difference between the declared value and the registrar's assessment, a certified independent valuation can help establish the true market value.",
    whatIsBullets: [
      "Stamp Duty Assessment — Independent valuation to verify or challenge stamp duty calculations",
      "Property Registration — Market value determination for registration with sub-registrar",
      "Circle Rate Disputes — Expert valuation when the assessed value differs significantly from circle rates",
      "Undervaluation Cases — Defence valuation when authorities allege undervaluation of property",
      "Gift Deed Registration — Valuation for stamp duty on property gift deeds",
    ],
    processSteps: [
      {
        step: 1,
        title: "Share Property & Registration Details",
        description:
          "Provide property documents, sale agreement, and any communication from the registrar or stamp duty authority.",
      },
      {
        step: 2,
        title: "Site Inspection",
        description:
          "On-ground inspection to assess property condition, location advantages, and factors affecting market value.",
      },
      {
        step: 3,
        title: "Market Value Assessment",
        description:
          "We compare with recent transactions, circle rates, and local market conditions to arrive at a justified market value.",
      },
      {
        step: 4,
        title: "Certified Valuation Report",
        description:
          "A detailed report substantiating the assessed market value, suitable for submission to stamp duty authorities.",
      },
    ],
    whyUsIntro:
      "Registered with MCD Delhi since 1997, we have deep knowledge of Delhi's property market and circle rates across all zones.",
    schemaServiceType: "Property Valuation for Stamp Duty",
  },
  {
    slug: "family-settlement",
    metaTitle:
      "Property Valuation for Family Settlement & Partition in Delhi | Batra & Associates",
    metaDescription:
      "Property valuation for family partition, HUF division, inheritance settlement, and joint property sharing in Delhi. Govt approved valuer. Call 9811741187.",
    keywords: [
      "property valuation for family settlement Delhi",
      "partition property valuation",
      "HUF property division valuation",
      "inheritance property valuation",
      "joint property valuation Delhi",
    ],
    heroHeading: "Property Valuation for Family Settlement & Partition",
    heroSubheading:
      "Fair and impartial property valuation for family settlements, partition of joint property, HUF division, and inheritance sharing — ensuring equitable distribution.",
    whatIsTitle: "What is Property Valuation for Family Settlement?",
    whatIsDescription:
      "When families need to divide jointly-held property — whether through mutual agreement, court-ordered partition, or inheritance distribution — an independent property valuation ensures fair and transparent division among all parties.",
    whatIsBullets: [
      "Family Partition — Equal division of ancestral or joint family property among members",
      "HUF Division — Valuation of Hindu Undivided Family assets for partition",
      "Inheritance Settlement — Fair market value for distributing inherited property among heirs",
      "Mutual Settlement — Agreed-upon valuation when one party buys out another's share",
      "Will & Succession — Property valuation for execution of will or succession planning",
    ],
    processSteps: [
      {
        step: 1,
        title: "Understand the Requirement",
        description:
          "We discuss the family situation, number of parties, and the properties involved to define the scope.",
      },
      {
        step: 2,
        title: "Independent Site Inspection",
        description:
          "Neutral on-site inspection of all properties with detailed measurement and condition documentation.",
      },
      {
        step: 3,
        title: "Impartial Valuation",
        description:
          "We provide an unbiased market valuation that all parties can rely on for fair settlement discussions.",
      },
      {
        step: 4,
        title: "Settlement-Ready Report",
        description:
          "Comprehensive report with individual property valuations, suitable for family agreements or court submission.",
      },
    ],
    whyUsIntro:
      "With 20+ years of experience and government approval, we provide impartial valuations that all family members can trust — reducing disputes and enabling smooth settlements.",
    schemaServiceType: "Property Valuation for Family Settlement",
  },
];

export function getServiceBySlug(
  slug: string
): ValuationService | undefined {
  return valuationServices.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return valuationServices.map((s) => s.slug);
}
