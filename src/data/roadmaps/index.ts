import { CareerTrack, RoadmapQuarter } from '../../types';
import { SOFTWARE_ENGINEERING_ROADMAP } from './softwareEngineering';
import { DATA_SCIENCE_ROADMAP } from './dataScience';
import { AI_ML_ROADMAP } from './aiMl';
import { CLOUD_DEVOPS_ROADMAP } from './cloudDevops';
import { CYBERSECURITY_ROADMAP } from './cybersecurity';
import { PRODUCT_UX_ROADMAP } from './productUx';

export const ROADMAP_REGISTRY: Record<string, RoadmapQuarter[]> = {
  'software-engineering': SOFTWARE_ENGINEERING_ROADMAP,
  'data-science': DATA_SCIENCE_ROADMAP,
  'ai-ml': AI_ML_ROADMAP,
  'cloud-devops': CLOUD_DEVOPS_ROADMAP,
  'cybersecurity': CYBERSECURITY_ROADMAP,
  'product-ux': PRODUCT_UX_ROADMAP,
  // Default fallback for "not-sure": start with Software Engineering (foundations apply to all)
  'not-sure': SOFTWARE_ENGINEERING_ROADMAP,
};

export function getRoadmapForTrack(track: CareerTrack): RoadmapQuarter[] {
  return ROADMAP_REGISTRY[track] || SOFTWARE_ENGINEERING_ROADMAP;
}
