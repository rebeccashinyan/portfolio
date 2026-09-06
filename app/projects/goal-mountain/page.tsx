import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

import { CaseStudyShot } from "@/components/CaseStudyShot";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Goal Mountain — Rebecca Wang",
  description:
    "An AI-powered goal achievement platform that turns long-term goals into adaptive mountain journeys.",
};

const shots = "/figma-assets/goal-mountain";

const overviewFacts: { label: string; details: string[] }[] = [
  {
    label: "Your role:",
    details: [
      "Product strategy, UX and UI design, AI interaction design, Agent and data architecture, Frontend implementation, Prompt design and evaluation planning",
    ],
  },
  { label: "Project type: self-initiated project", details: [] },
  { label: "Timeline", details: ["June–July 2026", "Ongoing MVP"] },
  {
    label: "Main tools:",
    details: [
      "Figma, Next.js, TypeScript, Tailwind CSS, Supabase, OpenAI API, GitHub, Claude Code",
    ],
  },
  {
    label: "Current status:",
    details: ["MVP complete, in self-testing; next step is user testing"],
  },
];

const problems = [
  {
    title: "Long-Term Goals Lack a Clear, Prioritized Route",
    body: "People may know what they want to achieve, but large goals are difficult to translate into clear, manageable, and prioritized steps. Without a clear route, it is hard to know where to start or what to focus on next.",
  },
  {
    title: "Static Plans Cannot Keep Up With Real-Life Change",
    body: "Long-term goals rarely go exactly as planned. When users fall behind, encounter new constraints, or progress differently than expected, fixed plans quickly become outdated.",
  },
  {
    title: "Guidance Does Not Learn From the User Over Time",
    body: "One-off guidance lacks an ongoing understanding of the user’s current state, past progress, recurring blockers, and what has or has not worked. Without learning from this history, future advice and plans cannot meaningfully adapt.",
  },
];

const principleRows = [
  ["Make progress concrete", "Mountain → Milestones → Summit"],
  ["Adapt from feedback", "Weekly Plan + Progress Tracking + Insights"],
  ["Learn across interactions", "Reflection + Long-Term Memory"],
  ["Support accountability without intrusion", "Contextual AI Guide check-ins"],
];

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-figma-content px-5 sm:px-8 lg:px-0">
      {children}
    </div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-[34px] font-normal leading-tight text-goal-forest sm:text-[50px]">
      {children}
    </h2>
  );
}

function DisplayHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display text-[24px] font-normal leading-normal sm:text-[30px]">
      {children}
    </h3>
  );
}

function StepHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[24px] font-normal leading-normal sm:text-[30px]">
      {children}
    </h3>
  );
}

function Panel({
  children,
  bleed = false,
}: {
  children: ReactNode;
  /** Pull the panel back out of a numbered list's indent so it spans the full content width. */
  bleed?: boolean;
}) {
  return (
    <div
      className={`mt-10 rounded-figma-panel bg-white px-5 py-10 sm:px-10 lg:py-[50px] ${
        bleed ? "-ml-7 lg:-ml-[45px]" : ""
      }`}
    >
      {children}
    </div>
  );
}

function Finding({
  evidence,
  implication,
}: {
  evidence: ReactNode;
  implication: ReactNode;
}) {
  return (
    <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-[100px]">
      <div className="lg:w-[522px]">
        <p>Evidence / Finding</p>
        <p>{evidence}</p>
      </div>
      <div className="lg:w-[522px]">
        <p>Product Implication</p>
        <p>{implication}</p>
      </div>
    </div>
  );
}

function DownArrow() {
  return (
    <div className="flex justify-center py-10">
      <Image
        src={`${shots}/arrow-down.svg`}
        alt=""
        width={60}
        height={36}
        className="h-[36px] w-[60px] rotate-90"
      />
    </div>
  );
}

