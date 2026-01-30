# Planting Schedule — GitHub Repository Template

> **A ready-to-use GitHub repository for planning and tracking your seasonal planting schedule.**

Use this template to manage your planting season from planning through harvest. It uses GitHub Projects' Timeline view to visualize your entire season at a glance.

---

## What's Included

| Feature | Description |
|---------|-------------|
| **Project Board** | Timeline view showing planting dates, growing periods, and harvest windows |
| **Issue Templates** | Pre-built forms for planting tasks and field records |
| **Labels** | Crop type, field location, growth stage, and priority |
| **Sample Data** | Example planting schedule for a multi-crop farm |
| **Custom Fields** | Crop type, field name, planting date, expected harvest, yield estimate |

---

## How to Use This Template

### Step 1: Create Your Repository

1. Click **"Use this template"** (green button)
2. Name it (e.g., "planting-2026" or "smith-farm-planting")
3. Click **"Create repository"**

### Step 2: Set Up Your Planting Plan

1. Go to the **Projects** tab
2. Open "Seasonal Planting Schedule"
3. Switch to **Timeline view** to see the visual calendar
4. Each Issue represents one planting task (one crop in one field)

### Step 3: Add Your Crops

1. Click **"New issue"** → choose **"Planting Task"**
2. Fill in: crop name, field, target planting date, expected harvest date
3. Add the Issue to the "Seasonal Planting Schedule" Project
4. Set the **Start date** and **End date** custom fields for the Timeline view

### Step 4: Track Progress Through the Season

As the season progresses, update each task:
- Move to **"In Progress"** when planting begins
- Add comments with field observations, weather notes, photos
- Move to **"Done"** when harvested
- Close the Issue with final yield notes

---

## Sample Planting Schedule

This template includes sample data for a diversified farm:

| Field | Crop | Planting | Harvest | Notes |
|-------|------|----------|---------|-------|
| Field 1 | Corn | May 1 | Oct 15 | 120-day variety |
| Field 2 | Soybeans | May 15 | Oct 1 | Following corn rotation |
| Field 3 | Winter Wheat | Sep 15 | Jul 1 | Planted previous fall |
| Field 4 | Cover Crops | Aug 1 | (terminated Spring) | Clover/rye mix |
| Garden | Tomatoes | May 20 | Sep 15 | Greenhouse start Mar 1 |
| Garden | Sweet Corn | Jun 1 | Aug 15 | Succession planting every 2 weeks |

*Replace with your own crops, fields, and dates.*

---

## Issue Templates

### Planting Task
Use for each crop/field combination. Includes:
- Crop and variety information
- Field assignment and soil prep status
- Target planting and harvest dates
- Seed/input requirements
- Yield tracking

### Field Season Summary
Use at end of season to document results:
- Actual vs. planned dates
- Yield results
- Weather impact notes
- Lessons learned for next year

---

## Labels Guide

| Label | Color | Use For |
|-------|-------|---------|
| `corn` | 🟡 Yellow | Corn plantings |
| `soybeans` | 🟢 Green | Soybean plantings |
| `wheat` | 🟤 Brown | Wheat plantings |
| `vegetables` | 🔴 Red | Garden vegetables |
| `cover-crop` | 🟢 Dark Green | Cover crop plantings |
| `field-1` | 🔵 Blue | Field 1 tasks |
| `field-2` | 🔵 Light Blue | Field 2 tasks |
| `field-3` | 🔵 Teal | Field 3 tasks |
| `field-4` | 🔵 Navy | Field 4 tasks |
| `planning` | ⚪ Gray | Pre-season planning |
| `in-ground` | 🟢 Green | Currently growing |
| `harvest-ready` | 🟠 Orange | Ready to harvest |

---

## Custom Fields for Projects

Set these up in your Project settings for the Timeline view:

| Field Name | Type | Purpose |
|-----------|------|---------|
| Planting Date | Date | When to plant |
| Harvest Date | Date | Expected harvest window |
| Crop Type | Single Select | Corn, Soybeans, Wheat, etc. |
| Field | Single Select | Field 1, Field 2, etc. |
| Yield Estimate | Number | Projected bushels/acre or lbs |
| Actual Yield | Number | Recorded after harvest |

---

## Tips for Success

- **Create one Issue per crop per field** — "Field 1 Corn" and "Field 2 Soybeans" are separate Issues
- **Use the Timeline view** — it shows your whole season visually
- **Update as you go** — add comments with weather observations, application records, and photos
- **Close at harvest** — include final yield in the closing comment
- **Copy for next year** — duplicate your Project for the next season and adjust dates

---

## Seasonal Workflow

```
WINTER:  Plan → Create Issues → Set Dates → Order Seeds
SPRING:  Move to "In Progress" → Plant → Add Photos
SUMMER:  Monitor → Comment with Observations → Apply Inputs
FALL:    Harvest → Record Yield → Close Issues → Season Summary
WINTER:  Review → Copy Project for Next Year → Adjust
```

---

*This template was created as part of the GitHub Training for Farmers curriculum. Customize it for your crops, fields, and growing region.*
