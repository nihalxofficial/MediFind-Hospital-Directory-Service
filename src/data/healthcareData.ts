// Centralized Healthcare Types & Dummy Datasets for MediFind

// 1. HOSPITAL TYPES & DATA
export interface HospitalDoctor {
  name: string;
  specialty: string;
  avatar: string;
  experience: string;
}

export interface HospitalItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  categoryLabel: string;
  image: string;
  rating: number;
  reviewsCount: number;
  location: {
    address: string;
    city: string;
    distance?: string;
  };
  emergency24_7: boolean;
  bedCount: number;
  doctorsCount: number;
  establishedYear: number;
  services: string[];
  facilities: string[];
  featuredDoctors: HospitalDoctor[];
  phone: string;
  verified: boolean;
}

export interface CategoryOption {
  id: string;
  label: string;
}

export const hospitalCategories: CategoryOption[] = [
  { id: 'all', label: 'All Hospitals' },
  { id: 'multispecialty', label: 'Multi-Specialty' },
  { id: 'cardiac', label: 'Cardiac Centers' },
  { id: 'children', label: 'Children Hospitals' },
  { id: 'trauma', label: 'Emergency & Trauma' },
  { id: 'ortho', label: 'Orthopedic & Spine' },
];

export const dummyHospitals: HospitalItem[] = [
  {
    id: 'hosp-central',
    name: 'MediFind Central Hospital',
    tagline: 'Premier Multi-Disciplinary Tertiary Care & Research Center',
    category: 'multispecialty',
    categoryLabel: 'Multi-Specialty',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviewsCount: 428,
    location: {
      address: '742 Evergreen Ave',
      city: 'Downtown',
      distance: '1.2 km'
    },
    emergency24_7: true,
    bedCount: 450,
    doctorsCount: 120,
    establishedYear: 2005,
    services: ['Cardiology', 'Neurology', 'Robotic Surgery', 'Oncology', 'Organ Transplant'],
    facilities: ['Helipad Access', '3T MRI Lab', 'Hybrid ICU', '24/7 Pharmacy'],
    featuredDoctors: [
      {
        name: 'Dr. Sarah Mitchell',
        specialty: 'Chief Cardiologist',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop',
        experience: '16 Yrs'
      },
      {
        name: 'Dr. Robert Taylor',
        specialty: 'Lead Neurosurgeon',
        avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop',
        experience: '19 Yrs'
      }
    ],
    phone: '+1 (800) 247-0001',
    verified: true
  },
  {
    id: 'hosp-metro',
    name: 'Metro City Trauma & Acute ER',
    tagline: 'Level-1 Verified Regional Emergency & Critical Care Hospital',
    category: 'trauma',
    categoryLabel: 'Trauma & Emergency',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviewsCount: 380,
    location: {
      address: '55 North Highway Medical Complex',
      city: 'North Hub',
      distance: '2.1 km'
    },
    emergency24_7: true,
    bedCount: 320,
    doctorsCount: 95,
    establishedYear: 2010,
    services: ['Trauma Surgery', 'Acute Resuscitation', 'Orthopedics', 'Burn ICU', 'Toxicology'],
    facilities: ['Dedicated Trauma Bays', 'Rapid CT Suite', 'Blood Bank', 'Ambulance Helipad'],
    featuredDoctors: [
      {
        name: 'Dr. Marcus Vance',
        specialty: 'Trauma Director',
        avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop',
        experience: '14 Yrs'
      },
      {
        name: 'Dr. Lisa Wong',
        specialty: 'Critical Care Anesthesia',
        avatar: 'https://images.unsplash.com/photo-1594824813576-2415175949d0?q=80&w=200&auto=format&fit=crop',
        experience: '11 Yrs'
      }
    ],
    phone: '+1 (800) 247-0002',
    verified: true
  },
  {
    id: 'hosp-stjude',
    name: 'St. Jude Heart & Vascular Institute',
    tagline: 'Specialized Center of Excellence in Cardiovascular Surgery',
    category: 'cardiac',
    categoryLabel: 'Cardiac Center',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
    rating: 4.95,
    reviewsCount: 512,
    location: {
      address: '108 Palm Medical Plaza',
      city: 'Westside',
      distance: '3.4 km'
    },
    emergency24_7: true,
    bedCount: 280,
    doctorsCount: 75,
    establishedYear: 2012,
    services: ['Interventional Cardiology', 'Electrophysiology', 'Valve Repair', 'Pediatric Heart Care'],
    facilities: ['3 Biplane Cath Labs', 'Cardiac Rehab Gym', 'ECMO Unit', 'Tele-Monitoring ICU'],
    featuredDoctors: [
      {
        name: 'Dr. Anthony Fauci-Lee',
        specialty: 'Cardiovascular Surgeon',
        avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=200&auto=format&fit=crop',
        experience: '22 Yrs'
      },
      {
        name: 'Dr. Clara Oswald',
        specialty: 'Echocardiologist',
        avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200&auto=format&fit=crop',
        experience: '15 Yrs'
      }
    ],
    phone: '+1 (800) 247-0003',
    verified: true
  },
  {
    id: 'hosp-children',
    name: 'Children Hope Regional Center',
    tagline: 'Compassionate Pediatric Healthcare & Neonatal Specialty Care',
    category: 'children',
    categoryLabel: 'Children Hospital',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    rating: 4.92,
    reviewsCount: 395,
    location: {
      address: '22 Blossom Way',
      city: 'Uptown',
      distance: '4.2 km'
    },
    emergency24_7: true,
    bedCount: 220,
    doctorsCount: 65,
    establishedYear: 2015,
    services: ['Pediatric Surgery', 'Neonatal Level-IV NICU', 'Adolescent Medicine', 'Pediatric Oncology'],
    facilities: ['Child-Friendly Playrooms', 'Parent Stay Suites', 'Sensory Therapy Lab', 'Pediatric ER'],
    featuredDoctors: [
      {
        name: 'Dr. Elena Rostova',
        specialty: 'Neonatologist',
        avatar: 'https://images.unsplash.com/photo-1594824813576-2415175949d0?q=80&w=200&auto=format&fit=crop',
        experience: '12 Yrs'
      }
    ],
    phone: '+1 (800) 247-0004',
    verified: true
  },
  {
    id: 'hosp-spine',
    name: 'Apex Orthopedic & Spine Hospital',
    tagline: 'Advanced Joint Reconstruction, Sports Medicine & Neurosurgery',
    category: 'ortho',
    categoryLabel: 'Orthopedic & Spine',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&auto=format&fit=crop',
    rating: 4.87,
    reviewsCount: 290,
    location: {
      address: '900 Summit Ridge Blvd',
      city: 'East Hills',
      distance: '5.6 km'
    },
    emergency24_7: false,
    bedCount: 180,
    doctorsCount: 50,
    establishedYear: 2017,
    services: ['Robotic Knee Replacement', 'Endoscopic Spine Surgery', 'Sports Injury Clinic', 'Physiotherapy'],
    facilities: ['Motion Analysis Lab', 'Hydrotherapy Pool', 'Computer-Navigated ORs', 'Private Recovery Suites'],
    featuredDoctors: [
      {
        name: 'Dr. David Rodriguez',
        specialty: 'Spine Surgeon',
        avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop',
        experience: '18 Yrs'
      }
    ],
    phone: '+1 (800) 247-0005',
    verified: true
  },
  {
    id: 'hosp-beacon',
    name: 'Beacon Cancer Care & Research Wing',
    tagline: 'Comprehensive Oncology, Immunotherapy & Precision Gene Therapy',
    category: 'multispecialty',
    categoryLabel: 'Multi-Specialty',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    rating: 4.96,
    reviewsCount: 340,
    location: {
      address: '304 Innovation Park Dr',
      city: 'Biotech Corridor',
      distance: '6.8 km'
    },
    emergency24_7: true,
    bedCount: 260,
    doctorsCount: 80,
    establishedYear: 2019,
    services: ['Medical Oncology', 'Proton Radiation Therapy', 'Bone Marrow Transplant', 'Clinical Trials'],
    facilities: ['Linear Accelerators', 'Infusion Center', 'Genomic Sequencing Lab', 'Palliative Suites'],
    featuredDoctors: [
      {
        name: 'Dr. Jennifer Hayes',
        specialty: 'Medical Oncologist',
        avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200&auto=format&fit=crop',
        experience: '15 Yrs'
      }
    ],
    phone: '+1 (800) 247-0006',
    verified: true
  }
];

