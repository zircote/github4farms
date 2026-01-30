# Demo Farm Repository Specification

> **Purpose:** This document specifies the exact structure and content required in the demo farm repository used across all training sessions. All lab exercises, guided practices, and facilitation scripts reference this repository.
>
> **Repository Name:** `demo-farm` (under the `github4farms-training` organization)
> **Visibility:** Public (so learners can access without invitations)
> **URL Pattern:** `https://github.com/github4farms-training/demo-farm`

---

## Repository Structure

```
demo-farm/
├── README.md
├── crops/
│   ├── README.md
│   ├── planting-schedule.md
│   ├── crop-rotation-plan.md
│   └── soil-test-results.md
├── livestock/
│   ├── README.md
│   ├── health-records.md
│   ├── feeding-schedule.md
│   └── veterinary-log.md
├── equipment/
│   ├── README.md
│   ├── maintenance-log.md
│   ├── safety-inspections.md
│   └── inventory.md
└── compliance/
    ├── README.md
    ├── grant-tracker.md
    └── certifications.md
```

---

## File Contents

### Root README.md

```markdown
# Sunny Acres Demo Farm

Welcome to the Sunny Acres farm repository — your digital barn for all farm information.

This repository organizes our farm records into four sections:

- **crops/** — Planting schedules, crop records, and soil data
- **livestock/** — Health records, feeding schedules, and vet logs
- **equipment/** — Maintenance logs, safety inspections, and inventory
- **compliance/** — Grant tracking and certifications

Use this repository to find any farm document. Click a folder to explore.
```

### crops/planting-schedule.md

Must contain a table with these exact data points (referenced by Session 1 lab exercise questions):

| Field | Crop | Planting Date | Expected Harvest |
|-------|------|---------------|-----------------|
| Field 1 | Corn | April 15, 2026 | September 20, 2026 |
| Field 2 | Soybeans | May 1, 2026 | October 5, 2026 |
| Field 3 | Winter Wheat | September 10, 2025 | July 1, 2026 |
| Field 4 | Alfalfa | March 20, 2026 | Multiple cuttings |

**Lab Exercise Q&A:**
- "What crop is planted in Field 3?" → Winter Wheat
- "What is the expected harvest date for corn?" → September 20, 2026

### crops/crop-rotation-plan.md

Must contain last year's rotation plan so learners can answer: "Where would you find last year's crop rotation plan?" → `crops/crop-rotation-plan.md`

### livestock/health-records.md

Must contain a table with these exact data points:

| Animal ID | Type | Last Vet Visit | Vaccinations | Notes |
|-----------|------|---------------|-------------|-------|
| C-001 | Beef Cattle | March 15, 2026 | BVD, Blackleg | Healthy |
| C-002 | Beef Cattle | March 15, 2026 | BVD, Blackleg | Due for deworming |
| C-003 | Dairy Cow | February 28, 2026 | Brucellosis | Producing well |
| S-001 | Sheep | January 10, 2026 | CDT | Lambing expected April |
| H-001 | Horse | March 1, 2026 | Rabies, EEE | Farrier due May |

**Lab Exercise Q&A:**
- "How many animals are listed in the health records?" → 5
- "When was the last veterinary visit recorded?" → March 15, 2026

### livestock/feeding-schedule.md

Must exist so learners can answer: "Where would you find the feeding schedule?" → `livestock/feeding-schedule.md`

### equipment/maintenance-log.md

Must contain a table with these exact data points:

| Equipment | Last Service | Service Type | Next Service Due | Hours |
|-----------|-------------|-------------|-----------------|-------|
| John Deere 6120M Tractor | February 10, 2026 | Oil change, filters | At 1000 hours | 502 |
| Case IH Combine | November 15, 2025 | Full annual service | November 2026 | 320 |
| Kubota Mower | March 5, 2026 | Blade sharpening | Before first cutting | 185 |
| Irrigation Pump | December 1, 2025 | Winterization | Spring startup | — |

**Lab Exercise Q&A:**
- "What equipment is listed in the maintenance log?" → Tractor, Combine, Mower, Irrigation Pump
- "When was the tractor last serviced?" → February 10, 2026

### equipment/safety-inspections.md

Must exist so learners can answer: "Where would you find safety inspection records?" → `equipment/safety-inspections.md`

---

## Pre-Created Issues (Required for Sessions 2-3)

Create these Issues in the demo repository before Session 2:

| # | Title | Labels | Description |
|---|-------|--------|------------|
| 1 | Fix broken fence post — north pasture | fencing, urgent | Three fence posts are down near the creek crossing. Cattle could get through. |
| 2 | Tractor #2 — 500-hour service due | equipment, maintenance | Oil change and filter replacement due. Current reading: 498 hours. |
| 3 | Order corn and soybean seeds | crops, routine | Spring planting order needed by March 1. |
| 4 | Schedule Herd B vaccinations | livestock, health | Annual BVD and Blackleg vaccinations due before turnout. |
| 5 | Prepare Field 1 for corn planting | crops, routine | Soil test, lime application, and tillage needed before April 15. |
| 6 | Submit USDA EQIP Q2 report | compliance, deadline | Quarterly progress report due June 15. |
| 7 | Replace irrigation nozzle — Field 2 | equipment, maintenance | Nozzle #14 is clogged. Replace before spring irrigation startup. |
| 8 | Test soil pH in Field 3 | crops, routine | Annual soil test before planting season. |

---

## Pre-Created Labels

| Label Name | Color (Hex) | Description |
|-----------|-------------|-------------|
| equipment | #0075ca (Blue) | Machines, tools, vehicles |
| livestock | #0e8a16 (Green) | Animal health, feeding, breeding |
| crops | #fbca04 (Yellow) | Planting, harvesting, crop records |
| maintenance | #e4890b (Orange) | Routine upkeep and repairs |
| urgent | #d73a4a (Red) | Needs attention today |
| routine | #cfd3d7 (Gray) | Regular scheduled tasks |
| compliance | #6f42c1 (Purple) | Grants, certifications, audits |
| fencing | #1d76db (Light Blue) | Fence repair and maintenance |
| health | #0e8a16 (Green) | Veterinary and animal health |
| deadline | #d73a4a (Red) | Has a specific due date |

---

## Pre-Session Verification Checklist

Before each session, verify:

- [ ] Repository is accessible at the expected URL
- [ ] All folders contain the expected files
- [ ] README displays correctly on the main page
- [ ] All 8+ Issues exist and have labels assigned
- [ ] Labels are color-coded correctly
- [ ] At least 1 Issue has a photo attached (for Session 2 demo)
- [ ] No leftover test Issues from previous sessions (clean up or close)
- [ ] Repository is public (no login required to view files)

---

## Session-Specific Requirements

### Session 1
- Learners navigate files and folders only (read-only)
- No Issues needed, but they must exist for Sessions 2-3
- Lab exercise questions reference specific data in crops, livestock, and equipment files

### Session 2
- Learners create new Issues (write access needed — they use their own accounts)
- Instructor demos using Issues #1 (fence post) as the example
- Sample photos should be available (fence.jpg, tractor.jpg, field.jpg, calf.jpg, equipment.jpg)

### Session 3
- Learners create Projects and add existing Issues
- At least 8 Issues must exist for the "# search" feature to work well
- Clean up any test Projects from previous sessions

---

*This specification must be implemented before any live session delivery. All lab exercise answers depend on the exact data described above.*
