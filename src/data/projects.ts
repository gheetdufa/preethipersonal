/**
 * Project Data
 * 
 * Each project structured as a research case study.
 * Content follows academic conventions: problem, method, result.
 */

import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'rna-therapeutics',
    title: 'RNA Structure-Function Research',
    abstract: 'Investigated RNA structure-function relationships using X-ray crystallography to develop RNA-targeted therapeutics.',
    problem: 'RNA molecules play critical roles in genetic and infectious diseases, but designing effective therapeutics requires deep understanding of their three-dimensional structures and how structure determines function.',
    constraints: [
      'Protein purification protocols',
      'X-ray crystallography resolution limits',
      'RNA stability during analysis',
      'Therapeutic delivery considerations'
    ],
    methodology: 'Applied X-ray crystallography techniques combined with protein purification methods to analyze RNA structures. Correlated structural findings with functional outcomes to identify therapeutic targets for genetic and infectious diseases.',
    outcome: 'Contributed to ongoing research developing RNA-targeted therapeutics with potential applications in treating genetic disorders and infectious diseases.',
    domains: ['Biochemistry', 'Structural Biology', 'Therapeutics'],
    period: '2023–2024'
  },
  {
    id: 'biomicrofluidics',
    title: 'Biopolymer Hydrogel Systems',
    abstract: 'Engineered 3D hydrogels and membrane systems from marine-derived biopolymers for cell immobilization applications.',
    problem: 'Conventional synthetic materials for cell culture and tissue engineering often lack biocompatibility and sustainable sourcing. Marine biopolymers offer potential alternatives but require optimized fabrication methods.',
    constraints: [
      'Chitosan extraction from crab shells',
      'Alginate processing from seaweed',
      'Mechanical stability requirements',
      'Cell viability maintenance'
    ],
    methodology: 'Worked with chitosan and alginate biopolymers to construct 3D hydrogels, fabricate freestanding membranes, establish bilayer lipid membranes, and develop protocols for biomolecule assembly and living cell immobilization.',
    outcome: 'Successfully developed functional biopolymer systems capable of supporting cell immobilization, demonstrating viability of sustainable marine-derived materials for bioengineering applications.',
    domains: ['Biomaterials', 'Microfluidics', 'Cell Engineering'],
    period: '2023'
  },
  {
    id: 'clinical-research',
    title: 'Clinical Research at Proton Treatment Center',
    abstract: 'Conducted clinical research supporting proton therapy protocols at Maryland Proton Treatment Center.',
    problem: 'Proton therapy offers precise cancer treatment with reduced damage to surrounding tissue, but requires rigorous clinical research to optimize protocols and validate outcomes across patient populations.',
    constraints: [
      'Good Clinical Practice (GCP) compliance',
      'Patient data confidentiality',
      'Treatment protocol standardization',
      'Multi-disciplinary coordination'
    ],
    methodology: 'Applied Good Clinical Practice standards while managing clinical data using Microsoft Excel. Collaborated with medical teams to support research protocols and ensure regulatory compliance in clinical trials.',
    outcome: 'Contributed to clinical research infrastructure supporting proton therapy advancement, gaining hands-on experience in GCP-compliant research methodologies.',
    domains: ['Clinical Research', 'Oncology', 'Data Analysis'],
    period: '2023–2024'
  },
  {
    id: 'neurodegenerative-research',
    title: 'Neurodegenerative Disease Laboratory',
    abstract: 'Supported research in the Neurodegenerative and Injury Program at Johns Hopkins Medicine.',
    problem: 'Neurodegenerative diseases affect millions globally, requiring sustained laboratory research to understand disease mechanisms and develop potential interventions.',
    constraints: [
      'Laboratory safety protocols',
      'Sample handling requirements',
      'Research documentation standards',
      'Equipment calibration'
    ],
    methodology: 'Provided laboratory support for ongoing neurodegenerative disease research, assisting with experimental procedures, sample preparation, and maintaining laboratory operations within the Johns Hopkins research environment.',
    outcome: 'Gained foundational experience in neuroscience research laboratory operations while contributing to the program\'s ongoing research initiatives.',
    domains: ['Neuroscience', 'Laboratory Research', 'Biomedical'],
    period: '2023–2024'
  }
];