// 2. DOCTORS TYPES & DATA
export interface DoctorItem {
  id: string;
  name: string;
  title: string;
  specialty: string;
  specialtyCategory: string;
  experience: string;
  hospital: string;
  location: string;
  rating: number;
  reviewsCount: number;
  availableDays: string;
  avatar: string;
  consultationFee: string;
  verified: boolean;
}

export const doctorSpecialties: CategoryOption[] = [
  { id: 'all', label: 'All Specialties' },
  { id: 'cardiology', label: 'Cardiology' },
  { id: 'neurology', label: 'Neurology' },
  { id: 'orthopedics', label: 'Orthopedics' },
  { id: 'pediatrics', label: 'Pediatrics' },
  { id: 'oncology', label: 'Oncology' },
  { id: 'dermatology', label: 'Dermatology' },
];

export const dummyDoctors: DoctorItem[] = [
  {
    id: 'doc-1',
    name: 'Dr. Sarah Mitchell, MD, FACC',
    title: 'Chief Interventional Cardiologist',
    specialty: 'Cardiology',
    specialtyCategory: 'cardiology',
    experience: '16+ Years Experience',
    hospital: 'MediFind Central Hospital',
    location: 'Downtown, Medical District',
    rating: 4.9,
    reviewsCount: 312,
    availableDays: 'Mon - Fri • 9:00 AM - 4:00 PM',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
    consultationFee: '$120',
    verified: true
  },
  {
    id: 'doc-2',
    name: 'Dr. Michael Chang, MD, PhD',
    title: 'Senior Neurosurgeon & Spine Specialist',
    specialty: 'Neurology',
    specialtyCategory: 'neurology',
    experience: '14+ Years Experience',
    hospital: 'St. Jude Neurological Institute',
    location: 'Westside Healthcare Plaza',
    rating: 4.95,
    reviewsCount: 284,
    availableDays: 'Tue, Thu, Sat • 10:00 AM - 3:00 PM',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop',
    consultationFee: '$150',
    verified: true
  },
  {
    id: 'doc-3',
    name: 'Dr. Elena Rostova, MD',
    title: 'Chief of Pediatric Care',
    specialty: 'Pediatrics',
    specialtyCategory: 'pediatrics',
    experience: '12+ Years Experience',
    hospital: 'Children Hope Regional Center',
    location: 'Uptown Pediatric Wing',
    rating: 4.88,
    reviewsCount: 410,
    availableDays: 'Mon - Sat • 8:30 AM - 2:30 PM',
    avatar: 'https://images.unsplash.com/photo-1594824813576-2415175949d0?q=80&w=400&auto=format&fit=crop',
    consultationFee: '$95',
    verified: true
  },
  {
    id: 'doc-4',
    name: 'Dr. David Rodriguez, MD, FAAOS',
    title: 'Consultant Orthopedic & Joint Surgeon',
    specialty: 'Orthopedics',
    specialtyCategory: 'orthopedics',
    experience: '18+ Years Experience',
    hospital: 'Metro City Trauma & Orthopedic Hub',
    location: 'North Medical Complex',
    rating: 4.92,
    reviewsCount: 360,
    availableDays: 'Mon, Wed, Fri • 9:00 AM - 5:00 PM',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop',
    consultationFee: '$130',
    verified: true
  },
  {
    id: 'doc-5',
    name: 'Dr. Jennifer Hayes, MD',
    title: 'Surgical & Medical Oncologist',
    specialty: 'Oncology',
    specialtyCategory: 'oncology',
    experience: '15+ Years Experience',
    hospital: 'MediFind Comprehensive Cancer Center',
    location: 'Downtown Cancer Wing',
    rating: 4.96,
    reviewsCount: 220,
    availableDays: 'Mon - Thu • 9:30 AM - 3:30 PM',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop',
    consultationFee: '$160',
    verified: true
  },
  {
    id: 'doc-6',
    name: 'Dr. Alexander Bennett, MD',
    title: 'Clinical Dermatologist & Laser Specialist',
    specialty: 'Dermatology',
    specialtyCategory: 'dermatology',
    experience: '10+ Years Experience',
    hospital: 'St. Jude Skin & Aesthetics Clinic',
    location: 'Westside Aesthetics Wing',
    rating: 4.87,
    reviewsCount: 195,
    availableDays: 'Tue - Sat • 11:00 AM - 6:00 PM',
    avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop',
    consultationFee: '$110',
    verified: true
  }
];

