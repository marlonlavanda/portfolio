import Hero from "./HeroHome"

function PageLayouts({ layouts }) {
  if (!layouts) {
    return <p>No layouts found</p>
  }
  console.log("layouts", layouts)

  return (
    <>
      {/* {debugACF && (
        <pre>
          syng_page_layouts:
          <br />
          {JSON.stringify(layouts, null, 2)}
        </pre>
      )} */}
      {layouts.map((layout, index) => {
        switch (layout.fieldGroupName) {
          case "PageBuilderPageLayoutsHeroLayout":
            return <Hero key={index} {...layout} />
          default:
            return null
        }
      })}
    </>
  )
}

export default PageLayouts
