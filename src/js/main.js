import productList from "./productList.mjs";
import cartItemSuperscript from "./superscript.js";
import { loadHeaderFooter } from "./utils.mjs";

productList("tents", ".product-list");

async function main() {
  await loadHeaderFooter();
  cartItemSuperscript();
}

main();
