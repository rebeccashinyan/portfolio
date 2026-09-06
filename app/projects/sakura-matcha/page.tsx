import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

import { CaseStudyShot } from "@/components/CaseStudyShot";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Sakura Matcha — Rebecca Wang",
  description:
    "Designing a brand-driven matcha café website with AI-supported menu decisions.",
};

const shots = "/figma-assets/sakura-matcha";

const overviewFacts = [
  "Project Type: Self-initiated MVP",
  "Role: Product Designer / UI/UX Designer / Frontend Developer / Brand Designer",
  "Timeline: May–June 2026",
  "Platform: Responsive web",
  "Tools: Figma, React, Next.js, TypeScript, Tailwind CSS, OpenAI API",
  "Team: Independent project",
  "Status: Functional MVP",
];

const problems = [
  {
    title: "1. Standing Out in a Crowded Market",
    points: [
      "Growing number of modern matcha and specialty café brands",
      "Limited differentiation through products alone",
      "Need for a recognizable and memorable brand identity",
      "Stronger connection between brand personality and customer perception",
    ],
  },
  {
    title: "2. Turning the Brand into an Effective Digital Experience",
    points: [
      "Visually attractive experience without sacrificing usability",
      "Clear navigation and information hierarchy",
      "Easy-to-browse menu across desktop and mobile",
      "Consistent brand expression throughout the website",
    ],
  },
  {
    title: "3. Supporting Customers in Making Menu Choices",
    points: [
      "Different levels of familiarity with matcha",
      "Difficulty understanding menu items, flavors, and ingredients",
      "Personal preferences not easily translated into a specific drink",
      "Need for contextual guidance during menu exploration",
    ],
  },
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
    <h2 className="font-display text-[34px] font-normal leading-none text-white sm:text-[50px]">
      {children}
    </h2>
  );
}

function BlockHeading({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <h3
      className={`text-[24px] font-normal leading-normal sm:text-[30px] ${
        tone === "light" ? "text-white" : "text-black"
      }`}
    >
      {children}
    </h3>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 rounded-figma-panel bg-sakura-paper px-5 py-10 text-black sm:px-10 sm:py-[50px] lg:px-[60px]">
      {children}
    </div>
  );
}

function Exhibit({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="flex flex-col items-center">
      <figcaption className="text-center text-[16px] leading-normal sm:text-[18px]">
        {caption}
      </figcaption>
      <div className="mt-10 flex w-full justify-center">{children}</div>
    </figure>
  );
}

