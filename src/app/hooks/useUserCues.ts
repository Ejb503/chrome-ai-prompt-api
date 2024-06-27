import { products as IMPORTEDPRODUCTS } from "../const/product";

function useUserCues() {
  const cuesText = `
    – What age group do they belong to? How does this influence preferences? 
    – How do they identify? How does this influence preferences?
    `;
  const products = [...IMPORTEDPRODUCTS].slice(1, 2);

  return { cuesText, products };
}

export default useUserCues;
