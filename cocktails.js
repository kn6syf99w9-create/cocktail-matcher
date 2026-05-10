const COCKTAILS = [
  {
    name: "Negroni",
    description: "Bitter, herbal and spirit-forward. A classic aperitif with dark elegance.",
    ingredients: ["3 cl Gin", "3 cl Red Bitter Aperitif", "3 cl Sweet Vermouth"],
    method: "Stir with ice and strain over fresh ice. Garnish with orange zest.",
    vibes: { fresh: 2, cozy: 4, bitter: 10, experimental: 3, herbal: 7, heavy: 8 },
    colors: { primary: "#1a0d10", secondary: "#4c1015", accent: "#d94b2b" }
  },
  {
    name: "Americano",
    description: "Light, bitter and sparkling with a relaxed aperitif feel.",
    ingredients: ["3 cl Red Bitter Aperitif", "3 cl Sweet Vermouth", "Soda Water"],
    method: "Build over ice, top with soda and garnish with orange.",
    vibes: { fresh: 5, cozy: 2, bitter: 8, experimental: 2, herbal: 5, heavy: 3 },
    colors: { primary: "#161012", secondary: "#5b1518", accent: "#ff6a3d" }
  },
  {
    name: "Old Fashioned",
    description: "Warm, slow and spirit-forward with a rounded whiskey character.",
    ingredients: ["4.5 cl Bourbon or Rye Whiskey", "1 Sugar Cube", "2 dashes Angostura Bitters"],
    method: "Muddle sugar with bitters, add whiskey and ice, stir gently.",
    vibes: { fresh: 1, cozy: 8, bitter: 3, experimental: 2, herbal: 2, heavy: 9 },
    colors: { primary: "#120c08", secondary: "#3a1d0c", accent: "#c47a2c" }
  },
  {
    name: "Manhattan",
    description: "Elegant, strong and slightly herbal with a deep evening character.",
    ingredients: ["5 cl Rye Whiskey", "2 cl Sweet Vermouth", "1 dash Angostura Bitters"],
    method: "Stir with ice and strain into a chilled cocktail glass.",
    vibes: { fresh: 1, cozy: 6, bitter: 4, experimental: 3, herbal: 4, heavy: 9 },
    colors: { primary: "#140b0c", secondary: "#371018", accent: "#a83d3d" }
  },
  {
    name: "Daiquiri",
    description: "Sharp, clean and bright. A precise fresh rum sour.",
    ingredients: ["6 cl White Rum", "2 cl Lime Juice", "2 tsp Sugar"],
    method: "Shake with ice and strain into a chilled cocktail glass.",
    vibes: { fresh: 9, cozy: 2, bitter: 0, experimental: 1, herbal: 0, heavy: 4 },
    colors: { primary: "#101815", secondary: "#204236", accent: "#7fe0a1" }
  },
  {
    name: "Mojito",
    description: "Minty, fresh and easy-drinking with a bright highball feel.",
    ingredients: ["4.5 cl White Rum", "2 cl Lime Juice", "Mint", "Soda Water", "Sugar"],
    method: "Gently muddle mint, build with ice, rum, lime and soda.",
    vibes: { fresh: 10, cozy: 2, bitter: 0, experimental: 1, herbal: 6, heavy: 2 },
    colors: { primary: "#071612", secondary: "#123d2c", accent: "#8df2b3" }
  },
  {
    name: "John Collins",
    description: "Fresh, tall and sparkling with a simple citrus profile.",
    ingredients: ["4.5 cl Gin", "3 cl Lemon Juice", "1.5 cl Sugar Syrup", "Soda Water"],
    method: "Build over ice and top with soda. Garnish with lemon.",
    vibes: { fresh: 9, cozy: 2, bitter: 1, experimental: 1, herbal: 2, heavy: 3 },
    colors: { primary: "#101417", secondary: "#253c47", accent: "#d7e36f" }
  },
  {
    name: "Margarita",
    description: "Fresh, sharp and structured with tequila and citrus brightness.",
    ingredients: ["5 cl Tequila", "2 cl Triple Sec", "1.5 cl Lime Juice"],
    method: "Shake with ice and strain into a salt-rimmed glass.",
    vibes: { fresh: 8, cozy: 2, bitter: 1, experimental: 2, herbal: 1, heavy: 5 },
    colors: { primary: "#11150d", secondary: "#2f3e18", accent: "#d6f06d" }
  },
  {
    name: "Paloma",
    description: "Bright grapefruit, light bitterness and a sparkling tequila base.",
    ingredients: ["5 cl Tequila", "10 cl Grapefruit Soda", "1 cl Lime Juice"],
    method: "Build over ice and garnish with grapefruit or lime.",
    vibes: { fresh: 9, cozy: 2, bitter: 2, experimental: 2, herbal: 1, heavy: 3 },
    colors: { primary: "#181014", secondary: "#4f2030", accent: "#ff8cab" }
  },
  {
    name: "Last Word",
    description: "Herbal, complex and unusual with a sharp green intensity.",
    ingredients: ["2.25 cl Gin", "2.25 cl Green Chartreuse", "2.25 cl Maraschino Liqueur", "2.25 cl Lime Juice"],
    method: "Shake with ice and strain into a chilled cocktail glass.",
    vibes: { fresh: 6, cozy: 2, bitter: 3, experimental: 8, herbal: 10, heavy: 5 },
    colors: { primary: "#091410", secondary: "#17422b", accent: "#7dff9b" }
  },
  {
    name: "Aviation",
    description: "Floral, elegant and slightly unusual with a soft violet tone.",
    ingredients: ["4.5 cl Gin", "1.5 cl Lemon Juice", "1.5 cl Maraschino Liqueur", "1 barspoon Crème de Violette"],
    method: "Shake with ice and strain into a chilled cocktail glass.",
    vibes: { fresh: 5, cozy: 3, bitter: 1, experimental: 7, herbal: 5, heavy: 5 },
    colors: { primary: "#12101a", secondary: "#2c244d", accent: "#b7a7ff" }
  },
  {
    name: "Gin Basil Smash",
    description: "Green, herbal and fresh with a vivid basil character.",
    ingredients: ["6 cl Gin", "2 cl Lemon Juice", "2 cl Sugar Syrup", "Basil"],
    method: "Muddle basil, shake with ice and double strain.",
    vibes: { fresh: 8, cozy: 2, bitter: 0, experimental: 4, herbal: 10, heavy: 3 },
    colors: { primary: "#08130c", secondary: "#16431e", accent: "#8cff76" }
  },
  {
    name: "Bloody Mary",
    description: "Savory, spicy and unconventional with a brunch-like depth.",
    ingredients: ["4.5 cl Vodka", "9 cl Tomato Juice", "1.5 cl Lemon Juice", "Spices"],
    method: "Stir gently with ice and serve in a highball glass.",
    vibes: { fresh: 3, cozy: 5, bitter: 2, experimental: 9, herbal: 5, heavy: 4 },
    colors: { primary: "#170c0b", secondary: "#4a1511", accent: "#e04a36" }
  },
  {
    name: "Espresso Martini",
    description: "Dark, cozy and energetic with a dessert-like coffee profile.",
    ingredients: ["5 cl Vodka", "3 cl Espresso", "2 cl Coffee Liqueur", "1 cl Sugar Syrup"],
    method: "Shake hard with ice and strain into a chilled cocktail glass.",
    vibes: { fresh: 1, cozy: 8, bitter: 4, experimental: 4, herbal: 0, heavy: 6 },
    colors: { primary: "#0d0907", secondary: "#2b160d", accent: "#c48a53" }
  },
  {
    name: "Paper Plane",
    description: "Modern, bittersweet and citrusy with a balanced complex profile.",
    ingredients: ["3 cl Bourbon", "3 cl Aperol", "3 cl Amaro Nonino", "3 cl Lemon Juice"],
    method: "Shake with ice and strain into a chilled cocktail glass.",
    vibes: { fresh: 6, cozy: 3, bitter: 6, experimental: 6, herbal: 4, heavy: 5 },
    colors: { primary: "#15100d", secondary: "#4b2514", accent: "#ff9a4a" }
  },
  {
    name: "Old Salt Light",
    description: "Bright grapefruit freshness with a salty coastal edge and easy-drinking sparkle.",
    ingredients: ["4 cl Gin", "10 cl Grapefruit Soda", "1 pinch Salt", "Ice"],
    method: "Build over ice in a highball glass and stir gently.",
    vibes: { fresh: 9, cozy: 2, bitter: 3, experimental: 5, herbal: 5, heavy: 2 },
    colors: { primary: "#f4c7a1", secondary: "#f7d8b5", accent: "#ff8b5e" }
  },
  {
    name: "Amaretto Ginger Highball",
    description: "Nutty sweetness balanced by spicy ginger and crisp carbonation.",
    ingredients: ["5 cl Amaretto", "10 cl Ginger Ale or Ginger Beer", "Lime"],
    method: "Build over ice and garnish with lime.",
    vibes: { fresh: 6, cozy: 7, bitter: 1, experimental: 4, herbal: 2, heavy: 4 },
    colors: { primary: "#8a5a3c", secondary: "#c38a5a", accent: "#f5d28a" }
  },
  {
    name: "Cardamom Mule",
    description: "Spiced and aromatic with ginger heat and cool citrus lift.",
    ingredients: ["4 cl Vodka", "1 cl Cardamom Syrup", "10 cl Ginger Beer", "1 cl Lime Juice"],
    method: "Build over ice in a mule mug and stir gently.",
    vibes: { fresh: 7, cozy: 6, bitter: 1, experimental: 6, herbal: 5, heavy: 3 },
    colors: { primary: "#c6b28a", secondary: "#8d6f45", accent: "#d8d1b0" }
  },
  {
    name: "Cardamom Daiquiri",
    description: "A fragrant twist on the classic daiquiri with warm spice and sharp lime.",
    ingredients: ["5 cl White Rum", "2 cl Lime Juice", "1.5 cl Cardamom Syrup"],
    method: "Shake with ice and strain into a chilled coupe.",
    vibes: { fresh: 8, cozy: 4, bitter: 1, experimental: 7, herbal: 4, heavy: 2 },
    colors: { primary: "#f2e4c7", secondary: "#c2a977", accent: "#88c8b8" }
  },
  {
    name: "Cinnamon Whiskey Sour",
    description: "Warm cinnamon spice layered into a silky whiskey sour.",
    ingredients: ["5 cl Bourbon", "2 cl Lemon Juice", "1.5 cl Cinnamon Syrup", "1 Egg White"],
    method: "Dry shake, shake with ice and strain into a rocks glass.",
    vibes: { fresh: 4, cozy: 9, bitter: 2, experimental: 5, herbal: 3, heavy: 6 },
    colors: { primary: "#7a4728", secondary: "#c78b52", accent: "#f0d7a0" }
  },
  {
    name: "Apple Cinnamon Highball",
    description: "Soft apple sweetness with autumn spice and sparkling lift.",
    ingredients: ["4 cl Whiskey", "6 cl Apple Juice", "6 cl Soda Water", "1 cl Cinnamon Syrup"],
    method: "Build over ice and stir gently.",
    vibes: { fresh: 5, cozy: 9, bitter: 1, experimental: 3, herbal: 2, heavy: 4 },
    colors: { primary: "#c46b36", secondary: "#d9a15f", accent: "#f6d39a" }
  },
  {
    name: "Elderflower Mule",
    description: "Floral freshness meeting sharp ginger spice in a bright highball.",
    ingredients: ["4 cl Vodka", "2 cl Elderflower Liqueur", "10 cl Ginger Beer", "1 cl Lime Juice"],
    method: "Build over ice and stir gently.",
    vibes: { fresh: 8, cozy: 4, bitter: 1, experimental: 5, herbal: 6, heavy: 3 },
    colors: { primary: "#d9ead3", secondary: "#b7d3c2", accent: "#f7f0c8" }
  },
  {
    name: "Elderflower Grapefruit Highball",
    description: "Floral citrus bitterness with airy sparkling elegance.",
    ingredients: ["4 cl Gin", "2 cl Elderflower Liqueur", "8 cl Grapefruit Soda"],
    method: "Build over ice and garnish with grapefruit zest.",
    vibes: { fresh: 9, cozy: 2, bitter: 4, experimental: 5, herbal: 6, heavy: 2 },
    colors: { primary: "#f3c2b3", secondary: "#f7d5c8", accent: "#ff8c7a" }
  },
  {
    name: "Campari Tonic",
    description: "Minimal, bitter and sparkling with vibrant aperitif energy.",
    ingredients: ["5 cl Red Bitter Aperitif", "10 cl Tonic Water"],
    method: "Build over ice and garnish with orange.",
    vibes: { fresh: 7, cozy: 2, bitter: 9, experimental: 2, herbal: 7, heavy: 3 },
    colors: { primary: "#8d1017", secondary: "#d32b2b", accent: "#ff8f4d" }
  },
  {
    name: "Campari Collins",
    description: "Sharp citrus brightness softened by bitter orange complexity.",
    ingredients: ["4 cl Red Bitter Aperitif", "2 cl Lemon Juice", "1 cl Sugar Syrup", "Soda Water"],
    method: "Shake first ingredients and top with soda over ice.",
    vibes: { fresh: 8, cozy: 2, bitter: 8, experimental: 4, herbal: 6, heavy: 3 },
    colors: { primary: "#c11d1d", secondary: "#ef5a29", accent: "#ffd27d" }
  },
  {
    name: "Italicus Soda",
    description: "Elegant bergamot aromatics with crisp Italian aperitivo character.",
    ingredients: ["5 cl Italicus", "10 cl Soda Water"],
    method: "Build over ice and garnish with olive or citrus.",
    vibes: { fresh: 9, cozy: 1, bitter: 3, experimental: 5, herbal: 8, heavy: 1 },
    colors: { primary: "#d9efe8", secondary: "#b5d8cf", accent: "#f7e7b4" }
  },
  {
    name: "Grapefruit Spritz",
    description: "Refreshing citrus bitterness with a breezy aperitivo vibe.",
    ingredients: ["6 cl Grapefruit Soda", "6 cl Prosecco", "2 cl Red Bitter Aperitif"],
    method: "Build over ice in a wine glass.",
    vibes: { fresh: 10, cozy: 1, bitter: 5, experimental: 3, herbal: 4, heavy: 1 },
    colors: { primary: "#f6b7a5", secondary: "#ffd8c4", accent: "#ff9270" }
  },
  {
    name: "Orange Blossom Highball",
    description: "Citrus-forward and floral with a soft sparkling finish.",
    ingredients: ["4 cl Gin", "6 cl Orange Juice", "6 cl Soda Water"],
    method: "Build over ice and stir lightly.",
    vibes: { fresh: 8, cozy: 3, bitter: 1, experimental: 4, herbal: 5, heavy: 2 },
    colors: { primary: "#f0a340", secondary: "#ffd27a", accent: "#fff0c4" }
  },
  {
    name: "White Negroni Rosso",
    description: "A bittersweet hybrid balancing herbal sharpness with darker aperitif depth.",
    ingredients: ["3 cl Gin", "3 cl Red Bitter Aperitif", "3 cl White Vermouth"],
    method: "Stir with ice and strain over fresh ice.",
    vibes: { fresh: 3, cozy: 5, bitter: 9, experimental: 7, herbal: 8, heavy: 7 },
    colors: { primary: "#5a2d2d", secondary: "#b36a4a", accent: "#f2d3a4" }
  },
  {
    name: "Campari Limoncello Smash",
    description: "Bright lemon sweetness smashed into deep Campari bitterness.",
    ingredients: ["4 cl Red Bitter Aperitif", "2 cl Limoncello", "Lemon", "Mint"],
    method: "Muddle lemon and mint, add ice and stir.",
    vibes: { fresh: 9, cozy: 2, bitter: 7, experimental: 5, herbal: 5, heavy: 3 },
    colors: { primary: "#f7d447", secondary: "#d11f1f", accent: "#8bcf8a" }
  },
  {
    name: "Caipirinha",
    description: "Raw lime brightness and cane spirit funk with rustic energy.",
    ingredients: ["6 cl Cachaça", "1 Lime", "2 tsp Sugar"],
    method: "Muddle lime and sugar, add ice and cachaça.",
    vibes: { fresh: 10, cozy: 2, bitter: 2, experimental: 2, herbal: 3, heavy: 4 },
    colors: { primary: "#b8d36a", secondary: "#dce89a", accent: "#f3f5d0" }
  },
  {
    name: "Coconut Old Fashioned",
    description: "Dark whiskey warmth softened by creamy coconut and bitters.",
    ingredients: ["4 cl Bourbon", "2 cl Batida de Coco", "2 dashes Angostura Bitters"],
    method: "Stir with ice and strain over a large ice cube.",
    vibes: { fresh: 1, cozy: 9, bitter: 5, experimental: 7, herbal: 4, heavy: 8 },
    colors: { primary: "#5c3523", secondary: "#a06b46", accent: "#f0d3a5" }
  },
  {
    name: "Coco Citrus Highball",
    description: "Light coconut creaminess sharpened by sparkling citrus freshness.",
    ingredients: ["5 cl Batida de Coco", "2 cl Lemon Juice", "Soda Water"],
    method: "Build over ice and stir gently.",
    vibes: { fresh: 8, cozy: 4, bitter: 1, experimental: 5, herbal: 2, heavy: 3 },
    colors: { primary: "#f4efe2", secondary: "#ffe2b8", accent: "#ffd08a" }
  },
  {
    name: "Coconut Espresso Light",
    description: "Smooth coffee bitterness wrapped in creamy coconut sweetness.",
    ingredients: ["4 cl Batida de Coco", "1 Espresso", "2 cl Vodka"],
    method: "Shake with ice and strain into a coupe.",
    vibes: { fresh: 1, cozy: 8, bitter: 6, experimental: 6, herbal: 1, heavy: 7 },
    colors: { primary: "#2b1c16", secondary: "#6b4b3b", accent: "#d8c3a5" }
  },
  {
    name: "Coco Orange Spritz",
    description: "Creamy coconut and bright orange in an easy aperitif spritz.",
    ingredients: ["5 cl Batida de Coco", "6 cl Orange Juice", "6 cl Soda Water or Prosecco"],
    method: "Build over ice in a wine glass.",
    vibes: { fresh: 7, cozy: 4, bitter: 1, experimental: 4, herbal: 2, heavy: 3 },
    colors: { primary: "#f6a03a", secondary: "#ffd08a", accent: "#fff0cf" }
  },
  {
    name: "Coco Sour",
    description: "Silky and tropical with citrus brightness and creamy foam.",
    ingredients: ["5 cl Batida de Coco", "2 cl Lemon Juice", "1 Egg White"],
    method: "Dry shake, shake with ice and strain into a coupe.",
    vibes: { fresh: 7, cozy: 5, bitter: 1, experimental: 6, herbal: 2, heavy: 5 },
    colors: { primary: "#f4ede1", secondary: "#fff4c9", accent: "#d9c7a2" }
  },
  {
    name: "Lemon Cream Soda",
    description: "Creamy lemon sweetness with bright soda lift and a soft dessert-like finish.",
    ingredients: ["6 cl Limoncello", "1 cl Sugar Syrup", "3 cl Cream", "9 cl Soda Water"],
    method: "Shake limoncello, syrup and cream with ice. Slowly add soda, then strain into a Collins glass filled with crushed ice. Garnish with a lemon wheel.",
    vibes: { fresh: 7, cozy: 7, bitter: 1, experimental: 6, herbal: 1, heavy: 3 },
    colors: { primary: "#f7e7a8", secondary: "#fff3c7", accent: "#ffe55c" }
  },
  {
    name: "Fitzgerald",
    description: "A sharp gin sour with lemon brightness, subtle bitters and a clean classic profile.",
    ingredients: ["5 cl Gin", "2.25 cl Lemon Juice", "1.5 cl Sugar Syrup", "3 dashes Angostura Bitters", "2 drops Saline Solution"],
    method: "Shake all ingredients with ice and strain into an ice-filled old fashioned glass. Garnish with a lemon wheel.",
    vibes: { fresh: 8, cozy: 3, bitter: 3, experimental: 3, herbal: 4, heavy: 5 },
    colors: { primary: "#d9c879", secondary: "#f4e2a0", accent: "#f5d95c" }
  },
  {
    name: "Gin Fizz",
    description: "Clean, sparkling and citrus-forward with a light classic gin backbone.",
    ingredients: ["5 cl Gin", "2.25 cl Lemon Juice", "1.5 cl Sugar Syrup", "12 cl Soda Water"],
    method: "Shake gin, lemon juice and syrup with ice. Strain into a chilled highball glass without ice, then top with soda. Garnish with a half lemon wheel.",
    vibes: { fresh: 9, cozy: 2, bitter: 1, experimental: 1, herbal: 3, heavy: 3 },
    colors: { primary: "#e9e6b8", secondary: "#cfd8a3", accent: "#f6df63" }
  },
  {
    name: "Pedro Collins",
    description: "A long rum sour with lime freshness, soda lift and easy tropical clarity.",
    ingredients: ["6 cl White Rum", "2.5 cl Lime Juice", "1.5 cl Sugar Syrup", "5 cl Soda Water"],
    method: "Shake rum, lime juice and syrup with ice. Strain into an ice-filled Collins glass, top with soda, lightly stir and serve with straws.",
    vibes: { fresh: 9, cozy: 2, bitter: 0, experimental: 2, herbal: 1, heavy: 4 },
    colors: { primary: "#d8efb0", secondary: "#f4f0a6", accent: "#9bd66f" }
  },
  {
    name: "Jalisco Flower",
    description: "Subtle tequila, elderflower and ruby grapefruit lifted by sparkling wine.",
    ingredients: ["1.5 cl Reposado Tequila", "2.25 cl Elderflower Liqueur", "3 cl Grapefruit Juice", "9 cl Sparkling Wine"],
    method: "Shake tequila, elderflower liqueur and grapefruit juice with ice. Strain into an ice-filled Collins glass, top with sparkling wine and briefly stir. Garnish with grapefruit zest or edible white flowers.",
    vibes: { fresh: 8, cozy: 2, bitter: 3, experimental: 5, herbal: 6, heavy: 3 },
    colors: { primary: "#f4b7a8", secondary: "#f8d2c4", accent: "#ffd9a6" }
  },
  {
    name: "Caipirissima",
    description: "A rum-based Caipirinha variation with raw lime oils, crushed ice and bright cane freshness.",
    ingredients: ["3/4 Lime", "6 cl White Rum", "1.5 cl Sugar Syrup"],
    method: "Muddle lime wedges in a shaker, add rum and sugar syrup, shake with crushed ice and pour unstrained into an old-fashioned glass.",
    vibes: { fresh: 9, cozy: 2, bitter: 2, experimental: 2, herbal: 3, heavy: 4 },
    colors: { primary: "#b8d96d", secondary: "#dff2a6", accent: "#f4f7d0" }
  },
  {
    name: "Saronno",
    description: "Creamy brandy-laced amaretto with soft dessert warmth and nutty smoothness.",
    ingredients: ["3 cl Cognac", "3 cl Amaretto", "3 cl Cream"],
    method: "Shake all ingredients with ice and fine strain into a chilled coupe. Garnish with freshly grated nutmeg.",
    vibes: { fresh: 1, cozy: 10, bitter: 2, experimental: 5, herbal: 1, heavy: 7 },
    colors: { primary: "#5a3728", secondary: "#8f5c3f", accent: "#f0d2a7" }
  },
  {
    name: "Killer Cocktail",
    description: "A bittersweet sour where amaretto and passion fruit meet gin, red bitter and lemon.",
    ingredients: ["4.5 cl Amaretto", "3 cl Gin", "1 cl Red Bitter Aperitif", "1 cl Passion Fruit Syrup", "3 cl Lemon Juice"],
    method: "Shake all ingredients with ice and strain into a crushed-ice-filled old-fashioned glass. Garnish with lemon zest and drops of cranberry bitters or grenadine.",
    vibes: { fresh: 6, cozy: 6, bitter: 5, experimental: 7, herbal: 4, heavy: 5 },
    colors: { primary: "#7b1d22", secondary: "#d85a3a", accent: "#ffb15c" }
  },
  {
    name: "Milanese G&T",
    description: "A Gin & Tonic pushed toward Negroni territory with bitter red aperitif and herbal complexity.",
    ingredients: ["3 cl Red Bitter Aperitif", "3 cl Gin", "12 cl Tonic Water"],
    method: "Pour all ingredients into an ice-filled Collins glass, briefly stir and garnish with an orange slice.",
    vibes: { fresh: 8, cozy: 2, bitter: 8, experimental: 4, herbal: 6, heavy: 3 },
    colors: { primary: "#8a1218", secondary: "#d4482e", accent: "#ffb25f" }
  },
  {
    name: "Sorrentino Cocktail",
    description: "Limoncello brightness, sweet vermouth and red bitter lengthened into a sparkling Italian aperitivo.",
    ingredients: ["3 cl Limoncello", "3 cl Sweet Vermouth", "2.25 cl Red Bitter Aperitif", "6 cl Soda Water"],
    method: "Pour all ingredients into an ice-filled old-fashioned glass, briefly stir and garnish with dehydrated orange and thyme.",
    vibes: { fresh: 7, cozy: 4, bitter: 7, experimental: 5, herbal: 6, heavy: 3 },
    colors: { primary: "#c78b2d", secondary: "#f2c84e", accent: "#fff1b3" }
  },
  {
    name: "Spiked Arnold Palmer",
    description: "Cold black tea and limoncello create a clean, lightly boozy lemon tea highball.",
    ingredients: ["4.5 cl Limoncello", "12 cl Cold Black Tea", "0.75 cl Lemon Juice"],
    method: "Pour all ingredients into an ice-filled Collins glass, stir and garnish with a lemon slice.",
    vibes: { fresh: 8, cozy: 3, bitter: 2, experimental: 2, herbal: 3, heavy: 2 },
    colors: { primary: "#7f5a36", secondary: "#c49b62", accent: "#f5d27c" }
  },
  {
    name: "Sanguinello Cocktail",
    description: "Blood orange, limoncello and red bitter make a compact bittersweet citrus aperitif.",
    ingredients: ["3 cl Red Bitter Aperitif", "3 cl Limoncello", "3 cl Blood Orange Juice"],
    method: "Shake all ingredients with ice and strain into an ice-filled old-fashioned glass. Garnish with a blood orange slice.",
    vibes: { fresh: 8, cozy: 2, bitter: 6, experimental: 4, herbal: 4, heavy: 3 },
    colors: { primary: "#7f1015", secondary: "#c92d2d", accent: "#ff8b63" }
  },
  {
    name: "Penicillin",
    description: "Smoky Scotch, honey, ginger and lemon make a warm, medicinal modern classic.",
    ingredients: ["4.5 cl Blended Scotch Whisky", "1.5 cl Ginger Liqueur", "1 cl Peated Single Malt Whisky", "2 cl Lemon Juice", "2 cl Honey Syrup"],
    method: "Shake all ingredients with ice and strain into an ice-filled old-fashioned glass. Garnish with crystallised ginger.",
    vibes: { fresh: 5, cozy: 9, bitter: 2, experimental: 7, herbal: 4, heavy: 7 },
    colors: { primary: "#6a4728", secondary: "#b7804d", accent: "#f0d28a" }
  },
  {
    name: "Roman Highball",
    description: "A refreshing amaro and ginger highball with lime sharpness and Pimm's Cup-like ease.",
    ingredients: ["4.5 cl Amaro", "2.25 cl Ginger Liqueur", "1.5 cl Lime Juice", "5 cl Soda Water"],
    method: "Shake the first three ingredients with ice, strain into an ice-filled highball glass and top with soda. Garnish with crystallised ginger.",
    vibes: { fresh: 7, cozy: 3, bitter: 6, experimental: 5, herbal: 7, heavy: 3 },
    colors: { primary: "#6d2b1f", secondary: "#b14b2b", accent: "#ffb06d" }
  },
  {
    name: "South Side Rickey",
    description: "A minty gin highball with lime freshness, light sweetness and soda lift.",
    ingredients: ["6 cl Gin", "3 cl Lime Juice", "2.25 cl Sugar Syrup", "Mint", "4 cl Soda Water"],
    method: "Shake the first four ingredients with ice, strain into an ice-filled Collins glass and top with soda. Garnish with lime and mint.",
    vibes: { fresh: 10, cozy: 1, bitter: 1, experimental: 2, herbal: 7, heavy: 3 },
    colors: { primary: "#0f2a1d", secondary: "#1d5a37", accent: "#8ff5b1" }
  },
  {
    name: "Rome With a View",
    description: "Herbal bittersweetness with zesty lime freshness and a long sparkling aperitivo feel.",
    ingredients: ["3 cl Red Bitter Aperitif", "3 cl Dry Vermouth", "3 cl Lime Juice", "1.5 cl Sugar Syrup", "4.5 cl Soda Water"],
    method: "Shake the first four ingredients with ice, strain into an ice-filled Collins glass and top with soda. Garnish with an orange slice.",
    vibes: { fresh: 8, cozy: 2, bitter: 7, experimental: 5, herbal: 6, heavy: 2 },
    colors: { primary: "#b71d2b", secondary: "#f28c7c", accent: "#ffd2b3" }
  },
  {
    name: "Stone Wheel",
    description: "Herbal tequila, lime, ginger, vanilla and cider make a complex sparkling long drink.",
    ingredients: ["4 cl Reposado Tequila", "0.5 cl Green Chartreuse", "0.75 cl Vanilla Syrup", "0.75 cl Ginger Syrup", "2 cl Lime Juice", "7.5 cl Dry Cider"],
    method: "Shake the first five ingredients with ice, strain into an ice-filled Collins glass and top with dry cider. Garnish with an apple slice.",
    vibes: { fresh: 7, cozy: 5, bitter: 4, experimental: 8, herbal: 8, heavy: 4 },
    colors: { primary: "#2a1812", secondary: "#6a3a24", accent: "#d8894d" }
  },
  {
    name: "Nautilus",
    description: "A tequila and cranberry highball with Margarita-like lime brightness and light berry tartness.",
    ingredients: ["6 cl Reposado Tequila", "6 cl Cranberry Juice", "3 cl Lime Juice", "1.5 cl Sugar Syrup"],
    method: "Shake all ingredients with ice and strain into an ice-filled Collins glass. Serve with a straw and garnish with mint.",
    vibes: { fresh: 8, cozy: 2, bitter: 2, experimental: 4, herbal: 2, heavy: 4 },
    colors: { primary: "#8a2435", secondary: "#d65c75", accent: "#ffb3b8" }
  },
  {
    name: "Absinthe Spider Highball",
    description: "Absinthe and ginger ale combine into a low-ABV highball with aniseed bite and refreshing spice.",
    ingredients: ["1.5 cl Absinthe", "2 dashes Angostura Bitters", "12 cl Ginger Ale"],
    method: "Pour all ingredients into an ice-filled highball glass and garnish with a lime wedge.",
    vibes: { fresh: 7, cozy: 2, bitter: 5, experimental: 9, herbal: 10, heavy: 2 },
    colors: { primary: "#9bcf7a", secondary: "#d9f2c2", accent: "#f4ffe1" }
  },
  {
    name: "Paloma (Simple)",
    description: "Long, fruity and refreshing: tequila, lime and pink grapefruit soda in its simplest form.",
    ingredients: ["5 cl Blanco Tequila", "0.75 cl Lime Juice", "12 cl Grapefruit Soda"],
    method: "Pour ingredients into an ice-filled Collins glass and briefly stir. Optionally salt the rim and garnish with grapefruit.",
    vibes: { fresh: 9, cozy: 1, bitter: 3, experimental: 2, herbal: 1, heavy: 3 },
    colors: { primary: "#f7b7a3", secondary: "#ffd8c9", accent: "#ff9270" }
  },
  {
    name: "Elderflower Collins",
    description: "A floral Collins with elderflower softness, lemon brightness and subtle maraschino depth.",
    ingredients: ["5 cl Gin", "1.5 cl Elderflower Liqueur", "0.5 cl Maraschino Liqueur", "3 cl Lemon Juice", "1 cl Sugar Syrup", "2.5 cl Soda Water"],
    method: "Shake the first five ingredients with ice and strain into an ice-filled Collins glass whilst pouring soda. Garnish with elderflowers, gypsophila or a lemon wheel.",
    vibes: { fresh: 9, cozy: 2, bitter: 1, experimental: 4, herbal: 7, heavy: 2 },
    colors: { primary: "#edf4e4", secondary: "#c7d9b5", accent: "#dce8c8" }
  },
  {
    name: "Lynchburg Lemonade",
    description: "Tennessee whiskey sharpened by citrus and stretched into a bright sparkling long drink.",
    ingredients: ["4 cl Tennessee Whiskey", "2.5 cl Triple Sec", "2.5 cl Lemon Juice", "5 cl Lemon-Lime Soda"],
    method: "Shake whiskey, triple sec and lemon juice with ice, strain into an ice-filled Collins glass and top with lemon-lime soda.",
    vibes: { fresh: 8, cozy: 4, bitter: 1, experimental: 3, herbal: 2, heavy: 3 },
    colors: { primary: "#d8a24d", secondary: "#f2d27a", accent: "#fff0b3" }
  },
  {
    name: "Negroni Sbagliato",
    description: "A sparkling lighter Negroni balancing sweet vermouth, bitter aperitif and prosecco bubbles.",
    ingredients: ["3 cl Sweet Vermouth", "3 cl Red Bitter Aperitif", "3 cl Prosecco"],
    method: "Pour all ingredients into an ice-filled glass, briefly stir and garnish with orange.",
    vibes: { fresh: 6, cozy: 3, bitter: 9, experimental: 3, herbal: 7, heavy: 2 },
    colors: { primary: "#8d1017", secondary: "#d4482e", accent: "#ffb06d" }
  }
];