function Stage({
  label,
  title,
  body,
  children,
}: {
  label: string;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
      <div className="lg:w-[280px] lg:shrink-0">
        <p>{label}</p>
        <p>{title}</p>
        <p>{body}</p>
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

export default function GoalMountainPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-goal-mist pb-[120px] pt-8 text-[17px] leading-normal text-black sm:text-[20px] lg:pt-figma-header-top">
      <Container>
        <SiteHeader />
      </Container>

      {/* Hero */}
      <section className="relative mt-12 w-full overflow-hidden lg:mt-20 lg:h-[708px]">
        <Image
          src="/figma-assets/hero-backdrop.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="relative mx-auto h-full w-full max-w-figma-artboard px-5 py-16 text-white sm:px-8 lg:px-0 lg:py-0">
          <div className="lg:absolute lg:left-[120px] lg:top-[293px] lg:w-[775px]">
            <p className="text-[16px] leading-normal sm:text-[18px]">
              GOAL MOUNTAIN · AI PRODUCT DESIGN / AGENTIC UX / WEB APP
            </p>
            <h1 className="mt-5 font-normal text-[44px] leading-tight sm:text-[70px] sm:leading-none">
              Goal Mountain
            </h1>
            <p className="mt-8 max-w-[609px] text-[16px] leading-normal sm:text-[18px]">
              An AI-powered goal achievement platform that turns long-term goals
              into adaptive mountain journeys.
            </p>
          </div>

          <div className="hidden lg:block">
            <CaseStudyShot
              src={`${shots}/mvp-insights.png`}
              alt="The Goal Mountain insights view"
              width={940}
              height={1314}
              frame="light"
              align="top"
              sizes="273px"
              className="absolute left-[968px] top-[13px] h-[449px] w-[273px]"
            />
            <CaseStudyShot
              src={`${shots}/mvp-progress.png`}
              alt="A weekly plan with daily progress signals"
              width={2294}
              height={1232}
              frame="light"
              sizes="282px"
              className="absolute left-[1100px] top-[354px] h-[143px] w-[282px]"
            />
            <CaseStudyShot
              src={`${shots}/mvp-draft.png`}
              alt="A weekly plan in its draft state"
              width={2138}
              height={974}
              frame="light"
              sizes="282px"
              className="absolute left-[1100px] top-[513px] h-[185px] w-[282px]"
            />
          </div>
        </div>
      </section>

      {/* 01 — Overview */}
      <section className="mt-[70px]">
        <Container>
          <SectionHeading>01 - Overview</SectionHeading>
          <div className="mt-[70px] flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-[169px]">
            <div className="lg:w-[512px]">
              <p>
                Goal Mountain is an AI-powered goal-achievement web app that
                transforms long-term ambitions into personalized mountain
                journeys. Each goal becomes a mountain, major stages become
                milestones, and a measurable outcome becomes the summit.
              </p>
              <p className="mt-6">
                AI act as the guide, strategist, researcher, planner, companion
                to help the users turn their vague ambition into measurable
                outcome and structure route, making personalized weekly plan,
                and record the daily progress check-in. It has the long term
                behavior memory to do the automatic reflection and adjust the
                plans at any time.
              </p>
            </div>
            <ul className="list-disc space-y-1 pl-6 lg:pl-[30px] lg:w-[498px]">
              {overviewFacts.map((fact) => (
                <li key={fact.label}>
                  {fact.label}
                  {fact.details.length > 0 ? (
                    <ul className="list-disc space-y-1 pl-6 lg:pl-[30px]">
                      {fact.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 02 — The Problem */}
      <section className="mt-[120px] lg:mt-[140px]">
        <Container>
          <SectionHeading>02 - The Problem</SectionHeading>
          <div className="mt-[70px] lg:w-[852px]">
            <p>There are three challenges I work on for Goal Mountain:</p>
            <ol className="mt-8 list-decimal space-y-8 pl-7 lg:pl-[45px]">
              {problems.map((problem) => (
                <li key={problem.title}>
                  <StepHeading>{problem.title}</StepHeading>
                  <p className="mt-2">{problem.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* 03 — Research & Product Opportunity */}
      <section className="mt-[120px] lg:mt-[140px]">
        <Container>
          <SectionHeading>03 - Research &amp; Product Opportunity</SectionHeading>

          <div className="mt-[70px]">
            <DisplayHeading>Secondary Research</DisplayHeading>
            <Panel>
              <ol className="list-decimal space-y-[70px] pl-7 lg:pl-[45px]">
                <li>
                  <StepHeading>
                    Long-term goals become more actionable when progress is made
                    proximal and concrete
                  </StepHeading>
                  <Finding
                    evidence="Research suggests that proximal subgoals can make distant outcomes feel more manageable by creating nearer indicators of progress and strengthening self-efficacy. Beyond setting a goal, implementation-intention research shows that specifying when, where, and how an action will occur helps bridge the gap between intention and behavior; a meta-analysis of 94 independent tests found a medium-to-large positive effect on goal attainment."
                    implication="Goal Mountain should break a long-term goal into meaningful milestones, then translate the current priority into concrete, context-specific actions in the weekly plan."
                  />
                </li>
                <li>
                  <StepHeading>
                    Effective goal pursuit requires a feedback loop, not a fixed
                    plan
                  </StepHeading>
                  <Finding
                    evidence="Research suggests that plans become less effective when they no longer reflect actual progress or changing conditions. Rather than treating every deviation as a reason for immediate replanning, self-regulation research supports evaluating performance and emerging barriers, then using that feedback to adjust subsequent actions and future plans when needed."
                    implication="Goal Mountain should use progress tracking and reflection to create a feedback loop: surfacing meaningful patterns and blockers to the user while also using that evidence to adapt future weekly plans when needed."
                  />
                </li>
                <li>
                  <StepHeading>
                    Long-term guidance becomes more valuable when it learns
                    across interactions
                  </StepHeading>
                  <Finding
                    evidence={
                      <>
                        Research suggests that persistent context allows AI
                        guidance to build on prior interactions rather than
                        treating each session as a new starting point. This can
                        support more personalized responses over time while
                        reducing the effort required for users to repeatedly
                        re-establish relevant context. (
                        <a
                          href="https://arxiv.org/abs/2603.20939"
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-solid underline-offset-2"
                        >
                          Hao et al., 2026
                        </a>
                        )
                      </>
                    }
                    implication="Goal Mountain should retain meaningful context across the user’s journey so future planning and guidance can build on what the system has already learned, without requiring users to repeatedly explain their goal and situation."
                  />
                </li>
              </ol>

              <div className="mt-[70px]">
                <StepHeading>
                  Supporting Insight — Timely support can reinforce
                  accountability without becoming intrusive
                </StepHeading>
                <Finding
                  evidence="Research suggests that progress monitoring is more effective when outcomes are reported or made visible to others, supporting a role for perceived accountability. Proactive support is most useful when delivered at moments of need and receptivity rather than continuously, since excessive prompting can create intervention burden."
                  implication="Goal Mountain should use lightweight, context-sensitive check-ins to reinforce accountability without becoming intrusive."
                />
              </div>
            </Panel>
          </div>

          <div className="mt-[100px]">
            <DisplayHeading>
              From research principles to product design
            </DisplayHeading>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-separate border-spacing-[10px] border border-black text-left lg:w-[873px]">
                <thead>
                  <tr>
                    <th scope="col" className="font-bold">
                      Research principle
                    </th>
                    <th scope="col" className="font-bold">
                      Product response
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {principleRows.map(([principle, response]) => (
                    <tr key={principle}>
                      <td>{principle}</td>
                      <td>{response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8">
              Together, these principles defined the first product model I moved
              into prototyping.
            </p>
          </div>
        </Container>
      </section>

      {/* 04 — Translating Research into the First Product Concept */}
      <section className="mt-[120px] lg:mt-[140px]">
        <Container>
          <SectionHeading>
            04 - Translating Research into the First Product Concept
          </SectionHeading>
          <p className="mt-[70px]">
            Based on these principles, I designed the first end-to-end
            experience around three layers: a Mountain that makes the long-term
            route visible, a Weekly Plan that translates the current milestone
            into action, and a feedback loop that uses progress, reflection, and
            memory to adapt future guidance.
          </p>

          <div className="mt-[70px] flex flex-col gap-8 lg:relative lg:mx-auto lg:h-[1048px] lg:w-[736px] lg:gap-0">
            <CaseStudyShot
              src={`${shots}/concept-1.png`}
              alt="Early wireframe of a mountain route with milestones"
              width={878}
              height={1182}
              frame="none"
              sizes="(max-width: 1024px) 92vw, 263px"
              className="aspect-[263/354] w-full max-w-[263px] lg:absolute lg:left-[473px] lg:top-0 lg:h-[354px] lg:w-[263px] lg:max-w-none"
            />
            <CaseStudyShot
              src={`${shots}/concept-2.png`}
              alt="Early wireframe of the all-mountains overview"
              width={876}
              height={728}
              frame="none"
              sizes="(max-width: 1024px) 92vw, 438px"
              className="aspect-[438/364] w-full max-w-[438px] lg:absolute lg:left-0 lg:top-[201px] lg:h-[364px] lg:w-[438px] lg:max-w-none"
            />
            <CaseStudyShot
              src={`${shots}/concept-3.png`}
              alt="Early wireframe of the conversational intake"
              width={872}
              height={702}
              frame="none"
              sizes="(max-width: 1024px) 92vw, 263px"
              className="aspect-[263/212] w-full max-w-[263px] lg:absolute lg:left-[473px] lg:top-[383px] lg:h-[212px] lg:w-[263px] lg:max-w-none"
            />
            <CaseStudyShot
              src={`${shots}/concept-4.png`}
              alt="Early wireframe of the weekly plan and insights"
              width={872}
              height={1446}
              frame="none"
              sizes="(max-width: 1024px) 92vw, 263px"
              className="aspect-[263/437] w-full max-w-[263px] lg:absolute lg:left-[473px] lg:top-[611px] lg:h-[437px] lg:w-[263px] lg:max-w-none"
            />
          </div>

          <p className="mt-[70px]">
            At this stage, the core product model worked conceptually. The
            harder Human–AI interaction problems only became visible once I
            implemented and started using the flow.
          </p>
        </Container>
      </section>

      {/* 05 — Refining the Human–AI Planning Experience */}
      <section className="mt-[120px] lg:mt-[140px]">
        <Container>
          <SectionHeading>
            05 - Refining the Human–AI Planning Experience
          </SectionHeading>
          <div className="mt-[70px] space-y-6">
            <p>
              Once I implemented the first flow and began self-testing it across
              different goals, a second layer of problems became visible.
            </p>
            <p>
              The challenge was no longer only what Goal Mountain should do, but
              how the AI should behave while doing it: how much it should ask,
              how much control it should have over a plan, and how adaptation
              could happen without becoming intrusive or unpredictable.
            </p>
          </div>

          <ol className="mt-[70px] list-decimal space-y-[100px] pl-7 lg:pl-[45px]">
            <li>
              <StepHeading>
                Make the route useful without over-interviewing the user
              </StepHeading>
              <Panel bleed>
                <p>
                  Early versions of the Mountain intake tried to gather enough
                  context upfront to make the first route highly personalized.
                  In self-testing, however, the conversation could start to feel
                  like a form hidden inside chat bubbles, with the AI asking
                  about information that was useful but not always necessary
                  before generation.
                </p>
                <div className="mt-10 flex justify-center">
                  <CaseStudyShot
                    src={`${shots}/intake-early.png`}
                    alt="Early intake conversation with many follow-up questions"
                    width={1554}
                    height={1254}
                    frame="none"
                    sizes="(max-width: 1024px) 92vw, 654px"
                    className="aspect-[654/528] w-full max-w-[654px]"
                  />
                </div>
                <p className="mt-10">
                  I shifted the intake from collecting maximum context to
                  identifying minimum viable understanding. Before asking
                  another question, the system considers whether the answer
                  would materially change the milestones, sequencing, pacing,
                  feasibility, or a critical constraint.
                </p>
                <div className="mt-10 flex justify-center">
                  <CaseStudyShot
                    src={`${shots}/intake-current.png`}
                    alt="Current intake conversation with fewer, higher-value turns"
                    width={1310}
                    height={1258}
                    frame="none"
                    sizes="(max-width: 1024px) 92vw, 523px"
                    className="aspect-[523/502] w-full max-w-[523px]"
                  />
                </div>
                <div className="mt-10 space-y-2">
                  <p>
                    The current flow prioritizes roughly 3–4 high-value
                    follow-up turns. Users provide facts about their situation;
                    domain judgments such as the appropriate milestones or
                    progression remain the responsibility of the AI. When users
                    are unsure, the system can make a revisitable recommendation
                    rather than repeatedly asking them to decide.
                  </p>
                  <p>
                    Design principle: Minimum viable understanding, not maximum
                    information.
                  </p>
                </div>
              </Panel>
            </li>

            <li>
              <StepHeading>
                Treat AI-generated plans as proposals users can steer
              </StepHeading>
              <Panel bleed>
                <p>
                  The Weekly Plan introduced a different problem. Initially,
                  when the AI-generated plan felt wrong, the most visible
                  correction path was Discuss with AI—even for simple changes
                  such as moving or shortening one task.
                </p>
                <div className="mt-10 flex justify-center">
                  <CaseStudyShot
                    src={`${shots}/plan-discuss.png`}
                    alt="Weekly plan where Discuss with AI is the main correction path"
                    width={1778}
                    height={1284}
                    frame="none"
                    sizes="(max-width: 1024px) 92vw, 778px"
                    className="aspect-[778/562] w-full max-w-[778px]"
                  />
                </div>
                <p className="mt-10">
                  I realized that conversation should be an escalation path, not
                  the default interface for every AI-assisted action.
                </p>
                <div className="mt-10 flex justify-center">
                  <CaseStudyShot
                    src={`${shots}/plan-controls.png`}
                    alt="Draft plan with direct task controls and plan-level steering"
                    width={1552}
                    height={1260}
                    frame="none"
                    sizes="(max-width: 1024px) 92vw, 776px"
                    className="aspect-[776/630] w-full max-w-[776px]"
                  />
                </div>
                <div className="mt-10 space-y-6">
                  <p>
                    Every weekly plan now begins as a Draft. Users can review
                    and modify it before pressing Start this week; only then
                    does it become Active and begin producing tracking data and
                    behavioral evidence.
                  </p>
                  <div>
                    <p>I also separated corrections by intent:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-6 lg:pl-[30px]">
                      <li>Edit — I know exactly what should change.</li>
                      <li>Replace — I want an alternative.</li>
                      <li>Remove — This task is unnecessary.</li>
                      <li>
                        Change strategy / Change availability — The week needs
                        broader adjustment.
                      </li>
                      <li>
                        Discuss with AI — I have complex context that requires
                        reasoning.
                      </li>
                    </ul>
                  </div>
                  <p>
                    AI-assisted edits also preserve boundaries. For example,
                    replacing a 20-minute task should not silently turn it into
                    a two-hour task unless the user explicitly accepts that
                    change.
                  </p>
                  <p>AI proposes → human steers → human commits.</p>
                </div>
              </Panel>
            </li>

            <li>
              <StepHeading>
                Let guidance learn progressively—and show what changed
              </StepHeading>
              <Panel bleed>
                <p>
                  Adaptation creates another tension: the plan should respond to
                  reality, but an AI that continuously rewrites user commitments
                  can quickly become unpredictable.
                </p>
                <div className="mt-10 flex justify-center">
                  <CaseStudyShot
                    src={`${shots}/proposed-revisions.png`}
                    alt="Proposed revisions shown against the current schedule"
                    width={1560}
                    height={1456}
                    frame="none"
                    sizes="(max-width: 1024px) 92vw, 780px"
                    className="aspect-[780/720] w-full max-w-[780px]"
                  />
                </div>
                <div className="mt-10 space-y-6">
                  <p>
                    Meaningful AI-generated plan changes therefore become
                    Proposed Revisions rather than silently replacing the
                    current schedule. Users can review what changed before
                    choosing to apply it.
                  </p>
                  <p>
                    I applied the same low-friction principle to behavioral
                    learning. Instead of requiring per-task time tracking or a
                    manual weekly reflection, Goal Mountain captures lightweight
                    signals—Done / Missed and whether the day’s workload felt
                    lighter, appropriate, or heavier. Earlier iterations
                    deliberately removed more burdensome logging because they
                    risked turning the product into a timesheet.
                  </p>
                </div>
                <div className="mt-10 flex justify-center">
                  <CaseStudyShot
                    src={`${shots}/checkin-signals.png`}
                    alt="Daily check-in signals feeding reflection and long-term memory"
                    width={1596}
                    height={1400}
                    frame="none"
                    sizes="(max-width: 1024px) 92vw, 725px"
                    className="aspect-[725/636] w-full max-w-[725px]"
                  />
                </div>
                <div className="mt-10 space-y-6">
                  <p>
                    These signals feed automatic reflection and long-term
                    memory, which then inform future plans. The next Draft
                    surfaces What changed from last week, making adaptation
                    visible rather than leaving users to guess why the AI
                    changed its recommendation.
                  </p>
                  <p>Plan → Act → Check in → Reflect → Remember → Adapt</p>
                  <p>
                    Design principle: Personalization should become richer
                    through use, while meaningful AI changes remain visible and
                    controllable.
                  </p>
                </div>
              </Panel>
            </li>
          </ol>
        </Container>
      </section>

      {/* 06 — The Current MVP */}
      <section className="mt-[120px] lg:mt-[140px]">
        <Container>
          <SectionHeading>06 - The Current MVP</SectionHeading>
          <div className="mt-[70px] space-y-6">
            <div>
              <p>The Current MVP</p>
              <p>
                The MVP connects long-term direction, weekly action, lightweight
                progress signals, and long-term AI memory into one adaptive
                loop.
              </p>
            </div>
            <p>Understand → Plan → Act → Learn → Adapt</p>
          </div>

          <div
            aria-hidden
            className="mt-10 h-[240px] rounded-figma-panel bg-portfolio-placeholder lg:h-[450px]"
          />

          <ol className="mt-[100px] list-decimal space-y-[100px] pl-7 lg:pl-[45px]">
            <li>
              <StepHeading>Turn an ambition into a route</StepHeading>
              <div className="mt-6">
                <p>From vague ambition to a grounded route</p>
                <p>
                  The user starts with a goal, not a form. After collecting only
                  the context that materially affects the route, Goal Mountain
                  researches the domain and generates a personalized sequence of
                  milestones leading to a measurable summit.
                </p>
              </div>
              <Panel bleed>
                <Stage
                  label="Conversation"
                  title="Conversational intake"
                  body="Captures goal, starting point, timing, capacity, and critical constraints."
                >
                  <div className="flex flex-col gap-8 lg:relative lg:h-[594px] lg:w-[800px] lg:gap-0">
                    <CaseStudyShot
                      src={`${shots}/mvp-intake-1.png`}
                      alt="Starting a new mountain from a plain-language goal"
                      width={2880}
                      height={1622}
                      frame="none"
                      sizes="(max-width: 1024px) 92vw, 405px"
                      className="aspect-[405/228] w-full max-w-[405px] lg:absolute lg:left-0 lg:top-0 lg:h-[228px] lg:w-[405px] lg:max-w-none"
                    />
                    <CaseStudyShot
                      src={`${shots}/mvp-intake-2.png`}
                      alt="Intake conversation collecting the context that shapes the route"
                      width={992}
                      height={1012}
                      frame="none"
                      sizes="(max-width: 1024px) 92vw, 469px"
                      className="aspect-[469/479] w-full max-w-[469px] lg:absolute lg:left-[331px] lg:top-[114px] lg:h-[479px] lg:w-[469px] lg:max-w-none"
                    />
                  </div>
                </Stage>

                <DownArrow />

                <Stage
                  label="Grounding"
                  title="Research-grounded generation"
                  body="Uses external domain knowledge to shape realistic stages."
                >
                  <div className="flex justify-center">
                    <CaseStudyShot
                      src={`${shots}/mvp-research.png`}
                      alt="Research-grounded milestone generation"
                      width={1528}
                      height={1222}
                      frame="none"
                      sizes="(max-width: 1024px) 92vw, 661px"
                      className="aspect-[661/529] w-full max-w-[661px]"
                    />
                  </div>
                </Stage>

                <DownArrow />

                <Stage
                  label="Route"
                  title="Mountain journey"
                  body="Makes the long-term route visible before the user starts planning individual tasks."
                >
                  <div className="flex justify-center">
                    <CaseStudyShot
                      src={`${shots}/mvp-mountain.png`}
                      alt="The mountain overview with milestones leading to a summit"
                      width={2880}
                      height={1504}
                      frame="none"
                      sizes="(max-width: 1024px) 92vw, 697px"
                      className="aspect-[697/530] w-full max-w-[697px]"
                    />
                  </div>
                </Stage>
              </Panel>
            </li>

            <li>
              <StepHeading>
                Turn the current milestone into a plan the user controls
              </StepHeading>
              <div className="mt-6">
                <p>AI proposes. The user remains in control.</p>
                <p>
                  Weekly plans begin as drafts rather than commitments. Users
                  can directly manipulate individual tasks, steer broader
                  strategy, or bring complex context into the AI Guide before
                  activating the week.
                </p>
              </div>
              <Panel bleed>
                <p>Weekly Plan Draft state</p>
                <div className="mt-8 flex justify-center">
                  <CaseStudyShot
                    src={`${shots}/mvp-draft.png`}
                    alt="The weekly plan draft, from AI proposal to committed week"
                    width={2138}
                    height={974}
                    frame="none"
                    sizes="(max-width: 1024px) 92vw, 1020px"
                    className="aspect-[1020/465] w-full max-w-[1020px]"
                  />
                </div>
                <p className="mt-[100px]">
                  AI proposal → Replace → Preview → Updated draft
                </p>
                <div className="mt-8 flex justify-center">
                  <CaseStudyShot
                    src={`${shots}/mvp-replace.png`}
                    alt="Replacing one task and previewing the updated draft"
                    width={1534}
                    height={1336}
                    frame="none"
                    sizes="(max-width: 1024px) 92vw, 767px"
                    className="aspect-[767/668] w-full max-w-[767px]"
                  />
                </div>
              </Panel>
            </li>

            <li>
              <StepHeading>
                Learn from progress without adding tracking burden
              </StepHeading>
              <div className="mt-6">
                <p>Lightweight feedback, only when it is useful</p>
                <p>
                  Once a plan is active, users provide lightweight signals
                  through Done / Missed and workload feedback. A clean day
                  closes without conversation; when tasks are missed or the load
                  feels heavier, the Guide can step in with a contextual
                  follow-up.
                </p>
              </div>
              <Panel bleed>
                <div className="flex justify-center">
                  <CaseStudyShot
                    src={`${shots}/mvp-progress.png`}
                    alt="Daily progress signals and a contextual follow-up from the Guide"
                    width={2294}
                    height={1232}
                    frame="none"
                    sizes="(max-width: 1024px) 92vw, 1016px"
                    className="aspect-[1016/546] w-full max-w-[1016px]"
                  />
                </div>
              </Panel>
            </li>

            <li>
              <StepHeading>Show the learning loop</StepHeading>
              <div className="mt-6">
                <p>The system gets more useful through use</p>
                <p>
                  Progress is not only recorded—it becomes context. Automatic
                  reflection extracts patterns from the user’s actual week,
                  long-term memory preserves useful signals, and future plans
                  use that history to adapt. The next draft then makes those
                  changes visible instead of silently rewriting the user’s
                  schedule.
                </p>
              </div>
              <Panel bleed>
                <div className="flex justify-center">
                  <CaseStudyShot
                    src={`${shots}/mvp-learning.png`}
                    alt="Daily signals feeding reflection, memory, and the adapted next draft"
                    width={1562}
                    height={1416}
                    frame="none"
                    sizes="(max-width: 1024px) 92vw, 781px"
                    className="aspect-[781/708] w-full max-w-[781px]"
                  />
                </div>
              </Panel>
            </li>

            <li>
              <StepHeading>
                One guide, grounded in the user’s journey
              </StepHeading>
              <Panel bleed>
                <div className="flex justify-center">
                  <CaseStudyShot
                    src={`${shots}/mvp-guide.png`}
                    alt="The AI Guide reasoning across a mountain and its weekly plan"
                    width={2324}
                    height={784}
                    frame="none"
                    sizes="(max-width: 1024px) 92vw, 1020px"
                    className="aspect-[1020/311] w-full max-w-[1020px]"
                  />
                </div>
                <div className="mt-10">
                  <p>Contextual AI Guide</p>
                  <p>
                    The same Guide can reason within one mountain or across
                    multiple goals, using the user’s real plan, progress,
                    reflection, and memories as context.
                  </p>
                </div>
                <div className="mt-[70px] flex justify-center">
                  <CaseStudyShot
                    src={`${shots}/mvp-insights.png`}
                    alt="The insights view with patterns, bottlenecks, and trade-offs"
                    width={940}
                    height={1314}
                    frame="none"
                    sizes="(max-width: 1024px) 92vw, 565px"
                    className="aspect-[565/790] w-full max-w-[565px]"
                  />
                </div>
                <div className="mt-10">
                  <p>Strategic Intelligence</p>
                  <p>
                    Insights turn accumulated journey data into patterns,
                    bottlenecks, risks, trade-offs, and higher-level strategic
                    guidance.
                  </p>
                </div>
              </Panel>
            </li>
          </ol>
        </Container>
      </section>
    </main>
  );
}
