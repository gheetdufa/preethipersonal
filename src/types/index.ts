/**
 * Type Definitions
 * 
 * Centralized types for project data structures.
 * Follows chemical engineering terminology where appropriate.
 */

export interface Project {
  id: string;
  title: string;
  /** Short descriptor, like a paper abstract */
  abstract: string;
  /** The core problem or challenge addressed */
  problem: string;
  /** Technical and practical constraints */
  constraints: string[];
  /** Approach and methods used */
  methodology: string;
  /** Results and impact */
  outcome: string;
  /** Relevant technical domains */
  domains: string[];
  /** Year or date range */
  period: string;
  /** Optional: link to paper, repo, or documentation */
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

