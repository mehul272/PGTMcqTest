const quizData = [
  {
    question: "Green chemistry is also called as",
    a: "Life chemistry",
    b: "Environmental chemistry",
    c: "Organic chemistry",
    d: "Sustainable chemistry",
    correct: "d",
  },
  {
    question: "An ideal solvent facilitates the",
    a: "Mass transfer",
    b: "Dissolving property",
    c: "Combustion",
    d: "Titration",
    correct: "a",
  },
  {
    question: "A desirable green solvent should be",
    a: "Costly",
    b: "Toxic",
    c: "Readily available",
    d: "Synthetic",
    correct: "c",
  },
  {
    question: "The green solvent maximises the atom",
    a: "Molecular weight",
    b: "Electronic configuration",
    c: "Velocity",
    d: "Efficiency",
    correct: "d",
  },
  {
    question: "What is the percentage atom utilisation?",
    a: "(mole wt of desired product*100)/mole wt of (desired product+total produc",
    b: "(mole wt of desired product*100)/mole wt of (desired product)",
    c: "(mole wt of desired product*100)/mole wt of (desired product+used product)",
    d: "(mole wt of desired product*100)/mole wt of (desired product+by produc",
    correct: "d",
  },
  {
    question:
      "Which of the given methods are greener than the conventional methods?",
    a: "Micro waves",
    b: "Electromagnetic waves",
    c: "Ultra violet waves",
    d: "Radio waves",
    correct: "a",
  },
  {
    question: "Self thermo regulated systems are called as -------",
    a: "Green methodologies",
    b: "Green synthesis",
    c: "Green principles",
    d: "Green concepts",
    correct: "a",
  },
  {
    question:
      "Which is the fundamental advantage of the sono chemistry in organic synthesis without solvents?",
    a: "High yields",
    b: "High energy requirements",
    c: "Use of solvents",
    d: "High wastes",
    correct: "a",
  },
  {
    question:
      "One of the principles of green chemistry says that to produce          goods",
    a: "Harmful",
    b: "Commercial",
    c: "Safer",
    d: "Most used",
    correct: "c",
  },
  {
    question: "After the use of chemicals, we must            them properly",
    a: "Use",
    b: "Reuse",
    c: "Dispose",
    d: "Store",
    correct: "c",
  },
  {
    question:
      "Green chemistry applies across the                of a chemical product like design, manufacture and use.",
    a: "Life cycle",
    b: "Properties",
    c: "Uses",
    d: "Efficiency",
    correct: "a",
  },
  {
    question:
      "We must use feedstock derived from annually renewable resources or from -------",
    a: "Chemicals",
    b: "Organic compounds",
    c: "Abundant waste",
    d: "Plants",
    correct: "c",
  },
  {
    question:
      "Green chemistry improves                 of chemical manufacturers",
    a: "Competitiveness",
    b: "Easiness of production",
    c: "Services",
    d: "Chemicals",
    correct: "a",
  },
  {
    question: "Green Chemistry reduces the use of ---------",
    a: "Liquid fuels",
    b: "Energy",
    c: "Gaseous fuels",
    d: "Solid fuels",
    correct: "b",
  },
  {
    question:
      "Green Chemistry reduces the              and protects the environment.",
    a: "Pollution",
    b: "Temperature",
    c: "Air",
    d: "Water",
    correct: "a",
  },
  {
    question:
      "According to the green chemistry, the chemical involved in the production must be ---------",
    a: "Non toxic",
    b: "Toxic",
    c: "Highly toxic",
    d: "Produces the toxic by products",
    correct: "a",
  },
  {
    question: "The green synthesis methods should have ----------",
    a: "Low efficiency",
    b: "High harmful products",
    c: "Low energy requirements",
    d: "Low atom efficiency",
    correct: "c",
  },
  {
    question:
      "Green synthesis method is            than the conventional method",
    a: "More costly",
    b: "More efficient",
    c: "Slower",
    d: "Less efficient",
    correct: "b",
  },
  {
    question:
      "Green chemistry is the process to design chemical reaction in ----------",
    a: "Environment friendly manner",
    b: "Industrial friendly manner",
    c: "Hazardous manner",
    d: "All of the mentioned",
    correct: "a",
  },
  {
    question:
      "Many beneficial chemicals such as pharmaceutical,agricultural chemicals, and various plastics are obtained by -------",
    a: "Physical process",
    b: "Chemical process",
    c: "Environmental process",
    d: "Biological process",
    correct: "c",
  },
  {
    question:
      "C2H4 +1/2 O2 → C2H4O(Ethylene oxide). This reaction will takes place under presence of catalyst. Find out the %atom economy",
    a: 0.25,
    b: 0.5,
    c: 0.75,
    d: 1,
    correct: "d",
  },
  {
    question:
      "The atom economy obtained for green synthesis is in the range of ---------",
    a: "62-70%",
    b: "72-82%",
    c: "40-50%",
    d: "90-100%",
    correct: "b",
  },
  {
    question: "Micro fluid reactor will minimise -------",
    a: "Solvent waste",
    b: "Efficiency",
    c: "No. of molecules",
    d: "No. of collisions",
    correct: "a",
  },
  {
    question: "Which of the following is the greenest solvent?",
    a: "Formaldehyde",
    b: "Benzene",
    c: "Ethanol",
    d: "Water",
    correct: "d",
  },
  {
    question: "The green synthesis methods should have--------",
    a: "Low efficiency",
    b: "High harmful product",
    c: "Low energy requirement",
    d: "Low atom efficiency",
    correct: "c",
  },
  {
    question:
      "which of the following is Not one of the twelve principles of Green chemistry?",
    a: "using renewable feed stock",
    b: "Designing safer chemicals and products",
    c: "Maximizing atom economy",
    d: "Avoiding the use of catalyst",
    correct: "d",
  },
  {
    question:
      "The term which microbial refers to the breakup within a compound due to microbial activity is-------",
    a: "Microbial degradation",
    b: "Agro degradation.",
    c: "Photo degradation",
    d: "Decomposition",
    correct: "a",
  },
  {
    question:
      "The term used to measure a product on person’s environmental impact is---------",
    a: "Handprint",
    b: "CO2 print",
    c: "Footprint",
    d: "Hazardous print",
    correct: "c",
  },
  {
    question:
      "In green synthesis by avoiding harmful by products the catalyst used is ----------",
    a: "Tungsten",
    b: "Benzene",
    c: "Cyclo hexane",
    d: "Adipic acid",
    correct: "a",
  },
  {
    question: "Business benefits of green chemistry include?",
    a: "Reduced costs associated with waste treatment and disposal",
    b: "Innovating greener products to entice customers",
    c: "Greater compliance with environmental legislation",
    d: "All of the mentioned",
    correct: "d",
  },
  {
    question:
      "Substances and energy sources needed for survival are called as……",
    a: "Man Made Resources",
    b: "Natural Resources",
    c: "Artificial Resources",
    d: "Fuel Resources",
    correct: "b",
  },
  {
    question: "Environmental Engineer is a enginneer who…..",
    a: "Solve Environmental Problems using Sharp Tools.",
    b: "Solve Environmental Problems using Scientific Tools.",
    c: "Solve Environmental Problems using Power Tools.",
    d: "Solve Environmental Problems using Fitting Tools.",
    correct: "a",
  },
  {
    question:
      "The study of how humans interact with their environment is called as",
    a: "Environmental Science",
    b: "Social Science",
    c: "Material Science",
    d: "Moleculer Science",
    correct: "a",
  },
  {
    question: "…..are the things around us with which we interact.",
    a: "Living Things",
    b: "Non-Living Things",
    c: "Our Built Environment",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "…….is Renewable Resources.",
    a: "Oil,",
    b: "coal,",
    c: "minerals",
    d: "Sunlight",
    correct: "d",
  },
  {
    question: "…….is Non-Renewable Resources.",
    a: "Sunlight",
    b: "Tidal Waves",
    c: "Coal",
    d: "Wind Energy",
    correct: "c",
  },
  {
    question: "In Environmental Science the natural world works on ….",
    a: "Engineering",
    b: "Political Science",
    c: "Biology",
    d: "All of the Above",
    correct: "d",
  },
  {
    question:
      "In…….the perception of what constitutes a problem varies between individuals and societies.",
    a: "Machine Problem",
    b: "Enviromental Problem",
    c: "Personal Problem",
    d: "No Problem",
    correct: "b",
  },
  {
    question: "Expanded food production is result of …..",
    a: "Reduced population.",
    b: "Increased GDP",
    c: "Increased population and consumption",
    d: "Reduced GDP",
    correct: "c",
  },
  {
    question: "…… is challenges of pollution.",
    a: "Waste products and artificial chemicals",
    b: "Natural wool",
    c: "Wood",
    d: "Cotton",
    correct: "a",
  },
  {
    question: "…… is challenges in biodiversity.",
    a: "Growing Biodiversity",
    b: "conservation of wild animals",
    c: "increase in aqua life",
    d: "extinction of species",
    correct: "d",
  },
  {
    question: "We do not run ……. On fuels",
    a: "Machines",
    b: "Trees",
    c: "Pumps",
    d: "Chemical Plants.",
    correct: "b",
  },
  {
    question: "Sustainable Solutions include……",
    a: "Organic agriculture Technology",
    b: "Reduces pollution Biodiversity",
    c: "Recycling Alternative fuels",
    d: "All of the Above",
    correct: "d",
  },
  {
    question:
      "The use of resources to satisfy current needs without compromising future availability of resources is ……",
    a: "Personal Development",
    b: "Sustainable development",
    c: "Self Development",
    d: "Nation's Development",
    correct: "b",
  },
  {
    question: "…..are the goals for sustainable development.",
    a: "Environmental goals",
    b: "Economic goals",
    c: "Social goals",
    d: "All of the Above",
    correct: "d",
  },
  {
    question:
      "Environmental science helps us understand our relationship with the…",
    a: "Environment",
    b: "Human beings",
    c: "Animals",
    d: "Fules",
    correct: "a",
  },
  {
    question: "Solving environmental problems can move us towards….",
    a: "Economical life",
    b: "Peaceful life",
    c: "Regulated Life",
    d: "Reduced Life",
    correct: "b",
  },
  {
    question:
      "Environmental science can help us find…..to environmental problems.",
    a: "balanced solutions",
    b: "Design Solutions",
    c: "Scientific Solutions",
    d: "Logical Solutions",
    correct: "a",
  },
  {
    question: "…..are sustainable development goals Indicators.",
    a: "No poverty",
    b: "Zero Hunger",
    c: "Quality Education",
    d: "All of the Above",
    correct: "d",
  },
  {
    question:
      "To achieve universal and equitable access to safe and affordable drinking water for all           indicator is used.",
    a: "Proportion of salt in sea water.",
    b: "Proportion of population using safely managed drinking water servic",
    c: "Proportion of toxins in sea water.",
    d: "Proportion of total dissolved solids.",
    correct: "b",
  },
  {
    question:
      "Suitable Indicator used for ensure universal access to affordable, reliable and modern energy services is…..",
    a: "Proportion of population with access to Internet",
    b: "Proportion of population with access to voting",
    c: "Proportion of population with access to electricity",
    d: "Proportion of population with access to personal bank account.",
    correct: "b",
  },
  {
    question: "Sustainable Development Goals 1 to 6 addresses…",
    a: "social development",
    b: "Economic development",
    c: "Environment issues",
    d: "All of the Above",
    correct: "a",
  },
  {
    question: "Sustainable Development Goals 7-11 are on….",
    a: "social development",
    b: "Economic development",
    c: "Environment issues",
    d: "All of the Above",
    correct: "b",
  },
  {
    question: "Sustainable Development Goals 12 to 15 are on……",
    a: "social development",
    b: "Economic development",
    c: "Environment issues",
    d: "All of the Above",
    correct: "c",
  },
  {
    question:
      "The Sustainable Development Goals 2030 agenda is Implemented on…",
    a: "January 1, 2016",
    b: "January 1, 2017",
    c: "January 1, 2018",
    d: "January 1, 2019",
    correct: "a",
  },
  {
    question: "2030 Agenda for Sustainable Development builds on….",
    a: "Vision and Principles",
    b: "Result framework",
    c: "Followup and Review",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "State Strategy for Achieving SDGs …..",
    a: "Identification of Indicators",
    b: "Mapping of Departments",
    c: "Outcome based monitoring",
    d: "All of the Above",
    correct: "d",
  },
  {
    question:
      "Which is not a Major National Programmes/ Initiatives aligning with SDGs…..",
    a: "National Food Security Mission",
    b: "Beti Bachao, Beti Padhao",
    c: "National Rural Finance Yojana",
    d: "Pradhan Mantri Ujjwala Yojana",
    correct: "c",
  },
  {
    question:
      "Extensive use of Information Technology in Sustainable Development are….",
    a: "Increase openness and leverage existing data.",
    b: "Improve the effective use of data.",
    c: "Enable data for action and decision making",
    d: "All of the Above",
    correct: "d",
  },
  {
    question:
      "Sustainable Development Goal (SDG) monitoring does not includes….",
    a: "Inclusion",
    b: "Participation",
    c: "Ordering",
    d: "Growth",
    correct: "c",
  },
  {
    question: "The Fundamental role of UNWTO is….",
    a: "promotion and development of tourism",
    b: "promotion and development of Manpower",
    c: "promotion and development of Art",
    d: "promotion and development of design",
    correct: "a",
  },
  {
    question: "Tourism as the services trade is multi facetted…… phenomenon.",
    a: "social",
    b: "cultural",
    c: "economic",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "….is not an UNWTO PROGRAMATIC PRIORITIES 2018-21",
    a: "Smarter Tourism",
    b: "Tourism growth",
    c: "Create Decent jobs",
    d: "To make pollution free",
    correct: "d",
  },
  {
    question: "…….is not a Materials Management Function",
    a: "Material Planninng",
    b: "Purchasing",
    c: "Inventory Control",
    d: "Wages",
    correct: "d",
  },
  {
    question: "Inventory control does not covers….",
    a: "Setting the inventory levels",
    b: "EOQ",
    c: "Direct Labour cost",
    d: "Lead time analysis",
    correct: "c",
  },
  {
    question: "……. is not a advantage of Integrated concept",
    a: "Better accountability",
    b: "Better coordination",
    c: "Better Life",
    d: "Better performance",
    correct: "c",
  },
  {
    question: "……. Is not a principle of Green Engineering.",
    a: "Design for Separation",
    b: "Maximum Efficiency",
    c: "Minimize material life expectency",
    d: "Minimize material diversity",
    correct: "c",
  },
  {
    question:
      "Large wastes such as appliances, furniture, trees and branches that cannot be handled by normal waste management processing methods are…..",
    a: "Natural Waste",
    b: "Bulky Waste",
    c: "Marine Waste",
    d: "Artificial Waste.",
    correct: "b",
  },
  {
    question:
      "the final disposal of solid waste by placinng in a controlled fashion in a place intended to be permanent is called as….",
    a: "Landfilling",
    b: "Waste Disposal",
    c: "Recycle",
    d: "Reuse",
    correct: "a",
  },
  {
    question:
      "A facility that uses solid waste materials to produce energy is called...",
    a: "economical plant.",
    b: "Thermal Plant",
    c: "Waste to energy plant",
    d: "Hydroelectric Power plant.",
    correct: "c",
  },
  {
    question:
      "Domestic, commercial and industrial wastes especially common as co-disposal of wastes are called as….",
    a: "Liquid Waste",
    b: "Solid Wastes",
    c: "Chemical Waste",
    d: "Toxic Waste.",
    correct: "b",
  },
  {
    question: "….are not a biodegradable materials.",
    a: "Paper",
    b: "Wood",
    c: "Plastics",
    d: "Fruits",
    correct: "c",
  },
  {
    question:
      "waste that is reactive, toxic, corrosive, or otherwise dangerous to living things and environment are…..",
    a: "Solid Waste",
    b: "Liquid Waste",
    c: "Hazardous Waste",
    d: "Artificial Waste.",
    correct: "c",
  },
  {
    question:
      "Substances safe to use commercially, industrially, agriculturally is….",
    a: "Non- Hazardous Waste",
    b: "Artificial Waste.",
    c: "Hazardous Waste",
    d: "Liquid Waste",
    correct: "a",
  },
  {
    question: "….is not a characteristics of solid waste.",
    a: "Physical",
    b: "Chemical",
    c: "Mechanical",
    d: "Biological",
    correct: "c",
  },
  {
    question:
      "…... includes the determination of percent contents of various ingredients of the solid waste.",
    a: "Physical Characteristics",
    b: "Chemical Characteristics",
    c: "Biological Characteristics",
    d: "Mechanical Characteristics",
    correct: "a",
  },
  {
    question:
      "…..is used primarily for combustion and waste to energy (WTE) calculations but can also be used to estimate biological and chemical behaviours.",
    a: "Physical Characteristics",
    b: "Chemical Characteristics",
    c: "Biological Characteristics",
    d: "Mechanical Characteristics",
    correct: "b",
  },
  {
    question:
      "In …… ,Volatile Combustible Matter (VCM) (temp increased to 950 C, closed crucible is processed.",
    a: "Ultimate Analysis",
    b: "Proximate Analysis",
    c: "Fusion Point",
    d: "Energy Content",
    correct: "b",
  },
  {
    question:
      "Organic fraction often equated with the volatile solids (VS) content of the waste is called as…..",
    a: "Solid Waste",
    b: "Liquid Waste",
    c: "Hazardous Waste",
    d: "Biodegradability",
    correct: "d",
  },
  {
    question: "…… is not the way of Solid waste collection and transport.",
    a: "Containers",
    b: "Waste Bags",
    c: "Dust Bins",
    d: "wooden Box",
    correct: "d",
  },
  {
    question: "….is not under Municipal Collection Services of solid waste",
    a: "Curb",
    b: "Garden Pickup",
    c: "Alley",
    d: "Set out ans set back",
    correct: "b",
  },
  {
    question:
      "The ……. Method in which the house owner is responsible for placing solid waste container at the curb on schedule day.",
    a: "Alley",
    b: "Crub",
    c: "Set out ans set back",
    d: "Garden Pickup",
    correct: "b",
  },
  {
    question: "…… is not a treatment and disposal of solid waste",
    a: "Composting",
    b: "Landfilling",
    c: "Disposing in water bodies.",
    d: "Recycling",
    correct: "c",
  },
  {
    question:
      "….. is a process in which organic matter of solid waste is decomposed and converted to humus and mineral compounnds.",
    a: "Composting",
    b: "Landfilling",
    c: "Disposing in water bodies.",
    d: "Recycling",
    correct: "a",
  },
  {
    question:
      "…...is a waste treatment process that involves the combustion of organic substances contained in waste materials.",
    a: "Incineration",
    b: "Composting",
    c: "Landfilling",
    d: "Disposing in water bodies.",
    correct: "a",
  },
  {
    question:
      "Heating of the solid waste at very high temp. in absence of air is…..",
    a: "Composting",
    b: "Pyrolysis",
    c: "Incineration",
    d: "Landfilling",
    correct: "b",
  },
  {
    question: "…….is processing used materials into new products.",
    a: "Reuse",
    b: "Reduce",
    c: "Recycling",
    d: "Reconnect",
    correct: "c",
  },
  {
    question:
      "……. reduce the consumption of fresh raw materials, reduce energy usage, reduce air pollution and water pollution.",
    a: "Reuse",
    b: "Reduce",
    c: "Recycling",
    d: "Reconnect",
    correct: "c",
  },
];
let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadQuestion = () => {
  if (total === index) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
};

document.querySelector("#submit").addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
    index++;
    loadQuestion();
  } else {
    alert(`Please Try Again`);
    incorrect++;
  }

});

const getAnswer = () => {
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });

  return ans;
};

const reset = () => {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
};

const quizEnd = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `;
};

loadQuestion(index);
