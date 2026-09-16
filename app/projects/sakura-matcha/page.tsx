import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

import { CaseStudyShot } from "@/components/CaseStudyShot";
import { CaseStudyVideo } from "@/components/CaseStudyVideo";
import { SakuraPetals } from "@/components/SakuraPetals";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Sakura Matcha — Rebecca Wang",
  description:
    "A matcha café website designed to build strong brand recognition and enhance the overall customer experience through thoughtful UI/UX and an AI assistant.",
};

const shots = "/figma-assets/sakura-matcha";

const overviewFacts = [
  "Project Type: Self-initiated MVP",
  "Role: Product Design / UI/UX Design / Brand Design / AI Interaction Design / Frontend Development",
  "Timeline: May–June 2026",
  "Platform: Responsive web",
  "Tools: Figma, React, Next.js, TypeScript, Tailwind CSS, OpenAI API, Claude Code",
  "Team: Independent project",
  "Status: Functional MVP",
];

const problems = [
  {
    title: "1. Standing Out in a Crowded Market",
    points: [
      "Limited differentiation through products alone in a growing matcha and specialty café market",
      "Difficulty creating a distinctive brand presence that customers can recognize and remember",
    ],
  },
  {
    title: "2. Turning the Brand into an Effective Digital Experience",
    points: [
      "Balancing strong visual expression with usability",
      "Making menu content easy to browse and understand across desktop and mobile",
      "Maintaining a consistent brand experience throughout the website",
    ],
  },
  {
    title: "3. Supporting Customers in Making Menu Choices",
    points: [
      "Different levels of familiarity with matcha can make menu items, flavors, and ingredients difficult to understand",
      "Customers may know what they like but struggle to translate those preferences into a specific menu choice",
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
    <h2 className="font-display text-[34px] font-normal leading-none text-white sm:text-[42px]">
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
      className={`text-[24px] font-normal leading-normal sm:text-[26px] ${
        tone === "light" ? "text-white" : "text-black"
      }`}
    >
      {children}
    </h3>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 rounded-figma-panel bg-sakura-paper px-6 py-10 text-black sm:px-10 lg:p-14">
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
      <figcaption className="text-center text-[16px] leading-normal">
        {caption}
      </figcaption>
      <div className="mt-10 flex w-full justify-center">{children}</div>
    </figure>
  );
}

export default function SakuraMatchaPage() {
  return (
    <main className="isolate min-h-screen w-full overflow-x-hidden bg-sakura-ink pb-[120px] pt-8 text-[17px] leading-[1.6] text-white sm:text-[18px] lg:pt-figma-header-top">
      <SakuraPetals />

      <Container>
        <SiteHeader tone="light" />
      </Container>

      {/* Hero */}
      <section className="relative mt-12 w-full overflow-hidden lg:mt-[72px] lg:h-[637px]">
        <Image
          src="/figma-assets/hero-backdrop.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="relative mx-auto h-full w-full max-w-figma-artboard px-5 py-16 sm:px-8 lg:px-0 lg:py-0">
          <div className="lg:absolute lg:left-[108px] lg:top-[264px] lg:w-[698px]">
            <h1 className="font-display text-[44px] font-normal leading-normal sm:text-[60px]">
              Sakura Matcha
            </h1>
            <p className="max-w-[696px] text-[19px] leading-normal sm:text-[22px]">
              A matcha café website designed to build strong brand recognition
              and enhance the overall customer experience through thoughtful
              UI/UX and an AI assistant.
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
              sizes="246px"
              className="absolute left-[871px] top-[12px] h-[404px] w-[246px]"
            />
            <CaseStudyShot
              src={`${shots}/filtering-1.png`}
              alt="Ask Sakura turning a request into menu filters"
              width={2268}
              height={1152}
              frame="light"
              sizes="254px"
              className="absolute left-[990px] top-[319px] h-[129px] w-[254px]"
            />
            <CaseStudyShot
              src={`${shots}/filtering-2.png`}
              alt="Filtered menu results in Ask Sakura"
              width={2044}
              height={1342}
              frame="light"
              sizes="254px"
              className="absolute left-[990px] top-[462px] h-[167px] w-[254px]"
            />
          </div>
        </div>
      </section>

      {/* 01 — Overview */}
      <section className="mt-[60px]">
        <Container>
          <SectionHeading>01 - Overview</SectionHeading>
          <div className="mt-[60px] grid gap-10 lg:grid-cols-2 lg:gap-x-[170px]">
            <div>
              <p>
                This project focuses on building a brand-driven café website
                designed to attract customers and enhance the overall customer
                experience through a recognizable brand identity, thoughtful
                UI/UX, and a grounded AI assistant that helps users explore the
                menu and make more personalized choices.
              </p>
            </div>
            <ul className="list-disc space-y-1 pl-[30px]">
              {overviewFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 02 — The Problem */}
      <section className="mt-[120px]">
        <Container>
          <SectionHeading>02 - The Problem</SectionHeading>
          <div className="mt-[60px] max-w-figma-text">
            <p>There are three key challenges I addressed in Sakura Matcha:</p>
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
      <section className="mt-[120px]">
        <Container>
          <SectionHeading>
            03 - Three Key Decisions &amp; Design Exploration
          </SectionHeading>

          <div className="mt-[60px]">
            <BlockHeading>
              1. Building a Recognizable Brand Identity
            </BlockHeading>
            <p className="mt-3">
              Sakura blossoms were selected as the central visual motif and
              became the basis for the name “Sakura Matcha,” giving the brand a
              distinctive element that could be carried consistently across
              different touchpoints. By combining references to traditional
              Japanese tea houses with the contemporary character of New York,
              the visual direction balances cultural warmth with a modern,
              refined presence. The color palette and supporting visual elements
              draw directly from matcha and sakura, creating an atmosphere that
              feels calm, soft, and premium.
            </p>
            <Panel>
              <div className="space-y-14">
                <Exhibit caption="Color exploration moodboard">
                  <CaseStudyShot
                    src={`${shots}/moodboard.png`}
                    alt="Moodboard of color and texture references for the brand"
                    width={1260}
                    height={732}
                    sizes="(max-width: 1024px) 92vw, 464px"
                    className="aspect-[515/299] w-full max-w-[464px]"
                  />
                </Exhibit>
                <Exhibit caption="Final color system">
                  <CaseStudyShot
                    src={`${shots}/palette.png`}
                    alt="Final color system swatches"
                    width={1154}
                    height={918}
                    sizes="171px"
                    className="aspect-[190/294] w-[171px]"
                  />
                </Exhibit>
                <Exhibit caption="Homepage background-color tests">
                  <CaseStudyShot
                    src={`${shots}/homepage-bg-tests.png`}
                    alt="Three homepage variations tested with different background colors"
                    width={1450}
                    height={1136}
                    sizes="(max-width: 1024px) 92vw, 400px"
                    className="aspect-[444/348] w-full max-w-[400px]"
                  />
                </Exhibit>
              </div>
            </Panel>
          </div>

          <div className="mt-[80px]">
            <BlockHeading>
              2. Balancing Brand Expression with Usability
            </BlockHeading>
            <p className="mt-3">
              The website structure was designed to communicate the brand’s
              personality without making the experience difficult to understand
              or navigate. Familiar navigation patterns, clear content
              hierarchy, and consistent page layouts help users quickly find
              information about the café, menu, and products. At the same time,
              the typography, imagery, colors, and decorative elements maintain
              a distinctive visual identity across the experience. This balance
              allows the website to feel visually expressive while remaining
              clear and easy to use.
            </p>
            <Panel>
              <div className="space-y-14">
                <Exhibit caption="Separate About page (wireframe) → Integrated homepage experience (final design)">
                  <CaseStudyShot
                    src={`${shots}/wireframe-comparison.png`}
                    alt="Wireframe of a separate About page next to the integrated homepage design"
                    width={2168}
                    height={1106}
                    sizes="(max-width: 1024px) 92vw, 705px"
                    className="aspect-[783/399] w-full max-w-[705px]"
                  />
                </Exhibit>
                <Exhibit caption="Brand-heavy dark aesthetic vs. Menu readability and scannability">
                  <CaseStudyShot
                    src={`${shots}/menu-readability.png`}
                    alt="Dark brand-led menu layout compared with a more readable menu layout"
                    width={1618}
                    height={1418}
                    sizes="(max-width: 1024px) 92vw, 465px"
                    className="aspect-[517/453] w-full max-w-[465px]"
                  />
                </Exhibit>
              </div>
            </Panel>
          </div>

          <div className="mt-[80px]">
            <BlockHeading>
              3. Supporting Menu Decisions with an AI Assistant
            </BlockHeading>
            <p className="mt-3">
              Ask Sakura is Sakura Matcha’s AI assistant, designed to help
              customers who may be unfamiliar with matcha or uncertain about
              what to order.
            </p>
            <Panel>
              <BlockHeading tone="dark">Core AI Capabilities</BlockHeading>

              <div className="mt-[44px] flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:w-[403px]">
                  <h4 className="text-[20px] leading-normal sm:text-[22px]">
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
                    sizes="(max-width: 1024px) 92vw, 375px"
                    className="aspect-[417/212] w-full max-w-[375px]"
                  />
                  <CaseStudyShot
                    src={`${shots}/personalized-2.png`}
                    alt="Recommended menu items shown as structured cards"
                    width={2268}
                    height={1152}
                    sizes="(max-width: 1024px) 92vw, 375px"
                    className="aspect-[417/212] w-full max-w-[375px]"
                  />
                </div>
              </div>

              <div className="mt-[60px] flex flex-col gap-10 lg:flex-row-reverse lg:items-start lg:justify-between">
                <div className="lg:w-[458px]">
                  <h4 className="text-[20px] leading-normal sm:text-[22px]">
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
                    sizes="(max-width: 1024px) 92vw, 317px"
                    className="aspect-[352/179] w-full max-w-[317px]"
                  />
                  <CaseStudyShot
                    src={`${shots}/filtering-2.png`}
                    alt="Menu results matching the active filters"
                    width={2044}
                    height={1342}
                    sizes="(max-width: 1024px) 92vw, 317px"
                    className="aspect-[352/231] w-full max-w-[317px]"
                  />
                </div>
              </div>

              <div className="mt-[60px] flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:w-[433px]">
                  <h4 className="text-[20px] leading-normal sm:text-[22px]">
                    3. Drink, Dessert &amp; Soft Serve Pairing
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
                <div className="flex flex-col gap-5 lg:relative lg:h-[356px] lg:w-[478px] lg:shrink-0 lg:gap-0">
                  <CaseStudyShot
                    src={`${shots}/pairing-1.png`}
                    alt="Ask Sakura collecting the item and pairing direction"
                    width={2266}
                    height={1148}
                    sizes="(max-width: 1024px) 92vw, 436px"
                    className="aspect-[484/245] w-full max-w-[484px] lg:absolute lg:left-0 lg:top-0 lg:h-[221px] lg:w-[436px]"
                  />
                  <div className="hidden lg:absolute lg:left-[80px] lg:top-[171px] lg:flex lg:h-[151px] lg:w-[122px] lg:items-center lg:justify-center">
                    <Image
                      src={`${shots}/arrow-polygon.svg`}
                      alt=""
                      width={61}
                      height={100}
                      className="h-[100px] w-[61px] -rotate-[26.1deg]"
                    />
                  </div>
                  <CaseStudyShot
                    src={`${shots}/pairing-2.png`}
                    alt="The paired result with its combined price"
                    width={1834}
                    height={590}
                    sizes="(max-width: 1024px) 92vw, 357px"
                    className="aspect-[397/128] w-full max-w-[397px] lg:absolute lg:left-[121px] lg:top-[240px] lg:h-[115px] lg:w-[357px]"
                  />
                </div>
              </div>

              <BlockHeading tone="dark">
                <span className="mt-[80px] block">
                  Guardrails &amp; Supporting Behaviors
                </span>
              </BlockHeading>

              <div className="mt-[44px]">
                <h4 className="text-[20px] leading-normal sm:text-[22px]">
                  1. Allergy &amp; Dietary Safety
                </h4>
                <div className="mt-3 space-y-5">
                  <p>
                    When a customer mentions a dietary restriction covered by
                    the system’s structured filters—dairy-free, vegan, or
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
                <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start">
                  <CaseStudyShot
                    src={`${shots}/allergy-1.png`}
                    alt="A dietary restriction added to the active filters"
                    width={2266}
                    height={1150}
                    sizes="(max-width: 1024px) 92vw, 422px"
                    className="aspect-[469/238] w-full max-w-[422px]"
                  />
                  <CaseStudyShot
                    src={`${shots}/allergy-2.png`}
                    alt="A warning notice shown beneath an allergy-related answer"
                    width={2266}
                    height={1150}
                    sizes="(max-width: 1024px) 92vw, 447px"
                    className="aspect-[497/252] w-full max-w-[447px]"
                  />
                </div>
              </div>

              <div className="mt-[60px]">
                <h4 className="text-[20px] leading-normal sm:text-[22px]">
                  2. Grounded Café Information
                </h4>
                <p className="mt-3">
                  Ask Sakura can answer verified questions about opening hours,
                  location, contact details, and the café space, while avoiding
                  real-time claims it cannot verify, such as whether the café is
                  currently open.
                </p>
                <div className="mt-10">
                  <CaseStudyShot
                    src={`${shots}/cafe-info.png`}
                    alt="Ask Sakura answering questions about the café"
                    width={2266}
                    height={1146}
                    sizes="(max-width: 1024px) 92vw, 441px"
                    className="aspect-[490/248] w-full max-w-[441px]"
                  />
                </div>
              </div>

              <div className="mt-[60px]">
                <h4 className="text-[20px] leading-normal sm:text-[22px]">
                  3. Interaction Support
                </h4>
                <div className="mt-3">
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
                <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[37px]">
                  <div className="flex flex-col gap-[14px]">
                    <CaseStudyShot
                      src={`${shots}/interaction-1.png`}
                      alt="Suggested-prompt shortcuts on the first turn"
                      width={2268}
                      height={326}
                      sizes="(max-width: 1024px) 92vw, 606px"
                      className="aspect-[673/88] w-full max-w-[606px]"
                    />
                    <CaseStudyShot
                      src={`${shots}/interaction-2.png`}
                      alt="An error message shown after a failed request"
                      width={2266}
                      height={302}
                      sizes="(max-width: 1024px) 92vw, 606px"
                      className="aspect-[673/90] w-full max-w-[606px]"
                    />
                  </div>
                  <CaseStudyShot
                    src={`${shots}/interaction-3.png`}
                    alt="The “Sakura is thinking…” loading state"
                    width={426}
                    height={156}
                    sizes="192px"
                    className="aspect-[213/78] w-full max-w-[192px]"
                  />
                </div>
              </div>
            </Panel>
          </div>
        </Container>
      </section>

      {/* 04 — The Final Experience */}
      <section className="mt-[120px]">
        <Container>
          <SectionHeading>04 - The Final Experience</SectionHeading>
          <p className="mt-[60px]">
            Sakura Matcha supports the customer journey from discovering the
            brand to exploring the menu, deciding what to order, and planning an
            in-store visit. Customers can browse the website independently or
            turn to Ask Sakura when they need additional guidance.
          </p>

          <CaseStudyVideo
            src={`${shots}/mvp-demo.mp4`}
            poster={`${shots}/mvp-demo-poster.jpg`}
            label="Screen recording walking through the Sakura Matcha MVP"
            frame="none"
            radius="panel"
            className="mt-7 aspect-[1440/812] w-full"
          />

          <div className="mt-[44px]">
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
            <div className="mt-10 flex flex-col items-center gap-[39px] lg:flex-row lg:items-start lg:justify-center">
              <CaseStudyShot
                src={`${shots}/final-home.png`}
                alt="Top of the Sakura Matcha homepage"
                width={1464}
                height={4096}
                frame="light"
                align="top"
                sizes="(max-width: 1024px) 92vw, 322px"
                className="aspect-[358/590] w-full max-w-[322px]"
              />
              <CaseStudyShot
                src={`${shots}/final-home.png`}
                alt="Customer reviews and store gallery on the homepage"
                width={1464}
                height={4096}
                frame="light"
                align="bottom"
                sizes="(max-width: 1024px) 92vw, 319px"
                className="aspect-[354/413] w-full max-w-[319px]"
              />
            </div>
          </div>

          <div className="mt-[80px]">
            <BlockHeading>2. Explore the Menu</BlockHeading>
            <p className="mt-3">
              Customers can browse the menu to understand what Sakura Matcha
              offers and explore different drinks and desserts. Products are
              organized into clear categories and supported by descriptions,
              prices, and relevant product details, making the menu easier to
              understand for customers with different levels of familiarity with
              matcha.
            </p>
            <div className="mt-10 flex flex-col items-center gap-[58px] lg:flex-row lg:items-start lg:justify-center">
              <CaseStudyShot
                src={`${shots}/final-menu.png`}
                alt="Top of the Sakura Matcha menu page"
                width={2319}
                height={4096}
                frame="light"
                align="top"
                sizes="(max-width: 1024px) 92vw, 477px"
                className="aspect-[530/425] w-full max-w-[477px]"
              />
              <CaseStudyShot
                src={`${shots}/final-menu.png`}
                alt="Dessert and soft-serve sections of the menu page"
                width={2319}
                height={4096}
                frame="light"
                align="bottom"
                sizes="(max-width: 1024px) 92vw, 388px"
                className="aspect-[431/420] w-full max-w-[388px]"
              />
            </div>
          </div>

          <div className="mt-[80px]">
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
                sizes="(max-width: 1024px) 92vw, 471px"
                className="aspect-[523/685] w-full max-w-[471px]"
              />
            </div>
          </div>

          <div className="mt-[80px]">
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
                sizes="(max-width: 1024px) 92vw, 525px"
                className="aspect-[583/521] w-full max-w-[525px]"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