export default function SakuraMatchaPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-sakura-ink pb-[120px] pt-8 text-[17px] leading-normal text-white sm:text-[20px] lg:pt-figma-header-top">
      <Container>
        <SiteHeader tone="light" />
      </Container>

      {/* Hero */}
      <section className="relative mt-12 w-full overflow-hidden lg:mt-20 lg:h-[708px]">
        <Image
          src={`${shots}/hero.png`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="relative mx-auto h-full w-full max-w-figma-artboard px-5 py-16 sm:px-8 lg:px-0 lg:py-0">
          <div className="lg:absolute lg:left-[120px] lg:top-[293px] lg:w-[775px]">
            <p className="text-[16px] leading-normal sm:text-[18px]">
              SAKURA MATCHA · WEB &amp; AI EXPERIENCE
            </p>
            <h1 className="mt-6 max-w-[775px] text-[28px] font-normal leading-tight sm:text-[36px]">
              Designing a brand-driven matcha café website with AI-supported
              menu decisions
            </h1>
            <p className="mt-8 max-w-[609px] text-[16px] leading-normal sm:text-[18px]">
              A responsive web experience that combines a distinctive brand
              identity, intuitive digital experience, and Ask Sakura, which is a
              grounded AI assistant that helps customers decide what to order.
            </p>
          </div>

          <div className="hidden lg:block">
            <CaseStudyShot
              src={`${shots}/final-home.png`}
              alt="Sakura Matcha homepage on desktop"
              width={1464}
              height={4096}
              frame="light"
              align="top"
              sizes="273px"
              className="absolute left-[968px] top-[13px] h-[449px] w-[273px]"
            />
            <CaseStudyShot
              src={`${shots}/filtering-1.png`}
              alt="Ask Sakura turning a request into menu filters"
              width={2268}
              height={1152}
              frame="light"
              sizes="282px"
              className="absolute left-[1100px] top-[354px] h-[143px] w-[282px]"
            />
            <CaseStudyShot
              src={`${shots}/filtering-2.png`}
              alt="Filtered menu results in Ask Sakura"
              width={2044}
              height={1342}
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
          <div className="mt-[70px] flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-[189px]">
            <div className="lg:w-[512px]">
              <p>Sakura Matcha is a self-created matcha brand.</p>
              <p>
                This project focuses on building a brand-driven café website
                designed to attract customers and enhance the overall customer
                experience through a recognizable brand identity, thoughtful
                UI/UX, and a grounded AI assistant that helps users explore the
                menu and make more personalized choices.
              </p>
            </div>
            <ul className="list-disc space-y-1 pl-[30px] lg:w-[498px]">
              {overviewFacts.map((fact) => (
                <li key={fact}>{fact}</li>
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
            <p>There are three challenges I work on for Sakura Matcha:</p>
            <div className="mt-10 space-y-10">
              {problems.map((problem) => (
                <div key={problem.title}>
                  <BlockHeading>{problem.title}</BlockHeading>
                  <ul className="mt-3 list-disc space-y-1 pl-[30px]">
                    {problem.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 03 — Three Key Decisions & Design Exploration */}
      <section className="mt-[120px] lg:mt-[140px]">
        <Container>
          <SectionHeading>
            03 - Three Key Decisions &amp; Design Exploration
          </SectionHeading>

          <div className="mt-[70px]">
            <BlockHeading>
              1. Building a Recognizable Brand Identity
            </BlockHeading>
            <p className="mt-3 lg:w-[1165px]">
              Sakura was selected as the central visual motif and became the
              basis for the name “Sakura Matcha,” giving the brand a distinctive
              element that could be carried consistently across different
              touchpoints. By combining references to traditional Japanese tea
              houses with the contemporary character of New York, the visual
              direction balances cultural warmth with a modern, refined
              presence. The color palette and supporting visual elements draw
              directly from matcha and sakura, creating an atmosphere that feels
              calm, soft, and premium.
            </p>
            <Panel>
              <div className="space-y-[60px]">
                <Exhibit caption="Color exploration moodboard">
                  <CaseStudyShot
                    src={`${shots}/moodboard.png`}
                    alt="Moodboard of color and texture references for the brand"
                    width={1260}
                    height={732}
                    sizes="(max-width: 1024px) 92vw, 515px"
                    className="aspect-[515/299] w-full max-w-[515px]"
                  />
                </Exhibit>
                <Exhibit caption="Final selected palette / Final Color System">
                  <CaseStudyShot
                    src={`${shots}/palette.png`}
                    alt="Final color system swatches"
                    width={1154}
                    height={918}
                    sizes="190px"
                    className="aspect-[190/294] w-[190px]"
                  />
                </Exhibit>
                <Exhibit caption="Homepage background-color tests">
                  <CaseStudyShot
                    src={`${shots}/homepage-bg-tests.png`}
                    alt="Three homepage variations tested with different background colors"
                    width={1450}
                    height={1136}
                    sizes="(max-width: 1024px) 92vw, 444px"
                    className="aspect-[444/348] w-full max-w-[444px]"
                  />
                </Exhibit>
              </div>
            </Panel>
          </div>

          <div className="mt-[100px]">
            <BlockHeading>
              2. Balancing Brand Expression with Usability
            </BlockHeading>
            <p className="mt-3 lg:w-[1178px]">
              The website structure was designed to communicate the brand’s
              personality without making the experience difficult to understand
              or navigate. Familiar navigation patterns, clear content
              hierarchy, and consistent page layouts help users quickly find
              information about the café, menu, and products. At the same time,
              the typography, imagery, colors, and decorative elements maintain
              a distinctive visual identity across the experience. This balance
              allows the website to feel visually expressive while remaining
              clear, accessible, and easy to use.
            </p>
            <Panel>
              <div className="space-y-[60px]">
                <Exhibit caption="Separate page (wireframe) → Integrated homepage experience (Final Figma Design) Comparison">
                  <CaseStudyShot
                    src={`${shots}/wireframe-comparison.png`}
                    alt="Wireframe of a separate page next to the integrated homepage design"
                    width={2168}
                    height={1106}
                    sizes="(max-width: 1024px) 92vw, 783px"
                    className="aspect-[783/399] w-full max-w-[783px]"
                  />
                </Exhibit>
                <Exhibit caption="Brand-heavy dark aesthetic vs menu information readability / scannability">
                  <CaseStudyShot
                    src={`${shots}/menu-readability.png`}
                    alt="Dark brand-led menu layout compared with a more readable menu layout"
                    width={1618}
                    height={1418}
                    sizes="(max-width: 1024px) 92vw, 517px"
                    className="aspect-[517/453] w-full max-w-[517px]"
                  />
                </Exhibit>
              </div>
            </Panel>
          </div>

          <div className="mt-[100px]">
            <BlockHeading>
              3. Supporting Menu Decisions with an AI Assistant
            </BlockHeading>
            <p className="mt-3 lg:w-[1178px]">
              Ask Sakura is Sakura Matcha’s AI assistant, built to help
              customers who may be unfamiliar with matcha or uncertain about
              what to order.
            </p>
            <Panel>
              <BlockHeading tone="dark">Core AI Capabilities</BlockHeading>

              <div className="mt-[50px] flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:w-[448px]">
                  <h4 className="text-[22px] leading-normal sm:text-[25px]">
                    1. Personalized Recommendations
                  </h4>
                  <p className="mt-3">
                    When customers are unsure what to choose, Ask Sakura
                    interprets preferences such as flavor, sweetness, matcha
                    intensity, temperature, and dietary needs. When necessary,
                    it asks follow-up questions to better understand what the
                    customer is looking for, then recommends up to three
                    matching menu items. Recommendations are presented as
                    structured Menu Item Cards so customers can quickly compare
                    key product information.
                  </p>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <CaseStudyShot
                    src={`${shots}/personalized-1.png`}
                    alt="Ask Sakura asking a follow-up question about preferences"
                    width={2268}
                    height={1152}
                    sizes="(max-width: 1024px) 92vw, 417px"
                    className="aspect-[417/212] w-full max-w-[417px]"
                  />
                  <CaseStudyShot
                    src={`${shots}/personalized-2.png`}
                    alt="Recommended menu items shown as structured cards"
                    width={2268}
                    height={1152}
                    sizes="(max-width: 1024px) 92vw, 417px"
                    className="aspect-[417/212] w-full max-w-[417px]"
                  />
                </div>
              </div>

              <div className="mt-[70px] flex flex-col gap-10 lg:flex-row-reverse lg:items-start lg:justify-between">
                <div className="lg:w-[509px]">
                  <h4 className="text-[22px] leading-normal sm:text-[25px]">
                    2. Conversational Filtering
                  </h4>
                  <p className="mt-3">
                    Ask Sakura translates natural-language constraints into
                    structured menu filters. When a customer asks for something
                    like “an iced dairy-free drink under $8,” the corresponding
                    conditions appear as editable tags in the Active Filter
                    Panel, which displays only matching menu items. Customers
                    can remove individual tags to broaden or adjust the results
                    without restarting the conversation.
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <CaseStudyShot
                    src={`${shots}/filtering-1.png`}
                    alt="A natural-language request turned into filter tags"
                    width={2268}
                    height={1152}
                    sizes="(max-width: 1024px) 92vw, 352px"
                    className="aspect-[352/179] w-full max-w-[352px]"
                  />
                  <CaseStudyShot
                    src={`${shots}/filtering-2.png`}
                    alt="Menu results matching the active filters"
                    width={2044}
                    height={1342}
                    sizes="(max-width: 1024px) 92vw, 352px"
                    className="aspect-[352/231] w-full max-w-[352px]"
                  />
                </div>
              </div>

              <div className="mt-[70px] flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:w-[481px]">
                  <h4 className="text-[22px] leading-normal sm:text-[25px]">
                    3. Drink, Dessert &amp; Soft-Serve Pairing
                  </h4>
                  <p className="mt-3">
                    Customers who have already selected an item can ask Ask
                    Sakura to find a complementary drink, dessert, or soft
                    serve. The assistant considers the existing item, desired
                    pairing category, and preferred direction, such as similar,
                    contrasting, light, or rich, before recommending a
                    compatible option. The result explains the pairing rationale
                    and shows the combined price of both items.
                  </p>
                </div>
                <div className="flex flex-col gap-5 lg:relative lg:h-[395px] lg:w-[531px] lg:shrink-0 lg:gap-0">
                  <CaseStudyShot
                    src={`${shots}/pairing-1.png`}
                    alt="Ask Sakura collecting the item and pairing direction"
                    width={2266}
                    height={1148}
                    sizes="(max-width: 1024px) 92vw, 484px"
                    className="aspect-[484/245] w-full max-w-[484px] lg:absolute lg:left-0 lg:top-0 lg:h-[245px] lg:w-[484px]"
                  />
                  <div className="hidden lg:absolute lg:left-[89px] lg:top-[190px] lg:flex lg:h-[168px] lg:w-[136px] lg:items-center lg:justify-center">
                    <Image
                      src={`${shots}/arrow-polygon.svg`}
                      alt=""
                      width={68}
                      height={111}
                      className="h-[111px] w-[68px] -rotate-[26.1deg]"
                    />
                  </div>
                  <CaseStudyShot
                    src={`${shots}/pairing-2.png`}
                    alt="The paired result with its combined price"
                    width={1834}
                    height={590}
                    sizes="(max-width: 1024px) 92vw, 397px"
                    className="aspect-[397/128] w-full max-w-[397px] lg:absolute lg:left-[134px] lg:top-[267px] lg:h-[128px] lg:w-[397px]"
                  />
                </div>
              </div>

              <BlockHeading tone="dark">
                <span className="mt-[90px] block">
                  Guardrails &amp; Supporting Behaviors
                </span>
              </BlockHeading>

              <div className="mt-[50px]">
                <h4 className="text-[22px] leading-normal sm:text-[25px]">
                  1. Allergy &amp; Dietary Safety
                </h4>
                <div className="mt-3 space-y-5 lg:w-[1016px]">
                  <p>
                    When a customer mentions an allergy or strict dietary
                    restriction, which corresponds to one of the system’s
                    existing structured conditions—dairy-free, vegan, or
                    gluten-free—the assistant recommends only items that meet
                    that condition. The corresponding restriction is also
                    automatically added to the Active Filter Panel, and a
                    warning notice appears below the response.
                  </p>
                  <p>
                    For allergens without structured filters, such as nuts or
                    eggs, Ask Sakura avoids making unsupported safety claims and
                    instead prompts customers to verify ingredients and
                    cross-contact information.
                  </p>
                </div>
                <div className="mt-10 flex flex-col gap-9 lg:flex-row lg:items-start">
                  <CaseStudyShot
                    src={`${shots}/allergy-1.png`}
                    alt="A dietary restriction added to the active filters"
                    width={2266}
                    height={1150}
                    sizes="(max-width: 1024px) 92vw, 469px"
                    className="aspect-[469/238] w-full max-w-[469px]"
                  />
                  <CaseStudyShot
                    src={`${shots}/allergy-2.png`}
                    alt="A warning notice shown beneath an allergy-related answer"
                    width={2266}
                    height={1150}
                    sizes="(max-width: 1024px) 92vw, 497px"
                    className="aspect-[497/252] w-full max-w-[497px]"
                  />
                </div>
              </div>

              <div className="mt-[70px]">
                <h4 className="text-[22px] leading-normal sm:text-[25px]">
                  2. Grounded Café Information
                </h4>
                <p className="mt-3 lg:w-[1016px]">
                  Ask Sakura can answer verified questions about hours,
                  location, contact details, and the café space, while avoiding
                  real-time claims such as whether the café is currently open
                  that it cannot verify.
                </p>
                <div className="mt-10">
                  <CaseStudyShot
                    src={`${shots}/cafe-info.png`}
                    alt="Ask Sakura answering questions about the café"
                    width={2266}
                    height={1146}
                    sizes="(max-width: 1024px) 92vw, 490px"
                    className="aspect-[490/248] w-full max-w-[490px]"
                  />
                </div>
              </div>

              <div className="mt-[70px]">
                <h4 className="text-[22px] leading-normal sm:text-[25px]">
                  3. Interaction Support
                </h4>
                <div className="mt-3 lg:w-[1016px]">
                  <p>
                    Several interaction details support the overall
                    conversational experience:
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-[30px]">
                    <li>
                      8 suggested-prompt shortcuts displayed on the first turn
                      to help users understand what they can ask
                    </li>
                    <li>A typewriter-effect welcome message</li>
                    <li>
                      A “Sakura is thinking…” loading state while a response is
                      being generated
                    </li>
                    <li>
                      Conversation context limited to the 12 most recent user
                      and assistant messages
                    </li>
                    <li>
                      Distinct error messages for a missing API key, failed
                      request, or lost connection
                    </li>
                  </ul>
                </div>
                <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[41px]">
                  <div className="flex flex-col gap-[14px]">
                    <CaseStudyShot
                      src={`${shots}/interaction-1.png`}
                      alt="Suggested-prompt shortcuts on the first turn"
                      width={2268}
                      height={326}
                      sizes="(max-width: 1024px) 92vw, 673px"
                      className="aspect-[673/88] w-full max-w-[673px]"
                    />
                    <CaseStudyShot
                      src={`${shots}/interaction-2.png`}
                      alt="An error message shown after a failed request"
                      width={2266}
                      height={302}
                      sizes="(max-width: 1024px) 92vw, 673px"
                      className="aspect-[673/90] w-full max-w-[673px]"
                    />
                  </div>
                  <CaseStudyShot
                    src={`${shots}/interaction-3.png`}
                    alt="The “Sakura is thinking…” loading state"
                    width={426}
                    height={156}
                    sizes="213px"
                    className="aspect-[213/78] w-full max-w-[213px]"
                  />
                </div>
              </div>
            </Panel>
          </div>
        </Container>
      </section>

      {/* 04 — The Final Experience */}
      <section className="mt-[120px] lg:mt-[140px]">
        <Container>
          <SectionHeading>04 - The Final Experience</SectionHeading>
          <p className="mt-[70px] lg:w-[1178px]">
            Sakura Matcha supports the customer journey from discovering the
            brand to exploring the menu, deciding what to order, and planning an
            in-store visit. Customers can browse the website independently or
            turn to Ask Sakura when they need additional guidance.
          </p>

          <div
            aria-hidden
            className="mt-[30px] h-[280px] rounded-figma-panel bg-sakura-stone lg:h-[590px]"
          />

          <div className="mt-[50px]">
            <BlockHeading>1. Discover the Brand</BlockHeading>
            <p className="mt-3">
              The homepage introduces customers to Sakura Matcha’s story,
              values, and visual identity. Customer reviews provide social
              proof, while the store gallery offers a closer look at the
              physical space and overall atmosphere. Together, these elements
              are designed to build brand recognition, communicate what makes
              Sakura Matcha distinctive, and encourage customers to explore
              further.
            </p>
            <div className="mt-10 flex flex-col items-center gap-[43px] lg:flex-row lg:items-start lg:justify-center">
              <CaseStudyShot
                src={`${shots}/final-home.png`}
                alt="Top of the Sakura Matcha homepage"
                width={1464}
                height={4096}
                frame="light"
                align="top"
                sizes="(max-width: 1024px) 92vw, 358px"
                className="aspect-[358/590] w-full max-w-[358px]"
              />
              <CaseStudyShot
                src={`${shots}/final-home.png`}
                alt="Customer reviews and store gallery on the homepage"
                width={1464}
                height={4096}
                frame="light"
                align="bottom"
                sizes="(max-width: 1024px) 92vw, 354px"
                className="aspect-[354/413] w-full max-w-[354px]"
              />
            </div>
          </div>

          <div className="mt-[100px]">
            <BlockHeading>2. Explore the Menu</BlockHeading>
            <p className="mt-3">
              Customers can browse the menu to understand what Sakura Matcha
              offers and explore different drinks and desserts. Products are
              organized into clear categories and supported by descriptions,
              prices, and relevant product details, making the menu easier to
              understand for customers with different levels of familiarity with
              matcha.
            </p>
            <div className="mt-10 flex flex-col items-center gap-[64px] lg:flex-row lg:items-start lg:justify-center">
              <CaseStudyShot
                src={`${shots}/final-menu.png`}
                alt="Top of the Sakura Matcha menu page"
                width={2319}
                height={4096}
                frame="light"
                align="top"
                sizes="(max-width: 1024px) 92vw, 530px"
                className="aspect-[530/425] w-full max-w-[530px]"
              />
              <CaseStudyShot
                src={`${shots}/final-menu.png`}
                alt="Dessert and soft-serve sections of the menu page"
                width={2319}
                height={4096}
                frame="light"
                align="bottom"
                sizes="(max-width: 1024px) 92vw, 431px"
                className="aspect-[431/420] w-full max-w-[431px]"
              />
            </div>
          </div>

          <div className="mt-[100px]">
            <BlockHeading>3. Get Guidance from Ask Sakura</BlockHeading>
            <p className="mt-3">
              Customers who are unsure what to choose can use Ask Sakura for
              personalized support. They can describe preferences such as
              sweetness, matcha strength, temperature, or dietary needs in
              everyday language. The assistant then recommends relevant items
              from the menu and explains why each option may suit their
              preferences, helping customers make a more confident decision.
            </p>
            <div className="mt-10 flex justify-center">
              <CaseStudyShot
                src={`${shots}/final-ask-sakura.png`}
                alt="The Ask Sakura page with the assistant and frequently asked questions"
                width={2880}
                height={3774}
                frame="light"
                sizes="(max-width: 1024px) 92vw, 523px"
                className="aspect-[523/685] w-full max-w-[523px]"
              />
            </div>
          </div>

          <div className="mt-[100px]">
            <BlockHeading>4. Plan a Visit or Get in Touch</BlockHeading>
            <p className="mt-3">
              When customers are ready to visit the café, they can find
              practical information such as the store address and opening hours
              on the Visit Us page. The Contact page also provides direct ways
              to reach Sakura Matcha by email or phone when customers have
              additional questions.
            </p>
            <div className="mt-10 flex justify-center">
              <CaseStudyShot
                src={`${shots}/final-visit.png`}
                alt="The Contact page with a message form and café details"
                width={2880}
                height={2574}
                frame="light"
                sizes="(max-width: 1024px) 92vw, 583px"
                className="aspect-[583/521] w-full max-w-[583px]"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
