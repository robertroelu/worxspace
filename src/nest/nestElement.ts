// import { loadElement } from '$utils/loadElement';
// import { queryElements } from '$utils/queryElements';

// import { loadElement } from './loadElement';
// import { queryElements } from './queryElement';

// export const nestedElement = () => {
//   const instances: HTMLElement[] = queryElements('[nested-collection-element="target"]');
//   if (!instances.length) return;

//   instances.forEach((instance) => {
//     const nestTarget = instance;

//     const attributeValues = [
//       // 'nested-collection-item-slug',
//       'nested-collection-slug',
//       'nested-collection-id',
//     ].map((attribute) => nestTarget.getAttribute(attribute));

//     // const [collectionItemSlug, collectionSlug, collectionId] = attributeValues;
//     // if (!collectionItemSlug || !collectionSlug || !collectionId) return;

//     const [collectionSlug, collectionId] = attributeValues;
//     if (!collectionSlug || !collectionId) return;

//     loadElement(nestTarget, collectionSlug, collectionId);
//   });
// };

import { loadElement } from './loadElement';
import { queryElements } from './queryElement';

export const nestedElement = (): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const instances: HTMLElement[] = queryElements('[nested-collection-element="target"]');
      if (!instances.length) {
        resolve(); // Resolve immediately if no instances are found
        return;
      }

      // Using for...of to handle async/await inside the loop
      for (const instance of instances) {
        const nestTarget = instance;

        const attributeValues = ['nested-collection-slug', 'nested-collection-id'].map(
          (attribute) => nestTarget.getAttribute(attribute)
        );

        const [collectionSlug, collectionId] = attributeValues;
        if (!collectionSlug || !collectionId) {
          continue; // Skip this instance if necessary attributes are missing
        }

        // Wait for loadElement to complete before moving to the next instance
        await loadElement(nestTarget, collectionSlug, collectionId);
      }

      // Resolve the Promise after everything is processed
      resolve();
    } catch (error) {
      reject(error); // If there's an error, reject the Promise
    }
  });
};
