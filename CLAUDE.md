# CLAUDE.md

@AGENTS.md

## Project

This repository is Rebecca Wang's design and product portfolio.

The portfolio is already designed primarily in Figma. Implementation should translate the approved design into production-quality code rather than redesigning it.

## Core Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- npm
- Pages live in `app/`
- Reusable components live in `components/`
- Server Components by default; use `"use client"` only when interaction requires it

Do not introduce backend services, databases, UI libraries, icon libraries, or other major dependencies unless explicitly requested.

## Before Frontend Implementation

Before implementing or materially changing frontend UI:

1. Invoke the `frontend-design` skill.
2. Inspect the existing code and relevant components before writing new code.
3. If a Figma link or node is provided, inspect the Figma design before implementation.

Do not begin by guessing the design from memory or recreating it from description when Figma context is available.

## Figma Is the Visual Source of Truth

For Figma-driven work:

1. Fetch design context for the exact frame or node being implemented.
2. Obtain a screenshot of the same node for visual comparison.
3. Inspect relevant variables, typography, layout, components, and assets.
4. Reuse existing project components when they correctly represent the design.
5. Implement using this project's Next.js + TypeScript + Tailwind conventions.
6. Compare the localhost implementation against Figma and correct material differences before marking the task complete.

Match the Figma design closely:
- layout
- content width
- spacing
- typography
- colors
- borders
- radii
- imagery
- responsive behavior
- interaction states

Do not redesign, embellish, simplify, or add visual treatments that are not present in Figma.

When exact Figma values are available, do not approximate them unnecessarily.

## Assets

Use real project or Figma-provided assets whenever available.

- Check existing assets in `public/` before creating or importing new ones.
- Prefer Figma-provided SVGs/icons/images over substitutes.
- Do not use placeholder images when the real asset is available.
- Do not install an icon library just to approximate an icon that exists in Figma.
- Ensure final asset references work in the production build, not only inside the local MCP session.

## Product Judgment

Think before making changes.

- If the request is clear and consistent with the existing product/design direction, execute it without asking for confirmation.
- If an important requirement is ambiguous, missing, risky, or has multiple materially different interpretations, explain the issue and ask once before implementing.
- If there is a stronger product, UX, design, or technical approach, explain the concern and recommend the alternative before making a direction-changing change.
- After direction is clear, make reasonable implementation decisions independently.
- Do not interrupt for minor choices such as naming, component extraction, or small implementation details.

Only stop again if new information would materially change the product direction, architecture, UX, or data model.

## Implementation Rules

- Preserve existing project conventions before introducing new patterns.
- Build reusable components for genuinely repeated UI.
- Do not over-componentize one-off markup.
- Use semantic HTML.
- Preserve keyboard accessibility and visible focus states.
- Respect `prefers-reduced-motion` for nonessential motion.
- Never use `transition-all`.
- Avoid unnecessary JavaScript for layout or styling.
- Avoid absolute positioning when normal layout or Auto Layout intent can be represented with flex/grid.
- Do not add sections, features, copy, or interactions that are not in the approved design unless requested.

## Figma Fidelity and Visual Cleanup
- Treat Figma as the primary visual source of truth, but not every individual pixel value should be copied blindly.
- Preserve the intended layout, hierarchy, typography, colors, proportions, and visual character.
- If there are small obvious inconsistencies in the Figma design, normalize them in implementation.
- Examples include:
  - slightly misaligned elements
  - inconsistent spacing between otherwise equivalent components
  - elements that differ by only a few pixels without an apparent design reason
  - inconsistent widths or heights among repeated components
  - minor baseline or centering issues
- Infer the underlying design system and use consistent spacing, sizing, alignment, and component rules.
- Do not redesign, rearrange sections, change visual hierarchy, or make major stylistic decisions without asking first.
- Preserve intentional asymmetry or unusual spacing when it appears deliberate.

## Responsive Behavior

Figma designs are the primary source of responsive intent.

- Use explicit Figma desktop/mobile/tablet variants when they exist.
- Do not invent a substantially different mobile design.
- When only desktop is provided, preserve hierarchy and content while adapting layout naturally for smaller screens.
- Prefer fluid containers, flex/grid, and intentional breakpoints over hardcoded viewport-specific positioning.
- Ask only when responsive behavior requires a meaningful product/design decision that cannot be inferred safely.

## Change Summary
- After completing any change, end the reply with one line in this format:
  **Change:** <a few words describing what changed>
- Keep it under ~10 words, in English, plain language, no file paths or code details.
- Example: **Change:** removed eyebrow label from Planning Agent card


## Local Development

Use the existing development server:

```bash
npm run dev

