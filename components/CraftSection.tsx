const craftColumns = [
  [
    "lg:h-[143px]",
    "lg:h-[228px]",
    "lg:h-[143px]",
  ],
  [
    "lg:h-[319px]",
    "lg:h-[211px]",
  ],
  [
    "lg:h-[213px]",
    "lg:h-[317px]",
  ],
];

export function CraftSection() {
  return (
    <section
      id="craft"
      className="mx-auto mt-14 w-[calc(100vw-40px)] max-w-figma-content rounded-figma-panel bg-portfolio-paper px-6 py-10 sm:w-full sm:px-10 lg:mt-[72px] lg:p-14"
    >
      <h1 className="font-display text-[36px] font-bold leading-none text-portfolio-navy sm:text-[42px]">
        Craft
      </h1>

      <div className="mt-8 grid gap-[14px] sm:grid-cols-2 lg:mt-9 lg:grid-cols-3 lg:gap-4">
        {craftColumns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="grid gap-[14px] lg:gap-4"
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