// 3. SERVICES TYPES & DATA
export interface HospitalBranchRef {
  id: string;
  name: string;
  city: string;
  branch?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  iconName: string;
  iconBg: string;
  iconColor: string;
  features: string[];
  hospitals: HospitalBranchRef[];
  specialistsCount: number;
  rating: number;
  available24_7?: boolean;
}

export const serviceCategories: CategoryOption[] = [
  { id: 'all', label: 'All Services' },
  { id: 'cardio', label: 'Cardiology' },
  { id: 'neuro', label: 'Neurology' },
  { id: 'pediatric', label: 'Pediatrics' },
  { id: 'diag', label: 'Diagnostics & Labs' },
  { id: 'ortho', label: 'Orthopedics' },
];

export const dummyServices: ServiceItem[] = [
  {
    id: 'cardio-care',
    title: 'Cardiology & Heart Care',
    category: 'cardio',
    categoryLabel: 'Heart Center',
    description: 'Comprehensive cardiac assessments, ECG, angioplasty, and 24/7 rapid response for acute coronary conditions.',
    iconName: 'HeartPulse',
    iconBg: 'bg-rose-50 border-rose-100',
    iconColor: 'text-rose-600',
    features: ['Coronary Angiography', '4D Echocardiography', 'Cardiac Rehabilitation'],
    hospitals: [
      { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-2', name: 'St. Jude Heart Institute', city: 'Westside' }
    ],
    specialistsCount: 12,
    rating: 4.9,
    available24_7: true,
  },
  {
    id: 'neuro-care',
    title: 'Neurology & Brain Health',
    category: 'neuro',
    categoryLabel: 'Neuro Sciences',
    description: 'Expert diagnostics and surgical interventions for stroke, epilepsy, neuro-muscular disorders, and spine rehabilitation.',
    iconName: 'Brain',
    iconBg: 'bg-indigo-50 border-indigo-100',
    iconColor: 'text-indigo-600',
    features: ['Digital Brain EEG', 'Spine & Trauma Surgery', 'Stroke Intervention'],
    hospitals: [
      { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-3', name: 'St. Jude Neurological Institute', city: 'Westside' }
    ],
    specialistsCount: 8,
    rating: 4.8,
  },
  {
    id: 'pediatric-care',
    title: 'Pediatrics & Child Care',
    category: 'pediatric',
    categoryLabel: 'Child Health',
    description: 'Dedicated neonatal intensive care, pediatric surgery, developmental assessments, and child wellness immunization clinics.',
    iconName: 'Baby',
    iconBg: 'bg-amber-50 border-amber-100',
    iconColor: 'text-amber-600',
    features: ['Level-IV NICU Incubators', 'Pediatric Surgery', 'Child Immunization'],
    hospitals: [
      { id: 'hosp-4', name: 'Children Hope Regional Center', city: 'Uptown' }
    ],
    specialistsCount: 15,
    rating: 4.95,
  },
  {
    id: 'diagnostic-labs',
    title: 'Diagnostics & Pathology Labs',
    category: 'diag',
    categoryLabel: 'Laboratory',
    description: 'High-speed automated pathology tests, genomic sequencing, infectious disease panels, and certified rapid reporting.',
    iconName: 'Microscope',
    iconBg: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-600',
    features: ['Full Blood & Metabolic Panels', 'Molecular PCR Testing', 'Digital Pathology Reports'],
    hospitals: [
      { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-5', name: 'Metro City Trauma Hospital', city: 'North Hub' }
    ],
    specialistsCount: 20,
    rating: 4.85,
    available24_7: true,
  },
  {
    id: 'ortho-care',
    title: 'Orthopedic & Joint Surgery',
    category: 'ortho',
    categoryLabel: 'Bone & Joints',
    description: 'Minimally invasive arthroscopic surgery, robotic total knee replacement, fracture care, and personalized sports physiotherapy.',
    iconName: 'Bone',
    iconBg: 'bg-sky-50 border-sky-100',
    iconColor: 'text-sky-600',
    features: ['Robotic Joint Replacement', 'Arthroscopic Repair', 'Sports Injury Rehab'],
    hospitals: [
      { id: 'hosp-6', name: 'Apex Orthopedic & Spine Hospital', city: 'East Hills' }
    ],
    specialistsCount: 10,
    rating: 4.9,
  },
  {
    id: 'ophthalmology-care',
    title: 'Ophthalmology & Eye Surgery',
    category: 'diag',
    categoryLabel: 'Vision Center',
    description: 'Femtosecond laser cataract surgery, refractive LASIK vision correction, retinal detachment surgery, and glaucoma therapy.',
    iconName: 'Eye',
    iconBg: 'bg-purple-50 border-purple-100',
    iconColor: 'text-purple-600',
    features: ['Blade-free LASIK', 'Retinal Micro-Surgery', 'Glaucoma Laser Therapy'],
    hospitals: [
      { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' }
    ],
    specialistsCount: 6,
    rating: 4.75,
  }
];

// 4. DIAGNOSTIC TESTS TYPES & DATA
export interface TestLabHospital {
  id: string;
  name: string;
  city: string;
}

export interface MedicalTestItem {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  iconName: string;
  iconBg: string;
  iconColor: string;
  parametersCount: number;
  sampleType: string;
  fastingRequired: string;
  reportTime: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewsCount: number;
  homeCollection: boolean;
  hospitals: TestLabHospital[];
}

export const testCategories: CategoryOption[] = [
  { id: 'all', label: 'All Tests' },
  { id: 'checkup', label: 'Full Body Checkups' },
  { id: 'blood', label: 'Blood & Pathology' },
  { id: 'imaging', label: 'Imaging & MRI Scans' },
  { id: 'cardiac', label: 'Heart & Lipid' },
  { id: 'diabetes', label: 'Diabetes & Thyroid' },
];

export const dummyTests: MedicalTestItem[] = [
  {
    id: 'full-body-advanced',
    name: 'Comprehensive Full Body Executive Checkup',
    category: 'checkup',
    categoryLabel: 'Full Body Package',
    description: 'Complete systemic screening covering liver, kidney, lipid profile, thyroid, CBC, and vital vitamin biomarkers.',
    iconName: 'Activity',
    iconBg: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-600',
    parametersCount: 84,
    sampleType: 'Blood & Urine',
    fastingRequired: '10-12 Hrs Fasting',
    reportTime: 'Same Day (6-8 Hrs)',
    price: 89,
    originalPrice: 140,
    discountPercent: 36,
    rating: 4.9,
    reviewsCount: 520,
    homeCollection: true,
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Diagnostic Lab', city: 'Downtown' },
      { id: 'hosp-stjude', name: 'St. Jude Health Hub', city: 'Westside' }
    ]
  },
  {
    id: 'mri-brain-spine',
    name: '3T High-Definition Brain & Spine MRI Scan',
    category: 'imaging',
    categoryLabel: 'Radiology / MRI',
    description: 'Ultra high-resolution multi-planar magnetic resonance imaging with digital contrast for neurological diagnosis.',
    iconName: 'Scan',
    iconBg: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-600',
    parametersCount: 12,
    sampleType: 'Digital Scan',
    fastingRequired: 'No Fasting Needed',
    reportTime: 'Within 4 Hours',
    price: 199,
    originalPrice: 280,
    discountPercent: 29,
    rating: 4.95,
    reviewsCount: 310,
    homeCollection: false,
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-metro', name: 'Metro City Trauma Center', city: 'North Hub' }
    ]
  },
  {
    id: 'cardiac-risk-panel',
    name: 'Advanced Cardiac Risk & Lipid Profile',
    category: 'cardiac',
    categoryLabel: 'Cardiology Test',
    description: 'In-depth cardiovascular assessment evaluating High-Sensitivity Troponin-I, hs-CRP, Apolipoproteins, and LDL/HDL fractions.',
    iconName: 'Activity',
    iconBg: 'bg-rose-50 border-rose-100',
    iconColor: 'text-rose-600',
    parametersCount: 28,
    sampleType: 'Blood Sample',
    fastingRequired: '12 Hrs Fasting',
    reportTime: 'Within 6 Hours',
    price: 55,
    originalPrice: 85,
    discountPercent: 35,
    rating: 4.88,
    reviewsCount: 420,
    homeCollection: true,
    hospitals: [
      { id: 'hosp-stjude', name: 'St. Jude Heart Institute', city: 'Westside' }
    ]
  },
  {
    id: 'diabetes-thyroid-care',
    name: 'Complete Diabetes & Thyroid Hormone Suite',
    category: 'diabetes',
    categoryLabel: 'Endocrine Panel',
    description: 'Fasting Plasma Glucose, HbA1c 3-Month Average, Free T3, Free T4, and Ultrasensitive TSH for hormonal balance.',
    iconName: 'Droplet',
    iconBg: 'bg-amber-50 border-amber-100',
    iconColor: 'text-amber-600',
    parametersCount: 16,
    sampleType: 'Blood Sample',
    fastingRequired: '10-12 Hrs Fasting',
    reportTime: 'Within 4 Hours',
    price: 45,
    originalPrice: 70,
    discountPercent: 35,
    rating: 4.82,
    reviewsCount: 290,
    homeCollection: true,
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Diagnostic Lab', city: 'Downtown' }
    ]
  },
  {
    id: 'cancer-screening-panel',
    name: 'Early Cancer Tumor Marker Screening',
    category: 'blood',
    categoryLabel: 'Oncology Labs',
    description: 'Specialized blood analysis evaluating CEA, CA-125, PSA, AFP, and CA 19-9 for preventative cancer detection.',
    iconName: 'Microscope',
    iconBg: 'bg-purple-50 border-purple-100',
    iconColor: 'text-purple-600',
    parametersCount: 22,
    sampleType: 'Blood Sample',
    fastingRequired: 'Overnight Fasting',
    reportTime: '24 Hours',
    price: 110,
    originalPrice: 175,
    discountPercent: 37,
    rating: 4.91,
    reviewsCount: 185,
    homeCollection: true,
    hospitals: [
      { id: 'hosp-beacon', name: 'Beacon Cancer Center Lab', city: 'Biotech Corridor' }
    ]
  },
  {
    id: 'ct-chest-abdomen',
    name: '128-Slice High-Speed Chest & Abdominal CT',
    category: 'imaging',
    categoryLabel: 'Radiology / CT',
    description: 'Rapid low-radiation helical volumetric scanning for pulmonary, renal, and gastrointestinal clinical diagnostics.',
    iconName: 'Scan',
    iconBg: 'bg-cyan-50 border-cyan-100',
    iconColor: 'text-cyan-600',
    parametersCount: 18,
    sampleType: 'CT Imaging Scan',
    fastingRequired: '4 Hrs Fasting',
    reportTime: 'Within 3 Hours',
    price: 160,
    originalPrice: 230,
    discountPercent: 30,
    rating: 4.86,
    reviewsCount: 240,
    homeCollection: false,
    hospitals: [
      { id: 'hosp-metro', name: 'Metro City Trauma Hospital', city: 'North Hub' }
    ]
  }
];

// 5. FACILITIES TYPES & DATA
export interface FacilityHospitalRef {
  id: string;
  name: string;
  city: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  categoryLabel: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
  hospitals: FacilityHospitalRef[];
  available24_7?: boolean;
}

export const facilityCategories: CategoryOption[] = [
  { id: 'all', label: 'All Facilities' },
  { id: 'surgical', label: 'Robotic & Surgical' },
  { id: 'emergency', label: 'Emergency & Helipad' },
  { id: 'imaging', label: 'Diagnostic Imaging' },
  { id: 'critical', label: 'Intensive Care (ICU)' },
  { id: 'comfort', label: 'VIP Rooms & Care' },
];

export const dummyFacilities: FacilityItem[] = [
  {
    id: 'robotic-surgery',
    title: 'Robotic & Hybrid Surgical Suites',
    tagline: 'Da Vinci Xi Robotic Assisted Precision Surgery',
    category: 'surgical',
    categoryLabel: 'Robotic Surgery',
    description: 'Ultra-modern laminar air flow modular operating theaters equipped with 4K 3D robotic visualization for minimally invasive procedures.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop',
    badge: 'Next-Gen Robotics',
    features: [
      'Da Vinci Xi 4-Arm Robotic System',
      'Laminar Flow 99.99% Sterile HEPA Cleanrooms',
      'Intraoperative 3D Imaging Navigation'
    ],
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-stjude', name: 'St. Jude Heart Institute', city: 'Westside' }
    ]
  },
  {
    id: 'emergency-helipad',
    title: '24/7 Trauma Center & Rooftop Helipad',
    tagline: 'Instant Air Ambulance Evacuation & Level-1 Trauma Triage',
    category: 'emergency',
    categoryLabel: 'Trauma & Air Evac',
    description: 'Dedicated rooftop helipad with direct high-speed elevator access to trauma resuscitation bays, blood bank, and emergency surgical suites.',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=800&auto=format&fit=crop',
    badge: 'Zero-Delay Response',
    features: [
      'Direct Helipad-to-OT High Speed Elevators',
      'Level-1 Multi-Bed Resuscitation Bays',
      'Dedicated Emergency Ultrasound & CT Suite'
    ],
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-metro', name: 'Metro City Trauma Center', city: 'North Hub' }
    ],
    available24_7: true
  },
  {
    id: '3t-mri-imaging',
    title: '3T Silent MRI & 256-Slice Dual Energy CT',
    tagline: 'Ultra-High Definition Diagnostic Imaging Lab',
    category: 'imaging',
    categoryLabel: 'Advanced Imaging',
    description: 'Wide-bore acoustic reduction MRI providing crystal clear neural, cardiovascular, and musculoskeletal scans in half the standard exam time.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
    badge: 'Low-Radiation Imaging',
    features: [
      '3.0 Tesla Full Body High-Field MRI',
      '256-Slice Fast Cardiac CT Angiogram',
      'Instant AI-Aided Radiologist Reporting'
    ],
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-stjude', name: 'St. Jude Heart Institute', city: 'Westside' }
    ],
    available24_7: true
  },
  {
    id: 'hybrid-icu-ward',
    title: 'Smart Tele-ICU & Critical Care Units',
    tagline: 'Continuous AI Hemodynamic Monitoring & Isolation Pods',
    category: 'critical',
    categoryLabel: 'Critical Care ICU',
    description: 'Negative-pressure isolation rooms, bedside ECMO life support, continuous multi-parameter telemetry, and 1:1 dedicated nursing ratios.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    badge: '1:1 Critical Nursing',
    features: [
      'Negative Pressure Biocontainment Suites',
      'Integrated High-Flow Oxygen & Ventilators',
      'Centralized 24/7 Intensivist Oversight'
    ],
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-metro', name: 'Metro City Trauma Center', city: 'North Hub' }
    ],
    available24_7: true
  },
  {
    id: 'vip-recovery-suites',
    title: 'VIP Private Suites & Healing Gardens',
    tagline: 'Luxury Patient Suites with Family Living Quarters',
    category: 'comfort',
    categoryLabel: 'VIP Suites',
    description: 'Spacious patient suites with smart room automation, private attendant bedrooms, customized chef-prepared nutrition, and serene rooftop gardens.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop',
    badge: 'Premium Comfort',
    features: [
      'En-Suite Family Bedroom & Kitchenette',
      'High-Speed Wi-Fi & Smart Entertainment',
      'Personalized Concierge & Dietary Care'
    ],
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-children', name: 'Children Hope Regional Center', city: 'Uptown' }
    ]
  },
  {
    id: 'blood-bank-path',
    title: 'Automated 24/7 Blood Bank & Cryo-Storage',
    tagline: 'Rapid Component Separation & Rare Group Reserve',
    category: 'emergency',
    categoryLabel: 'Blood Bank',
    description: 'State-of-the-art blood bank with automated cross-matching, platelet apheresis units, and rare blood group rapid dispatch supply.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    badge: 'Rapid Cross-Match',
    features: [
      'Automated Gel-Card Cross Matching',
      'Ultra-Low Cryo-Plasma Storage Units',
      'Mobile Blood Donation Express Fleet'
    ],
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' }
    ],
    available24_7: true
  }
];
