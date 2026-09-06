const craftColumns = [
  [
    "lg:h-[161px]",
    "lg:h-[258px]",
    "lg:h-[161px]",
  ],
  [
    "lg:h-[350px]",
    "lg:h-[232px]",
  ],
  [
    "lg:h-[236px]",
    "lg:h-[350px]",
  ],
];

export function CraftSection() {
  return (
    <section
      id="craft"
      className="mx-auto mt-14 w-[calc(100vw-40px)] max-w-figma-content rounded-figma-panel bg-portfolio-paper px-6 pb-8 pt-8 sm:w-full sm:px-9 lg:mt-[104px] lg:h-[780px] lg:px-[52px] lg:pb-0 lg:pt-[35px]"
    >
      <h1 className="font-display text-[42px] font-bold leading-none text-portfolio-navy sm:text-[50px]">
        Craft
      </h1>

      <div className="mt-8 grid gap-[14px] sm:grid-cols-2 lg:mt-[42px] lg:w-[1108px] lg:grid-cols-[354px_354px_354px] lg:gap-x-[23px]">
        {craftColumns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={`grid gap-[14px] ${columnIndex === 1 ? "lg:gap-[26px]" : ""} ${columnIndex === 2 ? "lg:gap-[22px]" : ""}`}
          >
            {column.map((heightClass, itemIndex) => (
              <div
                key={`${columnIndex}-${itemIndex}`}
                className={`h-[150px] rounded-figma-panel bg-portfolio-placeholder ${heightClass}`}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
