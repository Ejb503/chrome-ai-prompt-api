import { products as IMPORTEDPRODUCTS } from "../const/product";

function useProductCues() {
  const cuesText = `
    – What age group do they belong to? How does this influence preferences? 
    – How do they identify? How does this influence preferences?
    `;
  const products = [...IMPORTEDPRODUCTS].slice(0, 1);

  return { cuesText, products };
}

export default useProductCues;
